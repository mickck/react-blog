import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBlogData, modifyBlogData } from "../store";

// Modify blog's post
export default function Modify() {
  const { blogData } = useSelector((state) => state);
  const nowTime = moment().format("DD/MMM/YYYY HH:mm");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [formTitle, setFormTitle] = useState(blogData[id - 1].title);
  let [formTextArea, setFormTextArea] = useState(blogData[id - 1].mainText);
  const onTitle = (e) => setFormTitle(e.target.value);
  const onMainTextChange = (e) => setFormTextArea(e.target.value);

  //   send data to
  function onSubmit(e) {
    e.preventDefault();
    console.log(formTitle.trim());
    if (formTitle.trim() === "" || formTitle.trim() === null) {
      formTitle("");
      return alert("Write a title.");
    } else if (formTextArea.trim() === "" || formTextArea.trim() === null) {
      formTextArea("");
      return alert("Write a main text");
    }

    let data = { title: formTitle, mainText: formTextArea, updated: nowTime, index: id - 1 };
    dispatch(modifyBlogData(data));
    setFormTitle("");
    setFormTextArea("");
    navigate("/");
  }

  function deleteData() {
    if (window.confirm("Would you like to delete this post?")) {
      dispatch(deleteBlogData(blogData[id - 1].id));
      navigate("/");
    }
  }
  return (
    <form className='border flex shadow-sm rounded-md w-full px-5 py-2 flex-col hover:border-gray-500 hover:cursor-pointer transition ease-in duration-200 space-y-2' onSubmit={onSubmit}>
      <div className='flex justify-between'>
        <h1 className='text-lg text-gray-600 select-none'>Edit Post</h1>
        <div
          className='hover:bg-slate-100 rounded-md p-1'
          onClick={() => {
            deleteData();
          }}>
          ❌
        </div>
      </div>
      <div className='w-full  items-center  flex pt-2 py-1  '>
        {/* Title */}
        <label className='absolute p-2 text-left  text-gray-800' htmlFor='title'>
          Title:
        </label>
        <input className=' w-full  py-1 pr-5 pl-14 border border-gray-500 rounded-md' id='title' maxLength={12} value={formTitle} onChange={onTitle}></input>
      </div>
      {/* updated date */}
      <div className='text-gray-400 text-sm pl-3'>
        <span>updated: </span>
        {blogData[id - 1].updated}
      </div>

      <div className='w-full border-gray-200 border' />
      {/* main-text */}

      {/* If blogData[id] has an Image, get Image file from public  */}
      {/* upload img */}
      <div className='space-y-3 flex flex-col items-center'>
        {blogData[id - 1].img !== "" ? (
          <img src={process.env.PUBLIC_URL + `/img/${blogData[id - 1].img}.jpg`} loading='lazy' alt={blogData[id - 1].img} key={id - 1} className='rounded-md w-3/4 min-w-[310px]' />
        ) : null}
      </div>
      <h2 className='text-gray-500'>MainText</h2>
      <textarea value={formTextArea} onChange={onMainTextChange} maxLength='400' placeholder='Main text' className='w-full h-72 px-5 py-2 resize-none border shadow-sm rounded-md focus:outline-none' />
      <div className='w-full border-gray-200 border' />
      <input type='submit' value='Upload' className='border border-slate-800 w-full rounded-md shadow-sm py-2 bg-slate-700 text-white hover:bg-slate-900' />
    </form>
  );
}
