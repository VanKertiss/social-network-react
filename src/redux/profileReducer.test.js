import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";


test('length postsData should be decremented', () => {

    let action = deletePost(5)

    let state = {
        postsData: [
            {
                id: 1,
                message: "Hi, how are you? ",
                like: 2
            },
            {
                id: 2,
                message: "It's my first post. ",
                like: 28
            },
            {
                id: 3,
                message: "Go ",
                like: 35
            },
            {
                id: 4,
                message: "I'm happy ",
                like: 17
            },
            {
                id: 5,
                message: "It's my first post. ",
                like: 27
            }
        ]
    }

    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(4)


});





