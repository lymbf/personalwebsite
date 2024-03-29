import Article from "../../Interfaces/article";

const SET_ARTICLES = 'articles/setArticles'

type articleAction =
    { type:string, data:Article[]}

let initState:Article[] = [];

export default function articles(state = initState, action:articleAction){

    switch(action.type){
        case SET_ARTICLES:
            return [...action.data]
        default: return state
    }
}

const setArticles = (articles:Article[])=>{
    return {type: SET_ARTICLES, data: articles}
}

export {setArticles}