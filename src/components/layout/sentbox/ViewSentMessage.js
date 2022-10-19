import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchSentMailData } from '../../../store/actions/sentbox-actions';
import { BiArrowBack, BiTrash, BiArchiveIn } from "react-icons/bi";
import { GoReport } from "react-icons/go";
import ReactHtmlParser from 'react-html-parser'



import view from './ViewSentMessage.module.css';

const ViewSentMessage = () => {
    const navigate = useNavigate()
    const urlid = useParams();
    const dispatch = useDispatch()
    const sent = useSelector(state => state.sentbox.mails)

    useEffect(() => {
        dispatch(fetchSentMailData())
    }, [dispatch])
    const viewMail = sent.filter(data => { return data.id === urlid.id })

    const backButtonHandler = () => {
        navigate('/sent')
    }

    const archiveButtonHandler = () => {
        alert('Message archived')
    }

    const reportButtonHandler = () => {
        alert('Email has reported as spam')
    }

    const deleteButtonHandler = () => {
        alert('mail deleted')
    }

    return <>
        <div className={view.container}>
            <div className={view.content}>
                <header>
                    <span onClick={backButtonHandler}><BiArrowBack /></span>
                    <span onClick={archiveButtonHandler}><BiArchiveIn /></span>
                    <span onClick={reportButtonHandler}><GoReport /></span>
                    <span onClick={deleteButtonHandler}><BiTrash /></span>
                </header>
                {viewMail.map((data) => {
                    const email = data.email
                    const userName = email.slice(0, email.indexOf('@'));
                    return <li key={data.id}>
                        <span className={view.profile}>
                            <img src="https://lh3.googleusercontent.com/a/default-user=s40-p" alt='profile' />
                            <h6>{userName}</h6>
                            <h5>{data.email}</h5>
                        </span>
                        <h3>{data.subject}</h3>
                        <div className={view.message}>
                            <span>{ReactHtmlParser(data.message)}</span>
                        </div>
                    </li>
                })}
            </div>
        </div>
    </>
}

export default ViewSentMessage;