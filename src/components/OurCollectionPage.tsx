// // // // import { ArrowLeft } from 'lucide-react';
// // // // import { Navigation } from './Navigation';
// // // // import { motion } from 'motion/react';
// // // // import madhubaniImage from 'figma:asset/8e00dae59cdb318d9b4b0dadd5a79db9c070c991.png';
// // // // import sujiniImage from 'figma:asset/e37c21e18c80f50d0761f06ff1f74b7584fa5c4d.png';
// // // // import { Footer } from './Footer';
// // // // import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';

// // // // interface OurCollectionPageProps {
// // // //   onBack: (event?: React.MouseEvent) => void;
// // // //   cartCount: number;
// // // //   onCartClick: () => void;
// // // //   onCollectionSelect: (collectionId: string) => void;
// // // //   onCollectionClick?: (event?: React.MouseEvent) => void;
// // // //   onOurStoryClick?: (event?: React.MouseEvent) => void;
// // // //   onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
// // // // }

// // // // export function OurCollectionPage({ 
// // // //   onBack, 
// // // //   cartCount, 
// // // //   onCartClick, 
// // // //   onCollectionSelect,
// // // //   onCollectionClick,
// // // //   onOurStoryClick,
// // // //   onCraftsmanshipClick 
// // // // }: OurCollectionPageProps) {
  
// // // //   const collections = [
// // // //     {
// // // //       id: 'madhubani',
// // // //       name: 'Madhubani Collection',
// // // //       description: 'Traditional folk art from Bihar, featuring intricate geometric patterns and vibrant colors',
// // // //       imageUrl: madhubaniImage,
// // // //     },
// // // //     {
// // // //       id: 'sujini',
// // // //       name: 'Sujini Collection',
// // // //       description: 'Delicate running stitch embroidery creating beautiful quilted textures',
// // // //       imageUrl: sujiniImage,
// // // //     },
// // // //     {
// // // //       id: 'marble',
// // // //       name: 'Marble Collection',
// // // //       description: 'Inspired by the timeless elegance of marble artistry and craftsmanship',
// // // //       imageUrl: null, // Placeholder for upload
// // // //     },
// // // //     {
// // // //       id: 'nakashi',
// // // //       name: 'Nakashi Collection',
// // // //       description: 'Exquisite hand-painted designs showcasing intricate artistic details',
// // // //       imageUrl: null, // Placeholder for upload
// // // //     },
// // // //     {
// // // //       id: 'majestic-linen',
// // // //       name: 'The Majestic Linen',
// // // //       description: 'Premium linen crafted with heritage techniques, offering timeless comfort and elegance',
// // // //       imageUrl: null, // Placeholder for upload
// // // //     },
// // // //     {
// // // //       id: 'batik-archive',
// // // //       name: 'The Batik Archive',
// // // //       description: 'Ancient wax-resist dyeing tradition creating mesmerizing patterns and rich textures',
// // // //       imageUrl: null, // Placeholder for upload
// // // //     },
// // // //     {
// // // //       id: 'explore-all',
// // // //       name: 'Explore All',
// // // //       description: 'Discover our complete range of heritage-inspired collections',
// // // //       imageUrl: null, // Placeholder for upload
// // // //       isSpecial: true
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <div className="min-h-screen bg-[#fdfcf9]">
// // // //       {/* Navigation */}
// // // //       <div className="fixed top-0 left-0 right-0 z-40">
// // // //         <Navigation 
// // // //           cartCount={cartCount} 
// // // //           onCartClick={onCartClick} 
// // // //           mode="light"
// // // //           onCollectionClick={onCollectionClick}
// // // //           onOurStoryClick={onOurStoryClick}
// // // //           onCraftsmanshipClick={onCraftsmanshipClick}
// // // //         />
// // // //       </div>

// // // //       {/* Content */}
// // // //       <div className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-20">
// // // //         {/* Back Button */}
// // // //         <button
// // // //           onClick={onBack}
// // // //           className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors mb-8 sm:mb-10 md:mb-12 font-['Cormorant_Garamond',serif] tracking-[1.5px] text-[10px] sm:text-[11px]"
// // // //           aria-label="Go back to home page"
// // // //         >
// // // //           <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
// // // //           <span className="hidden sm:inline">BACK</span>
// // // //         </button>

// // // //         {/* Header */}
// // // //         <div className="text-center mb-10 sm:mb-12 md:mb-16">
// // // //           <h1 className="text-[#2c1810] text-[32px] sm:text-[42px] md:text-[56px] tracking-[2.5px] sm:tracking-[3.5px] md:tracking-[4.48px] mb-4 sm:mb-5 md:mb-6 font-['Cinzel_Decorative',serif]">
// // // //             Our Collections
// // // //           </h1>
// // // //           <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[#c9a060] to-transparent mx-auto mb-4 sm:mb-5 md:mb-6" />
// // // //           <p className="text-[#2c1810]/70 text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.5px] sm:tracking-[1px] font-['Cormorant_Garamond',serif] max-w-2xl mx-auto leading-relaxed">
// // // //             Explore our curated collections, each telling a unique story of India's rich heritage and craftsmanship
// // // //           </p>
// // // //         </div>

