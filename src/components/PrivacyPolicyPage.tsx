// import { Navigation } from './Navigation';
// import { Footer } from './Footer';
// import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';

// interface PrivacyPolicyPageProps {
//   cartCount?: number;
//   onCartClick?: () => void;
//   onCollectionClick?: (event?: React.MouseEvent) => void;
//   onOurStoryClick?: (event?: React.MouseEvent) => void;
//   onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
//   onLogoClick?: () => void;
// }

// export function PrivacyPolicyPage({
//   cartCount = 0,
//   onCartClick,
//   onCollectionClick,
//   onOurStoryClick,
//   onCraftsmanshipClick,
//   onLogoClick
// }: PrivacyPolicyPageProps) {
//   return (
//     <div className="min-h-screen bg-[#fdfcf9]">
//       {/* Navigation */}
//       <div className="fixed top-0 left-0 right-0 z-40">
//         <Navigation
//           cartCount={cartCount}
//           onCartClick={onCartClick}
//           mode="light"
//           onCollectionClick={onCollectionClick}
//           onOurStoryClick={onOurStoryClick}
//           onCraftsmanshipClick={onCraftsmanshipClick}
//           onLogoClick={onLogoClick}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="pt-24 px-4 sm:px-6 md:px-8 lg:px-10 pb-20 max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h1 className="text-[32px] sm:text-[40px] md:text-[48px] tracking-[3px] sm:tracking-[4px] md:tracking-[5px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-4">
//             Privacy Policy
//           </h1>
//           <p className="text-[14px] sm:text-[15px] tracking-[1px] text-[#2c1810]/70 font-['Cormorant_Garamond',serif]">
//             Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
//           </p>
//         </div>

//         {/* Introduction */}
//         <div className="mb-10">
//           <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//             At Sohwais, we respect your privacy and are committed to protecting the personal information you share with us. 
//             This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our 
//             website or make a purchase from us.
//           </p>
//           <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mt-4">
//             By accessing or using our website, you agree to the practices described in this policy.
//           </p>
//         </div>

//         {/* Privacy Policy Content */}
//         <div className="space-y-12">
//           {/* Section 1 */}
//           <section>
//             <div className="flex items-start gap-3 mb-6">
//               <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
//                 <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">1</span>
//               </div>
//               <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
//                 Information We Collect
//               </h2>
//             </div>
            
//             <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-6">
//               We collect information only when it is necessary to provide you with a seamless and secure shopping experience.
//             </p>

