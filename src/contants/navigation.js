import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";

export const navigation = [
    {
        label : "TV Shows",
        href : 'tv',
        icon : <PiTelevisionFill></PiTelevisionFill>
    },
    {
        label : "Movies",
        href : 'movie',
        icon : <BiSolidMoviePlay></BiSolidMoviePlay>
    }
]

export const mobileNavigation = [
    {
        label : "Home",
        href : "/", 
        icon : <MdHomeFilled></MdHomeFilled>
    },
    ...navigation,
    {
        label : "Search",
        href : "/search",
        icon : <IoSearchOutline></IoSearchOutline>
    }
]