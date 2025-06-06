'use client';

import { useState } from 'react';
import Image from 'next/image';

const MenuDesign3 = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const categories = [
    { id: 'appetizers', name: 'Khai vị', icon: '🥗' },
    { id: 'main-courses', name: 'Món chính', icon: '🍽️' },
    { id: 'seafood', name: 'Hải sản', icon: '🦐' },
    { id: 'vegetarian', name: 'Chay', icon: '🥬' },
    { id: 'desserts', name: 'Tráng miệng', icon: '🍰' },
    { id: 'beverages', name: 'Đồ uống', icon: '☕' },
  ];  const menuItems = {
    appetizers: [
      { 
        id: 1, 
        name: 'Salad Caesar', 
        price: '120,000₫', 
        description: 'Rau xà lách tươi, phô mai Parmesan, bánh mì nướng giòn', 
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: true 
      },
      { 
        id: 2, 
        name: 'Gỏi cuốn tôm thịt', 
        price: '80,000₫', 
        description: 'Bánh tráng cuốn tôm, thịt heo, rau sống, bún tươi', 
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: false 
      },
      { 
        id: 3, 
        name: 'Nem nướng Nha Trang', 
        price: '150,000₫', 
        description: 'Nem nướng thơm ngon, bánh tráng nướng, rau thơm', 
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: false 
      },
    ],
    'main-courses': [
      { 
        id: 4, 
        name: 'Bò bít tết', 
        price: '280,000₫', 
        description: 'Thịt bò Úc nướng medium, khoai tây nghiền, rau củ', 
        image: 'https://images.unsplash.com/photo-1588731289798-2b0c1e4e3f4e?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: true 
      },
      { 
        id: 5, 
        name: 'Gà nướng mật ong', 
        price: '220,000₫', 
        description: 'Gà tươi nướng mật ong, cơm chiên dương châu', 
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: false 
      },
      { 
        id: 6, 
        name: 'Cơm tấm sườn nướng', 
        price: '95,000₫', 
        description: 'Sườn nướng thơm lừng, cơm tấm, chả trứng', 
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: false 
      },
    ],
    seafood: [
      { 
        id: 7, 
        name: 'Tôm hùm nướng phô mai', 
        price: '450,000₫', 
        description: 'Tôm hùm tươi nướng phô mai, salad rau củ', 
        image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523f?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: true 
      },
      { 
        id: 8, 
        name: 'Cá hồi nướng', 
        price: '320,000₫', 
        description: 'Cá hồi Na Uy nướng, rau củ hấp, sốt bơ', 
        image: 'https://images.unsplash.com/photo-1574781330855-d0db87d8ecf3?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: false 
      },
      { 
        id: 9, 
        name: 'Bạch tuộc nướng', 
        price: '180,000₫', 
        description: 'Bạch tuộc tươi nướng sa tế, rau sống', 
        image: 'https://images.unsplash.com/photo-1559094059-2eb5b2c12700?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: false 
      },
    ],
    vegetarian: [
      { 
        id: 10, 
        name: 'Đậu hũ ma bô', 
        price: '85,000₫', 
        description: 'Đậu hũ non, nấm hương, rau củ tươi', 
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: false 
      },
      { 
        id: 11, 
        name: 'Salad quinoa', 
        price: '120,000₫', 
        description: 'Quinoa, rau củ tươi, hạt điều, sốt olive', 
        image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: false 
      },
      { 
        id: 12, 
        name: 'Mì Ý chay', 
        price: '95,000₫', 
        description: 'Mì Ý, nấm truffle, rau củ, phô mai chay', 
        image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: false 
      },
    ],
    desserts: [
      { 
        id: 13, 
        name: 'Tiramisu', 
        price: '65,000₫', 
        description: 'Bánh Tiramisu Ý truyền thống, cà phê đậm đà', 
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: true 
      },
      { 
        id: 14, 
        name: 'Chè đậu đỏ', 
        price: '35,000₫', 
        description: 'Chè đậu đỏ nước cốt dừa, thạch rau câu', 
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: false 
      },
      { 
        id: 15, 
        name: 'Bánh flan', 
        price: '45,000₫', 
        description: 'Bánh flan mềm mịn, caramel thôm ngon', 
        image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: false 
      },
    ],
    beverages: [
      { 
        id: 16, 
        name: 'Cà phê sữa đá', 
        price: '35,000₫', 
        description: 'Cà phê phin truyền thống, sữa đặc', 
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: false 
      },
      { 
        id: 17, 
        name: 'Nước ép cam tươi', 
        price: '45,000₫', 
        description: 'Cam tươi vắt, không đường, nhiều vitamin C', 
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: false 
      },
      { 
        id: 18, 
        name: 'Trà đá chanh', 
        price: '25,000₫', 
        description: 'Trà đá mát lạnh, chanh tươi, bạc hà', 
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5', 
        popular: false 
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">      {/* Header */}
      <header className="bg-white shadow-lg border-b border-orange-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-white to-red-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="ml-2 text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                🍽️ Golden Taste Restaurant
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                Đặt bàn
              </button>
              <button className="text-orange-600 hover:text-orange-700 font-medium">
                Liên hệ
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative inset-y-0 left-0 z-50 w-64 bg-white shadow-xl border-r border-orange-100 transition-transform duration-300 ease-in-out`}>
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-orange-100">
              <h2 className="text-lg font-semibold text-gray-800">Danh mục món ăn</h2>
            </div>
            <nav className="flex-1 p-4 space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  <span className="text-xl mr-3">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </nav>
            <div className="p-4 border-t border-orange-100">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">📞 Hotline đặt bàn</p>
                <p className="font-bold text-orange-600">0123 456 789</p>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Category Header */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">
                  {categories.find(cat => cat.id === activeCategory)?.icon}
                </span>
                <h2 className="text-3xl font-bold text-gray-800">
                  {categories.find(cat => cat.id === activeCategory)?.name}
                </h2>
              </div>
              <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </div>            {/* Menu Items Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {menuItems[activeCategory as keyof typeof menuItems]?.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
                >
                  {item.popular && (
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 absolute z-10 rounded-br-lg">
                      🔥 Phổ biến
                    </div>
                  )}
                  <div className="relative">
                    <div className="h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-orange-600">
                        {item.price}
                      </span>
                      <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>            {/* Special Offers Section */}
            <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=400&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5"
                  alt="Restaurant interior"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">🎉 Ưu đãi đặc biệt hôm nay!</h3>
                  <p className="text-orange-100">Giảm 20% cho hóa đơn trên 500,000₫</p>
                </div>
                <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors duration-200">
                  Áp dụng ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=400&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5"
            alt="Restaurant atmosphere"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Golden Taste Restaurant</h4>
              <p className="text-gray-300">Trải nghiệm ẩm thực tuyệt vời với hương vị đậm đà truyền thống.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Liên hệ</h4>
              <p className="text-gray-300">📍 123 Đường ABC, Quận 1, TP.HCM</p>
              <p className="text-gray-300">📞 0123 456 789</p>
              <p className="text-gray-300">✉️ info@goldentaste.com</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Giờ mở cửa</h4>
              <p className="text-gray-300">Thứ 2 - Chủ nhật</p>
              <p className="text-gray-300">10:00 - 22:00</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MenuDesign3;