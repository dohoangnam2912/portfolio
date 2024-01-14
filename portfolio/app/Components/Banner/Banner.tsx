'use client';

import * as React from 'react';
import Button from '../Button/Button';
import { bannerVariants } from '@/app/utils/animation';
import {motion} from 'framer-motion'
import { once } from 'events';
import { useGlobalContext } from '@/app/utils/globalContext';


interface Props {
    text: string;
    button?: boolean;
    background?: string;
    shadow?: boolean;
    color?: string;
}

function Banner({text, button, background="#E6DF63", shadow, color}: Props) {
    const context = useGlobalContext();
    return (<motion.div 
        className='banner'
        variants={bannerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once: true, amount: 0.2}} //reread
        style={{
            background,
            boxShadow: shadow ? "0px 2px 10px rgba(0, 0, 0, 0.05)" : "none",
        }}
        >
        <p className='banner__text' style={{color,}}>{text}</p>
        {button && (
            <Button
                text="Contact Us"
                bg='linear-gradient(90deg, rgba(230,53,85,0.7791491596638656) 0%, rgba(53,178,230,0.7287289915966386) 100%)'
                padding='1.2rem 2rem'
                hover='true'
                onClick={context.handleToggle}
            />
        )

        }
    </motion.div>)
}

export default Banner;