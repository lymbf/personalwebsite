import React from 'react';
import './index.css';
import useArticle from "./Controller/article";
import ArticleInterface from "../../Application/Interfaces/article";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";

import {useSelector} from "react-redux";
import {RootState} from "../../index";
import {useNavigate} from "react-router-dom";

export default function Article() {
    useArticle()
    const article: ArticleInterface | null = useSelector((state: RootState) => state.articles.current)
    const navigate = useNavigate()
    return (
        <div className='page-article-container'>
            {article && <div className='page-article'>
                <div>
                    <img className='p-a-img' src={article.image_link}/>

                    <div className='tags p-a-tags'>
                        {article.tags && article.tags.map(tag => {
                            return <div key={tag.id} className='tag'>{tag.name}</div>
                        })}
                        <div className='a-date p-a-date'>{article.createdAt}</div>
                    </div>
                </div>

                <h2 className='p-a-title' onClick={() => {
                    navigate(`/article/${article.id}`)
                }}>{article.title}</h2>
                {<BlocksRenderer content={article.body}/>}


            </div>}
            asd
        </div>
    )
}