// // // //         {/* Collections Grid */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
// // // //           {collections.map((collection, index) => (
// // // //             <motion.div
// // // //               key={collection.id}
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ delay: index * 0.1, duration: 0.5 }}
// // // //               className="group cursor-pointer"
// // // //               onClick={() => onCollectionSelect(collection.id)}
// // // //             >
// // // //               <div className="relative overflow-hidden rounded-sm bg-[#2c1810]/5 aspect-[3/4] mb-4">
// // // //                 {collection.imageUrl ? (
// // // //                   <img
// // // //                     src={collection.imageUrl}
// // // //                     alt={collection.name}
// // // //                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// // // //                   />
// // // //                 ) : (
// // // //                   <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2c1810]/10 to-[#c9a060]/10">
// // // //                     <div className="text-center p-6">
// // // //                       <div className="w-20 h-20 mx-auto mb-4 border-2 border-dashed border-[#c9a060]/30 rounded-full flex items-center justify-center">
// // // //                         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a060]/40">
// // // //                           <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
// // // //                           <circle cx="8.5" cy="8.5" r="1.5"/>
// // // //                           <polyline points="21 15 16 10 5 21"/>
// // // //                         </svg>
// // // //                       </div>
// // // //                       <p className="text-[10px] tracking-[1.5px] text-[#2c1810]/40 font-['Cormorant_Garamond',serif] uppercase">
// // // //                         Image Upload Ready
// // // //                       </p>
// // // //                     </div>
// // // //                   </div>
// // // //                 )}
                
// // // //                 {/* Overlay on hover */}
// // // //                 <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/80 via-[#2c1810]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
// // // //                   <button className="border-2 border-white text-white px-6 py-2 text-[10px] tracking-[2px] font-['Cormorant_Garamond',serif] rounded-sm transition-all duration-300 group-hover:bg-white group-hover:text-[#2c1810]">
// // // //                     VIEW COLLECTION
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
              
// // // //               <div className="text-center">
// // // //                 <h3 className="text-[#2c1810] text-[16px] sm:text-[18px] tracking-[1px] mb-2 font-['Playfair_Display',serif]">
// // // //                   {collection.name}
// // // //                 </h3>
// // // //                 <p className="text-[#2c1810]/60 text-[11px] sm:text-[12px] tracking-[0.5px] font-['Cormorant_Garamond',serif] leading-relaxed px-2">
// // // //                   {collection.description}
// // // //                 </p>
// // // //               </div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* Footer */}
// // // //       <ExperienceFooterWrapper>
// // // //         <Footer 
// // // //           onOurStoryClick={onOurStoryClick} 
// // // //           onCraftsmanshipClick={onCraftsmanshipClick}
// // // //           onCollectionClick={onCollectionClick}
// // // //           onHomeClick={onBack}
// // // //         />
// // // //       </ExperienceFooterWrapper>
// // // //     </div>
// // // //   );
// // // // }
// // // import { ArrowLeft } from 'lucide-react';
// // // import { Navigation } from './Navigation';
// // // import { motion } from 'motion/react';
// // // import { Footer } from './Footer';
// // // import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';
// // // import { useState, useEffect } from 'react';

// // // interface OurCollectionPageProps {
// // //   onBack: (event?: React.MouseEvent) => void;
// // //   cartCount: number;
// // //   onCartClick: () => void;
// // //   onCollectionSelect: (collectionId: string) => void;
// // //   onCollectionClick?: (event?: React.MouseEvent) => void;
// // //   onOurStoryClick?: (event?: React.MouseEvent) => void;
// // //   onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
// // // }

// // // interface Product {
// // //   _id: string;
// // //   name: string;
// // //   category: string;
// // //   collection: string;
// // //   subCategory: string;
// // //   price: number;
// // //   discount: number;
// // //   description: string;
// // //   imageUrls: string[];
// // //   features: string[];
// // //   tags: string[];
// // //   status: string;
// // //   stock: number;
// // //   variants: Array<{
// // //     color: string;
// // //     size: string;
// // //     price: number;
// // //   }>;
// // // }

// // // export function OurCollectionPage({ 
// // //   onBack, 
// // //   cartCount, 
// // //   onCartClick, 
// // //   onCollectionSelect,
// // //   onCollectionClick,
// // //   onOurStoryClick,
// // //   onCraftsmanshipClick 
// // // }: OurCollectionPageProps) {
// // //   const [menProducts, setMenProducts] = useState<Product[]>([]);
// // //   const [womenProducts, setWomenProducts] = useState<Product[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState<string | null>(null);
// // //   console.log(menProducts);
// // //   useEffect(() => {
// // //     fetchProducts();
// // //   }, []);

// // //   const fetchProducts = async () => {
// // //     try {
// // //       setLoading(true);
      
// // //       // Fetch men's products
// // //       const menResponse = await fetch('https://api.sohwais.com/api/products/category/Men');
// // //       const menData = await menResponse.json();
// // //       console.log(menData.data)
      
// // //       // Fetch women's products
// // //       const womenResponse = await fetch('https://api.sohwais.com/api/products/category/Women');
// // //       const womenData = await womenResponse.json();
      
// // //       if (menData.success) {
// // //         setMenProducts(menData.data);
// // //       }
      
// // //       if (womenData.success) {
// // //         setWomenProducts(womenData.data);
// // //       }
      
// // //     } catch (err) {
// // //       setError('Failed to load products');
// // //       console.error('Error fetching products:', err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Group men's products by collection
// // //   const menCollections = menProducts.reduce((acc, product) => {
// // //     const collectionName = product.collection || 'Uncategorized';
// // //     if (!acc[collectionName]) {
// // //       acc[collectionName] = {
// // //         products: [],
// // //         id: collectionName.toLowerCase().replace(/\s+/g, '-'),
// // //         name: collectionName,
// // //         description: `Collection of ${collectionName} products for men`
// // //       };
// // //     }
// // //     acc[collectionName].products.push(product);
// // //     return acc;
// // //   }, {} as Record<string, any>);

// // //   // Group women's products by collection
// // //   const womenCollections = womenProducts.reduce((acc, product) => {
// // //     const collectionName = product.collection || 'Uncategorized';
// // //     if (!acc[collectionName]) {
// // //       acc[collectionName] = {
// // //         products: [],
// // //         id: collectionName.toLowerCase().replace(/\s+/g, '-'),
// // //         name: collectionName,
// // //         description: `Collection of ${collectionName} products for women`
// // //       };
// // //     }
// // //     acc[collectionName].products.push(product);
// // //     return acc;
// // //   }, {} as Record<string, any>);

