import { Route, Redirect, Switch } from 'react-router-dom'
import { NotFoundPage, LoginPage } from '@pages'
import { Layout } from './layout'
import { RouterLayout } from './router'

export const App = () => {
    return (
        <RouterLayout>
            <Layout>
                <Switch>
                    <Redirect exact from="/" to="/login" />
                    <Route path="/login" component={LoginPage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </Layout>
        </RouterLayout>
    )
}
