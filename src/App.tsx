

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
// import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
// import { ShippingReturnsPolicyPage } from './components/ShippingReturnsPolicyPage';

// type PageType = 'home' | 'collections' | 'ourStory' | 'craftsmanship' | 'menCollections' | 
//                 'womenCatalogue' | 'collectionCatalogue' | 'checkout' | 'privacy-policy' | 
//                 'shipping-returns' | 'productDetail';

// export default function App() {
//   const [currentPage, setCurrentPage] = useState<PageType>('home');
//   const [selectedCollection, setSelectedCollection] = useState<{id: string, name: string} | null>(null);
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | undefined>();
//   const [showLoading, setShowLoading] = useState(true);
//   const [hasLoadedBefore, setHasLoadedBefore] = useState(false);
  
//   // Product Detail के लिए state
//   const [selectedProductDetail, setSelectedProductDetail] = useState<{
//     productId: string;
//     collectionName?: string;
//     gender?: string;
//   } | null>(null);

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
//     const pageChangeDelay = 300;
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

//   const navigateToHome = (event?: React.MouseEvent) => {
//     handleNavigation('home', event);
//   };

//   const navigateToCollections = (event?: React.MouseEvent) => {
//     handleNavigation('collections', event);
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

//   // Navigate to shipping & returns page
//   const navigateToShippingReturns = (event?: React.MouseEvent) => {
//     handleNavigation('shipping-returns', event);
//   };

//   // Product detail page पर navigate करें
//   const navigateToProductDetail = (productId: string, collectionName?: string, gender?: string) => {
//     setSelectedProductDetail({ productId, collectionName, gender });
//     handleNavigation('productDetail');
//   };

//   // Collection page पर navigate करें
//   const navigateToCollectionPage = (collectionName: string, gender?: string) => {
//     // Collection ID find करें
//     const collectionId = collectionName.toLowerCase().replace(/\s+/g, '-');
    
//     setSelectedCollection({ 
//       id: collectionId, 
//       name: collectionName 
//     });
    
//     // Gender के based पर correct page set करें
//     if (gender === 'women') {
//       setCurrentPage('womenCatalogue');
//     } else {
//       setCurrentPage('collectionCatalogue');
//     }
    
//     // Scroll to top
//     window.scrollTo({ top: 0, behavior: 'instant' });
    
//     // Product detail से बाहर निकलें
//     setSelectedProductDetail(null);
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
//       // Go back to men's collections page directly
//       window.scrollTo({ top: 0, behavior: 'instant' });
//       setCurrentPage('menCollections');
//     }
//   };

//   const handleBackFromCheckout = (event?: React.MouseEvent) => {
//     navigateToHome(event);
//   };

//   const handleBackFromProductDetail = () => {
//     // Product detail से वापस जाएं
//     setSelectedProductDetail(null);
    
//     // अगर collection selected है, तो उस collection page पर वापस जाएं
//     if (selectedCollection) {
//       setCurrentPage('collectionCatalogue');
//     } else {
//       // नहीं तो home page पर
//       navigateToHome();
//     }
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
//           onBackClick={navigateToHome}
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

//   // SHIPPING & RETURNS PAGE
//   if (currentPage === 'shipping-returns') {
//     return (
//       <>
//         <ShippingReturnsPolicyPage
//           cartCount={cartCount}
//           onCartClick={() => setIsCartOpen(true)}
//           onCollectionClick={navigateToCollections}
//           onOurStoryClick={navigateToOurStory}
//           onCraftsmanshipClick={navigateToCraftsmanship}
//           onLogoClick={navigateToHome}
//           onBackClick={navigateToHome}
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

 

//   // COLLECTIONS PAGE
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

//   // OUR STORY PAGE
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

//   // CRAFTSMANSHIP PAGE
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

//   // MEN COLLECTIONS PAGE
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

//   // COLLECTION CATALOGUE PAGE
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
//           onLogoClick={navigateToHome}
//           onHomeClick={navigateToHome}
//           // नया prop: जब product select हो तो product detail page पर जाएं
//           onProductSelect={navigateToProductDetail}
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
//           onPrivacyPolicyClick={navigateToPrivacyPolicy}
//           onShippingClick={navigateToShippingReturns}
//           onWomensClick={navigateToWomensCatalogue}
//           onTermsClick={() => {
//             // You can implement terms page later
//             console.log('Terms clicked');
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

