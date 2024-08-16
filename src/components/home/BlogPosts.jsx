import React from "react";
import { baseURL } from "./../../utils/baseURL";
import Image from "next/image";

const getPosts = async () => {
  const res = await fetch(`${baseURL}/data/blog.json`);
  const data = await res.json();
  return data;
};

const BlogPosts = async () => {
  const posts = await getPosts();
  console.log({ posts });

  return (
    <div className='w-[96%] mx-auto mt-20'>
      <h2 className='text-3xl text-white t-shadow'>Blog Posts</h2>

      <div className='mt-12 grid grid-cols-3 gap-6'>
        {posts?.map((post: any) => (
          <div key={post?.id} className='border'>
            <Image
              className='w-full h-60'
              src={post?.image}
              width={400}
              height={400}
              alt='post-img'
            />
            <div className='p-5'>
              <h3 className='text-gray-300 text-sm'>{post?.date}</h3>
              <h2 className='text-gray-200 text-lg mt-1'>{post?.title}</h2>
              <p className='text-gray-200 text-base mt-2'>
                {post?.description.slice(0, 130)} ...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
