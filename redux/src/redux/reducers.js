// 多个reducer函数 应用逻辑

import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS} from "./action-types";
import {combineReducers} from  'redux';

// const initComments=[
// {   username: "Tom",
//     content: "ReactJS好难啊!",
//     id: Date.now()
// },
// {
//     username: "JACK",
//     content: "ReactJS还不错!",
//     id: Date.now() + 1
// }
// ]
const initComments=[];

function comments(state = initComments,action){
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data,...state];
        case RECEIVE_COMMENTS:
            return action.data;
        case DELETE_COMMENT:
            return state.filter((comment,index)=>index!==action.data);
        default:
            return state
    }
}

function commentsss(state = initComments,action){
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data,...state];
        case RECEIVE_COMMENTS:
            return action.data;
        case DELETE_COMMENT:
            return state.filter((comment,index)=>index!==action.data);
        default:
            return state
    }
}

export default combineReducers({
    commentsss,
    comments
})