const React = require("react");
const Layout = require("../layout.jsx");

class Profile extends React.Component {
  render() {
      const {user, course} = this.props
    return (
      <Layout title="Side-Bet Scrambler">
        <h1>Home</h1>
        <div id="container">
        <a className="text-my-own-color" href='/profile/history/edit'><div className="box">
          <h3>{user.firstName} {user.lastName}</h3>
          <h3>Handicap: {user.handicap}</h3>
          </div></a>
        <a className="text-my-own-color" data-toggle="modal" data-target="#exampleModalCenter"><div className="box"><h4 id="new-round">Start a New Round</h4><img src="https://www.ravinesgolfclub.com/images/Ravines_918-4114RT.jpg"/></div></a>
        </div>
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">New Round</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form action="/profile?_method=PUT" method="post">
          <div className="form-group">
          <label>Pick a Course</label> 
          <select name="currentCourse" className="form-control">
          {course.map((courses)=>{
            return ( <option value={courses.name}>{courses.name}</option>
            )
          })}
          </select>

          </div>
          
          <input type="submit" className="btn btn-success" value="Continue"/>
        </form>
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <input type="submit" className="btn btn-primary">Continue</input>
      </div> */}
    </div>
  </div>
</div>

      </Layout>
    );
  }
}

module.exports = Profile;
