"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import * as React from 'react';


interface Props{
    number: string;
    title: string;
    description ?: string;
    description2 ?: string;
    description3 ?: string;
}



function StrategyItem({number, title, description, description2, description3}: Props) {
    const listItem = React.useRef(null); //reread
    const scrollYProgress = useScroll({
        target: listItem,
        offset: ["start end", "end start"]
    }).scrollYProgress;


    const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]); //reread
    const x = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, -2400]) //reread
    const y = useTransform(scrollYProgress, [0, 0.5], [500, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    return (
        <motion.li ref={listItem} className='strategy-item' style={{
            y,
            scale,
            opacity,
        }}>
            <div className="strategy-item__title">
                <span className="strategy-item__number">{number}</span>
                <span className="strategy-item__title">{title}</span>
            </div>
            <div className="strategy-item__description">
                <p>{description}</p>
                <p>{description2}</p>
                <p>{description3}</p>
            </div>
        </motion.li>
    )
}

export default StrategyItem;