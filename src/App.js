import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import BlogCard from "./Components/BlogCard";
import NewPost from "./Components/NewPost";
import Header from "./Layout/Header";
import Modify from "./Components/Modify";

function App() {
  // let { blogData } = useSelector((state) => state);

  // console.log(nowTime);
  // let [endCss, setEndCss] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setEndCss(true);
  //   }, 1);
  //   return () => {
  //     setEndCss(false);
  //   };
  // }, [setEndCss]);

  return (
    <div className='mx-auto max-w-xl'>
      <div className='border'>
        {/* Header */}
        <Header />

        {/* Body */}
        <div className='mx-auto justify-center flex flex-col items-center space-y-3 py-5 px-4'>
          <Routes>
            <Route path='/' element={<BlogCard />} />
            <Route path='/write' element={<NewPost />} />
            <Route path='/blog/:id' element={<Modify />} />
          </Routes>
        </div>

        {/* Float Button for creating to write new blog  */}
      </div>
    </div>
  );
}

export default App;
