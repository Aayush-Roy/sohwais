// // import logoImage from "figma:asset/549aa7d74ad4ed64d765edbd094a15962822ce65.png";

// // interface FooterProps {
// //   onOurStoryClick?: (event?: React.MouseEvent) => void;
// //   onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
// //   onCollectionClick?: (event?: React.MouseEvent) => void;
// //   onHomeClick?: (event?: React.MouseEvent) => void;
// // }

// // export function Footer({ onOurStoryClick, onCraftsmanshipClick, onCollectionClick, onHomeClick }: FooterProps) {
// //   return (
// //     <footer className="relative pt-0 pb-8 overflow-hidden">
// //       <div className="relative max-w-[1080px] mx-auto px-16 pt-20">
// //         {/* Main Footer Content */}
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
// //           {/* Logo & Tagline */}
// //           <div className="md:col-span-1">
// //             <button
// //               onClick={(e) => {
// //                 e.preventDefault();
// //                 onHomeClick?.(e);
// //               }}
// //               className="focus:outline-none focus:ring-2 focus:ring-[#c9a060] rounded-lg transition-all hover:opacity-80"
// //               aria-label="Return to home"
// //             >
// //               <img 
// //                 src={logoImage} 
// //                 alt="Sohwais Threads Logo" 
// //                 className="w-40 h-auto mb-4 rounded-lg"
// //               />
// //             </button>
// //             <p className="text-[#fdfcf9]/60 text-[12px] leading-[20px] font-['Cormorant_Garamond',serif] mb-4">
// //               Crafting timeless elegance through traditional artistry
// //             </p>
// //             <div className="border-t border-[#c9a060]/20 pt-4">
// //               <p className="text-[#c9a060]/80 text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif] italic">
// //                 Founder
// //               </p>
// //               <p className="text-[#fdfcf9]/70 text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] mt-1">
// //                 Md. Danial Ansari
// //               </p>
// //             </div>
// //           </div>

// //           {/* Shop Links */}
// //           <div>
// //             <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
// //               SHOP
// //             </h4>
// //             <ul className="space-y-3">
// //               <li>
// //                 <button 
// //                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
// //                   onClick={(e) => {
// //                     e.preventDefault();
// //                     onCollectionClick?.(e);
// //                   }}
// //                 >
// //                   Men's Collection
// //                 </button>
// //               </li>
// //               <li>
// //                 <button 
// //                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
// //                   onClick={(e) => {
// //                     e.preventDefault();
// //                     onCollectionClick?.(e);
// //                   }}
// //                 >
// //                   Women's Collection
// //                 </button>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* About Links */}
// //           <div>
// //             <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
// //               ABOUT
// //             </h4>
// //             <ul className="space-y-3">
// //               <li>
// //                 <button 
// //                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]" 
// //                   onClick={(e) => {
// //                     e.preventDefault();
// //                     onOurStoryClick?.(e);
// //                   }}
// //                 >
// //                   Our Story
// //                 </button>
// //               </li>
// //               <li>
// //                 <button 
// //                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]" 
// //                   onClick={(e) => {
// //                     e.preventDefault();
// //                     onCraftsmanshipClick?.(e);
// //                   }}
// //                 >
// //                   Craftsmanship
// //                 </button>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Connect Links */}
// //           <div>
// //             <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
// //               CONNECT
// //             </h4>
// //             <ul className="space-y-3 mb-6">
// //               <li>
// //                 <a href="mailto:support@sohwais.com" className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]">
// //                   support@sohwais.com
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="#" className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]">
// //                   Book Consultation
// //                 </a>
// //               </li>
// //             </ul>
            
// //             {/* Social Media Icons */}
// //             <div className="flex gap-4">
// //               <a href="#" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="Instagram">
// //                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// //                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
// //                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
// //                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
// //                 </svg>
// //               </a>
// //               <a href="#" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="Facebook">
// //                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// //                   <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
// //                 </svg>
// //               </a>
// //               <a href="#" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="X">
// //                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// //                   <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
// //                   <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
// //                 </svg>
// //               </a>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Divider */}
// //         <div className="h-px bg-gradient-to-r from-transparent via-[rgba(201,160,96,0.3)] to-transparent mb-8" />
        
