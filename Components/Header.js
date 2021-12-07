import{
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline"
import HeaderItem from "./HeaderItem"
import Image from 'next/image'
const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify justify-between 
        items-center h-auto">
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title="HOME" Icon={HomeIcon}/>
                <HeaderItem title="COLLECTION" Icon={BadgeCheckIcon}/>
                <HeaderItem title="VERIFIED" Icon={CollectionIcon}/>
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderItem title="SEARCH" Icon={SearchIcon}/>
                <HeaderItem title="USER" Icon={UserIcon}/>
            </div>
            <Image
            className="object-contain cursor-pointer"           
            src='https://links.papareact.com/ua6'
            width={200} 
            height={100} 
            />
        </header>
    )
}

export default Header
