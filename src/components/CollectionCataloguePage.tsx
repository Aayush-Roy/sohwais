
import { useState, useEffect, useMemo } from 'react';
import { ArrowLeft, SlidersHorizontal, ChevronDown, Search, X } from 'lucide-react';
import { Navigation } from './Navigation';
import { motion } from 'motion/react';
import { ProductDetailPage, CartItem } from './ProductDetailPage';
import { Footer } from './Footer';
import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

/* ================= TYPES ================= */

interface CollectionCataloguePageProps {
  collectionId: string;
  collectionName: string;
  gender: 'men' | 'women';
  onBack: (event?: React.MouseEvent) => void;
  cartCount: number;
  onCartClick: () => void;
  onAddToCart: (item: CartItem) => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
  onLogoClick?: () => void;
  onHomeClick?: () => void;
}

interface ApiProduct {
  _id: string;
  name: string;
  price: number;
  category: string;
  collection?: string;
  description?: string;
  subCategory?: string;
  images?: { url: string }[];
  variants?: {
    size: string;
    color: string;
  }[];
}

/* ================= DUMMY MEN DATA ================= */

const getProductsForCollection = (collectionId: string) => {
  const baseProducts = [
    {
      id: '1',
      name: 'Heritage Kurta',
      price: 4999,
      collection: collectionId,
      description: 'Traditional handcrafted kurta',
      subCategory: 'Kurtas',
      variants: [
        { size: 'M', color: 'Black' },
        { size: 'L', color: 'White' },
      ],
    },
    {
      id: '2',
      name: 'Traditional Sherwani',
      price: 8999,
      collection: collectionId,
      description: 'Elegant sherwani for special occasions',
      subCategory: 'Sherwanis',
      variants: [{ size: 'XL', color: 'Gold' }],
    },
  ];

  return baseProducts;
};

/* ================= COMPONENT ================= */

