export const scrollToCards = (scroll) => {
    return { 
        type: 'SCROLL_CARDS',
        payload: scroll
    }
}

export const full_posts = (posts) => { 
    return { 
        type: 'STORE_SHOW_POSTS_DRINK',
        payload: posts
    }
}

export const one_post = (post) => { 
    return { 
        type: 'STORE_SHOW_POST',
        payload: post
    }
}

export const requestPosts = () => {
    return { type: 'FETCHED_SHOW_POSTS_DRINK' }
};

export const requestOnePost = (id) => {
    return { 
        type: 'FETCHED_SHOW_POST',
        payload: id
     }
};