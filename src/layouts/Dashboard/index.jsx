/** @jsx jsx */
import { Route } from 'react-router-dom'
import { jsx } from '@emotion/core'
import styles from './styles'
import routes from './_.routing'


const DashboardLayout = () => (
  <div css={styles}>
    <content>
      <main>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </main>
    </content>
  </div>
)

export default DashboardLayout
