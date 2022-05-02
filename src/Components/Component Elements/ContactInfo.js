import EmailIcon from "../../Icons/EmailIcon";
import PhoneIcon from "../../Icons/PhoneIcon";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedInIcon from "../../Icons/LinkedInIcon";
import InstagramIcon from "../../Icons/InstagramIcon";

const ContactInfo = () => {

    return(
        <div className="container-fluid">
            <h1 className="text-center">Contact Info</h1>
            <div className="d-flex justify-content-center">
                <div>
                    <h4 className="py-2">
                        <EmailIcon /> <a href="mailto:mrtannertrimble@gmail.com">mrtannertrimble@gmail.com</a>
                    </h4>
                    <h4 className="py-2">
                        <PhoneIcon /> 435-243-1467
                    </h4>
                    <h4 className="py-2">
                        <a href="https://www.linkedin.com/in/tanner-trimble-36a109186/" target="_blank" rel="noreferrer" ><LinkedInIcon /></a> LinkedIn
                    </h4>
                    <h4 className="py-2">
                        <a href="https://www.github.com/Alma77" target="_blank" rel="noreferrer" ><GithubIcon /></a> Github
                    </h4>
                    <h4 className="py-2">
                        <a href="https://www.instagram.com/trimble.tanner77/" target="_blank" rel="noreferrer" ><InstagramIcon /></a> Instagram
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;