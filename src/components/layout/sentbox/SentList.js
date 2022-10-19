import { Link } from 'react-router-dom';
import sentlist from './SentList.module.css';
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { sentboxAction } from '../../../store/slices/sentbox-slice';
import { useEffect } from 'react';
import { fetchSentMailData } from '../../../store/actions/sentbox-actions';

const SentList = (props) => {
    const dispatch = useDispatch()
    console.log(props.id)

    const deleteHandler = (id) => {
        dispatch(sentboxAction.delete({id}))
    }

    
 
    return <>
        <li className={sentlist.item}>
            <div className={sentlist.card}>
                <h3>{props.email}</h3>
                <div className={sentlist.price}>{props.subject}</div>
                <Link to={`/view-message-sent/${props.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <p>click to view message</p>
                </Link>
                <p onClick={() => deleteHandler(props.id)}><AiFillDelete /></p>
            </div>
        </li>
    </>
}

export default SentList