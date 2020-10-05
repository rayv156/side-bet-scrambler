const React = require("react");
const Layout = require("../layout.jsx");
const outArr = [1,2,3,4,5,6,7,8,9]
const inArr = [10,11,12,13,14,15,16,17,18]
const checkGuest = (user) => {
    if (user.name === undefined || user.name.length === 0){
       
      } else {
        return ( 
            <>
            <tr>
           <th scope="row">{user.name}</th>
           {user.round.map((item)=>{
               
               return (
                   <td>{item}</td>
               )
             })}
             </tr>
             </>
        )
      }
}

const checkGuestPartTwo = (user, num) => {
    if (user.name.length > 0){
       return ( 
           user.round.map((item)=>{
        return ( <input type="hidden" name={`${"guest"+num+"[round][]"}`} value={item}></input>
        )
           })
       )
      } else {
      }
}


class Show extends React.Component {
    render() {
        const {user, round} = this.props
      return (
        <Layout title="Side-Bet Scrambler">
             <>
             <a href="/profile/history"><i class="fas fa-arrow-alt-circle-left"></i>Back</a>
                <h3>{round.course}</h3>
                <h6>{round.date}</h6>
                <form action={`/profile/history/${round._id}?_method=DELETE`} method="POST">
                            <input className="btn btn-danger" type="submit" value="Delete"/>
                        </form>
            <div className="table-responsive">
          <table className="table">
          <thead className="thead-dark">
              <tr>
                  <th scope="col" id="fixed">HOLE</th>
                {outArr.map((item)=>{
                    return <th scope="col">{item}</th>
                })}
                <th scope="col">OUT</th>
                {inArr.map((item)=>{
                    return <th scope="col">{item}</th>
                })}
                <th scope="col">IN</th>
                <th scope="col">TOT</th>
    </tr>
   
    
    </thead>
    <tbody>
      <tr>
        <th scope="row">{user.firstName}</th>
        {round.round.map((item)=>{
            return (
                <td>{item}</td>
            )
        })}
        
        
      </tr>

      {checkGuest(round.guest1)}
      {checkGuest(round.guest2)}
      {checkGuest(round.guest3)}
      {checkGuest(round.guest4)}

      
    </tbody>
  </table>

  </div></>
            
            
  

  </Layout>

    )
    }
}

module.exports = Show