import React from 'react'
import {Link,Switch,Route} from "react-router-dom";
import routes from '@/config/route'
import styles from './index.module.scss'

function Layout(props:any){
  return <div className={styles.layout}>

    <div className={styles.menu}>
      <ul>
        {routes.map(item=><li key={item.path}>
          <Link to={item.path}>{item.name}</Link>
        </li>)}
      </ul>
    </div>
    <div>

    </div>
    <div className={styles.content}>
      <Switch>
        {routes.map(item=><Route path={item.path} component={item.component} key={item.path}></Route>)}
      </Switch>
    </div>
    </div>
}
export default Layout