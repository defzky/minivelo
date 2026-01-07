import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="h-screen flex flex-col justify-center items-center relative overflow-hidden border-b border-white/10">

            {/* Background Grids */}
            <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-10">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="border-r border-white h-full"></div>
                ))}
            </div>

            {/* Moving scanlines */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,19,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]"></div>

            <div className="z-20 text-center relative w-full max-w-7xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="relative"
                >
                    <h1 className="text-[12vw] leading-none font-black tracking-tighter mix-blend-overlay opacity-50 select-none">
                        MINIVELO
                    </h1>
                    <h1 className="text-[12vw] leading-none font-black tracking-tighter absolute top-0 left-0 w-full text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 glitch" data-text="MINIVELO">
                        MINIVELO
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative z-30 -mt-10 md:-mt-20 lg:-mt-32"
                >
                    {/* Placeholder for the bike image - we need to generate one or use a placeholder */}
                    <div className="w-[80vw] h-[40vw] md:w-[600px] md:h-[400px] bg-gray-800/50 backdrop-blur-sm border border-white/20 mx-auto flex items-center justify-center relative group">
                        <span className="font-mono text-xs text-neon absolute top-2 left-2">ASSET_MISSING // GENERATING</span>
                        <div className="absolute bottom-4 right-4 text-right">
                            <p className="font-mono text-xs text-gray-400">MODEL: NANO-X</p>
                            <p className="font-mono text-xs text-gray-400">STATUS: READY</p>
                        </div>

                        {/* Simulated Bike Visual */}
                        <div className="text-9xl text-white/5 group-hover:text-neon/20 transition-colors duration-500">
                            🚲
                        </div>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 font-mono text-neon text-sm md:text-base tracking-widest uppercase"
                >
                    [ small wheels / big attitude ]
                </motion.p>
            </div>

            <div className="absolute bottom-10 left-10 font-mono text-xs text-gray-500">
                COORD: 35.6895° N, 139.6917° E
            </div>
        </section>
    );
};

export default Hero;
