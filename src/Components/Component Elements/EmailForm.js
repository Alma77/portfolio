import { useState } from 'react'

const EmailForm = (props) => {

    const [validName, SetValidName] = useState(true)
    const [validMessage, SetValidMessage] = useState(true)

    const email = "mrtannertrimble@gmail.com"

    const isValidNameHandler = (e) => {
        if (e.target.value.trim() === "")
        {
            SetValidName(false)
        }
        else {
            SetValidName(true)
        }
    }

    const isValidMessageHandler = (e) => {
        if (e.target.value.trim() === "")
        {
            SetValidMessage(false)
        }
        else {
            SetValidMessage(true)
        }
    }

    const isValidName = ( validName
        ? "form-control"
        : "form-control is-invalid"
    )

    const isValidMessage = (validMessage
        ? "form-control"
        : "form-control is-invalid"    
    )

    return (
        <div className="container min-vh-100 my-5 py-5 w-50">
            <div className="fs-1 border-bottom border-secondary text-center">
                I'd Love to hear from you!
            </div>
            <form onSubmit={props.SendEmail} className="border border-secondary p-3">
                <div className="form-group my-3">
                    <label className="form-label">Your Name:</label>
                    <input name="name" type="text" className={isValidName} onBlur={(e) => isValidNameHandler(e)} placeholder="ex: John Doe" required />
                    <div className="invalid-feedback">
                        Name field must not be empty
                    </div>
                </div>
                <div className="form-group my-3">
                    <input name="email" type="hidden" value={email} />
                </div>
                <div className="form-group my-3">
                    <label className="form-label">Message:</label>
                    <textarea name="message" cols={10} rows={5} className={isValidMessage} onBlur={(e) => isValidMessageHandler(e)} placeholder="Enter Desired Message..." required/>
                    <div className="invalid-feedback">
                        Message must not be empty
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
            </form>
            {/* <div className="row">
                <label className="form-label fs-3 text-white">I'd love to hear from you:</label>
                <label className="form-label text-white "><EmailIcon /> mrtannertrimble@gmail.com</label>
                <label className="form-label text-white"><PhoneIcon /> +1 435-243-1467</label>
            </div> */}
        </div>
    )
}

export default EmailForm;