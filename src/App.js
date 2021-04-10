import './App.css';
import React, {Component} from "react";
import InsertTitle from "./Components/InsertTitle";
import ReadTitle from "./Components/ReadTitle";
import Controll from "./Components/Controll";
import ModifyTitle from "./Components/ModifyTitle";


class App extends Component{
  constructor(props) {
      super(props);
      console.log("Constructor Method");
      this.state = {
          mode : 'ViewSubject',
          name: '주또공',
          todos: []
      }
      // this.handleOnChange = this.handleOnChange.bind(this);
  }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("ShouldComponentUpdate", nextProps.data);
    //     return true;
    // }

    // handleOnChange(e) {
    //   let i = 3;
    //   let _todos = Object.assign(this.state.todos);
    //   _todos.push({id:i, title : })
    //     this.setState({
    //         todos : _todos
    //     })
    //     console.log(e.target.value);
    // }

  componentDidMount() {
    fetch("http://localhost:8080/todos/find")
        .then(response => response.json())
        .then(
            (result) => {
                if (result.length !== 0) {
                    this.setState({
                        todos : result
                    });
                }
                else {
                    alert("아직 데이터가 없으니 데이터를 저장해주세요.");
                }
        })
        .catch(err => console.log(err));
    console.log("ComponentDidMount Method");
  }

  createTitle() {
      let _todos = null;
      if (this.state.mode === 'InsertTitle') {
          _todos = <InsertTitle onSubmit={function (_title) {
              let newTodos = Array.from(this.state.todos);
              newTodos.push({id : this.state.todos.length + 1,title: _title}); // 임시방편으로 id의 값을 넣음
              this.setState({
                  todos: newTodos
              });
              console.log("createTitle");
          }.bind(this)
          }/>
      }
      else if (this.state.mode === 'ViewSubject') {
          _todos = <ReadTitle data={this.state.todos}/>
      }
      else if (this.state.mode === 'ModifySubject') {
          _todos = <ModifyTitle data={this.state.todos} />
      }
      return _todos;
  }

  render() {
    console.log("render Method");
    return (
        <div className="App">
            <Controll onChangeMode={function(_mode) {
                this.setState({
                    mode : _mode
                });
            }.bind(this)} />
            {this.createTitle()}
        </div>
    );
  }
}

export default App;
