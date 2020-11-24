import React from 'react'
import User from './components/Users/User'
import UsersList from './components/Users/UsersList'
import { connect } from 'react-redux'
import './App.css'
import { getUsers, sortUsers } from './redux/users/actions'
import Loading from './components/Loading/Loading'
import Options from './components/Options/Options'

interface stateTypes {
  count: number
}
class App extends React.Component <any, stateTypes>{

  state = {
    count: 10
  }
  componentDidMount() {
    this.getData(this.state.count)
  }
  getData(count: number) {
    this.props.getUsers(count)
  }
  getUsersHandler(count: number){
    this.getData(count)
  }

  render() {
    const { users, isLoading, sortUsers } = this.props

    return <div className="app">
      <h1>Jetlyn test app</h1>
      {isLoading && 
        <Loading />
      }   
      <Options 
        isLoading={isLoading}
        getUsers={this.getUsersHandler.bind(this)}
        sortUsers={sortUsers}
      />
      <UsersList>
        {users &&
          users.map((user: any) => {
            return <User 
                    key={user.id+user.email} 
                    firstName={user.firstName} 
                    lastName={user.lastName}
                    email={user.email}
                    message={user.message}
                    phone={user.phone}
                    date={user.date}
                  />
          })}
      </UsersList>
    </div>
  }
}

const mapStateToProps = (state: any) => ({
  users: state.users,
  isLoading: state.app.isLoading
})
const mapDispatchToProps = (dispatch: any) => ({
  getUsers: (count: number) => dispatch(getUsers(count)),
  sortUsers: (order: string) => dispatch(sortUsers(order))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
