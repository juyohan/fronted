import React, {Component} from 'react';

class Controll extends Component {
    render() {
        return(
            <header>
                <ul>
                    <li>
                        <a href="/InsesrtTitle" onClick={function(e) {
                            e.preventDefault();
                            this.props.onChangeMode('InsertTitle');
                        }.bind(this)}>과목넣기</a>
                    </li>
                    <li>
                        <a href="/ViewSubject" onClick={function(e) {
                            e.preventDefault();
                            this.props.onChangeMode('ViewSubject');
                        }.bind(this)}>과목보기</a>
                    </li>
                    <li>
                        <a href="/ModifySubject" onClick={function(e) {
                            e.preventDefault();
                            this.props.onChangeMode('ModifySubject');
                        }.bind(this)}>과목수정</a>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Controll;