
// // import { useState, useEffect } from 'react';
// // import { Navigation } from './components/Navigation';
// // import { HeroSection } from './components/HeroSection';
// // import { CollectionSection } from './components/CollectionSection';
// // import { ArtisanSection } from './components/ArtisanSection';
// // import { CraftsmanshipSection } from './components/CraftsmanshipSection';
// // import { ExperienceSection } from './components/ExperienceSection';
// // import { ExperienceFooterWrapper } from './components/ExperienceFooterWrapper';
// // import { Footer } from './components/Footer';
// // import { OurCollectionPage } from './components/OurCollectionPage';
// // import {CollectionCataloguePage}  from './components/CollectionCataloguePage';
// // import { CollectionsPage } from './components/CollectionsPage';
// // import { OurStoryPage } from './components/OurStoryPage';
// // import { CraftsmanshipPage } from './components/CraftsmanshipPage';
// // import { CartOverlay } from './components/CartOverlay';
// // import { CartItem, ProductDetailPage } from './components/ProductDetailPage';
// // import { PageTransition } from './components/PageTransition';
// // import { LoadingAnimation } from './components/LoadingAnimation';
// // import TraditionalProducts from './components/small/TraditionalProducts';
// // import CollectionCard from './components/CollectionCard';
// // import GenderCollections from './components/GenderCollection';
// // import CheckoutPage from './components/CheckoutPage';
// // import MensCategory from './components/categoty/MensCategory';

// // type PageType = 'home' | 'collections' | 'ourStory' | 'craftsmanship' | 'menCollections' | 'womenCatalogue' | 'collectionCatalogue' | 'checkout';

// // export default function App() {
// //   const [currentPage, setCurrentPage] = useState<PageType>('home');
// //   const [selectedCollection, setSelectedCollection] = useState<{id: string, name: string} | null>(null);
// //   const [cartItems, setCartItems] = useState<CartItem[]>([]);
// //   const [isCartOpen, setIsCartOpen] = useState(false);
// //   const [isTransitioning, setIsTransitioning] = useState(false);
// //   const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | undefined>();
// //   const [showLoading, setShowLoading] = useState(true);
// //   const [hasLoadedBefore, setHasLoadedBefore] = useState(false);

// //   // Set page title
// //   useEffect(() => {
// //     document.title = 'Sohwais - The museum that sells';
// //   }, []);

// //   useEffect(() => {
// //     // Check if user has visited before in this session
// //     const hasVisited = sessionStorage.getItem('sohwais_visited');
    
// //     if (hasVisited) {
// //       setShowLoading(false);
// //       setHasLoadedBefore(true);
// //     } else {
// //       // Mark as visited
// //       sessionStorage.setItem('sohwais_visited', 'true');
// //     }
// //   }, []);

// //   const handleLoadingComplete = () => {
// //     setShowLoading(false);
// //     setHasLoadedBefore(true);
// //   };

// //   const handleNavigation = (page: PageType, event?: React.MouseEvent) => {
// //     // Prevent any default behavior that might cause scroll
// //     if (event) {
// //       event.preventDefault();
// //       setClickPosition({ x: event.clientX, y: event.clientY });
// //     }

// //     // Start transition
// //     setIsTransitioning(true);

// //     // Change page immediately for back navigation, with minimal delay for forward navigation
// //     const pageChangeDelay = 300; // Reduced from 800ms
// //     setTimeout(() => {
// //       setCurrentPage(page);
// //       // Scroll to top AFTER page change to ensure it works correctly
// //       setTimeout(() => {
// //         window.scrollTo({ top: 0, behavior: 'instant' });
// //       }, 50);
// //     }, pageChangeDelay);

// //     // Reset transition state after animation completes
// //     setTimeout(() => {
// //       setIsTransitioning(false);
// //     }, pageChangeDelay + 600);
// //   };

// //   const navigateToCollections = (event?: React.MouseEvent) => {
// //     handleNavigation('collections', event);
// //   };

// //   const navigateToHome = (event?: React.MouseEvent) => {
// //     handleNavigation('home', event);
// //   };

// //   const navigateToOurStory = (event?: React.MouseEvent) => {
// //     handleNavigation('ourStory', event);
// //   };

// //   const navigateToCraftsmanship = (event?: React.MouseEvent) => {
// //     handleNavigation('craftsmanship', event);
// //   };

// //   // Men's collection overview page
// //   const navigateToMensCollections = (event?: React.MouseEvent) => {
// //     handleNavigation('menCollections', event);
// //   };

// //   // Women's direct catalogue page  
// //   const navigateToWomensCatalogue = (event?: React.MouseEvent) => {
// //     setSelectedCollection({ id: 'womens', name: "Women's Collection" });
// //     handleNavigation('womenCatalogue', event);
// //   };

// //   // Navigate to checkout page
// //   const navigateToCheckout = (event?: React.MouseEvent) => {
// //     handleNavigation('checkout', event);
// //   };

// //   // Handle collection selection from men's overview page
// //   const handleCollectionSelect = (collectionId: string) => {
// //     const collectionNames: Record<string, string> = {
// //       'madhubani': 'Madhubani Collection',
// //       'sujini': 'Sujini Collection',
// //       'marble': 'Marble Collection',
// //       'nakashi': 'Nakashi Collection',
// //       'majestic-linen': 'The Majestic Linen',
// //       'batik-archive': 'The Batik Archive',
// //       'explore-all': 'Craft Exploration'
// //     };
    
// //     setSelectedCollection({ 
// //       id: collectionId, 
// //       name: collectionNames[collectionId] || collectionId 
// //     });
// //     setCurrentPage('collectionCatalogue');
// //   };

// //   const handleBackFromMensCollections = (event?: React.MouseEvent) => {
// //     navigateToHome(event);
// //   };

