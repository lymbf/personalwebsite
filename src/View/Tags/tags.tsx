import React from 'react';
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../index";
import useTags from "./Controller/tags";
import {setSelected} from "../../Application/Redux/Reducers/tags";

export default function Tags() {
    const tags = useSelector((state:RootState)=>state.tags)
    const dispatch = useDispatch()
    useTags()
    return (
        <div className = 'left-tags'>
            <h3>Kategorie:</h3>
            <div className = 'tags-container'>
                {tags.data && tags.data.map(t=><div><input onClick = {(e)=>{
                    dispatch(setSelected(t.id))
                }} className = 'hov' type = 'checkbox'/><div>{t.name}</div></div>)}
            </div>

        </div>
    )
}