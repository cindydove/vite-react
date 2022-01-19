import {HashRouter as Router,Switch,Route,Link,useParams,useRouteMatch,Redirect,Prompt} from 'react-router-dom'
import './App.css'
import React,{useEffect} from 'react'

function Home() {

  return <h2>Home</h2>;
}

function About() {

  return <div>
    <h2>About</h2>
    {/*满足某条件在离开页面时提示*/}
    <Prompt
      when={true}
      message="Are you sure you want to leave?"
    />
  </div>;
}

function Users() {
  return <h2>Users</h2>;
}
function Topics() {
  let match = useRouteMatch();
  console.log("dx---match",match)

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
          <Redirect to="/users" />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams<{topicId:string}>();
  return <h3>Requested topic ID: {topicId}</h3>;
}



function ReactRouter() {
  return (

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/topics">topics</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* from 要进行重定向的路径名*/}
          {/* from 参数仅支持在 Switch 组件内的 Redirect组件使用  */}
          <Redirect from='/topics' to='/' />
          <Route path="/about" component={About}>
          </Route>
          <Route path="/users" render={Users}>
          </Route>
          <Route path="/topics"  >
            <Topics />
          </Route>
          <Route  path="/home" exact >
            <Home></Home>
          </Route>

        </Switch>
        <Route path="/users">
          <div>我没有path</div>
        </Route>
      </div>
  )
}

export default ReactRouter
