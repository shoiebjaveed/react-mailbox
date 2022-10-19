import inboxlist from './InboxList.module.css';
import { RiCheckboxBlankLine, RiDeleteBin6Line } from "react-icons/ri";
import { AiFillMail, AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { inboxAction } from '../../../store/slices/inbox-slice';

const InboxList = (props) => {
    // const mailCheck = useSelector(state => state.inbox.read)
    // console.log(mailCheck)
    const dispatch = useDispatch()

    // const markasDone = () => {
    //     dispatch(inboxAction.markdone())
    // }

    const deleteInboxMailHandler = (id) => {
        dispatch(inboxAction.remove({id}))
    }
  
    return <>
        <div className={inboxlist.item} >
            <Link to={`/view-message-sent/${props.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <li>
                <div className={inboxlist.checkbox}>
                    <span><RiCheckboxBlankLine /></span>
                </div>
                <div className={inboxlist.read}>
                    {/* {mailCheck === false && <span><AiFillMail /></span>} */}
                    {/* {mailCheck === true && <span><AiOutlineMail /></span>} */}
                </div>
                <div className={inboxlist.email}>
                    <span>From:{props.email}</span>
                </div>
                <div className={inboxlist.subject}>
                    <span>{props.subject}</span>
                </div>
            </li>
            </Link>
            <div className={inboxlist.delete}>
                    <span onClick={() => deleteInboxMailHandler(props.id)}><RiDeleteBin6Line /></span>
                </div>
        </div>
    </>
}

export default InboxList;