// //   const handleBackFromCatalogue = (event?: React.MouseEvent) => {
// //     // Prevent default behavior
// //     if (event) {
// //       event.preventDefault();
// //     }
    
// //     setSelectedCollection(null);
    
// //     if (currentPage === 'womenCatalogue') {
// //       // Go back to home with transition
// //       navigateToHome(event);
// //     } else {
// //       // Go back to men's collections page directly (no transition needed since it's the same flow)
// //       window.scrollTo({ top: 0, behavior: 'instant' });
// //       setCurrentPage('menCollections');
// //     }
// //   };

// //   const handleBackFromCheckout = (event?: React.MouseEvent) => {
// //     navigateToHome(event);
// //   };

// //   const handleAddToCart = (item: CartItem) => {
// //     setCartItems(prev => {
// //       // Check if item with same id and size already exists
// //       const existingItemIndex = prev.findIndex(
// //         cartItem => cartItem.id === item.id && cartItem.size === item.size
// //       );

// //       if (existingItemIndex > -1) {
// //         // Update quantity of existing item
// //         const updated = [...prev];
// //         updated[existingItemIndex].quantity += item.quantity;
// //         return updated;
// //       } else {
// //         // Add new item
// //         return [...prev, item];
// //       }
// //     });
    
// //     // Auto-open cart briefly to show the item was added
// //     setIsCartOpen(true);
// //     setTimeout(() => setIsCartOpen(false), 2000);
// //   };

// //   const handleUpdateQuantity = (id: string, newQuantity: number) => {
// //     if (newQuantity === 0) {
// //       setCartItems(prev => prev.filter(item => item.id !== id));
// //     } else {
// //       setCartItems(prev =>
// //         prev.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
// //       );
// //     }
// //   };

// //   const handleRemoveItem = (id: string) => {
// //     setCartItems(prev => prev.filter(item => item.id !== id));
// //   };

// //   const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

// //   // CHECKOUT PAGE
// //   if (currentPage === 'checkout') {
// //     return (
// //       <>
// //         <CheckoutPage
// //           cartItems={cartItems}
// //           onBack={handleBackFromCheckout}
// //         />
// //         <PageTransition
// //           isTransitioning={isTransitioning}
// //           clickPosition={clickPosition}
// //         />
// //       </>
// //     );
// //   }

// //   // REST OF YOUR PAGES REMAIN THE SAME...
// //   if (currentPage === 'collections') {
// //     return (
// //       <>
// //         <CollectionsPage
// //           onBack={navigateToHome}
// //           cartCount={cartCount}
// //           onCartClick={() => setIsCartOpen(true)}
// //           onAddToCart={handleAddToCart}
// //           onCollectionClick={navigateToCollections}
// //           onOurStoryClick={navigateToOurStory}
// //           onCraftsmanshipClick={navigateToCraftsmanship}
// //         />
// //         <CartOverlay
// //           isOpen={isCartOpen}
// //           onClose={() => setIsCartOpen(false)}
// //           cartItems={cartItems}
// //           onUpdateQuantity={handleUpdateQuantity}
// //           onRemoveItem={handleRemoveItem}
// //           onCheckout={navigateToCheckout} // Add this prop
// //         />
// //         <PageTransition
// //           isTransitioning={isTransitioning}
// //           clickPosition={clickPosition}
// //         />
// //       </>
// //     );
// //   }

// //   if (currentPage === 'ourStory') {
// //     return (
// //       <>
// //         <OurStoryPage
// //           onBack={navigateToHome}
// //           cartCount={cartCount}
// //           onCartClick={() => setIsCartOpen(true)}
// //           onOurStoryClick={navigateToOurStory}
// //           onCollectionClick={navigateToCollections}
// //           onCraftsmanshipClick={navigateToCraftsmanship}
// //         />
// //         <CartOverlay
// //           isOpen={isCartOpen}
// //           onClose={() => setIsCartOpen(false)}
// //           cartItems={cartItems}
// //           onUpdateQuantity={handleUpdateQuantity}
// //           onRemoveItem={handleRemoveItem}
// //           onCheckout={navigateToCheckout} // Add this prop
// //         />
// //         <PageTransition
// //           isTransitioning={isTransitioning}
// //           clickPosition={clickPosition}
// //         />
// //       </>
// //     );
// //   }

// //   if (currentPage === 'craftsmanship') {
// //     return (
// //       <>
// //         <CraftsmanshipPage
// //           onBack={navigateToHome}
// //           cartCount={cartCount}
// //           onCartClick={() => setIsCartOpen(true)}
// //           onCraftsmanshipClick={navigateToCraftsmanship}
// //         />
// //         <CartOverlay
// //           isOpen={isCartOpen}
// //           onClose={() => setIsCartOpen(false)}
// //           cartItems={cartItems}
// //           onUpdateQuantity={handleUpdateQuantity}
// //           onRemoveItem={handleRemoveItem}
// //           onCheckout={navigateToCheckout} // Add this prop
// //         />
// //         <PageTransition
// //           isTransitioning={isTransitioning}
// //           clickPosition={clickPosition}
// //         />
// //       </>
// //     );
// //   }

