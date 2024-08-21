import Header from "../header";
import IconBxSearchAlt2 from "../svg2";


export default function Search() {
    
    



    
    return(
        <main className=" bg-white h-[100%]">
            <Header/>
            <div className=" w-screen flex justify-center mt-10 content-center">
                <div className="w-[950px]">
                <div className="flex flex-row">
                    <input className="focus:outline-none border-solid border-[2px] border-r-0 border-[#DDD7CB] w-[350px] rounded-l-md text-[20px] font-normal pl-2 searchbar h-[35px]" placeholder="Search" type="text" />
                    <div className="border-solid border-[2px] border-l-0 border-[#DDD7CB] bg-white flex align-middle items-center justify-center rounded-r-md pr-1 pl-1 button">
                        <IconBxSearchAlt2 viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"/>
                    </div>
                </div>
                </div>
            </div>
        </main>

    );}