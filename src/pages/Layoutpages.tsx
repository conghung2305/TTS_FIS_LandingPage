import { IoMenuSharp } from "react-icons/io5";
import { MdMedicalInformation } from "react-icons/md";
import { FaMountainCity } from "react-icons/fa6";
import { FaShoppingBag, FaUserCircle, FaLock } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import logo from "./fis_logo.jpg";
import banner from "./banner_fis.jpg"

const LayoutPage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const toggleHover = () => {
        setIsHovered(!isHovered); // Chuyển đổi trạng thái hiển thị
    };
    return (
        <>
            <div className="w-screen h-screen" style={{
                background: 'linear-gradient(108.29deg, #00579B 0%, #51A0FD 0.01%, #606AEE 96.79%)'
            }}>
                <div className="grid grid-cols-2 p-8">
                    <h1 className="text-white text-xl font-bold">GOLDEN GATE</h1>
                    <div className="flex justify-end items-center gap-4 mr-4 mt-0">
                        <div>
                            <p className="text-white">Welcome to Le Hoa</p>
                        </div>
                        <div
                            className="relative"
                            onClick={toggleHover}
                        >
                            <IoMenuSharp className="text-white font-bold text-2xl cursor-pointer" />
                            {/* Card sẽ hiển thị khi hover */}
                            {isHovered && (
                                <div className="absolute top-10 right-0 w-80 h-min bg-white text-black  shadow-lg  z-10">
                                    <div className="flex items-center">
                                        <div style={{ backgroundImage: `url(${banner})` }} className="flex items-center w-screen bg-center">
                                            <img src={logo} alt="Logo" className="relative p-4 w-1/3 h-auto rounded-xl block" />
                                            <p className="pl-1 text-white font-semibold">Le Hoa</p>
                                        </div>
                                    </div>
                                    <div className="h-fit flex items-center p-2 gap-4">
                                        <div>
                                            <FaUserCircle className="text-blue-600 " />
                                        </div>
                                        <div>
                                            <span>Trang cá nhân</span><br />
                                            <a className="text-xs opacity-50 font-thin text-black">Thiết lập thông tin cá nhân</a>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="h-fit flex items-center p-2 gap-4">
                                        <div>
                                            <FaLock className="text-blue-600 " />
                                        </div>
                                        <div>
                                            <span>Đổi mật khẩu</span><br />
                                            <a className="text-xs opacity-50 font-thin text-black">Thay đổi mật khẩu của bạn</a>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="p-4 flex gap-20">
                                        <button className="text-xs bg-[#6484ED1F] text-blue-700 rounded-lg">Đăng nhập</button>
                                        <div className="flex gap-0.5">
                                            <FaArrowLeftLong className="text-blue-700"/>
                                            <p className="text-xs text-blue-700 font-bold">Về Landing Pages</p>
                                        </div>
                                    </div>
                                </div>

                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-32  ">
                    <h2 className="text-white text-8xl">16:20</h2>
                    <p className="text-white">Chủ nhật , 29 tháng 11</p>
                    <div className="flex justify-center item-center gap-12 mt-8">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 bg-white">
                                <MdMedicalInformation />
                            </div>
                            <p className="text-xs text-white text-center mt-1">Cổng thông tin</p>
                        </div>
                        <div className="flex flex-col justify-center items-center relative">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 bg-white">
                                <a href="/admin/home" className="text-black">
                                <FaMountainCity />
                                </a>
                                {/* Chấm đỏ thông báo ở góc 1 giờ */}
                                <div className="absolute top-0 right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">3</span> {/* Số hiển thị bên trong chấm đỏ */}
                                </div>
                            </div>
                            <p className="text-xs text-white text-center mt-1">Master Data</p>
                        </div>



                        <div className="flex flex-col justify-center items-center">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 bg-white">
                                <FaShoppingBag />
                            </div>
                            <p className="text-xs text-white text-center mt-1">Mua sắm</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 bg-white">
                                <GiNewspaper />
                            </div>
                            <p className="text-xs text-white text-center mt-1">Tin tức</p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )


}
export default LayoutPage