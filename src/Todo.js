import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

  constructor(text, id, completed, props){
    super(props);
    this.text = text;
    this.id = id;
    this.completed = completed;
    this.toggle = this.toggle.bind(this);

    this.deleteFromList = this.deleteFromList.bind(this);
  }

  deleteFromList() {
    // delete from list
  }

  toggle(event){
    if(event.target.nodeName === 'LI'){
      event.target.classList.toggle('checked');
    }
  }

  render() {
    // <div class="container" id="center">
    // <ul id="list">
    //<li id="517b2920-e786-11e8-8a15-db338a08a93c" onclick={toggle}>hello<button class="close" onClick={() => this.deleteFromList()}>X</button></li>
    // </ul>
    // </div>

    //                <div className="App">
    //                <h1>Mike Warfield's ToDo App</h1>
    //                </div>
    //<li id={this.id} onclick={this.toggle}>{this.text}<button class="close" onClick={() => this.deleteFromList}>X</button></li>
    console.log(this.id);
    console.log(this.text);
    return (
      <li id={this.id} onClick={this.toggle}>{this.text}<button className="close" onClick={this.deleteFromList}>X</button></li>
    );
  }
}

export default Todo;
