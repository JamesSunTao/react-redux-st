import React ,{Component} from 'react';
import { Card } from 'antd';



class Home1 extends  Component{

    render(){
        return (<Card title="Home1">
                <ul>
                    <li>路由传参方式：params</li>
                    <li>动态参数：{this.props.match.params.homeId}</li>
                </ul>
        </Card>)
    }
}

export default Home1;
