import { gql, useQuery } from "@apollo/client";

const GET_BLOGS = gql`
  query get_Blogs {
    blogs {
      _id
      title
      date
      image
      description
    }
  }
`;

const BlogPosts = () => {
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (loading) return <div>loading ....</div>;
  if (error) return <div>{error?.message}</div>;

  console.log(data && data);

  return (
    <div className='w-[96%] mx-auto mt-20'>
      <h2 className='text-3xl text-white t-shadow'>Blog Posts</h2>

      <div className='mt-12 grid grid-cols-3 gap-6'>
        {data.blogs?.map((post) => (
          <div key={post?.id} className='border'>
            <img
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