// //         {/* Bottom Footer */}
// //         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
// //           <p className="text-[#c9a060]/70 text-[9px] tracking-[1.97px] font-['Cormorant_Garamond',serif]">
// //             © 2025 SOHWAIS THREADS — HANDCRAFTED IN INDIA
// //           </p>
          
// //           <div className="flex flex-wrap items-center gap-6 text-[#fdfcf9]/70 text-[9px] tracking-[1.52px] font-['Cormorant_Garamond',serif]">
// //             <a href="#" className="hover:text-[#fdfcf9] transition-colors">
// //               PRIVACY POLICY
// //             </a>
// //             <span className="text-[#c9a060]/30">|</span>
// //             <a href="#" className="hover:text-[#fdfcf9] transition-colors">
// //               TERMS & CONDITIONS
// //             </a>
// //             <span className="text-[#c9a060]/30">|</span>
// //             <a href="#" className="hover:text-[#fdfcf9] transition-colors">
// //               SHIPPING & RETURNS
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }
// import logoImage from "figma:asset/549aa7d74ad4ed64d765edbd094a15962822ce65.png";

// interface FooterProps {
//   onOurStoryClick?: (event?: React.MouseEvent) => void;
//   onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
//   onCollectionClick?: (event?: React.MouseEvent) => void;
//   onHomeClick?: (event?: React.MouseEvent) => void;
// }

// export function Footer({ onOurStoryClick, onCraftsmanshipClick, onCollectionClick, onHomeClick }: FooterProps) {
//   const handleBookConsultation = () => {
//     const phoneNumber = "9472357386";
//     const message = "Hello, I'd like to book a consultation for Sohwais Threads.";
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <footer className="relative pt-0 pb-8 overflow-hidden">
//       <div className="relative max-w-[1080px] mx-auto px-16 pt-20">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
//           {/* Logo & Tagline */}
//           <div className="md:col-span-1">
//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 onHomeClick?.(e);
//               }}
//               className="focus:outline-none focus:ring-2 focus:ring-[#c9a060] rounded-lg transition-all hover:opacity-80"
//               aria-label="Return to home"
//             >
//               <img 
//                 src={logoImage} 
//                 alt="Sohwais Threads Logo" 
//                 className="w-40 h-auto mb-4 rounded-lg"
//               />
//             </button>
//             <p className="text-[#fdfcf9]/60 text-[12px] leading-[20px] font-['Cormorant_Garamond',serif] mb-4">
//               Crafting timeless elegance through traditional artistry
//             </p>
//             <div className="border-t border-[#c9a060]/20 pt-4">
//               <p className="text-[#c9a060]/80 text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif] italic">
//                 Founder
//               </p>
//               <p className="text-[#fdfcf9]/70 text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] mt-1">
//                 Md. Danial Ansari
//               </p>
//             </div>
//           </div>

//           {/* Shop Links */}
//           <div>
//             <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
//               SHOP
//             </h4>
//             <ul className="space-y-3">
//               <li>
//                 <button 
//                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     onCollectionClick?.(e);
//                   }}
//                 >
//                   Men's Collection
//                 </button>
//               </li>
//               <li>
//                 <button 
//                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     onCollectionClick?.(e);
//                   }}
//                 >
//                   Women's Collection
//                 </button>
//               </li>
//             </ul>
//           </div>

//           {/* About Links */}
//           <div>
//             <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
//               ABOUT
//             </h4>
//             <ul className="space-y-3">
//               <li>
//                 <button 
//                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]" 
//                   onClick={(e) => {
//                     e.preventDefault();
//                     onOurStoryClick?.(e);
//                   }}
//                 >
//                   Our Story
//                 </button>
//               </li>
//               <li>
//                 <button 
//                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]" 
//                   onClick={(e) => {
//                     e.preventDefault();
//                     onCraftsmanshipClick?.(e);
//                   }}
//                 >
//                   Craftsmanship
//                 </button>
//               </li>
//             </ul>
//           </div>

//           {/* Connect Links */}
//           <div>
//             <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
//               CONNECT
//             </h4>
//             <ul className="space-y-3 mb-6">
//               <li>
//                 <a href="mailto:support@sohwais.com" className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]">
//                   support@sohwais.com
//                 </a>
//               </li>
//               <li>
//                 <button 
//                   onClick={handleBookConsultation}
//                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] text-left"
//                 >
//                   Book Consultation
//                 </button>
//               </li>
//             </ul>
            
