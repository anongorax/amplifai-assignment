import React from 'react';
import { Box, Waves, Circle, Minus } from 'lucide-react';
import Image from 'next/image';

const LoginIllustraion = () => {
    return (
        <>
            <Waves
                className="absolute -top-20 -right-20 w-72 h-72 text-white rotate-140"
                strokeWidth={0.3}
            />


            <Box
                className="absolute bottom-10 right-10 w-32 h-32 text-white"
                strokeWidth={0.3}
            />
            <Box
                className="absolute bottom-4 right-14 w-32 h-32 text-white"
                strokeWidth={0.3}
            />
            <Circle
                className="absolute top-24 -left-5 w-16 h-16 text-white"
                strokeWidth={0.3}
            />
            <Minus
                className="absolute top-12 -left-2 w-20 h-48 text-white rotate-40"
                strokeWidth={0.3}
            />
            <Minus
                className="absolute -top-20 right-130 w-60 h-60 text-white/5 -rotate-40"
                strokeWidth={1}
            />
            <Minus
                className="absolute bottom-50 -right-15 w-60 h-60 text-white/5 -rotate-40"
                strokeWidth={1}
            />
            <Circle
                className="absolute -bottom-18 -left-10 w-40 h-40 text-white"
                strokeWidth={0.3}
            />
            <Circle
                className="absolute -bottom-18 -left-15 w-40 h-40 text-white"
                strokeWidth={0.3}
            />
            {/* Content (on top of decorations) */}
            <div className="z-10">
                {/* Placeholder for the blue 'D' logo */}
                <Image src="/flowstate.svg" alt="FlowState Logo" width={48} height={48} />


                <h2 className="text-4xl font-bold leading-tight max-w-lg">
                    Drive Better Decisions
                    with Centralized
                    Performance &
                    Account Intelligence.
                </h2>
            </div>
        </>
    );
};

export default LoginIllustraion;