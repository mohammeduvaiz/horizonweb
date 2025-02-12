// ProductDetails.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  Shield, 
  Truck, 
  ArrowLeft,
  Star,
  Share2,
  MessageCircle 
} from 'lucide-react';
import { products } from '../data/shopData';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isSpecsOpen, setIsSpecsOpen] = useState(true);

  // Find the current product
  const product = products.find(p => p.id === Number(productId));

  // Find related products (same subcategory)
  const relatedProducts = products
    .filter(p => p.subcategory === product?.subcategory && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="pt-32 px-4">
        <h1 className="text-2xl text-center">Product not found</h1>
      </div>
    );
  }

  const handleBuyNow = () => {
    const message = `Hi, I'm interested in buying ${product.name} priced at ${product.price}`;
    const whatsappUrl = `https://wa.me/+918129438189?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Function to render product badges
  const renderBadges = () => {
    const badges = [];
    
    if (product.category === 'Rackets') {
      if (product.model) badges.push(product.model);
      if (product.subcategory) badges.push(product.subcategory);
    } else {
      if (product.subcategory) badges.push(product.subcategory);
    }

    return badges.map((badge, index) => (
      <span key={index} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
        {badge}
      </span>
    ));
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-teal-600"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </button>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">{product.category}</span>
          {product.subcategory && (
            <>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">{product.subcategory}</span>
            </>
          )}
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="flex justify-center gap-4">
              <Share2 className="h-5 w-5 text-gray-500 cursor-pointer hover:text-teal-600" />
            </div>
          </div>

          {/* Content Section */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                {renderBadges()}
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-3xl font-bold text-teal-600 mb-4">
                {product.price}
              </p>
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <button
                onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                className="flex items-center justify-between w-full py-3 border-b border-gray-200"
              >
                <span className="text-lg font-semibold">Specifications</span>
                <ChevronRight className={`h-5 w-5 transform transition-transform ${isSpecsOpen ? 'rotate-90' : ''}`} />
              </button>
              {isSpecsOpen && (
                <div className="py-4 space-y-6">
                  {/* Weight and Grip Sizes */}
                  {product.specifications.weight && typeof product.specifications.weight === 'object' && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Weight & Grip Sizes</h4>
                      {Object.entries(product.specifications.weight).map(([weightClass, details]: [string, any]) => (
                        <div key={weightClass} className="ml-4 text-sm">
                          <p className="text-gray-700"><span className="font-medium">{weightClass}:</span> {details.weight}</p>
                          {details.gripSizes && (
                            <p className="text-gray-600">Grip Sizes: {details.gripSizes.join(', ')}</p>
                          )}
                          {details.stringTension && (
                            <p className="text-gray-600">Recommended Tension: {details.stringTension}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Construction */}
                  {product.specifications.construction && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Construction</h4>
                      {Object.entries(product.specifications.construction).map(([part, material]) => (
                        <div key={part} className="ml-4">
                          <p className="text-gray-700">
                            <span className="font-medium capitalize">{part}:</span> {material}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Properties */}
                  {product.specifications.properties && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Properties</h4>
                      {Object.entries(product.specifications.properties).map(([property, value]) => (
                        <div key={property} className="ml-4">
                          <p className="text-gray-700">
                            <span className="font-medium capitalize">{property}:</span> {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stringing Recommendations */}
                  {product.specifications.stringingRecommendation && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">String Recommendations</h4>
                      {Object.entries(product.specifications.stringingRecommendation).map(([playerType, string]) => (
                        <div key={playerType} className="ml-4">
                          <p className="text-gray-700">
                            <span className="font-medium capitalize">
                              {playerType.replace(/([A-Z])/g, ' $1').trim()}:
                            </span> {string}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Legacy specifications format support */}
                  {product.specifications.weight && typeof product.specifications.weight === 'string' && (
                    Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex">
                        <span className="w-1/3 text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="w-2/3 text-gray-900">{value as string}</span>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="h-6 w-6 text-teal-600" />
                <div>
                  <p className="font-semibold text-gray-900">Genuine Product</p>
                  <p className="text-sm text-gray-600">100% Authentic</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Truck className="h-6 w-6 text-teal-600" />
                <div>
                  <p className="font-semibold text-gray-900">Fast Delivery</p>
                  <p className="text-sm text-gray-600">2-3 Business Days</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleBuyNow}
                className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white py-4 px-6 rounded-lg hover:bg-teal-700 transition duration-300"
              >
                <MessageCircle className="h-5 w-5" />
                Buy on WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {/* {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <div className="relative pt-4">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      className="w-full h-48 object-contain"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-full">
                        {relatedProduct.subcategory}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-teal-800 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-lg font-bold text-teal-600">
                      {relatedProduct.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProductDetails;