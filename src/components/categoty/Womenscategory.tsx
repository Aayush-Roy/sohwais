// // components/MensCategory.tsx
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   originalPrice?: number;
//   discount?: number;
//   category: string;
//   subCategory?: string;
//   description: string;
//   images: string[];
//   sizes: string[];
//   colors?: string[];
//   material: string;
//   craftType?: string;
//   stock: number;
//   isNew?: boolean;
//   isBestSeller?: boolean;
//   rating: number;
//   reviewCount: number;
// }

// interface CategoryData {
//   category: string;
//   description: string;
//   products: Product[];
//   subCategories: string[];
//   totalProducts: number;
// }

// const MensCategory = () => {
//   const navigate = useNavigate();
//   const [categoryData, setCategoryData] = useState<CategoryData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
//   const [sortBy, setSortBy] = useState<string>('featured');

//   // Fetch category data from API
//   useEffect(() => {
//     const fetchCategoryData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('https://api.sohwais.com/category/Men');
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         setCategoryData(data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'Failed to fetch category data');
//         console.error('Error fetching category data:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategoryData();
//   }, []);

//   // Filter products based on selected subcategory
//   const filteredProducts = categoryData?.products.filter(product => {
//     if (selectedSubCategory === 'all') return true;
//     return product.subCategory === selectedSubCategory;
//   }) || [];

//   // Sort products based on sort option
//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch (sortBy) {
//       case 'price-low-high':
//         return a.price - b.price;
//       case 'price-high-low':
//         return b.price - a.price;
//       case 'newest':
//         // Assuming products have a date field or use id for sorting
//         return b.id.localeCompare(a.id);
//       case 'rating':
//         return b.rating - a.rating;
//       default: // 'featured'
//         return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
//     }
//   });

//   // Handle product click
//   const handleProductClick = (productId: string) => {
//     navigate(`/product/${productId}`);
//   };

//   // Handle back navigation
//   const handleBack = () => {
//     navigate(-1);
//   };

//   // Handle add to cart
//   const handleAddToCart = (product: Product, e: React.MouseEvent) => {
//     e.stopPropagation();
//     // Implement your add to cart logic here
//     console.log('Added to cart:', product);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading Men's Collection...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-red-600 mb-4">Error: {error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="sticky top-0 z-50 bg-white border-b">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <button
//               onClick={handleBack}
//               className="flex items-center text-gray-600 hover:text-gray-900"
//             >
//               <ArrowLeft className="w-5 h-5 mr-2" />
//               Back
//             </button>
            
//             <div className="text-center">
//               <h1 className="text-2xl font-serif font-bold text-gray-900">
//                 {categoryData?.category || "Men's Collection"}
//               </h1>
//               <p className="text-sm text-gray-500 mt-1">
//                 {categoryData?.totalProducts || 0} products available
//               </p>
//             </div>
            
//             <div className="w-20"></div> {/* Spacer for balance */}
//           </div>
//         </div>
//       </div>

//       {/* Category Description */}
//       {categoryData?.description && (
//         <div className="bg-gray-50 py-8">
//           <div className="container mx-auto px-4">
//             <p className="text-center text-gray-600 max-w-2xl mx-auto">
//               {categoryData.description}
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Filters and Sorting */}
//       <div className="sticky top-[73px] z-40 bg-white border-b">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
//             {/* Subcategory Filter */}
//             <div className="flex items-center space-x-4 overflow-x-auto pb-2">
//               <button
//                 onClick={() => setSelectedSubCategory('all')}
//                 className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
//                   selectedSubCategory === 'all'
//                     ? 'bg-gray-900 text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 All Products
//               </button>
              
//               {categoryData?.subCategories?.map((subCat) => (
//                 <button
//                   key={subCat}
//                   onClick={() => setSelectedSubCategory(subCat)}
//                   className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
//                     selectedSubCategory === subCat
//                       ? 'bg-gray-900 text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   {subCat}
//                 </button>
//               ))}
//             </div>

