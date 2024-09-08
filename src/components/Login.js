import { useRef, useState } from "react";
import Header from "./Header";
import { valid } from "../utilities/validation";
import { app } from "../utilities/firebase";
import {LOGO_IMG} from "../utilities/constants";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const Login=()=>{
  
  const [signup,setsignup]=useState(false);

  const handleSignup=()=>{
    
    setsignup(!signup);
  };
  console.log("rendering");
  const [message,setmessage]=useState(null)

  const email=useRef(null);
  const password=useRef(null);

  const handlevalidation=()=>{  
        const errmessage=valid(email.current.value, password.current.value);
        setmessage(errmessage);
        if(errmessage)return;
if(signup){
  //sign up logic
  const auth = getAuth();
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    
    setmessage("Sign-up successful!");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setmessage(errorCode+"--"+errorMessage);
    // ..
  });
  }
  else{
    const auth = getAuth();
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    setmessage("Sign-in successful!");
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setmessage(errorCode+"--"+errorMessage);
  });
  }
};
    return(
      <div className="relative text-white">
        <Header/>
      <div className="">
        <img src={LOGO_IMG} alt="Logo"/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="absolute w-3/12 p-10 top-[15%]  left-[40%] right-[40%] bg-opacity-85 bg-black rounded-md">
        <h1 className="bold text-3xl m-2 ">{ signup ? "Sign Up" : "Sign In" }</h1>
        {signup && (<input type="text" placeholder="Full Name" className="p-3 my-2  w-full rounded-md font-thin bg-inherit"/>)}
        <input
        ref={email} type="text" placeholder="Email" className="p-3 my-2  w-full rounded-md font-thin bg-inherit"/>
        <input 
        ref={password} type="password" placeholder="Password" className="p-3 my-2 w-full rounded-md font-thin bg-inherit"/>
        <p className="text-red-500 my-2 text-sm font-thin">{message}</p>
        <button className="bg-red-600 w-full my-2 p-2 rounded-md hover:bg-red-700 transition duration-200 ease-in-out hover:ease-in-out text-white"type="button" onClick={handlevalidation}>{signup?"Sign Up":"Sign In"}</button>
        <button className="font-thin text-md m-2 text-white"type="button" onClick={handleSignup}>{signup ? "Already a member ? Sign in" :"New to Netflix ? Sign up now"}</button> 
      </form>
      </div>
    );
};
export default Login;