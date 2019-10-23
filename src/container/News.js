import React from 'react'
import { Card } from 'antd'
import {Link ,Route,Switch} from 'react-router-dom'

class News extends React.Component{

    render(){
        return (
            <Card title="News页面">
                <div className="home-warp">
                   欢迎进入主页面
                </div>
                <ul>
                    <li>
                        <Link to={{pathname:'/news1',query:{newsId:'111111'}}}>news新闻列表111111</Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/news1',query:{newsId:'222222'}}}>news新闻列表222222</Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/news1',query:{newsId:'333333'}}}>news新闻列表333333</Link>
                    </li>
                </ul>
               
            </Card>           
        )
    }
}

export default News;