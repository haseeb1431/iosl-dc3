import React, { Component } from "react";
import cx from "classnames";
import uncheckImage from "assets/images/checkbox-uncheck.svg";
import checkImage from "assets/images/checkbox-check.svg";

class TaskList extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "Pickup Package 1001 from Central Despatch Centre",
        completed: false
      },
      {
        id: 2,
        content: "Handover Package 2002 to Postmam PK from DHL",
        completed: false
      },
      {
        id: 3,
        content: "Accept Package 3001 from Postman Kiran from PostaItalien",
        completed: false
      },
      {
        id: 4,
        content: "Deliver Package 4004 to 31 Yorkstr.",
        completed: false
      },
      {
        id: 5,
        content: "Deliver Package 5005 to 44 Bismarkstr.",
        completed: false
      },
      {
        id: 6,
        content: "Pickup Package 6006 from 123 Turmstr.",
        completed: false
      }
    ]
  };

  toggleComplete = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      })
    });
  };

  deleteTodo = todoId => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    });
  };

  render() {
    return (
      <div className="card ">
        <div className="header">
          <h4 className="title">Notifications</h4>
          {/*<p className="category">Backend development</p>*/}
        </div>
        <div className="content">
          <form>
            {this.state.todos.map(todo => (
              <div
                className={cx("todo-item", { completed: todo.completed })}
                key={todo.id}
              >
                <div className="todo-item-wrapper">
                  <label
                    className={cx("checkbox", {
                      checked: todo.completed
                    })}
                  >
                    <span className="icons">
                      <img
                        className="first-icon"
                        src={uncheckImage}
                        width={17}
                      />
                      <img
                        className="second-icon"
                        src={checkImage}
                        width={17}
                      />
                    </span>
                    <input
                      type="checkbox"
                      data-toggle="checkbox"
                      checked={todo.completed}
                      onChange={() => this.toggleComplete(todo.id)}
                    />
                  </label>
                  <div className="todo-content">{todo.content}</div>
                  <a onClick={() => this.resolve(todo.id)}>&times;</a>
                </div>
              </div>
            ))}
          </form>
        </div>
        <div className="footer">
          <hr />
          <div className="stats">
            <i className="fa fa-history" /> Latest received 1 second ago
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
