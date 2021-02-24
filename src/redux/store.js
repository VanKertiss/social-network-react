import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';
import sidebarReduser from './sidebarReduser';


let store = {
    rerenderEntireTree () {
        console.log('State изменился');
    },    
    _state: {
        
        messagesPage:{
            
              dialogsData:[
                  { id: '1' , name: 'Dimych', avatar: './../avatars/Dimych.jpg' },
                  { id: '2' , name: 'Petr', avatar: './../avatars/Petr.jpg' },
                  { id: '3' , name: 'Masha', avatar: './../avatars/Macha.jpg' },
                  { id: '4' , name: 'Oleg', avatar: './../avatars/Oleg.jpg' },
                  { id: '5' , name: 'David', avatar: './../avatars/David.jpg' },
                  { id: '6' , name: 'Kolya', avatar: './../avatars/Kolya.jpg' },
                  { id: '7' , name: 'Micha', avatar: './../avatars/Micha.jpg' }],
              
              messagesData:[
                  { id: '1' , message: 'hi',  },
                  { id: '2' , message: 'what your name?',  },
                  { id: '3' , message: 'my name is David!',  },
                  { id: '4' , message: 'yo',  },
                  { id: '5' , message: 'moyo',  },
                  { id: '6' , message: 'bodo'  },],
                  newMessageText: 'Ky-ky'
            },
        profilePage:{
              postsData:[
                  { id:'1' , message:"Hi, how are you? ", like:2},
                  { id:'2' , message:"It's my first post. ", like:28},
                  { id:'3' , message:"Go ", like:35},
                  { id:'4' , message:"I'm happy ", like:17},
                  { id:'5' , message:"It's my first post. ", like:27}],
                  newPostText: 'Ivan-Ko'
        },
          sidebar:{
              friendsData:[
                  { id: '1' , name: 'Dimych', avatar: './../avatars/Dimych.jpg' },
                  { id: '2' , name: 'Masha', avatar: './../avatars/Macha.jpg' },
                  { id: '3' , name: 'David', avatar: './../avatars/David.jpg' },
                  { id: '4' , name: 'Micha', avatar: './../avatars/Micha.jpg' }]
              
          }
      },
    getState () {
        return this._state;
    },
    subscribe (observer)  {
        this.rerenderEntireTree = observer;
    },
    dispatch (action){

        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.messagesPage = dialogsReduser(this._state.messagesPage, action);
        this._state.sidebar = sidebarReduser(this._state.sidebar, action);
        debugger;
        this.rerenderEntireTree(this._state);

    }
}





export default store;