import './App.css';
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header';
import Home from './Home'
import Menu from './Menu'
import Footer from './Footer';
import Checkout from './Checkout';
import Login from './Login';
import {useStateValue} from './StateProvider'
import {auth} from './firebase'

{/* WE NEED REACT ROUTER FOR MULTI-PAGES */}
{/* amazon-clone/login */}
{/* amazon-clone/checkout */}

//  PARA SUBIR LA PAGINA AL HOSTING DE FIREBASE

// {
//   firebase login
//   firebase init
//   build
//   npm run build 
//   firebase deploy
// }

{/* PARA INSTALAR REACT ROUTER 
npm install react-router-dom */}


function App() {
  
  const[{user} , dispatch] = useStateValue();
  // useEffect 
  // Piece of code wich runs based on a give condition
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        // THE USER IS LOGGED IN
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // THE USER IS LOGGED OUT
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
    return() => {
      unsubscribe();
    }
  }, []);

  console.log("USER IS >>>", user);
  
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Header/>
            <Menu/>
            <Checkout/>
            <Footer></Footer>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>

          {/* Direccion raiz de la pagina,es decir, la pagina principal  */}
          <Route path='/'>
            <Header/>
            <Menu/>
            <Home/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
