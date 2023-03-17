import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { singupUser } from 'redux/autchSlice';
import style from './register-page.module.css';
const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const idName = nanoid();
  const idEmail = nanoid();
  const idPAssword = nanoid();
  const hundleChang = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'password') setPassword(value);
    if (name === 'email') setEmail(value);
  };

  const hundleSubmit = e => {
    e.preventDefault();
    dispatch(singupUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div className={style.container}>
      <h1>Register</h1>
      <form className={style.form} onSubmit={hundleSubmit}>
        <label className={style.label} htmlFor={idName}>
          Name
        </label>
        <input
          type="name"
          className={style.input}
          id={idName}
          name="name"
          value={name}
          onChange={hundleChang}
        />
        <label className={style.label} htmlFor={idEmail}>
          Email
        </label>
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
        </label>
        <input
          type="password"
          className={style.input}
          id={idPAssword}
          name="password"
          value={password}
          onChange={hundleChang}
        />
        <button className={style.btnAdd} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
