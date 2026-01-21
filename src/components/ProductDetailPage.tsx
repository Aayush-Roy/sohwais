
import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ShoppingCart, 
  ChevronDown, 
  Minus, 
  Plus, 
  Check, 
  Loader,
  Star,
  Heart
} from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';

const API_BASE_URL = "https://api.sohwais.com/api";
// const API_BASE_URL = "http://localhost:5000/api";

interface ProductDetailPageProps {
  productId: string;
  productName?: string;
  collectionName?: string;
  price?: number;
  discount?: number;
  description?: string;
  images?: any[];
  variants?: any[];
  features?: string[];
  category?: string;
  subCategory?: string;
  onBack: () => void;
  onAddToCart: (item: CartItem) => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
  cartCount?: number;
  onCartClick?: () => void;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  discount: number;
  finalPrice: number;
  size: string;
  color: string;
  quantity: number;
  image: string;
  collection: string;
  productId: string;
  variantId?: string;
}

interface Product {
  _id: string;
  name: string;
  category: string;
  collection: string;
  subCategory: string;
  price: number;
  discount: number;
  stock: number;
  status: string;
  description: string;
  images: {
    url: string;
    public_id: string;
    isPrimary?: boolean;
  }[];
  variants: {
    color: string;
    size: string;
    price: number;
  }[];
  features: string[];
  tags: string[];
  rating: number;
  reviewsCount: number;
  createdAt: string;
  updatedAt: string;
}

