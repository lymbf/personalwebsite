import React from 'react';
import './index.css';
import Article from "./Article/Article";
import useArticles from "./Controller/articles";
import {useSelector} from "react-redux";
import {RootState} from "../../index";

export default function Articles() {
    useArticles();
    const articles = useSelector((state:RootState)=>state.articles);

    return (
        <div className='Articles'>
            <div className = 'left-tags'></div>
            {articles && articles.map(art=>{
                return <Article
                    image_link = {art.image_link}
                    body = {art.body}
                    title = {art.title}
                    createdAt = {art.createdAt}
                    likes = {art.likes}
                    tags = {art.tags}
                    index = {art.index}
                    id = {art.id}
                />
            })}
        </div>
    )
}