import Page from "./Component/Page/pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'tailwindcss/tailwind.css';
import  "./App.css" 
import { AppContext } from "./AppContext";
import { useState } from "react";

const App = () => {
  const[userData, setUserData] = useState(null);
  
  return (
    <AppContext.Provider value={{ userData, setUserData }}>
      <Page />
    </AppContext.Provider>
  )
}
export default App