import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
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
import { ProductDetailPage } from './components/ProductDetailPage';
import { PageTransition } from './components/PageTransition';
import { LoadingAnimation } from './components/LoadingAnimation';
import CheckoutPage from './components/CheckoutPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { ShippingReturnsPolicyPage } from './components/ShippingReturnsPolicyPage';
import { CartItem } from './components/ProductDetailPage';
import { ProductPage } from './components/ProductPage';

// export default function App() {

//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | undefined>();
//   const [showLoading, setShowLoading] = useState(true);
//   const [hasLoadedBefore, setHasLoadedBefore] = useState(false);
  
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Set page title
//   useEffect(() => {
//     document.title = 'Sohwais - The museum that sells';
//   }, []);

//   useEffect(() => {
//     const hasVisited = sessionStorage.getItem('sohwais_visited');
    
//     if (hasVisited) {
//       setShowLoading(false);
//       setHasLoadedBefore(true);
//     } else {
//       sessionStorage.setItem('sohwais_visited', 'true');
//     }
//   }, []);

//   const handleLoadingComplete = () => {
//     setShowLoading(false);
//     setHasLoadedBefore(true);
//   };

//   const handleNavigation = (path: string, event?: React.MouseEvent) => {
//     if (event) {
//       event.preventDefault();
//       setClickPosition({ x: event.clientX, y: event.clientY });
//     }

//     setIsTransitioning(true);
//     setTimeout(() => {
//       navigate(path);
//       setTimeout(() => {
//         window.scrollTo({ top: 0, behavior: 'instant' });
//       }, 50);
//       setIsTransitioning(false);
//     }, 300);
//   };

//   const handleAddToCart = (item: CartItem) => {
//     setCartItems(prev => {
//       const existingItemIndex = prev.findIndex(
//         cartItem => cartItem.id === item.id && cartItem.size === item.size
//       );

//       if (existingItemIndex > -1) {
//         const updated = [...prev];
//         updated[existingItemIndex].quantity += item.quantity;
//         return updated;
//       } else {
//         return [...prev, item];
//       }
//     });
    
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

//   // Common props for pages
//   const commonPageProps = {
//     cartCount,
//     onCartClick: () => setIsCartOpen(true),
//     onLogoClick: () => handleNavigation('/'),
//     onBackClick: () => navigate(-1)
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Show Navigation on all pages exce  checkout */}
//       <div className="fixed top-0 left-0 right-0 z-[100] bg-white">
//       {!location.pathname.includes('/checkout') && (
//         <Navigation 
//           cartCount={cartCount} 
//           onCartClick={() => setIsCartOpen(true)}
//           onLogoClick={() => handleNavigation('/')}
//         />
//       )}
//       </div>
//       <div >
//       <Routes>
//         {/* Home Page */}
//         <Route path="/" element={
//           <>
//             <div className="relative">
//               <HeroSection onExploreClick={() => handleNavigation('/collections')} />
//             </div>
//             <CollectionSection 
//               onMensClick={() => handleNavigation('/collections/men')}
//               onWomensClick={() => handleNavigation('/collections/women')}
//             />
//             <ArtisanSection onCraftsmanshipClick={() => handleNavigation('/craftsmanship')} />
//             <CraftsmanshipSection />
//             <ExperienceFooterWrapper>
//               <ExperienceSection onCollectionClick={() => handleNavigation('/collections')} />
//               <Footer 
//                 onOurStoryClick={() => handleNavigation('/our-story')} 
//                 onCraftsmanshipClick={() => handleNavigation('/craftsmanship')}
//                 onCollectionClick={() => handleNavigation('/collections')}
//                 onHomeClick={() => handleNavigation('/')}
//                 onPrivacyPolicyClick={() => handleNavigation('/privacy-policy')}
//                 onShippingClick={() => handleNavigation('/shipping-returns')}
//                 onWomensClick={() => handleNavigation('/collections/women')}
//               />
//             </ExperienceFooterWrapper>
//           </>
//         } />
        
//         {/* Collections Overview */}
//         <Route path="/collections" element={
//           <CollectionsPage
//             {...commonPageProps}
//             onAddToCart={handleAddToCart}
//           />
//         } />
        
