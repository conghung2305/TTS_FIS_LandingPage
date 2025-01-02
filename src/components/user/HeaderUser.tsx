import logo from "./logouser.png"
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd'
import { useState } from "react";
import { Link } from "react-router-dom";
const HeaderUser = () => {
  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => {
    setIsHovered(!isHovered); // Chuyển đổi trạng thái hiển thị
  };
  const [activeItem, setActiveItem] = useState(""); // State để theo dõi mục được chọn

  const handleMenuClick = (item: any) => {
    setActiveItem(item); // Cập nhật state khi người dùng click vào một mục
  };
  return (
    <div className="w-screen flex justify-center items-center space-x-80 h-[56px] bg-white ">
      <div className="flex space-x-16">
        <div className="w-[126px]">
          <img src={logo} alt="" />
        </div>
        <div>
          <Input prefix={<SearchOutlined />} placeholder="Tìm kiếm" />
        </div>
      </div>
      <div className="flex space-x-6">
        <div className="flex items-center justify-center">
          <ul className="flex space-x-4">
            <div className="">
              <li className={`font-thin text-xs cursor-pointer ${activeItem === "home" ? "border-b-2 border-yellow-500" : ""}`}
                onClick={() => handleMenuClick("home")}><Link to="/user" className="text-black font-thin">TRANG CHỦ</Link></li>
            </div>
            <li
              className={`font-thin text-xs cursor-pointer ${activeItem === "news" ? "border-b-2 border-yellow-500" : ""
                }`}
              onClick={() => handleMenuClick("news")}
            >
              <Link to="/user/newsuser" className="text-black font-thin">TIN TỨC</Link>
            </li>
            <div className={`font-thin text-xs cursor-pointer ${activeItem === "about" ? "border-b-2 border-yellow-500" : ""}`}
              onClick={() => handleMenuClick("about")}>
              <Link to="/user/introduceuser" className="text-black font-thin">GIỚI THIỆU</Link>
            </div>
            {/* <div
              className={`font-thin text-xs cursor-pointer ${activeItem === "clause" ? "border-b-2 border-yellow-500" : ""}`}
              onClick={() => handleMenuClick("clause")}
            >
              <Link to="/user/clause" className="text-black font-thin">ĐIỀU KHOẢN CHUNG</Link>
            </div> */}
          </ul>
        </div>
        <div className="relative">
          <button
            className="bg-[#D8A633] px-4 py-2 text-xs"
            onClick={toggleHover}
          >
            ĐĂNG NHẬP
          </button>
          {isHovered && (
            <div className="absolute top-10 right-0 w-60 h-min bg-white text-black shadow-lg  z-10">
              <div className="h-fit flex items-center p-2 gap-4">
                <div>
                  <span>Vai trò nhà cung cấp</span>
                </div>
              </div>
              <hr />
              <div className="h-fit flex items-center p-2 gap-4">
                <div>
                  <span>Vai trò nhân viên GGG</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}
export default HeaderUser