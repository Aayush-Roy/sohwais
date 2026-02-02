
// import { ShoppingCart, Menu, X, Search } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import { AnimatePresence, motion } from 'motion/react';
// import image_a02147a5b2d7cc9c47ba0dd78dff86bc3675223a from 'figma:asset/a02147a5b2d7cc9c47ba0dd78dff86bc3675223a.png';
// import logoImage from "figma:asset/a02147a5b2d7cc9c47ba0dd78dff86bc3675223a.png";

// interface NavigationProps {
//   cartCount?: number;
//   onCartClick?: () => void;
//   mode?: 'auto' | 'light' | 'dark'; // auto = scroll detection, light = dark text on light bg, dark = light text on dark bg
//   onCollectionClick?: (event?: React.MouseEvent) => void;
//   onOurStoryClick?: (event?: React.MouseEvent) => void;
//   onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
//   enhancedContrast?: boolean; // For pages that need stronger navigation visibility
//   onLogoClick?: () => void; // New prop for logo click handler
// }

// export function Navigation({ 
//   cartCount = 0, 
//   onCartClick, 
//   mode = 'auto', 
//   onCollectionClick, 
//   onOurStoryClick, 
//   onCraftsmanshipClick, 
//   enhancedContrast = false,
//   onLogoClick // Accept logo click handler
// }: NavigationProps) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isOverDarkBackground, setIsOverDarkBackground] = useState(true);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     // Only use scroll detection if mode is 'auto'
//     if (mode !== 'auto') {
//       setIsOverDarkBackground(mode === 'dark');
//       return;
//     }

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       // Hero section is typically 75vh on mobile, 100vh on desktop
//       // Detect if we're past the hero section (approximately)
//       const viewportHeight = window.innerHeight;
//       const heroHeight = window.innerWidth < 768 ? viewportHeight * 0.75 : viewportHeight;
      
//       // If scrolled past ~40% of hero height, switch to light mode
//       setIsOverDarkBackground(scrollPosition < heroHeight * 0.4);
//     };

//     // Set initial state
//     handleScroll();

//     // Add scroll listener
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [mode]);

//   // Handle logo click - redirect to home page
//   const handleLogoClick = (e: React.MouseEvent) => {
//     e.preventDefault();
    
//     if (onLogoClick) {
//       // If parent component provided custom handler
//       onLogoClick();
//     } else {
//       // Default behavior: redirect to home page
//       // Using hash-based navigation as per existing code pattern
//       window.location.hash = ''; // Clear hash to go to top of page
      
//       // If you want to completely reload the home page:
//       // window.location.href = '/'; // Uncomment this if you want full reload
      
//       // OR use history API for SPA-like behavior without React Router:
//       // window.history.pushState({}, '', '/'); // Uncomment this for pushState
      
//       // Scroll to top
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
    
//     // Close mobile menu if open
//     setIsMobileMenuOpen(false);
//   };

//   const handleCollectionClickInternal = (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (onCollectionClick) {
//       onCollectionClick(e);
//     }
//     setIsMobileMenuOpen(false);
//   };

//   const handleOurStoryClickInternal = (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (onOurStoryClick) {
//       onOurStoryClick(e);
//     }
//     setIsMobileMenuOpen(false);
//   };

//   const handleCraftsmanshipClickInternal = (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (onCraftsmanshipClick) {
//       onCraftsmanshipClick(e);
//     }
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className="relative z-50">
//       <div className={`max-w-[1080px] mx-4 mt-1 px-6 sm:px-8 md:px-10 py-4 md:py-5 flex items-center justify-between backdrop-blur-xl rounded-2xl border transition-all duration-300 mx-auto ${
//         enhancedContrast 
//           ? 'bg-white/90 border-[#2c1810]/30 shadow-[0_8px_32px_0_rgba(44,24,16,0.4)]'
//           : isOverDarkBackground 
//             ? 'bg-white/10 border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]' 
//             : 'bg-[#2c1810]/10 border-[#2c1810]/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
//       }`}>
//         {/* Logo - Now with proper click handler */}
//         {/* <button 
//           onClick={handleLogoClick}
//           className="focus:outline-none focus:ring-2 focus:ring-[#c9a060] focus:ring-offset-2 focus:ring-offset-transparent rounded-md transition-all hover:opacity-80"
//           aria-label="Sohwais Threads Home"
//         >
//           <img 
//             src={image_a02147a5b2d7cc9c47ba0dd78dff86bc3675223a} 
//             alt="Sohwais Threads Logo" 
//             className="h-8 sm:h-10 md:h-12 w-auto rounded-md"
//           />
//         </button> */}
       
