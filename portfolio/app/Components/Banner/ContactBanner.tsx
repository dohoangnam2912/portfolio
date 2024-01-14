"use client";

import { portfolioVariants } from '@/app/utils/animation';
import { motion } from 'framer-motion';
import * as React from 'react';

interface Props {
    logo?: string;
    title?: string;
    description?: string;
    links?: string[];
    background?: string;
}

function ContactBanner({
        logo="/logo.png", 
        title, 
        description, 
        links = ["自己紹介", "プロジェクト", "GitHub"], 
        background = "linear-gradient(90deg, #9849e2 0%, #9ec72e8d 90%)"}: Props){
        return (
            <motion.div 
                className='contact-banner'
                variants={portfolioVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                style={{
                background: background,
            }}>
                <div className='contact-banner__logo' >
                    <img src={logo} alt="logo" style={{
                    width: "150px",
                    height: "165px",
                }}/>
                </div>
                <div className='contact-banner__title'>
                    <h1>{title}</h1>
                </div>
                <div className='contact-banner__description'>
                    <p>{description}</p>
                </div>
                <div className='contact-banner__links'>
                    <a href="/" key="1">自己紹介</a>
                    <a href="/projects" key="2">プロジェクト</a>
                    <a href="https://github.com/dohoangnam2912" target="_blank" key="3">GitHub</a>
                </div>
            </motion.div>
    )
}

export default ContactBanner;