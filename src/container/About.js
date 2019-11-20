import React from 'react'
import {NavLink,Route} from 'react-router-dom'
import {Card} from 'antd'
import About1 from '../components/about1'
import About2 from '../components/about2'

class About extends React.Component{

    render(){
        return (
            <Card title="about页面">
                <div className="home-warp">
                   欢迎进入About页面
                </div>
                <ul>
                    <li>
                        <NavLink to="/about/about1">about1页面</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about/about2">about2页面</NavLink>
                    </li>
                </ul>
                <div>
                    <Route path="/about" exact  component={About1}></Route>
                    <Route path="/about/about1"  component={About1}></Route>
                    <Route path="/about/about2"  component={About2}></Route>
                </div>
            </Card>
        )
    }
}

export default About;