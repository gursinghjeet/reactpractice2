// import React, { useState } from "react";

// const App = () => {
//   //useState hook

//   const [value, setValue] = useState(0);

//   function add() {
//     setValue(value + 1);
//   }

//   return (
//     <div>
//       <div>{value}</div>

//       <button onClick={add}>Increament</button>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import navbar from'./Navbar/navbar';
const App = () => {
  return (
    <navbar/>
    <Hero/>
    <Section1/>

  )
}

export default App
