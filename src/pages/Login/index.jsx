import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../../components/Store/Context';

// const [login, setLogin] = useState("");
// const [password, setPassword] = useState("");

function initialState() {
  return { login: '', password: '' };
}

// //VERIFICAR SER O USUARIO EXISTE:
function loginInicial({ login, password }) {
  if (login === 'admin' && password === 'admin') {
    return { token: 1234 };
  }
  return { error: 'Usuário ou senha inválido' };
}


const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = UserContext();
  const navigate = useNavigate();


  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = loginInicial(values);

    if (token) {
      setToken(token);
      localStorage.setItem('token', JSON.stringify(token));
      navigate('/home');
    }

    setError(error);
    setValues(initialState);
  }



  return (
    <div className='container'>
      <div className='container-login'>
        <div className='wrap-login'>
          <form className='login-form' onSubmit={onSubmit}>
            <h1 className='login-form-title'>Bem Vindo</h1>

            <div className='wrap-input'>
              <input type='text' name='login' placeholder='Login' value={values.login} onChange={onChange} />
            </div>

            <div className='wrap-input'>
              <input type='password' name='password' placeholder='Password' value={values.password} onChange={onChange} />
            </div>
            {error && (
              <div className="user-login__error">{error}</div>
            )}

            <div className='container-login-form-btn'>
              <button type="submit" className='container-form-btn' >Login</button>
            </div>

            <div className='text-center'>
              <button type="submit" className='txt1'>Não possui conta?</button>
              <a className='text2' href=''>Cria conta</a>
            </div>
          </form>

        </div>

      </div>

    </div>
  )
}
export default UserLogin;
