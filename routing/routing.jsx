import React from 'react'
import Home from './home.jsx'
import About from './about.jsx'
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'

class MainRouting extends React.Component {
	render() {
		return(
			<Router>
				<div>
					<h1>routing</h1>
					<ul>
						<li>
							<Link to={'/'}>Home</Link>
						</li>
						<li>
							<Link to={'/about'}>About</Link>
						</li>
					</ul>
					<hr/>
					<Switch>
						<Route exact path="/" component={Home}></Route>
						<Route exact path="/about" component={About}></Route>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default MainRouting