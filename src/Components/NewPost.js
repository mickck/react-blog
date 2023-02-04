import moment from "moment/moment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBlogData } from "../store";

export default function NewWrite() {
  const nowTime = moment().format("DD/MMM/YYYY HH:mm");
  let [formTitle, setFormTitle] = useState("");
  let [formTextArea, setFormTextArea] = useState("");
  let [formImage, setFormImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onTitle = (e) => setFormTitle(e.target.value);
  const onMainTextChange = (e) => setFormTextArea(e.target.value);

  function onSubmit(e) {
    e.preventDefault();
    console.log(formTitle.trim());
    if (formTitle.trim() === "" || formTitle.trim() === null) {
      setFormTitle("");
      return alert("Write a title.");
    } else if (formTextArea.trim() === "" || formTextArea.trim() === null) {
      setFormTextArea("");
      return alert("Write a main text");
    }

    let data = { title: formTitle, mainText: formTextArea, imageUrl:formImage };
    dispatch(getBlogData(data));
    setFormTitle("");
    setFormTextArea("");
    setFormImage("");
    navigate("/");

  }
  function uploadIamge(e) {
    let file = e.target.files;
    if (
      file[0].type === "image/png" ||
      file[0].type === " image/gif" ||
      file[0].type === " image/jpeg" ||
      file[0].type === " image/jpg"
      ) {
        console.log(file[0].type);
        let url = URL.createObjectURL(file[0]);
        setFormImage(url)
        console.log(formImage);
        
      
      } else {
        alert("Please upload an image file.");
        return "";
      }
  }
  return (
    <div className='border flex shadow-sm rounded-md w-full px-5 py-2 flex-col'>
      <form onSubmit={onSubmit} className='space-y-2'>
        <div className='w-full  items-center  flex pt-2 py-1 '>
          <label className='absolute p-2 text-left  text-gray-800' htmlFor='title'>
            Title:
          </label>
          <input className=' w-full  py-1 pr-5 pl-14 border border-gray-500 rounded-md' id='title' maxLength={12} onChange={onTitle}></input>
        </div>

        <div className='text-gray-400'>{nowTime}</div>
        <div className='w-full border-gray-200 border mb-2' />
        {/* upload image */}
       {/*if uploaded image, input bar is disappeared.  */}
          {formImage === "" ?  <label className='flex h-48 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-gray-600 hover:border-gray-800 hover:text-gray-800 transition-all duration-200'>
            <svg className='h-12 w-12' stroke='currentColor' fill='none' viewBox='0 0 48 48' aria-hidden='true'>
              <path
                d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <input className='hidden' type='file' accept="image/*" onChange={uploadIamge}/>
        </label> :<div className="mt-1"> <label for="file" className="">
          <img src={`${formImage}`} alt={formImage} className="rounded-md cursor-pointer " loading='lazy' />
          <input id="file" className='hidden mt-5' type='file' accept="image/*" onChange={uploadIamge}/></label></div >
        }
        <div className="" ></div>
        {/* main-text */}
        <div className='py-2'>
           <div 
      
    ></div>
          {/* If blog has an Image, get Image file from public  */}
          <div className='space-y-3 flex flex-col items-center'>
            {/* {blog.img !== "" ? <img src={process.env.PUBLIC_URL + `/img/${blog.img}.jpg`} loading='lazy' alt={blog.img} key={index} className='rounded-md w-full min-w-[310px]' /> : null} */}
          </div>
          <textarea value={formTextArea} onChange={onMainTextChange} maxLength='400' placeholder='Main text' className='w-full h-72 px-5 py-2 resize-none' />
        </div>
        <input type='submit' value='Upload' className='border border-slate-800 w-full rounded-md shadow-sm py-2 bg-slate-700 text-white hover:bg-slate-900' />
      </form>
    </div>
  );
}
