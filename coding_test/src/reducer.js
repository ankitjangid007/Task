
export const initialState = {
    isOpen: true, 
    isLoading: true,
}

const reducer = (state, action) => {
    // console.log(action)
    switch(action.type) {
        case 'IS_SIDEBAR_OPEN':
            return {
                ...state,
                isOpen : !state.isOpen
            }
        case 'IS_PAGE_LOADING':
            return {
                ...state,
                isLoading: !state.isLoading
            }
        default:
            return state;
    }
} 

export default reducer;