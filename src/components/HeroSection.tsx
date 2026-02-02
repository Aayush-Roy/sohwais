
// import { ChevronDown } from 'lucide-react';
// import { useState, useRef, useEffect } from 'react';
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useInView,
//   useReducedMotion,
// } from 'motion/react';

// import heroImage from '../assets/Hero.png';

// interface HeroSectionProps {
//   onExploreClick?: (event?: React.MouseEvent) => void;
// }

// interface Ripple {
//   id: number;
//   x: number;
//   y: number;
// }

// export function HeroSection({ onExploreClick }: HeroSectionProps) {
//   const [ripples, setRipples] = useState<Ripple[]>([]);
//   const sectionRef = useRef<HTMLElement>(null);
//   const shouldReduceMotion = useReducedMotion();

//   const isNearViewport = useInView(sectionRef, {
//     once: false,
//     margin: '200px 0px 200px 0px',
//   });

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start start', 'end start'],
//   });

//   const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
//   const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

//   const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
//   const contentOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.5, 1],
//     [1, 0.8, 0]
//   );
//   const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

//   const handleRippleClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     const section = e.currentTarget.closest('section');
//     if (!section) return;

//     const rect = section.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const newRipple: Ripple = {
//       id: Date.now(),
//       x,
//       y,
//     };

//     setRipples((prev) => [...prev, newRipple]);

//     setTimeout(() => {
//       setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
//     }, 1000);
//   };

//   // const getProducts=async()=>{
//   //   try{
//   //     const res = await fetch("https://api.sohwais.com/api/products?limit=100");
//   //     const data = await res.json();
//   //     console.log(data);
//   //   }catch(err){
//   //     console.log(err);
//   //   }
//   // }
//   // useEffect(()=>{
//   //   getProducts();
//   // },[])


//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-[75vh] md:h-screen w-full overflow-hidden bg-white"
//     >
//       {/* Background Image */}
//       <motion.div
//         className="absolute inset-0 flex items-center justify-center"
//         style={{
//           y: shouldReduceMotion || !isNearViewport ? 0 : backgroundY,
//           scale:
//             shouldReduceMotion || !isNearViewport ? 1 : backgroundScale,
//           willChange: isNearViewport ? 'transform' : 'auto',
//         }}
//       >
//         <img
//           src={heroImage}
//           alt=""
//           className="
//             w-full h-full
//             object-cover object-center
//             scale-100 translate-x-0
//             md:scale-100
//             md:object-[100%_center]
//           "
//         />
//       </motion.div>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />

//       {/* Content */}
//       <motion.div
//         onClick={handleRippleClick}
//         className="relative h-full flex items-center justify-center px-4 sm:px-6 md:px-8"
//         style={{
//           y: shouldReduceMotion || !isNearViewport ? 0 : contentY,
//           opacity:
//             shouldReduceMotion || !isNearViewport
//               ? 1
//               : contentOpacity,
//           scale:
//             shouldReduceMotion || !isNearViewport
//               ? 1
//               : contentScale,
//           willChange: isNearViewport ? 'transform, opacity' : 'auto',
//         }}
//       >
//         {/* Ripples */}
//         {ripples.map((ripple) => (
//           <span
//             key={ripple.id}
//             className="absolute pointer-events-none z-10"
//             style={{
//               left: ripple.x,
//               top: ripple.y,
//               width: '0px',
//               height: '0px',
//               borderRadius: '50%',
//               backgroundColor: 'rgba(255,255,255,0.6)',
//               animation: 'ripple 1s ease-out',
//               transform: 'translate(-50%, -50%)',
//             }}
//           />
//         ))}

//         <div className="text-center max-w-4xl mx-auto">
//           <motion.p
//             className="text-[#fdfcf9] text-[9px] sm:text-[10px] tracking-[3px] mb-6 font-['Cormorant_Garamond',serif]"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             INTRODUCING
//           </motion.p>

//           <motion.h1
//             className="text-[#fdfcf9] text-[36px] sm:text-[42px] md:text-[50px] lg:text-[56px] tracking-[4px] mb-10 font-['Cinzel_Decorative',serif]"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.4 }}
//           >
//             HERITAGE 2026
//           </motion.h1>

