import Tag from "../../Interfaces/tag";
const SET_TAGS = 'tags/setTags';
const SET_SELECTED = 'tags/setSelected';
const CLEAR_SELECTED = 'tags/clearSelected';

type tagsAction = {
    type: string, data?: Tag[], id?: number
}

let initState: { data: Tag[]} = {data: []};
export default function tags(state = initState, action:tagsAction){
    let temp = {...state}
    switch(action.type){
        case SET_TAGS:
           if(action.data) return {...state, data: [...action.data]}
           else return state
        case SET_SELECTED:
            temp.data.forEach((t,i)=>{
                if(t.id === action.id)temp.data[i].selected = !temp.data[i].selected
            })
            return {...temp}
        case CLEAR_SELECTED:
            let res= {...temp, data: temp.data.map(t=>{
                    return {...t, selected: false}
                })}
           console.log(res);
            return res
        default: return state
    }
}

const setTags = (payload:Tag[])=>{
    return{
        type: SET_TAGS,
        data: payload
    }
}

const setSelected = (payload:number)=>{
    return{
        type: SET_SELECTED,
        id: payload
    }
}

const clearSelected = ()=>{
    return{
        type: CLEAR_SELECTED
    }
}

export {setTags, setSelected, clearSelected}