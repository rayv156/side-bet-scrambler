const React = require('react')
const Layout = require("../layout.jsx")

class Edit extends React.Component {
    render(){
        const {user} = this.props
        return (
            <Layout>

        <form action="/profile?_method=PUT" method="post">
          <div className="form-group">
          <label>User Name: </label>
          <input type="text" className="form-control" name="username" value={user.username}/>
          </div>
          <div className="form-group">
          <label>First Name: </label>
          <input type="text" className="form-control" name="firstName" value={user.firstName} />
          </div>
          <div className="form-group">
          <label>Last Name: </label>
          <input type="text" className="form-control" name="lastName" value={user.lastName} />
          </div>
          <div className="form-group">
          <label>Handicap: </label>
          <input type="text" className="form-control" name="handicap" value={user.handicap} />
          </div>
          <input type="submit" className="btn btn-primary" value="Update" />
        </form>
               
            </Layout>
        )

    }
}

module.exports = Edit;