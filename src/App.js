import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react';


const auth = getAuth(app);
function App() {
  const [user, setUsers] = useState({})
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUsers(user);
        console.log(user);
      })
      .catch(error => {
        console.log('error', error);
      })
  }
  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUsers({})
      })
      .catch(() => {
        setUsers({})
      })
  }
  return (
    <div className="App">
      {
        user.email ? <button onClick={handleSingOut}>Sing Out</button> :
          <button onClick={handleGoogleSignIn}>Google Sign In</button>

      }
      <h2>Name: {user.displayName}</h2>
      <p>I know Your email: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
