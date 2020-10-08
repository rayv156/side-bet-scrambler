const React = require("react");
const Layout = require("../layout.jsx");

const sumScore = (user) => {
let sum1 = 0
      let sum2 = 0
      let sum3 = 0
        for (let i=0; i<=8; i++){
            sum1 += Number(user.round[i])
        }
      for (let i=10; i<=18; i++){
          sum2 += Number(user.round[i])
      }
      sum3 = sum1 + sum2
      return [sum1, sum2, sum3];
    }

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

const checkGuest = (user) => {
    if (user.name.length > 0){
       return ( 
       <>
       <tr>
      <th scope="row">{user.name}</th>
      {user.round.map((item, index)=>{
          if (index === 9){
            return <td>{sumScore(user)[0]}</td>
          } if (index === 19){
            return <td>{sumScore(user)[1]}</td>
          } if (index === 20){
            return <td>{sumScore(user)[2]}</td>
          } else {
          return (
              <td>{item}</td>
          )
          }
        })}
        </tr>
        </>
      )
      } else {
      }
}

const checkGuestPartTwo = (user, num, index) => {
    if (user.name.length > 0){
       return ( 
       <>
       <h6>{user.name}: <select className="form-control" name={`${"guest"+num+"[round][]"}`}><option>{user.round[index]}</option>{optionLoop()}</select></h6>
        </>
      )
      } else {
      }
}


class NewRound extends React.Component {
  render() {
      const {user, course, user1} = this.props
    //   let sum1 = 0
    //   let sum2 = 0
    //     for (let i=0; i<=8; i++){
    //         sum1 += Number(user.round[i])
    //     }
    //   for (let i=10; i<=18; i++){
    //       sum2 += Number(user.round[i])
    //   }
    return (
      <Layout title="Side-Bet Scrambler">
          <h3>{new Date().toLocaleDateString()}</h3>
          <h1>{course.name}</h1>
          <button className="btn btn-dark btn-lg btn-block"  aria-expanded="false" data-toggle="collapse" data-target="#fullscore">Scorecard</button>
          <div className="table-responsive" id="fullscore">
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
      {user.round.map((item, index)=>{
          if (index === 9){
            return <td>{sumScore(user)[0]}</td>
          } if (index === 19){
            return <td>{sumScore(user)[1]}</td>
          } if (index === 20){
            return <td>{sumScore(user)[2]}</td>
          } else {
          return (
              <td>{item}</td>
          )
          }
      })}
      
      
    </tr>

      {checkGuest(user.guest1)}
      {checkGuest(user.guest2)}
      {checkGuest(user.guest3)}
      {checkGuest(user.guest4)}

  </tbody>
</table>
</div>
    <form action="/profile/newround?_method=PUT" method="post">
<div className="d-flex table-responsive" id="holes">
    <input type="hidden" name="guest1[name]" value={user.guest1.name}></input>
    <input type="hidden" name="guest2[name]" value={user.guest2.name}></input>
    <input type="hidden" name="guest3[name]" value={user.guest3.name}></input>
    <input type="hidden" name="guest4[name]" value={user.guest4.name}></input>
 
    {course.tees.black.map((item, index)=>{
        if (index === 9){
            return <><input type="hidden" name="round[]" value={user.round[index]}></input>
            <input type="hidden" name="guest1[round][]" value={user.guest1.round[index]}></input>
            <input type="hidden" name="guest2[round][]" value={user.guest2.round[index]}></input>
            <input type="hidden" name="guest3[round][]" value={user.guest3.round[index]}></input>
            <input type="hidden" name="guest4[round][]" value={user.guest4.round[index]}></input>
            </>
        } if(index === 19){
            return <><input type="hidden" name="round[]" value={user.round[index]}></input>
            <input type="hidden" name="guest1[round][]" value={user.guest1.round[index]}></input>
            <input type="hidden" name="guest2[round][]" value={user.guest2.round[index]}></input>
            <input type="hidden" name="guest3[round][]" value={user.guest3.round[index]}></input>
            <input type="hidden" name="guest4[round][]" value={user.guest4.round[index]}></input></>
        } if(index === 20) {
            return <><input type="hidden" name="round[]" value={user.round[index]}></input>
            <input type="hidden" name="guest1[round][]" value={user.guest1.round[index]}></input>
            <input type="hidden" name="guest2[round][]" value={user.guest2.round[index]}></input>
            <input type="hidden" name="guest3[round][]" value={user.guest3.round[index]}></input>
            <input type="hidden" name="guest4[round][]" value={user.guest4.round[index]}></input></>
        }else{
            return <>
            <div className="d-flex flex-column justify-content-between m-1 col-6 bg-light border-dark card" id="each-hole" style={{margin: 20}, {borderRadius: 5}, {width: 500}}>
            <h5>HOLE: {item.hole}</h5>
            <h6>{user.firstName}: <select className="form-control" name="round[]"><option>{user.round[index]}</option>{optionLoop()}</select></h6>
            
            {checkGuestPartTwo(user.guest1, "1", index)}
            
            {checkGuestPartTwo(user.guest2, "2", index)}
            
            {checkGuestPartTwo(user.guest3, "3", index)}
            
            {checkGuestPartTwo(user.guest4, "4", index)}

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
    
        <a href="/profile/summary"><button type="submit" className="btn btn-danger btn-lg btn-block" value="Complete Round">Complete Round</button></a>
    



    </Layout>

    )
    }
}

module.exports = NewRound
