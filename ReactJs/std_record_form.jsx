import React,{Component} from 'react'

export default class StudentRecord extends Component {
	constructor(props){
		super(props)
		this.state = {
			students:[],
			mystyle:{}
		}
		this.addRecord = this.addRecord.bind(this);
		this.calculate = this.calculate.bind(this);
		this.viewRecord = this.viewRecord.bind(this);
	}

	addRecord () {
		var s_record = [];
		var sroll = this.refs.txtroll.value;
		var sname = this.refs.txtname.value;
		var seng = this.refs.txteng.value;
		var smath = this.refs.txtmath.value;
		var ssci = this.refs.txtsci.value;
		var stotal = this.refs.txttotal.value;
		var p= this.refs.txtpercent.value;
		var color="";
		if(p<50) {
			color="red"
		}
		else {
			color="green"
		}
		this.state.students.push({
			"roll":sroll,
			"name":sname,
			"eng":seng,
			"math":smath,
			"sci":ssci,
			"total":stotal,
			"color":color
		})

		
		for(var i=0;i<this.state.students.length;i++)
		{
			s_record.push(this.state.students[i]);
		}
		this.setState({
			students:s_record
		})
		this.refs.txtroll.value="";
		this.refs.txtname.value="";
		this.refs.txteng.value="";
		this.refs.txtmath.value="";
		this.refs.txtsci.value="";
		this.refs.txttotal.value="";
		this.refs.txtpercent.value="";
		//alert(this.state.students.length);
	}
	calculate() {
		var failcolor = {color:'red'};
		var passcolor = {color:'green'};
		var seng = this.refs.txteng.value;
		var smath = this.refs.txtmath.value;
		var ssci = this.refs.txtsci.value;
		var total = Number(seng) + Number(smath) + Number(ssci);
		this.refs.txttotal.value = total;
		var percent = (total/3).toFixed(2);
		this.refs.txtpercent.value = percent;
		
	} 
	viewRecord(d) {
		this.refs.txtroll.value=d.roll;
		this.refs.txtname.value=d.name;
		this.refs.txteng.value=d.eng;
		this.refs.txtmath.value=d.math;
		this.refs.txtsci.value=d.sci;
		this.refs.txttotal.value=d.total;
		this.refs.txtpercent.value=d.percent;
	}
	render() {
		return (
				<div>
					<form name="">
						<label>Roll</label>
						<input type="text" ref="txtroll"/><br/>
						<label>Name</label>
						<input type="text" ref="txtname"/><br/>
						<label>English</label>
						<input type="text" ref="txteng" onChange={this.calculate}/><br/>
						<label>Math</label>
						<input type="text" ref="txtmath" onChange={this.calculate}/><br/>
						<label>Sci</label>
						<input type="text" ref="txtsci" onChange={this.calculate}/><br/>
						<label>Total</label>
						<input type="text" ref="txttotal"/>
						<label>percent</label>
						<input type="text" ref="txtpercent"/>
						<button type="button" onClick={this.addRecord}>Add</button>
					</form>
					<table border="1">
						<thead>
							<tr>
							<th>Roll</th>
							<th>Name</th>
							<th>English</th>
							<th>Math</th>
							<th>Sci</th>
							<th>Total</th>
							<th>View</th>
							<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{this.state.students.map(data=>(
							<tr style={{color:data.color}}>
								<td>{data.roll}  </td>
								<td >{data.name} </td>
								<td>{data.eng}</td>
								<td>{data.math}</td>
								<td>{data.sci}</td>
								<td>{data.total}</td>
								<td><button type="button" onClick={this.viewRecord.bind(this ,data)}>View</button></td>
								<td><button type="button">Delete</button></td>
							</tr>
							))}
						</tbody>
					</table>
				</div>
			)
	}
}


