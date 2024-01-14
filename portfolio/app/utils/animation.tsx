import { Variants } from "framer-motion"

export const gridVariants = {
    hidden: {
        opacity: 0,
        scale: 0,
        filter: "blur(10px)", //reread
    },
    visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)", //reread
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
}

export const bannerVariants = {
    offscreen: {
        y: 300,
        opacity: 0,
        scaleY: 0.2, //reread
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scaleY: 1,
        transition: {
            type: "spring",//reread
            bounce: 0.45,
            duration: 0.8,
        },
    }
}

export const portfolioVariants = {
    hidden: {
        opacity: 0,
        scaleY: 0.3,
        filter: "blur(10px)",
        x: -300, //reread
    },
    visible: {
        opacity: 1,
        scaleY: 1,
        filter: "blur(0px)",
        x: 0,

        transition: {
            type: "spring",
            stiffness: 200,//will see later
            damping: 20,
            delay: 0.5,
        },
    },
}

export const navVariants: Variants = {
    hidden: {
        opacity: 0, 
        scaleX: 0, 
        filter: "blur(10px)",
        y: -200},
    visible: {
        opacity: 1,
        scaleX: 1,
        filter: "blur(0px)",
        y: 0,

        transition: {
            type: "spring",
            stiffness: 200,
            damping: 14,

            delay: 1,
        }
    }
}

export const hoverVariants = {
    hidden: {
        y: -100,
        scaleX: 0.5,
        opacity: 0,
    },
    visible: {
        y: 0,
        scaleX: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 180,
            damping: 10,
        },
    },
};

export const hoverVariants2 = {
    hidden: {
        y: 100,
        scaleX: 0.5,
        opacity: 0,
    },
    visible: {
        y: 0,
        scaleX: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 180,
            damping: 10,
        },
    },
};

export const gridItemVariants: Variants= {
    hidden: {
        opacity: 0,
        scale: 0,
        filter: "blur(10px)",
    },
    visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 10,
        },
    },
}

export const titleVariants: Variants= {
    offscreen: {
        y: 300,
        opacity: 0,
        scaleY: 0.5,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scaleY: 1,
        transition: {
            type: "spring",
            bounce: 0.45,
            duration: 0.8,
        },
    },
}

export const menuVariants = {
    visible: {
        x: 0,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        display: "block",
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 10,
        } 
    },
    hidden: {
        x: 500,
        scaleX: 0.5,
        scaleY: 0.2,
        transition: {
            type: "ease",
            stiffness: 200,
            damping: 30,
        },
        transitionEnd: {
            display: "none",
        },
    },

}