/* eslint-disable @next/next/no-img-element */
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import moment from 'jalali-moment'
import Image from 'next/image';
import user_img from '../../public/assets/images/user-1.jpg';


const Comment = ({ comment, index }) => {
    return (
        <div className="grid grid-cols-12 items-start w-100 border-b p-4">
            <div className="col-span-2 h-full">
                {/* user image */}
                <div>
                    <img className='rounded-full w-12 h-12' src={comment.user.avatar} alt={comment.user.name} />
                </div>
                {/* hr when replies.length is true */}
                <div className={`${comment.replies.length ? "block" : "hidden"} h-[calc(100%_-_54px)] mt-2 border-l ml-6`}>
                </div>
            </div>

            <div className="flex col-span-10 flex-col justify-start">
                    {/* user name */}
                <div className="flex items-center gap-x-2">
                    <div className="text-lg font-bold">{comment.user.name}</div>
                    <span className="text-gray-400 text-sm text-left">{moment.from(new Date(comment.date), 'en').locale("en").fromNow()}</span>
                </div>
                {/* user text message */}
                <div className='text-gray-500 mt-1 mb-3 text-sm '>
                    {comment.text}
                </div>
                {/* user actions buttons */}
                <div className='flex items-center justify-start'>
                    <div className={`${comment.iLikedIt ? "bg-blue-500 text-white" : "bg-gray-200"} flex gap-x-2 cursor-pointer transition-all duration-300 font-bold rounded-2xl px-3 py-1 mr-2`}>
                        <HandThumbUpIcon className={`${comment.iLikedIt ? "bg-blue-500 text-white" : "bg-gray-200"} w-5 text-gray-500`} />
                        <span className='pt-1 font-bold'>{comment.likes}</span>
                    </div>
                    <button className='text-blue-500 font-bold transition-all duration-300 cursor-pointer hover:bg-blue-500 hover:text-white rounded-2xl px-3 py-1'>
                        Reply
                    </button>
                </div>
                <div>

                    {
                        comment.replies.map((reply) => (
                            <div key={reply.id} className="grid grid-cols-12 grid-rows-2 items-start w-100 px-4 py-5">
                                {/* user image */}
                                <div className="col-span-2 sm:col-span-1">
                                    <img className='rounded-full w-12 h-12' src={reply.user.avatar} alt={reply.user.name} />
                                </div>
                                <div className="flex col-span-10 sm:col-span-11 row-span-2 flex-col justify-start">
                                    {/* user name */}
                                    <div className="flex items-center gap-x-2">
                                        <div className="text-lg font-bold">{reply.user.name}</div>
                                        <span className="text-gray-400 text-sm text-left">{moment.from(new Date(reply.date), 'en').locale("en").fromNow()}</span>
                                    </div>
                                    {/* user text message */}
                                    <div className='text-gray-500 mt-1 mb-3 text-sm '>
                                        {reply.text}
                                    </div>
                                    <div className='flex items-center justify-start'>
                                        {/* user actions buttons */}
                                        <div className={`${reply.iLikedIt ? "bg-blue-500 text-white" : "bg-gray-200"} flex gap-x-2 cursor-pointer transition-all duration-300 font-bold rounded-2xl px-3 py-1 mr-2`}>
                                            <HandThumbUpIcon className={`${reply.iLikedIt ? "bg-blue-500 text-white" : "bg-gray-200"} w-5 text-gray-500`} />
                                            <span className='pt-1 font-bold'>{reply.likes}</span>
                                        </div>
                                        <button className='text-blue-500 font-bold transition-all duration-300 cursor-pointer hover:bg-blue-500 hover:text-white rounded-2xl px-3 py-1'>
                                            Reply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {
                        index === 0 ?
                            // input for new comment
                            <div className="grid grid-cols-12 items-center w-100 p-4">
                                <div className="col-span-2 sm:col-span-1">
                                    <Image
                                        src={user_img}
                                        alt="user_one"
                                        className='rounded-full w-12 h-12'
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="flex col-span-10 sm:col-span-11 row-span-2 flex-col justify-start">
                                    <input className="border px-4 py-2 rounded" placeholder="Reply" />
                                </div>
                            </div>
                            : ""
                    }
                </div>
            </div>
        </div>
    );
}

export default Comment;