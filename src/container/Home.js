import React from 'react'
import { Card } from 'antd'
import {Link ,Route,Switch} from 'react-router-dom'


class Home extends React.Component{

    render(){
        return (
            <Card title="home页面">
                <div className="home-warp">
                   欢迎进入主页面
                </div>
                <ul>
                    <li>
                        <Link to="/home1/111111">新闻列表111111</Link>
                    </li>
                    <li>
                        <Link to="/home1/222222">新闻列表222222</Link>
                    </li>
                    <li>
                        <Link to="/home1/333333">新闻列表333333</Link>
                    </li>
                </ul>
            </Card>           
        )
    }
}

export default Home;