//             {/* Social Media Icons */}
//             <div className="flex gap-4">
//               <a href="#" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="Instagram">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
//                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
//                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
//                 </svg>
//               </a>
//               <a href="#" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="Facebook">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
//                 </svg>
//               </a>
//               <a href="#" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="X">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
//                   <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Payment Methods */}
//           <div>
//             <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
//               WE ACCEPT
//             </h4>
//             <div className="grid grid-cols-3 gap-3">
//               {/* Visa */}
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
//                   <path d="M16.875 8.75H13.125V16.25H16.875V8.75Z" fill="#1A1F71"/>
//                   <path d="M13.125 8.75C11.625 8.75 10.3125 9.6875 9.6875 11.0625C9.0625 9.6875 7.75 8.75 6.25 8.75C4.1875 8.75 2.5 10.4375 2.5 12.5C2.5 14.5625 4.1875 16.25 6.25 16.25C7.75 16.25 9.0625 15.3125 9.6875 13.9375C10.3125 15.3125 11.625 16.25 13.125 16.25C15.1875 16.25 16.875 14.5625 16.875 12.5C16.875 10.4375 15.1875 8.75 13.125 8.75Z" fill="#1A1F71"/>
//                   <path d="M26.875 8.75C25.375 8.75 24.0625 9.6875 23.4375 11.0625C22.8125 9.6875 21.5 8.75 20 8.75C18.5 8.75 17.1875 9.6875 16.5625 11.0625C15.9375 9.6875 14.625 8.75 13.125 8.75C11.0625 8.75 9.375 10.4375 9.375 12.5C9.375 14.5625 11.0625 16.25 13.125 16.25C14.625 16.25 15.9375 15.3125 16.5625 13.9375C17.1875 15.3125 18.5 16.25 20 16.25C21.5 16.25 22.8125 15.3125 23.4375 13.9375C24.0625 15.3125 25.375 16.25 26.875 16.25C28.9375 16.25 30.625 14.5625 30.625 12.5C30.625 10.4375 28.9375 8.75 26.875 8.75Z" fill="#1A1F71"/>
//                   <path d="M37.5 8.75H34.375V16.25H37.5V8.75Z" fill="#1A1F71"/>
//                 </svg>
//               </div>
              
//               {/* Mastercard */}
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
//                   <circle cx="12.5" cy="12.5" r="7.5" fill="#EB001B"/>
//                   <circle cx="27.5" cy="12.5" r="7.5" fill="#F79E1B"/>
//                   <path d="M20 5C17.2375 5 14.775 6.4875 13.4375 8.75C12.1 11.0125 12.1 13.9875 13.4375 16.25C14.775 18.5125 17.2375 20 20 20C22.7625 20 25.225 18.5125 26.5625 16.25C27.9 13.9875 27.9 11.0125 26.5625 8.75C25.225 6.4875 22.7625 5 20 5Z" fill="#FF5F00"/>
//                 </svg>
//               </div>
              
//               {/* UPI */}
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
//                   <rect x="5" y="5" width="30" height="15" rx="3" fill="#6FCF97"/>
//                   <text x="20" y="15" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">UPI</text>
//                 </svg>
//               </div>
              
//               {/* American Express */}
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
//                   <rect width="40" height="25" rx="3" fill="#2E77BB"/>
//                   <text x="20" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">AMEX</text>
//                 </svg>
//               </div>
              
//               {/* JCB */}
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
//                   <rect width="40" height="25" rx="3" fill="#0C5BA5"/>
//                   <text x="20" y="15" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">JCB</text>
//                 </svg>
//               </div>
              
//               {/* RuPay */}
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
//                   <rect width="40" height="25" rx="3" fill="#1E3A8A"/>
//                   <text x="20" y="15" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">RuPay</text>
//                 </svg>
//               </div>
//             </div>
//             <p className="text-[#fdfcf9]/60 text-[10px] mt-3 text-center font-['Cormorant_Garamond',serif]">
//               Secure payments
//             </p>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="h-px bg-gradient-to-r from-transparent via-[rgba(201,160,96,0.3)] to-transparent mb-8" />
        
