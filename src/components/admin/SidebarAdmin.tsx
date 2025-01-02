import { useState } from "react"

const SidebarAdmin = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const menuItems = [
        { name: 'Trang chủ', link: '/admin/home' },
        { name: 'Tin tức', link: '/admin/news' },
        { name: 'Danh mục', link: '/admin/category' },
        { name: 'Điều khoản chung',link:'/generalTerm' },
        { name: 'Chính sách bảo mật',link:'/privacyPolicy' },
    ]
    return (
        <div className="flex flex-col h-screen w-60 bg-white text-black fixed shadow-2xl">
            <div className="flex flex-col px-6 py-4">
                <h1 className="text-xl font-semibold">Page</h1>
                <br />
                <p className="font-medium text-xs">
                    Lựa chọn một trang trong số các trang bên dưới để thiết lập nội dung cho từng trang
                </p>
            </div>
            <div>
                <ul className="mt-2">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`hover:bg-gray-300 ${activeIndex === index ? 'bg-gray-300 border-l-4 border-blue-600 font-bold' : ''}`}
                        >
                            <a
                                href={item.link}
                                className="block px-6 py-2 text-black hover:text-black font-normal text-sm"
                                onClick={() => setActiveIndex(index)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default SidebarAdmin