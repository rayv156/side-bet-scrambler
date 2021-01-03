const React = require("react");
const Index = require("../index.jsx");

class SignUp extends React.Component {
  render() {
    return (
      <Index title="SIGNUP">
        <div className="form-container">
        <img src="https://i.imgur.com/CKea2dD.png?1" style={{width: 50, backgroundColor: 'green', margin: '10px 0px'}}></img>
        <form action="/signup" method="post">
          <div className="form-group">
          <input type="text" className="form-control" name="username" placeholder="username" />
          </div>
          <div className="form-group">
          <input type="password" className="form-control" name="password" placeholder="password" />
          </div>
          <div className="form-group">
          <input type="text" className="form-control" name="firstName" placeholder="first name" />
          </div>
          <div className="form-group">
          <input type="text" className="form-control" name="lastName" placeholder="last name" />
          </div>
          <div className="form-group">
          <input type="number" className="form-control" name="handicap" placeholder="handicap" />
          </div>
          <input type="submit" className="btn btn-primary" value="Sign Up" />
        </form>
        </div>
      </Index>
    );
  }
}

module.exports = SignUp;
