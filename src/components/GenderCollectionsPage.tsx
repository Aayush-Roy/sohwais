import { useState } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';
import { ProductPage } from './ProductPage';
import { CartItem } from './ProductDetailPage';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GenderCollectionsPageProps {
  onBack: (event?: React.MouseEvent) => void;
  cartCount: number;
  onCartClick: () => void;
  onAddToCart: (item: CartItem) => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
}

interface Collection {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  gender: 'men' | 'women' | 'unisex';
  category: string;
}

export function GenderCollectionsPage({ 
  onBack, 
  cartCount, 
  onCartClick, 
  onAddToCart, 
  onCollectionClick, 
  onOurStoryClick, 
  onCraftsmanshipClick 
}: GenderCollectionsPageProps) {
  const [selectedGender, setSelectedGender] = useState<'men' | 'women' | null>(null);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'collections' | 'products'>('collections');

  // Sample collections data - आपको अपने actual data से replace करना है
  const allCollections: Collection[] = [
    // Men's Collections
    {
      id: 1,
      name: 'Men\'s Kurta Collection',
      description: 'Elegant and comfortable kurtas for every occasion',
      imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop',
      gender: 'men',
      category: 'Kurtas'
    },
    {
      id: 2,
      name: 'Men\'s Sherwani',
      description: 'Traditional wedding wear with modern elegance',
      imageUrl: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w-800&auto=format&fit=crop',
      gender: 'men',
      category: 'Sherwanis'
    },
    {
      id: 3,
      name: 'Men\'s Nehru Jacket',
      description: 'Sophisticated jackets for formal occasions',
      imageUrl: 'https://images.unsplash.com/photo-1593032465782-2f0d5d301d59?w=800&auto=format&fit=crop',
      gender: 'men',
      category: 'Jackets'
    },
    {
      id: 4,
      name: 'Men\'s Dhoti',
      description: 'Traditional lower garment with contemporary designs',
      imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop',
      gender: 'men',
      category: 'Dhotis'
    },
    {
      id: 5,
      name: 'Men\'s Indo-Western',
      description: 'Fusion wear blending traditional and modern styles',
      imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop',
      gender: 'men',
      category: 'Fusion Wear'
    },
    {
      id: 6,
      name: 'Men\'s Accessories',
      description: 'Juttis, stoles, and traditional accessories',
      imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop',
      gender: 'men',
      category: 'Accessories'
    },

    // Women's Collections
    {
      id: 7,
      name: 'Women\'s Saree Collection',
      description: 'Traditional sarees with contemporary designs',
      imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop',
      gender: 'women',
      category: 'Sarees'
    },
    {
      id: 8,
      name: 'Women\'s Lehenga Choli',
      description: 'Bridal and festive wear with intricate work',
      imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop',
      gender: 'women',
      category: 'Lehengas'
    },
    {
      id: 9,
      name: 'Women\'s Salwar Kameez',
      description: 'Comfortable and elegant everyday wear',
      imageUrl: 'https://images.unsplash.com/photo-1585487000160-6eb9ce6b5aae?w=800&auto=format&fit=crop',
      gender: 'women',
      category: 'Salwar Suits'
    },
    {
      id: 10,
      name: 'Women\'s Anarkali',
      description: 'Flowy and graceful dresses for special occasions',
      imageUrl: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=800&auto=format&fit=crop',
      gender: 'women',
      category: 'Anarkalis'
    },
    {
      id: 11,
      name: 'Women\'s Kurtis',
      description: 'Casual and formal kurtis with modern designs',
      imageUrl: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop',
      gender: 'women',
      category: 'Kurtis'
    },
    {
      id: 12,
      name: 'Women\'s Accessories',
      description: 'Jewelry, dupattas, and traditional accessories',
      imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop',
      gender: 'women',
      category: 'Accessories'
    },

    // Unisex Collections
    {
      id: 13,
      name: 'Unisex Shawls & Stoles',
      description: 'Warmth with traditional patterns and designs',
      imageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop',
      gender: 'unisex',
      category: 'Shawls'
    },
    {
      id: 14,
      name: 'Home Decor',
      description: 'Traditional home furnishings and decor items',
      imageUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&auto=format&fit=crop',
      gender: 'unisex',
      category: 'Home Decor'
    }
  ];

  // Filter collections by gender
  const mensCollections = allCollections.filter(collection => 
    collection.gender === 'men' || collection.gender === 'unisex'
  );
  
  const womensCollections = allCollections.filter(collection => 
    collection.gender === 'women' || collection.gender === 'unisex'
  );

  // Get unique categories for each gender
  const mensCategories = Array.from(new Set(mensCollections.map(c => c.category)));
  const womensCategories = Array.from(new Set(womensCollections.map(c => c.category)));

  const handleGenderSelect = (gender: 'men' | 'women') => {
    setSelectedGender(gender);
    setActiveTab('collections');
  };

  const handleCollectionSelect = (collectionName: string) => {
    setSelectedCollection(collectionName);
    setActiveTab('products');
  };

  const handleBackToGenderView = () => {
    if (activeTab === 'products' && selectedCollection) {
      setSelectedCollection(null);
      setActiveTab('collections');
    } else {
      setSelectedGender(null);
    }
  };

  const handleViewAll = (gender: 'men' | 'women') => {
    setSelectedGender(gender);
    setSelectedCollection(`${gender.charAt(0).toUpperCase() + gender.slice(1)}'s All Collections`);
    setActiveTab('products');
  };

  // If a collection is selected, show the product page
  if (selectedCollection && selectedGender) {
    return (
      <ProductPage
        collectionName={selectedCollection}
        onBack={handleBackToGenderView}
        cartCount={cartCount}
        onCartClick={onCartClick}
        onAddToCart={onAddToCart}
        onCollectionClick={onCollectionClick}
        onOurStoryClick={onOurStoryClick}
        onCraftsmanshipClick={onCraftsmanshipClick}
      />
    );
  }

  // If a gender is selected, show collections for that gender
  if (selectedGender) {
    const collections = selectedGender === 'men' ? mensCollections : womensCollections;
    const categories = selectedGender === 'men' ? mensCategories : womensCategories;
    const genderLabel = selectedGender === 'men' ? "Men's" : "Women's";

    return (
      <div className="min-h-screen bg-[#fdfcf9]">
        {/* Navigation */}
        <div className="fixed top-0 left-0 right-0 z-40 bg-[#fdfcf9]">
          <Navigation 
            cartCount={cartCount} 
            onCartClick={onCartClick} 
            mode="light"
            onCollectionClick={onCollectionClick}
            onOurStoryClick={onOurStoryClick}
            onCraftsmanshipClick={onCraftsmanshipClick}
          />
        </div>

        {/* Content */}
        <div className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Back Button */}
          <button
            onClick={handleBackToGenderView}
            className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors mb-8 sm:mb-10 md:mb-12 font-['Cormorant_Garamond',serif] tracking-[1.5px] text-[10px] sm:text-[11px]"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            BACK
          </button>

          {/* Gender Header */}
          <div className="text-center mb-12">
            <h1 className="text-[#2c1810] text-[32px] sm:text-[42px] md:text-[56px] tracking-[2.5px] sm:tracking-[3.5px] md:tracking-[4.48px] mb-4 sm:mb-5 md:mb-6 font-['Cinzel_Decorative',serif]">
              {genderLabel} Collections
            </h1>
            <p className="text-[#2c1810]/80 text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-[0.3px] sm:tracking-[0.4px] md:tracking-[0.5px] max-w-xl md:max-w-2xl mx-auto px-4 font-['Cormorant_Garamond',serif]">
              Explore our curated collections designed specifically for {selectedGender}
            </p>
          </div>

          {/* View All Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => handleViewAll(selectedGender)}
              className="px-6 py-3 bg-[#2c1810] text-white hover:bg-[#c9a060] transition-colors text-sm tracking-[2px] font-['Cormorant_Garamond',serif] uppercase rounded-lg"
            >
              View All {genderLabel} Products →
            </button>
          </div>

          {/* Categories Tabs */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => {
                  // Show all collections
                }}
                className="px-6 py-3 bg-[#c9a060] text-white rounded-lg text-sm tracking-[1px] font-['Cormorant_Garamond',serif]"
              >
                All Categories
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  className="px-6 py-3 bg-[#f5f1e8] text-[#2c1810] hover:bg-[#c9a060] hover:text-white transition-colors rounded-lg text-sm tracking-[1px] font-['Cormorant_Garamond',serif]"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 max-w-7xl mx-auto">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="group relative overflow-hidden bg-[#fdfcf9] rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105"
                role="button"
                tabIndex={0}
                aria-label={`View ${collection.name}`}
                onClick={() => handleCollectionSelect(collection.name)}
              >
                {/* Image Container */}
                <div className="relative h-96 sm:h-[28rem] md:h-[32rem] overflow-hidden bg-[#f5f1e8]">
                  <ImageWithFallback 
                    src={collection.imageUrl} 
                    alt={collection.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#2c1810]/80 text-white px-3 py-1 rounded-full text-xs font-['Cormorant_Garamond',serif] uppercase tracking-[1px]">
                    {collection.category}
                  </div>
                  
                  {/* Gender Badge */}
                  {collection.gender !== 'unisex' && (
                    <div className="absolute top-4 right-4 bg-[#c9a060] text-white px-3 py-1 rounded-full text-xs font-['Cormorant_Garamond',serif] uppercase tracking-[1px]">
                      {collection.gender === 'men' ? 'Men' : 'Women'}
                    </div>
                  )}
                  
                  {/* Corner Decorations */}
                  <div className="absolute left-3 sm:left-4 top-3 sm:top-4 w-10 sm:w-12 h-10 sm:h-12 border-l-2 border-t-2 border-[#c9a060] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute right-3 sm:right-4 bottom-3 sm:bottom-4 w-10 sm:w-12 h-10 sm:h-12 border-r-2 border-b-2 border-[#c9a060] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    {collection.gender !== 'unisex' && (
                      <span className="text-[10px] tracking-[2px] text-[#c9a060] font-['Cormorant_Garamond',serif] uppercase">
                        {collection.gender === 'men' ? "Men's" : "Women's"}
                      </span>
                    )}
                    <span className="text-[10px] tracking-[2px] text-[#f4d98a] font-['Cormorant_Garamond',serif] uppercase">
                      {collection.category}
                    </span>
                  </div>
                  
                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] tracking-[1.5px] sm:tracking-[1.7px] md:tracking-[1.92px] mb-2 sm:mb-3 text-white font-['Cinzel_Decorative',serif] transition-colors duration-300 group-hover:text-[#f4d98a] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {collection.name}
                  </h3>
                  
                  <p className="text-[12px] sm:text-[13px] leading-[20px] sm:leading-[22px] tracking-[0.3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white font-['Cormorant_Garamond',serif] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {collection.description}
                  </p>
                  
                  <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <span className="text-[10px] sm:text-[11px] tracking-[2px] border-b border-[#f4d98a] pb-1 text-white font-['Cormorant_Garamond',serif] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      VIEW COLLECTION <ChevronRight className="inline w-3 h-3 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <ExperienceFooterWrapper>
          <Footer />
        </ExperienceFooterWrapper>
      </div>
    );
  }

  // Main Gender Selection View
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
        />
      </div>

      {/* Content */}
      <div className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors mb-8 sm:mb-10 md:mb-12 font-['Cormorant_Garamond',serif] tracking-[1.5px] text-[10px] sm:text-[11px]"
          aria-label="Go back to home page"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          BACK
        </button>

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-[#2c1810] text-[32px] sm:text-[42px] md:text-[56px] tracking-[2.5px] sm:tracking-[3.5px] md:tracking-[4.48px] mb-4 sm:mb-5 md:mb-6 font-['Cinzel_Decorative',serif]">
            Shop by Gender
          </h1>
          <p className="text-[#2c1810]/80 text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-[0.3px] sm:tracking-[0.4px] md:tracking-[0.5px] max-w-xl md:max-w-2xl mx-auto px-4 font-['Cormorant_Garamond',serif]">
            Explore our curated collections designed specifically for men and women, featuring traditional craftsmanship with contemporary elegance
          </p>
        </div>

        {/* Gender Selection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          {/* Men's Section */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02]">
            <div className="relative h-[600px] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2c1810]">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500">
                <img
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1200&auto=format&fit=crop&q=80"
                  alt="Men's Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 sm:p-10 md:p-12">
                <div>
                  <div className="inline-block px-4 py-2 bg-[#c9a060]/20 backdrop-blur-sm rounded-full mb-6">
                    <span className="text-[#c9a060] text-[11px] tracking-[3px] font-['Cormorant_Garamond',serif] uppercase">
                      For Him
                    </span>
                  </div>
                  
                  <h2 className="text-white text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] tracking-[2px] sm:tracking-[3px] md:tracking-[4px] mb-4 font-['Cinzel_Decorative',serif]">
                    Men's <br />Collection
                  </h2>
                  
                  <p className="text-white/80 text-[16px] sm:text-[17px] md:text-[18px] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[0.5px] max-w-md mb-8 font-['Cormorant_Garamond',serif]">
                    Traditional attire with modern sophistication - Sherwanis, Kurtas, and Indo-Western fusion wear
                  </p>
                </div>
                
                <div>
                  {/* Collections Count */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-white">
                      <div className="text-[32px] font-bold font-['Cinzel_Decorative',serif]">{mensCategories.length}</div>
                      <div className="text-[12px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase opacity-80">Categories</div>
                    </div>
                    <div className="text-white">
                      <div className="text-[32px] font-bold font-['Cinzel_Decorative',serif]">{mensCollections.length}</div>
                      <div className="text-[12px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase opacity-80">Collections</div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleGenderSelect('men')}
                    className="w-full py-4 bg-[#c9a060] text-white hover:bg-[#b89050] transition-colors text-center text-[14px] tracking-[3px] font-['Cormorant_Garamond',serif] uppercase rounded-lg flex items-center justify-center gap-3"
                  >
                    Explore Men's Collections
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Corner Decorations */}
              <div className="absolute left-6 top-6 w-16 h-16 border-l-2 border-t-2 border-[#c9a060] opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute right-6 bottom-6 w-16 h-16 border-r-2 border-b-2 border-[#c9a060] opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          </div>

          {/* Women's Section */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02]">
            <div className="relative h-[600px] overflow-hidden bg-gradient-to-br from-[#2c1810] to-[#1a1a1a]">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop&q=80"
                  alt="Women's Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 sm:p-10 md:p-12">
                <div>
                  <div className="inline-block px-4 py-2 bg-[#c9a060]/20 backdrop-blur-sm rounded-full mb-6">
                    <span className="text-[#c9a060] text-[11px] tracking-[3px] font-['Cormorant_Garamond',serif] uppercase">
                      For Her
                    </span>
                  </div>
                  
                  <h2 className="text-white text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] tracking-[2px] sm:tracking-[3px] md:tracking-[4px] mb-4 font-['Cinzel_Decorative',serif]">
                    Women's <br />Collection
                  </h2>
                  
                  <p className="text-white/80 text-[16px] sm:text-[17px] md:text-[18px] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[0.5px] max-w-md mb-8 font-['Cormorant_Garamond',serif]">
                    Elegant traditional wear - Sarees, Lehengas, Anarkalis, and contemporary ethnic fashion
                  </p>
                </div>
                
                <div>
                  {/* Collections Count */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-white">
                      <div className="text-[32px] font-bold font-['Cinzel_Decorative',serif]">{womensCategories.length}</div>
                      <div className="text-[12px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase opacity-80">Categories</div>
                    </div>
                    <div className="text-white">
                      <div className="text-[32px] font-bold font-['Cinzel_Decorative',serif]">{womensCollections.length}</div>
                      <div className="text-[12px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase opacity-80">Collections</div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleGenderSelect('women')}
                    className="w-full py-4 bg-[#c9a060] text-white hover:bg-[#b89050] transition-colors text-center text-[14px] tracking-[3px] font-['Cormorant_Garamond',serif] uppercase rounded-lg flex items-center justify-center gap-3"
                  >
                    Explore Women's Collections
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Corner Decorations */}
              <div className="absolute left-6 top-6 w-16 h-16 border-l-2 border-t-2 border-[#c9a060] opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute right-6 bottom-6 w-16 h-16 border-r-2 border-b-2 border-[#c9a060] opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          </div>
        </div>

        {/* Unisex Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#f5f1e8] to-[#e8e0d0] rounded-2xl p-8 sm:p-10 md:p-12 text-center">
            <h3 className="text-[#2c1810] text-[24px] sm:text-[28px] md:text-[32px] tracking-[1.5px] mb-4 font-['Cinzel_Decorative',serif]">
              Unisex & Home Collections
            </h3>
            <p className="text-[#2c1810]/70 text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] mb-6 font-['Cormorant_Garamond',serif] max-w-2xl mx-auto">
              Explore our collection of shawls, stoles, home decor, and accessories suitable for everyone
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => handleGenderSelect('men')}
                className="px-6 py-3 bg-[#2c1810] text-white hover:bg-[#c9a060] transition-colors text-sm tracking-[2px] font-['Cormorant_Garamond',serif] uppercase rounded-lg"
              >
                Shawls & Stoles
              </button>
              <button
                onClick={() => handleGenderSelect('women')}
                className="px-6 py-3 bg-transparent border-2 border-[#2c1810] text-[#2c1810] hover:bg-[#2c1810] hover:text-white transition-colors text-sm tracking-[2px] font-['Cormorant_Garamond',serif] uppercase rounded-lg"
              >
                Home Decor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <ExperienceFooterWrapper>
        <Footer />
      </ExperienceFooterWrapper>
    </div>
  );
}