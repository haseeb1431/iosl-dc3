import React, { Component } from 'react';
import cx from 'classnames';
import uncheckImage from 'assets/images/checkbox-uncheck.svg';
import checkImage from 'assets/images/checkbox-check.svg';

class Tasks extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: 'Sign contract for "What are conference organizers afraid of?"',
        completed: false
      },
      {
        id: 2,
        content: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
        completed: false
      },
      {
        id: 3,
        content: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit	',
        completed: false
      },
      {
        id: 4,
        content: 'Create 4 Invisible User Experiences you Never Knew About',
        completed: false
      },
      {
        id: 5,
        content: 'Read "Following makes Medium better"	',
        completed: false
      },
      {
        id: 6,
        content: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
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
  }

  deleteTodo = todoId => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    });
  }

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
            <div className={cx("todo-item", {completed: todo.completed})} key={todo.id}>
              <div className="todo-item-wrapper">
              <label className={cx("checkbox", {
                  checked: todo.completed
                })}
                >
                  <span className="icons">
                    <img className="first-icon" src={uncheckImage} width={17} />
                    <img className="second-icon" src={checkImage} width={17} />
                  </span>
                  <input type="checkbox" data-toggle="checkbox" checked={todo.completed} onChange={() => this.toggleComplete(todo.id)} />
                </label>
                <div className="todo-content">{todo.content}</div>
                <a onClick={() => this.resolve(todo.id)}>
                  &times;
                </a>
              </div>
            </div>
          ))}
          </form>


        </div>
        <div className="footer">
          <hr />
          <div className="stats">
            <i className="fa fa-history"></i> Latest received 1 second ago
              </div>
        </div>
      </div>
    );
  }
}

export default Tasks;