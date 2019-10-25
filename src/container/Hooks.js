import React , { useState ,useEffect }from 'react'
import {Card,List,Avatar,Input} from 'antd'
import {connect} from 'react-redux'  //引入连接器

const showHook = true;
function Hooks(){
    /**
     * 在使用useState的时候只赋了初始值，并没有绑定任何的key,那React是怎么保证这三个useState找到它自己对应的state呢？ （React是根据useState出现的顺序来确定的）
     * 总结：就是React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。
     * */
        const [ age , setAge ] = useState(18)
        const [ work , setWork ] = useState('前端程序员')
        const [ count , setCount ] = useState(0);
        
        useEffect(()=>{
            console.log(`useEffect=>You clicked ${count} times`);
        })


        return (
            <Card title="群组页面(使用react-hooks数据管理)">
                <div className="home-warp">
                   <h3>欢迎进入react-hooks页面</h3>
                   <ul>
                       <li>年龄:{age}</li>  
                       <li>工作:{work}</li>                   
                   </ul>
                   <div>
                        <p>You clicked {count} times</p>
                        <button onClick={()=>{setCount(count+1)}}>click me</button>
                    </div>
                   
                </div>               
            </Card>
        )
}




export default Hooks;