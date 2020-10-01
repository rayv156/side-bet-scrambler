const React = require("react");
const Layout = require("../layout.jsx");
const createRound = (user) => {
    for (let i=0; i<21; i++){
    <input type="hidden" name="round[]" value={user.round[i]}></input>
    }
  }


class Summary extends React.Component {
    render() {
        const {user, course, user1} = this.props
      return (
        <Layout title="Side-Bet Scrambler">
            <a href="/profile/newround"><h3>Go Back to Edit Round</h3></a>
            <h3>{new Date().toLocaleDateString()}</h3>
            <h1>{course.name}</h1>
            <div className="table-responsive">
          <table className="table">
          <thead className="thead-dark">
              <tr>
                  <th scope="col" id="fixed">HOLE</th>
    {course.tees.black.map((item)=>{
        return (
        <th scope="col">{item.hole}</th>
        )
    })}
    </tr>
    <tr>
    <th scope="col" id="fixed">PAR</th>
    {course.tees.black.map((item)=>{
        return (
        <th scope="col">{item.par}</th>
        )
    })}
    </tr>
    <tr>
    <th scope="col" id="fixed">YDS</th>
    {course.tees.black.map((item)=>{
        return (
        <th scope="col">{item.yardage}</th>
        )
    })}
    </tr>
    <tr>
    <th scope="col" id="fixed">HCP</th>
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
        {user.round.map((item)=>{
            
            return (
                <td>{item}</td>
            )
        })}
        
        
      </tr>
      
    </tbody>
  </table>
  </div>
  <form action="/profile/history" method="POST">

        
        <input type="hidden" name="username" value={user.username}></input>
        <input type="hidden" name="course" value={course.name}></input>
        {console.log(user.round)}
        {console.log(user.username)}
        {console.log(course.name)}
        {user.round.map((item)=>{
            return (
            <input type="hidden" name="round[]" value={item}></input>
            )
        })}
        <input type="submit" className="btn btn-danger btn-lg btn-block" value="Complete Round"/>
    </form>

  </Layout>

    )
    }
}

module.exports = Summary