
import { Link } from "react-router-dom";
import { IPost } from "../type";
import { Dropdown } from "flowbite-react";

type props = { post: IPost; disableShowMore?: boolean };
export const Post: React.FC<props> = ({ post, disableShowMore = false }) => {
  return (
    <div className="bg-white px-4 py-5 sm:px-6">
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src={post.user?.image}
            alt=""
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-900 hover:underline">
            {post.user?.firstName} {post.user?.lastName}
          </p>
          <p className="text-sm text-gray-500 hover:underline">
            December 9 at 11:43 AM
          </p>
        </div>
        <div className="flex justify-end px-4 pt-4">
        <Dropdown inline label="">
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Follow
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Save
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Unfollow
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div>
      </div>
      <p className={`text-sm text-gray-500 my-4 ${!disableShowMore ? 'truncate' : ''}`}>{post.body}</p>
      <div className="flex gap-2">
        {post.tags.map(tag => <p className="bg-gray-400 text-white rounded-3xl p-1 text-sm font-thin text-center mb-2">{tag}</p>)}
      </div>
      <div className="inline-flex items-center gap-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 fill-red-500 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <span className="text-sm text-gray-500 font-semibold">
          {post.reactions}
        </span>
        {!disableShowMore && (
          <Link to={`/posts/${post.id}`}>
            <span className="text-sm ml-4 text-gray-500 hover:underline hover:cursor-pointer">
              Show more ...
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export const PostSkeleton = () => {
  return (
    <div
      role="status"
      className="p-4 bg-white rounded shadow animate-pulse md:p-6 dark:border-gray-700"
    >
      <div className="flex items-center mb-4">
        <svg
          className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
          <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      <div className="h-2.5 w-20 bg-gray-200 rounded-full dark:bg-gray-700 mt-4"></div>
    </div>
  );
};
