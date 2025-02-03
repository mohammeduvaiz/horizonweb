// CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { categories, products } from '../data/shopData';

const CategoryPage = () => {
  const { categoryName = '' } = useParams();
  
  // Find the current category
  const currentCategory = categories.find(
    cat => cat.name.toLowerCase() === categoryName.toLowerCase()
  );
  
  // Filter products for current category
  const categoryProducts = products.filter(
    product => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  const handleBuyNow = (product: { name: string; price: string }) => {
    const message = `Hi, I'm interested in buying ${product.name} priced at ${product.price}`;
    const whatsappUrl = `https://wa.me/+918129438189?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!currentCategory) {
    return (
      <div className="pt-32 px-4">
        <h1 className="text-2xl text-center">Category not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-teal-700 mb-4">{currentCategory.name}</h1>
          <div className="flex flex-wrap gap-2">
            {currentCategory.subcategories.map((sub, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryProducts.map((product) => (
            <div key={product.id} className="product-card bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-teal-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.price}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {product.description}
                </p>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300"
                >
                  Buy on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;