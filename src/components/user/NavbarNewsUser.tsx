import { RiArrowDropDownLine } from "react-icons/ri"
import { Link } from "react-router-dom"

const NavbarNewsUser = ()=>{
 return (
    <div className="flex items-center justify-center">
    <nav className="bg-white shadow flex justify-center w-fit">
        <div className="container mx-auto flex px-3 justify-center">
            <ul className="flex space-x-10 py-2">
                <li className="group relative">
                    <a href="#" className="text-gray-700 hover:text-blue-500 font-medium flex items-center text-sm">Tất cả <span className=""><RiArrowDropDownLine /></span></a>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40">
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Tùy chọn 1</a></li>
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Tùy chọn 2</a></li>
                    </ul>
                </li>
                <li className="group relative">
                    <a href="#" className="text-gray-700 hover:text-blue-500 font-medium flex items-center text-sm">Đồ ăn <span className=""><RiArrowDropDownLine /></span></a>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40">
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Món Việt</a></li>
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Món Âu</a></li>
                    </ul>
                </li>
                <li className="group relative">
                    <a href="#" className="text-gray-700 hover:text-blue-500 font-medium flex items-center text-sm">Đồ uống <span className=""><RiArrowDropDownLine /></span></a>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40">
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Trà</a></li>
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Cà phê</a></li>
                    </ul>
                </li>
                <li className="group relative">
                    <a href="#" className="text-gray-700 hover:text-blue-500 font-medium flex items-center text-sm">Phi thực phẩm <span className=""><RiArrowDropDownLine /></span></a>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40">
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Tùy chọn 1</a></li>
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Tùy chọn 2</a></li>
                    </ul>
                </li>
                <li className="group relative">
                    <Link to={"/user/news/build"}  className="text-gray-700 hover:text-blue-500 font-medium flex items-center text-sm">Xây dựng <span className=""><RiArrowDropDownLine /></span></Link>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40">
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Dự án 1</a></li>
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Dự án 2</a></li>
                    </ul>
                </li>
                <li className="group relative">
                    <a href="#" className="text-gray-700 hover:text-blue-500 font-medium flex items-center text-sm">Marketing <span className=""><RiArrowDropDownLine /></span></a>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40">
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Chiến lược 1</a></li>
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Chiến lược 2</a></li>
                    </ul>
                </li>
                <li className="group relative">
                    <a href="#" className="text-gray-700 hover:text-blue-500 font-medium flex items-center text-sm">Vận chuyển <span className=""><RiArrowDropDownLine /></span></a>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40">
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Dịch vụ 1</a></li>
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Dịch vụ 2</a></li>
                    </ul>
                </li>
                <li className="group relative">
                    <a href="#" className="text-gray-700 hover:text-blue-500 font-medium flex items-center text-sm">IT/Công nghệ <span className=""><RiArrowDropDownLine /></span></a>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40">
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Phần mềm</a></li>
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Phần cứng</a></li>
                    </ul>
                </li>
                <li className="group relative">
                    <a href="#" className="text-gray-700 hover:text-blue-500 font-medium flex items-center text-sm">Dịch vụ khác <span className=""><RiArrowDropDownLine /></span></a>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40">
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Dịch vụ 1</a></li>
                        <li><a href="#" className="block px-4 py-2 text-gray-700 text-xs hover:bg-gray-100">Dịch vụ 2</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</div>
 )
}
export default NavbarNewsUser