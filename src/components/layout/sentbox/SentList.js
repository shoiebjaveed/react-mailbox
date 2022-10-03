import { Link } from 'react-router-dom';
import sentlist from './SentList.module.css';

const SentList = (props) => {

    return <>
    <li className={sentlist.item}>
                <div className={sentlist.card}>
                        <h3>{props.email}</h3>
                        <div className={sentlist.price}>{props.subject}</div>
                    <Link to={`/view-message/${props.id}`}><p>click to view message</p></Link>
                </div>
            </li>
    </>
}

export default SentList