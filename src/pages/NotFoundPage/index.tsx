import { Button } from '@shared/components'
import { useHistory } from 'react-router-dom'

export const NotFoundPage = () => {
    const history = useHistory()

    return (
        <>
            <h1>Страница не найдена!</h1>
            <br />
            <Button onClick={() => history.push('/')} text="На главную" />
        </>
    )
}
