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

const checkGuestPartTwo = (user, num) => {
    if (user.name.length > 0){
       return ( 
           user.round.map((item, index)=>{

        if (index === 9){
                return <input type="hidden" name={`${"guest"+num+"[round][]"}`} value={sumScore(user)[0]}></input>
              } if (index === 19){
                return <input type="hidden" name={`${"guest"+num+"[round][]"}`} value={sumScore(user)[1]}></input>
              } if (index === 20){
                return <input type="hidden" name={`${"guest"+num+"[round][]"}`} value={sumScore(user)[2]}></input>
              } else {
            
                  return (
                  <input type="hidden" name={`${"guest"+num+"[round][]"}`} value={item}></input>
                  )
              }
           })
       )
      } else {
      }
}



class Summary extends React.Component {
    render() {
        const {user, course} = this.props
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
  <form action="/profile/summary" method="POST">

        
        <input type="hidden" name="user" value={user.username}></input>
        <input type="hidden" name="course" value={course.name}></input>
        <input type="hidden" name="date" value={new Date()}></input>
        <input type="hidden" name="guest1[name]" value={user.guest1.name}></input>
        <input type="hidden" name="guest2[name]" value={user.guest2.name}></input>
        <input type="hidden" name="guest3[name]" value={user.guest3.name}></input>
        <input type="hidden" name="guest4[name]" value={user.guest4.name}></input>
        {user.round.map((item, index)=>{
            if (index === 9){
                return <input type="hidden" name="round[]" value={sumScore(user)[0]}></input>
              } if (index === 19){
                return <input type="hidden" name="round[]" value={sumScore(user)[1]}></input>
              } if (index === 20){
                return <input type="hidden" name="round[]" value={sumScore(user)[2]}></input>
              } else {
            
                  return (
                  <input type="hidden" name="round[]" value={item}></input>
                  )
              }
        })}
        {checkGuestPartTwo(user.guest1, "1")}
            
            {checkGuestPartTwo(user.guest2, "2")}
            
            {checkGuestPartTwo(user.guest3, "3")}
            
            {checkGuestPartTwo(user.guest4, "4")}
        <input type="submit" className="btn btn-danger btn-lg btn-block" value="Complete Round"/>
    </form>

  </Layout>

    )
    }
}

module.exports = Summary