import useFetch from "../../../Application/Hooks/fetch";
import {useDispatch} from "react-redux";
import {setArticles} from "../../../Application/Redux/Reducers/articles";
import RawArticle from "../../../Application/Interfaces/Response/rawArticule";
import {useEffect} from "react";
import RawTag from "../../../Application/Interfaces/Response/rawTag";

export default function useArticles() {
    const getData = useFetch();
    const dispatch = useDispatch();
    useEffect(() => {
        getData('blog-articles?populate=*').then(res => {
            console.log('res: ', res);
            dispatch(setArticles(res.data.map((el: RawArticle, i: number) => {
                let {id, attributes} = el;
                let {title, body, createdAt, likes} = attributes;
                let tags = el.attributes.blog_tags ? el.attributes.blog_tags.data.map((t: RawTag) => {
                    return {id: t.id, name: t.attributes.name}
                }) : null
                let image_link = `${process.env.REACT_APP_BASE_URL}${el.attributes.image.data.attributes.url}`;
                return {id, title, body, createdAt, likes, tags, image_link, index: i}
            })))
        }).catch(err => console.log('error: ', err))
    }, [])

}