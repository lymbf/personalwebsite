import {BlocksContent} from "@strapi/blocks-react-renderer";
import RawTag from "./rawTag";

export default interface RawArticle {
    id: number,
    attributes: {
        title: string,
        body: BlocksContent,
        createdAt: string,
        publishedAt: string,
        updatedAt: string,
        likes?:number,
        blog_tags?: {data: RawTag[] },
        image:{
            data:{
                attributes:{
                    name:string,
                    url:string,
                }
            }
        }
    }
}

