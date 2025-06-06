'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  chef: string;
  difficulty: number;
  time: string;
  tags: string[];
  ingredients: string[];
  rating: number;
  reviews: number;
}

const MenuDesign5 = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '🌟', color: 'from-purple-500 to-pink-500' },
    { id: 'fusion', name: 'Fusion', icon: '🎭', color: 'from-cyan-500 to-blue-500' },
    { id: 'molecular', name: 'Molecular', icon: '🧪', color: 'from-green-500 to-teal-500' },
    { id: 'dessert', name: 'Dessert', icon: '🍰', color: 'from-pink-500 to-rose-500' },
    { id: 'cocktail', name: 'Cocktail', icon: '🍸', color: 'from-orange-500 to-red-500' },
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Nitrogen Ice Cream',
      category: 'molecular',
      price: '250,000₫',
      description: 'Kem làm từ nitơ lỏng tạo hiệu ứng khói, vị vanilla Madagascar',
      image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&h=400&fit=crop',
      chef: 'Chef Nova',
      difficulty: 5,
      time: '15 phút',
      tags: ['Molecular', 'Cold', 'Sweet'],
      ingredients: ['Nitơ lỏng', 'Cream', 'Vanilla', 'Sugar'],
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      name: 'Levitating Sushi',
      category: 'fusion',
      price: '380,000₫',
      description: 'Sushi bay lơ lửng với hiệu ứng từ tính, cá hồi Na Uy tươi',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=400&fit=crop',
      chef: 'Chef Zero',
      difficulty: 4,
      time: '20 phút',
      tags: ['Fusion', 'Japanese', 'Raw'],
      ingredients: ['Cá hồi', 'Cơm sushi', 'Nori', 'Wasabi'],
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: 'Hologram Cocktail',
      category: 'cocktail',
      price: '180,000₫',
      description: 'Cocktail với hiệu ứng hologram 3D, đổi màu theo nhiệt độ',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop',
      chef: 'Mixologist X',
      difficulty: 3,
      time: '10 phút',
      tags: ['Alcohol', 'Cold', 'Color-changing'],
      ingredients: ['Gin', 'Blue Curacao', 'Tonic', 'LED cubes'],
      rating: 4.7,
      reviews: 234
    },
    {
      id: 4,
      name: 'Edible Flower Garden',
      category: 'dessert',
      price: '320,000₫',
      description: 'Vườn hoa ăn được với đất chocolate và hoa thật',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=400&fit=crop',
      chef: 'Chef Bloom',
      difficulty: 5,
      time: '45 phút',
      tags: ['Edible flowers', 'Chocolate', 'Garden'],
      ingredients: ['Chocolate soil', 'Edible flowers', 'Vanilla mousse'],
      rating: 5.0,
      reviews: 67
    },
    {
      id: 5,
      name: 'Smoke Bubble Soup',
      category: 'molecular',
      price: '290,000₫',
      description: 'Súp trong bong bóng khói, nổ trong miệng tạo hương vị',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&h=400&fit=crop',
      chef: 'Chef Mist',
      difficulty: 5,
      time: '25 phút',
      tags: ['Molecular', 'Smoke', 'Surprise'],
      ingredients: ['Vegetable broth', 'Agar', 'Dry ice', 'Herbs'],
      rating: 4.6,
      reviews: 123
    },
    {
      id: 6,
      name: 'Rainbow Noodles',
      category: 'fusion',
      price: '200,000₫',
      description: 'Mì 7 màu cầu vồng với rau củ thiên nhiên',
      image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&h=400&fit=crop',
      chef: 'Chef Spectrum',
      difficulty: 3,
      time: '30 phút',
      tags: ['Colorful', 'Healthy', 'Instagram'],
      ingredients: ['Natural dyes', 'Wheat noodles', 'Vegetables'],
      rating: 4.5,
      reviews: 298
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);
  const getDifficultyStars = (level: number) => {
    return '⭐'.repeat(level);
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Mouse Follow Gradient */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Header */}
      <header className="relative z-10 text-center py-16">
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 transform hover:scale-105 transition-transform duration-500">
            NEXUS
          </h1>
          <p className="text-2xl text-gray-300 font-light">
            Future Dining Experience • Interactive Cuisine
          </p>
        </div>
        
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative px-8 py-4 rounded-full font-bold text-white overflow-hidden transition-all duration-500 transform hover:scale-110 ${
                selectedCategory === category.id ? 'shadow-2xl shadow-purple-500/25' : ''
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <span className="relative z-10 flex items-center space-x-2">
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </span>
              
              {selectedCategory === category.id && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-white/10 to-transparent"></div>
              )}
            </button>
          ))}
        </div>
      </header>

      {/* 3D Card Gallery */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group perspective-1000 h-96"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/30">
                  <div className="relative h-2/3 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Floating Rating */}
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-white font-semibold">{item.rating}</span>
                    </div>

                    {/* Difficulty Level */}
                    <div className="absolute top-4 left-4 bg-purple-500/80 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-sm font-bold">{getDifficultyStars(item.difficulty)}</span>
                    </div>
                  </div>

                  <div className="p-6 h-1/3 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {item.price}
                      </span>
                      <div className="text-xs text-gray-400">
                        Hover to flip →
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-sm border border-purple-400/50 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.name}</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-purple-300 font-semibold mb-2">👨‍🍳 Chef</h4>
                        <p className="text-white">{item.chef}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-purple-300 font-semibold mb-2">⏱️ Thời gian</h4>
                        <p className="text-white">{item.time}</p>
                      </div>

                      <div>
                        <h4 className="text-purple-300 font-semibold mb-2">🏷️ Tags</h4>
                        <div className="flex flex-wrap gap-1">
                          {item.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-2 py-1 bg-purple-500/30 rounded-full text-xs text-purple-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-purple-300 font-semibold mb-2">📊 Reviews</h4>
                        <p className="text-white text-sm">{item.reviews} đánh giá</p>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedItem(item)}
                    className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Đặt món ngay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal for Selected Item */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-8 max-w-2xl w-full border border-purple-500/30 relative">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-white hover:text-purple-300 text-2xl"
            >
              ✕
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">{selectedItem.name}</h2>
                <p className="text-gray-300">{selectedItem.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-purple-300 font-semibold">Nguyên liệu:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.ingredients.map((ingredient, idx) => (
                      <span key={idx} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-200">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {selectedItem.price}
                  </span>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default MenuDesign5;
