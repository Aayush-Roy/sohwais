// import { Product } from "../types/product";

// interface Props {
//   product: Product;
// }

// const ProductCard: React.FC<Props> = ({ product }) => {
//   const firstVariant = product.variants[0];

//   const image =
//     firstVariant?.images?.[0] ??
//     "https://via.placeholder.com/300x400?text=No+Image";

//   // min price calculate
//   const prices = product.variants.flatMap(variant =>
//     variant.sizes.map(size => size.price)
//   );

//   const minPrice = Math.min(...prices);

//   return (
//     <div className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
//       <img
//         src={image}
//         alt={product.name}
//         className="h-72 w-full object-cover"
//       />

//       <div className="p-4">
//         <p className="text-sm text-orange-600 font-medium">
//           {product.brand}
//         </p>

//         <h3 className="text-lg font-semibold mt-1">
//           {product.name}
//         </h3>

//         <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//           {product.description}
//         </p>

//         <div className="flex items-center justify-between mt-3">
//           <span className="text-lg font-bold">
//             ₹{minPrice}
//           </span>

//           <span className="text-xs px-2 py-1 rounded bg-amber-100 text-amber-700">
//             {product.category}
//           </span>
//         </div>

//         {/* Colors */}
//         <div className="flex gap-2 mt-3">
//           {product.variants.map((variant, index) => (
//             <span
//               key={index}
//               title={variant.color.name}
//               className="h-4 w-4 rounded-full border"
//               style={{ backgroundColor: variant.color.hex }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
// import { Product } from "../types/product";

// interface Props {
//   product: Product;
// }

// const ProductCard: React.FC<Props> = ({ product }) => {
//   // Extract first image from product.images array
//   const image = product.images && product.images.length > 0 
//     ? product.images[0].url 
//     : "https://via.placeholder.com/300x400?text=No+Image";

//   // Calculate minimum price from variants
//   const getMinPrice = () => {
//     if (!product.variants || product.variants.length === 0) {
//       return product.price || 0;
//     }
    
//     const variantPrices = product.variants.map(variant => variant.price);
//     return Math.min(...variantPrices);
//   };

//   const minPrice = getMinPrice();

//   // Get unique colors from variants
//   const uniqueColors = product.variants 
//     ? [...new Set(product.variants.map(variant => variant.color))]
//     : [];

//   // Extract brand from category or name (since your API doesn't have brand field)
//   const getBrand = () => {
//     // You can implement your brand logic here
//     // For now, using first word of name or "Traditional"
//     return product.name.split(' ')[0] || "Traditional";
//   };

//   return (
//     <div className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition hover:-translate-y-1 duration-300">
//       {/* Product Image */}
//       <div className="relative h-72 w-full overflow-hidden">
//         <img
//           src={image}
//           alt={product.name}
//           className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
//           onError={(e) => {
//             e.currentTarget.src = "https://via.placeholder.com/300x400?text=No+Image";
//           }}
//         />
        
//         {/* Discount Badge */}
//         {product.discount > 0 && (
//           <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
//             {product.discount}% OFF
//           </div>
//         )}
        
//         {/* Status Badge */}
//         <div className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded ${
//           product.status === 'Active' 
//             ? 'bg-green-500 text-white' 
//             : 'bg-gray-500 text-white'
//         }`}>
//           {product.status}
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className="p-4">
//         {/* Brand */}
//         <p className="text-sm text-orange-600 font-medium">
//           {getBrand()}
//         </p>

//         {/* Product Name */}
//         <h3 className="text-lg font-semibold mt-1 line-clamp-1">
//           {product.name}
//         </h3>

//         {/* Description */}
//         <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//           {product.description || "Traditional clothing item"}
//         </p>

//         {/* Price and Category */}
//         <div className="flex items-center justify-between mt-3">
//           <div className="flex items-center gap-2">
//             <span className="text-lg font-bold">
//               ₹{minPrice}
//             </span>
//             {product.discount > 0 && (
//               <>
//                 <span className="text-sm text-gray-500 line-through">
//                   ₹{product.price}
//                 </span>
//                 <span className="text-xs bg-green-100 text-green-800 px-1 py-0.5 rounded">
//                   Save ₹{Math.round(product.price - minPrice)}
//                 </span>
//               </>
//             )}
//           </div>

//           <span className="text-xs px-2 py-1 rounded bg-amber-100 text-amber-700">
//             {product.category}
//           </span>
//         </div>

//         {/* Stock Indicator */}
//         <div className="mt-2">
//           <div className="flex items-center justify-between text-xs">
//             <span className="text-gray-600">Stock:</span>
//             <span className={`font-medium ${
//               product.stock > 50 
//                 ? 'text-green-600' 
//                 : product.stock > 10 
//                 ? 'text-yellow-600' 
//                 : 'text-red-600'
//             }`}>
//               {product.stock} units
//             </span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
//             <div 
//               className={`h-1.5 rounded-full ${
//                 product.stock > 50 
//                   ? 'bg-green-500' 
//                   : product.stock > 10 
//                   ? 'bg-yellow-500' 
//                   : 'bg-red-500'
//               }`}
//               style={{ 
//                 width: `${Math.min(100, (product.stock / 100) * 100)}%` 
//               }}
//             ></div>
//           </div>
//         </div>