//         {/* Bottom Footer */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           <p className="text-[#c9a060]/70 text-[9px] tracking-[1.97px] font-['Cormorant_Garamond',serif]">
//             © 2025 SOHWAIS THREADS — HANDCRAFTED IN INDIA
//           </p>
          
//           <div className="flex flex-wrap items-center gap-6 text-[#fdfcf9]/70 text-[9px] tracking-[1.52px] font-['Cormorant_Garamond',serif]">
//             <a href="#" className="hover:text-[#fdfcf9] transition-colors">
//               PRIVACY POLICY
//             </a>
//             <span className="text-[#c9a060]/30">|</span>
//             <a href="#" className="hover:text-[#fdfcf9] transition-colors">
//               TERMS & CONDITIONS
//             </a>
//             <span className="text-[#c9a060]/30">|</span>
//             <a href="#" className="hover:text-[#fdfcf9] transition-colors">
//               SHIPPING & RETURNS
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
// import logoImage from "figma:asset/549aa7d74ad4ed64d765edbd094a15962822ce65.png";

// // Import payment logo images (you'll need to add these actual images to your project)
// import visaLogo from "../assets/visa-logo.png"; // Replace with actual path
// import mastercardLogo from "../assets/mastercard-logo.png"; // Replace with actual path
// import upiLogo from "../assets/upi-logo.png"; // Replace with actual path
// import amexLogo from "../assets/amex-logo.png"; // Replace with actual path
// import jcbLogo from "../assets/jcb-logo.png"; // Replace with actual path
// import rupayLogo from "../assets/rupay-logo.png";


// interface FooterProps {
//   onOurStoryClick?: (event?: React.MouseEvent) => void;
//   onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
//   onCollectionClick?: (event?: React.MouseEvent) => void;
//   onHomeClick?: (event?: React.MouseEvent) => void;
// }

// export function Footer({ onOurStoryClick, onCraftsmanshipClick, onCollectionClick, onHomeClick }: FooterProps) {
//   const handleBookConsultation = () => {
//     const phoneNumber = "9472357386";
//     const message = "Hello, I'd like to book a consultation for Sohwais Threads.";
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <footer className="relative pt-0 pb-8 overflow-hidden">
//       <div className="relative max-w-[1080px] mx-auto px-16 pt-20">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
//           {/* Logo & Tagline */}
//           <div className="md:col-span-1">
//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 onHomeClick?.(e);
//               }}
//               className="focus:outline-none focus:ring-2 focus:ring-[#c9a060] rounded-lg transition-all hover:opacity-80"
//               aria-label="Return to home"
//             >
//               <img 
//                 src={logoImage} 
//                 alt="Sohwais Threads Logo" 
//                 className="w-40 h-auto mb-4 rounded-lg"
//               />
//             </button>
//             <p className="text-[#fdfcf9]/60 text-[12px] leading-[20px] font-['Cormorant_Garamond',serif] mb-4">
//               Crafting timeless elegance through traditional artistry
//             </p>
//             <div className="border-t border-[#c9a060]/20 pt-4">
//               <p className="text-[#c9a060]/80 text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif] italic">
//                 Founder
//               </p>
//               <p className="text-[#fdfcf9]/70 text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] mt-1">
//                 Md. Danial Ansari
//               </p>
//             </div>
//           </div>

//           {/* Shop Links */}
//           <div>
//             <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
//               SHOP
//             </h4>
//             <ul className="space-y-3">
//               <li>
//                 <button 
//                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     onCollectionClick?.(e);
//                   }}
//                 >
//                   Men's Collection
//                 </button>
//               </li>
//               <li>
//                 <button 
//                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     onCollectionClick?.(e);
//                   }}
//                 >
//                   Women's Collection
//                 </button>
//               </li>
//             </ul>
//           </div>

//           {/* About Links */}
//           <div>
//             <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
//               ABOUT
//             </h4>
//             <ul className="space-y-3">
//               <li>
//                 <button 
//                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]" 
//                   onClick={(e) => {
//                     e.preventDefault();
//                     onOurStoryClick?.(e);
//                   }}
//                 >
//                   Our Story
//                 </button>
//               </li>
//               <li>
//                 <button 
//                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]" 
//                   onClick={(e) => {
//                     e.preventDefault();
//                     onCraftsmanshipClick?.(e);
//                   }}
//                 >
//                   Craftsmanship
//                 </button>
//               </li>
//             </ul>
//           </div>

