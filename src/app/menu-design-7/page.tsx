'use client'

import React from 'react'
import Image from 'next/image'

const MenuDesign7 = () => {
  const menuSections = [
    {
      title: "KHAI VỊ",
      subtitle: "Appetizers",
      items: [
        {
          name: "Salad Caesar",
          description: "Rau xà lách tươi, phô mai Parmesan, bánh mì nướng giòn",
          price: "85.000đ",
          highlight: false,
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
          options: ["Thêm gà nướng (+25.000đ)", "Thêm tôm (+35.000đ)", "Không crouton"]
        },
        {
          name: "Tôm Tempura",
          description: "Tôm tươi chiên giòn với bột tempura, chấm tương Nhật",
          price: "120.000đ",
          highlight: true,
          image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop",
          options: ["5 con tôm", "8 con tôm (+30.000đ)", "Kèm salad rong biển (+15.000đ)"]
        },
        {
          name: "Bruschetta Italia",
          description: "Bánh mì nướng với cà chua, húng quế, dầu olive",
          price: "75.000đ",
          highlight: false,
          image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop",
          options: ["3 miếng", "5 miếng (+20.000đ)", "Thêm phô mai mozzarella (+15.000đ)"]
        }
      ]
    },
    {
      title: "MÓN CHÍNH",
      subtitle: "Main Courses",
      items: [
        {
          name: "Bò Wagyu Nướng",
          description: "Thịt bò Wagyu cao cấp, khoai tây nghiền, rau củ nướng",
          price: "450.000đ",
          highlight: true,
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
          options: ["Medium Rare", "Medium", "Well Done", "Thêm sốt tiêu đen (+10.000đ)"]
        },
        {
          name: "Cá Hồi Teriyaki",
          description: "Cá hồi tươi nướng sốt teriyaki, cơm Nhật, rau củ",
          price: "280.000đ",
          highlight: false,
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
          options: ["Phi lê 200g", "Phi lê 300g (+50.000đ)", "Kèm miso soup (+25.000đ)"]
        },
        {
          name: "Pasta Carbonara",
          description: "Mì Ý truyền thống với bacon, trứng, phô mai Parmesan",
          price: "180.000đ",
          highlight: false,
          image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
          options: ["Spaghetti", "Fettuccine", "Penne", "Thêm nấm truffle (+40.000đ)"]
        },
        {
          name: "Gà Tandoori",
          description: "Gà ướp gia vị Ấn Độ, nướng than hoa, bánh naan",
          price: "220.000đ",
          highlight: false,
          image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
          options: ["Nửa con", "Cả con (+80.000đ)", "Kèm cơm basmati (+15.000đ)", "Naan phô mai (+20.000đ)"]
        }
      ]
    },
    {
      title: "TRÁNG MIỆNG",
      subtitle: "Desserts",
      items: [
        {
          name: "Tiramisu Cổ Điển",
          description: "Bánh tiramisu Ý truyền thống với cà phê espresso",
          price: "95.000đ",
          highlight: true,
          image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
          options: ["Size nhỏ", "Size lớn (+25.000đ)", "Thêm mascarpone (+15.000đ)"]
        },
        {
          name: "Kem Vanilla Madagascar",
          description: "Kem vani cao cấp với quả mọng tươi",
          price: "65.000đ",
          highlight: false,
          image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=300&fit=crop",
          options: ["1 scoop", "2 scoops (+20.000đ)", "Kèm waffle (+30.000đ)", "Chocolate sauce (+10.000đ)"]
        },
        {
          name: "Chocolate Lava Cake",
          description: "Bánh chocolate nóng với tim chocolate chảy",
          price: "85.000đ",
          highlight: false,
          image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
          options: ["Kèm kem vani", "Kèm kem chocolate (+5.000đ)", "Thêm quả mọng (+15.000đ)"]
        }
      ]
    },
    {
      title: "ĐỒ UỐNG",
      subtitle: "Beverages",
      items: [
        {
          name: "Rượu Vang Đỏ Pháp",
          description: "Bordeaux cao cấp, hương vị đậm đà",
          price: "350.000đ",
          highlight: true,
          image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
          options: ["Ly 150ml", "Chai 750ml", "Cabernet Sauvignon", "Merlot"]
        },
        {
          name: "Cocktail Signature",
          description: "Cocktail đặc biệt của nhà hàng",
          price: "150.000đ",
          highlight: false,
          image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
          options: ["Mojito Royal", "Sunset Paradise", "Golden Dragon", "Virgin version (-30.000đ)"]
        },
        {
          name: "Trà Oolong Đài Loan",
          description: "Trà oolong thượng hạng, hương thơm dịu nhẹ",
          price: "80.000đ",
          highlight: false,
          image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
          options: ["Nóng", "Đá", "Thêm mật ong (+5.000đ)", "Ấm lớn (+20.000đ)"]
        }
      ]
    }
  ]
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-light text-stone-800 mb-6 tracking-wider">
            ROYAL CUISINE
          </h1>
          <div className="w-12 h-px bg-stone-300 mx-auto mb-6"></div>
          <p className="text-stone-600 font-light text-lg">
            Trải nghiệm ẩm thực tinh tế
          </p>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white shadow-sm">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="border-b border-stone-100 last:border-b-0">
              {/* Section Header */}
              <div className="text-center py-16 px-8">
                <h2 className="text-2xl font-light text-stone-800 mb-2 tracking-wide">
                  {section.title}
                </h2>
                <p className="text-sm text-stone-500 font-light italic">
                  {section.subtitle}
                </p>
              </div>

              {/* Menu Items */}
              <div className="px-8 pb-16">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="mb-12 last:mb-0"
                  >
                    {/* Alternating Layout */}
                    <div className={`flex ${itemIndex % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start gap-8 mb-6`}>
                      {/* Image */}
                      <div className="flex-shrink-0">
                        <div className="relative w-32 h-24 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 128px"
                          />
                          {item.highlight && (
                            <div className="absolute top-1 right-1">
                              <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-light text-stone-800">
                            {item.name}
                          </h3>
                          <div className="text-lg font-light text-stone-700 ml-4">
                            {item.price}
                          </div>
                        </div>
                        <p className="text-sm text-stone-600 leading-relaxed mb-4 font-light">
                          {item.description}
                        </p>

                        {/* Options */}
                        {item.options && (
                          <div className="mt-4">
                            <div className="grid grid-cols-2 gap-2">
                              {item.options.map((option, optionIndex) => (
                                <div
                                  key={optionIndex}
                                  className="text-xs text-stone-500 font-light"
                                >
                                  • {option}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Decorative line */}
                    <div className="flex justify-center">
                      <div className="w-16 h-px bg-stone-200"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Footer */}
          <div className="text-center py-16 px-8">
            <div className="max-w-xl mx-auto">
              <p className="text-sm text-stone-600 mb-6 leading-relaxed font-light">
                Tất cả món ăn được chế biến từ nguyên liệu tươi ngon nhất
              </p>
              <p className="text-stone-700 font-light">
                Cảm ơn quý khách
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuDesign7