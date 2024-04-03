import React from 'react';
import './index.css';
import useArticle from "./Controller/article";
import ArticleInterface from "../../Application/Interfaces/article";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";

export default function Article() {
    useArticle()
    return (
        <div className = 'page-article'>
            {/*<img src={image_link}/>*/}

            {/*<div className='tags'>*/}
            {/*    {tags && tags.map(tag => {*/}
            {/*        return <div key = {tag.id} className='tag hov'>{tag.name}</div>*/}
            {/*    })}*/}
            {/*    <div className = 'a-date'>{createdAt}</div>*/}
            {/*</div>*/}
            {/*<h2 className = 'hov' onClick = {()=>{navigate(`/article/${id}`)}}>{title}</h2>*/}
            {/*{ <div className = 'post'><BlocksRenderer content={body} /></div>}*/}
            asd
        </div>
    )
}