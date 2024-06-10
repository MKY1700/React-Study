// const MyComponenet = props => {
//     const {name, children} = props;
//     return <div>안녕하세요 제 이름은 {props.name} 입니다. <br />
//     children 값은 {props.children}
//     입니다.
//     </div>
// }

import { render } from "@testing-library/react";
import { Component } from "react";
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        const {name, number, children} = this.props;
        return (
            <div>안녕하세요 제 이름은 {name} 입니다. <br />
            children 값은 {children} 입니다.
            제가 좋아하는 숫자는 {number} 입니다.
            </div>
        );
    }
}
MyComponent.defaultProps = {
    name : "기본 이름"
};
//프롭타입으로 검사
MyComponent.propTypes = {
    name : PropTypes.string,
    number : PropTypes.number.isRequired
};
export default MyComponent