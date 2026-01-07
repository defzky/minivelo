import React from 'react';
import { motion } from 'framer-motion';

const specs = [
    { item: 'FRAME', value: '6061 T6 ALUMINUM / TRIPLE BUTTED' },
    { item: 'FORK', value: 'FULL CARBON FIBER MONOCOQUE' },
    { item: 'WHEELSET', value: '451mm DEEP DISH ALLOY' },
    { item: 'CRANKSET', value: 'SRAM OMNIUM 48T' },
    { item: 'BRAKES', value: 'TEKTRO R539 DUAL PIVOT' },
    { item: 'COCKPIT', value: 'BULLHORN 400MM / INTEGRATED STEM' },
    { item: 'SADDLE', value: 'BROOKS C17 CAMBIUM' },
    { item: 'TIRES', value: 'SCHWALBE ONE 20x1-1/8"' }
];

const TechSpecs = () => {
    return (
        <section id="tech" className="py-20 bg-charcoal text-white relative border-b border-white/10 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-5">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="border-r border-white h-full"></div>
                ))}
            </div>

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 border-l-4 border-neon pl-6"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Technical<br />Specifications</h2>
                    <p className="font-mono text-neon mt-2">/// HARDWARE_MANIFEST_V2.0</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-0 gap-x-12">
                    {specs.map((spec, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="flex justify-between items-center py-4 border-b border-white/20 hover:bg-white/5 transition-colors group cursor-crosshair"
                        >
                            <span className="font-mono text-xs text-gray-400 group-hover:text-neon transition-colors w-1/3">{spec.item}</span>
                            <span className="font-mono text-sm text-right w-2/3 truncate">{spec.value}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 border border-white/20 p-6 font-mono text-xs text-gray-500 flex justify-between items-end">
                    <div>
                        <p>MANUFACTURING LOT: #9902-A</p>
                        <p>ASSEMBLED IN: NEO-TOKYO</p>
                    </div>
                    <div className="text-right">
                        <p>WARRANTY: VOID IF UNCHAINED</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechSpecs;
