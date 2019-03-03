import React, {Component} from 'react';
import Second from './secondComponent.jsx';

class FirstComponent extends Component {
	render () {
		 return (
		 <div>
			<h1>This is First Comp </h1>
			<p>Below is second comp</p>
			<Second/>
		  </div>
		 )
	}
}

export default FirstComponent;