// // //   // Get unique collections for display
// // //   const getUniqueCollections = (products: Product[]) => {
// // //     const collections = new Set<string>();
// // //     products.forEach(product => {
// // //       if (product.collection) {
// // //         collections.add(product.collection);
// // //       }
// // //     });
// // //     return Array.from(collections);
// // //   };

// // //   const menCollectionList = getUniqueCollections(menProducts);
// // //   const womenCollectionList = getUniqueCollections(womenProducts);

// // //   // Hardcoded collections as fallback (using your original data structure)
// // //   const fallbackCollections = [
// // //     {
// // //       id: 'madhubani',
// // //       name: 'Madhubani Collection',
// // //       description: 'Traditional folk art from Bihar, featuring intricate geometric patterns and vibrant colors',
// // //       imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c',
// // //       category: 'men'
// // //     },
// // //     {
// // //       id: 'sujini',
// // //       name: 'Sujini Collection',
// // //       description: 'Delicate running stitch embroidery creating beautiful quilted textures',
// // //       imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
// // //       category: 'women'
// // //     },
// // //     {
// // //       id: 'marble',
// // //       name: 'Marble Collection',
// // //       description: 'Inspired by the timeless elegance of marble artistry and craftsmanship',
// // //       imageUrl: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8',
// // //       category: 'both'
// // //     },
// // //     {
// // //       id: 'nakashi',
// // //       name: 'Nakashi Collection',
// // //       description: 'Exquisite hand-painted designs showcasing intricate artistic details',
// // //       imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
// // //       category: 'men'
// // //     },
// // //     {
// // //       id: 'majestic-linen',
// // //       name: 'The Majestic Linen',
// // //       description: 'Premium linen crafted with heritage techniques, offering timeless comfort and elegance',
// // //       imageUrl: 'https://res.cloudinary.com/dwp3doiep/image/upload/v1768383397/dark_green_2_fvo9ii.png',
// // //       category: 'men'
// // //     },
// // //     {
// // //       id: 'batik-archive',
// // //       name: 'The Batik Archive',
// // //       description: 'Ancient wax-resist dyeing tradition creating mesmerizing patterns and rich textures',
// // //       imageUrl: 'https://res.cloudinary.com/dwp3doiep/image/upload/v1768387843/red_batik_5_d7rpll.png',
// // //       category: 'men'
// // //     },
// // //     {
// // //       id: 'explore-all',
// // //       name: 'Explore All',
// // //       description: 'Discover our complete range of heritage-inspired collections',
// // //       imageUrl: null,
// // //       isSpecial: true,
// // //       category: 'both'
// // //     }
// // //   ];

// // //   // Filter collections by category
// // //   const menCollectionsDisplay = fallbackCollections.filter(
// // //     collection => collection.category === 'men' || collection.category === 'both'
// // //   );
  
// // //   const womenCollectionsDisplay = fallbackCollections.filter(
// // //     collection => collection.category === 'women' || collection.category === 'both'
// // //   );

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen bg-[#fdfcf9] flex items-center justify-center">
// // //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c9a060]"></div>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen bg-[#fdfcf9] flex items-center justify-center">
// // //         <div className="text-center">
// // //           <p className="text-[#2c1810] mb-4">{error}</p>
// // //           <button 
// // //             onClick={() => fetchProducts()}
// // //             className="px-4 py-2 bg-[#c9a060] text-white rounded-sm"
// // //           >
// // //             Retry
// // //           </button>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-[#fdfcf9]">
// // //       {/* Navigation */}
// // //       <div className="fixed top-0 left-0 right-0 z-40">
// // //         <Navigation 
// // //           cartCount={cartCount} 
// // //           onCartClick={onCartClick} 
// // //           mode="light"
// // //           onCollectionClick={onCollectionClick}
// // //           onOurStoryClick={onOurStoryClick}
// // //           onCraftsmanshipClick={onCraftsmanshipClick}
// // //         />
// // //       </div>

// // //       {/* Content */}
// // //       <div className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-20">
// // //         {/* Back Button */}
// // //         <button
// // //           onClick={onBack}
// // //           className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors mb-8 sm:mb-10 md:mb-12 font-['Cormorant_Garamond',serif] tracking-[1.5px] text-[10px] sm:text-[11px]"
// // //           aria-label="Go back to home page"
// // //         >
// // //           <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
// // //           <span className="hidden sm:inline">BACK</span>
// // //         </button>

// // //         {/* Header */}
// // //         <div className="text-center mb-10 sm:mb-12 md:mb-16">
// // //           <h1 className="text-[#2c1810] text-[32px] sm:text-[42px] md:text-[56px] tracking-[2.5px] sm:tracking-[3.5px] md:tracking-[4.48px] mb-4 sm:mb-5 md:mb-6 font-['Cinzel_Decorative',serif]">
// // //             Our Collections
// // //           </h1>
// // //           <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[#c9a060] to-transparent mx-auto mb-4 sm:mb-5 md:mb-6" />
// // //           <p className="text-[#2c1810]/70 text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.5px] sm:tracking-[1px] font-['Cormorant_Garamond',serif] max-w-2xl mx-auto leading-relaxed">
// // //             Explore our curated collections, each telling a unique story of India's rich heritage and craftsmanship
// // //           </p>
// // //         </div>

// // //         {/* Men's Collections Section */}
// // //         <div className="mb-16 sm:mb-20">
// // //           <h2 className="text-[#2c1810] text-[24px] sm:text-[28px] md:text-[32px] tracking-[2px] mb-8 sm:mb-10 font-['Playfair_Display',serif] text-center">
// // //             Men's Collections
// // //           </h2>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
// // //             {menCollectionsDisplay.map((collection, index) => (
// // //               <motion.div
// // //                 key={`men-${collection.id}`}
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ delay: index * 0.1, duration: 0.5 }}
// // //                 className="group cursor-pointer"
// // //                 onClick={() => onCollectionSelect(collection.id)}
// // //               >
// // //                 <div className="relative overflow-hidden rounded-sm bg-[#2c1810]/5 aspect-[3/4] mb-4">
// // //                   {collection.imageUrl ? (
// // //                     <img
// // //                       src={collection.imageUrl}
// // //                       alt={collection.name}
// // //                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// // //                     />
// // //                   ) : (
// // //                     <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2c1810]/10 to-[#c9a060]/10">
// // //                       <div className="text-center p-6">
// // //                         <div className="w-20 h-20 mx-auto mb-4 border-2 border-dashed border-[#c9a060]/30 rounded-full flex items-center justify-center">
// // //                           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a060]/40">
// // //                             <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
// // //                             <circle cx="8.5" cy="8.5" r="1.5"/>
// // //                             <polyline points="21 15 16 10 5 21"/>
// // //                           </svg>
// // //                         </div>
// // //                         <p className="text-[10px] tracking-[1.5px] text-[#2c1810]/40 font-['Cormorant_Garamond',serif] uppercase">
// // //                           Image Upload Ready
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                   )}
                  
