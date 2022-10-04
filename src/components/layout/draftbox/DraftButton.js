import draftbutton from './DraftButton.module.css';

const DraftButton = (props) => {


    return <>
        <div className={draftbutton.content}>
            <button>save draft</button>
        </div>
    </>
}

export default DraftButton;