//           <motion.p
//             className="text-[#fdfcf9]/80 text-[12px] tracking-[1.8px] mb-10 font-['Cormorant_Garamond',serif] italic"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             Rooted in craft. Refined for today
//           </motion.p>

//           <motion.button
//             onClick={(e) => {
//               e.preventDefault();
//               onExploreClick?.(e);
//             }}
//             className="bg-white text-[#2c1810] px-10 py-3 text-[10px] tracking-[2px] rounded shadow-xl hover:scale-105 transition-all font-['Cormorant_Garamond',serif]"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             ENTER THE HERITAGE
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-12 left-1/2 -translate-x-1/2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 1.2 }}
//       >
//         <ChevronDown className="w-5 h-5 text-white animate-bounce" />
//       </motion.div>
//     </section>
//   );
// }

import { ChevronDown } from 'lucide-react';
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Added
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
} from 'motion/react';

import heroImage from '../assets/Hero.png';

interface HeroSectionProps {
  onExploreClick?: () => void; // ✅ Simplified, event parameter removed
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate(); // ✅ Added for programmatic navigation

  const isNearViewport = useInView(sectionRef, {
    once: false,
    margin: '200px 0px 200px 0px',
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.8, 0]
  );
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const handleRippleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const section = e.currentTarget.closest('section');
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  };

  // Handle explore click with proper navigation
  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onExploreClick) {
      // If parent provides handler, use it
      onExploreClick();
    } else {
      // Default behavior: navigate to collections
      navigate('/collections');
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[75vh] md:h-screen w-full overflow-hidden bg-white"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          y: shouldReduceMotion || !isNearViewport ? 0 : backgroundY,
          scale:
            shouldReduceMotion || !isNearViewport ? 1 : backgroundScale,
          willChange: isNearViewport ? 'transform' : 'auto',
        }}
      >
        <img
          src={heroImage}
          alt=""
          className="
            w-full h-full
            object-cover object-center
            scale-100 translate-x-0
            md:scale-100
            md:object-[100%_center]
          "
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />

      {/* Content */}
      <motion.div
        onClick={handleRippleClick}
        className="relative h-full flex items-center justify-center px-4 sm:px-6 md:px-8"
        style={{
          y: shouldReduceMotion || !isNearViewport ? 0 : contentY,
          opacity:
            shouldReduceMotion || !isNearViewport
              ? 1
              : contentOpacity,
          scale:
            shouldReduceMotion || !isNearViewport
              ? 1
              : contentScale,
          willChange: isNearViewport ? 'transform, opacity' : 'auto',
        }}
      >
        {/* Ripples */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute pointer-events-none z-10"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: '0px',
              height: '0px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.6)',
              animation: 'ripple 1s ease-out',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}

        <div className="text-center max-w-4xl mx-auto">
          <motion.p
            className="text-[#fdfcf9] text-[9px] sm:text-[10px] tracking-[3px] mb-6 font-['Cormorant_Garamond',serif]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            INTRODUCING
          </motion.p>

          <motion.h1
            className="text-[#fdfcf9] text-[36px] sm:text-[42px] md:text-[50px] lg:text-[56px] tracking-[4px] mb-10 font-['Cinzel_Decorative',serif]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            HERITAGE 2026
          </motion.h1>

          <motion.p
            className="text-[#fdfcf9]/80 text-[12px] tracking-[1.8px] mb-10 font-['Cormorant_Garamond',serif] italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Rooted in craft. Refined for today
          </motion.p>

          {/* Option 1: Using Link (Recommended for simple navigation) */}
          <Link to="/collections">
            <motion.button
              className="bg-white text-[#2c1810] px-10 py-3 text-[10px] tracking-[2px] rounded shadow-xl hover:scale-105 transition-all font-['Cormorant_Garamond',serif]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              ENTER THE HERITAGE
            </motion.button>
          </Link>

          {/* OR Option 2: Using onClick with programmatic navigation */}
          {/*
          <motion.button
            onClick={handleExploreClick}
            className="bg-white text-[#2c1810] px-10 py-3 text-[10px] tracking-[2px] rounded shadow-xl hover:scale-105 transition-all font-['Cormorant_Garamond',serif]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            ENTER THE HERITAGE
          </motion.button>
          */}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <ChevronDown className="w-5 h-5 text-white animate-bounce" />
      </motion.div>
    </section>
  );
}