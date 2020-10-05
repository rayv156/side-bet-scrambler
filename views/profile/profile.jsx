const React = require("react");
const Layout = require("../layout.jsx");

const showContinueRound = (user) => {
  if (user.currentCourse === undefined){

  } else {
    return (<a className="text-my-own-color" href="/profile/newround"><div className="box cont-round"><h4 id="new-round">Continue Round</h4><img src="https://st.depositphotos.com/1526816/4223/v/450/depositphotos_42230665-stock-illustration-a-golf-course.jpg"/></div></a>
    )}
}

const displayRound = (object) =>{
  if (object.length>0){
    return (
    <><h3>Previous Round: {object[object.length-1].round[20]}</h3>
    <h3>Average Score: {(object.reduce((sum, item)=>{
      return sum += Number(item.round[20])/object.length
    },0)).toFixed(2)}</h3>
    </>)
  } else {

  }
}

class Profile extends React.Component {
  render() {
      const {user, course, round} = this.props
    return (
      <Layout title="Side-Bet Scrambler">
        <h1>Home</h1>
        <a className="text-my-own-color" id="startroundbutton" data-toggle="modal" data-target="#exampleModalCenter"><div>
        <button className="btn btn-dark"><i class="fas fa-plus-circle"></i>New Round</button></div></a>
        <div id="container">

        <a className="text-my-own-color" href='/profile/history'><div className="box">
          <h3>{user.firstName} {user.lastName}</h3>
          <h3>Handicap: {user.handicap}</h3>
          {displayRound(round)}
          
          </div></a>
        {showContinueRound(user)}
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
          <label>Guest 1</label>
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
          <input type="hidden" name="guest4[round][]"></input>
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
