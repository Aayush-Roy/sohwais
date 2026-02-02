

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