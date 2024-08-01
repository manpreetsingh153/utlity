'use client'
import React, { useState, useEffect } from 'react';

export default function Wait({ time, children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      console.log(5000)
    }, time);

    return () => clearTimeout(timer);
  }, [time]);

  return isVisible ? <>{children}</> : null;
}

// // To use the WaitComponent
// function App() {
//   return (
//     <div>
//       <Wait time={2000}>
//         <h1>This will appear after 2 seconds</h1>
//       </Wait>
//     </div>
//   );
// }

// export default App;
