"use client";



import * as React from 'react';
import {motion, useSpring, useScroll} from "framer-motion"



function ProgressBar() {
    const scrollYprogress = useScroll().scrollYProgress;

    const scaleX = useSpring(scrollYprogress, {
        stiffness: 200,
        damping: 100,
        restDelta: 0.001, //reread
    })
    return (
        <motion.div 
            className='progress-bar' 
            style={{
                scaleX,
            }}
        >
    </motion.div>)
}

export default ProgressBar;