// <button 
//   onClick={(e) => {
//     e.preventDefault();
//     if (onLogoClick) {
//       onLogoClick();
//     } else {
//       // Default behavior
//       window.location.href = '/';
//     }
//   }}
//   className="focus:outline-none focus:ring-2 focus:ring-[#c9a060] focus:ring-offset-2 focus:ring-offset-transparent rounded-md transition-all hover:opacity-80"
//   aria-label="Sohwais Threads Home"
// >
//   <img 
//     src={logoImage} 
//     alt="Sohwais Threads Logo" 
//     className="h-8 sm:h-10 md:h-12 w-auto rounded-md"
//   />
// </button>
//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-6 lg:gap-8">
//           <nav aria-label="Main navigation">
//             <div className="flex gap-8 lg:gap-12 items-center" role="list">
//               <button 
//                 className={`relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 transition-all tracking-[2px] text-[10px] font-['Cormorant_Garamond',serif] drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 hover:after:w-full ${
//                   isOverDarkBackground
//                     ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:text-[#f5e6c8] focus:ring-[#f5e6c8] hover:drop-shadow-[0_0_8px_rgba(245,230,200,0.6)] after:from-[#f5e6c8] after:to-[#fff4dc] after:shadow-[0_0_6px_rgba(245,230,200,0.5)]'
//                     : 'text-[#2c1810] hover:text-[#c9a060] focus:text-[#c9a060] focus:ring-[#c9a060] hover:drop-shadow-[0_0_8px_rgba(201,160,96,0.6)] after:from-[#c9a060] after:to-[#d4af69] after:shadow-[0_0_6px_rgba(201,160,96,0.5)]'
//                 }`}
//                 role="listitem"
//                 onClick={handleCollectionClickInternal}
//               >
//                 COLLECTION
//               </button>
//               <button 
//                 onClick={handleOurStoryClickInternal}
//                 className={`relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 transition-all tracking-[2px] text-[10px] font-['Cormorant_Garamond',serif] drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 hover:after:w-full ${
//                   isOverDarkBackground
//                     ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:text-[#f5e6c8] focus:ring-[#f5e6c8] hover:drop-shadow-[0_0_8px_rgba(245,230,200,0.6)] after:from-[#f5e6c8] after:to-[#fff4dc] after:shadow-[0_0_6px_rgba(245,230,200,0.5)]'
//                     : 'text-[#2c1810] hover:text-[#c9a060] focus:text-[#c9a060] focus:ring-[#c9a060] hover:drop-shadow-[0_0_8px_rgba(201,160,96,0.6)] after:from-[#c9a060] after:to-[#d4af69] after:shadow-[0_0_6px_rgba(201,160,96,0.5)]'
//                 }`}
//                 role="listitem"
//               >
//                 ABOUT
//               </button>
//               <button 
//                 onClick={handleCraftsmanshipClickInternal}
//                 className={`relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 transition-all tracking-[2px] text-[10px] font-['Cormorant_Garamond',serif] drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 hover:after:w-full ${
//                   isOverDarkBackground
//                     ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:text-[#f5e6c8] focus:ring-[#f5e6c8] hover:drop-shadow-[0_0_8px_rgba(245,230,200,0.6)] after:from-[#f5e6c8] after:to-[#fff4dc] after:shadow-[0_0_6px_rgba(245,230,200,0.5)]'
//                     : 'text-[#2c1810] hover:text-[#c9a060] focus:text-[#c9a060] focus:ring-[#c9a060] hover:drop-shadow-[0_0_8px_rgba(201,160,96,0.6)] after:from-[#c9a060] after:to-[#d4af69] after:shadow-[0_0_6px_rgba(201,160,96,0.5)]'
//                 }`}
//                 role="listitem"
//               >
//                 CRAFTSMANSHIP
//               </button>
//             </div>
//           </nav>
          
//           {/* Search - Desktop */}
//           {/* <div className="flex items-center">
//             {!isSearchOpen ? (
//               <button
//                 onClick={() => setIsSearchOpen(true)}
//                 className={`relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-2 drop-shadow-md ${
//                   isOverDarkBackground
//                     ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:ring-[#f5e6c8] hover:drop-shadow-[0_0_8px_rgba(245,230,200,0.6)]'
//                     : 'text-[#2c1810] hover:text-[#c9a060] focus:ring-[#c9a060] hover:drop-shadow-[0_0_8px_rgba(201,160,96,0.6)]'
//                 }`}
//                 aria-label="Open search"
//               >
//                 <Search className="w-5 h-5 lg:w-6 lg:h-6" />
//               </button>
//             ) : (
//               <div className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
//                 isOverDarkBackground
//                   ? 'bg-white/10 border-white/30'
//                   : 'bg-[#2c1810]/10 border-[#2c1810]/30'
//               }`}>
//                 <Search className={`w-4 h-4 ${isOverDarkBackground ? 'text-[#fdfcf9]/60' : 'text-[#2c1810]/60'}`} />
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search..."
//                   autoFocus
//                   className={`bg-transparent outline-none w-[180px] text-[11px] tracking-[1px] font-['Cormorant_Garamond',serif] placeholder:opacity-50 ${
//                     isOverDarkBackground ? 'text-[#fdfcf9]' : 'text-[#2c1810]'
//                   }`}
//                   aria-label="Search products"
//                 />
//                 <button
//                   onClick={() => {
//                     setIsSearchOpen(false);
//                     setSearchQuery('');
//                   }}
//                   className={`transition-colors hover:opacity-70 ${
//                     isOverDarkBackground ? 'text-[#fdfcf9]' : 'text-[#2c1810]'
//                   }`}
//                   aria-label="Close search"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               </div>
//             )}
//           </div> */}
          
//           {/* Cart Icon */}
//           {onCartClick && (
//             <button
//               onClick={onCartClick}
//               className={`relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-2 drop-shadow-md ${
//                 isOverDarkBackground
//                   ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:ring-[#f5e6c8] hover:drop-shadow-[0_0_8px_rgba(245,230,200,0.6)]'
//                   : 'text-[#2c1810] hover:text-[#c9a060] focus:ring-[#c9a060] hover:drop-shadow-[0_0_8px_rgba(201,160,96,0.6)]'
//               }`}
//               aria-label={`Shopping cart with ${cartCount} items`}
//             >
//               <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-[#c9a060] text-white text-[10px] font-['Cormorant_Garamond',serif] rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
//                   {cartCount > 9 ? '9+' : cartCount}
//                 </span>
//               )}
//             </button>
//           )}
//         </div>

//         {/* Mobile Menu Button and Cart */}
//         <div className="flex md:hidden items-center gap-2 sm:gap-4">
//           {/* Search - Mobile */}
//           {/* <div className="flex items-center">
//             {!isSearchOpen ? (
//               <button
//                 onClick={() => setIsSearchOpen(true)}
//                 className={`relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-2 drop-shadow-md ${
//                   isOverDarkBackground
//                     ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:ring-[#f5e6c8]'
//                     : 'text-[#2c1810] hover:text-[#c9a060] focus:ring-[#c9a060]'
//                 }`}
//                 aria-label="Open search"
//               >
//                 <Search className="w-5 h-5" />
//               </button>
//             ) : (
//               <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
//                 isOverDarkBackground
//                   ? 'bg-white/10 border-white/30'
//                   : 'bg-[#2c1810]/10 border-[#2c1810]/30'
//               }`}>
//                 <Search className={`w-4 h-4 flex-shrink-0 ${isOverDarkBackground ? 'text-[#fdfcf9]/60' : 'text-[#2c1810]/60'}`} />
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search..."
//                   autoFocus
//                   className={`bg-transparent outline-none w-[100px] sm:w-[120px] text-[10px] tracking-[1px] font-['Cormorant_Garamond',serif] placeholder:opacity-50 ${
//                     isOverDarkBackground ? 'text-[#fdfcf9]' : 'text-[#2c1810]'
//                   }`}
//                   aria-label="Search products"
//                 />
//                 <button
//                   onClick={() => {
//                     setIsSearchOpen(false);
//                     setSearchQuery('');
//                   }}
//                   className={`transition-colors hover:opacity-70 flex-shrink-0 ${
//                     isOverDarkBackground ? 'text-[#fdfcf9]' : 'text-[#2c1810]'
//                   }`}
//                   aria-label="Close search"
//                 >
//                   <X className="w-3.5 h-3.5" />
//                 </button>
//               </div>
//             )}
//           </div> */}

//           {onCartClick && (
//             <button
//               onClick={onCartClick}
//               className={`relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-2 drop-shadow-md ${
//                 isOverDarkBackground
//                   ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:ring-[#f5e6c8]'
//                   : 'text-[#2c1810] hover:text-[#c9a060] focus:ring-[#c9a060]'
//               }`}
//               aria-label={`Shopping cart with ${cartCount} items`}
//             >
//               <ShoppingCart className="w-5 h-5" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-[#c9a060] text-white text-[9px] font-['Cormorant_Garamond',serif] rounded-full w-4 h-4 flex items-center justify-center shadow-lg">
//                   {cartCount > 9 ? '9+' : cartCount}
//                 </span>
//               )}
//             </button>
//           )}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className={`transition-colors focus:outline-none focus:ring-2 rounded p-2 drop-shadow-md ${
//               isOverDarkBackground
//                 ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:ring-[#f5e6c8]'
//                 : 'text-[#2c1810] hover:text-[#c9a060] focus:ring-[#c9a060]'
//             }`}
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//             className={`md:hidden max-w-[1080px] mx-4 mt-2 overflow-hidden backdrop-blur-xl rounded-2xl border mx-auto ${
//               enhancedContrast
//                 ? 'bg-white/90 border-[#2c1810]/30 shadow-[0_8px_32px_0_rgba(44,24,16,0.4)]'
//                 : isOverDarkBackground
//                   ? 'bg-white/10 border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
//                   : 'bg-[#2c1810]/10 border-[#2c1810]/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
//             }`}
//           >
//             <nav aria-label="Mobile navigation" className="px-6 sm:px-8 py-6">
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ delay: 0.1, duration: 0.2 }}
//                 className="flex flex-col gap-1"
//               >
//                 <button 
//                   className={`transition-all tracking-[2px] text-[11px] font-['Cormorant_Garamond',serif] py-3 px-4 text-left rounded-lg hover:backdrop-blur-sm ${
//                     isOverDarkBackground
//                       ? 'text-[#fdfcf9] hover:text-[#f5e6c8] hover:bg-white/10'
//                       : 'text-[#2c1810] hover:text-[#c9a060] hover:bg-[#2c1810]/10'
//                   }`}
//                   onClick={handleCollectionClickInternal}
//                 >
//                   COLLECTION
//                 </button>
//                 <button 
//                   className={`transition-all tracking-[2px] text-[11px] font-['Cormorant_Garamond',serif] py-3 px-4 text-left rounded-lg hover:backdrop-blur-sm ${
//                     isOverDarkBackground
//                       ? 'text-[#fdfcf9] hover:text-[#f5e6c8] hover:bg-white/10'
//                       : 'text-[#2c1810] hover:text-[#c9a060] hover:bg-[#2c1810]/10'
//                   }`}
//                   onClick={handleOurStoryClickInternal}
//                 >
//                   ABOUT
//                 </button>
//                 <button 
//                   className={`transition-all tracking-[2px] text-[11px] font-['Cormorant_Garamond',serif] py-3 px-4 text-left rounded-lg hover:backdrop-blur-sm ${
//                     isOverDarkBackground
//                       ? 'text-[#fdfcf9] hover:text-[#f5e6c8] hover:bg-white/10'
//                       : 'text-[#2c1810] hover:text-[#c9a060] hover:bg-[#2c1810]/10'
//                   }`}
//                   onClick={handleCraftsmanshipClickInternal}
//                 >
//                   CRAFTSMANSHIP
//                 </button>
//               </motion.div>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }
// import { ShoppingCart, Menu, X } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom'; // ✅ Added React Router imports
// import { AnimatePresence, motion } from 'motion/react';
// import logoImage from "figma:asset/a02147a5b2d7cc9c47ba0dd78dff86bc3675223a.png";

// interface NavigationProps {
//   cartCount?: number;
//   onCartClick?: () => void;
//   mode?: 'auto' | 'light' | 'dark';
//   enhancedContrast?: boolean;
//   onLogoClick?: () => void; // Optional custom handler for logo
// }

// export function Navigation({ 
//   cartCount = 0, 
//   onCartClick, 
//   mode = 'auto', 
//   enhancedContrast = false,
//   onLogoClick
// }: NavigationProps) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isOverDarkBackground, setIsOverDarkBackground] = useState(true);
//   const navigate = useNavigate();
//   const location = useLocation(); // To get current route

//   useEffect(() => {
//     // Only use scroll detection if mode is 'auto'
//     if (mode !== 'auto') {
//       setIsOverDarkBackground(mode === 'dark');
//       return;
//     }

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const viewportHeight = window.innerHeight;
//       const heroHeight = window.innerWidth < 768 ? viewportHeight * 0.75 : viewportHeight;
      
//       setIsOverDarkBackground(scrollPosition < heroHeight * 0.4);
//     };

//     handleScroll();
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [mode]);

//   // Handle logo click
//   const handleLogoClick = (e: React.MouseEvent) => {
//     e.preventDefault();
    
//     if (onLogoClick) {
//       // If parent provides custom handler, use it
//       onLogoClick();
//     } else {
//       // Default: navigate to home
//       navigate('/');
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
    
//     setIsMobileMenuOpen(false);
//   };

//   // Navigation handlers
//   const handleNavigation = (path: string) => {
//     navigate(path);
//     setIsMobileMenuOpen(false);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Determine if link is active
//   const isActive = (path: string) => {
//     return location.pathname === path || 
//            (path === '/collections' && location.pathname.includes('/collections'));
//   };

//   // Style for navigation links
//   const getLinkStyle = (path: string) => {
//     const active = isActive(path);
    
//     if (active) {
//       return {
//         base: 'text-[#c9a060] drop-shadow-[0_0_8px_rgba(201,160,96,0.6)]',
//         underline: 'after:w-full',
//         focus: 'focus:ring-[#c9a060]'
//       };
//     }

//     return {
//       base: isOverDarkBackground ? 'text-[#fdfcf9] hover:text-[#f5e6c8]' : 'text-[#2c1810] hover:text-[#c9a060]',
//       underline: 'after:w-0 hover:after:w-full',
//       focus: isOverDarkBackground ? 'focus:ring-[#f5e6c8]' : 'focus:ring-[#c9a060]'
//     };
//   };

//   const getCartStyle = () => {
//     return isOverDarkBackground
//       ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:ring-[#f5e6c8] hover:drop-shadow-[0_0_8px_rgba(245,230,200,0.6)]'
//       : 'text-[#2c1810] hover:text-[#c9a060] focus:ring-[#c9a060] hover:drop-shadow-[0_0_8px_rgba(201,160,96,0.6)]';
//   };

//   return (
//     <nav className="relative z-50">
//       <div className={`max-w-[1080px] mx-4 mt-1 px-6 sm:px-8 md:px-10 py-4 md:py-5 flex items-center justify-between backdrop-blur-xl rounded-2xl border transition-all duration-300 mx-auto ${
//         enhancedContrast 
//           ? 'bg-white/90 border-[#2c1810]/30 shadow-[0_8px_32px_0_rgba(44,24,16,0.4)]'
//           : isOverDarkBackground 
//             ? 'bg-white/10 border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]' 
//             : 'bg-[#2c1810]/10 border-[#2c1810]/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
//       }`}>
//         {/* Logo */}
//         <button 
//           onClick={handleLogoClick}
//           className="focus:outline-none focus:ring-2 focus:ring-[#c9a060] focus:ring-offset-2 focus:ring-offset-transparent rounded-md transition-all hover:opacity-80"
//           aria-label="Sohwais Threads Home"
//         >
//           <img 
//             src={logoImage} 
//             alt="Sohwais Threads Logo" 
//             className="h-8 sm:h-10 md:h-12 w-auto rounded-md"
//           />
//         </button>
       
//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-6 lg:gap-8">
//           <nav aria-label="Main navigation">
//             <div className="flex gap-8 lg:gap-12 items-center" role="list">
//               {/* Collection Link */}
//               <Link 
//                 to="/collections"
//                 className={`relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 transition-all tracking-[2px] text-[10px] font-['Cormorant_Garamond',serif] drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 after:from-[#c9a060] after:to-[#d4af69] ${getLinkStyle('/collections').underline} ${
//                   getLinkStyle('/collections').base
//                 } ${getLinkStyle('/collections').focus}`}
//                 role="listitem"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 COLLECTION
//               </Link>
              
//               {/* About/Our Story Link */}
//               <Link 
//                 to="/our-story"
//                 className={`relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 transition-all tracking-[2px] text-[10px] font-['Cormorant_Garamond',serif] drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 after:from-[#c9a060] after:to-[#d4af69] ${getLinkStyle('/our-story').underline} ${
//                   getLinkStyle('/our-story').base
//                 } ${getLinkStyle('/our-story').focus}`}
//                 role="listitem"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 ABOUT
//               </Link>
              
