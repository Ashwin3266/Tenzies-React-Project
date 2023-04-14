/*    Notes    */

//React should contain only one parent element
// document.getElementById("root").append(JSON.stringify(page));

/*    Exercise 1    */

// const page=
// (
//     <div>
//         <img src="./React-icon.svg.png" width="100px"></img>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally crestWased by Jordan Walke</li>
//             <li>Has well over 100K stars on Githhub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// );

// ReactDOM.render(
//     <Page/>
//     ,
//     document.querySelector("#root")
//     );


/*    Exercise 2    */

// function Page()
// {
//     return (
//         <div>
//             <img src="./React-icon.svg.png" width="100px"></img>
//             <h1>Reason im excited to learn react</h1>
//             <ol>
//                 <li>Job</li>
//                 <li>Exciting</li>
//                 <li>Interesting</li>
//                 <li>Marvellous</li>
//                 <li>Wonderful</li>
//             </ol>
//         </div>
//     );
// }

// ReactDOM.render(
//     <Page/>
//     ,
//     document.querySelector("#root")
//     );




// New Way of rendering in React 18

import ReactDOMClient from 'react-dom/client';
import App from "./App";
import "./style.css";

const container=document.getElementById("root");

const root=ReactDOMClient.createRoot(container);

root.render(<App/>);




//Old way of rendering (upto react 17)

// import ReactDom from "react-dom";
// import App from "./App";
// import "./style.css";

// ReactDom.render(
//                     <App/>
//                     ,
//                     document.querySelector("#root")
//                 )

// ReactDOM.render(
//                 <App/>
//                 ,
//                 document.querySelector("#root")
//                 );

