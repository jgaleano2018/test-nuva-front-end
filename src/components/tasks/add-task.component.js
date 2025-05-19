import React, { Component } from "react";
import TaskDataService from "../../services/task.service";

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);    
    this.saveTask = this.saveTask.bind(this);
    this.newTask = this.newTask.bind(this);
    //this.refreshList = this.refreshList.bind(this);
    this.setActiveStatus = this.setActiveStatus.bind(this);

    this.state = {
      id: null,
      name: "",
      title: "",
      description: "",
      status: [{"id": "1", "name": "pendiente"}, {"id": "2", "name": "completada"}],
      submitted: false,
      currentStatus: null,
      currentIndex: -1,
      totalTask: 0
    };
  }

  componentDidMount() {
    let totalTask = JSON.parse(localStorage.getItem('totalTask'));    
    this.setState({
      totalTask: totalTask
    });
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

  saveTask() {
    var data = {
      id: this.state.totalTask + 1,
      name: this.state.name,
      title: this.state.title,
      description: this.state.description,
      status: this.state.currentStatus.name
    };

    TaskDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          title: response.data.title,
          description: response.data.description,
          status: response.data.status,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTask() {
    this.setState({
      id: 0,
      name: "",
      title: "",
      description: "",
      submitted: false
    });
  }

   setActiveStatus (status, index) {
    this.setState({
      currentStatus: status,
      currentIndex: index
    });
  }

  render() {
    return (
      <><h1>New Task</h1><br />
       <div className="">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTask}>
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

            <button onClick={this.saveTask} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div></>
    );
  }
}