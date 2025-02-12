import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories, products } from '../data/shopData';
import { ChevronDown, Filter,MessageCircle, ChevronRight } from 'lucide-react';

const CategoryPage = () => {
  const { categoryName = '' } = useParams();
  const [selectedSeries, setSelectedSeries] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Array<typeof products[0]>>([]);
  const navigate = useNavigate();
  // Find the current category
  const currentCategory = categories.find(
    cat => cat.name.toLowerCase() === categoryName.toLowerCase()
  );
  
  // Get unique series from products
  const series = [...new Set(products
    .filter(product => product.category.toLowerCase() === categoryName.toLowerCase())
    .map(product => product.subcategory))];

  // Price ranges
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under ₹2,000', value: '0-2000' },
    { label: '₹2,000 - ₹5,000', value: '2000-5000' },
    { label: '₹5,000 - ₹10,000', value: '5000-10000' },
    { label: 'Above ₹10,000', value: '10000-above' }
  ];

  useEffect(() => {
    // Reset price range when category changes
    setPriceRange('all');
  }, [categoryName]);

  useEffect(() => {
    let filtered = products.filter(
      product => product.category.toLowerCase() === categoryName.toLowerCase()
    );

    // Apply series filter
    if (selectedSeries !== 'all') {
      filtered = filtered.filter(product => product.subcategory === selectedSeries);
    }

    // Apply price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(price => 
        price === 'above' ? Infinity : Number(price)
      );
      filtered = filtered.filter(product => {
        const price = Number(product.price.replace(/[^0-9]/g, ''));
        return price >= min && price <= max;
      });
    }

    setFilteredProducts(filtered);
  }, [categoryName, selectedSeries, priceRange]);

  const handleBuyNow = (product: typeof products[0]) => {
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
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-teal-700 mb-4">{currentCategory.name}</h1>
          <div className="flex flex-wrap gap-2">
            {currentCategory.subcategories.map((sub, idx) => (
              <span key={idx} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden w-full flex items-center justify-between px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm mb-4"
          >
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-teal-600" />
              <span className="text-gray-700">Filter Products</span>
            </div>
            <ChevronDown className={`h-5 w-5 text-gray-500 transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>

          <div className={`md:block ${isFilterOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Series Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Series</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedSeries('all')}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedSeries === 'all'
                          ? 'bg-teal-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      All Series
                    </button>
                    {series.map((seriesName) => (
                      <button
                        key={seriesName}
                        onClick={() => setSelectedSeries(seriesName)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          selectedSeries === seriesName
                            ? 'bg-teal-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {seriesName}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Price Range</h3>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => setPriceRange(range.value)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          priceRange === range.value
                            ? 'bg-teal-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
  <div 
    key={product.id} 
    className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div className="relative pt-4">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-contain"
      />
      <div className="absolute top-2 right-2">
        <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-full">
          {product.subcategory}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2 text-teal-800 line-clamp-2">
        {product.name}
      </h3>
      <p className="text-lg font-bold text-teal-600 mb-4">{product.price}</p>
      <p className="text-sm text-gray-500 mb-4 line-clamp-2">
        {product.description}
      </p>
      <div className="space-y-2">
        <button
          onClick={() => handleBuyNow(product)}
          className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300 flex items-center justify-center gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          Buy on WhatsApp
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/product/${product.id}`);
          }}
          className="w-full border-2 border-teal-600 text-teal-600 py-2 px-4 rounded-lg hover:bg-teal-50 transition duration-300 flex items-center justify-center gap-2"
        >
          <ChevronRight className="h-4 w-4" />
          View Details
        </button>
      </div>
    </div>
  </div>
))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your filters.</p>
            <button
              onClick={() => {
                setSelectedSeries('all');
                setPriceRange('all');
              }}
              className="mt-4 text-teal-600 hover:text-teal-700"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;