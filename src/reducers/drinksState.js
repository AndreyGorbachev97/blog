export default (state={}, action) => {
    switch(action.type) {
        case 'STORE_SHOW_POSTS_DRINK':
            return {
                ...state,
                list: action.payload
            }
        case 'STORE_SHOW_POST':
        return {
            ...state,
            post: action.payload
        }
        default:
            return state;
    }
}