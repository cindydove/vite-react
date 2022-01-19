import React from 'react'
import {Link,Switch,Route} from "react-router-dom";
import ReactRouter from '@/pages/ReactRouter'
import styles from './index.module.scss'

function Layout(props:any){
  const { children } = props
  return <div className={styles.layout}>

    <div className={styles.menu}>
      <ul>
        <li>
          <Link to='/router'>路由</Link>
        </li>
        <li>
          <Link to='/redux'>redux</Link>
        </li>
      </ul>
    </div>
    <div>

    </div>
    <div className={styles.content}>
      <Switch>
        <Route path='/router' >
          <ReactRouter></ReactRouter>
        </Route>
        <Route path='/redux'><div>redux</div></Route>
      </Switch>
    </div>
    </div>
}
export default Layout