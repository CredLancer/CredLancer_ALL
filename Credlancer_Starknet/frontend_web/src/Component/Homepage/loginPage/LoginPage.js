import React, { useContext } from 'react';
import Header from '../../Commun/Header/header';
import Footer from '../../Commun/Footer/footer';
import './LoginPage.css';
import detectEthereumProvider from '@metamask/detect-provider';
import GitHubLogin from 'react-github-login';
import { AppContext } from '../../../AppContext';
import {
  useNavigate, 
} from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(AppContext)

  const handleMetamaskConnect = async () => {
    try {
      const provider = await detectEthereumProvider();
      if (provider) {
        await provider.request({ method: 'eth_requestAccounts' });
        const accounts = await provider.request({ method: 'eth_accounts' });
        setUserData({ metamask: accounts[0] })
        navigate("/BackOffice")
      } else {
        console.error('Metamask not detected');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loginGithubFailed = async () => {
    console.log("github login failed")
  }

  const loginGithubSuccess = async (response) => {
    setUserData({ github: response.code})
    navigate("/BackOffice")

  }
  
  console.log("userData", userData)
  return (
    <>
      <Header buttonText="Join us" />
      <div className='login'>
        <div className='login_main'>
          <div className='connect_wallet'>
            <p className='title'>Connect Your Wallet</p>
            <div className='wallet_connector'>
              <p className='welcome'>Welcome to CredLancer</p>
              <div className='avatar'></div>
              <button className='userType btn'>FreeLANCER</button>
              <br /> {
                  userData?.metamask ? 
                  <button className='metamask btn' onClick={handleMetamaskConnect}>
                      {userData.metamask.slice(0,5) + '...' + userData.metamask.substring(userData.metamask.length - 4)}
                  </button>
                  :
                  <button className='metamask btn' onClick={handleMetamaskConnect}>
                      MetaMask
                  </button>
              }
              
              <br />
              <GitHubLogin className='github btn'
                  clientId="fe5fcdd98f688933774f"
                  redirectUri="" 
                  onSuccess={ loginGithubSuccess }
                  onFailure={ loginGithubFailed }
                  buttonText="GitHub"
              />
              <br/>
              <button className='continue btn'>Continue</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
