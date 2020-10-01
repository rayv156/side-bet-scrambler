const React = require("react");
const Layout = require("../layout.jsx");

const displayRound = (object) =>{
  if (object.length>0){
    return (<h3>Previous Round: {object[0].round[20]}</h3>)
  } else {

  }
}

class Profile extends React.Component {
  render() {
      const {user, course, round} = this.props
    return (
      <Layout title="Side-Bet Scrambler">
        <h1>Home</h1>
        <div id="container">
        <a className="text-my-own-color" data-toggle="modal" data-target="#exampleModalCenter"><button className="btn btn-success btn-lg btn-block"><i class="fas fa-plus-circle"></i>Start a New Round</button></a>

        <a className="text-my-own-color" href='/profile/history'><div className="box">
          <h3>{user.firstName} {user.lastName}</h3>
          <h3>Handicap: {user.handicap}</h3>
          {displayRound(round)}
          
          </div></a>
        <a className="text-my-own-color" href="/profile/newround"><div className="box"><h4 id="new-round">Continue Round</h4><img src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/></div></a>
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
          {/* <label>Guest 1</label>
          <input type="text" name="guest1[name]" className="form-control"></input>
          <input type="hidden" name="guest1[round][]"></input>
          <label>Guest 2</label>
          <input type="text" name="guest2[name]" className="form-control"></input>
          <input type="hidden" name="guest2[round][]"></input>
          <label>Guest 3</label>
          <input type="text" name="guest3[name]" className="form-control"></input>
          <input type="hidden" name="guest3[round][]"></input>
          <label>Guest 4</label>
          <input type="text" name="guest4[name]" className="form-control"></input>
          <input type="hidden" name="guest4[round][]"></input> */}
          <input type="hidden" name="round[]"></input>
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
