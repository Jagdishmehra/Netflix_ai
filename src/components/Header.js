import { getAuth, signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utilities/userSlice';
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import { BG_IMG } from "../utilities/constants";


const Header=()=>{
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location=useLocation();

  const handleSearch=()=>{
     navigate("/gptSearch");
  }
  const handleSignout=()=>{
const auth = getAuth();
signOut(auth).then(() => {

}).catch((error) => {
  console.log("error in header");
});
  }

  useEffect(()=>{
    const auth = getAuth();
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}))
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    
    return ()=> unsubscribe();
},[])
const islogin=location.pathname==="/";

return (
    <div className="absolute md:px-2 bg-gradient-to-b from-black md:w-full md:flex md:justify-between flex justify-between z-10 ">
        <img className="md:w-52 w-32 mx-1"src={BG_IMG} alt="logo"/>
        {!islogin&&(<div>
          <button onClick={handleSearch}className="md:m-6 mx-4 my-3 text-purple-800 font-bold bg-white px-2 py-1 rounded-md md:text-lg text-sm">Ai Search</button>
      <button onClick={handleSignout} className="md:m-6 mx-1 my-3 text-red-800 font-bold bg-white px-2 py-1 rounded-md md:text-lg text-sm">Signout</button>
      </div>)}
      </div>
);
};
export default Header;