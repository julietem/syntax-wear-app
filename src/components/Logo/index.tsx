import { Link } from "@tanstack/react-router";
import Logoimage from "../../assets/images/logo.png";

export const Logo = () => {
    return (
        <Link to="/" className="self-center">
            <img src={Logoimage} alt="Logo SyntaxWear" className="w-40" />
        </Link>
    );
}