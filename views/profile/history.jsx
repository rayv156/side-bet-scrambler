const React = require("react");
// const { create } = require("../../models/user.js");
const Layout = require("../layout.jsx");
const outArr = [1,2,3,4,5,6,7,8,9]
const inArr = [10,11,12,13,14,15,16,17,18]

const noHistory = (object, item) =>{
    if (object.length>0){
        return (
            <div className="history-cards">
                
                <h3>{item.course}</h3>
                <h6>{item.date}</h6>
                <h3>Total Score: {item.round[20]}</h3>

            </div>
        )
    } else {
        return (<h1>NO HISTORY</h1>)
    }
}

class History extends React.Component {
    render() {
        const {user, round} = this.props
      return (
        <Layout title="Side-Bet Scrambler">
            <a href="/profile"><i class="fas fa-arrow-alt-circle-left"></i>Back</a>
            {round.reverse().map((item)=>{
                return (
            <div id="history-container">
                {noHistory(round, item)}
                <a href={`/profile/history/${item._id}`}><button className="btn btn-success btn-lg btn-block">View Round</button></a>
            </div>
        )
        })}

  </Layout>

    )
    }
}

module.exports = History