import React from "react";

class EmpEdit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            upEmpName: this.props.history.location.state.empName,
            upSalary: this.props.history.location.state.salary
        }
    }
    saveEventHandler = () =>{
        var objUpdate = { empId: this.props.history.location.state.empId, deptId: this.props.history.location.state.deptId, empName: this.state.upEmpName, salary: this.state.upSalary};
        const str = "/employee";
        console.log("inside emplyees", this.props);
        this.props.history.push(str, objUpdate);

       
        //this.props.callParent(obj);
        //this.props.empUpdatedData(this.state.upEmpName, );
    }
    empNameChangeHandler = (event) =>{
        this.setState({
            upEmpName: event.target.value
        });
        //console.log(e.target.value);
    } 
    salaryChangeHandler = (event) =>{
        this.setState({
            upSalary: event.target.value
        });
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>Employee edit Component loaded </h1>
                <h1>Employee Id: {this.props.history.location.state.empId}</h1>
                <h1>Employee Name: {this.props.history.location.state.empName}</h1>
                <h1>Employee Details</h1>
                <table>
                    <tr>
                        <td>Employee Id</td>
                        <td>{this.props.history.location.state.empId}</td>
                    </tr>
                    <tr>
                        <td>Employee Name</td>
                        <td><input type="text" value={this.state.upEmpName} onChange={this.empNameChangeHandler}/></td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td><input type="text" value={this.state.upSalary} onChange={this.salaryChangeHandler}/></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button" value="Submit" onClick={this.saveEventHandler} />
                            <input type="button" value="Cancel" onClick={this.cancelEventHandler} />
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}
export default EmpEdit;