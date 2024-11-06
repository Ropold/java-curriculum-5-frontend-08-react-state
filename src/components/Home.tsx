import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div>
            <h1>Home - Welcome</h1>
            <Link to={"/characters"}>Characters </Link>
            <Link to={"/planets"}>Planets </Link>
        </div>
    );
}