
// import logoImage from "figma:asset/549aa7d74ad4ed64d765edbd094a15962822ce65.png";

// interface FooterProps {
//   onOurStoryClick?: (event?: React.MouseEvent) => void;
//   onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
//   onCollectionClick?: (event?: React.MouseEvent) => void;
//   onHomeClick?: (event?: React.MouseEvent) => void;
//   onPrivacyPolicyClick?: (event?: React.MouseEvent) => void; // New prop
//   onTermsClick?: (event?: React.MouseEvent) => void; // Optional
//   onShippingClick?: (event?: React.MouseEvent) => void; // Optional
// }

// export function Footer({ 
//   onOurStoryClick, 
//   onCraftsmanshipClick, 
//   onCollectionClick, 
//   onHomeClick,
//   onPrivacyPolicyClick,
//   onTermsClick,
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

//           {/* Payment Methods - Agar images available nahi hain to text use karo */}
//           <div>
//             <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
//               WE ACCEPT
//             </h4>
//             <div className="grid grid-cols-3 gap-3">
//               {/* Agar images nahi hain to simple text use karo */}
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
//                   Visa
//                 </span>
//               </div>
              
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
//                   Mastercard
//                 </span>
//               </div>
              
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
//                   UPI
//                 </span>
//               </div>
              
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
//                   Amex
//                 </span>
//               </div>
              
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
//                   JCB
//                 </span>
//               </div>
              
//               <div className="bg-white/5 p-2 rounded-lg flex items-center justify-center">
//                 <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
//                   RuPay
//                 </span>
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
//             <button 
//               onClick={(e) => {
//                 e.preventDefault();
//                 onTermsClick?.(e);
//               }}
//               className="hover:text-[#fdfcf9] transition-colors hover:underline"
//             >
//               TERMS & CONDITIONS
//             </button>
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
import logoImage from "figma:asset/549aa7d74ad4ed64d765edbd094a15962822ce65.png";
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onHomeClick?: (event?: React.MouseEvent) => void;
  onPrivacyPolicyClick?: (event?: React.MouseEvent) => void;
  onShippingClick?: (event?: React.MouseEvent) => void;
  onTermsClick?: (event?: React.MouseEvent) => void;
}

