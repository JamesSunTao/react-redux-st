import React from 'react'
import {Link,Route} from 'react-router-dom'
import {Card,List,Avatar,Input} from 'antd'
import store from '../store'

class Member extends React.Component{
    constructor(props){
       super(props)
       this.state = store.getState()
       store.subscribe(this.storeChange)
    }
    storeChange = ()=>{
        this.setState(store.getState())
    }
    changeItem = (e) =>{
        let action = {
           type:'changeItem',
           value:e.target.value
        }
       store.dispatch(action);
    }
    addItem=(e)=>{
        if (e.keyCode != 13) {
            return false;
        }
        let action = {
            type:'addItem'
         }
        store.dispatch(action);
    }
    delItem = (index) =>{
        let action = {
            type:'delItem',
            index
         }
        store.dispatch(action);
    }
  
    render(){
        return (
            <Card title="Member页面">
                <div className="home-warp">
                   <h3>欢迎进入Member页面</h3>
                   <ul>
                       <li>name:{this.state.name}</li>                    
                   </ul>
                   <Input placeholder="添加成员"  value={this.state.inputVal} onChange= {this.changeItem} onKeyUp={this.addItem}/>
                   <List
                        className="demo-loadmore-list"                        
                        itemLayout="horizontal"                       
                        dataSource={this.state.list}
                        renderItem={(item,index) => (
                        <List.Item
                            actions={[<a key="list-loadmore-edit" onClick={this.delItem.bind(index)}>del</a>]}
                        >                           
                            <List.Item.Meta
                                avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={<a href="https://ant.design">{item}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                            <div>content</div>
                        
                        </List.Item>
                        )}
                    />
                   
                </div>               
            </Card>
        )
    }
}


export default Member;