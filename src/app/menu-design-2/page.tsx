'use client';

import { useState } from 'react';
import Image from 'next/image';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Bún Bò Huế",
    description: "Món bún đặc trưng của Huế với nước dùng đậm đà, thịt bò tươi ngon",
    price: 45000,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    category: "main",
    isPopular: true
  },
  {
    id: 2,
    name: "Phở Bò Đặc Biệt",
    description: "Phở bò truyền thống với nước dùng trong vắt, thịt bò tái chín",
    price: 50000,
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop",
    category: "main",
    isNew: true
  },
  {
    id: 3,
    name: "Bánh Mì Thịt Nướng",
    description: "Bánh mì giòn tan với thịt nướng thơm lừng, rau sống tươi mát",
    price: 25000,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    category: "appetizer"
  },
  {
    id: 4,
    name: "Gỏi Cuốn Tôm Thịt",
    description: "Gỏi cuốn tươi ngon với tôm, thịt luộc, rau thơm và bún tươi",
    price: 35000,
    image: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=400&h=300&fit=crop",
    category: "appetizer",
    isPopular: true
  },
  {
    id: 5,
    name: "Cà Phê Sữa Đá",
    description: "Cà phê đậm đà pha theo phong cách truyền thống Việt Nam",
    price: 18000,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
    category: "drink"
  },
  {
    id: 6,
    name: "Trà Đá Chanh",
    description: "Trà đá chanh tươi mát, giải khát hoàn hảo",
    price: 15000,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
    category: "drink"
  },
  {
    id: 7,
    name: "Chè Ba Màu",
    description: "Chè truyền thống ba màu với đậu xanh, đậu đỏ và nước cốt dừa",
    price: 20000,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    category: "dessert"
  },
  {
    id: 8,
    name: "Bánh Flan",
    description: "Bánh flan mềm mịn với caramel đắng ngọt hài hòa",
    price: 22000,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
    category: "dessert",
    isNew: true
  }
];

const categories = [
  { id: 'all', name: 'Tất cả', icon: '🍽️' },
  { id: 'main', name: 'Món chính', icon: '🍜' },
  { id: 'appetizer', name: 'Khai vị', icon: '🥗' },
  { id: 'drink', name: 'Đồ uống', icon: '🥤' },
  { id: 'dessert', name: 'Tráng miệng', icon: '🍰' }
];

export default function MenuDesign2() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Nhà Hàng Sài Gòn
          </h1>
          <p className="text-xl text-orange-100 mb-8 animate-fade-in-up animation-delay-200">
            Hương vị truyền thống - Phong cách hiện đại
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto animate-fade-in-up animation-delay-400">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm món ăn..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-800 bg-white/95 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 hover:shadow-xl"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative waves */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border-2 border-gray-200 hover:border-orange-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </span>
              {selectedCategory === category.id && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-20 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 4} // Ưu tiên load 4 ảnh đầu tiên
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.isNew && (
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full animate-bounce">
                      MỚI
                    </span>
                  )}
                  {item.isPopular && (
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                      PHỔ BIẾN
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">
                    {formatPrice(item.price)}
                  </span>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Đặt món
                  </button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Không tìm thấy món ăn</h3>
            <p className="text-gray-600">Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Nhà Hàng Sài Gòn</h3>
          <p className="text-gray-300 mb-4">Mang đến cho bạn những trải nghiệm ẩm thực tuyệt vời nhất</p>
          <div className="flex justify-center gap-8 text-sm">
            <span>📍 123 Nguyễn Huệ, Q.1, TP.HCM</span>
            <span>📞 0123 456 789</span>
            <span>⏰ 8:00 - 22:00</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}