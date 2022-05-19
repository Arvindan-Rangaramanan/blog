import React, { useState } from 'react';
import login from '../imgs/Login.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameChange = (event) => {
    setUsername(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const submit = (e) => {
    console.log(username);
    console.log(password);
    e.preventDefault();
  };

  return (
    <div className="pt-[10rem] px-5 mx-auto max-w-md h-auto grid lg:max-w-[1640px]  lg:grid-cols-8 ">
      <div className="p-6 lg:p-3 lg:ml-10 self-center max-w-[550px] lg:col-span-3 lg:px-8">
        <header className="w-full text-center ">
          <h1 className="font-cinzel flex items-start lg:inline-block  font-extrabold text-4xl">
            Welcome !
          </h1>
          <br />
          <h3 className="font-spectral flex items-start lg:inline-block  font-normal text-xl">
            Please enter the details
          </h3>
        </header>
        <section className="py-5">
          <form className="flex flex-col items-start " action="">
            <label
              className="font-spectral pb-2 text-2xl font-extralight"
              htmlFor=""
            >
              E-mail
            </label>
            <input
              className="font-spectral w-full px-3 py-2  border-solid border-2 focus:outline-none focus:border-red-600 focus:ring-red-600 "
              type="email"
              name="email"
              id="email"
              onChange={usernameChange}
              placeholder="abc@xyz.com"
              required
            />
            <br />
            <label
              className="font-spectral pb-2 text-2xl font-extralight"
              htmlFor=""
            >
              Password
            </label>
            <input
              onChange={passwordChange}
              className="font-spectral w-full px-3 py-2 mb-5 border-solid border-2  focus:outline-none focus:border-red-600 focus:ring-red-600 "
              type="password"
              name="password"
              id="password"
              placeholder="8+ characters"
              required
            />
          </form>
          <button
            onClick={submit}
            className="font-spectral bg-black w-full px-4 py-3 mt-8 mb-2 text-white text-xl hover:bg-red-600"
          >
            SIGN UP
          </button>
        </section>
        <section className="font-spectral text-center ">
          Already a member?{' '}
          <span className="font-spectral text-blue-800 underline text-xl cursor-pointer hover:text-red-600">
            <Link to="/login">Sign in</Link>
          </span>
        </section>
      </div>
      <div className="loginImg hidden lg:block lg:col-span-5 self-center inset-0">
        <img src={login} alt="patterns" />
      </div>
    </div>
  );
}

export default SignUp;
