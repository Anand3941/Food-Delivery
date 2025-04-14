import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { GiNoodles } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
export const Catrgories = [
    {
        id :1,
        name:"All",
        icon:<TiThSmallOutline className="text-green-500 w-[60px] h-[60px]"/>
    },
    {
        id :2,
        name:"Breakfast",
        icon:<MdOutlineFreeBreakfast className="text-green-500 w-[60px] h-[60px]" />
    },
    {
        id :3,
        name:"Soups",
        icon:<TbSoup className="text-green-500 w-[60px] h-[60px]"/>
    },
    {
        id :4,
        name:"pasta",
        icon:<GiNoodles className="text-green-500 w-[60px] h-[60px]" />
    },
    {
        id :5,
        name:"Chiken",
        icon:<MdFoodBank className="text-green-500 w-[60px] h-[60px]"/>
    },
    {
        id :6,
        name:"Food Pizza",
        icon:<FaPizzaSlice className="text-green-500 w-[60px] h-[60px]" />
    },
    {
        id :7,
        name:"Burger",
        icon:<FaHamburger className="text-green-500 w-[60px] h-[60px]" />
    },
]
export default Catrgories;