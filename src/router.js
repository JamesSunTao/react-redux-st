import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import 'antd/dist/antd.css'

import Header from './components/header'
import Home from './container/Home'
import About from './container/About'


class App extends Component {
   render(){
       return (
         <Router>
            <Switch>
                <Route path="/" render={()=>
                    <Header> 
                        <Switch>          
                            <Route path="/"exact component={Home}> 
                                 
                            </Route>                                                          
                            <Route path="/about" component={About}/>                          
                        </Switch>                               
                    </Header>         
                } ></Route>
            </Switch> 
         </Router>
       )
   }
}


export default App;
ReactDOM.render(<App/>,document.getElementById("root"));
