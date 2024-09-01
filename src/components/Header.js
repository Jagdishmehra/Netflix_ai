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
    <div className="absolute px-2 bg-gradient-to-b from-black w-full  flex justify-between z-10">
        <img className="w-52 "src={BG_IMG} alt="logo"/>
        {!islogin&&(<div>
          <button onClick={handleSearch}className="m-6 text-purple-800 font-bold bg-white px-3 py-1 rounded-md text-lg">Ai Search</button>
      <button onClick={handleSignout} className="m-6 text-red-800 font-bold bg-white px-3 py-1 rounded-md text-lg">Signout</button>
      </div>)}
      </div>
);
};
export default Header;