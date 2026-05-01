"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeadBase, HairSpiky, HairBob, EyeClassic, EyeFemale } from './AvatarParts';
import { HexColorPicker } from 'react-colorful';

type Category = 'HEAD' | 'EYES' | 'HAIR';

type HairStyle = 'spiky' | 'bob';

interface SelectionState {
  headColor: string;
  eyesStyle: 'classic' | 'female';
  eyesColor: string;
  hairStyle: HairStyle;
  hairColor: string;
}

const sidebarVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export default function AvatarBuilder() {
  const [activeCategory, setActiveCategory] = useState<Category>('HEAD');
  const [selection, setSelection] = useState<SelectionState>({
    headColor: '#f3a683',
    eyesStyle: 'classic',
    eyesColor: '#333333',
    hairStyle: 'spiky',
    hairColor: '#574b90',
  });

  const categories: Category[] = ['HEAD', 'EYES', 'HAIR'];

  const handleColorChange = (color: string) => {
    if (activeCategory === 'HEAD') setSelection(prev => ({ ...prev, headColor: color }));
    if (activeCategory === 'HAIR') setSelection(prev => ({ ...prev, hairColor: color }));
    if (activeCategory === 'EYES') setSelection(prev => ({ ...prev, eyesColor: color }));
  };

  const currentSelectionColor = 
    activeCategory === 'HEAD' ? selection.headColor : 
    activeCategory === 'HAIR' ? selection.hairColor : 
    selection.eyesColor;

  return (
    <div className="flex h-full w-full overflow-hidden p-6 gap-6 bg-slate-950/50">
      {/* Left Sidebar: Categories */}
      <motion.div 
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4 w-32"
      >
        {categories.map(cat => (
          <motion.button
            key={cat}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat)}
            className={`
              h-16 rounded-xl border transition-all duration-300 flex items-center justify-center font-bold tracking-wider relative overflow-hidden
              ${activeCategory === cat 
                ? 'bg-primary/20 border-primary text-primary glow-border' 
                : 'bg-bg-panel border-white/10 text-white/50 hover:bg-white/5'}
            `}
          >
            {activeCategory === cat && (
              <motion.div 
                layoutId="active-pill"
                className="absolute inset-0 bg-primary/10"
                initial={false}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Center: Preview */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 relative flex items-center justify-center glass-panel rounded-3xl overflow-hidden border border-white/5"
      >
        <div className="absolute inset-0 z-0">
           <img src="/dashboard-bg.png" alt="Background" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
           <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60" />
        </div>
        
        <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
           <div className="relative aspect-square h-full max-h-[800px] flex items-center justify-center overflow-hidden">
             {/* Bald Character Base */}
             <motion.img 
               layout
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               src="/character-base-bald.png" 
               alt="Character Base" 
               className="absolute inset-0 w-full h-full object-contain pointer-events-none"
             />
             
             {/* Customizable SVG Parts */}
            <div className="absolute top-[7%] left-[50%] -translate-x-1/2 w-[28%] aspect-square">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={`head-${selection.headColor}`}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="absolute inset-0"
                 >
                   <HeadBase color={selection.headColor} className="w-full h-full" />
                 </motion.div>
               </AnimatePresence>
               
               <AnimatePresence mode="wait">
                 <motion.div
                   key={`eyes-${selection.eyesStyle}-${selection.eyesColor}`}
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="absolute inset-0"
                 >
                   {selection.eyesStyle === 'classic' ? (
                     <EyeClassic color={selection.eyesColor} className="w-full h-full" />
                   ) : (
                     <EyeFemale color={selection.eyesColor} className="w-full h-full" />
                   )}
                 </motion.div>
               </AnimatePresence>
               
               <AnimatePresence mode="wait">
                    <motion.div
                      key={`hair-${selection.hairStyle}-${selection.hairColor}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: -25 }}
                      className="absolute inset-0 z-10"
                    >
                      {selection.hairStyle === 'spiky' && <HairSpiky color={selection.hairColor} className="w-full h-full" />}
                      {selection.hairStyle === 'bob' && <HairBob color={selection.hairColor} className="w-full h-full" />}
                    </motion.div>
               </AnimatePresence>
             </div>
           </div>
        </div>
      </motion.div>

      {/* Right Panel: Options & Color */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-80 flex flex-col gap-6"
      >
        {/* Style Options */}
        <div className="flex-1 glass-panel rounded-3xl p-6 flex flex-col gap-4 border border-white/5 overflow-y-auto custom-scrollbar">
          <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Styles</h3>
          <div className="grid grid-cols-2 gap-3">
            {activeCategory === 'HAIR' && (['spiky', 'bob'] as const).map(style => (
              <motion.button
                key={style}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelection(prev => ({ ...prev, hairStyle: style }))}
                className={`aspect-square rounded-2xl border flex flex-col items-center justify-center p-2 transition-all overflow-hidden
                  ${selection.hairStyle === style ? 'border-primary bg-primary/10 glow-border' : 'border-white/5 bg-white/5 hover:bg-white/10'}
                `}
              >
                <div className="w-full h-2/3 flex items-center justify-center">
                   {style === 'spiky' && <HairSpiky color="#fff" className="w-full h-full scale-[1.5]" />}
                   {style === 'bob' && <HairBob color="#fff" className="w-full h-full scale-[1.5]" />}
                </div>
                <span className="text-[7px] font-bold uppercase opacity-50 mt-1">{style}</span>
              </motion.button>
            ))}
            {activeCategory === 'EYES' && (['classic', 'female'] as const).map(style => (
              <motion.button
                key={style}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelection(prev => ({ ...prev, eyesStyle: style }))}
                className={`aspect-square rounded-2xl border flex flex-col items-center justify-center p-2 transition-all overflow-hidden
                  ${selection.eyesStyle === style ? 'border-primary bg-primary/10 glow-border' : 'border-white/5 bg-white/5 hover:bg-white/10'}
                `}
              >
                <div className="w-full h-2/3 flex items-center justify-center">
                  {style === 'classic' ? <EyeClassic color="#fff" className="w-full h-full scale-[1.5]" /> : <EyeFemale color="#fff" className="w-full h-full scale-[1.5]" />}
                </div>
                <span className="text-[7px] font-bold uppercase opacity-50 mt-1">{style}</span>
              </motion.button>
            ))}
            {activeCategory === 'HEAD' && (
              <div className="col-span-2 text-center text-white/30 text-xs py-10 italic">
                Body base selection
              </div>
            )}
          </div>
        </div>

        {/* Color Picker */}
        <div className="glass-panel rounded-3xl p-6 flex flex-col gap-4 border border-white/5">
          <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Color</h3>
          
          <div className="custom-color-picker flex flex-col gap-4">
            <HexColorPicker color={currentSelectionColor} onChange={handleColorChange} className="!w-full !h-40" />
            
            <div className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/5">
               <div className="w-8 h-8 rounded-lg shadow-inner" style={{ backgroundColor: currentSelectionColor }} />
               <input 
                 type="text" 
                 value={currentSelectionColor} 
                 onChange={(e) => handleColorChange(e.target.value)}
                 className="bg-transparent text-white font-mono text-sm outline-none w-full uppercase tracking-widest"
               />
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx global>{`
        .react-colorful {
          height: 160px !important;
        }
        .react-colorful__saturation {
          border-radius: 12px 12px 0 0 !important;
        }
        .react-colorful__hue {
          border-radius: 0 0 12px 12px !important;
          height: 24px !important;
        }
        .react-colorful__pointer {
          width: 16px !important;
          height: 16px !important;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 243, 255, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
