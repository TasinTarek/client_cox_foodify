import React from 'react';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {

const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth); 
const {
   register,
   formState: { errors },
   handleSubmit,
 } = useForm(); 


 const onSubmit = (data) =>{ 
    signInWithEmailAndPassword(data.email , data.password);

    console.log(data);}

    let signInerrormessage;
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

if(error || gError){
    signInerrormessage = (
      <span>
        <p className="text-red-500 text-xs">{error?.message || gError?.message}</p>
      </span>
    );
}


if(loading || gLoading ){
    return <Loading/>;
}

    if(user || gUser){
    navigate(from, { replace: true });
    console.log(user || gUser);
}



    return (
      <div className="card bg-slate-800">
        <div className="card-body h-screen flex justify-center items-center ">
          <h2 className="p-5 text-5xl font-bold">Login!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Enter Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: "Invalid Email Address", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  <p role="alert">{errors.email?.message}</p>
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  <p role="alert">{errors.email?.message}</p>
                </span>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Enter Your Password</span>
              </label>
              <input
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Too Small", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  <p role="alert">{errors.password?.message}</p>
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  <p role="alert">{errors.password?.message}</p>
                </span>
              )}
            </div>

            <div className="text-center p-5 ">
              <input
                className="btn w-full max-w-xs"
                value="Login"
                type="submit"
              />
            </div>
            <p>
              New User? <Link to='/signUp'>Create a new account.</Link>
            </p>
          </form>
          {signInerrormessage}
          <div className="divider">OR</div>

          <div className="card-actions justify-center w-full max-w-xs">
            <button onClick={() => signInWithGoogle()} className="btn ">
              Google
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;