// //   if (currentPage === 'menCollections') {
// //     return (
// //       <>
// //         <OurCollectionPage
// //           onBack={handleBackFromMensCollections}
// //           cartCount={cartCount}
// //           onCartClick={() => setIsCartOpen(true)}
// //           onCollectionSelect={handleCollectionSelect}
// //           onCollectionClick={navigateToCollections}
// //           onOurStoryClick={navigateToOurStory}
// //           onCraftsmanshipClick={navigateToCraftsmanship}
// //         />
// //         <CartOverlay
// //           isOpen={isCartOpen}
// //           onClose={() => setIsCartOpen(false)}
// //           cartItems={cartItems}
// //           onUpdateQuantity={handleUpdateQuantity}
// //           onRemoveItem={handleRemoveItem}
// //           onCheckout={navigateToCheckout} // Add this prop
// //         />
// //         <PageTransition
// //           isTransitioning={isTransitioning}
// //           clickPosition={clickPosition}
// //         />
// //       </>
// //     );
// //   }
// //   // App.tsx में OurCollectionPage use करते समय:
// // // if (currentPage === 'menCollections') {
// // //   return (
// // //     <>
// // //       <OurCollectionPage
// // //         onBack={handleBackFromMensCollections}
// // //         cartCount={cartCount}
// // //         onCartClick={() => setIsCartOpen(true)}
// // //         onCollectionSelect={handleCollectionSelect}
// // //         onCollectionClick={navigateToCollections}
// // //         onOurStoryClick={navigateToOurStory}
// // //         onCraftsmanshipClick={navigateToCraftsmanship}
// // //         onAddToCart={handleAddToCart} // ये नया prop add करो
// // //       />
// // //       {/* rest of the code... */}
// // //     </>
// // //   );
// // // }

// //   if ((currentPage === 'womenCatalogue' || currentPage === 'collectionCatalogue') && selectedCollection) {
// //     return (
// //       <>
// //         <CollectionCataloguePage
// //           collectionId={selectedCollection.id}
// //           collectionName={selectedCollection.name}
// //           gender={currentPage === 'womenCatalogue' ? 'women' : 'men'}
// //           onBack={handleBackFromCatalogue}
// //           cartCount={cartCount}
// //           onCartClick={() => setIsCartOpen(true)}
// //           onAddToCart={handleAddToCart}
// //           onCollectionClick={navigateToCollections}
// //           onOurStoryClick={navigateToOurStory}
// //           onCraftsmanshipClick={navigateToCraftsmanship}
// //         />
// //         <CartOverlay
// //           isOpen={isCartOpen}
// //           onClose={() => setIsCartOpen(false)}
// //           cartItems={cartItems}
// //           onUpdateQuantity={handleUpdateQuantity}
// //           onRemoveItem={handleRemoveItem}
// //           onCheckout={navigateToCheckout} // Add this prop
// //         />
// //         <PageTransition
// //           isTransitioning={isTransitioning}
// //           clickPosition={clickPosition}
// //         />
// //       </>
// //     );
// //   }

// //   // HOME PAGE (default)
// //   return (
// //     <div className="min-h-screen bg-white">
// //       <div className="relative">
// //         <HeroSection onExploreClick={navigateToCollections} />
// //         <div className="absolute top-0 left-0 right-0 z-10">
// //           <Navigation 
// //             cartCount={cartCount} 
// //             onCartClick={() => setIsCartOpen(true)} 
// //             onCollectionClick={navigateToCollections}
// //             onOurStoryClick={navigateToOurStory}
// //             onCraftsmanshipClick={navigateToCraftsmanship}
// //           />
// //         </div>
// //       </div>
// //       {/* <CollectionSection 
// //         onMensClick={navigateToMensCollections}
// //         onWomensClick={navigateToWomensCatalogue}
// //       /> */}
// //       <CollectionSection 
// //   onMensClick={navigateToCollections}
// //   onWomensClick={navigateToWomensCatalogue}
// // />
// //       {/* <GenderCollections/> */}
// //       <ArtisanSection onCraftsmanshipClick={navigateToCraftsmanship} />
// //       <CraftsmanshipSection />
// //       {/* <div>
// //         <TraditionalProducts/>
// //       </div> */}
  
// //       <ExperienceFooterWrapper>
// //         <ExperienceSection onCollectionClick={navigateToCollections} />
// //         <Footer 
// //           onOurStoryClick={navigateToOurStory} 
// //           onCraftsmanshipClick={navigateToCraftsmanship}
// //           onCollectionClick={navigateToCollections}
// //           onHomeClick={navigateToHome}
// //         />
// //       </ExperienceFooterWrapper>
      
// //       {/* CartOverlay with checkout functionality */}
// //       <CartOverlay
// //         isOpen={isCartOpen}
// //         onClose={() => setIsCartOpen(false)}
// //         cartItems={cartItems}
// //         onUpdateQuantity={handleUpdateQuantity}
// //         onRemoveItem={handleRemoveItem}
// //         onCheckout={navigateToCheckout} // Add this prop
// //       />
      
// //       <PageTransition
// //         isTransitioning={isTransitioning}
// //         clickPosition={clickPosition}
// //       />
     
// //       <LoadingAnimation
// //         show={showLoading}
// //         onComplete={handleLoadingComplete}
// //         hasLoadedBefore={hasLoadedBefore}
// //       />
// //     </div>
// //   );
// // }
// import { useState, useEffect } from 'react';
// import { Navigation } from './components/Navigation';
// import { HeroSection } from './components/HeroSection';
// import { CollectionSection } from './components/CollectionSection';
// import { ArtisanSection } from './components/ArtisanSection';
// import { CraftsmanshipSection } from './components/CraftsmanshipSection';
// import { ExperienceSection } from './components/ExperienceSection';
// import { ExperienceFooterWrapper } from './components/ExperienceFooterWrapper';
// import { Footer } from './components/Footer';
// import { OurCollectionPage } from './components/OurCollectionPage';
// import { CollectionCataloguePage } from './components/CollectionCataloguePage';
// import { CollectionsPage } from './components/CollectionsPage';
// import { OurStoryPage } from './components/OurStoryPage';
// import { CraftsmanshipPage } from './components/CraftsmanshipPage';
// import { CartOverlay } from './components/CartOverlay';
// import { CartItem, ProductDetailPage } from './components/ProductDetailPage';
// import { PageTransition } from './components/PageTransition';
// import { LoadingAnimation } from './components/LoadingAnimation';
// import TraditionalProducts from './components/small/TraditionalProducts';
// import CollectionCard from './components/CollectionCard';
// import GenderCollections from './components/GenderCollection';
// import CheckoutPage from './components/CheckoutPage';
// import MensCategory from './components/categoty/MensCategory';
// import { PrivacyPolicyPage } from './components/PrivacyPolicyPage'; // Import privacy policy page
// // Imports ke section mein add karo
// import { ShippingReturnsPolicyPage } from './components/ShippingReturnsPolicyPage';

