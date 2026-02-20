import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/custom.css";   // 👈 ADD THIS
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../Reducer/AuthSlice";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch=useDispatch()
  const onSubmit=(data)=>{
    dispatch(login(data)).then((res)=>{
      if(res?.payload?.status_code===200){
        navigate("/dashboard")
      }
    })
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-right">
          <h1>Tour Management</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email",{required:"Email is required"})}
         
            />
            {errors?.email&&(
              <span className="text-red">{errors?.email?.message}</span>
            )}

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            {...register("password",{required:"Password is required"})}
            />
          {errors?.password&&(
              <span className="text-red">{errors?.password?.message}</span>
            )}
            <div className="login-options">
             <label className="remember-label">
  <input 
    type="checkbox" 
    checked={rememberMe}
    onChange={(e) => setRememberMe(e.target.checked)}
  />
  <span>Remember me</span>
</label>

              <span className="forgot-password">Forgot Password?</span>
            </div>

            <button type="submit" className="login-btn">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;