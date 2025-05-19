import React, { Component } from "react";
import TaskDataService from "../../services/task.service";

export default class UpdateTask extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);    
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = {
      id: null,
      name: "",
      title: "",
      description: "",
      status: [{"id": "1", "name": "pendiente"}, {"id": "2", "name": "completada"}],
      submitted: false,
      currentStatus: null,
      currentIndex: -1,
    };
    this.retrieveTask = this.retrieveTask.bind(this);
  }

  componentDidMount() {
    let taskId = JSON.parse(localStorage.getItem('task'));    
    this.retrieveTask(taskId);
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  updateTask() {
    TaskDataService.update(
      JSON.parse(localStorage.getItem('task')),
      {
        name: this.state.name,
        title: this.state.title,
        description: this.state.description,
        status: this.state.currentStatus.name
      }
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The task was updated successfully!"
        });
        console.log("The task was updated succesfully");
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteTask() {    
    TaskDataService.delete(JSON.parse(localStorage.getItem('task')))
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/tasks');
      })
      .catch(e => {
        console.log(e);
      });
  }

  retrieveTask(taskId) {
    
      TaskDataService.getAll()
          .then(response => {

            let subConsult = null;

            for (let idx=0; idx<response.data.result.length; idx++) {

              if (response.data.result[idx].id == taskId) {

                subConsult = response.data.result[idx];

              }

            }

            this.state = {
              id: subConsult.id,
              name: subConsult.name,
              title: subConsult.title,
              description: subConsult.description,
              status: subConsult.status
            };
            
          })
          .catch(e => {
              console.log(e);
          });

  }

  setActiveStatus(status, index) {
    this.setState({
      currentStatus: status,
      currentIndex: index
    });
  }

  render() {
    return (
      <>
        <h1>Edit Task</h1>
        <br/>
        <div className="">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newUser}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name" />
            </div>
             <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description" />
            </div>

            <br/>

            <div className="col-md-6">
                <h4>Status</h4>

                <ul className="list-group">
                    {this.state.status &&
                    this.state.status.map((status, index) => (
                        <li
                        className={
                            "list-group-item " +
                            (index === this.state.currentIndex ? "active" : "")
                        }
                        onClick={() => this.setActiveStatus(status, index)}
                        key={index}
                        >
                        {status.name}
                        </li>
                    ))}
                </ul>

            </div>

            <button
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                fontWeight: 'bold',
                margin: '10px 2px',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
              onClick={this.deleteTask}
            >Delete</button>

            <button
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                fontWeight: 'bold',
                margin: '10px 2px',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
              onClick={this.updateTask}
            >Update</button>
          </div>
        )}
      </div></>  
    )
  }
}