//             {/* Sort By */}
//             <div className="flex items-center space-x-2">
//               <span className="text-gray-600">Sort by:</span>
//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className="px-3 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-900"
//               >
//                 <option value="featured">Featured</option>
//                 <option value="price-low-high">Price: Low to High</option>
//                 <option value="price-high-low">Price: High to Low</option>
//                 <option value="newest">Newest</option>
//                 <option value="rating">Highest Rated</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="container mx-auto px-4 py-8">
//         {sortedProducts.length === 0 ? (
//           <div className="text-center py-16">
//             <p className="text-gray-500">No products found in this category.</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {sortedProducts.map((product) => (
//               <div
//                 key={product.id}
//                 onClick={() => handleProductClick(product.id)}
//                 className="group cursor-pointer"
//               >
//                 <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-100">
//                   {/* Product Image */}
//                   <img
//                     src={product.images[0] || 'https://via.placeholder.com/300x400'}
//                     alt={product.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
                  
//                   {/* Badges */}
//                   <div className="absolute top-3 left-3 space-y-1">
//                     {product.isNew && (
//                       <span className="px-2 py-1 text-xs font-semibold bg-white text-gray-900 rounded">
//                         NEW
//                       </span>
//                     )}
//                     {product.isBestSeller && (
//                       <span className="px-2 py-1 text-xs font-semibold bg-yellow-500 text-white rounded">
//                         BESTSELLER
//                       </span>
//                     )}
//                     {product.discount && (
//                       <span className="px-2 py-1 text-xs font-semibold bg-red-500 text-white rounded">
//                         -{product.discount}%
//                       </span>
//                     )}
//                   </div>
                  
//                   {/* Quick Add to Cart Button */}
//                   <button
//                     onClick={(e) => handleAddToCart(product, e)}
//                     className="absolute bottom-3 right-3 px-4 py-2 bg-white text-gray-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-900 hover:text-white"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
                
//                 {/* Product Details */}
//                 <div className="mt-4">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="font-medium text-gray-900 group-hover:text-gray-600">
//                         {product.name}
//                       </h3>
//                       {product.subCategory && (
//                         <p className="text-sm text-gray-500">{product.subCategory}</p>
//                       )}
//                     </div>
                    
//                     {/* Price */}
//                     <div className="text-right">
//                       {product.originalPrice ? (
//                         <>
//                           <span className="font-bold text-gray-900">
//                             ₹{product.price.toLocaleString()}
//                           </span>
//                           <span className="ml-2 text-sm text-gray-500 line-through">
//                             ₹{product.originalPrice.toLocaleString()}
//                           </span>
//                         </>
//                       ) : (
//                         <span className="font-bold text-gray-900">
//                           ₹{product.price.toLocaleString()}
//                         </span>
//                       )}
//                     </div>
//                   </div>
                  
//                   {/* Rating */}
//                   <div className="flex items-center mt-2">
//                     <div className="flex">
//                       {[...Array(5)].map((_, i) => (
//                         <svg
//                           key={i}
//                           className={`w-4 h-4 ${
//                             i < Math.floor(product.rating)
//                               ? 'text-yellow-400'
//                               : 'text-gray-300'
//                           }`}
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>
//                     <span className="ml-2 text-sm text-gray-600">
//                       ({product.reviewCount})
//                     </span>
//                   </div>
                  
//                   {/* Craft Info */}
//                   {product.craftType && (
//                     <p className="mt-2 text-sm text-gray-500">
//                       {product.material} • {product.craftType}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Load More Button (if needed) */}
//       {sortedProducts.length > 0 && (
//         <div className="container mx-auto px-4 pb-12 text-center">
//           <button
//             onClick={() => {
//               // Implement load more functionality
//               console.log('Load more clicked');
//             }}
//             className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
//           >
//             Load More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MensCategory;
// components/MensCategory.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Star } from 'lucide-react';

// Interfaces matching your API response
interface ProductVariant {
  color: string;
  size: string;
  price: number;
  _id: string;
}

interface ProductImage {
  url: string;
  public_id: string;
  isPrimary?: boolean;
  _id: string;
}

