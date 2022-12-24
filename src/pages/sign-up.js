import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setUserData }) => {
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
      let res = await axios.post("https://lobster-app-ddwng.ondigitalocean.app/user/register", data, { headers });
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
        <h2>Register</h2>
        <p>Create your company accounts</p>
        <div className='form'>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <input type='text' autoComplete='off' placeholder='Full name*' {...register("full_name", { required: true })} />
            {errors.full_name && errors.full_name.type === "required" && <div className='errors'>This is required</div>}

            <input type='text' autoComplete='off' placeholder='Full name*' {...register("username", { required: true })} />
            {errors.username && errors.username.type === "required" && <div className='errors'>This is required</div>}

            <select {...register("country_row_id", { required: true })}>
              <option value=''>Select Country*</option>
              <option value='101'>India</option>
            </select>
            {errors.country_row_id && errors.country_row_id.type === "required" && <div className='errors'>This is required</div>}

            <input type='text' autoComplete='off' placeholder='Mobile Number*' {...register("mobile_number", { required: true })} />
            {errors.mobile_number && errors.mobile_number.type === "required" && <div className='errors'>This is required</div>}

            <input type='text' autoComplete='off' placeholder='Email ID*' {...register("email_id", { required: true })} />
            {errors.email_id && errors.email_id.type === "required" && <div className='errors'>This is required</div>}

            <input type='password' autoComplete='off' placeholder='Password' {...register("password", { required: true })} />
            {errors.password && errors.password.type === "required" && <div className='errors'>This is required</div>}

            <input type='text' autoComplete='off' placeholder='Referral ID' {...register("referral_id", { required: false })} />

            <button disabled={state}> {state ? "Please wait" : "Sign up"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
