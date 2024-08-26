'use client'
import Header from "../header";
import IconBxSearchAlt2 from "../svg2";
import { useState, useEffect } from "react";
import SearchCard from "../Cards/searchcard"
import "../globals.css"
export default function Search() {
    
    
    const [searchValue , setSearchValue] = useState("Oyasumi punpun")
    const [data , setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        setLoading(true)
        fetch(`https://openlibrary.org/search.json?q=${searchValue}`)
            .then((res) => res.json())
            .then((res) =>{
                res.docs.length = 20;
                setData(res.docs)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching data:', error); 
            });
            


    },[searchValue])


    useEffect(() => {
        if (!data[0]) {return}else{
            console.log('Data updated:', data); // Imprime `data` cada vez que cambia
        }
        
    }, [data]);

    function Buscar(inputValue)
    {
      
        setSearchValue(inputValue)
    }
    
    return(
        <main className=" bg-[#FAF3E6] h-[100%]">
            <Header/>
            <div className=" flex justify-center content-center">
                <div className="w-[1000px]">
                    <div className="flex flex-row my-[20px]">
                        <input onKeyDown={event => {if(event.code == "Enter"){Buscar(document.getElementById("input1").value)}}} id="input1" className="focus:outline-none border-solid border-[2px] border-r-0 border-[#DDD7CB] w-[350px] rounded-l-md text-[20px] font-normal pl-2 searchbar h-[35px]" placeholder="Search" type="text" />
                        <div onClick={event =>{Buscar(document.getElementById("input1").value)}} className="border-solid border-[2px] border-l-0 border-[#DDD7CB] bg-white flex align-middle items-center justify-center rounded-r-md pr-1 pl-1 button">
                        <IconBxSearchAlt2 viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"/>
                        </div>
                    </div>
                    <div className={`bg-[#FAF3E6] h-auto ${loading == false ? "grid grid-cols-4 gap-[10px]" : "flex place-content-center mt-[100px]"} w-[1000px]`}>
                    {
                    
                    loading == false ? (data.map(dataa => (
                    <SearchCard
                      classa="cardAnimation"  
                      olid={dataa.lending_edition_s}
                      averageRating={dataa.ratings_average}
                      ratingCount={dataa.ratings_count}
                      id={dataa.cover_i}
                      title={dataa.title}
                      author={dataa.author_name}
                      publishYear={dataa.first_publish_year}
                      isbn={dataa.isbn}
                    />
                    ))) :
                    <svg version="1.1" x="0px" y="0px" width="200px" className="loadingAnimation"
                      viewBox="0 0 100 100" enable-background="new 0 0 100 100">
                    <circle fill="none" stroke="#525A66" strokeWidth="4" strokeMiterlimit="10" cx="50" cy="50" r="48"/>
                    <line fill="none" stroke-linecap="round" stroke="#5A7BA5" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
                      <animateTransform 
                           attributeName="transform" 
                           dur="2s"
                           type="rotate"
                           from="0 50 50"
                           to="360 50 50"
                           repeatCount="indefinite" />
                    </line>
                    <line fill="none" strokeLinecap="round" stroke="#5A7BA5" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
                      <animateTransform 
                           attributeName="transform" 
                           dur="15s"
                           type="rotate"
                           from="0 50 50"
                           to="360 50 50"
                           repeatCount="indefinite" />
                    </line>
                    </svg>
                    
                    }
                    </div>
                    
                </div>
            </div>
        </main>

    );}