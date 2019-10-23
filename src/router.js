import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import 'antd/dist/antd.css'

import Header from './components/header'
import Home1 from './components/Home1'
import News1 from './components/News1'
import Home from './container/Home'
import About from './container/About'
import News from './container/News'

class App extends Component {
   render(){
       return (
         <Router>
            <Switch>
                <Route path="/" render={()=>
                    <Header> 
                        <Switch>          
                            <Route path="/"exact component={Home}/>   
                            <Route path="/home1/:homeId"  component={Home1}/>                                                                                                                 
                            <Route path="/about" component={About}/>   
                            <Route path="/news" component={News}/> 
                            <Route path="/news1" component={News1}></Route>
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