export function CollectionCataloguePage({
  collectionId,
  collectionName,
  gender,
  onBack,
  cartCount,
  onCartClick,
  onAddToCart,
  onCollectionClick,
  onOurStoryClick,
  onCraftsmanshipClick,
  onLogoClick,
  onHomeClick,
}: CollectionCataloguePageProps) {
  const [apiProducts, setApiProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>(
    'featured'
  );

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  /* ================= FETCH WOMEN PRODUCTS ================= */

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (gender === 'women') {
      fetchWomenProducts();
    }
  }, [gender]);

  const fetchWomenProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        'https://api.sohwais.com/api/products/category/Women'
      );
      const result = await res.json();

      if (result.success && Array.isArray(result.data)) {
        setApiProducts(result.data);
      }
    } catch (err) {
      console.error('Women API error:', err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= PRODUCTS SOURCE ================= */

  const products = useMemo(() => {
    const baseProducts = gender === 'women'
      ? apiProducts.map(p => ({
          id: p._id,
          name: p.name,
          price: p.price,
          collection: p.collection || collectionName,
          description: p.description || '',
          category: p.category || '',
          subCategory: p.subCategory || '',
          image: p.images?.[0]?.url || null,
          variants: p.variants || [],
        }))
      : getProductsForCollection(collectionId);

    return baseProducts;
  }, [gender, apiProducts, collectionName, collectionId]);

  /* ================= SEARCH AND FILTER LOGIC ================= */

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) ||
        (product.description && product.description.toLowerCase().includes(query)) ||
        (product.collection && product.collection.toLowerCase().includes(query)) ||
        (product.category && product.category.toLowerCase().includes(query)) ||
        (product.subCategory && product.subCategory.toLowerCase().includes(query))
      );
    }

    // Size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product =>
        product.variants?.some(v => selectedSizes.includes(v.size))
      );
    }

    // Color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product =>
        product.variants?.some(v => selectedColors.includes(v.color))
      );
    }

    return filtered;
  }, [products, searchQuery, selectedSizes, selectedColors]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    
    if (sortBy === 'price-low') {
      return sorted.sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-high') {
      return sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, [filteredProducts, sortBy]);

  /* ================= UNIQUE FILTER DATA ================= */

  const allSizes = useMemo(() => 
    Array.from(new Set(products.flatMap(p => p.variants?.map(v => v.size) || []))),
    [products]
  );

  const allColors = useMemo(() => 
    Array.from(new Set(products.flatMap(p => p.variants?.map(v => v.color) || []))),
    [products]
  );

  /* ================= HANDLERS ================= */

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSearchInput(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowSearchInput(false);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  /* ================= PRODUCT DETAIL ================= */
console.log("selectedProduct:", selectedProduct, typeof selectedProduct);

console.log("All products:", products);
console.log("Looking for:", selectedProduct);

  if (selectedProduct) {
    const product = products.find(p => p.id === selectedProduct);
    // console.log("product.id:", p.id, typeof p.id);
    console.log("id",product)
    if (product) {
      return (
        <ProductDetailPage
          productId={product.id}
          productName={product.name}
          collectionName={product.collection}
          price={product.price}
          gender={gender}
          onBack={() => {
            setSelectedProduct(null);
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          // onLogoClick={onLogoClick || onHomeClick || onBack}
          cartCount={cartCount}
          onCartClick={onCartClick}
          onAddToCart={onAddToCart}
          onCollectionClick={onCollectionClick}
          onOurStoryClick={onOurStoryClick}
          onCraftsmanshipClick={onCraftsmanshipClick}
        />
      );
    }
  }

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-[#fdfcf9]">
      {/* NAV */}
      {/* <div className="fixed top-0 left-0 right-0 z-40">
        <Navigation
          cartCount={cartCount}
          onCartClick={onCartClick}
          mode="light"
          onCollectionClick={onCollectionClick}
          onOurStoryClick={onOurStoryClick}
          onCraftsmanshipClick={onCraftsmanshipClick}
          onLogoClick={onLogoClick || onHomeClick || onBack}
        />
      </div> */}

      {/* CONTENT */}
      <div className="pt-24 px-4 sm:px-10 pb-20">
        {/* BACK AND SEARCH */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <button
            // onClick={onBack}
            onClick={()=>navigate(-1)}
            className="flex items-center gap-2 text-[11px] tracking-[2px] text-[#2c1810] hover:text-[#c9a060] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK
          </button>

          {/* Search Bar */}
          <div className="relative w-full sm:w-auto">
            {showSearchInput ? (
              <form 
                onSubmit={handleSearch}
                className="relative"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products in this collection..."
                  className="w-full sm:w-80 px-4 py-2 pl-10 pr-10 text-sm border border-[#2c1810]/20 rounded-full focus:outline-none focus:border-[#c9a060] focus:ring-1 focus:ring-[#c9a060] font-['Cormorant_Garamond',serif] text-[#2c1810]"
                  autoFocus
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#2c1810]/50" />
                
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2c1810]/30 hover:text-[#c9a060] transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </form>
            ) : (
              <button
                onClick={() => setShowSearchInput(true)}
                className="flex items-center gap-2 px-4 py-2 text-[11px] tracking-[2px] text-[#2c1810] hover:text-[#c9a060] transition-colors border border-[#2c1810]/20 rounded-full hover:border-[#c9a060]"
                aria-label="Search products"
              >
                <Search className="w-4 h-4" />
                SEARCH
              </button>
            )}
          </div>
        </div>

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-[40px] tracking-[4px] font-['Cinzel_Decorative',serif] text-[#2c1810]">
            {collectionName}
          </h1>
          
          {/* Search Results Summary */}
          {searchQuery && (
            <div className="mb-2">
              <p className="text-[#c9a060] text-sm font-['Cormorant_Garamond',serif]">
                Found {sortedProducts.length} results for "{searchQuery}"
              </p>
            </div>
          )}
          
          <p className="text-[12px] mt-2 text-[#2c1810]/60 font-['Cormorant_Garamond',serif]">
            {sortedProducts.length} Products
          </p>
        </div>

        {/* FILTER + SORT */}
        <div className="flex justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-[11px] tracking-[2px] text-[#2c1810] hover:text-[#c9a060] transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            FILTERS
            {(selectedSizes.length + selectedColors.length) > 0 && (
              <span className="ml-1 text-[#c9a060]">
                ({selectedSizes.length + selectedColors.length})
              </span>
            )}
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="appearance-none bg-transparent border border-[#2c1810]/20 px-4 py-2 text-[11px] tracking-[1px] rounded focus:outline-none focus:border-[#c9a060] font-['Cormorant_Garamond',serif] text-[#2c1810] hover:cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price Low → High</option>
              <option value="price-high">Price High → Low</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        {/* FILTER PANEL */}
        {showFilters && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-10 border border-[#2c1810]/10 p-6 rounded-lg bg-white shadow-sm"
          >
            {/* Search in Filters */}
            <div className="mb-6 pb-6 border-b border-[#2c1810]/10">
              <h4 className="text-[12px] tracking-[1.5px] mb-3 font-['Cormorant_Garamond',serif] text-[#2c1810] uppercase">
                Search
              </h4>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type to search products..."
                  className="w-full px-4 py-2 pl-10 text-sm border border-[#2c1810]/20 rounded-full focus:outline-none focus:border-[#c9a060] font-['Cormorant_Garamond',serif] text-[#2c1810]"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#2c1810]/50" />
              </div>
            </div>

            {/* COLORS */}
            {allColors.length > 0 && (
              <div className="mb-6 pb-6 border-b border-[#2c1810]/10">
                <h4 className="text-[12px] tracking-[1.5px] mb-3 font-['Cormorant_Garamond',serif] text-[#2c1810] uppercase">
                  COLOR
                </h4>
                <div className="flex gap-3 flex-wrap">
                  {allColors.map(color => (
                    <button
                      key={color}
                      onClick={() =>
                        setSelectedColors(prev =>
                          prev.includes(color)
                            ? prev.filter(c => c !== color)
                            : [...prev, color]
                        )
                      }
                      className={`w-7 h-7 rounded-full border transition-all ${
                        selectedColors.includes(color)
                          ? 'ring-2 ring-[#c9a060] ring-offset-1'
                          : 'border-[#2c1810]/30'
                      }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* SIZES */}
            {allSizes.length > 0 && (
              <div className="mb-6">
                <h4 className="text-[12px] tracking-[1.5px] mb-3 font-['Cormorant_Garamond',serif] text-[#2c1810] uppercase">
                  SIZE
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  {allSizes.map(size => (
                    <button
                      key={size}
                      onClick={() =>
                        setSelectedSizes(prev =>
                          prev.includes(size)
                            ? prev.filter(s => s !== size)
                            : [...prev, size]
                        )
                      }
                      className={`py-2 text-[11px] tracking-[1px] border transition-all font-['Cormorant_Garamond',serif] ${
                        selectedSizes.includes(size)
                          ? 'bg-[#c9a060] text-white border-[#c9a060]'
                          : 'text-[#2c1810] border-[#2c1810]/20 hover:border-[#c9a060]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Clear Filters Button */}
            <div className="flex gap-3">
              <button
                onClick={clearAllFilters}
                className="px-4 py-2 text-[11px] tracking-[1px] border border-[#2c1810]/20 rounded hover:bg-[#2c1810] hover:text-white transition-colors font-['Cormorant_Garamond',serif]"
              >
                Clear All Filters
              </button>
              {(selectedSizes.length > 0 || selectedColors.length > 0) && (
                <button
                  onClick={() => {
                    setSelectedSizes([]);
                    setSelectedColors([]);
                  }}
                  className="px-4 py-2 text-[11px] tracking-[1px] text-[#c9a060] hover:text-[#a88440] font-['Cormorant_Garamond',serif]"
                >
                  Clear Size/Color
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* GRID */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c9a060] mb-4"></div>
            <p className="text-[#2c1810] font-['Cormorant_Garamond',serif]">
              Loading {collectionName} collection...
            </p>
          </div>
        ) : sortedProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search className="w-16 h-16 text-[#2c1810]/30 mb-4" />
            <p className="text-[#2c1810] font-['Cormorant_Garamond',serif] text-lg mb-2">
              {searchQuery 
                ? `No products found for "${searchQuery}"`
                : `No products available in ${collectionName}`}
            </p>
            <p className="text-[#2c1810]/70 font-['Cormorant_Garamond',serif] mb-6 max-w-md">
              Try adjusting your search or filters.
            </p>
            <div className="flex gap-4">
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="px-6 py-2 text-sm text-[#c9a060] border border-[#c9a060] rounded hover:bg-[#c9a060] hover:text-white transition-colors font-['Cormorant_Garamond',serif]"
                >
                  Clear Search
                </button>
              )}
              {(selectedSizes.length > 0 || selectedColors.length > 0) && (
                <button
                  onClick={() => {
                    setSelectedSizes([]);
                    setSelectedColors([]);
                  }}
                  className="px-6 py-2 text-sm text-[#2c1810] border border-[#2c1810]/20 rounded hover:bg-[#2c1810] hover:text-white transition-colors font-['Cormorant_Garamond',serif]"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="cursor-pointer group"
                // onClick={() => setSelectedProduct(product.id)}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="relative aspect-[3/4] bg-[#f5f1e8] overflow-hidden mb-3 rounded-lg">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1568259550238-762d5f3d8e7f';
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-xs opacity-40">
                      No Image
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#2c1810]/0 group-hover:bg-[#2c1810]/10 transition-all duration-300" />
                </div>

                <div className="text-center">
                  <h3 className="text-[14px] font-['Cinzel_Decorative',serif] text-[#2c1810] group-hover:text-[#c9a060] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[12px] mt-1 font-['Cormorant_Garamond',serif] text-[#2c1810]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </p>
                  
                  {/* Variants Preview */}
                  {product.variants && product.variants.length > 0 && (
                    <div className="flex justify-center gap-1 mt-2">
                      {product.variants.slice(0, 3).map((variant, idx) => (
                        <div key={idx} className="flex items-center gap-1">
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: variant.color }}
                          />
                          <span className="text-[10px] text-[#2c1810]/60">{variant.size}</span>
                        </div>
                      ))}
                      {product.variants.length > 3 && (
                        <span className="text-[10px] text-[#2c1810]/40">+{product.variants.length - 3}</span>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <ExperienceFooterWrapper>
        <Footer
          onHomeClick={onLogoClick || onHomeClick || onBack}
          onCollectionClick={onCollectionClick}
          onOurStoryClick={onOurStoryClick}
          onCraftsmanshipClick={onCraftsmanshipClick}
        />
      </ExperienceFooterWrapper>
    </div>
  );
}