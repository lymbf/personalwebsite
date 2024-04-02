import Tag from "../../Interfaces/tag";
const SET_TAGS = 'tags/setTags';
const SET_SELECTED = 'tags/setSelected';

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

export {setTags, setSelected}