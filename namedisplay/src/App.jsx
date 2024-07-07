import './App.css'
import Login from './components/Login'
import UsercontextProvider from './context/providecontext'
import Profile from './components/Profile'


function App() {
    return (
      <UsercontextProvider>
        <h1>Welcome</h1>
        <Login/>
        <Profile/>
      </UsercontextProvider>
    )
  }


export default App
