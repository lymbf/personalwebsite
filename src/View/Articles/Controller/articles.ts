import useFetch from "../../../Application/Hooks/fetch";
import {useDispatch, useSelector} from "react-redux";
import {setArticles} from "../../../Application/Redux/Reducers/articles";
import RawArticle from "../../../Application/Interfaces/Response/rawArticule";
import {useEffect} from "react";
import RawTag from "../../../Application/Interfaces/Response/rawTag";
import {RootState} from "../../../index";
import articleParser from "../../../Application/Parsers/articleParser";

export default function useArticles() {
    const getData = useFetch();
    const dispatch = useDispatch();
    const tags = useSelector((state:RootState)=>state.tags)
    const getArticles = (url:string)=>{
        getData(url).then(res => {
            console.log('res: ', res);
            dispatch(setArticles(res.data.map((el: RawArticle, i: number) => {
                return articleParser(el, i)
            })))}).catch(err => console.log('error: ', err))
    }

    useEffect(() => {
        getArticles('blog-articles?populate=*&sort[0]=createdAt:desc')
    }, [])

    useEffect(() => {
        let filters = '';
        tags.data.forEach((t,i)=>{
            filters += t.selected ? `&filters[$and][${i}][blog_tags][id][$eq]=${t.id}` : ''
        })
        console.log('filters: ', filters)
        getArticles(`blog-articles?populate=*&sort[0]=createdAt:desc${filters}`)
    }, [tags]);
}