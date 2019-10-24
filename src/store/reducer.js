const defaultState = {
    name:'浅吟风迹111',
    inputVal : '',
    list: ['早餐水果','午餐蔬菜u','晚餐沙拉']
}

export default (state = defaultState,action) =>{
    let type = action.type;
    let newState = JSON.parse(JSON.stringify(state))
    if (type === 'changeItem') {  
        newState.inputVal = action.value
        return newState
    }
    if (type === 'addItem') {
        if (state.inputVal) {
            newState.list.unshift(newState.inputVal);
            newState.inputVal = "";
            return newState;
        }
        
    }
    if (type === 'delItem') {
        newState.list.splice(action.index,1);
        return newState;
    }
    return state
}

