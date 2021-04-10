import React, {Component} from "react";

class ModifyTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            title : ''
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.changeData = this.changeData.bind(this);
    }

    // handleChange(e) {
    //     // debugger;
    //     console.log(e.target.form.selected.value);
    //     // this.setState({
    //     //     title : e.target.form.select.value
    //     // });
    //     // console.log(this.state.title);
    // }
    changeHandler(e) {
        let i = 0;
        while(this.props.data[i]) {
            if(this.props.data[i].title === e.target.value) {
                this.setState({
                    id : this.props.data[i].id,
                    title : e.target.value
                });
            }
            i++;
        }
    }

    changeData(e) {
        this.setState({
            value : e.target.value
        })
    }


    render() {
        return (
            <div>
                <form action="modifyData" method="post" onSubmit={function(e) {
                    e.preventDefault();

                }}>
                    <select id="modify" onChange={this.changeHandler}>
                        {this.props.data.map(todo =>
                            <option key={todo.id} value={todo.title}>
                                {todo.title}
                            </option>)
                        }
                    </select>
                    <input type="text" value={this.state.title} onChange={this.changeData}/>
                    <p>
                        <input type="submit"/>
                    </p>
                </form>
            </div>
        );
    }
}

export default ModifyTitle;