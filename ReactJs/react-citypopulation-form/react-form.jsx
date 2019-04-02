import React,{Component} from 'react'

export default class SimpleForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cities:[{'cid':0,'cname':'Select'}],
			states:[{'sid':0,'sname':'Select'},{'sid':1,'sname':'maharashtra'},{'sid':2,'sname':'gujrat'}],
			citystate:[{'cid':1,'cname':'pune','sid':1},{'cid':2,'cname':'mumbai','sid':1},{'cid':3,'cname':'surat','sid':2},{'cid':4,'cname':'Gandhinagar','sid':2}],
		}
		this.submitData = this.submitData.bind(this)
		this.fetchcities = this.fetchcities.bind(this)
	}
	fetchcities(){
		var sid=this.refs.st.value;
		var data=[];
		for(var i=0;i<this.state.citystate.length;i++)
		{
			if(this.state.citystate[i].sid==sid)
			{
				data.push(this.state.citystate[i])
			}
			this.setState({'cities':data})
		}
	}
	submitData (e) {
		var arr = []
		e.preventDefault();
		var nm = this.refs.txtxname.value;
		var city = this.refs.dpcity.value;
		alert(city);
		this.arr.push(city)
		this.setState({
			name:nm,
			location:arr
		})
	}
	render() {
		return (
		<div>
			<form onSubmit={this.submitData} name="form1">
		State:<select ref="st" onChange={this.fetchcities}>
				{this.state.states.map((i) => (
					<option value={i.sid}>{i.sname}</option>
				))
				}
				</select>
				<br/>

				City:<select ref="dpcity">
					{this.state.cities.map((i) => (
						<option value={i.cid}>{i.cname}</option>
					))	
					}
				</select>
				<br/>			
				<input type="submit" value="Ok"/>
			</form>
			<p>{this.state.location}</p>
		</div>
		)
	}
}

