// // import { useEffect, useState } from "react";
// // import { fetchProducts } from "./api/products";
// // // import { Product } from "../types/product";
// // import {Product} from "./types/product"
// // import ProductCard from "./ProductCard";

// // const TraditionalProducts = () => {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   console.log(products);
// //   useEffect(() => {
// //     fetchProducts()
// //       .then(data => {
// //         setProducts(data.products);
// //       })
// //       .finally(() => setLoading(false));
// //   }, []);

// //   if (loading) {
// //     return (
// //       <div className="py-20 text-center text-lg">
// //         Loading traditional collection...
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 py-10">
// //       <h1 className="text-3xl font-bold text-center mb-8">
// //         Traditional Collection
// //       </h1>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //         {products && products.map(product => (
// //           <ProductCard
// //             key={product._id}
// //             product={product}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TraditionalProducts;
// import { useEffect, useState } from "react";
// import { fetchProducts } from "./api/products";
// import { Product } from "./types/product";
// import ProductCard from "./ProductCard";

// const TraditionalProducts = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         setLoading(true);
//         setError(null);
        
//         // Call API
//         const response = await fetchProducts();
//         console.log("API Response:", response);
        
//         // Handle both response formats
//         // If response has `products` field, use it
//         // If response has `data` field, use it
//         const productsData = response.products || response.data || [];
        
//         setProducts(productsData);
        
//       } catch (error) {
//         console.error("Error loading products:", error);
//         setError(error instanceof Error ? error.message : "Failed to load products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 py-20">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-amber-500 mb-4"></div>
//           <p className="text-lg text-gray-600">Loading traditional collection...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 py-20">
//         <div className="text-center">
//           <div className="text-red-500 mb-4">⚠️</div>
//           <p className="text-lg text-gray-700 mb-2">Error loading products</p>
//           <p className="text-gray-500 mb-4">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!products || products.length === 0) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 py-20">
//         <div className="text-center">
//           <div className="text-gray-400 mb-4 text-5xl">👗</div>
//           <p className="text-lg text-gray-700 mb-2">No traditional products found</p>
//           <p className="text-gray-500">Check back soon for our latest collection!</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">
//           Traditional Collection
//         </h1>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Discover our exquisite collection of traditional clothing, crafted with care and attention to detail.
//         </p>
//       </div>

//       {/* Filter/Sort Bar (Optional) */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
//         <div className="text-gray-600">
//           Showing <span className="font-semibold">{products.length}</span> products
//         </div>
        
//         <div className="flex gap-4">
//           <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500">
//             <option>Sort by: Featured</option>
//             <option>Price: Low to High</option>
//             <option>Price: High to Low</option>
//             <option>Newest First</option>
//           </select>
          
//           <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500">
//             <option value="">All Categories</option>
//             <option value="Saree">Saree</option>
//             <option value="Kurti">Kurti</option>
//             <option value="Lehenga">Lehenga</option>
//             <option value="Shawl">Shawl</option>
//           </select>
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <ProductCard
//             key={product._id}
//             product={product}
//           />
//         ))}
//       </div>

//       {/* Load More Button (Optional) */}
//       {products.length >= 8 && (
//         <div className="text-center mt-12">
//           <button className="px-6 py-3 border-2 border-amber-500 text-amber-500 rounded-lg hover:bg-amber-50 transition font-medium">
//             Load More Products
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TraditionalProducts;
import { useEffect, useState } from "react";
import { fetchProducts } from "./api/products";
import { Product } from "./types/product";
import ProductCard from "./ProductCard";
import ProductDetailsModal from "./ProductDetailsModal";

const TraditionalProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts()
      .then(data => {
        // Handle both response formats
        const productsData = data.products || data.data || [];
        setProducts(productsData);
      })
      .catch(error => console.error("Error:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-amber-500 mb-4"></div>
        <p className="text-lg text-gray-600">Loading traditional collection...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-['Cormorant_Garamond',serif]  text-center mb-8">
        Traditional Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products && products.map(product => (
          <ProductCard
            key={product._id}
            product={product}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }}
        />
      )}
    </div>
  );
};

export default TraditionalProducts;