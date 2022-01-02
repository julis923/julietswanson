import { useEffect } from 'react';

const ResizeFunction = (state1, state2, state3) => {
    useEffect(() => {
      window.addEventListener('resize', () => {
        state1(true)
        setTimeout(() => {
          state1(false)
        }, 1500)
  
        if (window.innerWidth > 1080) {
          state2(false)
          if (state3) state3(false);
        }
      })
  
      return () => {
        window.removeEventListener('resize', null)
      }
    })
}

export default ResizeFunction;