const React = require("react");
const Layout = require("../layout.jsx");

class SignUp extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <form action="/signup" method="post">
          <div className="form-group">
          <label>User Name: </label>
          <input type="text" className="form-control" name="username" placeholder="username" />
          </div>
          <div className="form-group">
          <label>Password: </label>
          <input type="password" className="form-control" name="password" placeholder="password" />
          </div>
          <div className="form-group">
          <label>First Name: </label>
          <input type="text" className="form-control" name="firstName" placeholder="first name" />
          </div>
          <div className="form-group">
          <label>Last Name: </label>
          <input type="text" className="form-control" name="lastName" placeholder="last name" />
          </div>
          <div className="form-group">
          <label>Handicap: </label>
          <input type="number" className="form-control" name="handicap" placeholder="handicap" />
          </div>
          <input type="submit" className="btn btn-primary" value="Sign Up" />
        </form>
      </Layout>
    );
  }
}

module.exports = SignUp;