// type PageType = 'home' | 'collections' | 'ourStory' | 'craftsmanship' | 'menCollections' | 'womenCatalogue' | 'collectionCatalogue' | 'checkout' | 'privacy-policy' | 'shipping-returns';

// export default function App() {
//   const [currentPage, setCurrentPage] = useState<PageType>('home');
//   const [selectedCollection, setSelectedCollection] = useState<{id: string, name: string} | null>(null);
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | undefined>();
//   const [showLoading, setShowLoading] = useState(true);
//   const [hasLoadedBefore, setHasLoadedBefore] = useState(false);

//   // Set page title
//   useEffect(() => {
//     document.title = 'Sohwais - The museum that sells';
//   }, []);

//   useEffect(() => {
//     // Check if user has visited before in this session
//     const hasVisited = sessionStorage.getItem('sohwais_visited');
    
//     if (hasVisited) {
//       setShowLoading(false);
//       setHasLoadedBefore(true);
//     } else {
//       // Mark as visited
//       sessionStorage.setItem('sohwais_visited', 'true');
//     }
//   }, []);

//   const handleLoadingComplete = () => {
//     setShowLoading(false);
//     setHasLoadedBefore(true);
//   };

//   const handleNavigation = (page: PageType, event?: React.MouseEvent) => {
//     // Prevent any default behavior that might cause scroll
//     if (event) {
//       event.preventDefault();
//       setClickPosition({ x: event.clientX, y: event.clientY });
//     }

//     // Start transition
//     setIsTransitioning(true);

//     // Change page immediately for back navigation, with minimal delay for forward navigation
//     const pageChangeDelay = 300; // Reduced from 800ms
//     setTimeout(() => {
//       setCurrentPage(page);
//       // Scroll to top AFTER page change to ensure it works correctly
//       setTimeout(() => {
//         window.scrollTo({ top: 0, behavior: 'instant' });
//       }, 50);
//     }, pageChangeDelay);

//     // Reset transition state after animation completes
//     setTimeout(() => {
//       setIsTransitioning(false);
//     }, pageChangeDelay + 600);
//   };

//   const navigateToCollections = (event?: React.MouseEvent) => {
//     handleNavigation('collections', event);
//   };

//   const navigateToHome = (event?: React.MouseEvent) => {
//     handleNavigation('home', event);
//   };

//   const navigateToOurStory = (event?: React.MouseEvent) => {
//     handleNavigation('ourStory', event);
//   };

//   const navigateToCraftsmanship = (event?: React.MouseEvent) => {
//     handleNavigation('craftsmanship', event);
//   };

//   // Men's collection overview page
//   const navigateToMensCollections = (event?: React.MouseEvent) => {
//     handleNavigation('menCollections', event);
//   };

//   // Women's direct catalogue page  
//   const navigateToWomensCatalogue = (event?: React.MouseEvent) => {
//     setSelectedCollection({ id: 'womens', name: "Women's Collection" });
//     handleNavigation('womenCatalogue', event);
//   };

//   // Navigate to checkout page
//   const navigateToCheckout = (event?: React.MouseEvent) => {
//     handleNavigation('checkout', event);
//   };

//   // Navigate to privacy policy page
//   const navigateToPrivacyPolicy = (event?: React.MouseEvent) => {
//     handleNavigation('privacy-policy', event);
//   };

//   // Handle collection selection from men's overview page
//   const handleCollectionSelect = (collectionId: string) => {
//     const collectionNames: Record<string, string> = {
//       'madhubani': 'Madhubani Collection',
//       'sujini': 'Sujini Collection',
//       'marble': 'Marble Collection',
//       'nakashi': 'Nakashi Collection',
//       'majestic-linen': 'The Majestic Linen',
//       'batik-archive': 'The Batik Archive',
//       'explore-all': 'Craft Exploration'
//     };
    
//     setSelectedCollection({ 
//       id: collectionId, 
//       name: collectionNames[collectionId] || collectionId 
//     });
//     setCurrentPage('collectionCatalogue');
//   };

//   const handleBackFromMensCollections = (event?: React.MouseEvent) => {
//     navigateToHome(event);
//   };

//   const handleBackFromCatalogue = (event?: React.MouseEvent) => {
//     // Prevent default behavior
//     if (event) {
//       event.preventDefault();
//     }
    
//     setSelectedCollection(null);
    
//     if (currentPage === 'womenCatalogue') {
//       // Go back to home with transition
//       navigateToHome(event);
//     } else {
//       // Go back to men's collections page directly (no transition needed since it's the same flow)
//       window.scrollTo({ top: 0, behavior: 'instant' });
//       setCurrentPage('menCollections');
//     }
//   };
//   const navigateToShippingReturns = (event?: React.MouseEvent) => {
//   handleNavigation('shipping-returns', event);
// };

//   const handleBackFromCheckout = (event?: React.MouseEvent) => {
//     navigateToHome(event);
//   };

//   const handleAddToCart = (item: CartItem) => {
//     setCartItems(prev => {
//       // Check if item with same id and size already exists
//       const existingItemIndex = prev.findIndex(
//         cartItem => cartItem.id === item.id && cartItem.size === item.size
//       );

