const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {

    dialogsData: [
        {
            id: '1',
            name: 'Dimych',
            avatar: 'https://im0-tub-by.yandex.net/i?id=7970b9a1365619ffc4aad54bededfe97&n=13'
        },
        {
            id: '2',
            name: 'Petr',
            avatar: 'https://wizardiart.com/764-large_default/autumn-shades-perfect-gift.jpg'
        },
        {
            id: '3',
            name: 'Masha',
            avatar: 'https://avatars.mds.yandex.net/get-pdb/2840854/541f7e29-f428-449c-9a87-47c4f23fd72b/s1200?webp=false'
        },
        {
            id: '4',
            name: 'Oleg',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwnjoWSUD_sN4qv6h-6aDmJcS8WzE0mz5dkh8gA5J=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            id: '5',
            name: 'David',
            avatar: 'https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/d49a024e7ade40858a10df3b8976625d.png'
        },
        {
            id: '6',
            name: 'Kolya',
            avatar: 'https://sun9-56.userapi.com/uLHSe1mdWI3Uupspx_hOm3YTbC4PykThuwsIPA/G6EkHyvK2Ng.jpg'
        },
        {
            id: '7',
            name: 'Micha',
            avatar: 'https://images.chesscomfiles.com/uploads/v1/user/57010166.6e4df069.1200x1200o.19af94f0d651.png'
        }],

    messagesData: [
        {id: '1', message: 'hi',},
        {id: '2', message: 'what your name?',},
        {id: '3', message: 'my name is David!',},
        {id: '4', message: 'yo',},
        {id: '5', message: 'moyo',},
        {id: '6', message: 'bodo'},]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = action.inputText;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: '7', message: newMessage}]
            };
        }
        default:
            return state;
    }

}

export const addMessageActionCreator = (inputText) => ({type: ADD_MESSAGE, inputText});

export default dialogsReducer;