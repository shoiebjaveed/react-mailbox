import composemail from './ComposeMail.module.css'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sentboxAction } from '../../../store/slices/sentbox-slice';
import { sendMailData } from '../../../store/actions/sentbox-actions';
import DraftButton from '../draftbox/DraftButton';

const ComposeMail = () => {
    const mails = useSelector(state => state.sentbox.mails)
    const dispatch = useDispatch()
    const email = useRef()
    const subject = useRef()
    const message = useRef()
    console.log(mails)
    

    useEffect(()=> {
        dispatch(sendMailData(mails))
    },[mails, dispatch])

    const sentHandler = (event) => {
        event.preventDefault()
        dispatch(sentboxAction.store({
            id: Math.random(),
            email: email.current.value,
            subject: subject.current.value,
            message: message.current.value,
            isRead: false
        }))
    }

    return <>
        <div className={composemail.container}>
            <div className={composemail.content}>
                <form className={composemail.form} onSubmit={sentHandler}>
                    <div className={composemail.input}>
                        <input type='email' placeholder='to' required ref={email} />
                    </div>
                    <div className={composemail.input}>
                        <input type='text' placeholder='subject' required ref={subject}/>
                    </div>
                    <div className={composemail.textArea}>
                        <textarea placeholder='write something....' rows='15' ref={message} />
                    </div>
                    <button type='submit'>send</button>
                </form>

                <DraftButton />
            </div>
        </div>

    </>
}

export default ComposeMail;