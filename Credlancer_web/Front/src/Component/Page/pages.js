import { BrowserRouter, Routes, Route} from "react-router-dom";
import LancerProfile from "../LancerProfile/LancerProfile";
import Home from "../Homepage/Home";

const Page = () => {
  return (
    <div className="main">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/LancerProfile" element={<LancerProfile/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Page