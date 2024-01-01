import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import topImage from "./assets/top.svg";
import logoImage from "./assets/Logo.svg";
import checkBoxImage from "./assets/checkBox.svg";
import imageLeftOne from "./assets/imageLeftOne.svg";
import imageLeftTwo from "./assets/imageLeftTwo.svg";
import imageLeftThree from "./assets/imageLeftThree.svg";
import imageMiddleOne from "./assets/imageMiddleOne.svg";
import imageMiddleTwo from "./assets/imageMiddleTwo.svg";
import imageMiddleThree from "./assets/imageMiddleThree.svg";
import imageRightOne from "./assets/imageRightOne.svg";
import imageRightTwo from "./assets/imageRightTwo.svg";
import imageRightThree from "./assets/imageRightThree.svg";

const GlobalStyle = createGlobalStyle`
  html,
    body {
      font-family: 'Inter', sans-serif;
  }

  body {
    margin: 0;
  }
  header {
    margin: 0;
    padding: 0;
  }
`;

const MobileContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  .image img {
    margin-bottom: 32px;
  }

  .logo img {
    margin-left: 24px;
  }
  .frase p {
    margin-left: 24px;
    margin-bottom: 32px;
    margin-right: 57px;
    color: #3e334e;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
  }

  .inputContainer p {
    margin-left: 24px;
    color: #3e334e;
    font-size: 24px;
    font-weight: 600;
    line-height: 100%;
  }

  .inputContainer label,
  .inputContainerPassword label {
    margin-left: 24px;
    color: #3e334e;
    font-size: 16px;
    font-weight: 600;
    line-height: 100%;
  }

  .inputContainer input,
  .inputContainerPassword input {
    margin-bottom: 24px;
    margin-top: 8px;
    margin-left: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    width: 360px;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #afa2c3;
    background: rgba(255, 255, 255, 0);
    position: relative;
    color: #3e334e;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding-left: 16px;
  }

  .inputContainerPassword input {
    background-image: url("src/assets/eyeOff.svg");
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 24px 24px;
    margin-bottom: 24px;
  }

  .remember img {
    padding-left: 24px;
    vertical-align: middle;
  }

  .remember label {
    padding-left: 8px;
    color: #3e334e;
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
    vertical-align: middle;
  }

  .remember a {
    padding-left: 110px;
    color: #3e334e;
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
    text-decoration-line: underline;
  }

  .buttonSignUp,
  .buttonLogin {
    width: 178px;
    height: 48px;
    padding: 16px;
    border-radius: 8px;
    margin-top: 24px;
    margin-left: 24px;
    border: none;
  }

  .buttonLogin {
    background: #3e334e;
    color: #ffffff;
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
  }

  .buttonSignUp {
    background: white;
    border: 1px solid #3e334e;
    color: #3e334e;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
  }

  .orLogin label {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #3e334e;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    margin-bottom: 16px;
    margin-left: 24px;
    margin-top: 24px;
  }

  .buttonFacebook,
  .buttonLinked,
  .buttonGoogle {
    width: 116px;
    height: 38px;
    padding: 12px 16px;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    flex: 1 0 0;
    border-radius: 4px;
    border: 1px solid #afa2c3;
    background: #ffffff;
    color: #3e334e;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }

  .buttonFacebook {
    margin-left: 24px;
  }

  .buttonLinked,
  .buttonGoogle {
    margin-left: 16px;
  }
`;

const ImageLeftOne = styled.img`
  margin-bottom: 18px;
`;

const ImageLeftTwo = styled.img`
  margin-bottom: 18px;
`;

const ImageLeftThree = styled.img`
  margin-bottom: 18px;
`;

const ImageMiddleOne = styled.img`
  margin-bottom: 18px;
`;

const ImageMiddleTwo = styled.img`
  margin-bottom: 18px;
`;

const ImageMiddleThree = styled.img`
  margin-bottom: 18px;
`;

const ImageRightOne = styled.img`
  margin-bottom: 18px;
`;

const ImageRightTwo = styled.img`
  margin-bottom: 18px;
`;

const ImageRightThree = styled.img`
  margin-bottom: 18px;
`;

const DesktopContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  padding-left: 48px;
  background: linear-gradient(to right, #191a24 54.5%, #ffffff 50%);

  > div {
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      margin-right: 8px; // Ajuste o valor conforme necessário
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 50px;
  }

  .inputContainer p {
    margin-left: 24px;
    color: #3e334e;
    font-size: 24px;
    font-weight: 600;
    line-height: 100%;
  }

  .inputContainer label,
  .inputContainerPassword label {
    margin-left: 24px;
    color: #3e334e;
    font-size: 16px;
    font-weight: 600;
    line-height: 100%;
  }

  .inputContainer input,
  .inputContainerPassword input {
    margin-bottom: 24px;
    margin-top: 8px;
    margin-left: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    width: 360px;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #afa2c3;
    background: rgba(255, 255, 255, 0);
    position: relative;
    color: #3e334e;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding-left: 16px;
  }

  .inputContainerPassword input {
    background-image: url("src/assets/eyeOff.svg");
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 24px 24px;
    margin-bottom: 24px;
  }

  .remember img {
    padding-left: 24px;
    vertical-align: middle;
  }

  .remember label {
    padding-left: 8px;
    color: #3e334e;
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
    vertical-align: middle;
  }

  .remember a {
    padding-left: 110px;
    color: #3e334e;
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
    text-decoration-line: underline;
  }

  .buttonSignUp,
  .buttonLogin {
    width: 178px;
    height: 48px;
    padding: 16px;
    border-radius: 8px;
    margin-top: 24px;
    margin-left: 24px;
    border: none;
  }

  .buttonLogin {
    background: #3e334e;
    color: #ffffff;
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
  }

  .buttonSignUp {
    background: white;
    border: 1px solid #3e334e;
    color: #3e334e;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
  }

  .buttonFacebook,
  .buttonLinked,
  .buttonGoogle {
    width: 116px;
    height: 38px;
    padding: 12px 16px;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    flex: 1 0 0;
    border-radius: 4px;
    border: 1px solid #afa2c3;
    background: #ffffff;
    color: #3e334e;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }

  .buttonFacebook {
    margin-left: 40px;
  }

  .buttonLinked,
  .buttonGoogle {
    margin-left: 16px;
  }
`;

const Logo = styled.img`
  padding-top: 130px;
  padding-right: 130px;
  padding-bottom: 40px;
`;

const Frase = styled.label`
  padding-left: 40px;
  padding-right: 40px;

  color: #3e334e;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
`;

const OrLogin = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #3e334e;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  margin-bottom: 16px;
  margin-right: 144px;
  margin-top: 24px;
`;

const App = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <GlobalStyle />
      {isMobile ? (
        <MobileContainer>
          <header className='image'>
            <img src={topImage} alt='top' />
          </header>

          <header className='logo'>
            <img src={logoImage} alt='logo' />
          </header>

          <header className='frase'>
            <p>
              A new way to experience real state in the infinite virtual space.
            </p>
          </header>

          <form>
            <div className='inputContainer'>
              <p>Login</p>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                name='email'
                id='email'
                placeholder='robert.langster@gmail.com'
              />
            </div>

            <div className='inputContainerPassword'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='*************'
              />
            </div>

            <header className='remember'>
              <img src={checkBoxImage} alt='checkBox' />
              <label>Remember me</label>
              <a href='/'>Forgot password?</a>
            </header>

            <div className='buttonContainer'>
              <button className='buttonLogin'>Login</button>
              <button className='buttonSignUp'>Sign Up</button>
            </div>

            <header className='orLogin'>
              <label>Or, login with</label>
            </header>

            <div className='buttonSocialContainer'>
              <button className='buttonFacebook'>Facebook</button>
              <button className='buttonLinked'>Linked In</button>
              <button className='buttonGoogle'>Google</button>
            </div>
          </form>
        </MobileContainer>
      ) : (
        <DesktopContainer>
          <div>
            <ImageLeftOne src={imageLeftOne} alt='imageLeft1' />
            <ImageLeftTwo src={imageLeftTwo} alt='imageLeft2' />
            <ImageLeftThree src={imageLeftThree} alt='imageLeft3' />
          </div>

          <div>
            <ImageMiddleOne src={imageMiddleOne} alt='imageMiddle1' />
            <ImageMiddleTwo src={imageMiddleTwo} alt='imageMiddle2' />
            <ImageMiddleThree src={imageMiddleThree} alt='imageMiddle3' />
          </div>

          <div>
            <ImageRightOne src={imageRightOne} alt='imageimageRight1' />
            <ImageRightTwo src={imageRightTwo} alt='imageimageRight1' />
            <ImageRightThree src={imageRightThree} alt='imageimageRight1' />
          </div>

          <form>
            <div>
              <Logo src={logoImage} alt='logo' />
            </div>

            <div>
              <Frase>
                A new way to experience real state in the infinite virtual
                space.
              </Frase>
            </div>
            <div className='inputContainer'>
              <p>Login</p>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                name='email'
                id='email'
                placeholder='robert.langster@gmail.com'
              />
            </div>

            <div className='inputContainerPassword'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='*************'
              />
            </div>

            <header className='remember'>
              <img src={checkBoxImage} alt='checkBox' />
              <label>Remember me</label>
              <a href='/'>Forgot password?</a>
            </header>

            <div className='buttonContainer'>
              <button className='buttonLogin'>Login</button>
              <button className='buttonSignUp'>Sign Up</button>
            </div>

            <div>
              <OrLogin>Or, login with</OrLogin>
            </div>

            <div className='buttonSocialContainer'>
              <button className='buttonFacebook'>Facebook</button>
              <button className='buttonLinked'>Linked In</button>
              <button className='buttonGoogle'>Google</button>
            </div>
          </form>
        </DesktopContainer>
      )}
    </>
  );
};

export default App;