//         {/* Men's Collections */}
//         {/* <Route path="/collections/men" element={
//           <OurCollectionPage
//             {...commonPageProps}
//             gender="men"
//             onCollectionSelect={(collectionId: string) => 
//               handleNavigation(`/collections/men/${collectionId}`)
//             }
//           />
//         } /> */}
//         <Route path="/collections/men" element={
//     <ProductPage 
//       gender="men"
//       showAllProducts={true}
//       cartCount={cartCount}
//       onCartClick={() => setIsCartOpen(true)}
//       onAddToCart={handleAddToCart}
//       onLogoClick={() => handleNavigation('/')}
//     />
//   } />
//         {/* Women's Collections */}
//         <Route path="/collections/women" element={
//           <CollectionCataloguePage
//             {...commonPageProps}
//             collectionId="womens"
//             collectionName="Women's Collection"
//             gender="women"
//             onAddToCart={handleAddToCart}
//             onProductSelect={(productId: string) => 
//               handleNavigation(`/product/${productId}`)
//             }
//           />
//         } />
        
//         {/* Specific Collection (Men) */}
//         {/* <Route path="/collections/men/:collectionId" element={
//           <CollectionCataloguePageWrapper
//             gender="men"
//             onAddToCart={handleAddToCart}
//             onProductSelect={(productId: string) => 
//               handleNavigation(`/product/${productId}`)
//             }
//             {...commonPageProps}
//           />
//         } /> */}
//         {/* <Route path="/collections/:gender/:collectionName" element={
//     <ProductPage 
//       cartCount={cartCount}
//       onCartClick={() => setIsCartOpen(true)}
//       onAddToCart={handleAddToCart}
//       onLogoClick={() => handleNavigation('/')}
//     />
//   } /> */}
//   <Route path="/collections/:collectionSlug" element={
//   <ProductPage
//     cartCount={cartCount}
//     onCartClick={() => setIsCartOpen(true)}
//     onAddToCart={handleAddToCart}
//     onLogoClick={() => handleNavigation('/')}
//   />
// } />

//         {/* Product Detail */}
//         <Route path="/product/:productId" element={
//           <ProductDetailPage
//             {...commonPageProps}
//             onAddToCart={handleAddToCart}
//           />
//         } />
        
//         {/* Other Pages */}
//         <Route path="/our-story" element={
//           <OurStoryPage {...commonPageProps} />
//         } />
        
//         <Route path="/craftsmanship" element={
//           <CraftsmanshipPage {...commonPageProps} />
//         } />
        
//         <Route path="/checkout" element={
//           <CheckoutPage
//             cartItems={cartItems}
//             onBack={() => handleNavigation('/')}
//           />
//         } />
        
//         <Route path="/privacy-policy" element={
//           <PrivacyPolicyPage {...commonPageProps} />
//         } />
        
//         <Route path="/shipping-returns" element={
//           <ShippingReturnsPolicyPage {...commonPageProps} />
//         } />
//       </Routes>
//       </div>
      
//       {/* Cart Overlay */}
//       <CartOverlay
//         isOpen={isCartOpen}
//         onClose={() => setIsCartOpen(false)}
//         cartItems={cartItems}
//         onUpdateQuantity={handleUpdateQuantity}
//         onRemoveItem={handleRemoveItem}
//         onCheckout={() => handleNavigation('/checkout')}
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