//       if (existingItemIndex > -1) {
//         // Update quantity of existing item
//         const updated = [...prev];
//         updated[existingItemIndex].quantity += item.quantity;
//         return updated;
//       } else {
//         // Add new item
//         return [...prev, item];
//       }
//     });
    
//     // Auto-open cart briefly to show the item was added
//     setIsCartOpen(true);
//     setTimeout(() => setIsCartOpen(false), 2000);
//   };

//   const handleUpdateQuantity = (id: string, newQuantity: number) => {
//     if (newQuantity === 0) {
//       setCartItems(prev => prev.filter(item => item.id !== id));
//     } else {
//       setCartItems(prev =>
//         prev.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
//       );
//     }
//   };

//   const handleRemoveItem = (id: string) => {
//     setCartItems(prev => prev.filter(item => item.id !== id));
//   };

//   const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   // PRIVACY POLICY PAGE
//   if (currentPage === 'privacy-policy') {
//     return (
//       <>
//         <PrivacyPolicyPage
//           cartCount={cartCount}
//           onCartClick={() => setIsCartOpen(true)}
//           onCollectionClick={navigateToCollections}
//           onOurStoryClick={navigateToOurStory}
//           onCraftsmanshipClick={navigateToCraftsmanship}
//           onLogoClick={navigateToHome}
//         />
//         <CartOverlay
//           isOpen={isCartOpen}
//           onClose={() => setIsCartOpen(false)}
//           cartItems={cartItems}
//           onUpdateQuantity={handleUpdateQuantity}
//           onRemoveItem={handleRemoveItem}
//           onCheckout={navigateToCheckout}
//         />
//         <PageTransition
//           isTransitioning={isTransitioning}
//           clickPosition={clickPosition}
//         />
//       </>
//     );
//   }

//   // Privacy policy page ke baad ye add karo:
// if (currentPage === 'shipping-returns') {
//   return (
//     <>
//       <ShippingReturnsPolicyPage
//         cartCount={cartCount}
//         onCartClick={() => setIsCartOpen(true)}
//         onCollectionClick={navigateToCollections}
//         onOurStoryClick={navigateToOurStory}
//         onCraftsmanshipClick={navigateToCraftsmanship}
//         onLogoClick={navigateToHome}
//       />
//       <CartOverlay
//         isOpen={isCartOpen}
//         onClose={() => setIsCartOpen(false)}
//         cartItems={cartItems}
//         onUpdateQuantity={handleUpdateQuantity}
//         onRemoveItem={handleRemoveItem}
//         onCheckout={navigateToCheckout}
//       />
//       <PageTransition
//         isTransitioning={isTransitioning}
//         clickPosition={clickPosition}
//       />
//     </>
//   );
// }

//   // CHECKOUT PAGE
//   if (currentPage === 'checkout') {
//     return (
//       <>
//         <CheckoutPage
//           cartItems={cartItems}
//           onBack={handleBackFromCheckout}
//         />
//         <PageTransition
//           isTransitioning={isTransitioning}
//           clickPosition={clickPosition}
//         />
//       </>
//     );
//   }

//   // REST OF YOUR PAGES REMAIN THE SAME...
//   if (currentPage === 'collections') {
//     return (
//       <>
//         <CollectionsPage
//           onBack={navigateToHome}
//           cartCount={cartCount}
//           onCartClick={() => setIsCartOpen(true)}
//           onAddToCart={handleAddToCart}
//           onCollectionClick={navigateToCollections}
//           onOurStoryClick={navigateToOurStory}
//           onCraftsmanshipClick={navigateToCraftsmanship}
//         />
//         <CartOverlay
//           isOpen={isCartOpen}
//           onClose={() => setIsCartOpen(false)}
//           cartItems={cartItems}
//           onUpdateQuantity={handleUpdateQuantity}
//           onRemoveItem={handleRemoveItem}
//           onCheckout={navigateToCheckout}
//         />
//         <PageTransition
//           isTransitioning={isTransitioning}
//           clickPosition={clickPosition}
//         />
//       </>
//     );
//   }

//   if (currentPage === 'ourStory') {
//     return (
//       <>
//         <OurStoryPage
//           onBack={navigateToHome}
//           cartCount={cartCount}
//           onCartClick={() => setIsCartOpen(true)}
//           onOurStoryClick={navigateToOurStory}
//           onCollectionClick={navigateToCollections}
//           onCraftsmanshipClick={navigateToCraftsmanship}
//         />
//         <CartOverlay
//           isOpen={isCartOpen}
//           onClose={() => setIsCartOpen(false)}
//           cartItems={cartItems}
//           onUpdateQuantity={handleUpdateQuantity}
//           onRemoveItem={handleRemoveItem}
//           onCheckout={navigateToCheckout}
//         />
//         <PageTransition
//           isTransitioning={isTransitioning}
//           clickPosition={clickPosition}
//         />
//       </>
//     );
//   }

//   if (currentPage === 'craftsmanship') {
//     return (
//       <>
//         <CraftsmanshipPage
//           onBack={navigateToHome}
//           cartCount={cartCount}
//           onCartClick={() => setIsCartOpen(true)}
//           onCraftsmanshipClick={navigateToCraftsmanship}
//         />
//         <CartOverlay
//           isOpen={isCartOpen}
//           onClose={() => setIsCartOpen(false)}
//           cartItems={cartItems}
//           onUpdateQuantity={handleUpdateQuantity}
//           onRemoveItem={handleRemoveItem}
//           onCheckout={navigateToCheckout}
//         />
//         <PageTransition
//           isTransitioning={isTransitioning}
//           clickPosition={clickPosition}
//         />
//       </>
//     );
//   }

