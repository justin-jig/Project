


const recodes = {

    arr: []
}


const recodeReducer = (state = recodes, action = {}) => {

    let newState = state

    if(action.data) {

        newState = {arr: [...state.arr, action.data]}

    }

    console.log("recodeReducer ", newState, action)

    return newState

}

export default recodeReducer