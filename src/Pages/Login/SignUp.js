import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] =
      useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName: data.name});
      console.log('update done');
      navigate('/menu')
    };

    let signInerrormessage;

    if (error || gError) {
      signInerrormessage = (
        <span>
          <p className="text-red-500 text-xs">
            {error?.message || gError?.message}
          </p>
        </span>
      );
    }

    if (loading || gLoading) {
      return <Loading />;
    }

    if (user || gUser) {
      console.log(user || gUser);
    }
    return (
      <div className="card bg-slate-800">
        <div className="card-body h-screen flex justify-center items-center ">
          <h2 className="p-5 text-5xl font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Enter Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  }
                  
                })}
              />
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  <p role="alert">{errors.name?.message}</p>
                </span>
              )}
              
            </div>
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
                value="Sign u"
                type="submit"
              />
            </div>
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

export default SignUp;