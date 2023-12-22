import { Return } from '@shared/types'

const success: Return = 'Success!'
const fail: Return = 'Error!'

export const sendEmailData = async (email: string): Promise<string | undefined> => {
    const apiUrl = '/api/endpoint'

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })

        if (response.ok) {
            console.log('POST request successful')
            return success
        } else {
            console.error('POST request failed')
            return fail
        }
    } catch (error) {
        console.error('Error sending POST request', error)
    }
}
