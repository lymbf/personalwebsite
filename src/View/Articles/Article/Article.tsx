import React from 'react';
import './index.css';
import ArticleInterface from "../../../Application/Interfaces/article";
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
export default function Article({image_link, title, body, tags, id,index, createdAt}: ArticleInterface) {
    const content: BlocksContent = [
        {
            type: 'paragraph',
            children: [{ type: 'text', text: 'A simple paragraph' }],
        },
    ];
    return (
        <div className={`Article a${index+1}`} style = {{gridArea: `a${index+1}`}}>
            <img src={image_link}/>

            <div className='tags'>
                {tags && tags.map(tag => {
                    return <div key = {tag.id} className='tag hov'>{tag.name}</div>
                })}
                <div className = 'a-date'>{createdAt}</div>
            </div>
            <h2 className = 'hov'>{title}</h2>
            { <div className = 'post'><BlocksRenderer content={body} /><div className = 'p-fade'/></div>}

            <div className = 'r-more hov'>Read More...</div>
        </div>
    )
}