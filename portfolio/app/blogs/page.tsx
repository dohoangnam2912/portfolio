"use client";

import React from 'react';
import Banner from '../Components/Banner/Banner';
import ContactBanner from '../Components/Banner/ContactBanner';
import { blogs } from '../utils/blog';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { gridItemVariants, gridVariants } from '../utils/animation';



function BlogsPage(){
    const router = useRouter();
    return (
        <div className='u-pad-2' >
            <motion.div className="blogs" variants={gridVariants} initial="hidden" animate="visible">
                {blogs.map((blog, index:number) => {
                    return (
                        <motion.div key={index} className="blog" variants={gridItemVariants} onClick={() => {
                            router.push(`/blog/${blog.title?.replace(/:/g,"").split(" ").join("-").toLocaleLowerCase()}`)
                        }}>
                            <div className="blog__image">
                                {blog.image && <Image src={blog.image} alt="blog"/>}
                            </div>
                            <h4 className="blog__title">
                                {blog.title}
                            </h4>
                        </motion.div>
                    )
                })}
            </motion.div>
            <Banner
                color="#E6E062"
                button
                text="Interested in working with me"
            />

            <ContactBanner/>
            <div style={{ content:"",padding: "0 0 0 100px"}}></div>
        </div>
    )
}

export default BlogsPage;