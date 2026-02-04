
// import logoImage from "figma:asset/549aa7d74ad4ed64d765edbd094a15962822ce65.png";
// import jcb from "../assets/jcb-logo.png";
// import visa from "../assets/visa-logo.png";
// import upi from "../assets/upi-logo.png";
// import rupay from "../assets/rupay-logo.png";
// import amex from "../assets/amex-logo.png";
// import mastercard from "../assets/mastercard-logo.png";
// interface FooterProps {
//   onOurStoryClick?: (event?: React.MouseEvent) => void;
//   onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
//   onCollectionClick?: (event?: React.MouseEvent) => void;
//   onHomeClick?: (event?: React.MouseEvent) => void;
//   onPrivacyPolicyClick?: (event?: React.MouseEvent) => void; // New prop
//   onTermsClick?: (event?: React.MouseEvent) => void; // Optional
//   onShippingClick?: (event?: React.MouseEvent) => void; // Optional
//   onWomensClick?: (event?: React.MouseEvent) => void;
// }

// export function Footer({ 
//   onOurStoryClick, 
//   onCraftsmanshipClick, 
//   onCollectionClick, 
//   onHomeClick,
//   onPrivacyPolicyClick,
//   onTermsClick,
//   onWomensClick,
//   onShippingClick 
// }: FooterProps) {
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
//                 {/* <button 
//                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     onCollectionClick?.(e);
//                   }}
//                 >
//                   Women's Collection
//                 </button> */}
//                 <button 
//   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
//   onClick={(e) => {
//     e.preventDefault();
//     // यहाँ Women's Collection के लिए अलग handler use करें
//     onWomensClick?.(e);  // Change from onWomensCollectionClick to onWomensClick
//   }}
// >
//   Women's Collection
// </button>
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
//               <a href="https://x.com/Sohwais" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="X">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
//                   <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Payment Methods - Agar images available nahi hain to text use karo */}
//           <div>
//             <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
//               WE ACCEPT
//             </h4>
//             <div className="grid grid-cols-3 gap-3">
//               {/* Agar images nahi hain to simple text use karo */}
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 {/* <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
//                   Visa
//                 </span> */}
//                 <img src={visa} alt="" />
//               </div>
              
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 {/* <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
//                   Mastercard
//                 </span> */}
//                 <img src={mastercard} alt="" />
//               </div>
              
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 {/* <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
//                   UPI
//                 </span> */}
//                 <img src={upi} alt="" />
//               </div>
              
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 {/* <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
//                   Amex
//                 </span> */}
//                 <img src={amex} alt="" />
//               </div>
              
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 {/* <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
//                   JCB
//                 </span> */}
//                 <img src={jcb} alt="" />
//               </div>
              
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 {/* <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
//                   RuPay
//                 </span> */}
//                 <img src={rupay} alt="" />
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
//             <button 
//               onClick={(e) => {
//                 e.preventDefault();
//                 onPrivacyPolicyClick?.(e);
//               }}
//               className="hover:text-[#fdfcf9] transition-colors hover:underline"
//             >
//               PRIVACY POLICY
//             </button>
//             <span className="text-[#c9a060]/30">|</span>
//             {/* <button 
//               onClick={(e) => {
//                 e.preventDefault();
//                 onTermsClick?.(e);
//               }}
//               className="hover:text-[#fdfcf9] transition-colors hover:underline"
//             >
//               TERMS & CONDITIONS
//             </button> */}
//             <span className="text-[#c9a060]/30">|</span>
//             <button 
//               onClick={(e) => {
//                 e.preventDefault();
//                 onShippingClick?.(e);
//               }}
//               className="hover:text-[#fdfcf9] transition-colors hover:underline"
//             >
//               SHIPPING & RETURNS
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// import { Link } from 'react-router-dom';
// import logoImage from "figma:asset/549aa7d74ad4ed64d765edbd094a15962822ce65.png";
// import jcb from "../assets/jcb-logo.png";
// import visa from "../assets/visa-logo.png";
// import upi from "../assets/upi-logo.png";
// import rupay from "../assets/rupay-logo.png";
// import amex from "../assets/amex-logo.png";
// import mastercard from "../assets/mastercard-logo.png";

// // SIMPLIFIED VERSION - No custom handlers needed
// export function Footer() {
//   const handleBookConsultation = () => {
//     const phoneNumber = "9472357386";
//     const message = "Hello, I'd like to book a consultation for Sohwais Threads.";
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <footer className="relative pt-0 pb-8 overflow-hidden">
//       <div className="relative max-w-[1080px] mx-auto px-16 pt-20">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
//           {/* Logo */}
//           <div className="md:col-span-1">
//             <Link to="/" className="block focus:outline-none focus:ring-2 focus:ring-[#c9a060] rounded-lg transition-all hover:opacity-80">
//               <img 
//                 src={logoImage} 
//                 alt="Sohwais Threads Logo" 
//                 className="w-40 h-auto mb-4 rounded-lg"
//               />
//             </Link>
//             {/* ... rest of logo section */}
//           </div>

//           {/* Shop Links */}
//           <div>
//             <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
//               SHOP
//             </h4>
//             <ul className="space-y-3">
//               <li>
//                 <Link 
//                   to="/collections"
//                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] block"
//                 >
//                   Men's Collection
//                 </Link>
//               </li>
//               <li>
//                 <Link 
//                   to="/collections/women"
//                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] block"
//                 >
//                   Women's Collection
//                 </Link>
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
//                 <Link 
//                   to="/our-story"
//                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] block"
//                 >
//                   Our Story
//                 </Link>
//               </li>
//               <li>
//                 <Link 
//                   to="/craftsmanship"
//                   className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] block"
//                 >
//                   Craftsmanship
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* ... rest of the sections ... */}

