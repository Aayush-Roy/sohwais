// ProductDetailPageWrapper.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductDetailPage } from './ProductDetailPage';

export function ProductDetailPageWrapper({
  onAddToCart,
  cartCount,
  onCartClick,
  onLogoClick
}: any) {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (!productId) {
      navigate('/collections');
      return;
    }

    // Fetch product data...
  }, [productId, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <ProductDetailPage
      productId={productId}
      productName={product.name}
      collectionName={product.collection}
      price={product.price}
      discount={product.discount}
      description={product.description}
      images={product.images}
      variants={product.variants}
      features={product.features}
      category={product.category}
      subCategory={product.subCategory}
      onBack={() => navigate(-1)}
      onAddToCart={onAddToCart}
      onLogoClick={onLogoClick}
      cartCount={cartCount}
      onCartClick={onCartClick}
    />
  );
}