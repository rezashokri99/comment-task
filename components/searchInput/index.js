import Image from "next/image";
import user_1_img from '../../public/assets/images/user-1.jpg';

const SearchInput = () => (
  // input for new comment
  <div className="grid grid-cols-12 items-center w-100 px-4 py-6 bg-gray-50 border-b border-b-gray-200">
    <div className="col-span-2 sm:col-span-1">
      <Image
        src={user_1_img}
        alt="user_one"
        className='rounded-full w-12 h-12'
        width={500}
        height={500} />
    </div>
    <div className="flex col-span-10 sm:col-span-11 row-span-2 flex-col justify-start">
      <input className="border px-4 py-2 rounded" placeholder="Reply" />
    </div>
  </div>

)

export default SearchInput;