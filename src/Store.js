import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { coupons } from "./Coupon";
import apiurl from "./Axios";


// ===================== Coupon slice =====================
const couponSlice = createSlice({
  name: "coupon",
  initialState: {
    code: "",
    discount: 0,
    applied: false,
    message: "",
  },
  reducers: {
    applyCoupon: (state, action) => {
      const enteredcode = action.payload.toUpperCase();

      if (coupons[enteredcode]) {
        state.code = enteredcode;
        state.discount = coupons[enteredcode];
        state.applied = true;
        state.message = `Coupon "${enteredcode}" Applied! You got ${coupons[enteredcode]}% off`;
      } else {
        state.code = "";
        state.discount = 0;
        state.applied = false;
        state.message = "Invalid coupon code";
      }
    },
  },
});


// ===================== Cart slice with LocalStorage =====================
const initialCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action) => {
      let item = state.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      const updatedCart = state.filter((i) => i.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    },

    incrementItem: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(state));
    },

    decrementItem: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          localStorage.setItem("cartItems", JSON.stringify(state));
        } else {
          const updatedCart = state.filter((i) => i.id !== action.payload);
          localStorage.setItem("cartItems", JSON.stringify(updatedCart));
          return updatedCart;
        }
      }
    },

    CLEAR_CART: () => {
      localStorage.removeItem("cartItems");
      return [];
    }
  }
});




// ===================== Veg products fetch thunk =====================
export const fetchVegProducts = createAsyncThunk(
  "vegProducts/fetch",
  async () => {
    const response = await axios.get("/api/v1/products/vegProducts");
    return response.data;
  }
);
// ===================== Non-veg products fetch thunk =====================
export const fetchNonVegProducts = createAsyncThunk(
  "nonVegProducts/fetch",
  async () => {
    const response = await axios.get("/api/v1/products/nonVegProducts");
    return response.data;
  }
);



// ===================== Orders thunks =====================
export const placeOrder = createAsyncThunk(
  "orders/placeOrder",
  async (orderData) => {
    const res = await apiurl.post("/api/v1/products/orders", orderData);
    return res.data;
  }
);

export const getAllOrders = createAsyncThunk(
  "orders/getAllOrders",
  async () => {
    const res = await apiurl.get("/api/v1/products/orders");
    return res.data;
  }
);


// ===================== Veg slice =====================
// const vegSlice = createSlice({
//   name: "veg",
//   initialState: {
//     vegItems: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchVegProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchVegProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.vegItems = action.payload;
//       })
//       .addCase(fetchVegProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });
const vegSlice = createSlice({
  name: "vegProducts",
  initialState: {
    vegProducts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVegProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVegProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.vegProducts = action.payload; // <-- data from API
      })
      .addCase(fetchVegProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
// ===================== NonVeg slice =====================
const nonVegSlice = createSlice({
  name: "nonVeg",
  initialState: {
    nonVegProducts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNonVegProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNonVegProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.nonVegProducts = action.payload; // set the data from API
      })
      .addCase(fetchNonVegProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
const nonVegReducer = nonVegSlice.reducer;

// ===================== New checkout thunk =====================
export const checkout = createAsyncThunk(
  "orders/checkout",
  async (orderData, { dispatch, rejectWithValue }) => {
    try {
      // Dispatch placeOrder internally
      const resultAction = await dispatch(placeOrder(orderData));

      if (placeOrder.fulfilled.match(resultAction)) {
        // On success clear the cart
        dispatch(CLEAR_CART());
        return resultAction.payload;
      } else {
        // On failure reject with error message
        return rejectWithValue(resultAction.error.message || "Order failed");
      }
    } catch (error) {
      return rejectWithValue(error.message || "Checkout failed");
    }
  }
);



// ===================== Orders slice =====================
const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message || "Order placed successfully";
        if (action.payload.order) state.orders.push(action.payload.order);
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to place order";
      })

      .addCase(getAllOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch orders";
      });
  },
});


// ===================== USER SLICE (Registration + Login Combined) =====================

// Registration thunk
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/api/v1/products/register",
        userData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Registration failed"
      );
    }
  }
);

// Login thunk
export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/api/v1/products/login",
        { email, password }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);


// User slice (same — no disturbance)
const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    loading: false,
    token:localStorage.getItem("token")||null,
    error: null,
    successMessage: null,
    isAuthenticated: false,
  },
  reducers: {
    clearMessages(state) {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Registration
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message || "Registered successfully!";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })

      // Login
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.isAuthenticated = true;
        state.token=action.payload.token;
        localStorage.setItem("token",action.payload.token);

      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

export const { clearMessages } = userSlice.actions;


// ===================== Store =====================
export const {
  addToCart,
  removeFromCart,
  incrementItem,
  decrementItem,
  CLEAR_CART,
} = cartSlice.actions;

export const { applyCoupon } = couponSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    coupon: couponSlice.reducer,
    veg: vegSlice.reducer,
    nonVeg: nonVegReducer,  // add here just like veg
    orders: ordersSlice.reducer,
    user: userSlice.reducer,   // ⬅ only once
  },
});

export default store;
