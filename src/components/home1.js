import React ,{Component} from 'react';
import { Card } from 'antd';


/**
 * 无状态组件，不用继承任何类
 * 
 */


// class Home1 extends  Component{

//     render(){
//         return (<Card title="Home1">
//                 <ul>
//                     <li>路由传参方式：params</li>
//                     <li>动态参数：{this.props.match.params.homeId}</li>
//                 </ul>
//         </Card>)
//     }
// }

const Home1 = (props) => {
    
    return (<Card title="Home1">
                <ul>
                    <li>路由传参方式：params</li>
                    <li>动态参数：{props.match.params.homeId}</li>
                </ul>
            </Card>)
}


export default Home1;
