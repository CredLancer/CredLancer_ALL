import { BrowserRouter, Routes, Route} from "react-router-dom";
import LancerProfile from "../LancerProfile/LancerProfile";
import Home from "../Homepage/Home";
import LoginPage from "../Homepage/loginPage/LoginPage"
import BackOfficePage from "../BackOffice";

const Page = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/LancerProfile" element={<LancerProfile/>}/>
          <Route path="/ConnectWallet" element={<LoginPage/>}/>
          <Route path="/BackOffice" element={<BackOfficePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Page