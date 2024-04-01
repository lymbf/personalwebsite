import React from 'react';
import './index.css';
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import useTags from "./Controller/tags";

export default function Tags() {
    const tags = useSelector((state:RootState)=>state.tags)
    useTags()
    return (
        <div className = 'left-tags'>
            <h3>Kategorie:</h3>
            <div className = 'tags-container'>
                {tags && tags.map(t=><div>{t.name}</div>)}
            </div>

        </div>
    )
}