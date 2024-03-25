import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const { login } = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, pass);
    if(email.toLowerCase ==="admin@aa.com" 
    && pass.toLowerCase ==="aadmin") {
      login({email, pass})
    } else {
      alert("Wrong email or password.")
    }
  };
  return (
    <div className='loginDiv'>
      <div className='h-[500px] w-11/12 sm:w-[475px] bg-main rounded-[20px] text-yellowish p-5 flex justify-between flex-col'>
        <div className='flex justify-center items-center mt2'>
          <span className='w-[6px] bg-labelColor h-[39px] mr-5'></span>
          <h1 className='text-[22px] sm:text-[32px] font-syne font-[700] uppercase'>
            Hanako Store
          </h1>
        </div>
        <div className='my-2 flex flex-col justify-center items-center'>
          <h3 className='font-syne font-[600] text-[22px] uppercase'>
            SIGN IN
          </h3>
          <p className='font-syne font-[600] text-[17px] text-labelColor text-label mt-1'>
            Enter your credentials to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col text-left p-3 gap-5">
          <div className='flex flex-col gap-2'>
            <label className="font-syne text-label text-labelColor hover:cursor-pointer hover:after:content-['admin@aa.com'] hover:after:text-white hover:after:pl-3 hover:after:underline" 
            htmlFor="email">
              Email
            </label>
            <input 
              className='login-input text-main'
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              // autoFocus
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label 
                className="font-syne text-label text-labelColor hover:cursor-pointer hover:after:content-['admin'] hover:after:text-white hover:after:pl-3 hover:after:underline"
                htmlFor="pass"
            >
              Password
            </label>
            <input
              className='login-input text-main'
              type="password"
              name="pass"
              placeholder="Enter your password"
              value={pass}
              onChange={(e)=>setPass(e.target.value)}
              required
            />
          </div>
          <button 
            type='submit'
            className='bg-labelColor h-[44px] text-main font-syne uppercase hover:opacity-90 rounded-[4px]'
          >
            Sign In
          </button>
          <p className='flex justify-center items-center flex-wrap'>
            <span className='text-label font-syne font-[400] text-labelColor'> 
              Forgot your password?
            </span>
            <span className='text-labelColor text-[14px] font-syne font-[500] underline ml-1'>
              Reset Password
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login