import composemail from './ComposeMail.module.css'
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sentboxAction } from '../../../store/slices/sentbox-slice';
import DraftButton from '../draftbox/DraftButton';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

let initial = true;

const ComposeMail = () => {
    const sentbox = useSelector(state => state.sentbox)
    const navigate = useNavigate()
    const mails = useSelector(state => state.sentbox.mails)
    const dispatch = useDispatch()
    const email = useRef()
    const subject = useRef()
    
    const [value, setValue] = useState('');    

    const sentHandler = (event) => {
        event.preventDefault()
        dispatch(sentboxAction.store({
            id: Math.random().toString(),
            email: email.current.value,
            subject: subject.current.value,
            message: value,
        }))
        navigate('/inbox')  
    }

    return <>
        <div className={composemail.container}>
            <div className={composemail.content}>
                <form className={composemail.form} onSubmit={sentHandler}>
                    <div className={composemail.input}>
                        <input type='email' placeholder='to' required ref={email} />
                    </div>
                    <div className={composemail.input}>
                        <input type='text' placeholder='subject' required ref={subject} />
                    </div>
                    <div className={composemail.textArea}>
                        <ReactQuill theme="snow" value={value} onChange={setValue} placeholder='write someting..'
                            style={{
                                height: '250px',
                                width: '520px',
                                marginLeft: '25%',
                                borderRadius: '5px',
                            }} />
                    </div>
                    <button className={composemail.submit} type='submit'>send</button>
                </form>

                <DraftButton />
            </div>
        </div>

    </>
}

export default ComposeMail;