import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/autchSlice';
import style from './login-page.module.css';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const idEmail = nanoid();

  const idPAssword = nanoid();
  const dispatch = useDispatch();
  const hundleChang = e => {
    const { name, value } = e.target;
    if (name === 'password') setPassword(value);
    if (name === 'email') setEmail(value);
  };

  const hundleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Login</h1>

      <form className={style.form} onSubmit={hundleSubmit}>
        <label className={style.label} htmlFor={idEmail}>
          Email
        </label>{' '}
        <input
          type="email"
          className={style.input}
          id={idEmail}
          name="email"
          value={email}
          onChange={hundleChang}
        />
        <label className={style.label} htmlFor={idPAssword}>
          Password
        </label>{' '}
        <input
          type="text"
          className={style.input}
          id={idPAssword}
          name="password"
          value={password}
          onChange={hundleChang}
        />
        <button className={style.btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