//   if (currentPage === 'menCollections') {
//     return (
//       <>
//         <OurCollectionPage
//           onBack={handleBackFromMensCollections}
//           cartCount={cartCount}
//           onCartClick={() => setIsCartOpen(true)}
//           onCollectionSelect={handleCollectionSelect}
//           onCollectionClick={navigateToCollections}
//           onOurStoryClick={navigateToOurStory}
//           onCraftsmanshipClick={navigateToCraftsmanship}
//         />
//         <CartOverlay
//           isOpen={isCartOpen}
//           onClose={() => setIsCartOpen(false)}
//           cartItems={cartItems}
//           onUpdateQuantity={handleUpdateQuantity}
//           onRemoveItem={handleRemoveItem}
//           onCheckout={navigateToCheckout}
//         />
//         <PageTransition
//           isTransitioning={isTransitioning}
//           clickPosition={clickPosition}
//         />
//       </>
//     );
//   }

//   if ((currentPage === 'womenCatalogue' || currentPage === 'collectionCatalogue') && selectedCollection) {
//     return (
//       <>
//         <CollectionCataloguePage
//           collectionId={selectedCollection.id}
//           collectionName={selectedCollection.name}
//           gender={currentPage === 'womenCatalogue' ? 'women' : 'men'}
//           onBack={handleBackFromCatalogue}
//           cartCount={cartCount}
//           onCartClick={() => setIsCartOpen(true)}
//           onAddToCart={handleAddToCart}
//           onCollectionClick={navigateToCollections}
//           onOurStoryClick={navigateToOurStory}
//           onCraftsmanshipClick={navigateToCraftsmanship}
//         />
//         <CartOverlay
//           isOpen={isCartOpen}
//           onClose={() => setIsCartOpen(false)}
//           cartItems={cartItems}
//           onUpdateQuantity={handleUpdateQuantity}
//           onRemoveItem={handleRemoveItem}
//           onCheckout={navigateToCheckout}
//         />
//         <PageTransition
//           isTransitioning={isTransitioning}
//           clickPosition={clickPosition}
//         />
//       </>
//     );
//   }

//   // HOME PAGE (default)
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="relative">
//         <HeroSection onExploreClick={navigateToCollections} />
//         <div className="absolute top-0 left-0 right-0 z-10">
//           <Navigation 
//             cartCount={cartCount} 
//             onCartClick={() => setIsCartOpen(true)} 
//             onCollectionClick={navigateToCollections}
//             onOurStoryClick={navigateToOurStory}
//             onCraftsmanshipClick={navigateToCraftsmanship}
//           />
//         </div>
//       </div>
//       <CollectionSection 
//         onMensClick={navigateToCollections}
//         onWomensClick={navigateToWomensCatalogue}
//       />
//       <ArtisanSection onCraftsmanshipClick={navigateToCraftsmanship} />
//       <CraftsmanshipSection />
//       <ExperienceFooterWrapper>
//         <ExperienceSection onCollectionClick={navigateToCollections} />
//         <Footer 
//           onOurStoryClick={navigateToOurStory} 
//           onCraftsmanshipClick={navigateToCraftsmanship}
//           onCollectionClick={navigateToCollections}
//           onHomeClick={navigateToHome}
//           onShippingClick={navigateToShippingReturns}
//           onPrivacyPolicyClick={navigateToPrivacyPolicy} // Add this prop
//           onTermsClick={() => {
//             // You can implement terms page later
//             console.log('Terms clicked');
//           }}
//           onShippingClick={() => {
//             // You can implement shipping page later
//             console.log('Shipping clicked');
//           }}
//         />
//       </ExperienceFooterWrapper>
      
//       {/* CartOverlay with checkout functionality */}
//       <CartOverlay
//         isOpen={isCartOpen}
//         onClose={() => setIsCartOpen(false)}
//         cartItems={cartItems}
//         onUpdateQuantity={handleUpdateQuantity}
//         onRemoveItem={handleRemoveItem}
//         onCheckout={navigateToCheckout}
//       />
      
//       <PageTransition
//         isTransitioning={isTransitioning}
//         clickPosition={clickPosition}
//       />
     
//       <LoadingAnimation
//         show={showLoading}
//         onComplete={handleLoadingComplete}
//         hasLoadedBefore={hasLoadedBefore}
//       />
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { CollectionSection } from './components/CollectionSection';
import { ArtisanSection } from './components/ArtisanSection';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ExperienceFooterWrapper } from './components/ExperienceFooterWrapper';
import { Footer } from './components/Footer';
import { OurCollectionPage } from './components/OurCollectionPage';
import { CollectionCataloguePage } from './components/CollectionCataloguePage';
import { CollectionsPage } from './components/CollectionsPage';
import { OurStoryPage } from './components/OurStoryPage';
import { CraftsmanshipPage } from './components/CraftsmanshipPage';
import { CartOverlay } from './components/CartOverlay';
import { CartItem, ProductDetailPage } from './components/ProductDetailPage';
import { PageTransition } from './components/PageTransition';
import { LoadingAnimation } from './components/LoadingAnimation';
import TraditionalProducts from './components/small/TraditionalProducts';
import CollectionCard from './components/CollectionCard';
import GenderCollections from './components/GenderCollection';
import CheckoutPage from './components/CheckoutPage';
import MensCategory from './components/categoty/MensCategory';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { ShippingReturnsPolicyPage } from './components/ShippingReturnsPolicyPage'; // ADD THIS IMPORT