//               {/* Craftsmanship Link */}
//               <Link 
//                 to="/craftsmanship"
//                 className={`relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 transition-all tracking-[2px] text-[10px] font-['Cormorant_Garamond',serif] drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 after:from-[#c9a060] after:to-[#d4af69] ${getLinkStyle('/craftsmanship').underline} ${
//                   getLinkStyle('/craftsmanship').base
//                 } ${getLinkStyle('/craftsmanship').focus}`}
//                 role="listitem"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 CRAFTSMANSHIP
//               </Link>
//             </div>
//           </nav>
          
//           {/* Cart Icon */}
//           {onCartClick && (
//             <button
//               onClick={onCartClick}
//               className={`relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-2 drop-shadow-md ${getCartStyle()}`}
//               aria-label={`Shopping cart with ${cartCount} items`}
//             >
//               <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-[#c9a060] text-white text-[10px] font-['Cormorant_Garamond',serif] rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
//                   {cartCount > 9 ? '9+' : cartCount}
//                 </span>
//               )}
//             </button>
//           )}
//         </div>

//         {/* Mobile Menu Button and Cart */}
//         <div className="flex md:hidden items-center gap-2 sm:gap-4">
//           {onCartClick && (
//             <button
//               onClick={onCartClick}
//               className={`relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-2 drop-shadow-md ${getCartStyle()}`}
//               aria-label={`Shopping cart with ${cartCount} items`}
//             >
//               <ShoppingCart className="w-5 h-5" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-[#c9a060] text-white text-[9px] font-['Cormorant_Garamond',serif] rounded-full w-4 h-4 flex items-center justify-center shadow-lg">
//                   {cartCount > 9 ? '9+' : cartCount}
//                 </span>
//               )}
//             </button>
//           )}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className={`transition-colors focus:outline-none focus:ring-2 rounded p-2 drop-shadow-md ${
//               isOverDarkBackground
//                 ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:ring-[#f5e6c8]'
//                 : 'text-[#2c1810] hover:text-[#c9a060] focus:ring-[#c9a060]'
//             }`}
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//             className={`md:hidden max-w-[1080px] mx-4 mt-2 overflow-hidden backdrop-blur-xl rounded-2xl border mx-auto ${
//               enhancedContrast
//                 ? 'bg-white/90 border-[#2c1810]/30 shadow-[0_8px_32px_0_rgba(44,24,16,0.4)]'
//                 : isOverDarkBackground
//                   ? 'bg-white/10 border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
//                   : 'bg-[#2c1810]/10 border-[#2c1810]/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
//             }`}
//           >
//             <nav aria-label="Mobile navigation" className="px-6 sm:px-8 py-6">
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ delay: 0.1, duration: 0.2 }}
//                 className="flex flex-col gap-1"
//               >
//                 <Link 
//                   to="/collections"
//                   className={`transition-all tracking-[2px] text-[11px] font-['Cormorant_Garamond',serif] py-3 px-4 text-left rounded-lg hover:backdrop-blur-sm ${
//                     isOverDarkBackground
//                       ? `text-${isActive('/collections') ? '[#c9a060]' : '[#fdfcf9]'} hover:text-[#f5e6c8] hover:bg-white/10`
//                       : `text-${isActive('/collections') ? '[#c9a060]' : '[#2c1810]'} hover:text-[#c9a060] hover:bg-[#2c1810]/10`
//                   }`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   COLLECTION
//                 </Link>
//                 <Link 
//                   to="/our-story"
//                   className={`transition-all tracking-[2px] text-[11px] font-['Cormorant_Garamond',serif] py-3 px-4 text-left rounded-lg hover:backdrop-blur-sm ${
//                     isOverDarkBackground
//                       ? `text-${isActive('/our-story') ? '[#c9a060]' : '[#fdfcf9]'} hover:text-[#f5e6c8] hover:bg-white/10`
//                       : `text-${isActive('/our-story') ? '[#c9a060]' : '[#2c1810]'} hover:text-[#c9a060] hover:bg-[#2c1810]/10`
//                   }`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   ABOUT
//                 </Link>
//                 <Link 
//                   to="/craftsmanship"
//                   className={`transition-all tracking-[2px] text-[11px] font-['Cormorant_Garamond',serif] py-3 px-4 text-left rounded-lg hover:backdrop-blur-sm ${
//                     isOverDarkBackground
//                       ? `text-${isActive('/craftsmanship') ? '[#c9a060]' : '[#fdfcf9]'} hover:text-[#f5e6c8] hover:bg-white/10`
//                       : `text-${isActive('/craftsmanship') ? '[#c9a060]' : '[#2c1810]'} hover:text-[#c9a060] hover:bg-[#2c1810]/10`
//                   }`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   CRAFTSMANSHIP
//                 </Link>
//               </motion.div>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }
// import { ShoppingCart, Menu, X } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { AnimatePresence, motion } from 'motion/react';
// import logoImage from "figma:asset/a02147a5b2d7cc9c47ba0dd78dff86bc3675223a.png";

// interface NavigationProps {
//   cartCount?: number;
//   onCartClick?: () => void;
//   mode?: 'auto' | 'light' | 'dark';
//   enhancedContrast?: boolean;
//   onLogoClick?: () => void;
// }

// export function Navigation({ 
//   cartCount = 0, 
//   onCartClick, 
//   mode = 'auto', 
//   enhancedContrast = false,
//   onLogoClick
// }: NavigationProps) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isOverDarkBackground, setIsOverDarkBackground] = useState(true);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (mode !== 'auto') {
//       setIsOverDarkBackground(mode === 'dark');
//       return;
//     }

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const viewportHeight = window.innerHeight;
//       const heroHeight = window.innerWidth < 768 ? viewportHeight * 0.75 : viewportHeight;
      
