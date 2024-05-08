import React, { useEffect, useState } from 'react'



const Navbar = () => {
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            console.log(scrollY)
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    const navbarStyle = {
        backgroundColor: scrollY > 0 ? '#141212' : 'transparent',
        color: scrollY > 0 ? '#ffffff' : '#000000',
        transition: 'background-color 0.3s ease',
    };
    return (
        <div className='flex justify-between p-5 bg-transparent fixed w-full' style={navbarStyle}>
            <div className="logo text-4xl tracking-widest capitalize  ">logo</div>
            <div className="lists">
                <ul className='flex tracking-wide'>
                    <li className='p-3 tracking-wider'><a href="">Home</a></li>
                    <li className='p-3 tracking-wider'><a href="">About</a></li>
                    <li className='p-3 tracking-wider'><a href="">Services</a></li>
                    <li className='p-3 tracking-wider'><a href="">Contactus </a></li>
                </ul>
            </div>
            <div className="icons">
                <i className="fa-solid fa-bars hidden"></i>
                <div className='p-2 text-lg cursor-pointer'>
                    <label className='cursor-pointer' htmlFor="modes">DarkMode:</label>
                    <i className="fa-solid fa-circle cursor-pointer" style={{ color: "#181c32" }}></i>
                </div>


            </div>
        </div>
    )
}

export default Navbar