export const sendMailData = (mails) => {
    return async (dispatch) => {

        const sendRequest = async () => {
            const response = await fetch('https://react-mailbox-client-default-rtdb.firebaseio.com/sentbox.json', {
                method: 'PUT',
                body: JSON.stringify(mails)
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