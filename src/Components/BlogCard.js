import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function BlogCard() {
  let { blogData } = useSelector((state) => state);
  const navigate = useNavigate();
  function modifyData(blog) {
    console.log(blog);
    if (window.confirm("Would you like to modify this post?")) {
      navigate(`/blog/${blog.id}`);
    }
  }
  return (
    <>
      {blogData
        .slice()
        .reverse()
        .map((blog, index) => {
          return (
            <div
              className='border flex shadow-sm rounded-md w-full px-5 py-2 flex-col hover:border-gray-500 hover:cursor-pointer transition ease-in duration-200 '
              key={index}
              onClick={() => modifyData(blog)}>
              <h2 className='text-xl text-center'>{blog.title}</h2>
              <div className='text-gray-400'>{blog.updated ? blog.updated : blog.created}</div>
              <div className='w-full border-gray-200 border' />
              {/* main-text */}
              <div className='py-2'>
                {/* If blog has an Image, get Image file from public  */}
                <div className='space-y-3 flex flex-col items-center' key={index + "img"}>
                  {blog.img !== "" ? <img src={process.env.PUBLIC_URL + `/img/${blog.img}.jpg`} loading='lazy' alt={blog.img} key={index} className='rounded-md w-full min-w-[310px]' /> : null}
                </div>
                <h4>{blog.mainText}</h4>
              </div>
            </div>
          );
        })}
      <Link to={"/write"}>
        {/* Float Button */}
        <div className='fixed bottom-0 pl-[120px]  pb-32  sm:pl-[200px] sm:pb-[120px]'>
          <div className=''>
            <button className='p-0 w-10 h-10 bg-slate-600 rounded-full hover:bg-slate-800 active:outline-none active:shadow-lg mouse shadow transition ease-in duration-100 focus:outline-none'>
              <svg viewBox='0 0 20 20' enableBackground='new 0 0 20 20' className='w-6 h-6 inline-block'>
                <path
                  fill='#FFFFFF'
                  d='M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z'
                />
              </svg>
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}