export function ProductDetailPage({ 
  productId,
  productName, 
  collectionName, 
  price,
  discount,
  description,
  images: propImages,
  variants: propVariants,
  features: propFeatures,
  category,
  subCategory,
  onBack, 
  onAddToCart, 
  onCollectionClick, 
  onOurStoryClick, 
  onCraftsmanshipClick, 
  cartCount = 0, 
  onCartClick 
}: ProductDetailPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showAddToCartAnimation, setShowAddToCartAnimation] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);

  // Fetch product details from API
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`${API_BASE_URL}/products/${productId}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          setProduct(data.data);
          
          // Set default selections
          if (data.data.variants && data.data.variants.length > 0) {
            const firstVariant = data.data.variants[0];
            setSelectedSize(firstVariant.size || '');
            setSelectedColor(firstVariant.color || '');
          }
        } else {
          throw new Error(data.message || 'Failed to fetch product');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setError(error instanceof Error ? error.message : 'Failed to load product');
        
        // Use props as fallback if available
        if (productName && price) {
          setProduct({
            _id: productId,
            name: productName,
            category: category || 'HANDCRAFTED',
            collection: collectionName || 'Collection',
            subCategory: subCategory || 'Traditional',
            price: price,
            discount: discount || 0,
            stock: 10,
            status: 'Active',
            description: description || `Experience the timeless elegance of ${collectionName} with this exquisitely handcrafted piece.`,
            images: propImages || [{ url: 'https://images.unsplash.com/photo-1568259550238-762d5f3d8e7f', public_id: 'placeholder' }],
            variants: propVariants || [{ color: '#000000', size: 'M', price: price || 0 }],
            features: propFeatures || ['Handcrafted with traditional techniques'],
            tags: [],
            rating: 4.5,
            reviewsCount: 10,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  // Get unique sizes and colors from variants
  const uniqueSizes = Array.from(new Set(
    product?.variants?.map(variant => variant.size) || []
  )).filter(Boolean);

  const uniqueColors = Array.from(new Set(
    product?.variants?.map(variant => variant.color) || []
  )).filter(Boolean);

  // Get selected variant
  const selectedVariant = product?.variants?.find(variant => 
    variant.size === selectedSize && variant.color === selectedColor
  );

  // Get final price (with discount)
  const getFinalPrice = () => {
    if (!product) return 0;
    const basePrice = selectedVariant?.price || product.price;
    return product.discount > 0 
      ? Math.round(basePrice - (basePrice * product.discount / 100))
      : basePrice;
  };

  // Get primary image
  const getPrimaryImage = (index?: number) => {
    if (product?.images?.length) {
      if (index !== undefined) {
        return product.images[index]?.url;
      }
      const primaryImage = product.images.find(img => img.isPrimary);
      return primaryImage?.url || product.images[0]?.url;
    }
    return 'https://images.unsplash.com/photo-1568259550238-762d5f3d8e7f';
  };

  // Get stock status
  const getStockStatus = () => {
    if (!product) return 'Available';
    if (product.stock === 0) return 'Out of Stock';
    if (product.stock < 10) return `Only ${product.stock} left`;
    return 'In Stock';
  };

  const handleAddToCart = () => {
    if (!product) return;
    
    if (!selectedSize && uniqueSizes.length > 0) {
      alert('Please select a size');
      return;
    }

    if (!selectedColor && uniqueColors.length > 0) {
      alert('Please select a color');
      return;
    }

    const cartItem: CartItem = {
      id: `${product._id}-${selectedSize}-${selectedColor}`,
      productId: product._id,
      name: product.name,
      price: selectedVariant?.price || product.price,
      discount: product.discount,
      finalPrice: getFinalPrice(),
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
      image: getPrimaryImage(),
      collection: product.collection,
      variantId: selectedVariant ? `${selectedSize}-${selectedColor}` : undefined
    };

    onAddToCart(cartItem);
    
    // Trigger animation
    setShowAddToCartAnimation(true);
    setTimeout(() => {
      setShowAddToCartAnimation(false);
    }, 1000);
  };

  const toggleWishlist = () => {
    setWishlisted(!wishlisted);
    // TODO: Implement wishlist API
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fdfcf9] flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 animate-spin text-[#c9a060] mx-auto mb-4" />
          <p className="text-[#2c1810] font-['Cormorant_Garamond',serif]">
            Loading product details...
          </p>
        </div>
      </div>
    );
  }

  if (error && !product) {
    return (
      <div className="min-h-screen bg-[#fdfcf9] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h2 className="text-[24px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-4">
            Product Not Found
          </h2>
          <p className="text-[#2c1810] font-['Cormorant_Garamond',serif] mb-6">
            {error}
          </p>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-[#c9a060] text-white rounded-lg hover:bg-[#b8914f] transition-colors font-['Cormorant_Garamond',serif]"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#fdfcf9] relative">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-[#fdfcf9]">
        <Navigation 
          mode="light" 
          onCollectionClick={onCollectionClick} 
          onOurStoryClick={onOurStoryClick} 
          onCraftsmanshipClick={onCraftsmanshipClick} 
          cartCount={cartCount} 
          onCartClick={onCartClick} 
        />
      </div>

      {/* Add to Cart Animation */}
      {showAddToCartAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="animate-[ping_0.5s_ease-out]">
            <div className="bg-[#c9a060] text-white rounded-full p-6 shadow-2xl flex items-center gap-3">
              <Check className="w-8 h-8" />
              <span className="text-[16px] tracking-[1px] font-['Cormorant_Garamond',serif]">
                Added to Cart!
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors mb-6 sm:mb-8 font-['Cormorant_Garamond',serif] tracking-[1.5px] text-[10px] sm:text-[11px] uppercase"
          aria-label="Go back to products"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          BACK TO PRODUCTS
        </button>

        {/* Product Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-3 sm:space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-[#f5f1e8] rounded-lg overflow-hidden shadow-lg group">
              <img
                src={getPrimaryImage(currentImageIndex)}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1568259550238-762d5f3d8e7f';
                }}
              />
              
              {/* Discount Badge */}
              {product.discount > 0 && (
                <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  {product.discount}% OFF
                </div>
              )}
              
              {/* Wishlist Button */}
              <button
                onClick={toggleWishlist}
                className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors group/wishlist"
                aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart 
                  className={`w-5 h-5 transition-colors ${
                    wishlisted 
                      ? 'fill-red-500 text-red-500' 
                      : 'text-[#2c1810] group-hover/wishlist:text-red-500'
                  }`}
                />
              </button>
              
              {/* Corner Decorations */}
              <div className="absolute left-3 sm:left-4 top-3 sm:top-4 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 border-l-2 border-t-2 border-[#c9a060]" />
              <div className="absolute right-3 sm:right-4 bottom-3 sm:bottom-4 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 border-r-2 border-b-2 border-[#c9a060]" />
            </div>

            {/* Thumbnail Images */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3 sm:gap-4">
                {/* {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square bg-[#f5f1e8] rounded-lg overflow-hidden transition-all ${
                      currentImageIndex === index
                        ? 'ring-2 ring-[#c9a060] shadow-lg'
                        : 'hover:ring-2 hover:ring-[#c9a060]/50'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1568259550238-762d5f3d8e7f';
                      }}
                    />
                  </button>
                ))} */}

                {product.images
  .slice(0, 5)
  .map((image, index) => (
    <button
      key={index}
      onClick={() => setCurrentImageIndex(index)}
      className={`aspect-square bg-[#f5f1e8] rounded-lg overflow-hidden transition-all ${
        currentImageIndex === index
          ? 'ring-2 ring-[#c9a060] shadow-lg'
          : 'hover:ring-2 hover:ring-[#c9a060]/50'
      }`}
    >
      <img
        src={image.url}
        alt={`${product.name} view ${index + 1}`}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src =
            'https://images.unsplash.com/photo-1568259550238-762d5f3d8e7f';
        }}
      />
    </button>
))}

              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Category and Rating */}
            <div className="flex justify-between items-start">
              <p className="text-[10px] sm:text-[11px] tracking-[2px] text-[#2c1810]/60 font-['Cormorant_Garamond',serif] uppercase">
                {product.category} • {product.subCategory}
              </p>
              
              {/* Rating */}
              {/* <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating || 0)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#2c1810]/60 ml-1">
                  ({product.reviewsCount || 0} reviews)
                </span>
              </div> */}
            </div>

            {/* Product Name */}
            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] font-['Cinzel_Decorative',serif] text-[#2c1810]">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3">
              {product.discount > 0 ? (
                <>
                  <p className="text-[24px] sm:text-[28px] md:text-[32px] tracking-[0.5px] sm:tracking-[0.8px] md:tracking-[1px] font-['Cormorant_Garamond',serif] text-[#c9a060] font-bold">
                    ₹ {getFinalPrice().toLocaleString('en-IN')}
                  </p>
                  <p className="text-[18px] sm:text-[20px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]/50 line-through">
                    ₹ {(selectedVariant?.price || product.price).toLocaleString('en-IN')}
                  </p>
                </>
              ) : (
                <p className="text-[24px] sm:text-[28px] md:text-[32px] tracking-[0.5px] sm:tracking-[0.8px] md:tracking-[1px] font-['Cormorant_Garamond',serif] text-[#2c1810] font-bold">
                  ₹ {(selectedVariant?.price || product.price).toLocaleString('en-IN')}
                </p>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <span className={`inline-block w-2 h-2 rounded-full ${
                product.stock > 10 ? 'bg-green-500' :
                product.stock > 0 ? 'bg-yellow-500' :
                'bg-red-500'
              }`} />
              <span className="text-sm text-[#2c1810] font-['Cormorant_Garamond',serif]">
                {getStockStatus()}
              </span>
            </div>

            {/* Collection Badge */}
            <div className="inline-block px-4 py-2 bg-[#f5f1e8] rounded-full">
              <span className="text-[12px] tracking-[1px] text-[#2c1810] font-['Cormorant_Garamond',serif]">
                {product.collection}
              </span>
            </div>

            {/* Color Selector */}
            {uniqueColors.length > 0 && (
              <div className="space-y-3">
                <label className="text-[12px] sm:text-[13px] tracking-[1.5px] font-['Cormorant_Garamond',serif] text-[#2c1810] uppercase">
                  Select Color
                </label>
                <div className="flex flex-wrap gap-3">
                  {uniqueColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-lg border-2 transition-all ${
                        selectedColor === color
                          ? 'border-[#c9a060] scale-110 shadow-lg'
                          : 'border-[#2c1810]/20 hover:border-[#c9a060]'
                      }`}
                      style={{ backgroundColor: color }}
                      title={`Color: ${color}`}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {uniqueSizes.length > 0 && (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[12px] sm:text-[13px] tracking-[1.5px] font-['Cormorant_Garamond',serif] text-[#2c1810] uppercase">
                    Select Size
                  </label>
                  {/* <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-[10px] sm:text-[11px] tracking-[1px] text-[#c9a060] hover:underline font-['Cormorant_Garamond',serif] uppercase"
                  >
                    Size Guide
                  </button> */}
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
                  {uniqueSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-12 sm:h-14 text-[12px] sm:text-[13px] tracking-[1px] font-['Cormorant_Garamond',serif] rounded-lg transition-all ${
                        selectedSize === size
                          ? 'bg-[#c9a060] text-white shadow-lg scale-105'
                          : 'bg-white text-[#2c1810] border border-[#2c1810]/20 hover:border-[#c9a060]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Size Guide Popover */}
                {showSizeGuide && (
                  <div className="mt-4 bg-white border border-[#2c1810]/20 rounded-lg p-4 sm:p-6 shadow-lg">
                    <h3 className="text-[14px] sm:text-[16px] tracking-[1.5px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-4">
                      Size Guide (Indian Standards)
                    </h3>
                  
                  </div>
                )}
              </div>
            )}

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="text-[12px] sm:text-[13px] tracking-[1.5px] font-['Cormorant_Garamond',serif] text-[#2c1810] uppercase">
                Quantity
              </label>
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-[#2c1810]/20 rounded-lg text-[#2c1810] hover:border-[#c9a060] hover:text-[#c9a060] transition-colors flex items-center justify-center"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-[16px] sm:text-[18px] tracking-[1px] font-['Cormorant_Garamond',serif] text-[#2c1810] w-10 sm:w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-[#2c1810]/20 rounded-lg text-[#2c1810] hover:border-[#c9a060] hover:text-[#c9a060] transition-colors flex items-center justify-center"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`w-full py-3 sm:py-4 rounded-lg text-[12px] sm:text-[13px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase flex items-center justify-center gap-3 shadow-lg transition-all ${
                product.stock === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-[#c9a060] text-white hover:bg-[#b8914f] hover:shadow-xl hover:scale-[1.02]'
              }`}
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#2c1810]/10">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#f5f1e8] text-[#2c1810] text-xs rounded-full font-['Cormorant_Garamond',serif]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="max-w-7xl mx-auto mt-12 sm:mt-16 md:mt-20">
          {/* Tab Navigation */}
          <div className="flex border-b border-[#2c1810]/10 mb-6 sm:mb-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-[11px] sm:text-[12px] md:text-[13px] tracking-[1.5px] sm:tracking-[2px] font-['Cormorant_Garamond',serif] uppercase transition-all whitespace-nowrap ${
                activeTab === 'description'
                  ? 'text-[#c9a060] border-b-2 border-[#c9a060]'
                  : 'text-[#2c1810]/60 hover:text-[#2c1810]'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-[11px] sm:text-[12px] md:text-[13px] tracking-[1.5px] sm:tracking-[2px] font-['Cormorant_Garamond',serif] uppercase transition-all whitespace-nowrap ${
                activeTab === 'features'
                  ? 'text-[#c9a060] border-b-2 border-[#c9a060]'
                  : 'text-[#2c1810]/60 hover:text-[#2c1810]'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab('care')}
              className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-[11px] sm:text-[12px] md:text-[13px] tracking-[1.5px] sm:tracking-[2px] font-['Cormorant_Garamond',serif] uppercase transition-all whitespace-nowrap ${
                activeTab === 'care'
                  ? 'text-[#c9a060] border-b-2 border-[#c9a060]'
                  : 'text-[#2c1810]/60 hover:text-[#2c1810]'
              }`}
            >
              Wash & Care
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-[11px] sm:text-[12px] md:text-[13px] tracking-[1.5px] sm:tracking-[2px] font-['Cormorant_Garamond',serif] uppercase transition-all whitespace-nowrap ${
                activeTab === 'shipping'
                  ? 'text-[#c9a060] border-b-2 border-[#c9a060]'
                  : 'text-[#2c1810]/60 hover:text-[#2c1810]'
              }`}
            >
              Shipping
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md">
            {activeTab === 'description' && (
              <div className="space-y-4 sm:space-y-6">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-[0.3px] sm:tracking-[0.4px] md:tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
                  {product.description || 'No description available.'}
                </p>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-4">
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] tracking-[1.5px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-4">
                  Product Features
                </h3>
                {product.features && product.features.length > 0 ? (
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] tracking-[0.3px] font-['Cormorant_Garamond',serif] text-[#2c1810]"
                      >
                        <span className="text-[#c9a060] mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#2c1810]/60 font-['Cormorant_Garamond',serif]">
                    No features listed.
                  </p>
                )}
              </div>
            )}

            {activeTab === 'care' && (
              <div className="space-y-4">
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] tracking-[1.5px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-4">
                  Care Instructions
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] tracking-[0.3px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
                    <span className="text-[#c9a060] mt-1">•</span>
                    Dry clean only for best results
                  </li>
                  <li className="flex items-start gap-3 text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] tracking-[0.3px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
                    <span className="text-[#c9a060] mt-1">•</span>
                    If hand washing, use cold water with mild detergent
                  </li>
                  <li className="flex items-start gap-3 text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] tracking-[0.3px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
                    <span className="text-[#c9a060] mt-1">•</span>
                    Do not bleach or tumble dry
                  </li>
                  <li className="flex items-start gap-3 text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] tracking-[0.3px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
                    <span className="text-[#c9a060] mt-1">•</span>
                    Iron on reverse side at low temperature
                  </li>
                  <li className="flex items-start gap-3 text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] tracking-[0.3px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
                    <span className="text-[#c9a060] mt-1">•</span>
                    Store in a cool, dry place away from direct sunlight
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-4">
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] tracking-[1.5px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-4">
                  Shipping Information
                </h3>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-[0.3px] sm:tracking-[0.4px] md:tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
                  Each Sohwais piece is handcrafted to order. Please allow 3–4 days for careful creation before dispatch. Once shipped, delivery typically takes 5–7 days, depending on your location.
                </p>
              </div>
            )}
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