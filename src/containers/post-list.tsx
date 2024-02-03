import { useEffect, useState } from "react";
import { fetchPosts } from "../apis/post.api";
import { IPost } from "../type";
import { Post, PostSkeleton } from "../components/post";

export const PostListContainer = () => {
  const [postsList, setPostsList] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      let posts: IPost[] = await fetchPosts();
      setPostsList(posts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
     
    }
  };

  useEffect(() => {
    if (!loading) return;
    fetchData();
  }, [loading]);

  return (
    <>
      {loading && (
        <>
          <div className="xl:w-6/12 lg:w-8/12 md:w-9/12 sm:w-11/12 w-full">
            <PostSkeleton />
          </div>
          <div className="xl:w-6/12 lg:w-8/12 md:w-9/12 sm:w-11/12 w-full">
            <PostSkeleton />
          </div>
          <div className="xl:w-6/12 lg:w-8/12 md:w-9/12 sm:w-11/12 w-full">
            <PostSkeleton />
          </div>
          <div className="xl:w-6/12 lg:w-8/12 md:w-9/12 sm:w-11/12 w-full">
            <PostSkeleton />
          </div>
          <div className="xl:w-6/12 lg:w-8/12 md:w-9/12 sm:w-11/12 w-full">
            <PostSkeleton />
          </div>
        </>
      )}
      {postsList.map((el, index) => (
        <div
          key={index}
          className="xl:w-6/12 lg:w-8/12 md:w-9/12 sm:w-11/12 w-full"
        >
          <Post post={el} />
        </div>
      ))}
    </>
  );
};