"use client";
import React, { useState } from 'react'
import Button from '../Button/Button';
import Image from 'next/image';
import menuItems from '@/app/utils/menuItems';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navVariants } from '@/app/utils/animation';
import { useGlobalContext } from '@/app/utils/globalContext';


function Navigation(){
    const context = useGlobalContext();

    const [activeNav, setActiveNav] = useState(false);
    const [activeMenu, setActiveMenu] = useState(0);

    return (
        <motion.nav 
            className='navigation'
            variants={navVariants}
            initial="hidden"
            animate="visible"
            >
            <ul className="nav-items">
                <Image src="/logo.png" alt="logo" width={45} height={45} style={{
                    objectFit: "contain",
                    backgroundColor: "#f2f6ff",
                    borderRadius: "50%",
                    padding: "0.3rem",
                }}/>

                {menuItems.map((item, index: number)=> {
                    return <li key={item.id} className={`nav-items__item ${activeMenu === index && "active-menu"}`} onClick={() => {
                        setActiveMenu(index);
                    }}>
                        <Link href={item.url}>{item.title}</Link>
                    </li>
                })}
            </ul>
            <Button 
                text="連絡方法" 
                modifier="bold" 
                bg="#FFFF40" 
                borderRadius='60px' 
                padding='1.2rem 2rem'
                hover="string"
                onClick={context.handleToggle}
                color="black"
            />
        </motion.nav>
    )
}

export default Navigation;