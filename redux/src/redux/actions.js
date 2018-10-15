// 所有的action creator()

import {ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENTS} from "./action-types"

//sync add
export const addComment=(comment)=>({type:ADD_COMMENT,data:comment});
//sync delete
export const deleteComment=(index)=>({type:DELETE_COMMENT,data:index});
//sync 接受comments
const receiveComments = (comments) =>({type:RECEIVE_COMMENTS,data:comments});

//async getvalue init
export const getComments = ()=>{
    return dispatch=>{
        setTimeout(()=>{
            const comments=[
                {   username: "Tom",
                    content: "ReactJS好难啊!",
                    id: Date.now()
                },
                {
                    username: "JACK",
                    content: "ReactJS还不错!",
                    id: Date.now() + 1
                }
            ];
            //sync 接受数据
            dispatch(receiveComments(comments))
        },1000)
    }
};


