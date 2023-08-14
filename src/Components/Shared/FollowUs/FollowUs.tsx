import "./FollowUs.css";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
function FollowUs(): JSX.Element {
    return (
        <div className="FollowUs">
            <h3>Follow Us</h3>
            <div className="row">
                <a href="https://www.linkedin.com/in/kobishasha"><FaLinkedin size={36} /></a>
                <a href="https://github.com/KobiShashs"><FaGithub size={36} /></a>
                <a href="https://twitter.com/kobi_shasha"><FaTwitterSquare size={36} /></a>
            </div>
        </div>
    );
}

export default FollowUs;
