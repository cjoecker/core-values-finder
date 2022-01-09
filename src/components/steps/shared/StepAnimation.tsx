import * as React from 'react';
import { motion } from "framer-motion";


export type StepAnimationProps = {
    children: React.ReactNode,
    animationKey: string
};
export const StepAnimation = ({children, animationKey}: StepAnimationProps) => {
    return (
        <motion.div
            key={animationKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.5,
            }}

        >
            {children}
        </motion.div>
    );
};
