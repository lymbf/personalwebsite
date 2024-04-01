import Tag from "../../Interfaces/tag";
const SET_TAGS = 'tags/setTags';

type tagsAction = {
    type: string, data: Tag[]
}

let initState:Tag[] = [];
export default function tags(state = initState, action:tagsAction){
    switch(action.type){
        case SET_TAGS:
            return [...action.data]
        default: return state
    }
}

const setTags = (payload:Tag[])=>{
    return{
        type: SET_TAGS,
        data: payload
    }
}

export {setTags}