interface Product {
  _id: string;
  name: string;
  category: string;
  collection?: string;
  subCategory?: string;
  price: number;
  discount: number;
  stock: number;
  status: string;
  description: string;
  features: string[];
  variants: ProductVariant[];
  images: ProductImage[];
  tags: string[];
  rating: number;
  reviewsCount: number;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  success: boolean;
  category: string;
  count: number;
  data: Product[];
}

interface CategoryData {
  category: string;
  description?: string;
  products: Product[];
  subCategories: string[];
  totalProducts: number;
  originalData: ApiResponse;
}

const WomensCategory = () => {
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState<CategoryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [apiUrl, setApiUrl] = useState<string>('');

  // Get API URL from environment or use default
  useEffect(() => {
    // Try different possible API URLs
    const possibleUrls = [
      
      'https://api.sohwais.com/category/Women',
      'http://localhost:3000/api/category/Women',
      'http://localhost:5000/api/category/Women',
      '/api/category/Women' // Relative URL (proxy)
    ];

    // Use the first non-empty URL
    const url = possibleUrls.find(u => u) || 'https://api.sohwais.com/category/Women';
    setApiUrl(url);
    console.log('Using API URL:', url);
  }, []);

  // Fetch category data from API
  useEffect(() => {
    const fetchCategoryData = async () => {
      if (!apiUrl) return;

      try {
        setLoading(true);
        setError(null);
        
        console.log(`Fetching from: ${apiUrl}`);
        
        // Add cache-busting parameter to avoid 304 responses
        const timestamp = new Date().getTime();
        const urlWithCache = `${apiUrl}?t=${timestamp}`;
        
        const response = await fetch(urlWithCache, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // Add any required headers based on your api.http file
          },
          mode: 'cors',
          credentials: 'include' // If using cookies/sessions
        });

        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));

        if (!response.ok) {
          // Try to get error message from response
          let errorMessage = `HTTP error! status: ${response.status}`;
          try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorMessage;
          } catch {
            // If response is not JSON, use status text
            errorMessage = response.statusText || errorMessage;
          }
          throw new Error(errorMessage);
        }

        const apiData: ApiResponse = await response.json();
        console.log('API Response:', apiData);

        if (!apiData.success) {
          throw new Error('API returned success: false');
        }

        // Transform API data to match component expectations
        const transformedData: CategoryData = {
          category: apiData.category,
          description: `Explore our ${apiData.category} collection with ${apiData.count} unique items`,
          products: apiData.data,
          // Extract unique subCategories from products
          subCategories: Array.from(
            new Set(
              apiData.data
                .map(product => product.subCategory)
                .filter(Boolean) as string[]
            )
          ),
          totalProducts: apiData.count,
          originalData: apiData
        };

        setCategoryData(transformedData);

      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch category data';
        console.error('Error details:', {
          message: errorMessage,
          url: apiUrl,
          error: err
        });
        setError(errorMessage);
        
        // For development, use mock data as fallback
        if (process.env.NODE_ENV === 'development') {
          console.log('Using mock data for development');
          setCategoryData(getMockCategoryData());
          setError(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [apiUrl]);

  // Mock data function (for development)
  const getMockCategoryData = (): CategoryData => {
    return {
      category: "Men's Collection",
      description: "Explore our premium collection of traditional and contemporary men's wear",
      totalProducts: 2,
      subCategories: ['Kurta'],
      products: [
        {
          _id: "6968ed1226bb572e37b842e7",
          name: "Testing",
          category: "Men",
          collection: "Madhubani Collection",
          subCategory: "Kurta",
          price: 2300,
          discount: 0,
          stock: 12,
          status: "Active",
          description: "testing....",
          features: [],
          variants: [
            {
              color: "#000000",
              size: "S",
              price: 1200,
              _id: "6968ed1226bb572e37b842e8"
            }
          ],
          images: [
            {
              url: "https://res.cloudinary.com/dwp3doiep/image/upload/v1768484113/traditional-clothing/gjjcx2z0g8e1yzjdnhhx.png",
              public_id: "traditional-clothing/gjjcx2z0g8e1yzjdnhhx",
              isPrimary: true,
              _id: "6968ed1226bb572e37b842e9"
            }
          ],
          tags: [],
          rating: 0,
          reviewsCount: 0,
          createdAt: "2026-01-15T13:35:14.982Z",
          updatedAt: "2026-01-15T13:35:14.982Z"
        },
        {
          _id: "69672f0298ba2e753c065395",
          name: "Madhubani Printed Silk Kurta",
          category: "Men",
          price: 3499,
          discount: 15,
          stock: 25,
          status: "Active",
          description: "Pure silk kurta with authentic Madhubani art print. Handcrafted by traditional artisans.",
          features: [],
          variants: [
            {
              color: "#FF6B6B",
              size: "M",
              price: 3499,
              _id: "69672f0298ba2e753c065396"
            },
            {
              color: "#4ECDC4",
              size: "L",
              price: 3699,
              _id: "69672f0298ba2e753c065397"
            },
            {
              color: "#FFE66D",
              size: "XL",
              price: 3899,
              _id: "69672f0298ba2e753c065398"
            }
          ],
          images: [
            {
              isPrimary: false,
              url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
              public_id: "manual_1768369922164_vv4e3bp6g",
              _id: "69672f0298ba2e753c065399"
            },
            {
              isPrimary: false,
              url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
              public_id: "manual_1768369922164_3dsl553aj",
              _id: "69672f0298ba2e753c06539a"
            }
          ],
          tags: [],
          rating: 0,
          reviewsCount: 0,
          createdAt: "2026-01-14T05:52:02.247Z",
          updatedAt: "2026-01-14T05:52:02.247Z"
        }
      ],
      originalData: {
        success: true,
        category: "Men",
        count: 2,
        data: [] // Will be populated with the products above
      }
    };
  };

  // Helper function to get primary image
  const getPrimaryImage = (product: Product): string => {
    const primaryImage = product.images.find(img => img.isPrimary);
    return primaryImage?.url || product.images[0]?.url || 'https://via.placeholder.com/300x400';
  };

  // Helper function to get available sizes
  const getAvailableSizes = (product: Product): string[] => {
    return product.variants.map(v => v.size);
  };

  // Helper function to calculate final price
  const getFinalPrice = (product: Product): number => {
    if (product.discount > 0) {
      return product.price - (product.price * product.discount / 100);
    }
    return product.price;
  };

  // Filter products based on selected subcategory
  const filteredProducts = categoryData?.products.filter(product => {
    if (selectedSubCategory === 'all') return true;
    return product.subCategory === selectedSubCategory;
  }) || [];

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = getFinalPrice(a);
    const priceB = getFinalPrice(b);
    
    switch (sortBy) {
      case 'price-low-high':
        return priceA - priceB;
      case 'price-high-low':
        return priceB - priceA;
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'rating':
        return b.rating - a.rating;
      default: // 'featured'
        if (b.discount > a.discount) return 1;
        if (b.stock > a.stock) return 1;
        return 0;
    }
  });

  // Handle product click
  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  // Handle back navigation
  const handleBack = () => {
    navigate(-1);
  };

  // Handle retry
  const handleRetry = () => {
    setLoading(true);
    setError(null);
    // Force re-fetch by changing the timestamp
    setApiUrl(prev => `${prev?.split('?')[0]}?t=${new Date().getTime()}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Men's Collection...</p>
        </div>
      </div>
    );
  }

  if (error && !categoryData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md p-8">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Unable to Load</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500 mb-6">
            Trying to fetch from: {apiUrl}
          </p>
          <div className="space-x-4">
            <button
              onClick={handleRetry}
              className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 flex items-center mx-auto"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry
            </button>
            <button
              onClick={handleBack}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            
            <div className="text-center">
              <h1 className="text-2xl font-serif font-bold text-gray-900">
                {categoryData?.category || "Men's Collection"}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {categoryData?.totalProducts || 0} products available
              </p>
            </div>
            
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Category Description */}
      {categoryData?.description && (
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              {categoryData.description}
            </p>
          </div>
        </div>
      )}

      {/* Filters and Sorting */}
      <div className="sticky top-[73px] z-40 bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            {/* Subcategory Filter */}
            {categoryData?.subCategories && categoryData.subCategories.length > 0 && (
              <div className="flex items-center space-x-4 overflow-x-auto pb-2">
                <button
                  onClick={() => setSelectedSubCategory('all')}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedSubCategory === 'all'
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Products
                </button>
                
                {categoryData.subCategories.map((subCat) => (
                  <button
                    key={subCat}
                    onClick={() => setSelectedSubCategory(subCat)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                      selectedSubCategory === subCat
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {subCat}
                  </button>
                ))}
              </div>
            )}

            {/* Sort By */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        {sortedProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => {
              const finalPrice = getFinalPrice(product);
              const originalPrice = product.discount > 0 ? product.price : null;
              
              return (
                <div
                  key={product._id}
                  onClick={() => handleProductClick(product._id)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-100">
                    {/* Product Image */}
                    <img
                      src={getPrimaryImage(product)}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x400';
                      }}
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 space-y-1">
                      {product.discount > 0 && (
                        <span className="px-2 py-1 text-xs font-semibold bg-red-500 text-white rounded">
                          -{product.discount}% OFF
                        </span>
                      )}
                      {product.stock < 10 && product.stock > 0 && (
                        <span className="px-2 py-1 text-xs font-semibold bg-orange-500 text-white rounded">
                          LOW STOCK
                        </span>
                      )}
                      {product.stock === 0 && (
                        <span className="px-2 py-1 text-xs font-semibold bg-gray-500 text-white rounded">
                          OUT OF STOCK
                        </span>
                      )}
                    </div>
                    
                    {/* Quick View */}
                    <button
                      className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product._id);
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Product Details */}
                  <div className="mt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900 group-hover:text-gray-600">
                          {product.name}
                        </h3>
                        {product.collection && (
                          <p className="text-sm text-gray-500">{product.collection}</p>
                        )}
                        {product.subCategory && (
                          <p className="text-xs text-gray-400">{product.subCategory}</p>
                        )}
                      </div>
                      
                      {/* Price */}
                      <div className="text-right">
                        <span className="font-bold text-gray-900">
                          ₹{finalPrice.toLocaleString()}
                        </span>
                        {originalPrice && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            ₹{originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-gray-300 text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        ({product.reviewsCount})
                      </span>
                    </div>
                    
                    {/* Variants */}
                    {product.variants.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {product.variants.slice(0, 3).map((variant, idx) => (
                          <div
                            key={variant._id}
                            className="flex items-center text-xs"
                            title={`${variant.size} - ₹${variant.price}`}
                          >
                            <div
                              className="w-3 h-3 rounded-full border"
                              style={{ backgroundColor: variant.color }}
                            />
                            <span className="ml-1 text-gray-600">{variant.size}</span>
                            {idx < product.variants.length - 1 && (
                              <span className="mx-1">•</span>
                            )}
                          </div>
                        ))}
                        {product.variants.length > 3 && (
                          <span className="text-xs text-gray-400">
                            +{product.variants.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                    
                    {/* Stock Status */}
                    <div className="mt-2">
                      {product.stock > 0 ? (
                        <span className="text-xs text-green-600">
                          {product.stock} in stock
                        </span>
                      ) : (
                        <span className="text-xs text-red-600">Out of stock</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Debug Info (Development only) */}
      {process.env.NODE_ENV === 'development' && categoryData && (
        <div className="container mx-auto px-4 py-4 border-t">
          <details className="text-xs">
            <summary className="cursor-pointer text-gray-500">Debug Info</summary>
            <div className="mt-2 p-4 bg-gray-50 rounded">
              <p><strong>API URL:</strong> {apiUrl}</p>
              <p><strong>Products loaded:</strong> {categoryData.totalProducts}</p>
              <p><strong>Subcategories:</strong> {categoryData.subCategories.join(', ')}</p>
              <p><strong>Using mock data:</strong> {!categoryData.originalData.success ? 'Yes' : 'No'}</p>
            </div>
          </details>
        </div>
      )}
    </div>
  );
};

export default WomensCategory;