import React from "react"
import Link from "next/link"
import SingleCategory from "./jscomponents/SingleCatagory"
function Hero() {
    return (
        <>
            <div className="w-screen lg:h-screen overflow-hidden bg-white text-black">
                <h1 className="text-3xl mt-12 font-semibold">Browse The Range</h1>
                <h3 className="mx-[2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                <span>
                    <ul className="flex p-2 flex-col md:flex-row justify-between lg:mx-[19rem] md:mx-[2rem] md:gap-2 mt-[2rem]">
                      
                        <li>
                        <Link href="/singlecategory">
                            <img className="lg:w-[400px] lg:h-[680px] rounded-md md:w-[300px] md:h-[480px]" src="https://plus.unsplash.com/premium_photo-1684505553482-9de8b2d437cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRpbm5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            </Link>
                        <h1 className="mt-2 ">Dining</h1>
                        
                        </li>
                        <li>
                        <Link href="/singlecategory">
                            <img className="lg:w-[400px] lg:h-[680px] rounded-md md:w-[300px] md:h-[480px]" src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
                            </Link>
                        <h1 className="mt-2 ">Living</h1></li>
                        <li>
                        <Link href="/singlecategory">
                            <img className="lg:w-[400px] lg:h-[680px] rounded-md md:w-[300px] md:h-[480px]" src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlZHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            </Link>
                        <h1 className="mt-2">Bedroom</h1></li>
                    </ul>
                </span>
            </div>
        </>
    )
}
export default Hero