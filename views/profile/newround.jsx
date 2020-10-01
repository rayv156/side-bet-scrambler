const React = require("react");
const Layout = require("../layout.jsx");

const optionLoop = () => {
    let option = []
    for (let i=1; i<10; i++){
            option.push(<option value={i}>{i}</option>) 
        }
        return (option)
}

const createRound = (user) => {
    for (let i=0; i<21; i++){
      return (<input type="hidden" name="round[]" value={user.round[i]}></input>)
    }
  }


class NewRound extends React.Component {
  render() {
      const {user, course, user1} = this.props
      let sum1 = 0
      let sum2 = 0
        for (let i=0; i<=8; i++){
            sum1 += Number(user.round[i])
        }
      for (let i=10; i<18; i++){
          sum2 += Number(user.round[i])
      }
    return (
      <Layout title="Side-Bet Scrambler">
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
    <form action="/profile/newround?_method=PUT" method="post">
<div className="d-flex table-responsive" id="holes">
 
    {course.tees.black.map((item, index)=>{
        if (index === 9){
            return <input type="hidden" name="round[]" value={sum1}></input>
        } if(index === 19){
            return <input type="hidden" name="round[]" value={sum2}></input>
        } if(index === 20) {
            return <input type="hidden" name="round[]" value={sum1+sum2}></input>
        }else{
            return <>
            <div className="d-flex flex-column justify-content-between eachhole" style={{backgroundColor: "black"},{color: "white"},{padding: 20}}>
            <h5>HOLE: {item.hole}</h5>
            <h6>{user.firstName}: <select name="round[]"><option>{user.round[index]}</option>{optionLoop()}</select></h6>
            </div>
            </>

        }
    })}
    </div>


    <input type="submit" className="btn btn-success btn-lg btn-block" value="Submit"/>
    </form>
    <br>
    </br>
    <br></br>
    <br></br>

    {/* <form action="/profile/history" method="POST">

        
    <input type="hidden" name="username" value={user.username}></input>
    <input type="hidden" name="course" value={course.name}></input>
        {user.round.map((item)=>{
    return <input type="hidden" name="round[]" value={item}></input>
        })}
    <input type="submit" className="btn btn-danger btn-lg btn-block" value="Complete Round"/>
    </form> */}
    
        <a href="/profile/summary"><button type="submit" className="btn btn-danger btn-lg btn-block" value="Complete Round">Complete Round</button></a>
    



    </Layout>

    )
    }
}

module.exports = NewRound
