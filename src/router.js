import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import 'antd/dist/antd.css'
//---------关键代码--------start
import { Provider } from 'react-redux'
import store from './store'

import Header from './components/header'
import Home1 from './components/Home1'
import News1 from './components/News1'
import Home from './container/Home'
import About from './container/About'
import News from './container/News'
import Member from './container/Member'
import Groups from './container/Groups'
import Hooks from './container/Hooks'
// import NoMatch from './container/NoMatch'

const App =  (
    <Provider store={store}>
         <Router>
            <Switch>
                <Route path="/" render={()=>
                    <Header> 
                        <Switch>          
                            <Route path="/"exact component={Home}/>   
                            <Route path="/home1/:homeId"  component={Home1}/>                                                                                                                 
                            <Route path="/about" component={About}/>   
                            <Route path="/member" component={Member}/>  
                            <Route path="/groups" component={Groups}/>
                            <Route path="/hooks" component={Hooks}/>
                            <Route path="/news" component={News}/> 
                            <Route path="/news1" component={News1}></Route>
                            {/* <Route  component={NoMatch}/>  */}
                        </Switch>                               
                    </Header>         
                } ></Route>
            </Switch> 
         </Router>
    </Provider>     
)


ReactDOM.render(App,document.getElementById("root"));
