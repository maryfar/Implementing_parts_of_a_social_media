import { useContext, useEffect, useState } from "react";
import { fetchPosts } from "../apis/post.api";
import { IPost } from "../type";
import { Post, PostSkeleton } from "../components/post";
import { AppContext } from "../App";
import { fetchUserById } from "../apis/users.api";

export const PostListContainer = () => {
  const [postsList, setPostsList] = useState<IPost[]>([]);
 const { setLoading,loading} = useContext(AppContext)

 const fetchData = async () => {
  let posts: IPost[] = await fetchPosts();
  posts = await Promise.all(
    posts.map(async (pst) => ({
      ...pst,
      user: await fetchUserById(pst.userId),
    }))
  );
  setPostsList(posts);
  setLoading(false);
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