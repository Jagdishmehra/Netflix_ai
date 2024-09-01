import Login from "./Login";
import {createBrowserRouter} from "react-router-dom";
import Browse from "./Browse";
import {RouterProvider} from "react-router-dom";
import GptSearch from "./GptSearch";

const Body=()=>{
    
const approuter=createBrowserRouter([

    {path: "/",
        element: <Login/>,

    },
    {
        path:"/browse",
        element: <Browse/>,
    },
    {
        path:"/gptSearch",
        element: <GptSearch/>,
    }
]);



    return(
        <div> 
            <RouterProvider router={approuter}/>
        </div>
    );
};
export default Body;