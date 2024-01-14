"use client";

import { blogs } from '@/app/utils/blog';
import Image from 'next/image';
import * as React from 'react';

interface Params {
    params: {
        blogName: string;
    }
}

function page({params : {blogName}}: Params){
//reread
    const blog = blogs.find(
        (blog) => blog.title?.replace(/:/g,"").split(" ").join("-").toLocaleLowerCase() === blogName
    );

    const {title, introduction, image, outro, list, featuredPortfolio} = blog || {}

    const introImage = featuredPortfolio?.image;
    if (!blog){
        return <div>Loading...</div>
    }
    return (
        <section className='blog-page'>
            <div className="blog-page__header">
                {title && <h1 className="blog-page__title">{title}</h1>}
                <div className="blog-page__header__profile">
                    <Image src={"/logo.png"} 
                        alt="logo"
                        className='logo'
                        width={45}
                        height={45}
                        style={{objectFit: "contain"}}
                    />

                    <p className="blog__header__date">
                        <span>Do Hoang Nam</span>
                        <span>29 12 2023</span>
                    </p>
                </div>
                
                    <div className="blog-page__header__image">
                        {image && <Image src={image} alt="header image"/>}
                    </div>
                </div>
                
            <div className='blog-page__content'>
                {introImage && <Image className='blog-page__content__intro-image' src={introImage} alt="intro image"/>}

                <ol className='blog-page__content__list'>
                <div className="blog-page__content__outro">{outro}</div>
                    <p className="blog-page__content__introduction">{introduction}</p>
                    {list?.map((item, index: number) => {
                        return <li key={index}>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                        </li>
                    })}
                </ol>

                <p className="blog-page__content__outro">{outro}</p>
            </div>
        </section>
    )
}

export default page;