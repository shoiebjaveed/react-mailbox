import sentbox from './Sentbox.module.css';
import SentList from './SentList';
import { SentData } from '../../../assets/img/dummy';

const Sentbox = () => {

    return <>
        <div className={sentbox.container}>
                <ul>
                    {
                        SentData.map((data) => (
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