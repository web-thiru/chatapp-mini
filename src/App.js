import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import Home from './Home';
import SignOut from './components/SignOut';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div>
        {user?<SignOut/>:<SignIn/>}
        {user?<Chat/>:<Home/>}


    </div>
  );
}

export default App;
