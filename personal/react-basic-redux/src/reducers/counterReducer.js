

const countReducer = ( state = {current: 0}, action= {}) => {

    console.log("countReducer ....", state, action)

    if(action.type === 'NUM'){
        state.current += parseInt(action.data)
    }

    return {current: state.current}
}

export default  countReducer