// // //                   {/* Overlay on hover */}
// // //                   <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/80 via-[#2c1810]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
// // //                     <button className="border-2 border-white text-white px-6 py-2 text-[10px] tracking-[2px] font-['Cormorant_Garamond',serif] rounded-sm transition-all duration-300 group-hover:bg-white group-hover:text-[#2c1810]">
// // //                       VIEW COLLECTION
// // //                     </button>
// // //                   </div>
// // //                 </div>
                
// // //                 <div className="text-center">
// // //                   <h3 className="text-[#2c1810] text-[16px] sm:text-[18px] tracking-[1px] mb-2 font-['Playfair_Display',serif]">
// // //                     {collection.name}
// // //                   </h3>
// // //                   <p className="text-[#2c1810]/60 text-[11px] sm:text-[12px] tracking-[0.5px] font-['Cormorant_Garamond',serif] leading-relaxed px-2">
// // //                     {collection.description}
// // //                   </p>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Women's Collections Section */}
// // //         <div className="mt-16 sm:mt-20">
// // //           <h2 className="text-[#2c1810] text-[24px] sm:text-[28px] md:text-[32px] tracking-[2px] mb-8 sm:mb-10 font-['Playfair_Display',serif] text-center">
// // //             Women's Collections
// // //           </h2>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
// // //             {womenCollectionsDisplay.map((collection, index) => (
// // //               <motion.div
// // //                 key={`women-${collection.id}`}
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ delay: index * 0.1, duration: 0.5 }}
// // //                 className="group cursor-pointer"
// // //                 onClick={() => {
// // //                   // Special handling for women's collections
// // //                   if (collection.category === 'women' || collection.category === 'both') {
// // //                     // For women's collections, we'll go directly to the women's catalogue
// // //                     // This should be handled by the parent component
// // //                     onCollectionSelect(collection.id);
// // //                   }
// // //                 }}
// // //               >
// // //                 <div className="relative overflow-hidden rounded-sm bg-[#2c1810]/5 aspect-[3/4] mb-4">
// // //                   {collection.imageUrl ? (
// // //                     <img
// // //                       src={collection.imageUrl}
// // //                       alt={collection.name}
// // //                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// // //                     />
// // //                   ) : (
// // //                     <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2c1810]/10 to-[#c9a060]/10">
// // //                       <div className="text-center p-6">
// // //                         <div className="w-20 h-20 mx-auto mb-4 border-2 border-dashed border-[#c9a060]/30 rounded-full flex items-center justify-center">
// // //                           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a060]/40">
// // //                             <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
// // //                             <circle cx="8.5" cy="8.5" r="1.5"/>
// // //                             <polyline points="21 15 16 10 5 21"/>
// // //                           </svg>
// // //                         </div>
// // //                         <p className="text-[10px] tracking-[1.5px] text-[#2c1810]/40 font-['Cormorant_Garamond',serif] uppercase">
// // //                           Image Upload Ready
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                   )}
                  
// // //                   {/* Overlay on hover */}
// // //                   <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/80 via-[#2c1810]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
// // //                     <button className="border-2 border-white text-white px-6 py-2 text-[10px] tracking-[2px] font-['Cormorant_Garamond',serif] rounded-sm transition-all duration-300 group-hover:bg-white group-hover:text-[#2c1810]">
// // //                       VIEW COLLECTION
// // //                     </button>
// // //                   </div>
// // //                 </div>
                
// // //                 <div className="text-center">
// // //                   <h3 className="text-[#2c1810] text-[16px] sm:text-[18px] tracking-[1px] mb-2 font-['Playfair_Display',serif]">
// // //                     {collection.name}
// // //                   </h3>
// // //                   <p className="text-[#2c1810]/60 text-[11px] sm:text-[12px] tracking-[0.5px] font-['Cormorant_Garamond',serif] leading-relaxed px-2">
// // //                     {collection.description}
// // //                   </p>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Footer */}
// // //       <ExperienceFooterWrapper>
// // //         <Footer 
// // //           onOurStoryClick={onOurStoryClick} 
// // //           onCraftsmanshipClick={onCraftsmanshipClick}
// // //           onCollectionClick={onCollectionClick}
// // //           onHomeClick={onBack}
// // //         />
// // //       </ExperienceFooterWrapper>
// // //     </div>
// // //   );
// // // }
// // import { ArrowLeft } from 'lucide-react';
// // import { Navigation } from './Navigation';
// // import { motion } from 'motion/react';
// // import { Footer } from './Footer';
// // import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';
// // import { useState, useEffect } from 'react';

