"use client";

import React, { use } from 'react';
import Banner from './Components/Banner/Banner';
import ContactBanner from './Components/Banner/ContactBanner';
import StrategyItem from './Components/StrategyItem/StrategyItem';
import { motion, useTransform, useScroll } from 'framer-motion';
import { bannerVariants, titleVariants } from './utils/animation';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { Abril_Fatface } from 'next/font/google';
import Link from 'next/link'

const abril = Abril_Fatface({
    subsets: ["latin"],
    weight: ["400"],
})


function AboutPage() {
    const header = React.useRef(null);

    const gradients = [
        "radial-gradient(circle, rgba(250,233,40,0.4598214285714286) 0%, rgba(92,59,184,1) 100%)"
    ];

    const randomGradient = () => {
        return gradients[Math.floor(Math.random() * gradients.length)]
    }

    //animate scroll and reread
    const scrollYProgress = useScroll({
        target: header,
        offset: ["start end", "end start"]
    }).scrollYProgress;


    const scale = useTransform(scrollYProgress, [0, 0.5], [0.3, 1.2]); //reread
    const x = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, -2400]) //reread
    const y = useTransform(scrollYProgress, [0, 0.75, 1], [0, 0, -900]);
    const opacity = useTransform(scrollYProgress, [0, 0.85, 0.95], [1, 1, 0]);
    return <div className='u-pad-2' style={{
        background: "linear-gradient(90deg, rgba(1,10,247,0.8) 0%, rgba(248,1,1,0.65) 100%)",
    }}>
        <motion.header 
            ref={header}
            className="about-header" style={{
            background: randomGradient(),
        }}>
            <motion.img src="/about.png" alt="" className="about-header__image" variants={bannerVariants} initial="offscreen" animate="onscreen"style={{
                scale,
                translateX: "-50%",
                x,
                y,
                opacity,
            }}/>
            <motion.div className="about-header__content" variants={titleVariants} initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.2}}>
                <h1 className={`about-header__title ${abril.className}`}>
                    ようこそ
                    
                </h1>        
                <p>
                    これはジョブフェアのため作ったウェブサイトです。
                    どうぞよろしくお願いします。
                </p>
                <div className="icons">
                    <Link href="htps://www.linkedin.com/">
                        <BsLinkedin/>
                    </Link>
                    <Link href="htps://github.com/">
                        <BsGithub/>
                    </Link>
                    <Link href="htps://www.youtube.com//">
                        <BsYoutube/>
                    </Link>
                </div>
            </motion.div>
        </motion.header>
        <div className="about-content">
            <section className="strategy-section">
                <motion.h2 
                    className="strategy-section__title"
                    variants={titleVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true, amount: 0.2}}
                    style={{
                        color: "white",
                    }}
                    >
                    人物像
                </motion.h2>
                <ol>
                    <StrategyItem
                        number={"01"}
                        title="仕事に求めるもの"
                        description="社会的な影響力や意義"
                        description2='法人顧客向けサービスの開発'
                        description3='これまでにない挑戦'
                    />
                    <StrategyItem
                        number={"02"}
                        title="強み"
                        description="最後までやり抜く責任感"
                        description2='前向きな向上心'
                        description3='柔軟な思考や対応'
                    />
                    <StrategyItem
                        number={"03"}
                        title="興味分野"
                        description="Web"
                        description2='ミドルウェア開発'
                        description3='研究開発'
                    />
                </ol>
                <motion.h2 
                    className="strategy-section__title"
                    variants={titleVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true, amount: 0.2}}
                    style={{
                        margin: "4rem 0 0 0 ",
                        color: "white",
                    }}
                    >
                    性格診断
                </motion.h2>
                <ol>
                    <StrategyItem
                        number={"01"}
                        title="誠実さ"
                        description="真実を語る。"
                        description2='自分を誠実に語る。'
                        description3='偽りなく存在する。'
                    />
                    <StrategyItem
                        number={"02"}
                        title="向学心"
                        description="新しいスキルや知識体系を身につけることは、独学でも正式な教育による場合でも明らかに好奇心の強みに関係しているが、好奇心の枠に留 まらず、既知の知識についても体系的に理解を深める傾向がある。"
                    />
                    <StrategyItem
                        number={"03"}
                        title="好奇心"
                        description="今起きているあらゆる経験それ自体に興味を持ち、主題やテーマに対して興味深いと感じる。"
                    />
                    <StrategyItem
                        number={"04"}
                        title="チームワーク"
                        description="個々の力を結集し、共同で目標を達成するための重要なスキルです。チームワークの中でメンバーはお互いをサポートし、異なる強みを生かして協力します。"
                    />
                    <StrategyItem
                        number={"05"}
                        title="感謝"
                        description="感謝のスキルは、他者に対して深い感謝の気持ちを表現し、感謝の意識を持つことを指します。このスキルは、人間関係を強化し、ポジティブな雰囲気を醸成するために重要です。"
                    />
                </ol>
            </section>
            <ContactBanner/>
        </div>
    </div>
}

export default AboutPage;