//           {/* Connect Links */}
//           <div>
//             <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
//               CONNECT
//             </h4>
//             <ul className="space-y-3 mb-6">
//               <li>
//                 <a href="mailto:support@sohwais.com" className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]">
//                   support@sohwais.com
//                 </a>
//               </li>
//               <li>
//                 <button 
//                   onClick={handleBookConsultation}
//                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] text-left"
//                 >
//                   Book Consultation
//                 </button>
//               </li>
//             </ul>
            
//             {/* Social Media Icons */}
//             <div className="flex gap-4">
//               <a href="https://www.instagram.com/sohwais?igsh=cW00cWxsMWlmODZh" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="Instagram">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
//                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
//                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
//                 </svg>
//               </a>
//               <a href="https://www.facebook.com/share/15dgz9QWbjL/" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="Facebook">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
//                 </svg>
//               </a>
//               <a href="#" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="X">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
//                   <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Payment Methods */}
//           <div>
//             <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
//               WE ACCEPT
//             </h4>
//             <div className="grid grid-cols-3 gap-3">
//               {/* Visa */}
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <img 
//                   src={visaLogo} 
//                   alt="Visa" 
//                   className="h-6 w-auto object-contain"
//                 />
//               </div>
              
//               {/* Mastercard */}
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <img 
//                   src={mastercardLogo} 
//                   alt="Mastercard" 
//                   className="h-6 w-auto object-contain"
//                 />
//               </div>
              
//               {/* UPI */}
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <img 
//                   src={upiLogo} 
//                   alt="UPI" 
//                   className="h-6 w-auto object-contain"
//                 />
//               </div>
              
//               {/* American Express */}
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <img 
//                   src={amexLogo} 
//                   alt="American Express" 
//                   className="h-6 w-auto object-contain"
//                 />
//               </div>
              
//               {/* JCB */}
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <img 
//                   src={jcbLogo} 
//                   alt="JCB" 
//                   className="h-6 w-auto object-contain"
//                 />
//               </div>
              
//               {/* RuPay */}
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <img 
//                   src={rupayLogo} 
//                   alt="RuPay" 
//                   className="h-6 w-auto object-contain"
//                 />
//               </div>
//             </div>
//             <p className="text-[#fdfcf9]/60 text-[10px] mt-3 text-center font-['Cormorant_Garamond',serif]">
//               Secure payments
//             </p>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="h-px bg-gradient-to-r from-transparent via-[rgba(201,160,96,0.3)] to-transparent mb-8" />
        
//         {/* Bottom Footer */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           <p className="text-[#c9a060]/70 text-[9px] tracking-[1.97px] font-['Cormorant_Garamond',serif]">
//             © 2025 SOHWAIS THREADS — HANDCRAFTED IN INDIA
//           </p>
          
//           <div className="flex flex-wrap items-center gap-6 text-[#fdfcf9]/70 text-[9px] tracking-[1.52px] font-['Cormorant_Garamond',serif]">
//             <a href="#" className="hover:text-[#fdfcf9] transition-colors">
//               PRIVACY POLICY
//             </a>
//             <span className="text-[#c9a060]/30">|</span>
//             <a href="#" className="hover:text-[#fdfcf9] transition-colors">
//               TERMS & CONDITIONS
//             </a>
//             <span className="text-[#c9a060]/30">|</span>
//             <a href="#" className="hover:text-[#fdfcf9] transition-colors">
//               SHIPPING & RETURNS
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import logoImage from "figma:asset/549aa7d74ad4ed64d765edbd094a15962822ce65.png";

interface FooterProps {
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onHomeClick?: (event?: React.MouseEvent) => void;
  onPrivacyPolicyClick?: (event?: React.MouseEvent) => void; // New prop
  onTermsClick?: (event?: React.MouseEvent) => void; // Optional
  onShippingClick?: (event?: React.MouseEvent) => void; // Optional
}

