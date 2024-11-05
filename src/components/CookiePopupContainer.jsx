import CookiePopupText from "./PopupText"
import ConfirmCookiesButton from "./ConfirmCookiesButton"

import { MdOutlineCookie } from "react-icons/md"
import { IoMdClose } from "react-icons/io"

const CookiePopupContainer = () =>
{
    return (
        <article className="h-[300] w-[250] bg-black rounded-2xl shadow-xl relative">
          <MdOutlineCookie size={50} className="absolute top-5 left-5" />
          <IoMdClose size={30} className="absolute right-3 top-4 cursor-pointer" />
          <CookiePopupText popupText="We use cookies to improve your user experience"/>
          <ConfirmCookiesButton confirmButtonText="I like cookies"/>

        </article>        
    )
}
 
export default CookiePopupContainer