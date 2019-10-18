import React from "react";
class Employees extends React.Component{
    
    empArr = [
        {empId: 101, empName: 'asha', salary:1001, deptId:'D1'},
        {empId: 102, empName: 'mona', salary:1002, deptId:'D2'},
        {empId: 103, empName: 'dipa', salary:1003, deptId:'D3'},
        {empId: 104, empName: 'suresh', salary:1004, deptId:'D5'},
        {empId: 105, empName: 'naresh', salary:1005, deptId:'D6'}
    ];
    constructor(props){
        super(props);
        console.log('constructor'+this.props.history.location.state);
        this.state = {
            tempData: {empId: 102, empName: 'mona', salary:1002, deptId:'D2'},
            showEmpEdit: false
        }
    }
    editEventHandler=(obj) =>{
        // this.setState(
        //     {tempData: obj, showEmpEdit:true}
        // )
        const str = "/empedit/"+obj.empId;
        console.log("inside emplyees", this.props);
        this.props.history.push(str, obj);
       
    }
    callParentEventHandler = (obj) =>{
        console.log(obj);
        var pos = this.empArr.findIndex( item =>
           item.empId==obj.empId
        )
        console.log(pos);
        this.empArr.splice(pos, 1, obj)
        console.log(this.empArr);
        this.setState({showEmpEdit:false})
    }
    render(){
       console.log('render'+this.props.history.location.state);
        //console.log(obj);
        // var pos = this.empArr.findIndex( item =>
        //    item.empId==this.props.history.location.state.empId
        // )
        // //console.log(pos);
        // this.empArr.splice(pos, 1, this.props.history.location.state)
        // console.log(this.empArr);
        // this.setState({showEmpEdit:false})
        

        var styleTable = {
            border: '1px solid',
            backgroundColor: 'green'
        }
        var tempData = {empId: 101, empName: 'asha', salary:1001, deptId:'D1'};
        var trArr = this.empArr.map( (item) => {
            return (
                <tr>
                    <td>{item.empId}</td>
                    <td>{item.empName}</td>
                    <td>{item.salary}</td>
                    <td>
                        <input type="button" value="Edit" onClick={this.editEventHandler.bind(this, item)}/>                                
                    </td>
                </tr>
            );
        })
        return(
            <React.Fragment>
                <h1>Employees Info</h1>
                <table style={styleTable}>
                    <thead>
                        <tr>
                            <th> Emloyee Id</th>
                            <th> Emloyee Name</th>
                            <th> Salary</th>
                            <th> Details</th>
                        </tr>
                        </thead>
                        <tbody>
                            {trArr}
                        </tbody>
                </table>
        {/* {this.state.showEmpEdit && <EmpEdit dataToSend={this.state.tempData} callParent={this.callParentEventHandler}></EmpEdit> } */}
        {/* {this.state.showEmpEdit ? <EmpEdit dataToSend={this.state.tempData} callParent={this.callParentEventHandler}></EmpEdit> : null } */}
            </React.Fragment>
        );
    }
}
export default Employees;