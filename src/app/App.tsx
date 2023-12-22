import { Route, Redirect, Switch } from 'react-router-dom'
import { NotFoundPage, LoginPage } from '@pages'
import { Layout } from './layout'
import { RouterLayout } from './router'
import { Step2Page } from '../pages/Step2Page'

export const App = () => {
    return (
        <RouterLayout>
            <Layout>
                <Switch>
                    <Redirect exact from="/" to="/login" />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/step-2" component={Step2Page} />

                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </Layout>
        </RouterLayout>
    )
}
