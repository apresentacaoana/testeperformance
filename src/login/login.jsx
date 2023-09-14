
import { useState } from 'react';
import tecadiLogo from '../assets/tecadi-2.svg'
import { auth } from '../controllers/auth';
import './login.css'
import YouTubeBackground from './components/YoutubeBackground';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //Como pegar o videoId ...
  const videoId = '1nN5UhBu8pM';
  const handleSubmit = async (e) => {
    e.preventDefault();

    const login = {
      username,
      password
    };
    auth(login)
  }
    return (
      <>
        <YouTubeBackground />
        <div className="absolute top-0 left-0 z-20 w-full h-full bg-[rgba(0,0,0,.9)]" />

        <div className="container z-50">
          <div className="container-login">
            <div className="login shadow-lg">
              <form className="login-form">
                <span className="login-form-title">
                  <img src={tecadiLogo} alt="Tecadi Products" />
                </span>
                <div className="login-input">
                  <input
                    className={username !== "" ? "has-val input" : "input"}
                    type="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <span className="focus-input" data-placeholder="Username"></span>
                </div>
                <div className="login-input">
                  <input
                    className={password !== "" ? "has-val input" : "input"}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="focus-input" data-placeholder="Password"></span>
                </div>
                <div className="container-login-button">
                  <button className="login-button" onClick={handleSubmit}>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Login;
