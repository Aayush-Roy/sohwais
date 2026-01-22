import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';

interface ShippingReturnsPolicyPageProps {
  cartCount?: number;
  onCartClick?: () => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
  onLogoClick?: () => void;
}

export function ShippingReturnsPolicyPage({
  cartCount = 0,
  onCartClick,
  onCollectionClick,
  onOurStoryClick,
  onCraftsmanshipClick,
  onLogoClick
}: ShippingReturnsPolicyPageProps) {
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
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] tracking-[3px] sm:tracking-[4px] md:tracking-[5px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-4">
            Shipping, Returns & Cancellation Policy
          </h1>
          <p className="text-[14px] sm:text-[15px] tracking-[1px] text-[#2c1810]/70 font-['Cormorant_Garamond',serif]">
            At Sohwais, every piece is thoughtfully handcrafted to order.
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-10">
          <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
            This policy outlines our shipping timelines, return conditions, and cancellation guidelines to ensure clarity and transparency.
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-12">
          {/* Shipping Policy Section */}
          <section className="relative">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <svg className="w-4 h-4 text-[#c9a060]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                Shipping Policy
              </h2>
            </div>

            <div className="space-y-6 ml-4 sm:ml-6">
              <div>
                <h3 className="text-[18px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-3">
                  Order Processing & Dispatch
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Each Sohwais garment is handcrafted specifically for you.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Please allow <strong>3 to 4 business days</strong> from the date of order placement for careful creation before dispatch.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Once your order is ready and shipped, you will receive a shipping confirmation via email and WhatsApp, along with tracking details.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[18px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-3">
                  Delivery Timelines
                </h3>
                <div className="space-y-4">
                  <div className="bg-[#f5f1e8] p-4 rounded-lg">
                    <h4 className="text-[16px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-2">India:</h4>
                    <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Delivery typically takes <strong>5 to 7 business days</strong> after dispatch, depending on your location.
                    </p>
                  </div>
                  
                  <div className="bg-[#f5f1e8] p-4 rounded-lg">
                    <h4 className="text-[16px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-2">International Orders:</h4>
                    <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Worldwide shipping is available. Shipping charges will be calculated and displayed at checkout. Delivery timelines may vary based on destination and customs clearance.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[18px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-3">
                  Shipping Charges
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      <strong>Free shipping</strong> across India
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      International shipping charges apply and are calculated at checkout
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f5f1e8] p-4 rounded-lg border-l-4 border-[#c9a060]">
                <p className="text-[14px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] italic">
                  Please note that delivery timelines are estimates and may vary due to courier delays, weather conditions, or unforeseen circumstances beyond our control.
                </p>
              </div>
            </div>
          </section>

          {/* Cancellation Policy Section */}
          <section className="relative">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <svg className="w-4 h-4 text-[#c9a060]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                Cancellation Policy
              </h2>
            </div>

            <div className="space-y-4 ml-4 sm:ml-6">
              <div className="bg-[#f5f1e8] p-4 rounded-lg">
                <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-3">
                  As all products are handcrafted to order:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Orders can be cancelled <strong>only within 24 hours</strong> of placing the order
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Cancellation requests must be sent via email to <strong>support@sohwais.com</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Requests received after 24 hours will not be accepted, as the production process would have already begun
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-[#2c1810]/10 p-4 rounded-lg">
                <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                  Once approved, the refund will be processed to the original payment method within a reasonable time frame.
                </p>
              </div>
            </div>
          </section>

          {/* Return & Exchange Policy Section */}
          <section className="relative">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <svg className="w-4 h-4 text-[#c9a060]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                </svg>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                Return & Exchange Policy
              </h2>
            </div>

            <div className="space-y-6 ml-4 sm:ml-6">
              <div className="bg-white p-4 rounded-lg border border-[#2c1810]/10">
                <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-4">
                  At Sohwais, we maintain strict quality checks. Returns or exchanges are accepted only under the following conditions:
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-3">
                  Eligible Cases
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      The product received is <strong>defective</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      The product received is of an <strong>incorrect size</strong> compared to what was ordered
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[18px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-3">
                  Conditions
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Requests must be raised within <strong>48 hours</strong> of delivery
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      The product must be <strong>unused, unwashed, and in its original condition</strong> with all tags intact
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      The item must be returned in <strong>original packaging</strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f5f1e8] p-4 rounded-lg">
                <h3 className="text-[16px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-3">
                  To initiate a return or exchange:
                </h3>
                <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-3">
                  Please email <strong>support@sohwais.com</strong> with:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Order number
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Clear images of the product highlighting the issue
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      A brief description of the concern
                    </span>
                  </li>
                </ul>
                <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mt-3">
                  Our team will review the request and guide you through the next steps.
                </p>
              </div>
            </div>
          </section>

          {/* Non-Returnable Cases Section */}
          <section className="relative">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <svg className="w-4 h-4 text-[#c9a060]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                Non-Returnable Cases
              </h2>
            </div>

            <div className="ml-4 sm:ml-6">
              <div className="bg-white border border-[#2c1810]/10 p-4 rounded-lg">
                <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-4">
                  Returns or exchanges will <strong>not</strong> be accepted for:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Change of mind
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Color or design preference
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Minor variations in texture, weave, or finish (as these are natural characteristics of handcrafted products)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Delays caused by courier partners
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Refunds Section */}
          <section className="relative">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <svg className="w-4 h-4 text-[#c9a060]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                Refunds
              </h2>
            </div>

            <div className="ml-4 sm:ml-6">
              <div className="bg-white border border-[#2c1810]/10 p-4 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Approved refunds will be processed after the returned product passes quality inspection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Refunds will be credited to the original payment method
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a060] mt-1">•</span>
                    <span className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif]">
                      Shipping charges (if any) are non-refundable
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="relative">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f5f1e8] rounded-full">
                <svg className="w-4 h-4 text-[#c9a060]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-[22px] sm:text-[24px] tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-1">
                Contact Us
              </h2>
            </div>

            <div className="ml-4 sm:ml-6">
              <div className="bg-[#f5f1e8] p-6 sm:p-8 rounded-lg border border-[#c9a060]/20">
                <p className="text-[15px] leading-relaxed text-[#2c1810] font-['Cormorant_Garamond',serif] mb-6">
                  For any questions or support related to shipping, cancellations, or returns, please contact us at:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[18px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-2">Email</h3>
                    <a 
                      href="mailto:support@sohwais.com" 
                      className="text-[#c9a060] hover:text-[#b8914f] transition-colors text-[16px] font-['Cormorant_Garamond',serif] inline-flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      support@sohwais.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
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