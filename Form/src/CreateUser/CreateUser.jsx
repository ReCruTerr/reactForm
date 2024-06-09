import { useState } from "react";
import "./CreateUser.css";
import { useForm } from "react-hook-form";

function CreateUser() {
  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data, event) => {
    Data.push(data);
    console.log(Data);
  };
  return (
    <header>
      <div className="mainCont">
        <div className="container1">
          <img src="/Product Showcase.svg" className="Logo" alt="" />
        </div>
        <div className="container2">
          <h2>Create an account</h2>
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
            id="myForm"
            action=""
            className="createAccountForm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="">
              Name
              {errors?.nameField && (
                <span className="errrorName">
                  В имени должно быть не менее 3 символов!
                </span>
              )}
            </label>
            <input
              type="text"
              placeholder="What should we call you?"
              {...register("nameField", {
                minLength: 3,
              })}
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="you@domain.com"
              {...register("emailField", {
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
                <a href="/LogIn" className="logInLink">
                  Log in
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

export default CreateUser;
