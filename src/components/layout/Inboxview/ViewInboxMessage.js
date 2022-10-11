import { useParams } from 'react-router-dom';
import { SentData } from '../../../assets/img/dummy';
import view from './ViewSentMessage.module.css';

const ViewInboxMessage = () => {
    const urlid = useParams();
    
    

    const viewMail = SentData.filter(confirm => { return urlid.id === confirm.id })

    console.log(viewMail)

    return <>
        <div className={view.container}>
            <div className={view.content}>
                {viewMail.map((data) => {
                    return <li key={data.id}>
                        <h2>From:{data.email}</h2>
                        <h3>{data.subject}</h3>
                        <p>{data.message}</p>
                    </li>
                })}
            </div>
        </div>
    </>
}

export default ViewInboxMessage;