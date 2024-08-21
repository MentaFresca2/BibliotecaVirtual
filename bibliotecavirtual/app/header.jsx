
import IconLibraryOutline from "./svg"
import IconBxSearchAlt2 from "./svg2";
export default function Header() {

    
    
return(

        <div className="h-[80px] w-[100%] align-middle bg-[#FAF3E6] flex justify-center gap-[0px] flex-row font-extrabold text-[23px]">
        <IconLibraryOutline viewBox="0 100 512 512" fill="currentColor" height="100px" width="100px" className="inline align-middle pl-5 pr-5 content-center flex-col justify-center"/>
        <a href="/" className="align-middle p-5 content-center flex-col justify-center flex button">
          <span className="h-min w-[100%] flex justify-center">Home</span>
        </a>
        <a href="/Search" className="align-middle p-5 content-center flex-col justify-center flex button">
          <span className="h-min w-[100%] flex justify-center">Search</span>
        </a>
        <a href="/About" className="align-middle p-5 content-center flex-col justify-center flex button">
          <span className="h-min w-[100%] flex justify-center">About</span>
        </a>
        <a href="/MyBooks" className="align-middle p-5 content-center flex-col justify-center flex button">
          <span className="h-min w-[100%] flex justify-center">My Books</span>
        </a>
        <div className="h-[80px] ml-5 flex justify-center align-middle flex-col content-center">
          <div className="flex flex-row">
            <input className="focus:outline-none focus: w-[350px] rounded-l-md text-[20px] font-normal pl-2 searchbar h-[35px]" placeholder="Search" type="text" />
            <div className="bg-white flex align-middle items-center justify-center rounded-r-md pr-1 pl-1 button">
              <IconBxSearchAlt2 viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"/>
            </div>
          </div>
        </div>
        </div>



);}

