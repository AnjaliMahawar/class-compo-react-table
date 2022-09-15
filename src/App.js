import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "John", dob: "2020-03" },
        { name: "Key", dob: "2010-07" },
        { name: "Mo", dob: "2000-08" }
      ],
      currentItem: {},
      currentIndex: -1,
      editMode: false
    };
    this.dataChanged = this.dataChanged.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditCancel = this.handleEditCancel.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleEdit(index) {
    this.setState({
      currentIndex: index,
      editMode: true,
      currentItem: { ...this.state.items[index] }
    });
  }
  handleDelete(key) {
    this.setState({
      items: this.state.items.filter((a, i) => i !== key)
    });
  }
  handleEditCancel(e) {
    this.setState({
      currentIndex: -1,
      editMode: false,
      currentItem: {}
    });
    e.preventDefault();
  }
  handleUpdate() {
    let items = this.state.items;
    items[this.state.currentIndex] = { ...this.state.currentItem };
    this.setState({
      currentIndex: -1,
      editMode: false,
      currentItem: {},
      items: items
    });
  }
  dataChanged(event){
    let field = event.target.name;
    let currentItem = {...this.state.currentItem};
    currentItem[field] = event.target.value;
    this.setState({currentItem: {...currentItem}});
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.items.map((item, key) => (
            <li key={key}>
              <span> {item.name} </span>
              <span> {item.dob} </span>
              <button
                className="btn btn-light"
                onClick={() => this.handleEdit(key)}
              >
                edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => this.handleDelete(key)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
        {this.state.editMode && (
          <form onSubmit={this.handleUpdate}>
            <input
              className=""
              name="name"
              value={this.state.currentItem.name}
              onChange={this.dataChanged}
              placeholder="Celebrant's Name"
              ref={name => (this.name = name)}
              required
            />
            <input
              className=""
              name="dob"
              onChange={this.dataChanged}
              value={this.state.currentItem.dob}
              type="month"
            />

            <button type="submit">update</button>
            <button onClick={e => this.handleEditCancel(e)}>cancel</button>
          </form>
        )}
      </div>
    );
  }
}
