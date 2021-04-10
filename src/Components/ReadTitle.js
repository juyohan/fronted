import React, {Component} from 'react';

class ReadTitle extends Component {
    shouldComponentUpdate(nextProps,nextState) {
        console.log("ShouldComponentUpdate", nextProps.data, this.props.data);
        if (nextProps.data === this.props.data){
            if (this.props.data.length === 0) {
                alert("아무 데이터도 없습니다.");
                return false;
            }
            return false;
        }
        return true;
    }

    render() {
        console.log("ReadTitle render");


        return(
            <div>
            <ul>
                {this.props.data.map(todo =>
                    <li key = {todo.id}>
                        {todo.id}
                        {todo.title}
                    </li>
                )}
            </ul>
            </div>
        );
    }
}
export default ReadTitle;