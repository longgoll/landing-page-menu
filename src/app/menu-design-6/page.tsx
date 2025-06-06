'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  description: string;
  image: string;
  chef: string;
  prepTime: string;
  difficulty: 'Dễ' | 'Trung bình' | 'Khó';
  rating: number;
  reviews: number;
  isSignature?: boolean;
  isNew?: boolean;
  tags: string[];
}

const MenuDesign6 = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '🍽️', count: 24 },
    { id: 'signature', name: 'Đặc sản', icon: '⭐', count: 8 },
    { id: 'appetizer', name: 'Khai vị', icon: '🥗', count: 6 },
    { id: 'main', name: 'Món chính', icon: '🥩', count: 8 },
    { id: 'dessert', name: 'Tráng miệng', icon: '🍰', count: 4 },
    { id: 'beverage', name: 'Đồ uống', icon: '🍹', count: 6 },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Wagyu Beef Tataki',
      category: 'signature',
      price: '1,200,000₫',
      originalPrice: '1,500,000₫',
      description: 'Thịt bò Wagyu A5 tataki với wasabi tươi, sốt ponzu và microgreens',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop',
      chef: 'Chef Yamamoto',
      prepTime: '25 phút',
      difficulty: 'Khó',
      rating: 4.9,
      reviews: 127,
      isSignature: true,
      tags: ['Premium', 'Nhật Bản', 'Tươi sống']
    },
    {
      id: 2,
      name: 'Truffle Pasta Carbonara',
      category: 'main',
      price: '450,000₫',
      description: 'Pasta handmade với nấm truffle đen, trứng gà tây, phô mai Pecorino Romano',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=600&h=400&fit=crop',
      chef: 'Chef Marco',
      prepTime: '20 phút',
      difficulty: 'Trung bình',
      rating: 4.7,
      reviews: 89,
      tags: ['Ý', 'Nấm truffle', 'Pasta']
    },
    {
      id: 3,
      name: 'Lobster Thermidor',
      category: 'signature',
      price: '800,000₫',
      description: 'Tôm hùm Boston nướng với sốt brandy cream, phô mai Gruyere',
      image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&h=400&fit=crop',
      chef: 'Chef Laurent',
      prepTime: '35 phút',
      difficulty: 'Khó',
      rating: 4.8,
      reviews: 156,
      isSignature: true,
      tags: ['Pháp', 'Hải sản', 'Cao cấp']
    },
    {
      id: 4,
      name: 'Molecular Gazpacho',
      category: 'appetizer',
      price: '280,000₫',
      description: 'Gazpacho phân tử với cà chua heirloom, dưa chuột, olive oil caviar',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop',
      chef: 'Chef Anderson',
      prepTime: '15 phút',
      difficulty: 'Trung bình',
      rating: 4.6,
      reviews: 73,
      isNew: true,
      tags: ['Molecular', 'Vegetarian', 'Tươi mát']
    },
    {
      id: 5,
      name: 'Duck Confit Orange',
      category: 'main',
      price: '520,000₫',
      description: 'Vịt confit với sốt cam Grand Marnier, khoai tây gratin',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',
      chef: 'Chef Pierre',
      prepTime: '40 phút',
      difficulty: 'Khó',
      rating: 4.7,
      reviews: 94,
      tags: ['Pháp', 'Vịt', 'Truyền thống']
    },
    {
      id: 6,
      name: 'Chocolate Soufflé',
      category: 'dessert',
      price: '180,000₫',
      description: 'Soufflé chocolate đen 70% với vanilla ice cream và berry coulis',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop',
      chef: 'Chef Marie',
      prepTime: '30 phút',
      difficulty: 'Khó',
      rating: 4.9,
      reviews: 201,
      tags: ['Chocolate', 'Dessert', 'Pháp']
    },
    {
      id: 7,
      name: 'Smoked Salmon Tartare',
      category: 'appetizer',
      price: '320,000₫',
      description: 'Cá hồi hun khói tartare với avocado, capers, bánh mì đen',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop',
      chef: 'Chef Erik',
      prepTime: '15 phút',
      difficulty: 'Dễ',
      rating: 4.5,
      reviews: 67,
      tags: ['Cá hồi', 'Tươi sống', 'Scandinavia']
    },
    {
      id: 8,
      name: 'Craft Cocktail "Sunset"',
      category: 'beverage',
      price: '220,000₫',
      description: 'Whiskey bourbon, aperol, fresh orange, honey syrup, bitters',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop',
      chef: 'Bartender John',
      prepTime: '5 phút',
      difficulty: 'Dễ',
      rating: 4.4,
      reviews: 112,
      isNew: true,
      tags: ['Cocktail', 'Whiskey', 'Craft']
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       item.chef.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-pink-500 border-b-transparent rounded-full animate-spin animation-delay-75 mx-auto"></div>
          </div>
          <p className="text-white text-lg font-semibold">Đang tải menu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                EPICURE
              </div>
              <div className="hidden sm:block text-white/60 text-sm">
                Fine Dining Experience
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm món ăn..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <svg className="absolute right-3 top-2.5 w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="name" className="bg-slate-800">Tên</option>
                <option value="price" className="bg-slate-800">Giá</option>
                <option value="rating" className="bg-slate-800">Đánh giá</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Danh mục</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative p-4 rounded-2xl border transition-all duration-300 group ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-transparent text-white'
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <div className="font-semibold text-sm">{category.name}</div>
                  <div className="text-xs opacity-70">{category.count} món</div>
                </div>
                {activeCategory === category.id && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sortedItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {item.isSignature && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                      ⭐ Đặc sản
                    </span>
                  )}
                  {item.isNew && (
                    <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold rounded-full">
                      🆕 Mới
                    </span>
                  )}
                </div>

                {/* Chef Info */}
                <div className="absolute top-4 right-4">
                  <div className="bg-black/50 backdrop-blur-md rounded-full px-3 py-1 text-white text-xs">
                    {item.chef}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white text-sm">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>{item.prepTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{item.rating}</span>
                    <span className="text-white/60">({item.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-xl font-bold text-purple-400">{item.price}</div>
                    {item.originalPrice && (
                      <div className="text-sm text-white/50 line-through">{item.originalPrice}</div>
                    )}
                  </div>
                </div>

                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Difficulty & Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-white/60 text-sm">Độ khó:</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={`w-2 h-2 rounded-full ${
                            level <= (['Dễ', 'Trung bình', 'Khó'].indexOf(item.difficulty) + 1)
                              ? 'bg-purple-400'
                              : 'bg-white/20'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">Không tìm thấy món ăn</h3>
            <p className="text-white/60">Thử thay đổi từ khóa tìm kiếm hoặc danh mục</p>
          </div>
        )}
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative h-80">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                fill
                className="object-cover rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-3xl"></div>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedItem.name}</h2>
                  <p className="text-purple-300 font-semibold">{selectedItem.chef}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-400">{selectedItem.price}</div>
                  {selectedItem.originalPrice && (
                    <div className="text-lg text-white/50 line-through">{selectedItem.originalPrice}</div>
                  )}
                </div>
              </div>

              <p className="text-white/80 text-lg mb-6">{selectedItem.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl mb-2">⏱️</div>
                  <div className="text-white/60 text-sm">Thời gian</div>
                  <div className="text-white font-semibold">{selectedItem.prepTime}</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="text-white/60 text-sm">Độ khó</div>
                  <div className="text-white font-semibold">{selectedItem.difficulty}</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl mb-2">⭐</div>
                  <div className="text-white/60 text-sm">Đánh giá</div>
                  <div className="text-white font-semibold">{selectedItem.rating}/5</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  Đặt món
                </button>
                <button className="px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors">
                  Thêm vào yêu thích
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .animation-delay-75 {
          animation-delay: 75ms;
        }
      `}</style>
    </div>
  );
};

export default MenuDesign6;