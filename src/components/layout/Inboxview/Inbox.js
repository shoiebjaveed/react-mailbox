import { SentData } from '../../../assets/img/dummy';
import inbox from './Inbox.module.css';
import InboxList from './InboxList';


const Inbox = () => {
    return <>
        <div className={inbox.container}>
            <h2>Mails</h2>
            <ul>
                {
                    SentData.map((data) => {
                        return <InboxList
                        key = {data.id}
                        id = {data.id}
                        email = {data.email}
                        subject = {data.subject}
                        message = {data.message}
                        />
                    })
                }
            </ul>
        </div>
    </>
}

export default Inbox;