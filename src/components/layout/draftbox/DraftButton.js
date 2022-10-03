import draftbutton from './DraftButton.module.css';

const DraftButton = (props) => {


    return <>
        <div className={draftbutton.content}>
            <button onClick={draftHandler}>save draft</button>
        </div>
    </>
}

export default DraftButton;