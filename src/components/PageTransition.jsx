"use client";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    transition: {
                        duration: 0.2,
                        ease: "easeInOut",
                    },
                }}
                className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            />
            {children}
        </>
    );
};

export default PageTransition;