//             <div className="space-y-6 ml-4 sm:ml-6">
//               <div>
//                 <h3 className="text-[18px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-3">
//                   Personal Information
//                 </h3>
//                 <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-3">
//                   When you place an order, create an account, or contact us, we may collect:
//                 </p>
//                 <ul className="list-disc pl-5 space-y-2">
//                   <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                     Full name
//                   </li>
//                   <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                     Email address
//                   </li>
//                   <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                     Phone number
//                   </li>
//                   <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                     Shipping and billing address
//                   </li>
//                   <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                     Order details and purchase history
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-[18px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-3">
//                   Payment Information
//                 </h3>
//                 <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                   Payments are processed through secure third-party payment gateways. Sohwais does not store or have access 
//                   to your full card details, UPI credentials, or banking information.
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-[18px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-3">
//                   Technical Information
//                 </h3>
//                 <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-3">
//                   We may automatically collect:
//                 </p>
//                 <ul className="list-disc pl-5 space-y-2">
//                   <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                     IP address
//                   </li>
//                   <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                     Browser type and device information
//                   </li>
//                   <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                     Pages visited and interaction data
//                   </li>
//                   <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                     Cookies and similar tracking technologies
//                   </li>
//                 </ul>
//                 <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mt-3">
//                   This helps us improve website performance and user experience.
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* Section 2 */}
//           <section>
//             <div className="flex items-start gap-3 mb-6">
//               <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
//                 <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">2</span>
//               </div>
//               <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
//                 How We Use Your Information
//               </h2>
//             </div>
            
//             <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-6">
//               Your information is used strictly for legitimate business purposes, including:
//             </p>

//             <ul className="list-disc pl-5 space-y-2 mb-6">
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Processing and delivering your orders
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Communicating order updates, shipping details, and support queries
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Managing your account and purchase history
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Improving our website, services, and customer experience
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Ensuring security and preventing fraud
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Sending important service-related updates
//               </li>
//             </ul>

//             <div className="bg-[#f5f1e8] p-4 sm:p-6 rounded-lg">
//               <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] italic">
//                 We do not sell, rent, or trade your personal data.
//               </p>
//             </div>
//           </section>

//           {/* Section 3 */}
//           <section>
//             <div className="flex items-start gap-3 mb-6">
//               <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
//                 <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">3</span>
//               </div>
//               <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
//                 Cookies and Tracking Technologies
//               </h2>
//             </div>
            
//             <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-4">
//               Our website uses cookies to:
//             </p>

//             <ul className="list-disc pl-5 space-y-2 mb-6">
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Remember your preferences
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Enable core website functionality
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Analyze traffic and improve performance
//               </li>
//             </ul>

//             <div className="bg-[#f5f1e8] p-4 sm:p-6 rounded-lg">
//               <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 You may disable cookies in your browser settings, but some features of the website may not function properly as a result.
//               </p>
//             </div>
//           </section>

//           {/* Section 4 */}
//           <section>
//             <div className="flex items-start gap-3 mb-6">
//               <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
//                 <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">4</span>
//               </div>
//               <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
//                 Sharing of Information
//               </h2>
//             </div>
            
//             <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-6">
//               We share your information only when required to operate our services, including with:
//             </p>

//             <ul className="list-disc pl-5 space-y-2 mb-6">
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Shipping and logistics partners for order delivery
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Payment gateway providers for secure transactions
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Technical service providers supporting website operations
//               </li>
//             </ul>

//             <div className="bg-[#f5f1e8] p-4 sm:p-6 rounded-lg">
//               <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 All partners are required to maintain confidentiality and use data only for the intended purpose.
//               </p>
//             </div>
//           </section>

//           {/* Section 5 */}
//           <section>
//             <div className="flex items-start gap-3 mb-6">
//               <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
//                 <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">5</span>
//               </div>
//               <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
//                 Data Security
//               </h2>
//             </div>
            
//             <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-4">
//               We take reasonable and appropriate measures to protect your information, including:
//             </p>

//             <ul className="list-disc pl-5 space-y-2 mb-6">
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Secure server infrastructure
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 SSL encryption
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Restricted internal access to data
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Regular system monitoring
//               </li>
//             </ul>

//             <div className="bg-[#f5f1e8] p-4 sm:p-6 rounded-lg">
//               <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] italic">
//                 While we strive to protect your data, no method of transmission over the internet is 100% secure.
//               </p>
//             </div>
//           </section>

//           {/* Section 6 */}
//           <section>
//             <div className="flex items-start gap-3 mb-6">
//               <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
//                 <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">6</span>
//               </div>
//               <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
//                 Data Retention
//               </h2>
//             </div>
            
//             <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-4">
//               We retain personal information only for as long as necessary to:
//             </p>

//             <ul className="list-disc pl-5 space-y-2 mb-6">
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Fulfill orders
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Comply with legal and regulatory obligations
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Resolve disputes and enforce agreements
//               </li>
//             </ul>

//             <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//               When data is no longer required, it is securely deleted or anonymized.
//             </p>
//           </section>

//           {/* Section 7 */}
//           <section>
//             <div className="flex items-start gap-3 mb-6">
//               <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
//                 <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">7</span>
//               </div>
//               <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
//                 Your Rights
//               </h2>
//             </div>
            
//             <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-4">
//               You have the right to:
//             </p>

//             <ul className="list-disc pl-5 space-y-2 mb-6">
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Access the personal information we hold about you
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Request corrections or updates to your data
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Request deletion of your personal information (subject to legal requirements)
//               </li>
//               <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 Opt out of non-essential communications
//               </li>
//             </ul>

//             <div className="bg-[#f5f1e8] p-4 sm:p-6 rounded-lg">
//               <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//                 You can exercise these rights by contacting us at the email address below.
//               </p>
//             </div>
//           </section>

//           {/* Section 8 */}
//           <section>
//             <div className="flex items-start gap-3 mb-6">
//               <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
//                 <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">8</span>
//               </div>
//               <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
//                 Third-Party Links
//               </h2>
//             </div>
            
//             <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//               Our website may contain links to third-party websites. Sohwais is not responsible for the privacy practices or 
//               content of those external sites. We encourage you to review their privacy policies separately.
//             </p>
//           </section>

//           {/* Section 9 */}
//           <section>
//             <div className="flex items-start gap-3 mb-6">
//               <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
//                 <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">9</span>
//               </div>
//               <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
//                 Children's Privacy
//               </h2>
//             </div>
            
//             <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//               Sohwais does not knowingly collect personal information from individuals under the age of 18. If you believe 
//               a minor has provided us with personal data, please contact us immediately.
//             </p>
//           </section>

//           {/* Section 10 */}
//           <section>
//             <div className="flex items-start gap-3 mb-6">
//               <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
//                 <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">10</span>
//               </div>
//               <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
//                 Updates to This Policy
//               </h2>
//             </div>
            
//             <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
//               We may update this Privacy Policy from time to time to reflect changes in legal requirements or business practices. 
//               Any updates will be posted on this page with a revised effective date.
//             </p>
//           </section>

//           {/* Section 11 */}
//           <section>
//             <div className="flex items-start gap-3 mb-6">
//               <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
//                 <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">11</span>
//               </div>
//               <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
//                 Contact Us
//               </h2>
//             </div>
            
//             <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-6">
//               If you have any questions, concerns, or requests regarding this Privacy Policy or your data, you may contact us at:
//             </p>

//             <div className="bg-[#f5f1e8] p-6 sm:p-8 rounded-lg border border-[#c9a060]/20">
//               <div className="space-y-3">
//                 <div>
//                   <h3 className="text-[18px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-1">Email</h3>
//                   <a 
//                     href="mailto:support@sohwais.com" 
//                     className="text-[#c9a060] hover:text-[#b8914f] transition-colors text-[16px] font-['Cormorant_Garamond',serif]"
//                   >
//                     support@sohwais.com
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>

//       {/* Footer */}
//       <ExperienceFooterWrapper>
//         <Footer 
//           onCollectionClick={onCollectionClick}
//           onOurStoryClick={onOurStoryClick}
//           onCraftsmanshipClick={onCraftsmanshipClick}
//         />
//       </ExperienceFooterWrapper>
//     </div>
//   );
// }
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';

interface PrivacyPolicyPageProps {
  cartCount?: number;
  onCartClick?: () => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
  onLogoClick?: () => void;
  onBackClick?: () => void;
}

export function PrivacyPolicyPage({
  cartCount = 0,
  onCartClick,
  onCollectionClick,
  onOurStoryClick,
  onCraftsmanshipClick,
  onLogoClick,
  onBackClick
}: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-[#fdfcf9]">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Navigation
          cartCount={cartCount}
          onCartClick={onCartClick}
          mode="light"
          onCollectionClick={onCollectionClick}
          onOurStoryClick={onOurStoryClick}
          onCraftsmanshipClick={onCraftsmanshipClick}
          onLogoClick={onLogoClick}
        />
      </div>

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-6 md:px-8 lg:px-10 pb-20 max-w-4xl mx-auto">
        {/* Go Back Button */}
        {onBackClick && (
          <button
            onClick={onBackClick}
            className="flex items-center gap-2 text-[#c9a060] hover:text-[#b8914f] transition-colors mb-8 group"
          >
            <svg 
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-[14px] tracking-[1px] font-['Cormorant_Garamond',serif]">
              Go Back
            </span>
          </button>
        )}

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] tracking-[3px] sm:tracking-[4px] md:tracking-[5px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[14px] sm:text-[15px] tracking-[1px] text-[#2c1810]/70 font-['Cormorant_Garamond',serif]">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-10">
          <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
            At Sohwais, we respect your privacy and are committed to protecting the personal information you share with us. 
            This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our 
            website or make a purchase from us.
          </p>
          <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mt-4">
            By accessing or using our website, you agree to the practices described in this policy.
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">1</span>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                Information We Collect
              </h2>
            </div>
            
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-6">
              We collect information only when it is necessary to provide you with a seamless and secure shopping experience.
            </p>

            <div className="space-y-6 ml-4 sm:ml-6">
              <div>
                <h3 className="text-[18px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-3">
                  Personal Information
                </h3>
                <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-3">
                  When you place an order, create an account, or contact us, we may collect:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                    Full name
                  </li>
                  <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                    Email address
                  </li>
                  <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                    Phone number
                  </li>
                  <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                    Shipping and billing address
                  </li>
                  <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                    Order details and purchase history
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[18px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-3">
                  Payment Information
                </h3>
                <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                  Payments are processed through secure third-party payment gateways. Sohwais does not store or have access 
                  to your full card details, UPI credentials, or banking information.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-3">
                  Technical Information
                </h3>
                <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-3">
                  We may automatically collect:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                    IP address
                  </li>
                  <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                    Browser type and device information
                  </li>
                  <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                    Pages visited and interaction data
                  </li>
                  <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                    Cookies and similar tracking technologies
                  </li>
                </ul>
                <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mt-3">
                  This helps us improve website performance and user experience.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">2</span>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                How We Use Your Information
              </h2>
            </div>
            
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-6">
              Your information is used strictly for legitimate business purposes, including:
            </p>

            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Processing and delivering your orders
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Communicating order updates, shipping details, and support queries
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Managing your account and purchase history
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Improving our website, services, and customer experience
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Ensuring security and preventing fraud
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Sending important service-related updates
              </li>
            </ul>

            <div className="bg-[#f5f1e8] p-4 sm:p-6 rounded-lg">
              <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] italic">
                We do not sell, rent, or trade your personal data.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">3</span>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                Cookies and Tracking Technologies
              </h2>
            </div>
            
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-4">
              Our website uses cookies to:
            </p>

            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Remember your preferences
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Enable core website functionality
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Analyze traffic and improve performance
              </li>
            </ul>

            <div className="bg-[#f5f1e8] p-4 sm:p-6 rounded-lg">
              <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                You may disable cookies in your browser settings, but some features of the website may not function properly as a result.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">4</span>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                Sharing of Information
              </h2>
            </div>
            
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-6">
              We share your information only when required to operate our services, including with:
            </p>

            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Shipping and logistics partners for order delivery
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Payment gateway providers for secure transactions
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Technical service providers supporting website operations
              </li>
            </ul>

            <div className="bg-[#f5f1e8] p-4 sm:p-6 rounded-lg">
              <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                All partners are required to maintain confidentiality and use data only for the intended purpose.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">5</span>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                Data Security
              </h2>
            </div>
            
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-4">
              We take reasonable and appropriate measures to protect your information, including:
            </p>

            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Secure server infrastructure
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                SSL encryption
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Restricted internal access to data
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Regular system monitoring
              </li>
            </ul>

            <div className="bg-[#f5f1e8] p-4 sm:p-6 rounded-lg">
              <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] italic">
                While we strive to protect your data, no method of transmission over the internet is 100% secure.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">6</span>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                Data Retention
              </h2>
            </div>
            
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-4">
              We retain personal information only for as long as necessary to:
            </p>

            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Fulfill orders
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Comply with legal and regulatory obligations
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Resolve disputes and enforce agreements
              </li>
            </ul>

            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
              When data is no longer required, it is securely deleted or anonymized.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">7</span>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                Your Rights
              </h2>
            </div>
            
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-4">
              You have the right to:
            </p>

            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Access the personal information we hold about you
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Request corrections or updates to your data
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Request deletion of your personal information (subject to legal requirements)
              </li>
              <li className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                Opt out of non-essential communications
              </li>
            </ul>

            <div className="bg-[#f5f1e8] p-4 sm:p-6 rounded-lg">
              <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                You can exercise these rights by contacting us at the email address below.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">8</span>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                Third-Party Links
              </h2>
            </div>
            
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
              Our website may contain links to third-party websites. Sohwais is not responsible for the privacy practices or 
              content of those external sites. We encourage you to review their privacy policies separately.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">9</span>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                Children's Privacy
              </h2>
            </div>
            
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
              Sohwais does not knowingly collect personal information from individuals under the age of 18. If you believe 
              a minor has provided us with personal data, please contact us immediately.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">10</span>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                Updates to This Policy
              </h2>
            </div>
            
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
              We may update this Privacy Policy from time to time to reflect changes in legal requirements or business practices. 
              Any updates will be posted on this page with a revised effective date.
            </p>
          </section>

          {/* Section 11 - Contact Us */}
          <section>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <span className="text-[#c9a060] font-['Cinzel_Decorative',serif] font-bold text-[16px]">11</span>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                Contact Us
              </h2>
            </div>
            
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your data, you may contact us at:
            </p>

            <div className="bg-[#f5f1e8] p-6 sm:p-8 rounded-lg border border-[#c9a060]/20">
              <div className="space-y-3">
                <div>
                  <h3 className="text-[18px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-1">Email</h3>
                  <a 
                    href="mailto:support@sohwais.com" 
                    className="text-[#c9a060] hover:text-[#b8914f] transition-colors text-[16px] font-['Cormorant_Garamond',serif]"
                  >
                    support@sohwais.com
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Go Back Button */}
            {onBackClick && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={onBackClick}
                  className="flex items-center gap-3 px-8 py-3 border border-[#c9a060] text-[#c9a060] hover:bg-[#c9a060] hover:text-white transition-all duration-300 rounded-full group"
                >
                  <svg 
                    className="w-4 h-4 group-hover:-translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-[14px] tracking-[1px] font-['Cormorant_Garamond',serif]">
                    Go Back
                  </span>
                </button>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Footer */}
      <ExperienceFooterWrapper>
        <Footer 
          onCollectionClick={onCollectionClick}
          onOurStoryClick={onOurStoryClick}
          onCraftsmanshipClick={onCraftsmanshipClick}
        />
      </ExperienceFooterWrapper>
    </div>
  );
}