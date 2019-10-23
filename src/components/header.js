import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu,Icon} from 'antd'

class Header extends Component {
   render(){
       return (
        <div>
            <Menu  theme="dark" mode="horizontal">
                <Menu.Item key="/">                  
                    <Link to="/"> <Icon type="home" />首页</Link>                   
                </Menu.Item>             
                <Menu.Item key="/about">              
                    <Link to="/about"> <Icon type="user" />关于我们</Link>                   
                </Menu.Item>
                <Menu.Item key="/news">              
                    <Link to="/news"> <Icon type="reddit" />新闻</Link>                   
                </Menu.Item>
            </Menu>
            {this.props.children}
        </div>
       )
   }
}
export default Header;