// Wrapper for CollectionCataloguePage to get params

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | undefined>();
  const [showLoading, setShowLoading] = useState(true);
  const [hasLoadedBefore, setHasLoadedBefore] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Set page title
  useEffect(() => {
    document.title = 'Sohwais - The museum that sells';
  }, []);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('sohwais_visited');
    
    if (hasVisited) {
      setShowLoading(false);
      setHasLoadedBefore(true);
    } else {
      sessionStorage.setItem('sohwais_visited', 'true');
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setHasLoadedBefore(true);
  };

  const handleNavigation = (path: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      setClickPosition({ x: event.clientX, y: event.clientY });
    }

    setIsTransitioning(true);
    setTimeout(() => {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 50);
      setIsTransitioning(false);
    }, 300);
  };

  const handleAddToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(
        cartItem => cartItem.id === item.id && cartItem.size === item.size
      );

      if (existingItemIndex > -1) {
        const updated = [...prev];
        updated[existingItemIndex].quantity += item.quantity;
        return updated;
      } else {
        return [...prev, item];
      }
    });
    
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

  // Common props for pages
  const commonPageProps = {
    cartCount,
    onCartClick: () => setIsCartOpen(true),
    onLogoClick: () => handleNavigation('/'),
    onBackClick: () => navigate(-1)
  };

  // Check if current page is checkout
  const isCheckoutPage = location.pathname.includes('/checkout');

  // Navbar height - adjust this based on your actual navbar height
  const NAVBAR_HEIGHT = "4rem"; // or "64px" or "h-16"

  return (
    <div className="min-h-screen bg-white">
      {/* Show Navigation on all pages except checkout */}
      {!isCheckoutPage && (
        <div className="fixed top-0  left-0 right-0 z-[100] bg-red-500 h-0">
          <Navigation 
            cartCount={cartCount} 
            onCartClick={() => setIsCartOpen(true)}
            onLogoClick={() => handleNavigation('/')}
          />
        </div>
      )}
      
      {/* Main content with proper spacing for fixed navbar */}
      <div className={!isCheckoutPage ? "pt-0 min-h-screen" : ""}>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <div className="relative">
                <HeroSection onExploreClick={() => handleNavigation('/collections')} />
              </div>
              <CollectionSection 
                onMensClick={() => handleNavigation('/collections/men')}
                onWomensClick={() => handleNavigation('/collections/women')}
              />
              <ArtisanSection onCraftsmanshipClick={() => handleNavigation('/craftsmanship')} />
              <CraftsmanshipSection />
              <ExperienceFooterWrapper>
                <ExperienceSection onCollectionClick={() => handleNavigation('/collections')} />
                <Footer 
                  onOurStoryClick={() => handleNavigation('/our-story')} 
                  onCraftsmanshipClick={() => handleNavigation('/craftsmanship')}
                  onCollectionClick={() => handleNavigation('/collections')}
                  onHomeClick={() => handleNavigation('/')}
                  onPrivacyPolicyClick={() => handleNavigation('/privacy-policy')}
                  onShippingClick={() => handleNavigation('/shipping-returns')}
                  onWomensClick={() => handleNavigation('/collections/women')}
                />
              </ExperienceFooterWrapper>
            </>
          } />
          
          {/* Collections Overview */}
          <Route path="/collections" element={
            <CollectionsPage
              {...commonPageProps}
              onAddToCart={handleAddToCart}
            />
          } />
          
          {/* Men's Collections */}
          <Route path="/collections/men" element={
            <ProductPage 
              gender="men"
              showAllProducts={true}
              cartCount={cartCount}
              onCartClick={() => setIsCartOpen(true)}
              onAddToCart={handleAddToCart}
              onLogoClick={() => handleNavigation('/')}
            />
          } />
          
          {/* Women's Collections */}
          <Route path="/collections/women" element={
            <CollectionCataloguePage
              {...commonPageProps}
              collectionId="womens"
              collectionName="Women's Collection"
              gender="women"
              onAddToCart={handleAddToCart}
              onProductSelect={(productId: string) => 
                handleNavigation(`/product/${productId}`)
              }
            />
          } />
          
          {/* Collection by Slug */}
          <Route path="/collections/:collectionSlug" element={
            <ProductPage
              cartCount={cartCount}
              onCartClick={() => setIsCartOpen(true)}
              onAddToCart={handleAddToCart}
              onLogoClick={() => handleNavigation('/')}
            />
          } />

          {/* Product Detail */}
          <Route path="/product/:productId" element={
            <ProductDetailPage
              {...commonPageProps}
              onAddToCart={handleAddToCart}
            />
          } />
          
          {/* Other Pages */}
          <Route path="/our-story" element={
            <OurStoryPage {...commonPageProps} />
          } />
          
          <Route path="/craftsmanship" element={
            <CraftsmanshipPage {...commonPageProps} />
          } />
          
          {/* Checkout Page (without navbar) */}
          <Route path="/checkout" element={
            <CheckoutPage
              cartItems={cartItems}
              onBack={() => handleNavigation('/')}
            />
          } />
          
          <Route path="/privacy-policy" element={
            <PrivacyPolicyPage {...commonPageProps} />
          } />
          
          <Route path="/shipping-returns" element={
            <ShippingReturnsPolicyPage {...commonPageProps} />
          } />
        </Routes>
      </div>
      
      {/* Cart Overlay */}
      <CartOverlay
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => handleNavigation('/checkout')}
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




function CollectionCataloguePageWrapper(props: any) {
  const { collectionId } = useParams<{ collectionId: string }>();
  const collectionNames: Record<string, string> = {
    'madhubani': 'Madhubani Collection',
    'sujini': 'Sujini Collection',
    'marble': 'Marble Collection',
    'nakashi': 'Nakashi Collection',
    'majestic-linen': 'The Majestic Linen',
    'batik-archive': 'The Batik Archive',
    'explore-all': 'Craft Exploration'
  };
  
  return (
    <CollectionCataloguePage
      {...props}
      collectionId={collectionId || ''}
      collectionName={collectionNames[collectionId || ''] || collectionId || ''}
    />
  );
}