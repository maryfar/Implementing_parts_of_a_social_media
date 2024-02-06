import axios from "axios";
import { IComment, IPost } from "../type";

type fetchPostFuncType = () => Promise<IPost[]>;
export const fetchPosts:fetchPostFuncType = async()=>{
    const response = await axios.get("https://dummyjson.com/posts")
    if (response.status>=400){
        throw await response
    }
    return response.data.posts
}


type fetchPostInfoFuncType = (_: number) => Promise<IPost>;
export const fetchPostInfo: fetchPostInfoFuncType = async (id) => {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    if (response.status >= 400) {
      throw await response.json();
    }
    const data = await response.json();
    return data;
  };
  
  type fetchPostCommentsFuncType = (_: number) => Promise<IComment[]>;
  export const fetchPostComments: fetchPostCommentsFuncType = async (id) => {
    const response = await fetch(`https://dummyjson.com/posts/${id}/comments`);
    if (response.status >= 400) {
      throw await response.json();
    }
    const data = await response.json();
    return data.comments;
  };
  