// // interface OurCollectionPageProps {
// //   onBack: (event?: React.MouseEvent) => void;
// //   cartCount: number;
// //   onCartClick: () => void;
// //   onCollectionSelect: (collectionId: string) => void;
// //   onCollectionClick?: (event?: React.MouseEvent) => void;
// //   onOurStoryClick?: (event?: React.MouseEvent) => void;
// //   onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
// // }

// // interface Product {
// //   _id: string;
// //   name: string;
// //   category: string;
// //   collection: string;
// //   subCategory: string;
// //   price: number;
// //   discount: number;
// //   description: string;
// //   imageUrls: string[];
// // }

// // export function OurCollectionPage({ 
// //   onBack, 
// //   cartCount, 
// //   onCartClick, 
// //   onCollectionSelect,
// //   onCollectionClick,
// //   onOurStoryClick,
// //   onCraftsmanshipClick 
// // }: OurCollectionPageProps) {
// //   const [collections, setCollections] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   console.log(collections)
// //   useEffect(() => {
// //     fetchCollections();
// //   }, []);

// //   const fetchCollections = async () => {
// //     try {
// //       const response = await fetch('https://api.sohwais.com/api/products/category/Men');
// //       const data = await response.json();
// //       console.log("data", data)
// //       if (data.success && data.data) {  
// //         // Get unique collections from products
// //         const uniqueCollections = new Map();
        
// //         data.data.forEach((product: Product) => {
// //           const collectionName = product.collection || 'General Collection';
// //           if (!uniqueCollections.has(collectionName)) {
// //             uniqueCollections.set(collectionName, {
// //               id: collectionName.toLowerCase().replace(/\s+/g, '-'),
// //               name: collectionName,
// //               imageUrl: product.imageUrls?.[0] || null,
// //               description: `${collectionName} - Premium men's wear collection`
// //             });
// //           }
// //         });
        
// //         setCollections(Array.from(uniqueCollections.values()));
// //       }
// //     } catch (error) {
// //       console.error('Error:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-[#fdfcf9] flex items-center justify-center">
// //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c9a060]"></div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-[#fdfcf9]">
// //       <div className="fixed top-0 left-0 right-0 z-40">
// //         <Navigation 
// //           cartCount={cartCount} 
// //           onCartClick={onCartClick} 
// //           mode="light"
// //           onCollectionClick={onCollectionClick}
// //           onOurStoryClick={onOurStoryClick}
// //           onCraftsmanshipClick={onCraftsmanshipClick}
// //         />
// //       </div>

// //       <div className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-20">
// //         <button
// //           onClick={onBack}
// //           className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors mb-8 sm:mb-10 md:mb-12 font-['Cormorant_Garamond',serif] tracking-[1.5px] text-[10px] sm:text-[11px]"
// //         >
// //           <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
// //           <span className="hidden sm:inline">BACK</span>
// //         </button>

// //         <div className="text-center mb-10 sm:mb-12 md:mb-16">
// //           <h1 className="text-[#2c1810] text-[32px] sm:text-[42px] md:text-[56px] tracking-[2.5px] sm:tracking-[3.5px] md:tracking-[4.48px] mb-4 sm:mb-5 md:mb-6 font-['Cinzel_Decorative',serif]">
// //             Men's Collections
// //           </h1>
// //           <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[#c9a060] to-transparent mx-auto mb-4 sm:mb-5 md:mb-6" />
// //           <p className="text-[#2c1810]/70 text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.5px] sm:tracking-[1px] font-['Cormorant_Garamond',serif] max-w-2xl mx-auto leading-relaxed">
// //             Explore our exclusive men's collections from the API
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
// //           {collections.map((collection, index) => (
// //             <motion.div
// //               key={collection.id}
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: index * 0.1, duration: 0.5 }}
// //               className="group cursor-pointer"
// //               onClick={() => onCollectionSelect(collection.id)}
// //             >
// //               <div className="relative overflow-hidden rounded-sm bg-[#2c1810]/5 aspect-[3/4] mb-4">
// //                 {collection.imageUrl ? (
// //                   <img
// //                     src={collection.imageUrl}
// //                     alt={collection.name}
// //                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// //                   />
// //                 ) : (
// //                   <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2c1810]/10 to-[#c9a060]/10">
// //                     <div className="text-center p-6">
// //                       <div className="w-20 h-20 mx-auto mb-4 border-2 border-dashed border-[#c9a060]/30 rounded-full flex items-center justify-center">
// //                         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a060]/40">
// //                           <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
// //                           <circle cx="8.5" cy="8.5" r="1.5"/>
// //                           <polyline points="21 15 16 10 5 21"/>
// //                         </svg>
// //                       </div>
// //                       <p className="text-[10px] tracking-[1.5px] text-[#2c1810]/40 font-['Cormorant_Garamond',serif] uppercase">
// //                         No Image
// //                       </p>
// //                     </div>
// //                   </div>
// //                 )}
                
// //                 <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/80 via-[#2c1810]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
// //                   <button className="border-2 border-white text-white px-6 py-2 text-[10px] tracking-[2px] font-['Cormorant_Garamond',serif] rounded-sm transition-all duration-300 group-hover:bg-white group-hover:text-[#2c1810]">
// //                     VIEW COLLECTION
// //                   </button>
// //                 </div>
// //               </div>
              
