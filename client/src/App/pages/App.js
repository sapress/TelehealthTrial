// App compnent - includes the browser router and NavBar

import React from 'react';
import { Component } from 'react';
import './App.css';

import { NavLink, withRouter } from 'react-router-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// Component Imports
import NavBar from './NavBar';
import Home from './Home';
import List from './List';
import CommunityHome from './CommunityHome';
import StudentSurvey from '.Survey/StudentSurvey';

class App extends Component {
    render() {
        const App = () => (
            <div className="ui container">
                <BrowserRouter>
                    <NavBar />
                    <Route exact path="/" component={Home} />
                    <Route path="/list" component={List} />
                    <Route path="/survey" component={StudentSurvey} />
                    <Route path="/community" component={CommunityHome} />
                </BrowserRouter>
            </div>
        );
        return (
            <Switch>
                <App />
            </Switch>
        );
    }
}

export default App;

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

// export default App;
