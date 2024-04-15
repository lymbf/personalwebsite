import RawArticle from "../Interfaces/Response/rawArticule";
import RawTag from "../Interfaces/Response/rawTag";
import Article from "../Interfaces/article";

export default function articleParser(raw:RawArticle, i?:number):Article{
    let {id, attributes} = raw;
    let {title, body, createdAt, likes} = attributes;
    let tags = raw.attributes.blog_tags ? raw.attributes.blog_tags.data.map((t: RawTag) => {
        return {id: t.id, name: t.attributes.name, selected:false}
    }) : null
    let image_link = `${process.env.REACT_APP_BASE_URL}${raw.attributes.image.data.attributes.url}`;
    return {id, title, body,  createdAt: new Date(createdAt).toLocaleString(), likes, tags, image_link}
}