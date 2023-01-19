import moment from "moment/moment";
import { useState } from "react";
export default function NewWrite() {
  const nowTime = moment().format("DD/MMM/YYYY HH:mm");

  let [getText, setGetText] = useState();
  let onChange = (e) => e.target.value;
  function onSubmit(e) {
    e.preventDefault();

    return console.log("Submit");
  }

  return (
    <div className='border flex shadow-sm rounded-md w-full px-5 py-2 flex-col'>
      <form onSubmit={onSubmit} className='space-y-2'>
        <div className='w-full  items-center  flex pt-2 py-1 '>
          <label className='absolute p-2 text-left  text-gray-800' htmlFor='title'>
            Title:
          </label>
          <input className=' w-full  py-1 pr-5 pl-14 border border-gray-500 rounded-md' id='title' maxLength={12}></input>
        </div>

        <div className='text-gray-400'>{nowTime}</div>
        <div className='w-full border-gray-200 border' />
        {/* main-text */}
        <div className='py-2'>
          {/* If blog has an Image, get Image file from public  */}
          <div className='space-y-3 flex flex-col items-center'>
            {/* {blog.img !== "" ? <img src={process.env.PUBLIC_URL + `/img/${blog.img}.jpg`} loading='lazy' alt={blog.img} key={index} className='rounded-md w-full min-w-[310px]' /> : null} */}
          </div>
          <textarea value={getText} onChange={onChange} maxLength='200' placeholder='Main text' className='w-full h-72 px-5 py-2' wrap />
        </div>
        <input type='submit' value='Upload' className='border border-slate-800 w-full rounded-md shadow-sm py-2 bg-slate-700 text-white hover:bg-slate-900' />
      </form>
    </div>
  );
}
