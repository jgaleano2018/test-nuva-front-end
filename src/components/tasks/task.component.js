import React, { Component } from "react";
import TaskDataService from "../../services/task.service";
import { NavLink  } from "react-router-dom";

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.retrieveTask = this.retrieveTask.bind(this);

    this.state = {
      tasks: [],
      submitted: false
    };
  }

  componentDidMount() {
    this.retrieveTask();
  }

  retrieveTask() {
    TaskDataService.getAll()
    .then(response => {
        this.setState({
            tasks: response.data
        });
        console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });
  }

  handleEnableTask = (event) => {
    const taskId = event.target.value;
    console.log("TASK ID::::: " + taskId);
    localStorage.setItem('task', JSON.stringify(taskId));  
  }

  render() {  
    return (
      
      <div>        
        <NavLink exact="true" className="nav-link me-5" to={"/components/task/add/"} style={{color: 'blue'}}>Add New Task
        </NavLink>

        <h1>Tasks</h1>
        <br/>      
        <table className="w-full border-collapse border border-slate-400">
            <caption className="caption-top py-3 font-bold text-green-500 text-2xl">
            List Tasks
            </caption>

            <thead>
            <tr className="text-center">
                <th></th>
                <th>Update</th>
                <th className="border border-slate-300">ID</th>
                <th className="border border-slate-300">Name</th>
                <th className="border border-slate-300">Tile</th>
                <th className="border border-slate-300">Description</th>
                <th className="border border-slate-300">Status</th>
            </tr>
            </thead>
            <tbody>
                {this.state.tasks.map((item, i) => {
                return [
                    <tr key={i}>
                    <td>
                      <input
                        type="checkbox"
                        value={item.id}
                        onChange={this.handleEnableTask}
                      />
                    </td>
                    <td>
                        <NavLink exact="true" className="nav-link me-5" to={"/components/task/update/" + item.id} style={{color: 'blue'}}>Edit
                        </NavLink>
                    </td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.status}</td>
                    </tr>
                ];
            })}
            </tbody>
        </table>
        <br/>
        <label>
          Before it edit a task, You need to do to selected the edit checkbox, and continue click over edit link!
        </label>
      </div>

    );
  }
}