// //               <div className="text-center">
// //                 <h3 className="text-[#2c1810] text-[16px] sm:text-[18px] tracking-[1px] mb-2 font-['Playfair_Display',serif]">
// //                   {collection.name}
// //                 </h3>
// //                 <p className="text-[#2c1810]/60 text-[11px] sm:text-[12px] tracking-[0.5px] font-['Cormorant_Garamond',serif] leading-relaxed px-2">
// //                   {collection.description}
// //                 </p>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       <ExperienceFooterWrapper>
// //         <Footer 
// //           onOurStoryClick={onOurStoryClick} 
// //           onCraftsmanshipClick={onCraftsmanshipClick}
// //           onCollectionClick={onCollectionClick}
// //           onHomeClick={onBack}
// //         />
// //       </ExperienceFooterWrapper>
// //     </div>
// //   );
// // }
// // import { ArrowLeft } from 'lucide-react';
// // import { Navigation } from './Navigation';
// // import { motion } from 'motion/react';
// // import { Footer } from './Footer';
// // import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';
// // import { useEffect, useState } from 'react';

// // /* ===================== TYPES ===================== */

// // interface OurCollectionPageProps {
// //   onBack: (event?: React.MouseEvent) => void;
// //   cartCount: number;
// //   onCartClick: () => void;
// //   onCollectionSelect: (collectionId: string) => void;
// //   onCollectionClick?: (event?: React.MouseEvent) => void;
// //   onOurStoryClick?: (event?: React.MouseEvent) => void;
// //   onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
// // }

// // interface Product {
// //   _id: string;
// //   name: string;
// //   category: string;
// //   collection?: string;
// //   subCategory: string;
// //   price: number;
// //   discount: number;
// //   description: string;
// //   images?: {
// //     url: string;
// //     public_id: string;
// //   }[];
// // }

// // interface Collection {
// //   id: string;
// //   name: string;
// //   imageUrl: string | null;
// //   description: string;
// // }

// // /* ===================== COMPONENT ===================== */

// // export function OurCollectionPage({
// //   onBack,
// //   cartCount,
// //   onCartClick,
// //   onCollectionSelect,
// //   onCollectionClick,
// //   onOurStoryClick,
// //   onCraftsmanshipClick,
// // }: OurCollectionPageProps) {
// //   const [collections, setCollections] = useState<Collection[]>([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetchCollections();
// //   }, []);

// //   /* ===================== API ===================== */

// //   const fetchCollections = async () => {
// //     try {
// //       const response = await fetch(
// //         'https://api.sohwais.com/api/products/category/Men'
// //       );
// //       const result = await response.json();

// //       if (result.success && Array.isArray(result.data)) {
// //         const uniqueCollections = new Map<string, Collection>();

// //         result.data.forEach((product: Product) => {
// //           const collectionName =
// //             product.collection || 'General Collection';

// //           if (!uniqueCollections.has(collectionName)) {
// //             uniqueCollections.set(collectionName, {
// //               id: collectionName.toLowerCase().replace(/\s+/g, '-'),
// //               name: collectionName,
// //               imageUrl: product.images?.[0]?.url || null,
// //               description: `${collectionName} – Premium men's wear collection`,
// //             });
// //           }
// //         });

// //         setCollections(Array.from(uniqueCollections.values()));
// //       }
// //     } catch (error) {
// //       console.error('Error fetching collections:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   /* ===================== LOADER ===================== */

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-[#fdfcf9] flex items-center justify-center">
// //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c9a060]" />
// //       </div>
// //     );
// //   }

// //   /* ===================== UI ===================== */

// //   return (
// //     <div className="min-h-screen bg-[#fdfcf9]">
// //       {/* NAVBAR */}
// //       <div className="fixed top-0 left-0 right-0 z-40">
// //         <Navigation
// //           cartCount={cartCount}
// //           onCartClick={onCartClick}
// //           mode="light"
// //           onCollectionClick={onCollectionClick}
// //           onOurStoryClick={onOurStoryClick}
// //           onCraftsmanshipClick={onCraftsmanshipClick}
// //         />
// //       </div>

// //       {/* CONTENT */}
// //       <div className="relative pt-24 md:pt-32 pb-20 px-4 sm:px-8 lg:px-20">
// //         {/* BACK */}
// //         <button
// //           onClick={onBack}
// //           className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] mb-12 text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif]"
// //         >
// //           <ArrowLeft className="w-4 h-4" />
// //           BACK
// //         </button>

// //         {/* HEADER */}
// //         <div className="text-center mb-16">
// //           <h1 className="text-[#2c1810] text-[36px] sm:text-[48px] md:text-[56px] tracking-[4px] mb-6 font-['Cinzel_Decorative',serif]">
// //             Men's Collections
// //           </h1>
// //           <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a060] to-transparent mx-auto mb-6" />
// //           <p className="text-[#2c1810]/70 text-[13px] tracking-[1px] max-w-2xl mx-auto font-['Cormorant_Garamond',serif]">
// //             Discover handcrafted collections inspired by heritage artistry
// //           </p>
// //         </div>

// //         {/* GRID */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
// //           {collections.map((collection, index) => (
// //             <motion.div
// //               key={collection.id}
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: index * 0.1, duration: 0.5 }}
// //               // onClick={() => onCollectionSelect(collection.id)}
// //               className="group cursor-pointer"
// //             >
// //               {/* IMAGE */}
// //               <div className="relative aspect-[3/4] overflow-hidden bg-[#2c1810]/5 mb-4">
// //                 {collection.imageUrl ? (
// //                   <img
// //                     src={collection.imageUrl}
// //                     alt={collection.name}
// //                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// //                   />
// //                 ) : (
// //                   <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2c1810]/10 to-[#c9a060]/10">
// //                     <span className="text-[#2c1810]/40 text-xs tracking-[2px]">
// //                       NO IMAGE
// //                     </span>
// //                   </div>
// //                 )}

// //                 {/* HOVER */}
// //                 {/* <div className="absolute inset-0 bg-[#2c1810]/70 opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-8">
// //                   <span className="border-2 border-white text-white px-6 py-2 text-[10px] tracking-[2px] font-['Cormorant_Garamond',serif]">
// //                     VIEW COLLECTION
// //                   </span>
// //                 </div> */}
// //               </div>

