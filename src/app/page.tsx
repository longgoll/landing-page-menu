import Link from "next/link";

export default function Home() {
  const menuDesigns = [
    {
      id: 1,
      title: "Thiết kế Menu 1",
      description: "Menu",
      image: "/menu-design-1.jpg",
      route: "/menu-design-1",
    },
    {
      id: 2,
      title: "Thiết kế Menu 2",
      description: "Menu",
      image: "/menu-design-2.jpg",
      route: "/menu-design-2",
    },
    {
      id: 3,
      title: "Thiết kế Menu 3",
      description: "Menu",
      image: "/menu-design-3.jpg",
      route: "/menu-design-3",
    },
    {
      id: 4,
      title: "Thiết kế Menu 4",
      description: "Menu",
      image: "/menu-design-4.jpg",
      route: "/menu-design-4",
    },
    {
      id: 5,
      title: "Thiết kế Menu 5",
      description: "Menu",
      image: "/menu-design-5.jpg",
      route: "/menu-design-5",
    },
    {
      id: 6,
      title: "Thiết kế Menu 6",
      description: "Menu",
      image: "/menu-design-6.jpg",
      route: "/menu-design-6",
    },
    {
      id: 7,
      title: "Thiết kế Menu 6",
      description: "Menu",
      image: "/menu-design-7.jpg",
      route: "/menu-design-7",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Bộ Sưu Tập Menu Design
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Khám phá các thiết kế menu đa dạng và chọn phong cách phù hợp với dự
            án của bạn
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuDesigns.map((design) => (
            <Link key={design.id} href={design.route} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 overflow-hidden">
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold">{design.id}</span>
                    </div>
                    <p className="text-sm opacity-80">Preview Image</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {design.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {design.description}
                  </p>
                  <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                    <span>Xem chi tiết</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-600 dark:text-gray-400">
          <p>© 2025 Menu Design Collection. Tạo ra để học tập và phát triển.</p>
        </div>
      </div>
    </div>
  );
}
