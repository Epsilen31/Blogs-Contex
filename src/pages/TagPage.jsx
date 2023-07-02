import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return (
        <div className=' w-11/12 max-w-[670px] mx-auto'>
            <Header />
            <div className=' mt-[70px]'>
                <button
                    onClick={() => navigation(-1)}
                    className="border-2 border-gray-300 py-1 px-4 rounded-md"
                >
                    back
                </button>
                <h2 className=' font-bold text-lg'>
                    Blogs Tagged <span>#{tag}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />

        </div>
    )
}

export default TagPage
