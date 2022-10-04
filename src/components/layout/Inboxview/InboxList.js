import inboxlist from './InboxList.module.css';
import { RiCheckboxBlankLine, RiDeleteBin6Line } from "react-icons/ri";

const InboxList = (props) => {

    return <>
        <div className={inboxlist.item}>
            <li>
                <div className={inboxlist.checkbox}>
                    <span><RiCheckboxBlankLine /></span>
                </div>
                <div className={inboxlist.email}>
                    <span>From:{props.email}</span>
                </div>
                <div className={inboxlist.subject}>
                    <span>{props.subject}</span>
                </div>
                <div className={inboxlist.delete}>
                    <span><RiDeleteBin6Line /></span>
                </div>
            </li>
        </div>
    </>
}

export default InboxList;