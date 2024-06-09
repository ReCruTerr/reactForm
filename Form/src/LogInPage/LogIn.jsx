import React, { useEffect, useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import axios from "axios";
export default function LogIn() {
  const [state, setState] = useState(null);
  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });
  function Submit(data) {
    let formData = {
      name: data.Email,
      password: data.passwordField,
    };
    axios
      .post("http://localhost:3001/data", {
        userName: data.Email,
        password: data.passwordField,
      })
      .then((response) => console.log(response.data))
      .catch((e) => console.log(e));
  }

  return (
    <header>
      <div className="mainCont">
        <div className="container1">
          <img src="/Product Showcase.svg" className="Logo" alt="" />
        </div>
        <div className="container2">
          <h2>Log in</h2>
          <a href="" className="googleLink">
            <img src="/googleImage.svg" alt="" />
            <p>Sign up with Google</p>
          </a>
          <ul className="uList">
            <li></li>
            <li className="Or">Or</li>
            <li></li>
          </ul>
          <form
            action="../../../Server/server.js"
            method="post"
            className="createAccountForm"
            onSubmit={handleSubmit(Submit)}
          >
            <label htmlFor="">
              Email
              {errors?.Email && (
                <span className="errrorName">Поле должно быть заполенено!</span>
              )}
            </label>
            <input
              type="email"
              name="userName"
              placeholder="you@domain.com"
              {...register("Email", {
                required: true,
              })}
            />
            <label htmlFor="">
              Password
              {errors?.passwordField && (
                <span className="errrorName">
                  Пароль должен содержать не менее 7 символов!
                </span>
              )}
            </label>

            <input
              type="password"
              placeholder="••••••••"
              {...register("passwordField", {
                minLength: 7,
              })}
            />
            <div className="save">
              <button disabled={!isValid}>Create account</button>
              <span>
                Already an member?{" "}
                <a href="/Create" className="logInLink">
                  Create account
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
