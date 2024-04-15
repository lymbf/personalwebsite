import React from 'react';
import './index.css';
import ArticleInterface from "../../../Application/Interfaces/article";
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import {useNavigate} from "react-router-dom";
export default function Article({image_link, title, body, tags, id, createdAt, newest}: ArticleInterface) {
    const navigate = useNavigate();
    return (
        <div className={`Article`} >
            {newest && <h2 className = 'hov' onClick = {()=>{navigate(`/article/${id}`)}}>{title}</h2>}

                <img src={image_link}/>



            <div className='tags'>
                {tags && tags.map(tag => {
                    return <div key = {tag.id} className={`tag hov ${newest ? 'tag-newest' : 'tag-recent'}`}>{tag.name}</div>
                })}
                <div className = 'a-date'>{createdAt}</div>
            </div>
            {!newest && <h2 className = 'hov' onClick = {()=>{navigate(`/article/${id}`)}}>{title}</h2>}
            { <div className = 'post'><BlocksRenderer content={body} /><div className = 'p-fade'/></div>}

            <div className = 'r-more hov' onClick = {()=>{navigate(`/article/${id}`)}}>Read More...</div>
        </div>
    )
}