// //               {/* TEXT */}
// //               <div className="text-center">
// //                 <h3 className="text-[#2c1810] text-[18px] tracking-[1px] mb-2 font-['Playfair_Display',serif]">
// //                   {collection.name}
// //                 </h3>
// //                 <p className="text-[#2c1810]/60 text-[12px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
// //                   {collection.description}
// //                 </p>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* FOOTER */}
// //       <ExperienceFooterWrapper>
// //         <Footer
// //           onOurStoryClick={onOurStoryClick}
// //           onCraftsmanshipClick={onCraftsmanshipClick}
// //           onCollectionClick={onCollectionClick}
// //           onHomeClick={onBack}
// //         />
// //       </ExperienceFooterWrapper>
// //     </div>
// //   );
// // }

// import { ArrowLeft } from 'lucide-react';
// import { Navigation } from './Navigation';
// import { motion } from 'motion/react';
// import { Footer } from './Footer';
// import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';
// import { useEffect, useState } from 'react';

// /* ===================== TYPES ===================== */

// interface OurCollectionPageProps {
//   onBack: (event?: React.MouseEvent) => void;
//   cartCount: number;
//   onCartClick: () => void;
//   onCollectionSelect: (collectionId: string) => void; // 🔥 IMPORTANT
//   onCollectionClick?: (event?: React.MouseEvent) => void;
//   onOurStoryClick?: (event?: React.MouseEvent) => void;
//   onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
// }

// interface Product {
//   _id: string;
//   name: string;
//   category: string;
//   collection?: string;
//   subCategory: string;
//   price: number;
//   discount: number;
//   description: string;
//   images?: {
//     url: string;
//     public_id: string;
//   }[];
// }

// interface Collection {
//   id: string;
//   name: string;
//   imageUrl: string | null;
//   description: string;
// }

// /* ===================== COMPONENT ===================== */

// export function OurCollectionPage({
//   onBack,
//   cartCount,
//   onCartClick,
//   onCollectionSelect,
//   onCollectionClick,
//   onOurStoryClick,
//   onCraftsmanshipClick,
// }: OurCollectionPageProps) {
//   const [collections, setCollections] = useState<Collection[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchCollections();
//   }, []);

//   /* ===================== API ===================== */

//   const fetchCollections = async () => {
//     try {
//       const response = await fetch(
//         'https://api.sohwais.com/api/products/category/Men'
//       );
//       const result = await response.json();

//       if (result.success && Array.isArray(result.data)) {
//         const uniqueCollections = new Map<string, Collection>();

//         result.data.forEach((product: Product) => {
//           const collectionName =
//             product.collection || 'General Collection';

//           if (!uniqueCollections.has(collectionName)) {
//             uniqueCollections.set(collectionName, {
//               id: collectionName.toLowerCase().replace(/\s+/g, '-'),
//               name: collectionName,
//               imageUrl: product.images?.[0]?.url || null,
//               description: `${collectionName} – Premium men's wear collection`,
//             });
//           }
//         });

//         setCollections(Array.from(uniqueCollections.values()));
//       }
//     } catch (error) {
//       console.error('Error fetching collections:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ===================== LOADER ===================== */

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#fdfcf9] flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c9a060]" />
//       </div>
//     );
//   }

//   /* ===================== UI ===================== */

//   return (
//     <div className="min-h-screen bg-[#fdfcf9]">
//       {/* NAVBAR */}
//       <div className="fixed top-0 left-0 right-0 z-40">
//         <Navigation
//           cartCount={cartCount}
//           onCartClick={onCartClick}
//           mode="light"
//           onCollectionClick={onCollectionClick}
//           onOurStoryClick={onOurStoryClick}
//           onCraftsmanshipClick={onCraftsmanshipClick}
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="relative pt-24 md:pt-32 pb-20 px-4 sm:px-8 lg:px-20">
//         {/* BACK */}
//         <button
//           onClick={onBack}
//           className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] mb-12 text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif]"
//         >
//           <ArrowLeft className="w-4 h-4" />
//           BACK
//         </button>

