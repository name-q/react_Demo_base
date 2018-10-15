// 包含所action
import {INCREMENT,DECREMENT} from '../redux/action-types'
//sync action obj
export const increment = (number) => ({type:INCREMENT,data:number})
export const decrement = (number) => ({type:DECREMENT,data:number})

//async action   return function 嵌套中增加同步功能
export const incrementAsync = (number) =>{
    return dispatch=>{
        setTimeout(()=>{
            //1s后分发增加事件
            dispatch(increment(number))
        },1000)
    }
}