//           {/* Bottom Footer Links */}
//           <div className="flex flex-wrap items-center gap-6 text-[#fdfcf9]/70 text-[9px] tracking-[1.52px] font-['Cormorant_Garamond',serif]">
//             <Link 
//               to="/privacy-policy"
//               className="hover:text-[#fdfcf9] transition-colors hover:underline"
//             >
//               PRIVACY POLICY
//             </Link>
//             <span className="text-[#c9a060]/30">|</span>
//             <Link 
//               to="/shipping-returns"
//               className="hover:text-[#fdfcf9] transition-colors hover:underline"
//             >
//               SHIPPING & RETURNS
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Link } from 'react-router-dom';
import logoImage from "figma:asset/549aa7d74ad4ed64d765edbd094a15962822ce65.png";
import jcb from "../assets/jcb-logo.png";
import visa from "../assets/visa-logo.png";
import upi from "../assets/upi-logo.png";
import rupay from "../assets/rupay-logo.png";
import amex from "../assets/amex-logo.png";
import mastercard from "../assets/mastercard-logo.png";

export function Footer() {
  const handleBookConsultation = () => {
    const phoneNumber = "9472357386";
    const message = "Hello, I'd like to book a consultation for Sohwais Threads.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="relative pt-0 pb-8 overflow-hidden">
      <div className="relative max-w-[1080px] mx-auto px-16 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Logo */}
          <div className="md:col-span-1">
            <Link to="/" className="block focus:outline-none focus:ring-2 focus:ring-[#c9a060] rounded-lg transition-all hover:opacity-80">
              <img 
                src={logoImage} 
                alt="Sohwais Threads Logo" 
                className="w-40 h-auto mb-4 rounded-lg"
              />
            </Link>
            <p className="text-[#fdfcf9]/70 text-[13px] mb-6 font-['Cormorant_Garamond',serif]">
              {/* Luxury custom tailoring redefined. Experience bespoke elegance crafted to perfection. */}
              Crafting timeless elegance<br/>
              through traditional artistry
            </p>
            <hr className='text-[#c9a060]' />
            <br />
            <p className="text-[#c9a060] font-['Cormorant_Garamond',serif] ">Founder</p>
            <h3 className="text-[#fdfcf9] font-['Cormorant_Garamond',serif] ">Md. Danial Ansari</h3>
            {/* <button
              onClick={handleBookConsultation}
              className="bg-transparent border border-[#c9a060] text-[#c9a060] text-[11px] tracking-[2px] py-2 px-6 hover:bg-[#c9a060] hover:text-white transition-all duration-300 font-['Cormorant_Garamond',serif]"
            >
              BOOK CONSULTATION
            </button> */}
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
              SHOP
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/collections"
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] block"
                >
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link 
                  to="/collections/women"
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] block"
                >
                  Women's Collection
                </Link>
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
                <Link 
                  to="/our-story"
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] block"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link 
                  to="/craftsmanship"
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] block"
                >
                  Craftsmanship
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] block">
                {/* <Link 
                  to="/contact-us"
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] block"
                >
                  Contact Us
                </Link> */}
                support@sohwais.com
              </li>
              <li>
                <a 
                  href="https://wa.me/9472357386"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] block"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-3">
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
              <a href="https://x.com/Sohwais" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Support Links */}
          {/* <div>
            <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
              SUPPORT
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/faq"
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] block"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/size-guide"
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] block"
                >
                  Size Guide
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-[#c9a060]/30 mb-8"></div>

        {/* Payment Methods Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex items-center gap-6">
            <h5 className="text-[#fdfcf9]/70 text-[9px] tracking-[2px] font-['Cormorant_Garamond',serif] whitespace-nowrap">
              WE ACCEPT
            </h5>
            <div className="flex items-center gap-4">
              <img src={visa} alt="Visa" className="h-5 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              <img src={mastercard} alt="Mastercard" className="h-5 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              <img src={amex} alt="American Express" className="h-5 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              <img src={rupay} alt="RuPay" className="h-5 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              <img src={jcb} alt="JCB" className="h-5 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              <img src={upi} alt="UPI" className="h-5 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Bottom Footer Links */}
          <div className="flex flex-wrap items-center gap-6 text-[#fdfcf9]/70 text-[9px] tracking-[1.52px] font-['Cormorant_Garamond',serif]">
            <Link 
              to="/privacy-policy"
              className="hover:text-[#fdfcf9] transition-colors hover:underline"
            >
              PRIVACY POLICY
            </Link>
            <span className="text-[#c9a060]/30">|</span>
            <Link 
              to="/shipping-returns"
              className="hover:text-[#fdfcf9] transition-colors hover:underline"
            >
              SHIPPING & RETURNS
            </Link>
            <span className="text-[#c9a060]/30">|</span>
            {/* <Link 
              to="/terms"
              className="hover:text-[#fdfcf9] transition-colors hover:underline"
            >
              TERMS OF SERVICE
            </Link> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#fdfcf9]/50 text-[15px] tracking-[1px] font-['Cormorant_Garamond',serif]">
            © {new Date().getFullYear()} Sohwais Threads - HANDCRAFTED IN INDIA
          </p>
        </div>
      </div>
    </footer>
  );
}