"use client";
import * as React from 'react';
import { portfolios} from '../utils/portfolio';
import PortfolioItem from '../Components/PortfolioItem/PortfolioItem';
import { useRouter } from 'next/navigation';
import {motion} from "framer-motion"
import { gridVariants } from '../utils/animation';
import ContactBanner from '../Components/Banner/ContactBanner';

function Portfolios() {
    const router = useRouter();
//reread
    return (
    <div>
        <motion.div className='portfolios' variants={gridVariants} initial="hidden" animate="visible">
            {portfolios.map((portfolio) => {
                return <PortfolioItem 
                    key={portfolio.id}
                    name={portfolio.name}
                    image={portfolio.image}
                    url={portfolio.url}
                    categories={portfolio.categories}
                    onClick={()=>{
                        router.push(`/portfolio/${portfolio.url}`)
                    }}
                />
            })}
        </motion.div>
        <ContactBanner/>
    </div>
    )
    
}

export default Portfolios;

// export default function Home(){
//     return (
//         <main>
//             <Portfolios />
//         </main>
//     )
// }