import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = ({ setUserData }) => {
  const [state, setState] = useState(false);
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setState(true);
    try {
      const headers = {
        api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
      };
      let res = await axios.post("https://lobster-app-ddwng.ondigitalocean.app/user/login", data, { headers });
      if (!res.data.status) {
        alert(res.data?.message?.alert_message ? res.data?.message?.alert_message : "Something went wrong please try later.");
        setState(false);
        return;
      }
      setUserData((prevState) => ({
        ...prevState,
        data: res.data.message,
        isAdded: true,
      }));
      history("/");
    } catch (error) {
      alert("Something went wrong please try later.");
      setState(false);
    }
  };

  return (
    <div className='full-bg-block center-align-child'>
      <div className='autn-container'>
        <h2>Login</h2>
        <p>Enter your account login details</p>

        <div className='form'>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <input type='text' autoComplete='off' placeholder='User name or Email' {...register("login_id", { required: true })} />
            {errors.login_id && errors.login_id.type === "required" && <div className='errors'>This is required</div>}
            <input type='password' autoComplete='off' placeholder='Password' {...register("password", { required: true })} />
            {errors.password && errors.password.type === "required" && <div className='errors'>This is required</div>}
            <button disabled={state}> {state ? "Please wait" : "Sign in"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
