import Image from "next/image";
import{ThumbUpIcon} from "@heroicons/react/outline"
const Thumbnail = ({result}) => {
  const BaseUrl = "https://image.tmdb.org/t/p/original/";
  return <div className='m-4 transition duration-150 transform sm:hover:scale-105 hover:z-50 cursor-pointer group'>
     <Image src={`${BaseUrl}${result.poster_path || result.backdrop_path}`}
     className='object-cover transform sm:group-hover:scale-125'
     layout='responsive'
     width={1920}
     height={1080}
     />
     <div className='p-2'>
         <p className='truncate max-w-md'>{result.overview}</p>
         <h1 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{result.original_title}</h1>
         <p className='flex items-center opacity-0 group-hover:opacity-100'>{result.release_date}<ThumbUpIcon className='h-5 ml-3 mr-1'/>{result.vote_count}</p>
     </div>
  </div>;
};

export default Thumbnail;
