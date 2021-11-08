import EmailIcon from "../../Icons/EmailIcon";
import PhoneIcon from "../../Icons/PhoneIcon";

const ContactMe = () => {

    return (
        <div className="container my-3 py-3 border-bottom border-secondary text-center">
            <div className="row">
                <label className="form-label fs-3 text-white">I'd love to hear from you:</label>
                <label className="form-label text-white "><EmailIcon /> mrtannertrimble@gmail.com</label>
                <label className="form-label text-white"><PhoneIcon /> +1 435-243-1467</label>
            </div>
        </div>
    )
}

export default ContactMe;