//         {/* Color Variants */}
//         {uniqueColors.length > 0 && (
//           <div className="mt-4">
//             <p className="text-xs text-gray-500 mb-2">Available Colors:</p>
//             <div className="flex gap-2">
//               {uniqueColors.slice(0, 5).map((color, index) => (
//                 <div
//                   key={index}
//                   className="relative group"
//                   title={color}
//                 >
//                   <div
//                     className="h-6 w-6 rounded-full border-2 border-white shadow"
//                     style={{ backgroundColor: color }}
//                   />
//                   {color.length > 7 && (
//                     <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
//                       {color}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               {uniqueColors.length > 5 && (
//                 <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500">
//                   +{uniqueColors.length - 5}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Size Variants */}
//         {product.variants && product.variants.length > 0 && (
//           <div className="mt-3">
//             <p className="text-xs text-gray-500 mb-1">Available Sizes:</p>
//             <div className="flex flex-wrap gap-1">
//               {[...new Set(product.variants.map(v => v.size))].map((size, index) => (
//                 <span
//                   key={index}
//                   className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded"
//                 >
//                   {size}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Action Buttons */}
//         <div className="flex gap-2 mt-4">
//           <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium py-2 rounded-lg transition">
//             Add to Cart
//           </button>
//           <button className="px-3 border border-amber-500 text-amber-500 hover:bg-amber-50 rounded-lg transition">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import { Product } from "../types/product";
import { useState } from "react";

interface Props {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onViewDetails }) => {
  // State for image gallery
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Get all images
  const allImages = product.images && product.images.length > 0 
    ? product.images.map(img => img.url)
    : ["https://via.placeholder.com/300x400?text=No+Image"];

  const selectedImage = allImages[selectedImageIndex];

  // Calculate minimum price from variants
  const getMinPrice = () => {
    if (!product.variants || product.variants.length === 0) {
      return product.price || 0;
    }
    
    const variantPrices = product.variants.map(variant => variant.price);
    return Math.min(...variantPrices);
  };

  const minPrice = getMinPrice();

  // Get unique colors from variants
  const uniqueColors = product.variants 
    ? [...new Set(product.variants.map(variant => variant.color))]
    : [];

  // Get all sizes
  const allSizes = product.variants 
    ? [...new Set(product.variants.map(variant => variant.size))].sort()
    : [];

  // Extract brand from category or name
  const getBrand = () => {
    return product.name.split(' ')[0] || "Traditional";
  };

  // Handle View Details
  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(product);
    } else {
      // Default behavior - navigate to product details page
      window.location.href = `/products/${product._id}`;
    }
  };

  // Handle image click to next image
  const handleImageClick = () => {
    if (allImages.length > 1) {
      setSelectedImageIndex((prev) => (prev + 1) % allImages.length);
    }
  };

  return (
    <div className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition hover:-translate-y-1 duration-300 group">
      {/* Product Image with Gallery */}
      <div className="relative h-72 w-full overflow-hidden cursor-pointer" onClick={handleImageClick}>
        <img
          src={selectedImage}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/300x400?text=No+Image";
          }}
        />
        
        {/* Image Gallery Indicator */}
        {allImages.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
            {allImages.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 w-1.5 rounded-full ${
                  index === selectedImageIndex 
                    ? 'bg-white' 
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Image Counter */}
        {allImages.length > 1 && (
          <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded">
            {selectedImageIndex + 1} / {allImages.length}
          </div>
        )}
        
        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleViewDetails();
            }}
            className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100"
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand */}
        <p className="text-sm text-orange-600 font-medium">
          {getBrand()}
        </p>

        {/* Product Name */}
        <h3 className="text-lg font-semibold mt-1 line-clamp-1 text-gray-800">
          {product.name}
        </h3>

        {/* Category */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs px-2 py-1 rounded bg-amber-100 text-amber-700">
            {product.category}
          </span>
          
          {/* Status Badge */}
          <div className={`text-xs px-2 py-1 rounded ${
            product.status === 'Active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {product.status}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {product.description || "Traditional clothing item with premium quality."}
        </p>

        {/* Price */}
        <div className="mt-3">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">
              ₹{minPrice}
            </span>
            {product.discount > 0 && (
              <>
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.price}
                </span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                  Save ₹{Math.round(product.price * (product.discount/100))}
                </span>
              </>
            )}
          </div>
          
          {/* Variants Summary */}
          <div className="mt-2 space-y-1">
            {/* Colors Summary */}
            {uniqueColors.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Colors:</span>
                <div className="flex gap-1">
                  {uniqueColors.slice(0, 3).map((color, index) => (
                    <div
                      key={index}
                      className="h-4 w-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                  {uniqueColors.length > 3 && (
                    <span className="text-xs text-gray-400">
                      +{uniqueColors.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            )}
            
            {/* Sizes Summary */}
            {allSizes.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Sizes:</span>
                <div className="flex gap-1">
                  {allSizes.slice(0, 3).map((size, index) => (
                    <span
                      key={index}
                      className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded"
                    >
                      {size}
                    </span>
                  ))}
                  {allSizes.length > 3 && (
                    <span className="text-xs text-gray-400">
                      +{allSizes.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stock Indicator */}
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-gray-600">Availability:</span>
            <span className={`font-medium ${
              product.stock > 50 
                ? 'text-green-600' 
                : product.stock > 10 
                ? 'text-yellow-600' 
                : 'text-red-600'
            }`}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div 
              className={`h-1.5 rounded-full ${
                product.stock > 50 
                  ? 'bg-green-500' 
                  : product.stock > 10 
                  ? 'bg-yellow-500' 
                  : product.stock > 0
                  ? 'bg-red-500'
                  : 'bg-gray-400'
              }`}
              style={{ 
                width: `${product.stock > 0 ? Math.min(100, (product.stock / 100) * 100) : 0}%` 
              }}
            ></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <button 
            onClick={handleViewDetails}
            className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-sm font-medium py-2.5 rounded-lg transition-all duration-300 hover:shadow-md"
          >
            View Details
          </button>
          <button className="px-3 border border-amber-500 text-amber-500 hover:bg-amber-50 rounded-lg transition hover:shadow">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;