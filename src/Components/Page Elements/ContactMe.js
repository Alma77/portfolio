// import EmailIcon from "../../Icons/EmailIcon";
// import PhoneIcon from "../../Icons/PhoneIcon";
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import EmailForm from '../Component Elements/EmailForm'

const ContactMe = () => {

    const [redirect, SetRedirect] = useState(false)

    const SendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm("gmail", "template_7fu1skr", e.target, "user_0ebkrTE5E03pdJGjZLSSi")
        .then(() => SetRedirect(true))
    }

    return ( redirect
        ?  <Redirect to="/thankyou"/>
        : <EmailForm SendEmail={SendEmail} />
    )
}

export default ContactMe;