//       setIsOverDarkBackground(scrollPosition < heroHeight * 0.4);
//     };

//     handleScroll();
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [mode]);

//   const handleLogoClick = (e: React.MouseEvent) => {
//     e.preventDefault();
    
//     if (onLogoClick) {
//       onLogoClick();
//     } else {
//       navigate('/');
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
    
//     setIsMobileMenuOpen(false);
//   };

//   const handleNavigation = (path: string) => {
//     navigate(path);
//     setIsMobileMenuOpen(false);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const isActive = (path: string) => {
//     return location.pathname === path || 
//            (path === '/collections' && location.pathname.includes('/collections'));
//   };

//   const getLinkStyle = (path: string) => {
//     const active = isActive(path);
    
//     if (active) {
//       return {
//         base: 'text-[#c9a060] drop-shadow-[0_0_8px_rgba(201,160,96,0.6)]',
//         underline: 'after:w-full',
//         focus: 'focus:ring-[#c9a060]'
//       };
//     }

//     return {
//       base: isOverDarkBackground ? 'text-white hover:text-[#f5e6c8]' : 'text-[#3d2817] hover:text-[#c9a060]',
//       underline: 'after:w-0 hover:after:w-full',
//       focus: isOverDarkBackground ? 'focus:ring-[#f5e6c8]' : 'focus:ring-[#c9a060]'
//     };
//   };

//   const getCartStyle = () => {
//     return isOverDarkBackground
//       ? 'text-white hover:text-[#f5e6c8] focus:ring-[#f5e6c8] hover:drop-shadow-[0_0_8px_rgba(245,230,200,0.6)]'
//       : 'text-[#3d2817] hover:text-[#c9a060] focus:ring-[#c9a060] hover:drop-shadow-[0_0_8px_rgba(201,160,96,0.6)]';
//   };

//   return (
//     <nav className="relative z-50">
//       <div className={`max-w-[1080px] mx-4 mt-1 px-6 sm:px-8 md:px-10 py-4 md:py-5 flex items-center justify-between backdrop-blur-xl rounded-2xl border transition-all duration-300 mx-auto ${
//         enhancedContrast 
//           ? 'bg-white/90 border-[#2c1810]/30 shadow-[0_8px_32px_0_rgba(44,24,16,0.4)]'
//           : isOverDarkBackground 
//             ? 'bg-white/10 border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]' 
//             : 'bg-[#2c1810]/10 border-[#2c1810]/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
//       }`}>
//         {/* Logo */}
//         <button 
//           onClick={handleLogoClick}
//           className="focus:outline-none focus:ring-2 focus:ring-[#c9a060] focus:ring-offset-2 focus:ring-offset-transparent rounded-md transition-all hover:opacity-80"
//           aria-label="Sohwais Threads Home"
//         >
//           <img 
//             src={logoImage} 
//             alt="Sohwais Threads Logo" 
//             className="h-8 sm:h-10 md:h-12 w-auto rounded-md"
//           />
//         </button>
       
//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-6 lg:gap-8">
//           <nav aria-label="Main navigation">
//             <div className="flex gap-8 lg:gap-12 items-center" role="list">
//               <Link 
//                 to="/collections"
//                 className={`relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 transition-all tracking-[2px] text-[10px] font-['Cormorant_Garamond',serif] drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 after:from-[#c9a060] after:to-[#d4af69] ${getLinkStyle('/collections').underline} ${
//                   getLinkStyle('/collections').base
//                 } ${getLinkStyle('/collections').focus}`}
//                 role="listitem"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 COLLECTION
//               </Link>
              
//               <Link 
//                 to="/our-story"
//                 className={`relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 transition-all tracking-[2px] text-[10px] font-['Cormorant_Garamond',serif] drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 after:from-[#c9a060] after:to-[#d4af69] ${getLinkStyle('/our-story').underline} ${
//                   getLinkStyle('/our-story').base
//                 } ${getLinkStyle('/our-story').focus}`}
//                 role="listitem"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 ABOUT
//               </Link>
              
//               <Link 
//                 to="/craftsmanship"
//                 className={`relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 transition-all tracking-[2px] text-[10px] font-['Cormorant_Garamond',serif] drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 after:from-[#c9a060] after:to-[#d4af69] ${getLinkStyle('/craftsmanship').underline} ${
//                   getLinkStyle('/craftsmanship').base
//                 } ${getLinkStyle('/craftsmanship').focus}`}
//                 role="listitem"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 CRAFTSMANSHIP
//               </Link>
//             </div>
//           </nav>
          
//           {/* Cart Icon */}
//           {onCartClick && (
//             <button
//               onClick={onCartClick}
//               className={`relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-2 drop-shadow-md ${getCartStyle()}`}
//               aria-label={`Shopping cart with ${cartCount} items`}
//             >
//               <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-[#c9a060] text-white text-[10px] font-['Cormorant_Garamond',serif] rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
//                   {cartCount > 9 ? '9+' : cartCount}
//                 </span>
//               )}
//             </button>
//           )}
//         </div>

