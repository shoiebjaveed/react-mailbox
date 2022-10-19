import { sentboxAction } from "../slices/sentbox-slice"

export const fetchSentMailData = () => {
    return async (dispatch) => {
        
        const fetchData = async () => {
            const response = await fetch('https://react-mailbox-client-default-rtdb.firebaseio.com/sentbox.json')
            if (!response.ok) {
                throw new Error('failed to fetch data from database')
            }
            const data = await response.json();
            return data
        }
        try {
            const mailData = await fetchData()
            console.log(mailData.mails)
            dispatch(sentboxAction.replace(mailData || []))
        } catch (error) {
            alert(error)
        }
    }
}

export const sendMailData = (sentbox) => {
    return async (dispatch) => {

        const sendRequest = async () => {
            const response = await fetch('https://react-mailbox-client-default-rtdb.firebaseio.com/sentbox.json', {
                method: 'PUT',
                body: JSON.stringify(sentbox)
            })
            if (!response.ok) {
                throw new Error('something went wrong...')
            }
        }
        try {
            await sendRequest()
        } catch (error) {
            alert(error)
        }
    }
}