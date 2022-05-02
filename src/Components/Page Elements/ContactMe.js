// import EmailIcon from "../../Icons/EmailIcon";
// import PhoneIcon from "../../Icons/PhoneIcon";
import emailjs from 'emailjs-com'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import EmailForm from '../Component Elements/EmailForm'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../Store/ui-Slice'
import ContactInfo from '../Component Elements/ContactInfo'

const ContactMe = () => {

    const [redirect, SetRedirect] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(uiActions.NotOnLandingPage())
    },[dispatch])

    const SendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm("gmail", "template_7fu1skr", e.target, "user_0ebkrTE5E03pdJGjZLSSi")
        .then(() => {
            dispatch(uiActions.ToggleIsloading())
            SetRedirect(true)
        })
    }

    return ( redirect
        ?  <Redirect to="/thankyou"/>
        : (
            <div>
                <section>
                    <EmailForm SendEmail={SendEmail} />
                </section>
                <section>
                    <ContactInfo />
                </section>
            </div>
        )
    )
}

export default ContactMe;