export function Footer({ 
  onOurStoryClick, 
  onCraftsmanshipClick, 
  onCollectionClick, 
  onHomeClick,
  onPrivacyPolicyClick,
  onShippingClick,
  onTermsClick 
}: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleBookConsultation = () => {
    const phoneNumber = "9472357386";
    const message = "Hello, I'd like to book a consultation for Sohwais Threads.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically make an API call
      console.log('Subscribed email:', email);
      setIsSubscribed(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative pt-0 pb-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#c9a060] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-[#c9a060] rounded-full"></div>
      </div>

      <div className="relative max-w-[1080px] mx-auto px-16 pt-20">
        {/* Newsletter Section */}
        <div className="mb-12 p-8 bg-gradient-to-r from-[#2c1810]/10 to-[#c9a060]/5 rounded-2xl border border-[#c9a060]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-[#c9a060] text-[14px] tracking-[2px] mb-2 font-['Cinzel_Decorative',serif]">
                STAY CONNECTED
              </h3>
              <p className="text-[#fdfcf9]/80 text-[13px] font-['Cormorant_Garamond',serif]">
                Subscribe for exclusive updates, artisan stories, and early access to collections.
              </p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c9a060]/60" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="pl-10 pr-4 py-3 bg-white/5 border border-[#c9a060]/30 rounded-lg text-[#fdfcf9] placeholder-[#fdfcf9]/40 text-[13px] font-['Cormorant_Garamond',serif] focus:outline-none focus:ring-1 focus:ring-[#c9a060] focus:border-[#c9a060] w-full sm:w-64"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#c9a060] text-white rounded-lg hover:bg-[#b8914f] transition-colors text-[11px] tracking-[1px] font-['Cormorant_Garamond',serif] uppercase whitespace-nowrap"
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Logo & Contact */}
          <div className="lg:col-span-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                onHomeClick?.(e);
              }}
              className="focus:outline-none focus:ring-2 focus:ring-[#c9a060] rounded-lg transition-all hover:opacity-80 mb-6"
              aria-label="Return to home"
            >
              <img 
                src={logoImage} 
                alt="Sohwais Threads Logo" 
                className="w-40 h-auto rounded-lg"
              />
            </button>
            
            <p className="text-[#fdfcf9]/60 text-[12px] leading-[20px] font-['Cormorant_Garamond',serif] mb-6">
              Crafting timeless elegance through traditional artistry. Each piece tells a story of heritage and craftsmanship.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#c9a060] mt-0.5 flex-shrink-0" />
                <a href="mailto:support@sohwais.com" className="text-[#fdfcf9]/70 text-[12px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]">
                  support@sohwais.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#c9a060] mt-0.5 flex-shrink-0" />
                <a href="tel:+919472357386" className="text-[#fdfcf9]/70 text-[12px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]">
                  +91 94723 57386
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c9a060] mt-0.5 flex-shrink-0" />
                <span className="text-[#fdfcf9]/70 text-[12px] font-['Cormorant_Garamond',serif]">
                  Handcrafted in India
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#c9a060] mt-0.5 flex-shrink-0" />
                <span className="text-[#fdfcf9]/70 text-[12px] font-['Cormorant_Garamond',serif]">
                  Mon-Sat: 10 AM - 7 PM IST
                </span>
              </div>
            </div>

            {/* Founder Section */}
            <div className="border-t border-[#c9a060]/20 pt-4">
              <p className="text-[#c9a060]/80 text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif] italic mb-1">
                Founder
              </p>
              <p className="text-[#fdfcf9]/70 text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
                Md. Danial Ansari
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cinzel_Decorative',serif]">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  className="text-[#fdfcf9]/70 text-[12px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
                  onClick={(e) => {
                    e.preventDefault();
                    onHomeClick?.(e);
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className="text-[#fdfcf9]/70 text-[12px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
                  onClick={(e) => {
                    e.preventDefault();
                    onCollectionClick?.(e);
                  }}
                >
                  Shop Collection
                </button>
              </li>
              <li>
                <button 
                  className="text-[#fdfcf9]/70 text-[12px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
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
                  className="text-[#fdfcf9]/70 text-[12px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
                  onClick={(e) => {
                    e.preventDefault();
                    onCraftsmanshipClick?.(e);
                  }}
                >
                  Craftsmanship
                </button>
              </li>
              <li>
                <button 
                  onClick={handleBookConsultation}
                  className="text-[#fdfcf9]/70 text-[12px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] text-left"
                >
                  Book Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-1">
            <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cinzel_Decorative',serif]">
              SUPPORT
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    onShippingClick?.(e);
                  }}
                  className="text-[#fdfcf9]/70 text-[12px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] text-left"
                >
                  Shipping & Returns
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    onPrivacyPolicyClick?.(e);
                  }}
                  className="text-[#fdfcf9]/70 text-[12px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    onTermsClick?.(e);
                  }}
                  className="text-[#fdfcf9]/70 text-[12px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <a 
                  href="mailto:support@sohwais.com" 
                  className="text-[#fdfcf9]/70 text-[12px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] block"
                >
                  Contact Support
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/919472357386" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#fdfcf9]/70 text-[12px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] block"
                >
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Payment */}
          <div className="lg:col-span-2">
            {/* Social Media */}
            <div className="mb-8">
              <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cinzel_Decorative',serif]">
                FOLLOW US
              </h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/sohwais?igsh=cW00cWxsMWlmODZh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#c9a060] hover:text-[#fdfcf9] hover:bg-[#c9a060] transition-all group"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/share/15dgz9QWbjL/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#c9a060] hover:text-[#fdfcf9] hover:bg-[#c9a060] transition-all group"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#c9a060] hover:text-[#fdfcf9] hover:bg-[#c9a060] transition-all group"
                  aria-label="X"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@sohwais" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#c9a060] hover:text-[#fdfcf9] hover:bg-[#c9a060] transition-all group"
                  aria-label="YouTube"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.58 29 29 0 0 0-.46-5.58z"/>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cinzel_Decorative',serif]">
                SECURE PAYMENTS
              </h4>
              <div className="grid grid-cols-4 gap-3 mb-3">
                {['Visa', 'Mastercard', 'UPI', 'Amex', 'JCB', 'RuPay', 'PayPal', 'Google Pay'].map((method) => (
                  <div 
                    key={method}
                    className="bg-white/5 p-2 rounded-lg flex items-center justify-center group hover:bg-white/10 transition-all cursor-help"
                    title={method}
                  >
                    <span className="text-[#fdfcf9]/70 text-[8px] tracking-[0.5px] font-['Cormorant_Garamond',serif] group-hover:text-[#c9a060] transition-colors">
                      {method}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[#fdfcf9]/60 text-[10px] text-center font-['Cormorant_Garamond',serif]">
                SSL Secured • 100% Safe Transactions
              </p>
            </div>
          </div>
        </div>

        {/* Divider with pattern */}
        <div className="relative mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(201,160,96,0.3)] to-transparent"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4">
            <div className="w-full h-full border border-[#c9a060] rotate-45"></div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#c9a060]/70 text-[9px] tracking-[1.97px] font-['Cormorant_Garamond',serif] mb-1">
              © 2025 SOHWAIS THREADS — HANDCRAFTED IN INDIA
            </p>
            <p className="text-[#fdfcf9]/40 text-[8px] tracking-[1px] font-['Cormorant_Garamond',serif]">
              All designs are protected by copyright. Unauthorized reproduction is prohibited.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-[#fdfcf9]/70 text-[9px] tracking-[1.52px] font-['Cormorant_Garamond',serif]">
            <button 
              onClick={(e) => {
                e.preventDefault();
                onPrivacyPolicyClick?.(e);
              }}
              className="hover:text-[#fdfcf9] hover:underline transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-[#c9a060]/30">|</span>
            <button 
              onClick={(e) => {
                e.preventDefault();
                onTermsClick?.(e);
              }}
              className="hover:text-[#fdfcf9] hover:underline transition-colors"
            >
              Terms & Conditions
            </button>
            <span className="text-[#c9a060]/30">|</span>
            <button 
              onClick={(e) => {
                e.preventDefault();
                onShippingClick?.(e);
              }}
              className="hover:text-[#fdfcf9] hover:underline transition-colors"
            >
              Shipping & Returns
            </button>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="text-center">
            <div className="w-6 h-6 mx-auto mb-1 rounded-full bg-gradient-to-r from-[#c9a060] to-[#e6c48a] flex items-center justify-center">
              <span className="text-[10px] text-white font-bold">✓</span>
            </div>
            <span className="text-[#fdfcf9]/50 text-[7px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
              Authentic Handcrafted
            </span>
          </div>
          <div className="text-center">
            <div className="w-6 h-6 mx-auto mb-1 rounded-full bg-gradient-to-r from-[#c9a060] to-[#e6c48a] flex items-center justify-center">
              <span className="text-[10px] text-white font-bold">✓</span>
            </div>
            <span className="text-[#fdfcf9]/50 text-[7px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
              Ethically Sourced
            </span>
          </div>
          <div className="text-center">
            <div className="w-6 h-6 mx-auto mb-1 rounded-full bg-gradient-to-r from-[#c9a060] to-[#e6c48a] flex items-center justify-center">
              <span className="text-[10px] text-white font-bold">✓</span>
            </div>
            <span className="text-[#fdfcf9]/50 text-[7px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
              Sustainable Practices
            </span>
          </div>
          <div className="text-center">
            <div className="w-6 h-6 mx-auto mb-1 rounded-full bg-gradient-to-r from-[#c9a060] to-[#e6c48a] flex items-center justify-center">
              <span className="text-[10px] text-white font-bold">✓</span>
            </div>
            <span className="text-[#fdfcf9]/50 text-[7px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
              Artisan Support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}