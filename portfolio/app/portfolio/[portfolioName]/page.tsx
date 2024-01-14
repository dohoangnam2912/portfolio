"use client";

import { portfolios } from '@/app/utils/portfolio';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Params {
    params: {
        portfolioName: string;
    };
}


//Find the right url
function page({params}: Params) {
    const portfolio = portfolios.find((portfolio) => {
        return portfolio.url === params.portfolioName;
    })

    const {name , image, categories, content, features, problem, solution, links} = portfolio || {};

    const {description, image1, image2, image3, image4, image5} = content || {};

    return <div className='project'>
        <section className="project__header">
            <img className='bg-image' src={image?.src} alt="" />
            <div className="overlay"></div>
            <div className="banner">
                <div className="banner__header">
                    <h1 className="banner__title">
                        {name}
                    </h1>
                    <div className="banner__categories">
                        {categories?.map((category:any, index:number) => { 
                            return (
                                <span key={index} className="banner__category">{category}</span>
                            );
                        })}
                    </div>
                </div>
                <p className="banner__text">{description}</p>
            </div>
        </section>
        <div className="project__content">
            <div className='project__content__intro'>
                {features && (
                    <ul className='features'>
                        <h4>プロジェクトの目的</h4>
                        {features?.map((feature:any, i:number) => {
                            return <li key={i}>{feature}</li>
                        })}
                    </ul>
                )}
                {problem && (
                        <div className='problem' style={{marginBottom: "2rem",}}>
                            <h4>プロジェクトの説明</h4>
                            <p>{problem}</p>
                        </div>
                        )}
                {solution && (
                    <div className='solution'>
                        <h4>こだわりポイント</h4>
                        <p>{solution}</p>
                    </div>
                )}
                {links && (
                    <div className="links">
                        <h4>プロジェクトリンク</h4>
                        {links.github && <Link href={links.github}>Github: プロジェクトリンク</Link>}
                    </div>
                )}
            </div>
            <div className="horizontal-images u-pad-2">
                {image2 && <Image src={image2} alt=""/>}
                {image3 && <Image src={image3} alt=""/>}
                {image1 && <Image src={image1} alt=""/>}
                {image4 && <Image src={image4} alt=""/>}
            </div>
            {/* <div className="horizontal-images--fullscreen">
                {image1 && <Image src={image1} alt=""/>}
                {image4 && <Image src={image4} alt=""/>}
            </div> */}
        </div>
    </div>
}

export default page;