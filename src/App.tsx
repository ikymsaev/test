import React from 'react'
import User from './components/Users/User'
import UsersList from './components/Users/UsersList'
import { connect } from 'react-redux'
import './App.css'
import { getUsers } from './redux/users/actions'

import { usersTypes } from './redux/users/reducer'
import Loading from './components/Loading/Loading'


interface stateTypes {
  users: Readonly<usersTypes[] | null>,
  count: number,
  isLoading: boolean
}
class App extends React.Component <any, stateTypes>{

  constructor(props: any){
    super(props)
    this.state = {
      users: null,
      count: 10,
      isLoading: false
    }
  }
  componentDidMount() {
    this.getData(this.state.count)
  }
  componentDidUpdate(){
    if(this.props.users !== this.state.users){
      this.setState({users: this.props.users})
    }
    if(this.props.isLoading !== this.state.isLoading){
      this.setState({isLoading: this.props.isLoading})
    }
  }
  getData(count: number) {
    this.props.getUsers(count)
  }
  onRangeChange(e: any){
    this.setState({count: e.target.value})
  }
  getUsersHandler(){
    this.getData(this.state.count)
  }

  render() {
    


    
    return <div className="app">
      <h1>Jetlyn test app</h1>
      {this.state.isLoading && 
            <Loading />}
            
      <div>
        <input type="range" min="10" max="1000" value={this.state.count} step='55'
          onChange={this.onRangeChange.bind(this)} />
        <span>{this.state.count}</span>
        <button 
          onClick={this.getUsersHandler.bind(this)} 
          disabled={this.state.isLoading}>
          show</button>
      </div>

      
        <UsersList>
        {this.state.users &&
          this.state.users.map((user: any) => {
            return <User 
                    key={user.id+user.email} 
                    firstName={user.firstName} 
                    lastName={user.lastName}
                    email={user.email}
                    message={user.message}
                    phone={user.phone}
                    timestamp={user.timestamp} />
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
