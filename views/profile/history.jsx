const React = require("react");
// const { create } = require("../../models/user.js");
const Layout = require("../layout.jsx");
const outArr = [1,2,3,4,5,6,7,8,9]
const inArr = [10,11,12,13,14,15,16,17,18]
const createOUT = () => {
    for (let i=0; i<=8; i++){
    return <th scope="col">{i}</th>
    }
  }
  const createIN = () => {
    for (let i=10; i<18; i++){
    return <th scope="col">{i}</th>
    }
  }



class History extends React.Component {
    render() {
        const {user, round} = this.props
      return (
        <Layout title="Side-Bet Scrambler">
            {console.log(round)}
            {round.map((item)=>{
            return ( <>
                <h3>{item.course}</h3>
                <h6>{item.date}</h6>
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
        {console.log(item.round)}
        {item.round.map((item)=>{
            return (
                <td>{item}</td>
            )
        })}
        
        
      </tr>
      
    </tbody>
  </table>

  </div></>
            )
            })}
            
  

  </Layout>

    )
    }
}

module.exports = History