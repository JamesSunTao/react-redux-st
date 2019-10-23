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
            </Card>           
        )
    }
}

export default Home;