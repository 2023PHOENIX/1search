import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Routes from "./component/RoutesLinks";

import {useState} from "react";
function App() {

  let [darkTheme,setDarkTheme] = useState(false);


  return (
    <div className={darkTheme ? 'dark' : ''}>


      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">

      {/*   <h1 className="text-3xl font-bold underline">Hello world..!</h1> */}

      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>

      <Routes />
      <Footer />
      </div>
    </div>
  );
}

export default App;
