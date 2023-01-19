import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=' bg-slate-800 text-white p-4'>
      <Link to='/'>
        <h2 className='text-lg ml-3 font-semibold'>Blog</h2>
      </Link>
    </div>
  );
}
