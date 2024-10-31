import Image from "next/image";
import './navbar.css'

export default function Navbar () {
    return (
        <div className="navbar">
            <div className="content">
                <Image src="/images/mf-logo.PNG" alt="logo" width={60} height={55} className="navbar-logo" />
                <div className="buttons">
                    <button className="cv-button">Mentorship</button>
                    <button className="mentorship-button">Say Hello</button>
                </div>
            </div>
        </div>
    );
}
