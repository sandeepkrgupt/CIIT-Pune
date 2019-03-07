import  React,{Component} from 'react'
import TestClass from './test.jsx'
import DemoClass from './demo.jsx'
class AddClass extends Component {
	constructor(props) {
	super(props)
		this.state = {
			total:0
		}
		this.addition = this.additionTotal.bind(this)
	}
	additionTotal() {
		var x = this.refs.a.value;
		var y = this.refs.b.value;
		var c = Number(x) + Number(y);
		this.setState({
			total:c
		})
	}
	render() {
		return(
			<div className="test">
			<TestClass></TestClass>
			<DemoClass></DemoClass>
			<hr/>
			<h1>This is First Component</h1>
				<input type="text" ref="a"/>
				<input type="text" ref="b"/>
				<input type="button" onClick={this.addition} value="add"/>
				<p>{this.state.total}</p>
			</div>
		)
	}
}

export default AddClass