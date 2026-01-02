import confetti from 'canvas-confetti';
import React from 'react'

export function BalloonsUp(duration) {
  const end = Date.now() + duration;
  (function frame(){
    confetti({
      particleCount : 30,
      angle: 90,
      spread : 20,
      startVelocity : 20,
      origin : {
        x:Math.random(),
        y:1.2
      },
      gravity:-0.3,
    });
    if(Date.now() < end){
      requestAnimationFrame(frame);
    }
  })();
}

export default BalloonsUp;