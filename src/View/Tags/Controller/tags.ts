import {useEffect} from "react";
import useFetch from "../../../Application/Hooks/fetch";
import {useDispatch} from "react-redux";
import {setTags} from "../../../Application/Redux/Reducers/tags";
import RawTag from "../../../Application/Interfaces/Response/rawTag";

export default function useTags() {
    const getData = useFetch()
    const dispatch = useDispatch();
    useEffect(() => {
        getData('Blog-tags').then(res => dispatch(setTags(res.data.map((t:RawTag) => {
            return {name: t.attributes.name, id: t.id}
        })))).catch(err=>console.log('err: ', err))
    }, []);
}