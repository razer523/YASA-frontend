import React, { Component } from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import CreatePost from './CreatePost';
import Home from './Home';
import Login from './Login';
import './Navbar.css';
import Posts from './Posts';
import Profile from './Profile';
import Signout from './Signout';
import Signup from './Signup';


// export class Navbar extends Component {
//     render(){
//     return (
//         <Router>
//          <nav className="navbar">
//              <div className="navbar-container">
//                  <Link to="/" className="navbar-logo">
//                      Yard Sale Locator 
//                  </Link>
//                  <ul className='nav-menu'>
//                      <li className='nav-item'>
//                          <Link to='/' className='nav-links'>
//                              Home
//                          </Link>
//                      </li>
                     
//                      <li className='nav-item'>
//                      {localStorage.getItem("userToken") === null ? 
//                          <Link to='/login' className='nav-links'>
//                              Log In
//                          </Link> :
//                          <Link to='/post' className='nav-links'>
//                              Posts
//                          </Link> 
//                          }
//                      </li> 
//                      <li className='nav-item'>
//                      {localStorage.getItem("userToken") === null ? 
//                          <Link to='/signup' className='nav-links'>
//                              Sign Up
//                          </Link> :
//                          <Link to='/profile' className='nav-links'>
//                              Profile
//                          </Link> 
//                          }
//                      </li> 
//                      <li className='nav-item'>
//                      {localStorage.getItem("userToken") === null ? ""
//                           :
//                          <Link to='/signout' className='nav-links'>
//                              Sign Out
//                          </Link> 
//                          }
//                      </li> 
//                  </ul>
//             </div>
//          </nav>
//          <div>
//                      <Route exact path='/' component={Home}/>
//                      <Route path='/login' component={Login}/>
//                      <Route path='/register' component={Signup}/>
//                      <Route path='/post' component={Posts}/>
//                      <Route path='/profile' component={Profile}/>                    
//                      <Route path='/signout' component={Signout}/>                  
//                      <Route path='/createpost' component={CreatePost}/>
//                  </div>
//         </Router>
//     )
//                         }
// };

// export default Navbar

export class Navbar extends Component {
    render(){
    return (
        <Router>
         <nav className="navbar">
             <div className="navbar-container">
                 <Link to="/" className="navbar-logo">
                     Yard Sale Locator 
                 </Link>
                 <ul className='nav-menu'>
                     <li className='nav-item'>
                         <Link to='/' className='nav-links'>
                             Home
                         </Link>
                     </li>
                     <li className='nav-item'>
                         <Link to='/login' className='nav-links'>
                             Log In
                         </Link>
                     </li>
                     <li className='nav-item'>
                         <Link to='/register' className='nav-links'>
                             Sign Up
                         </Link>
                     </li>
                     <li className='nav-item'>
                        <Link to='/post' className='nav-links'>
                            Posts
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/profile' className='nav-links'>
                            Profile
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/signout' className='nav-links'>
                            Sign Out
                        </Link>
                    </li>
                 </ul>
            </div>
         </nav>
         <div>
                     <Route exact path='/' component={Home}/>
                     <Route path='/login' component={Login}/>
                     <Route path='/register' component={Signup}/>
                     <Route path='/post' component={Posts}/>
                     <Route path='/profile' component={Profile}/>                    
                     <Route path='/signout' component={Signout}/>                  
                     <Route path='/createpost' component={CreatePost}/>
                 </div>
        </Router>
    )
    }
};

export default Navbar

// function Navbar() {
//     if(localStorage.getItem("userToken") === null) {
//     return (
//         <Router>
//          <nav className="navbar">
//              <div className="navbar-container">
//                  <Link to="/" className="navbar-logo">
//                      Yard Sale Locator 
//                  </Link>
//                  <ul className='nav-menu'>
//                      <li className='nav-item'>
//                          <Link to='/' className='nav-links'>
//                              Home
//                          </Link>
//                      </li>
//                      <li className='nav-item'>
//                          <Link to='/login' className='nav-links'>
//                              Log In
//                          </Link>
//                      </li>
//                      <li className='nav-item'>
//                          <Link to='/register' className='nav-links'>
//                              Sign Up
//                          </Link>
//                      </li>
//                  </ul>
//             </div>
//          </nav>
//          <div>
//                      <Route exact path='/' component={Home}/>
//                      <Route path='/login' component={Login}/>
//                      <Route path='/register' component={Signup}/>
//                  </div>
//         </Router>
//     )
// } else {
//     return (
//         <Router>
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <Link to="/" className="navbar-logo">
//                     Yard Sale Locator 
//                 </Link>
//                 <ul className='nav-menu'>
//                     <li className='nav-item'>
//                         <Link to='/' className='nav-links'>
//                             Home
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to='/post' className='nav-links'>
//                             Posts
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to='/profile' className='nav-links'>
//                             Profile
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to='/signout' className='nav-links'>
//                             Sign Out
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//          <div>
//                      <Route exact path='/' component={Home}/>
//                      <Route path='/post' component={Posts}/>
//                      <Route path='/profile' component={Profile}/>                    
//                      <Route path='/signout' component={Signout}/>                  
//                      <Route path='/createpost' component={CreatePost}/>
//                  </div>
//        </Router>
//     )
// }
// };

// export default Navbar
