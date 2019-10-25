import React , { useState ,useEffect ,createContext ,useContext  }from 'react'
import {Card,Collapse ,Panel} from 'antd'
import {connect} from 'react-redux'  //引入连接器
import { HashRouter as Router, Route, Link } from "react-router-dom"
import ReducerTest from './ReducerTest'
//===关键代码
const CountContext = createContext()

function Hooks(){
    /**
     * 在使用useState的时候只赋了初始值，并没有绑定任何的key,那React是怎么保证这三个useState找到它自己对应的state呢？ （React是根据useState出现的顺序来确定的）
     * 总结：就是React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。
     * */
    /**
     * useEffect两个注意点
     * React首次渲染和之后的每次渲染都会调用一遍useEffect函数，而之前我们要用两个生命周期函数分别表示首次渲染(componentDidMonut)和更新导致的重新渲染(componentDidUpdate)。
     * useEffect中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的，而componentDidMonut和componentDidUpdate中的代码都是同步执行的。个人认为这个有好处也有坏处吧，比如我们要根据页面的大小，然后绘制当前弹出窗口的大小，如果时异步的就不好操作了。
     * 
     * */ 
        const [ age , setAge ] = useState(18)
        const [ work , setWork ] = useState('前端程序员')
        const [ count , setCount ] = useState(0);
        
        useEffect(()=>{
            console.log(`useEffect=>You clicked ${count} times`);
            return ()=>{
                console.log('====================')
            }
        },[count])


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
                  {/* 这段代码就相当于把count变量允许跨层级实现传递和使用了（也就是实现了上下文），当父组件的count变量发生变化时，子组件也会发生变化 */}
                    <CountContext.Provider value={{count,age}}>
                          <Counter />
                    </CountContext.Provider>
                    
                    {/* useReducer */}
                    <Card title="userReducer">
                       <ReducerTest></ReducerTest>
                    </Card>  

                    <Router>
                        <ul>
                            <li> <Link to="/hooks">首页</Link> </li>
                            <li><Link to="/hooks/list">列表</Link> </li>
                        </ul>
                        <Route path="/hooks" exact component={Index1} />
                        <Route path="/hooks/list" component={List2} />
                    </Router>
                </div>               
            </Card>
        )
}

function Counter(){
    const count = useContext(CountContext)  //一句话就可以得到count
    return (<h2>{count.count} 年龄：{count.age}</h2>)
}

function Index1() {
    useEffect(()=>{
        console.log('useEffect=>老弟，你来了！Index页面')

        return ()=>{  // 相当于react componentWillUnmount 周期函数（解绑副作用）
            console.log('老弟，你走了!Index页面')
        }
    },[])
    return <h2>JSPang.com</h2>;
}
  
function List2() {
    useEffect(()=>{
        console.log('useEffect=>老弟，你来了！List页面')
    })
    return <h2>List-Page</h2>;
}




export default Hooks;