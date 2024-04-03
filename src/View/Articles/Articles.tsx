import React from 'react';
import './index.css';
import Article from "./Article/Article";
import useArticles from "./Controller/articles";
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import Tags from "../Tags/tags";

export default function Articles() {
    useArticles();
    const articles = useSelector((state:RootState)=>state.articles);

    return (
        <div className='Articles'>
            <Tags/>
            {articles.data && articles.data.slice(0,3).map(art=>{
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
            {articles.data.slice(0,3).length === 1 && <div className = 'empty'/>}
            {articles.data.slice(0,3).length === 0 && <div className = 'empty-1'>No Articules found with selected filters</div>}
            {articles.data.slice(0,3).length === 0 && <div className = 'empty'/>}
        </div>
    )
}