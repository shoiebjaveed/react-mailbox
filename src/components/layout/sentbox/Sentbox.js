import sentbox from './Sentbox.module.css';
import SentList from './SentList';
import { useSelector } from 'react-redux';

const Sentbox = () => {
    const sent = useSelector(state => state.sentbox.mails)
    console.log(sent)

    return <>
        <div className={sentbox.container}>
                <ul>
                    {
                        sent.map((data) => (
                            <SentList 
                            key={data.id}
                            id={data.id}
                            email={data.email}
                            subject={data.subject}
                            message={data.message} />
                        ))}
                </ul>
        </div>
    </>
}

export default Sentbox;