//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <h1 className="text-[#2c1810] text-[36px] sm:text-[48px] md:text-[56px] tracking-[4px] mb-6 font-['Cinzel_Decorative',serif]">
//             Men's Collections
//           </h1>
//           <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a060] to-transparent mx-auto mb-6" />
//           <p className="text-[#2c1810]/70 text-[13px] tracking-[1px] max-w-2xl mx-auto font-['Cormorant_Garamond',serif]">
//             Discover handcrafted collections inspired by heritage artistry
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {collections.map((collection, index) => (
//             <motion.div
//               key={collection.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               onClick={() => onCollectionSelect(collection.id)} // 🔥 FLOW ENABLED
//               className="group cursor-pointer"
//             >
//               {/* IMAGE */}
//               <div className="relative aspect-[3/4] overflow-hidden bg-[#2c1810]/5 mb-4">
//                 {collection.imageUrl ? (
//                   <img
//                     src={collection.imageUrl}
//                     alt={collection.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2c1810]/10 to-[#c9a060]/10">
//                     <span className="text-[#2c1810]/40 text-xs tracking-[2px]">
//                       NO IMAGE
//                     </span>
//                   </div>
//                 )}

//                 {/* HOVER CTA */}
//                 {/* <div className="absolute inset-0 bg-[#2c1810]/70 opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-8">
//                   <span className="border-2 border-white text-white px-6 py-2 text-[10px] tracking-[2px] font-['Cormorant_Garamond',serif]">
//                     VIEW COLLECTION
//                   </span>
//                 </div> */}
                
//               </div>

//               {/* TEXT */}
//               <div className="text-center">
//                 <h3 className="text-[#2c1810] text-[18px] tracking-[1px] mb-2 font-['Playfair_Display',serif]">
//                   {collection.name}
//                 </h3>
//                 <p className="text-[#2c1810]/60 text-[12px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
//                   {collection.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* FOOTER */}
//       <ExperienceFooterWrapper>
//         <Footer
//           onOurStoryClick={onOurStoryClick}
//           onCraftsmanshipClick={onCraftsmanshipClick}
//           onCollectionClick={onCollectionClick}
//           onHomeClick={onBack}
//         />
//       </ExperienceFooterWrapper>
//     </div>
//   );
// }

import { ArrowLeft } from 'lucide-react';
import { Navigation } from './Navigation';
import { motion } from 'motion/react';
import { Footer } from './Footer';
import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';
import { useState, useEffect } from 'react';
import { ProductDetailPage, CartItem } from './ProductDetailPage';

interface OurCollectionPageProps {
  onBack: (event?: React.MouseEvent) => void;
  cartCount: number;
  onCartClick: () => void;
  onCollectionSelect: (collectionId: string) => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
  onAddToCart: (item: CartItem) => void;
}

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  collection?: string;
  subCategory: string;
  description: string;
  discount: number;
  images?: { url: string }[];
}

export function OurCollectionPage({ 
  onBack, 
  cartCount, 
  onCartClick, 
  onCollectionSelect,
  onCollectionClick,
  onOurStoryClick,
  onCraftsmanshipClick,
  onAddToCart
}: OurCollectionPageProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://api.sohwais.com/api/products/category/Men');
      const data = await response.json();
      
      if (data.success && data.data) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // PRODUCT DETAIL PAGE
  if (selectedProduct) {
    const product = products.find(p => p._id === selectedProduct);
    if (product) {
      return (
        <ProductDetailPage
          productId={product._id}
          productName={product.name}
          collectionName={product.collection || "Men's Collection"}
          price={product.price}
          gender="men"
          onBack={() => setSelectedProduct(null)}
          cartCount={cartCount}
          onCartClick={onCartClick}
          onAddToCart={onAddToCart}
        />
      );
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fdfcf9] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c9a060]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfcf9]">
      
      <div className="fixed top-0 left-0 right-0 z-40">
        <Navigation 
          cartCount={cartCount} 
          onCartClick={onCartClick} 
          mode="light"
          onCollectionClick={onCollectionClick}
          onOurStoryClick={onOurStoryClick}
          onCraftsmanshipClick={onCraftsmanshipClick}
        />
      </div>

      <div className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors mb-8 sm:mb-10 md:mb-12 font-['Cormorant_Garamond',serif] tracking-[1.5px] text-[10px] sm:text-[11px]"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">BACK</span>
        </button>

        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-[#2c1810] text-[32px] sm:text-[42px] md:text-[56px] tracking-[2.5px] sm:tracking-[3.5px] md:tracking-[4.48px] mb-4 sm:mb-5 md:mb-6 font-['Cinzel_Decorative',serif]">
            Men's Collections
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[#c9a060] to-transparent mx-auto mb-4 sm:mb-5 md:mb-6" />
          <p className="text-[#2c1810]/70 text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.5px] sm:tracking-[1px] font-['Cormorant_Garamond',serif] max-w-2xl mx-auto leading-relaxed">
            Browse our exclusive men's wear collection
          </p>
        </div>

        {/* DIRECT PRODUCT GRID - NO COLLECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(product._id)}
            >
              <div className="relative overflow-hidden rounded-sm bg-[#2c1810]/5 aspect-[3/4] mb-4">
                {product.images?.[0]?.url ? (
                  <img
                    src={product.images[0].url}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2c1810]/10 to-[#c9a060]/10">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 mx-auto mb-4 border-2 border-dashed border-[#c9a060]/30 rounded-full flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a060]/40">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                          <polyline points="21 15 16 10 5 21"/>
                        </svg>
                      </div>
                      <p className="text-[10px] tracking-[1.5px] text-[#2c1810]/40 font-['Cormorant_Garamond',serif] uppercase">
                        No Image
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Discount Badge */}
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] px-2 py-1 tracking-[1px] font-['Cormorant_Garamond',serif]">
                    {product.discount}% OFF
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/80 via-[#2c1810]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <button className="border-2 border-white text-white px-6 py-2 text-[10px] tracking-[2px] font-['Cormorant_Garamond',serif] rounded-sm transition-all duration-300 group-hover:bg-white group-hover:text-[#2c1810]">
                    VIEW PRODUCT
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-[#2c1810] text-[14px] sm:text-[16px] tracking-[1px] mb-2 font-['Playfair_Display',serif] truncate">
                  {product.name}
                </h3>
                <p className="text-[#2c1810]/60 text-[11px] sm:text-[12px] tracking-[0.5px] font-['Cormorant_Garamond',serif] mb-2 truncate">
                  {product.collection || "Men's Collection"}
                </p>
                <div className="flex items-center justify-center gap-2">
                  {product.discount > 0 ? (
                    <>
                      <span className="text-[#2c1810] text-[14px] sm:text-[16px] font-medium">
                        ₹{Math.round(product.price * (1 - product.discount/100)).toLocaleString('en-IN')}
                      </span>
                      <span className="text-[#2c1810]/50 text-[12px] line-through">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                    </>
                  ) : (
                    <span className="text-[#2c1810] text-[14px] sm:text-[16px] font-medium">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#2c1810]/60 text-[14px] sm:text-[16px] font-['Cormorant_Garamond',serif]">
              No products found in men's collection
            </p>
          </div>
        )}
      </div>

      <ExperienceFooterWrapper>
        <Footer 
          onOurStoryClick={onOurStoryClick} 
          onCraftsmanshipClick={onCraftsmanshipClick}
          onCollectionClick={onCollectionClick}
          onHomeClick={onBack}
        />
      </ExperienceFooterWrapper>
    </div>
  );
}