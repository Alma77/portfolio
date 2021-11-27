import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../Store/ui-Slice'

const Thankyou = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(uiActions.NotOnLandingPage())
    },[dispatch])

    return (
        <div className="container text-center mt-5 pt-5">
            <div className="fs-2">
                Thank you for your Message I'll be sure to get back to you as soon as I can.
            </div>
        </div>
    )
}

export default Thankyou;