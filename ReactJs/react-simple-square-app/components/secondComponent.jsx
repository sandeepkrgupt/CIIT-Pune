import React from 'react';

class Second extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name:"react",
			version:"16.0.0",
			chat:"this is chat box",
			n:0,
			msg:''
		},
		this.numberforSquare = this.square.bind(this);
		this.square = this.findSquare.bind(this);
	}

	square(e){
		this.setState({
			n:e.target.value
		})
	}

	findSquare() {
		this.setState({
			chat:this.state.n*this.state.n
		})
	}
	render() {
		return (
			<div>
				<h1>Second Comp</h1>
				<p>Name : -{this.state.name}</p>
				<p>Version :-{this.state.version+6}</p>
				<label>Number:</label>
				<input type="text" onChange={this.numberforSquare}/>
				<button onClick={this.square}>Square</button>
				<p>{this.state.version}</p>
				<b>{this.state.chat}</b>
			</div>
		)
	}
}

export default Second;