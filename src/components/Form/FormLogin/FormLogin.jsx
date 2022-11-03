import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

import logoGoogle from '../../../assets/images/logoGoogle.png';
import './formLogin.scss';
import userSignin from '../../../assets/images/user.png';
import auth from '../../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { loginFirebase, register, login } from '../../../actions/userAction';
import { async } from '@firebase/util';

function FormLogin({
  setUserLogin,
  handleOpenFormLogin,
  handleCloseFormLogin,
  openFormLogin,
  setOpenFormLogin,
  display,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.cartReducer);
  const { error, user } = useSelector((state) => state.userReducer);
  const [changeForm, setChangeForm] = useState('login');
  const [formDataRegister, updateFormDataRegister] = React.useState();
  const [formDataLogin, updateFormDataLogin] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenuUser = Boolean(anchorEl);

  const handleChangeRegister = (e) => {
    updateFormDataRegister({
      ...formDataRegister,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };
  console.log('check formRegister: ', formDataRegister);
  const handleChangeLogin = (e) => {
    updateFormDataLogin({
      ...formDataLogin,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };
  console.log('check login: ', JSON.stringify(formDataRegister));
  const handleChangeForm = (e, form) => {
    e.preventDefault();
    setChangeForm(form);
  };

  const registerUser = () => {
    dispatch(register(formDataRegister));
  };

  const loginUser = async () => {
    dispatch(login(formDataLogin));
  };

  const loginGoogle = useCallback(async (event) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const token = await auth?.currentUser?.getIdToken(true);
        if (token) {
          localStorage.setItem('@token', token);
          navigate('/');
        }
        console.log('check result: ', result);
        setUserLogin(result);
        dispatch(loginFirebase(result));
        setOpenFormLogin(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const logoutGoogle = useCallback(() => {
    setAnchorEl(null);
    signOut(auth)
      .then(() => {
        setUserLogin(null);
        localStorage.removeItem('@token');
      })
      .catch((error) => {
        console.error(error);
      });
  });

  useEffect(() => {
    if (!error && user) {
      let userLoginInfo = JSON.parse(localStorage.getItem('userLogin'));
      if (userLoginInfo && setUserLogin) {
        setUserLogin(userLoginInfo);
      }
      setOpenFormLogin(false);
    }
  }, [user]);

  return (
    <div className='form-login'>
      <Button
        sx={{ display: display || 'block' }}
        className='btn-login'
        onClick={handleOpenFormLogin}
      >
        <img className='img-login' src={userSignin} alt='userLogin' />
      </Button>
      <Modal
        open={openFormLogin}
        onClose={handleCloseFormLogin}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className='form-login-container'>
          <div className='form-login-content'>
            <div className='left'></div>
            {changeForm === 'register' ? (
              <div className='log-in'>
                <h4 className='login-form-title'>
                  We are <span>TIME</span>
                </h4>
                <p className='login-form-description'>
                  Hi there! Let join with us.
                </p>
                <div className='d-flex'>
                  <div className='floating-label'>
                    <input
                      onChange={(e) => handleChangeRegister(e)}
                      placeholder='Username'
                      type='email'
                      name='username'
                      id='email'
                      autoComplete='off'
                    />
                    <label htmlFor='email'>Username</label>
                  </div>
                  <div className='floating-label'>
                    <input
                      onChange={(e) => handleChangeRegister(e)}
                      placeholder='Password'
                      type='password'
                      name='password'
                      id='password'
                      autoComplete='off'
                    />
                    <label htmlFor='password'>Password:</label>
                  </div>
                </div>
                <div className='floating-label'>
                  <input
                    onChange={(e) => handleChangeRegister(e)}
                    placeholder='Fullname'
                    type='text'
                    name='fullName'
                    id='fullname'
                    autoComplete='off'
                  />
                  <label htmlFor='fullname'>Fullname:</label>
                </div>
                <div className='floating-label'>
                  <input
                    onChange={(e) => handleChangeRegister(e)}
                    placeholder='Phone'
                    type='number'
                    name='phone'
                    id='phone'
                    autoComplete='off'
                  />
                  <label htmlFor='phone'>Phone:</label>
                </div>
                <div className='floating-label'>
                  <input
                    onChange={(e) => handleChangeRegister(e)}
                    placeholder='Address'
                    type='text'
                    name='address'
                    id='address'
                    autoComplete='off'
                  />
                  <label htmlFor='address'>Address:</label>
                </div>
                <button
                  type='submit'
                  className='btn-login'
                  onClick={() => registerUser()}
                >
                  Register
                </button>
                <div className='bottom d-flex justify-content-between align-items-center'>
                  <div className='btn-register'>
                    <button
                      className='btn btn-lg btn-dark'
                      onClick={(e) => handleChangeForm(e, 'login')}
                    >
                      Login
                    </button>
                  </div>
                  <div className='discrete' onClick={loginGoogle}>
                    <img src={logoGoogle} alt='logo google' />
                    Login with google
                  </div>
                </div>
              </div>
            ) : (
              <div className='log-in'>
                <h4 className='login-form-title'>
                  We are <span>TIME</span>
                </h4>
                <p className='login-form-description'>
                  Welcome back! Log in to your account to view today's clients:
                </p>
                {error && (
                  <small style={{ color: 'red', margin: 'auto' }}>
                    {error}
                  </small>
                )}

                <div className='floating-label'>
                  <input
                    onChange={(e) => handleChangeLogin(e)}
                    placeholder='Email'
                    type='email'
                    name='username'
                    id='email'
                    autoComplete='off'
                  />
                  <label htmlFor='email'>Email:</label>
                </div>
                <div className='floating-label'>
                  <input
                    onChange={(e) => handleChangeLogin(e)}
                    placeholder='Password'
                    type='password'
                    name='password'
                    id='password'
                    autoComplete='off'
                  />
                  <label htmlFor='password'>Password:</label>
                </div>
                <button
                  type='submit'
                  className='btn-login'
                  onClick={() => loginUser()}
                >
                  Log in
                </button>
                <div className='bottom d-flex justify-content-between align-items-center'>
                  <div className='btn-register'>
                    <button
                      className='btn btn-dark btn-lg'
                      onClick={(e) => handleChangeForm(e, 'register')}
                    >
                      Register
                    </button>
                  </div>
                  <div className='discrete' onClick={loginGoogle}>
                    <img src={logoGoogle} alt='logo google' />
                    Login with google
                  </div>
                </div>
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default FormLogin;
