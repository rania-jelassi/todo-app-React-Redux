import React, { Component } from "react";
import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import { recup, comp, del, edit, setEdit } from "./Action";
import { connect } from "react-redux";

const mapStateToProps = state => ({ tab: state.todos });
const mapDispatchToProps = dispatch => ({
  add: newInput => dispatch(recup(newInput)),
  complete: tab => dispatch(comp(tab)),
  delete: tab => dispatch(del(tab)),
  edit: data => dispatch(edit(data)),
  setEdit: id => dispatch(setEdit(id))
});

class App extends Component {
  state = {
    newInput: ""
  };

  Recup = el => {
    el.preventDefault();
    this.setState({ newInput: "" });
  };
  render() {
    return (
      <>
        <div className="App">
          <h2 className="title"> Daily Todo Lists</h2>
          <div className="add-input">
            <form onSubmit={this.Recup}>
              <input
                type="text"
                placeholder="Add your todo"
                className="My-Input"
                value={this.state.newInput}
                onChange={e => this.setState({ newInput: e.target.value })}
              />
              <button
                className="Add"
                onClick={() => this.props.add(this.state.newInput)}
              >
                {" "}
                +{" "}
              </button>
            </form>
          </div>
        </div>

        {this.props.tab.map((el, key) => (
          <div key={key} className="buttons">
            <form i={key} onSubmit={this.Recup} className="edit">
              {el.isEdited ? (
                <>
                  <input
                    type="text"
                    placeholder="Change your todo"
                    value={this.state.newInput}
                    onChange={e => this.setState({ newInput: e.target.value })}
                  />
                  <button
                    id={key}
                    onClick={e =>
                      this.props.edit({
                        id: e.target.id,
                        text: this.state.newInput
                      })
                    }
                  >
                    Save
                  </button>
                </>
              ) : null}{" "}
              <button
                id={key}
                className="color-edit"
                onClick={e => this.props.setEdit(e.target.id)}
              >
                {" "}
                Edit
              </button>
            </form>

            <button
              id={key}
              onClick={e => this.props.delete(e.target.id)}
              className="delete"
            >
              Delete
            </button>
            <button id={key} onClick={e => this.props.complete(e.target.id)}>
              {el.terminer ? "undo" : "Complete"}
            </button>
            <span key={key} className={el.terminer ? "check" : ""}>
              {el.text}
            </span>
          </div>
        ))}
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
