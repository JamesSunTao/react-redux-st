import React ,{Component} from 'react';
import { Card } from 'antd';



class News1 extends  Component{
    constructor(props){
        super(props);
        this.state = {          
            newsData:{},
            name:'suntao'
        }
    }
    componentDidMount(){
        let recvParam;
        if(this.props.location && this.props.location.query){//判断当前有参数
            recvParam = this.props.location.query;
            
            sessionStorage.setItem('newsData', JSON.stringify(recvParam));// 存入到sessionStorage中
        }else{
            recvParam= JSON.parse(sessionStorage.getItem('newsData'));// 当state没有参数时，取sessionStorage中的参数
        }
        this.setState({
            newsData:recvParam
        })
    }
    render(){
        return (<Card title="News1">
                <ul>
                    <li>路由传参方式：query</li>
                    <li>动态参数：{this.state.newsData.newsId}</li>
                </ul>
        </Card>)
    }
}

export default News1;
