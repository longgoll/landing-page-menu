'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const MenuDesign4 = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '✨' },
    { id: 'signature', name: 'Đặc biệt', icon: '👑' },
    { id: 'appetizer', name: 'Khai vị', icon: '🥂' },
    { id: 'main', name: 'Món chính', icon: '🥩' },
    { id: 'dessert', name: 'Tráng miệng', icon: '🍫' },
    { id: 'drink', name: 'Đồ uống', icon: '🍷' },
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Wagyu A5 Teppanyaki',
      category: 'signature',
      price: '2,500,000₫',
      originalPrice: '3,000,000₫',
      description: 'Thịt bò Wagyu A5 Nhật Bản nướng teppanyaki, kèm rau củ organic và sốt teriyaki đặc biệt của chef',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=400&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5',
      chef: 'Chef Yamamoto',
      time: '25 phút',
      isSignature: true,
      isNew: false,
      spicyLevel: 0,
      rating: 4.9
    },
    {
      id: 2,
      name: 'Tôm hùm Alaska nướng',
      category: 'signature',
      price: '1,800,000₫',
      originalPrice: null,
      description: 'Tôm hùm Alaska tươi sống nướng bơ tỏi, kèm khoai tây nghiền và asparagus',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5573b07?w=500&h=400&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5',
      chef: 'Chef Laurent',
      time: '20 phút',
      isSignature: true,
      isNew: true,
      spicyLevel: 1,
      rating: 4.8
    },
    {
      id: 3,
      name: 'Truffle Risotto',
      category: 'main',
      price: '850,000₫',
      originalPrice: null,
      description: 'Cơm risotto Ý với nấm truffle đen, phô mai Parmigiano-Reggiano 24 tháng tuổi',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&h=400&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5',
      chef: 'Chef Marco',
      time: '18 phút',
      isSignature: false,
      isNew: false,
      spicyLevel: 0,
      rating: 4.7
    },
    {
      id: 4,
      name: 'Caviar Blini',
      category: 'appetizer',
      price: '1,200,000₫',
      originalPrice: null,
      description: 'Bánh blini Nga với caviar Ossetra, kem chua và rau mùi tây',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=400&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5',
      chef: 'Chef Volkov',
      time: '5 phút',
      isSignature: false,
      isNew: true,
      spicyLevel: 0,
      rating: 4.6
    },
    {
      id: 5,
      name: 'Dark Chocolate Soufflé',
      category: 'dessert',
      price: '320,000₫',
      originalPrice: null,
      description: 'Bánh soufflé chocolate đen 70% Valrhona, kem vanilla Madagascar',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5',
      chef: 'Chef Pierre',
      time: '30 phút',
      isSignature: false,
      isNew: false,
      spicyLevel: 0,
      rating: 4.9
    },
    {
      id: 6,
      name: 'Dom Pérignon 2012',
      category: 'drink',
      price: '12,000,000₫',
      originalPrice: null,
      description: 'Champagne cao cấp từ vườn nho Dom Pérignon, vintage 2012',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=400&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5',
      chef: 'Sommelier Jean',
      time: '即时',
      isSignature: true,
      isNew: false,
      spicyLevel: 0,
      rating: 5.0
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const getSpicyIcons = (level: number) => {
    return '🌶️'.repeat(level);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Hero Section with Parallax */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5"
          alt="Luxury Restaurant"
          fill
          className="object-cover"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
          priority
          unoptimized
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full text-sm uppercase tracking-widest mb-4">
              Michelin ⭐⭐⭐
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            LUMIÈRE
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide">
            Haute Cuisine • Fine Dining • Luxury Experience
          </p>
          
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Est. 1987</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Chef Étoilé</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>World Cuisine Awards</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Navigation Categories */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg shadow-yellow-400/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-yellow-400 border border-gray-700'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                </span>
                
                {activeCategory === category.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-20 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 hover:scale-[1.02] ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent group-hover:from-yellow-400/5 transition-all duration-500"></div>
              
              <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} relative z-10`}>
                {/* Image Section */}
                <div className="lg:w-2/5 relative h-80 lg:h-96 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {item.isSignature && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full text-xs flex items-center space-x-1">
                        <span>👑</span>
                        <span>SIGNATURE</span>
                      </span>
                    )}
                    {item.isNew && (
                      <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-green-600 text-black font-bold rounded-full text-xs animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-white font-semibold">{item.rating}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl lg:text-4xl font-serif font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                        {item.name}
                      </h3>
                      {item.spicyLevel > 0 && (
                        <span className="text-red-400">{getSpicyIcons(item.spicyLevel)}</span>
                      )}
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-400">👨‍🍳</span>
                      <span>{item.chef}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-400">⏰</span>
                      <span>{item.time}</span>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-yellow-400">
                        {item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-xl text-gray-500 line-through">
                          {item.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25">
                      <span className="relative z-10 flex items-center space-x-2">
                        <span>Đặt món</span>
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black border-t border-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-serif font-bold text-yellow-400 mb-4">Địa chỉ</h3>
              <p className="text-gray-300">
                Tầng 50, Landmark 81<br />
                Vinhomes Central Park<br />
                Quận Bình Thạnh, TP.HCM
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-bold text-yellow-400 mb-4">Liên hệ</h3>
              <p className="text-gray-300 mb-2">📞 +84 908 777 888</p>
              <p className="text-gray-300">✉️ reserve@lumiere.vn</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-bold text-yellow-400 mb-4">Giờ mở cửa</h3>
              <p className="text-gray-300">
                Thứ 2 - Chủ nhật<br />
                18:00 - 00:00<br />
                <span className="text-yellow-400 text-sm">(Chỉ phục vụ theo đặt bàn)</span>
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500">
              © 2025 Restaurant Lumière. All rights reserved. | Michelin Guide ⭐⭐⭐
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MenuDesign4;