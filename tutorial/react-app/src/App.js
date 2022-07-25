// Menggunakan state
import { useState } from "react"
function App() {
  const [title, setTitle] = useState("Hello World");
  const changeTitle = () => {
    setTitle("Title Changed");
  }
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Change Title</button>
    </div>
  );
}
export default App;


// // Event with value
// import Header from "./components/Header";
// function App() {
//   const clickMe = (name) => {
//     console.log('Hello: '+ name);
//   }
//   return (
//     <div>
//       <Header />
//       <button onClick={ () => clickMe('Test kirim var') }>Click Me</button>
//     </div>
//   );
// }
// export default App;

// Event doang
// import Header from "./components/Header";
// function App() {
//   const clickMe = () => {
//     console.log('Clicked');
//   }
//   return (
//     <div>
//       <Header />
//       <button onClick={ clickMe }>Click Me</button>
//     </div>
//   );
// }
// export default App;



// import Header from "./components/Header";
// // function App() {
// //   return (
// //     <div>
// //       <Header/>
// //       <h2> Hello dunia</h2>
// //     </div>
// //   );
// // }

// function App() {
//   const clickMe = () => {
//     console("clicked Me");
//   };
//   return (
//     <div>
//       <Header />
//       <button onClick={clickMe}>Klik Me</button>
//     </div>
//   )
// }
// export default App;
