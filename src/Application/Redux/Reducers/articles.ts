import Article from "../../Interfaces/article";
import RawArticle from "../../Interfaces/Response/rawArticule";

const SET_ARTICLES = 'articles/setArticles'
const SET_CURRENT_ARTICLE = 'articles/setCurrentArticle';

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

export {setArticles, setCurrentArticle}