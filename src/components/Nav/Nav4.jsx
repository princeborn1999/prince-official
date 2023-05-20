import { Link } from "react-router-dom";
export default function Nav4(){
    return(
        <nav className="flex justify-center">
            <Link to="/backend">
                <button className="text-xl font-bold py-4 mx-4 px-4 border-b-4 border-yellow-300 hover:border-yellow-500">AS BACKEND</button>
            </Link>      
            <Link to="/backend">    
                <button className="text-xl font-bold py-4 mx-4 px-4 border-b-4 border-yellow-300 hover:border-yellow-500">AS FRONTEND</button>
            </Link> 

        </nav>
    )
}