import { useState } from "react";
import { useForm } from "react-hook-form";

import imageError from "./assets/images/icon-error.svg";



function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log("DATA", data);
  
  return (
    <>
      <div className="box">
        <div className="container">
          <div className="txt">
            <div className="txtbox">
              <h1> Learn code by watching others </h1>
              <p>
                See how experienced developers solve problems in real-time.
                Watching scripted tutorials is great, but undertanding how
                developers thing is invaluable.
              </p>
            </div>
          </div>

          <div className="formbox">
            <div className="head">
              <p>
                <span>Try it free 7 days</span> then $20/month thereafter
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="floor">
                <input
                  placeholder="Name"
                  {...register("Name", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                    maxLength: 20,
                    minLength: 3,
                  })}
                />
                {errors.Name && <img src={imageError}  />}
               
              </div>
              {errors.Name?.type === "pattern" && (
                <p className="error">Only letters are allowed</p>
              )}
              {errors.Name?.type === "required" && (
                <p className="error"> Name field has to be filled</p>
              )}
              {errors.Name?.type === "maxLength" && (
                <p className="error"> Too Long Name</p>
              )}
              {errors.Name?.type === "minLength" && (
                <p className="error"> Too Short Name</p>
              )}

              <div className="floor">
                <input
                  placeholder="LastName"
                  {...register("Lastname", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                    maxLength: 20,
                    minLength: 3,
                  })}
                />
                {errors.Lastname && <img src={imageError} />}
              </div>
              {errors.Lastname?.type === "pattern" && (
                <p className="error">Only letters are allowed</p>
              )}
              {errors.Lastname?.type === "required" && (
                <p className="error">Last Name has to be filled</p>
              )}
              {errors.Lastname?.type === "maxLength" && (
                <p className="error"> Too Long Last Name</p>
              )}
              {errors.Lastname?.type === "minLength" && (
                <p className="error"> Too Short Last Name</p>
              )}

              <div  className="floor">
                <input
                  placeholder="Email"
                  {...register("Email", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                {errors.Email && <img src={imageError} />}
              </div>
              {errors.Email?.type === "pattern" && (
                <p className="error">Email is not valid</p>
              )}
              {errors.Email?.type === "required" && (
                <p className="error">Email has to be filled</p>
              )}

              <div  className="floor">
                <input
                  placeholder="Password"
                  {...register("Password", {
                    required: true,
                    pattern:
                      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                    maxLength: 20,
                    minLength: 6,
                  })}
                />
                {errors.Password && <img src={imageError} />}
              </div>
              {errors.Password?.type === "pattern" && (
                <p className="error">
                  Passowrd should contain at least one number, one Capital
                  character and Symbol
                </p>
              )}
              {errors.Password?.type === "required" && (
                <p className="error">Password can not be empty.</p>
              )}
              {errors.Password?.type === "maxLength" && (
                <p className="error"> Too Long Password</p>
              )}
              {errors.Password?.type === "minLength" && (
                <p className="error"> Too Short Password</p>
              )}

              <button type="submit">CLAIM YOUR FREE TRIAL</button>
              <p className="terms">
                By clicking the button you are agreeing to our{" "}
                <span>Terms and Services </span>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
