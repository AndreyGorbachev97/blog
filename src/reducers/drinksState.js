export default (state={}, action) => {
    switch(action.type) {
        case 'STORE_SHOW_POSTS_DRINK':
            return {
                ...state,
                drinks: action.payload
            }
        default:
            return state;
    }
}