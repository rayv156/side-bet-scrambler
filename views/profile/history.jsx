const React = require("react");
// const { create } = require("../../models/user.js");
const Layout = require("../layout.jsx");
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
        const {user, round, user1} = this.props
      return (
        <Layout title="Side-Bet Scrambler">
            {round.map((item)=>{<>
                <h1>{item.course}</h1>
            <div className="table-responsive">
          <table className="table">
          <thead className="thead-dark">
              <tr>
                  <th scope="col" id="fixed">HOLE</th>
                {createIN()}
                <th scope="col">IN</th>
                {createOUT()}
                <th scope="col">OUT</th>
                <th scope="col">TOT</th>
    </tr>
   
    
    </thead>
    <tbody>
      <tr>
        <th scope="row">{user.firstName}</th>
        {item.round.map((item)=>{
            return (
                <td>{item}</td>
            )
        })}
        
        
      </tr>
      
    </tbody>
  </table>
  </div></>
            })}
            
  

  </Layout>

    )
    }
}

module.exports = History