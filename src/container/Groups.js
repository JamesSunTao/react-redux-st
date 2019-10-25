import React from 'react'
import {Card,List,Avatar,Input} from 'antd'
import {connect} from 'react-redux'  //引入连接器

const Member = (props) =>{
        let {name,inputVal ,changeItem,addItem,list,delItem} = props;
        return (
            <Card title="群组页面(使用react-redux数据管理)">
                <div className="home-warp">
                   <h3>欢迎进入Groups页面</h3>
                   <ul>
                       <li>name:{name}</li>                    
                   </ul>
                   <Input placeholder="添加成员"  value={inputVal} onChange= {changeItem}  onKeyUp={addItem}/>
                   <List
                        className="demo-loadmore-list"                        
                        itemLayout="horizontal"                       
                        dataSource={list}
                        renderItem={(item,index) => (
                        <List.Item
                            actions={[<a key="list-loadmore-edit" onClick={delItem}>del</a>]}
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

const stateToProps = (state)=>{
    return {
        name:state.name,
        inputVal:state.inputVal,
        list:state.list
    }
}

const dispatchToProps = (dispatch) =>{
    return {
        changeItem(e){
            let action = {
                type:'changeItem',
                value:e.target.value
             }
            dispatch(action);
        },
        addItem(e){
            if (e.keyCode != 13) {
                return false;
            }
            let action = {
                type:'addItem'
             }
            dispatch(action);
        },
        delItem(index){
            let action = {
                type:'delItem',
                index
             }
            dispatch(action);
        }
    }
}

export default connect(stateToProps,dispatchToProps)(Member);