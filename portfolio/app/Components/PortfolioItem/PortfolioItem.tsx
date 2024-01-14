"use client";
import { Portfolio } from '@/app/utils/portfolio';
import Image from 'next/image';
import React, {useState} from 'react';
import {motion} from 'framer-motion'
import { gridItemVariants,  hoverVariants, hoverVariants2 } from '@/app/utils/animation';

function PortfolioItem({name, image, url, categories, onClick }:Portfolio) {
    const [isHover, setIsHover] = useState(false);



    // const handleHoverStart = () => {
    //     setIsHover(true);
    // }
    // const handleHoverEnd = () => {
    //     setIsHover(false);
    // }
    return (
        <motion.div 
            className='portfolio' 
            onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} 
            onClick={onClick}
            variants={gridItemVariants}//reread
            >
            <Image src={image} alt={name}/>
            <div className='hover'>
                <motion.div className='hover__categories' initial="hidden" variants={hoverVariants} animate={isHover? "visible" : "hidden"}>
                    {categories.map((category) => {
                        return <span key={category}>{category}</span>;
                    })}
                </motion.div>
                <motion.p className="hover__title" initial="hidden" variants={hoverVariants2} animate={isHover? "visible" : "hidden"}>{name}</motion.p>
            </div>
        </motion.div>
    )
}

export default PortfolioItem;