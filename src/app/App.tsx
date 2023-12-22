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
                    <Redirect exact from="/" to="/login/step-1" />
                    <Route path="/login/step-1" component={LoginPage} />
                    <Route path="/login/step-2" component={Step2Page} />

                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </Layout>
        </RouterLayout>
    )
}
