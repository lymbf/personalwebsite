import useFetch from "../../../Application/Hooks/fetch";
import RawArticle from "../../../Application/Interfaces/Response/rawArticule";
import {useDispatch} from "react-redux";
import {clearCurrentArticle, setCurrentArticle} from "../../../Application/Redux/Reducers/articles";
import articleParser from "../../../Application/Parsers/articleParser";
import {useEffect} from "react";

export default function useArticle() {
    const dispatch = useDispatch()
    let id: number = parseInt(window.location.pathname.split('cle/')[1])
    let getData = useFetch();

    useEffect(() => {
        getData(`blog-articles/${id}?populate=*`).then((res) => {
            let el: RawArticle = res.data;
            dispatch(setCurrentArticle(articleParser(el)))
        }).catch(err => console.log('err: ', err))

        return ()=>{dispatch(clearCurrentArticle())}
    }, []);

}