type PageType = 'home' | 'collections' | 'ourStory' | 'craftsmanship' | 'menCollections' | 
                'womenCatalogue' | 'collectionCatalogue' | 'checkout' | 'privacy-policy' | 
                'shipping-returns'; // UPDATE THIS LINE

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedCollection, setSelectedCollection] = useState<{id: string, name: string} | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | undefined>();
  const [showLoading, setShowLoading] = useState(true);
  const [hasLoadedBefore, setHasLoadedBefore] = useState(false);

  // Set page title
  useEffect(() => {
    document.title = 'Sohwais - The museum that sells';
  }, []);

  useEffect(() => {
    // Check if user has visited before in this session
    const hasVisited = sessionStorage.getItem('sohwais_visited');
    
    if (hasVisited) {
      setShowLoading(false);
      setHasLoadedBefore(true);
    } else {
      // Mark as visited
      sessionStorage.setItem('sohwais_visited', 'true');
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setHasLoadedBefore(true);
  };

  const handleNavigation = (page: PageType, event?: React.MouseEvent) => {
    // Prevent any default behavior that might cause scroll
    if (event) {
      event.preventDefault();
      setClickPosition({ x: event.clientX, y: event.clientY });
    }

    // Start transition
    setIsTransitioning(true);

    // Change page immediately for back navigation, with minimal delay for forward navigation
    const pageChangeDelay = 300; // Reduced from 800ms
    setTimeout(() => {
      setCurrentPage(page);
      // Scroll to top AFTER page change to ensure it works correctly
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 50);
    }, pageChangeDelay);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, pageChangeDelay + 600);
  };

  const handleBackClick = () => {
    // या तो
    window.history.back();
    
    // या specific route पर navigate (अगर React Router use कर रहे हैं)
    // navigate('/');
  };

  const navigateToCollections = (event?: React.MouseEvent) => {
    handleNavigation('collections', event);
  };

  const navigateToHome = (event?: React.MouseEvent) => {
    handleNavigation('home', event);
  };

  const navigateToOurStory = (event?: React.MouseEvent) => {
    handleNavigation('ourStory', event);
  };

  const navigateToCraftsmanship = (event?: React.MouseEvent) => {
    handleNavigation('craftsmanship', event);
  };

  // Men's collection overview page
  const navigateToMensCollections = (event?: React.MouseEvent) => {
    handleNavigation('menCollections', event);
  };

  // Women's direct catalogue page  
  const navigateToWomensCatalogue = (event?: React.MouseEvent) => {
    setSelectedCollection({ id: 'womens', name: "Women's Collection" });
    handleNavigation('womenCatalogue', event);
  };

  // Navigate to checkout page
  const navigateToCheckout = (event?: React.MouseEvent) => {
    handleNavigation('checkout', event);
  };

  // Navigate to privacy policy page
  const navigateToPrivacyPolicy = (event?: React.MouseEvent) => {
    handleNavigation('privacy-policy', event);
  };

  // Navigate to shipping & returns page - ADD THIS FUNCTION
  const navigateToShippingReturns = (event?: React.MouseEvent) => {
    handleNavigation('shipping-returns', event);
  };

  // Handle collection selection from men's overview page
  const handleCollectionSelect = (collectionId: string) => {
    const collectionNames: Record<string, string> = {
      'madhubani': 'Madhubani Collection',
      'sujini': 'Sujini Collection',
      'marble': 'Marble Collection',
      'nakashi': 'Nakashi Collection',
      'majestic-linen': 'The Majestic Linen',
      'batik-archive': 'The Batik Archive',
      'explore-all': 'Craft Exploration'
    };
    
    setSelectedCollection({ 
      id: collectionId, 
      name: collectionNames[collectionId] || collectionId 
    });
    setCurrentPage('collectionCatalogue');
  };

  const handleBackFromMensCollections = (event?: React.MouseEvent) => {
    navigateToHome(event);
  };

  const handleBackFromCatalogue = (event?: React.MouseEvent) => {
    // Prevent default behavior
    if (event) {
      event.preventDefault();
    }
    
    setSelectedCollection(null);
    
    if (currentPage === 'womenCatalogue') {
      // Go back to home with transition
      navigateToHome(event);
    } else {
      // Go back to men's collections page directly (no transition needed since it's the same flow)
      window.scrollTo({ top: 0, behavior: 'instant' });
      setCurrentPage('menCollections');
    }
  };

  const handleBackFromCheckout = (event?: React.MouseEvent) => {
    navigateToHome(event);
  };

  const handleAddToCart = (item: CartItem) => {
    setCartItems(prev => {
      // Check if item with same id and size already exists
      const existingItemIndex = prev.findIndex(
        cartItem => cartItem.id === item.id && cartItem.size === item.size
      );

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const updated = [...prev];
        updated[existingItemIndex].quantity += item.quantity;
        return updated;
      } else {
        // Add new item
        return [...prev, item];
      }
    });
    
    // Auto-open cart briefly to show the item was added
    setIsCartOpen(true);
    setTimeout(() => setIsCartOpen(false), 2000);
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
      );
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // PRIVACY POLICY PAGE
  if (currentPage === 'privacy-policy') {
    return (
      <>
        <PrivacyPolicyPage
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          onCollectionClick={navigateToCollections}
          onOurStoryClick={navigateToOurStory}
          onCraftsmanshipClick={navigateToCraftsmanship}
          onLogoClick={navigateToHome}
           onBackClick={navigateToHome}
        />
        <CartOverlay
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={navigateToCheckout}
        />
        <PageTransition
          isTransitioning={isTransitioning}
          clickPosition={clickPosition}
        />
      </>
    );
  }

  // SHIPPING & RETURNS PAGE - ADD THIS SECTION
  if (currentPage === 'shipping-returns') {
    return (
      <>
        <ShippingReturnsPolicyPage
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          onCollectionClick={navigateToCollections}
          onOurStoryClick={navigateToOurStory}
          onCraftsmanshipClick={navigateToCraftsmanship}
          onLogoClick={navigateToHome}
          onBackClick={navigateToHome}
        />
        <CartOverlay
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={navigateToCheckout}
        />
        <PageTransition
          isTransitioning={isTransitioning}
          clickPosition={clickPosition}
        />
      </>
    );
  }

  // CHECKOUT PAGE
  if (currentPage === 'checkout') {
    return (
      <>
        <CheckoutPage
          cartItems={cartItems}
          onBack={handleBackFromCheckout}
        />
        <PageTransition
          isTransitioning={isTransitioning}
          clickPosition={clickPosition}
        />
      </>
    );
  }

  // REST OF YOUR PAGES...
  if (currentPage === 'collections') {
    return (
      <>
        <CollectionsPage
          onBack={navigateToHome}
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          onAddToCart={handleAddToCart}
          onCollectionClick={navigateToCollections}
          onOurStoryClick={navigateToOurStory}
          onCraftsmanshipClick={navigateToCraftsmanship}
        />
        <CartOverlay
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={navigateToCheckout}
        />
        <PageTransition
          isTransitioning={isTransitioning}
          clickPosition={clickPosition}
        />
      </>
    );
  }

  if (currentPage === 'ourStory') {
    return (
      <>
        <OurStoryPage
          onBack={navigateToHome}
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          onOurStoryClick={navigateToOurStory}
          onCollectionClick={navigateToCollections}
          onCraftsmanshipClick={navigateToCraftsmanship}
        />
        <CartOverlay
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={navigateToCheckout}
        />
        <PageTransition
          isTransitioning={isTransitioning}
          clickPosition={clickPosition}
        />
      </>
    );
  }

  if (currentPage === 'craftsmanship') {
    return (
      <>
        <CraftsmanshipPage
          onBack={navigateToHome}
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          onCraftsmanshipClick={navigateToCraftsmanship}
        />
        <CartOverlay
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={navigateToCheckout}
        />
        <PageTransition
          isTransitioning={isTransitioning}
          clickPosition={clickPosition}
        />
      </>
    );
  }

  if (currentPage === 'menCollections') {
    return (
      <>
        <OurCollectionPage
          onBack={handleBackFromMensCollections}
          
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          onCollectionSelect={handleCollectionSelect}
          onCollectionClick={navigateToCollections}
          onOurStoryClick={navigateToOurStory}
          onCraftsmanshipClick={navigateToCraftsmanship}
        />
        <CartOverlay
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={navigateToCheckout}
        />
        <PageTransition
          isTransitioning={isTransitioning}
          clickPosition={clickPosition}
        />
      </>
    );
  }

  if ((currentPage === 'womenCatalogue' || currentPage === 'collectionCatalogue') && selectedCollection) {
    return (
      <>
        {/* <CollectionCataloguePage
          collectionId={selectedCollection.id}
          collectionName={selectedCollection.name}
          gender={currentPage === 'womenCatalogue' ? 'women' : 'men'}
          onBack={handleBackFromCatalogue}
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          onAddToCart={handleAddToCart}
          onCollectionClick={navigateToCollections}
          onOurStoryClick={navigateToOurStory}
          onCraftsmanshipClick={navigateToCraftsmanship}
        /> */}
        
<CollectionCataloguePage
  collectionId={selectedCollection.id}
  collectionName={selectedCollection.name}
  gender={currentPage === 'womenCatalogue' ? 'women' : 'men'}
  onBack={handleBackFromCatalogue}
  cartCount={cartCount}
  onCartClick={() => setIsCartOpen(true)}
  onAddToCart={handleAddToCart}
  onCollectionClick={navigateToCollections}
  onOurStoryClick={navigateToOurStory}
  onCraftsmanshipClick={navigateToCraftsmanship}
  onLogoClick={navigateToHome} // Add this
  onHomeClick={navigateToHome} // Add this
/>
        <CartOverlay
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={navigateToCheckout}
        />
        <PageTransition
          isTransitioning={isTransitioning}
          clickPosition={clickPosition}
        />
      </>
    );
  }

  // HOME PAGE (default)
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <HeroSection onExploreClick={navigateToCollections} />
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navigation 
            cartCount={cartCount} 
            onCartClick={() => setIsCartOpen(true)} 
            onCollectionClick={navigateToCollections}
            onOurStoryClick={navigateToOurStory}
            onCraftsmanshipClick={navigateToCraftsmanship}
          />
        </div>
      </div>
      <CollectionSection 
        onMensClick={navigateToCollections}
        onWomensClick={navigateToWomensCatalogue}
      />
      <ArtisanSection onCraftsmanshipClick={navigateToCraftsmanship} />
      <CraftsmanshipSection />
      <ExperienceFooterWrapper>
        <ExperienceSection onCollectionClick={navigateToCollections} />
        <Footer 
          onOurStoryClick={navigateToOurStory} 
          onCraftsmanshipClick={navigateToCraftsmanship}
          onCollectionClick={navigateToCollections}
          onHomeClick={navigateToHome}
          onPrivacyPolicyClick={navigateToPrivacyPolicy}
         
          onShippingClick={navigateToShippingReturns} // ADD THIS PROP
          onTermsClick={() => {
            // You can implement terms page later
            console.log('Terms clicked');
          }}
        />
      </ExperienceFooterWrapper>
      
      {/* CartOverlay with checkout functionality */}
      <CartOverlay
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={navigateToCheckout}
      />
      
      <PageTransition
        isTransitioning={isTransitioning}
        clickPosition={clickPosition}
      />
     
      <LoadingAnimation
        show={showLoading}
        onComplete={handleLoadingComplete}
        hasLoadedBefore={hasLoadedBefore}
      />
    </div>
  );
}