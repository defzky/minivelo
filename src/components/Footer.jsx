import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-black text-white py-12 border-t border-white/10 relative">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end">
                <div>
                    <h3 className="text-2xl font-black mb-4">MINIVELO X</h3>
                    <div className="flex flex-col space-y-2 font-mono text-sm text-gray-400">
                        <a href="#" className="hover:text-neon">INSTAGRAM</a>
                        <a href="#" className="hover:text-neon">STRAVA</a>
                        <a href="#" className="hover:text-neon">EMAIL</a>
                    </div>
                </div>

                <div className="mt-8 md:mt-0 text-right">
                    <p className="font-mono text-xs text-gray-600 mb-2">DESIGNED BY ANTIGRAVITY</p>
                    <p className="font-mono text-xs text-gray-800">© 2026 ALL RIGHTS RESERVED</p>
                </div>
            </div>

            {/* Decorative giant text */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 opacity-10 pointer-events-none whitespace-nowrap">
                <span className="text-[20vw] font-black leading-none text-white/5">RIDE FAST</span>
            </div>
        </footer>
    );
};

export default Footer;
