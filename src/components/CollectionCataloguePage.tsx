

import { useState, useEffect } from 'react';
import { ArrowLeft, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Navigation } from './Navigation';
import { motion } from 'motion/react';
import { ProductDetailPage, CartItem } from './ProductDetailPage';
import { Footer } from './Footer';
import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';

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
}

interface ApiProduct {
  _id: string;
  name: string;
  price: number;
  category: string;
  collection?: string;
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
}: CollectionCataloguePageProps) {
  const [apiProducts, setApiProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

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

  const products =
    gender === 'women'
      ? apiProducts.map(p => ({
          id: p._id,
          name: p.name,
          price: p.price,
          collection: p.collection || collectionName,
          image: p.images?.[0]?.url || null,
          variants: p.variants || [],
        }))
      : getProductsForCollection(collectionId);

  /* ================= UNIQUE FILTER DATA ================= */

  const allSizes = Array.from(
    new Set(products.flatMap(p => p.variants?.map(v => v.size) || []))
  );

  const allColors = Array.from(
    new Set(products.flatMap(p => p.variants?.map(v => v.color) || []))
  );

  /* ================= FILTER LOGIC ================= */

  const filteredProducts = products.filter(product => {
    if (selectedSizes.length > 0) {
      if (
        !product.variants?.some(v => selectedSizes.includes(v.size))
      )
        return false;
    }

    if (selectedColors.length > 0) {
      if (
        !product.variants?.some(v => selectedColors.includes(v.color))
      )
        return false;
    }

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  /* ================= PRODUCT DETAIL ================= */

  if (selectedProduct) {
    const product = products.find(p => p.id === selectedProduct);
    if (product) {
      return (
        // <ProductDetailPage
        //   productId={product.id}
        //   productName={product.name}
        //   collectionName={product.collection}
        //   price={product.price}
        //   gender={gender}
        //   onBack={() => {
        //     setSelectedProduct(null);
        //     window.scrollTo({ top: 0, behavior: 'instant' });
        //   }}
        //   cartCount={cartCount}
        //   onCartClick={onCartClick}
        //   onAddToCart={onAddToCart}
        // />
        // CollectionCataloguePage mein
<ProductDetailPage
  productId={product.id}
  productName={product.name}
  collectionName={product.collection}
  price={product.price}
  gender={gender} // Yahan se gender pass karo
  onBack={() => {
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }}
  cartCount={cartCount}
  onCartClick={onCartClick}
  onAddToCart={onAddToCart}
/>
      );
    }
  }

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-[#fdfcf9]">
      {/* NAV */}
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

      {/* CONTENT */}
      <div className="pt-24 px-4 sm:px-10 pb-20">
        {/* BACK */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-10 text-[11px] tracking-[2px]"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK
        </button>

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-[40px] tracking-[4px] font-['Cinzel_Decorative',serif]">
            {collectionName}
          </h1>
          <p className="text-[12px] mt-2 text-[#2c1810]/60">
            {sortedProducts.length} Products
          </p>
        </div>

        {/* FILTER + SORT */}
        <div className="flex justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-[11px]"
          >
            <SlidersHorizontal className="w-4 h-4" />
            FILTERS
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="border px-4 py-2 text-[11px]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price Low → High</option>
              <option value="price-high">Price High → Low</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4" />
          </div>
        </div>

        {/* FILTER PANEL */}
        {showFilters && (
          <div className="mb-10 border p-6 rounded-lg">
            {/* COLORS */}
            {allColors.length > 0 && (
              <div className="mb-6">
                <h4 className="text-[12px] mb-3">COLOR</h4>
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
                      className={`w-7 h-7 rounded-full border ${
                        selectedColors.includes(color)
                          ? 'ring-2 ring-[#c9a060]'
                          : ''
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* SIZES */}
            {allSizes.length > 0 && (
              <div>
                <h4 className="text-[12px] mb-3">SIZE</h4>
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
                      className={`py-2 text-[11px] border ${
                        selectedSizes.includes(size)
                          ? 'bg-[#c9a060] text-white'
                          : ''
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => {
                setSelectedSizes([]);
                setSelectedColors([]);
              }}
              className="text-xs underline mt-6"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="cursor-pointer"
              onClick={() => setSelectedProduct(product.id)}
            >
              <div className="aspect-[3/4] bg-[#2c1810]/5 mb-3">
                {product.image ? (
                  <img
                    src={product.image}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-xs opacity-40">
                    No Image
                  </div>
                )}
              </div>

              <div className="text-center">
                <h3 className="text-[14px]">{product.name}</h3>
                <p className="text-[12px] mt-1">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <ExperienceFooterWrapper>
        <Footer
          onHomeClick={onBack}
          onCollectionClick={onCollectionClick}
          onOurStoryClick={onOurStoryClick}
          onCraftsmanshipClick={onCraftsmanshipClick}
        />
      </ExperienceFooterWrapper>
    </div>
  );
}