//         {/* Mobile Menu Button and Cart */}
//         <div className="flex md:hidden items-center gap-2 sm:gap-4">
//           {onCartClick && (
//             <button
//               onClick={onCartClick}
//               className={`relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-2 drop-shadow-md ${getCartStyle()}`}
//               aria-label={`Shopping cart with ${cartCount} items`}
//             >
//               <ShoppingCart className="w-5 h-5" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-[#c9a060] text-white text-[9px] font-['Cormorant_Garamond',serif] rounded-full w-4 h-4 flex items-center justify-center shadow-lg">
//                   {cartCount > 9 ? '9+' : cartCount}
//                 </span>
//               )}
//             </button>
//           )}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className={`transition-colors focus:outline-none focus:ring-2 rounded p-2 drop-shadow-md ${
//               isOverDarkBackground
//                 ? 'text-white hover:text-[#f5e6c8] focus:ring-[#f5e6c8]'
//                 : 'text-[#3d2817] hover:text-[#c9a060] focus:ring-[#c9a060]'
//             }`}
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//             className={`md:hidden max-w-[1080px] mx-4 mt-2 overflow-hidden backdrop-blur-xl rounded-2xl border mx-auto ${
//               enhancedContrast
//                 ? 'bg-white/90 border-[#2c1810]/30 shadow-[0_8px_32px_0_rgba(44,24,16,0.4)]'
//                 : isOverDarkBackground
//                   ? 'bg-white/10 border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
//                   : 'bg-[#2c1810]/10 border-[#2c1810]/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
//             }`}
//           >
//             <nav aria-label="Mobile navigation" className="px-6 sm:px-8 py-6">
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ delay: 0.1, duration: 0.2 }}
//                 className="flex flex-col gap-1"
//               >
//                 <Link 
//                   to="/collections"
//                   className={`transition-all tracking-[2px] text-[11px] font-['Cormorant_Garamond',serif] py-3 px-4 text-left rounded-lg hover:backdrop-blur-sm ${
//                     isOverDarkBackground
//                       ? `text-${isActive('/collections') ? '[#c9a060]' : 'white'} hover:text-[#f5e6c8] hover:bg-white/10`
//                       : `text-${isActive('/collections') ? '[#c9a060]' : '[#3d2817]'} hover:text-[#c9a060] hover:bg-[#2c1810]/10`
//                   }`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   COLLECTION
//                 </Link>
//                 <Link 
//                   to="/our-story"
//                   className={`transition-all tracking-[2px] text-[11px] font-['Cormorant_Garamond',serif] py-3 px-4 text-left rounded-lg hover:backdrop-blur-sm ${
//                     isOverDarkBackground
//                       ? `text-${isActive('/our-story') ? '[#c9a060]' : 'white'} hover:text-[#f5e6c8] hover:bg-white/10`
//                       : `text-${isActive('/our-story') ? '[#c9a060]' : '[#3d2817]'} hover:text-[#c9a060] hover:bg-[#2c1810]/10`
//                   }`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   ABOUT
//                 </Link>
//                 <Link 
//                   to="/craftsmanship"
//                   className={`transition-all tracking-[2px] text-[11px] font-['Cormorant_Garamond',serif] py-3 px-4 text-left rounded-lg hover:backdrop-blur-sm ${
//                     isOverDarkBackground
//                       ? `text-${isActive('/craftsmanship') ? '[#c9a060]' : 'white'} hover:text-[#f5e6c8] hover:bg-white/10`
//                       : `text-${isActive('/craftsmanship') ? '[#c9a060]' : '[#3d2817]'} hover:text-[#c9a060] hover:bg-[#2c1810]/10`
//                   }`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   CRAFTSMANSHIP
//                 </Link>
//               </motion.div>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import logoImage from "figma:asset/a02147a5b2d7cc9c47ba0dd78dff86bc3675223a.png";

interface NavigationProps {
  cartCount?: number;
  onCartClick?: () => void;
  mode?: 'auto' | 'light' | 'dark';
  enhancedContrast?: boolean;
  onLogoClick?: () => void;
}

