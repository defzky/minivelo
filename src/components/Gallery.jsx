import React from 'react';
import { motion } from 'framer-motion';

const bikes = [
    {
        id: 1,
        name: 'NANO-SILVER',
        image: '/assets/bike-silver.png', // Assuming assets are moved
        desc: 'The original prototype. Raw aluminum.',
        specs: { weight: '7.2kg', gear: '48/16' }
    },
    {
        id: 2,
        name: 'VOID-RUNNER',
        image: '/assets/bike-black.png',
        desc: 'Stealth ops city cruiser. Matte finish.',
        specs: { weight: '8.1kg', gear: 'Belt Drive' }
    },
    {
        id: 3,
        name: 'CYBER-PUNK',
        image: '/assets/bike-neon.png',
        desc: 'Night rider edition. High viz.',
        specs: { weight: '7.5kg', gear: 'Fixed' }
    }
];

const Gallery = () => {
    return (
        <section id="gallery" className="min-h-screen bg-charcoal text-white py-20 px-4 md:px-10 relative border-b border-white/10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-6xl md:text-8xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700 uppercase tracking-tighter"
                >
                    Fleet
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bikes.map((bike, index) => (
                        <motion.div
                            key={bike.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/5 border border-white/10 hover:border-neon transition-colors duration-300 overflow-hidden"
                        >
                            <div className="aspect-square relative overflow-hidden bg-gradient-to-b from-gray-800 to-black p-8 flex items-center justify-center">
                                <div className="absolute top-0 right-0 p-4 font-mono text-xs text-gray-500 opacity-50">
                                    0{bike.id} //
                                </div>

                                <img
                                    src={bike.image}
                                    alt={bike.name}
                                    className="w-full h-auto object-contain group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500 grayscale group-hover:grayscale-0"
                                />

                                {/* Glitch Overlay on Hover */}
                                <div className="absolute inset-0 bg-neon/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-100 pointer-events-none"></div>
                            </div>

                            <div className="p-6 border-t border-white/10 relative">
                                <h3 className="text-2xl font-bold font-mono text-white mb-2 group-hover:text-neon transition-colors">
                                    {bike.name}
                                </h3>
                                <p className="text-sm text-gray-400 font-mono mb-4">{bike.desc}</p>

                                <div className="grid grid-cols-2 gap-4 text-xs font-mono border-t border-white/10 pt-4">
                                    <div>
                                        <span className="text-gray-600 block">WEIGHT</span>
                                        <span className="text-white">{bike.specs.weight}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-600 block">GEAR RATIO</span>
                                        <span className="text-white">{bike.specs.gear}</span>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 h-1 bg-neon w-0 group-hover:w-full transition-all duration-300"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
