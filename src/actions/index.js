export const scrollToCards = (scroll) => {
    console.log(scroll)
    return { 
        type: 'SCROLL_CARDS',
        payload: scroll
    }
}