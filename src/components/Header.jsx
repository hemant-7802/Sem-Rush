import React from "react";
// import {logo} from "stocks/logo.png"
function Header(){
    return(
        <>
        <header className="header bg-gradient-to-br from-indigo-400 to bg-indigo-600">
            <nav className=" pt-5">
                <a href="/#"><img src="stocks/logo2.png" alt="" className="h-14 ml-14 tablet:h-20 tablet:ml-20 laptop:h-20 laptop:ml-24 desktop:h-20 desktop:ml-28" /></a>
            </nav>
            <div className="p-14 text-white overflow-auto tablet:p-20 laptop:p-24 desktop:p-28">
                <img src="stocks/logo2.png" className="float-right mb-4" alt="" />
                <h1 className="text-2xl font-bold my-6 tablet:text-3xl laptop:text-4xl desktop:text-5xl">Reveal Your Competitor,s and Prospect,s Web Traffic Data</h1>
                <p className="text-sm tracking-wide mb-8 tablet:text-lg laptop:text-xl desktop:text-2xl">See where there traffic comes from and how engaged their users are</p>
                <form action="#">
                    <input type="text" placeholder="Enter a domain" className="h-14 w-96 mb-4 me-4 rounded pl-3 text-black outline-none "/>
                    <input type="submit" value={'Get Insights'} className="bg-orange-600 py-4 px-10 rounded-md"/>
                </form>
            </div>
        </header>
        </>
    )
}
export default Header;