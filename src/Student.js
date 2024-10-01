import { Component } from "react";

// class Student extends Component {
//   render() {
//     const { name, marks } = this.props;
//     return (
{
  /* <>
  <h1>hello, {name}</h1>
  <p>marks :{marks}</p>
  <hr />
</>; */
}
//     );
//   }
// }
function Student(props) {
  const { name, marks } = props;
  return (
    <>
      <h1>hello, {name}</h1>
      <p>marks :{marks}</p>
      <hr />
    </>
  );
}
export default Student;
