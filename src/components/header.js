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
                    <Link to="/about"><Icon type="user" />关于我们</Link>                   
                </Menu.Item>
                <Menu.Item key="/news">              
                    <Link to="/news"> <Icon type="reddit" />新闻</Link>                   
                </Menu.Item>
                <Menu.Item key="/member">              
                    <Link to="/member"><Icon type="user-add" />成员(redux)</Link>                   
                </Menu.Item>
                <Menu.Item key="/groups">              
                    <Link to="/groups"><Icon type="usergroup-add" />群组(react-redux)</Link>                   
                </Menu.Item>
                <Menu.Item key="/hooks">              
                    <Link to="/hooks"><Icon type="setting" theme="twoTone" />管理(Reack-Hooks)</Link>                   
                </Menu.Item>
            </Menu>
            {this.props.children}
        </div>
       )
   }
}
export default Header;

