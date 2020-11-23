import React from 'react'
import User from './components/Users/User'
import UsersList from './components/Users/UsersList'
import { connect } from 'react-redux'
import './App.css'
import { getUsers } from './redux/users/actions'

import Loading from './components/Loading/Loading'
import Options from './components/Options/Options'


interface stateTypes {
  count: number,
  sortType: string | null
}
class App extends React.Component <any, stateTypes>{

  state = {
    count: 10,
    sortType: 'ASC'
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
    
    const {users, isLoading} = this.props


    return <div className="app">
      <h1>Jetlyn test app</h1>

      {isLoading && 
        <Loading />
      }
            
      <Options 
        isLoading={isLoading}
        getUsers={this.getUsersHandler.bind(this)}
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
                    timestamp={user.timestamp} 
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
  getUsers: (count: number) => dispatch(getUsers(count))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
