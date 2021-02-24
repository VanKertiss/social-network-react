let initialState = {
    friendsData:[
        { id: '1' , name: 'Dimych', avatar: 'https://im0-tub-by.yandex.net/i?id=7970b9a1365619ffc4aad54bededfe97&n=13' },
        { id: '2' , name: 'Masha', avatar: 'https://avatars.mds.yandex.net/get-pdb/2840854/541f7e29-f428-449c-9a87-47c4f23fd72b/s1200?webp=false' },
        { id: '3' , name: 'David', avatar: 'https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/d49a024e7ade40858a10df3b8976625d.png' },
        { id: '4' , name: 'Micha', avatar: 'https://images.chesscomfiles.com/uploads/v1/user/57010166.6e4df069.1200x1200o.19af94f0d651.png' }]
    
};


const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;