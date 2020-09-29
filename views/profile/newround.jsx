const React = require("react");
const Layout = require("../layout.jsx");

class NewRound extends React.Component {
  render() {
      const {user, course} = this.props
    return (
      <Layout title="Side-Bet Scrambler">
          <h3>{new Date().toLocaleDateString()}</h3>
          <h1>{course.name}</h1>
          <div className="table-responsive">
        <table className="table">
        <thead className="thead-dark">
            <tr>
  {course.tees.black.map((item)=>{
      return (
      <th scope="col">{item.hole}</th>
      )
  })}
  </tr>
  <tr>
  {course.tees.black.map((item)=>{
      return (
      <th scope="col">{item.par}</th>
      )
  })}
  </tr>
  <tr>
  {course.tees.black.map((item)=>{
      return (
      <th scope="col">{item.yardage}</th>
      )
  })}
  </tr>
  <tr>
  {course.tees.black.map((item)=>{
      return (
      <th scope="col">{item.handicap}</th>
      )
  })}
  </tr>
  
  </thead>
  <tbody>
    <tr>
      <th scope="row">{user.firstName}</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
</table>
</div>


    </Layout>

    )
    }
}

module.exports = NewRound