export function Footer({ 
  onOurStoryClick, 
  onCraftsmanshipClick, 
  onCollectionClick, 
  onHomeClick,
  onPrivacyPolicyClick,
  onTermsClick,
  onShippingClick 
}: FooterProps) {
  const handleBookConsultation = () => {
    const phoneNumber = "9472357386";
    const message = "Hello, I'd like to book a consultation for Sohwais Threads.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="relative pt-0 pb-8 overflow-hidden">
      <div className="relative max-w-[1080px] mx-auto px-16 pt-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <button
              onClick={(e) => {
                e.preventDefault();
                onHomeClick?.(e);
              }}
              className="focus:outline-none focus:ring-2 focus:ring-[#c9a060] rounded-lg transition-all hover:opacity-80"
              aria-label="Return to home"
            >
              <img 
                src={logoImage} 
                alt="Sohwais Threads Logo" 
                className="w-40 h-auto mb-4 rounded-lg"
              />
            </button>
            <p className="text-[#fdfcf9]/60 text-[12px] leading-[20px] font-['Cormorant_Garamond',serif] mb-4">
              Crafting timeless elegance through traditional artistry
            </p>
            <div className="border-t border-[#c9a060]/20 pt-4">
              <p className="text-[#c9a060]/80 text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif] italic">
                Founder
              </p>
              <p className="text-[#fdfcf9]/70 text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] mt-1">
                Md. Danial Ansari
              </p>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
              SHOP
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
                  onClick={(e) => {
                    e.preventDefault();
                    onCollectionClick?.(e);
                  }}
                >
                  Men's Collection
                </button>
              </li>
              <li>
                <button 
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
                  onClick={(e) => {
                    e.preventDefault();
                    onCollectionClick?.(e);
                  }}
                >
                  Women's Collection
                </button>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
              ABOUT
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]" 
                  onClick={(e) => {
                    e.preventDefault();
                    onOurStoryClick?.(e);
                  }}
                >
                  Our Story
                </button>
              </li>
              <li>
                <button 
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]" 
                  onClick={(e) => {
                    e.preventDefault();
                    onCraftsmanshipClick?.(e);
                  }}
                >
                  Craftsmanship
                </button>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
              CONNECT
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="mailto:support@sohwais.com" className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]">
                  support@sohwais.com
                </a>
              </li>
              <li>
                <button 
                  onClick={handleBookConsultation}
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] text-left"
                >
                  Book Consultation
                </button>
              </li>
            </ul>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/sohwais?igsh=cW00cWxsMWlmODZh" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/15dgz9QWbjL/" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Payment Methods - Agar images available nahi hain to text use karo */}
          <div>
            <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
              WE ACCEPT
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {/* Agar images nahi hain to simple text use karo */}
              <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
                <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
                  Visa
                </span>
              </div>
              
              <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
                <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
                  Mastercard
                </span>
              </div>
              
              <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
                <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
                  UPI
                </span>
              </div>
              
              <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
                <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
                  Amex
                </span>
              </div>
              
              <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
                <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
                  JCB
                </span>
              </div>
              
              <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
                <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
                  RuPay
                </span>
              </div>
            </div>
            <p className="text-[#fdfcf9]/60 text-[10px] mt-3 text-center font-['Cormorant_Garamond',serif]">
              Secure payments
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(201,160,96,0.3)] to-transparent mb-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#c9a060]/70 text-[9px] tracking-[1.97px] font-['Cormorant_Garamond',serif]">
            © 2025 SOHWAIS THREADS — HANDCRAFTED IN INDIA
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-[#fdfcf9]/70 text-[9px] tracking-[1.52px] font-['Cormorant_Garamond',serif]">
            <button 
              onClick={(e) => {
                e.preventDefault();
                onPrivacyPolicyClick?.(e);
              }}
              className="hover:text-[#fdfcf9] transition-colors hover:underline"
            >
              PRIVACY POLICY
            </button>
            <span className="text-[#c9a060]/30">|</span>
            <button 
              onClick={(e) => {
                e.preventDefault();
                onTermsClick?.(e);
              }}
              className="hover:text-[#fdfcf9] transition-colors hover:underline"
            >
              TERMS & CONDITIONS
            </button>
            <span className="text-[#c9a060]/30">|</span>
            <button 
              onClick={(e) => {
                e.preventDefault();
                onShippingClick?.(e);
              }}
              className="hover:text-[#fdfcf9] transition-colors hover:underline"
            >
              SHIPPING & RETURNS
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}