export function Navigation({ 
  cartCount = 0, 
  onCartClick, 
  mode = 'auto', 
  enhancedContrast = false,
  onLogoClick
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverDarkBackground, setIsOverDarkBackground] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (mode !== 'auto') {
      setIsOverDarkBackground(mode === 'dark');
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const heroHeight = window.innerWidth < 768 ? viewportHeight * 0.75 : viewportHeight;
      
      setIsOverDarkBackground(scrollPosition < heroHeight * 0.4);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mode]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (onLogoClick) {
      onLogoClick();
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => {
    return location.pathname === path || 
           (path === '/collections' && location.pathname.includes('/collections'));
  };

  // SIMPLIFIED: Dark bg = white text, Light bg = primary color
  const getLinkStyle = (path: string) => {
    const active = isActive(path);
    
    if (active) {
      return {
        base: 'text-[#c9a060] drop-shadow-[0_0_8px_rgba(201,160,96,0.6)]',
        underline: 'after:w-full',
        focus: 'focus:ring-[#c9a060]'
      };
    }

    return {
      base: isOverDarkBackground ? 'text-white hover:text-[#f5e6c8]' : 'text-[#c9a060] hover:text-[#3d2817]',
      underline: 'after:w-0 hover:after:w-full',
      focus: isOverDarkBackground ? 'focus:ring-white' : 'focus:ring-[#c9a060]'
    };
  };

  const getCartStyle = () => {
    return isOverDarkBackground
      ? 'text-white hover:text-[#f5e6c8] focus:ring-white hover:drop-shadow-[0_0_8px_rgba(245,230,200,0.6)]'
      : 'text-[#c9a060] hover:text-[#3d2817] focus:ring-[#c9a060] hover:drop-shadow-[0_0_8px_rgba(201,160,96,0.6)]';
  };

  const getMobileLinkStyle = (path: string) => {
    const active = isActive(path);
    
    if (active) {
      return 'text-[#c9a060]';
    }
    
    return isOverDarkBackground 
      ? 'text-white hover:text-[#f5e6c8]' 
      : 'text-[#c9a060] hover:text-[#3d2817]';
  };

  return (
    <nav className="relative z-50">
      <div className={`max-w-[1080px] mx-4 mt-1 px-6 sm:px-8 md:px-10 py-4 md:py-5 flex items-center justify-between backdrop-blur-xl rounded-2xl border transition-all duration-300 mx-auto ${
        enhancedContrast 
          ? 'bg-white/90 border-[#2c1810]/30 shadow-[0_8px_32px_0_rgba(44,24,16,0.4)]'
          : isOverDarkBackground 
            ? 'bg-white/10 border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]' 
            : 'bg-[#2c1810]/10 border-[#2c1810]/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
      }`}>
        {/* Logo */}
        <button 
          onClick={handleLogoClick}
          className="focus:outline-none focus:ring-2 focus:ring-[#c9a060] focus:ring-offset-2 focus:ring-offset-transparent rounded-md transition-all hover:opacity-80"
          aria-label="Sohwais Threads Home"
        >
          <img 
            src={logoImage} 
            alt="Sohwais Threads Logo" 
            className="h-8 sm:h-10 md:h-12 w-auto rounded-md"
          />
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <nav aria-label="Main navigation">
            <div className="flex gap-8 lg:gap-12 items-center" role="list">
              <Link 
                to="/collections"
                className={`relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 transition-all tracking-[2px] text-[10px] font-['Cormorant_Garamond',serif] drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 after:from-[#c9a060] after:to-[#d4af69] ${getLinkStyle('/collections').underline} ${getLinkStyle('/collections').base} ${getLinkStyle('/collections').focus}`}
                role="listitem"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                COLLECTION
              </Link>
              
              <Link 
                to="/our-story"
                className={`relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 transition-all tracking-[2px] text-[10px] font-['Cormorant_Garamond',serif] drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 after:from-[#c9a060] after:to-[#d4af69] ${getLinkStyle('/our-story').underline} ${getLinkStyle('/our-story').base} ${getLinkStyle('/our-story').focus}`}
                role="listitem"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              
              <Link 
                to="/craftsmanship"
                className={`relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 transition-all tracking-[2px] text-[10px] font-['Cormorant_Garamond',serif] drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 after:from-[#c9a060] after:to-[#d4af69] ${getLinkStyle('/craftsmanship').underline} ${getLinkStyle('/craftsmanship').base} ${getLinkStyle('/craftsmanship').focus}`}
                role="listitem"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CRAFTSMANSHIP
              </Link>
            </div>
          </nav>
          
          {/* Cart Icon */}
          {onCartClick && (
            <button
              onClick={onCartClick}
              className={`relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-2 drop-shadow-md ${getCartStyle()}`}
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c9a060] text-white text-[10px] font-['Cormorant_Garamond',serif] rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu Button and Cart */}
        <div className="flex md:hidden items-center gap-2 sm:gap-4">
          {onCartClick && (
            <button
              onClick={onCartClick}
              className={`relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-2 drop-shadow-md ${getCartStyle()}`}
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c9a060] text-white text-[9px] font-['Cormorant_Garamond',serif] rounded-full w-4 h-4 flex items-center justify-center shadow-lg">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`transition-colors focus:outline-none focus:ring-2 rounded p-2 drop-shadow-md ${
              isOverDarkBackground
                ? 'text-white hover:text-[#f5e6c8] focus:ring-white'
                : 'text-[#c9a060] hover:text-[#3d2817] focus:ring-[#c9a060]'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`md:hidden max-w-[1080px] mx-4 mt-2 overflow-hidden backdrop-blur-xl rounded-2xl border mx-auto ${
              enhancedContrast
                ? 'bg-white/90 border-[#2c1810]/30 shadow-[0_8px_32px_0_rgba(44,24,16,0.4)]'
                : isOverDarkBackground
                  ? 'bg-white/10 border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
                  : 'bg-[#2c1810]/10 border-[#2c1810]/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
            }`}
          >
            <nav aria-label="Mobile navigation" className="px-6 sm:px-8 py-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="flex flex-col gap-1"
              >
                <Link 
                  to="/collections"
                  className={`transition-all tracking-[2px] text-[11px] font-['Cormorant_Garamond',serif] py-3 px-4 text-left rounded-lg hover:backdrop-blur-sm hover:bg-opacity-20 ${
                    isOverDarkBackground
                      ? `hover:bg-white/10 ${getMobileLinkStyle('/collections')}`
                      : `hover:bg-[#2c1810]/10 ${getMobileLinkStyle('/collections')}`
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  COLLECTION
                </Link>
                <Link 
                  to="/our-story"
                  className={`transition-all tracking-[2px] text-[11px] font-['Cormorant_Garamond',serif] py-3 px-4 text-left rounded-lg hover:backdrop-blur-sm hover:bg-opacity-20 ${
                    isOverDarkBackground
                      ? `hover:bg-white/10 ${getMobileLinkStyle('/our-story')}`
                      : `hover:bg-[#2c1810]/10 ${getMobileLinkStyle('/our-story')}`
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <Link 
                  to="/craftsmanship"
                  className={`transition-all tracking-[2px] text-[11px] font-['Cormorant_Garamond',serif] py-3 px-4 text-left rounded-lg hover:backdrop-blur-sm hover:bg-opacity-20 ${
                    isOverDarkBackground
                      ? `hover:bg-white/10 ${getMobileLinkStyle('/craftsmanship')}`
                      : `hover:bg-[#2c1810]/10 ${getMobileLinkStyle('/craftsmanship')}`
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CRAFTSMANSHIP
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
