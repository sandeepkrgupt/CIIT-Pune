import React from 'react'

class DemoClass extends React.Component {
constructor(props) {
	super(props)
	this.state = {
		eng:'',
		math:'',
		sci:'',
		total:'',
		perc:'',
		grade:''
	}
	this.result = this.total.bind(this)
}

total() {
	var e = this.refs.txteng.value
	var m = this.refs.txtmath.value
	var s = this.refs.txtsci.value
	var t = Number(e) + Number(m) + Number(s);
	var p = (t/3).toFixed(2) + '%'
	var g = ''
	if(p <= 50) {
		//alert("pass")
		g="fail"

	} else {
		//alert("fail")
		g="pass"
	}

	this.setState({
		eng:e,
		math:m,
		sci:s,
		total:t,
		perc:p,
		grade:g
	})
}
	render() {
		return(
			<div>
			<h2>DEMO cLASS=This is second component</h2>
				<p>Result</p>
				<input type="text" ref="txteng"  onChange={this.result} placeholder="Eng Marks"/><br/>
				<input type="text" ref="txtmath" onChange={this.result} placeholder="Math Marks"/><br/>
				<input type="text" ref="txtsci"  onChange={this.result} placeholder="Sci Marks"/><br/>
				<input type="text" value={this.state.total} ref="txttotal" placeholder="Total Marks" disabled/><br/>
				<input type="text" value={this.state.perc} ref="txtperc"  placeholder="Perc Marks" disabled/><br/>
				<input type="text" value={this.state.grade} ref="txtgrade" placeholder="Grade Marks" disabled/>
				<br/>
				<table>
					<tbody>
						<tr>
							<td><p>English</p>{this.state.eng}</td>
							<td><p>Math</p>{this.state.math}</td>
							<td><p>Science</p>{this.state.sci}</td>
							<td><p>Total</p>{this.state.total}</td>
							<td><p>Percentage</p>{this.state.perc}</td>
							<td><p>Grade</p>{this.state.grade}</td>
						</tr>
					</tbody>
				</table>
				<hr/>
			</div>
		)
	}
}

export default DemoClass