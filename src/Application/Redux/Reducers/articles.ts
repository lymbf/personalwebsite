import Article from "../../Interfaces/article";
import RawArticle from "../../Interfaces/Response/rawArticule";

const SET_ARTICLES = 'articles/setArticles'
const SET_CURRENT_ARTICLE = 'articles/setCurrentArticle';
const CLEAR_CURRENT_ARTICLE = 'articles/clearCurrentArticle';

type articleAction =
    { type: string, data?: Article[], current?:Article }

let initState: {
    data: Article[],
    current: Article | null
} = {data: [], current: null};

export default function articles(state = initState, action: articleAction) {

    switch (action.type) {
        case SET_ARTICLES:
            if(action.data)return {...state, data: [...action.data]}
            else return state
        case SET_CURRENT_ARTICLE:
            if(action.current) return {...state, current: action.current}
            else return state
        case CLEAR_CURRENT_ARTICLE:
            return {...state, current: null}
        default:
            return state
    }
}

const setArticles = (articles: Article[]) => {
    return {type: SET_ARTICLES, data: articles}
}

const setCurrentArticle = (payload:Article)=>{
    return{
        type: SET_CURRENT_ARTICLE,
        current: payload
    }
}

const clearCurrentArticle = ()=>{
    return{
        type: CLEAR_CURRENT_ARTICLE
    }
}
export {setArticles, setCurrentArticle, clearCurrentArticle}