import React, {Component} from 'react';

class InsertTitle extends Component {
    render() {
        console.log("InsertTitle render()");
        return(
            <div>
                <form method="POST" onSubmit={
                    function(e) {
                        e.preventDefault();
                        // debugger;
                        if (e.target.title.value !== ""){
                            this.props.onSubmit(
                                e.target.title.value
                            )
                            fetch("http://localhost:8080/todos/store", {
                                method : "post",
                                headers : {
                                    'Content-type' : 'application/json;charset=utf-8'
                                },
                                body : JSON.stringify(e.target.title.value)
                            }).then(res => res.json())
                                .catch(err => console.log(err));
                        }
                        else {
                            alert("값을 입력해주세요!");
                        }
                    }.bind(this)}>
                    <p>
                       <input type="text" name="title"/>
                    </p>
                    <p>
                        <input type="submit"/>
                    </p>
                </form>
            </div>
        );
    }
}
export default InsertTitle;