import React from 'react'
import Image from 'next/image'

const menuItems = [
  {
    category: "Khai vị",
    items: [
      {
        name: "Salad Caesar",
        description: "Rau diếp tươi, phô mai Parmesan, bánh mì nướng, sốt Caesar đặc biệt",
        price: "180,000₫",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop&crop=faces"
      },
      {
        name: "Tôm rang me",
        description: "Tôm tươi rang với me chua ngọt, lá curry thơm",
        price: "280,000₫",
        image: "https://images.unsplash.com/photo-1565680018434-b513d5573b07?w=400&h=300&fit=crop&crop=faces"
      },
      {
        name: "Nem nướng nha trang",
        description: "Nem nướng truyền thống, bánh tráng, rau sống, bún",
        price: "220,000₫",
        image: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=400&h=300&fit=crop&crop=faces"
      }
    ]
  },  {
    category: "Món chính",
    items: [
      {
        name: "Bò Wagyu nướng",
        description: "Thịt bò Wagyu A5 nướng hoàn hảo, kèm rau củ nướng",
        price: "1,200,000₫",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=faces"
      },
      {
        name: "Cá hồi teriyaki",
        description: "Cá hồi Na Uy nướng sốt teriyaki, cơm Nhật truyền thống",
        price: "450,000₫",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop&crop=faces"
      },
      {
        name: "Gà nướng thảo mộc",
        description: "Gà tự nhiên nướng với thảo mộc Địa Trung Hải",
        price: "320,000₫",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop&crop=faces"
      },
      {
        name: "Pasta truffle",
        description: "Mì Ý handmade với nấm truffle đen và phô mai Pecorino",
        price: "380,000₫",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop&crop=faces"
      }
    ]
  },  {
    category: "Tráng miệng",
    items: [
      {
        name: "Tiramisu",
        description: "Bánh tiramisu Italia truyền thống với cà phê espresso",
        price: "150,000₫",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop&crop=faces"
      },
      {
        name: "Kem gelato",
        description: "Kem gelato thủ công với nhiều hương vị tự nhiên",
        price: "120,000₫",
        image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=300&fit=crop&crop=faces"
      },
      {
        name: "Chocolate lava",
        description: "Bánh chocolate nóng với tim chocolate chảy, kem vanilla",
        price: "180,000₫",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=faces"
      }
    ]
  },  {
    category: "Đồ uống",
    items: [
      {
        name: "Cà phê Arabica",
        description: "Cà phê rang xay tươi từ hạt Arabica Đà Lạt",
        price: "65,000₫",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&crop=faces"
      },
      {
        name: "Trà oolong đài loan",
        description: "Trà oolong cao cấp từ Đài Loan, hương thơm tinh tế",
        price: "80,000₫",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop&crop=faces"
      },
      {
        name: "Cocktail signature",
        description: "Cocktail đặc biệt của nhà hàng với rượu cao cấp",
        price: "220,000₫",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop&crop=faces"
      }
    ]
  }
]

export default function MenuDesign1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            🍽️ <span className="text-amber-600">Nhà hàng</span> Premium
          </h1>
          <p className="text-gray-600 text-lg font-light">
            Trải nghiệm ẩm thực đỉnh cao với nguyên liệu tươi ngon nhất
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
        </div>
      </header>

      {/* Menu Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {menuItems.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            {/* Category Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                {category.category}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
            </div>            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-amber-200 group"
                >                  {/* Food Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-amber-600 font-bold px-3 py-1 rounded-full text-sm">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Item Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors mb-2">
                        {item.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>

                    {/* Decorative dots */}
                    <div className="flex justify-center mt-4 space-x-1">
                      <div className="w-1 h-1 bg-amber-300 rounded-full"></div>
                      <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Footer Section */}
        <footer className="text-center mt-20 py-12 bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              🕐 Giờ phục vụ
            </h3>
            <p className="text-gray-600">
              Thứ 2 - Chủ nhật: 10:00 - 22:00
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              📞 Đặt bàn
            </h3>
            <p className="text-gray-600">
              Hotline: <span className="text-amber-600 font-semibold">0901 234 567</span>
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              📍 Địa chỉ
            </h3>
            <p className="text-gray-600">
              123 Đường ABC, Quận 1, TP.HCM
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              © 2025 Nhà hàng Premium. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
