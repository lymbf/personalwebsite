import {BlocksContent} from "@strapi/blocks-react-renderer";
import Tag from "./tag";

export default interface Article{
    image_link: string,
    body: BlocksContent,
    title: string | null,
    createdAt: string,
    likes?: number | null,
    tags?: Tag[]|null,
    id: number,
    newest?:boolean
}