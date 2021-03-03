// let renderEntireTree = () => {
//     console.log(`State changed`);
// }
//
// export const state = {
//     profilePage: {
//         posts: [
//             {id: 1, message: `I am a hero`, likesCount: 20},
//             {id: 2, message: `I love you Masha`, likesCount: 20},
//             {id: 3, message: `i am a programmer`, likesCount: 20},
//             {id: 4, message: `It New`, likesCount: 20},
//             {id: 5, message: `Yo yo yo motherfucker`, likesCount: 20}],
//         newPostMessage: ''
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: `John`},
//             {id: 2, name: `Max`},
//             {id: 3, name: `Andrew`},
//             {id: 4, name: `Ivan`},
//             {id: 5, name: `Pavlo`}],
//         messages: [
//             {id: 1, message: `Hello, my name is John`},
//             {id: 2, message: `Hello, my first job is a programmer`},
//             {id: 3, message: `I really like you?`},
//             {id: 4, message: `You love me Masha?`},
//             {id: 5, message: `Yes, of course`}],
//     },
//     sideBar: [
//         {
//             name: `Max`,
//             photo: "https://freesvg.org/img/abstract-user-flat-4.png"
//         },
//         {
//             name: `John`,
//             photo: "https://freesvg.org/img/abstract-user-flat-4.png"
//         },
//         {
//             name: `Ivy`,
//             photo: "https://freesvg.org/img/abstract-user-flat-4.png"
//         }
//     ]
// };
//
// //Post func
//
// export const addPost = () => {
//     state.profilePage.posts.push({
//         id: Math.ceil(Math.random() * 1000),
//         message: state.profilePage.newPostMessage,
//         likesCount: Math.ceil(Math.random() * 1000)
//     })
//     state.profilePage.newPostMessage = '';
//     renderEntireTree(state);
// }
//
// export const changeTextArea = (value) => {
//     state.profilePage.newPostMessage = value;
//     renderEntireTree(state);
// }
//
//
// export const removePost = (id) => {
//     state.profilePage.posts = state.profilePage.posts.filter((post) => post.id !== id);
//     renderEntireTree(state);
// };
//
// //Messages func
//
// export const addMessage = (message) => {
//     state.dialogsPage.messages
//         .push(({id: Math.ceil(Math.random() * 1000), message: message}));
//     renderEntireTree(state);
// };
//
//
// export const removeMessage = (id) => {
//     state.dialogsPage.messages = state.dialogsPage.messages
//         .filter((message) => message.id !== id);
//     renderEntireTree(state);
// };
//
//
// export const subscribe = (observer) => {
//     renderEntireTree = observer;
// }
//
