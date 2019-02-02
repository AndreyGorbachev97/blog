export default (state={scroll: 0}, action) => {
    switch(action.type) {
        case 'SCROLL_CARDS':
            return action.payload;
        default:
            return state;
    }
}