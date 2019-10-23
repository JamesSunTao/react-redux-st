import React ,{Component} from 'react';
import { Card } from 'antd';



class News1 extends  Component{

    render(){
        return (<Card title="News1">
                <ul>
                    <li>路由传参方式：query</li>
                    <li>动态参数：{this.props.location.query.newsId}</li>
                </ul>
        </Card>)
    }
}

export default News1;
