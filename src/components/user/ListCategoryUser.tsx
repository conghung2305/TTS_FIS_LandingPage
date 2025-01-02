import { MdLocalDrink } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { MdOutlineNoFood } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { MdEmojiTransportation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import "./checkbox.css";
import { useState } from "react";
import { Modal } from "antd";
import { Checkbox } from "antd";
import "./checkbox.css";
import { RiArrowDropDownFill } from "react-icons/ri";
const ListCategoryUser = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);
   
    // Hàm để toggle trạng thái mở/đóng của từng dropdown
    const toggleDropdown = (index: number) => {
        // Kiểm tra xem dropdown đã được mở chưa, nếu có thì tắt, nếu chưa thì mở
        if (openDropdowns.includes(index)) {
            setOpenDropdowns(openDropdowns.filter((i) => i !== index)); // Xóa dropdown khỏi mảng
        } else {
            setOpenDropdowns([...openDropdowns, index]); // Thêm dropdown vào mảng
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center space-y-2 mt-8">
            <h2 className="font-bold text-lg mb-4">Danh mục tin tức</h2>
            <div className="flex flex-col justify-center space-y-4">
                <div className="flex space-x-4 bg-white">
                    <div className="border border-gray-200 flex flex-col items-center justify-center w-48 h-full pb-4 pt-4 px-4 rounded-sm">
                        <div className="bg-yellow-50 w-[50px] h-[50px] flex items-center justify-center rounded-lg">
                            <FaBowlFood className="w-8 h-8 text-yellow-500" />
                        </div>
                        <p className="mt-2 text-center truncate">Đồ ăn</p>
                        <a href="" className="mt-2 text-black font-medium text-xs truncate">Chi tiết &rarr;</a>
                    </div>


                    <div className="h-full border border-gray-200 flex flex-col items-center justify-center w-48 pb-4 pt-4 pl-10 pr-10 rounded-sm">
                        <div className="bg-yellow-50 w-[50px] h-[50px] flex items-center justify-center rounded-lg">
                            <MdLocalDrink className="w-8 h-8 text-yellow-500" />
                        </div>
                        <p className="mt-2">Đồ uống</p>
                        <a href="" className="mt-2 text-black font-medium text-xs">Chi tiết &rarr;</a>
                    </div>
                    <div className="border border-gray-200 flex flex-col items-center justify-center h-full w-48 pb-4 pt-4 pl-10 pr-10 rounded-sm">
                        <div className="bg-yellow-50 w-[50px] h-[50px] flex items-center justify-center rounded-lg">
                            <MdOutlineNoFood className="w-8 h-8 text-yellow-500" />
                        </div>
                        <p className="mt-2">Phi thực phẩm</p>
                        <a href="" className="mt-2 text-black font-medium text-xs">Chi tiết &rarr;</a>
                    </div>
                    <div className="border border-gray-200 flex flex-col items-center justify-center h-full w-48 pb-4 pt-4 pl-10 pr-10 rounded-sm">
                        <div className="bg-yellow-50 w-[50px] h-[50px] flex items-center justify-center rounded-lg">
                            <FaBuilding className="w-8 h-8 text-yellow-500" />
                        </div>
                        <p className="mt-2">Xây dựng</p>
                        <a href="" className="mt-2 text-black font-medium text-xs">Chi tiết &rarr;</a>
                    </div>
                </div>
                <div className="flex space-x-4 bg-white">
                    <div className="border border-gray-200 flex flex-col items-center justify-center h-full w-48 pb-4 pt-4 pl-10 pr-10 rounded-sm">
                        <div className="bg-yellow-50 w-[50px] h-[50px] flex items-center justify-center rounded-lg">
                            <SiGooglemarketingplatform className="w-8 h-8 text-yellow-500" />
                        </div>
                        <p className="mt-2">Marketing</p>
                        <a href="" className="mt-2 text-black font-medium text-xs">Chi tiết &rarr;</a>
                    </div>

                    <div className="border border-gray-200 flex flex-col items-center justify-center h-full w-48 pb-4 pt-4 pl-10 pr-10 rounded-sm">
                        <div className="bg-yellow-50 w-[50px] h-[50px] flex items-center justify-center rounded-lg">
                            <MdEmojiTransportation className="w-8 h-8 text-yellow-500" />
                        </div>
                        <p className="mt-2">Vận chuyển</p>
                        <a href="" className="mt-2 text-black font-medium text-xs">Chi tiết &rarr;</a>
                    </div>
                    <div className="border border-gray-200 flex flex-col items-center justify-center h-full w-48 pb-4 pt-4 pl-10 pr-10 rounded-sm">
                        <div className="bg-yellow-50 w-[50px] h-[50px] flex items-center justify-center rounded-lg">
                            <GrTechnology className="w-8 h-8 text-yellow-500" />
                        </div>
                        <p className="mt-2">IT/Công nghệ</p>
                        <a href="" className="mt-2 text-black font-medium text-xs">Chi tiết &rarr;</a>
                    </div>
                    <div className="border border-gray-200 flex flex-col items-center justify-center h-full w-48 pb-4 pt-4 pl-10 pr-10 rounded-sm">
                        <div className="bg-yellow-50 w-[50px] h-[50px] flex items-center justify-center rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-yellow-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                            </svg>

                        </div>
                        <p className="mt-2">Dịch vụ khác</p>
                        <a href="" className="mt-2 text-black font-medium text-xs">Chi tiết &rarr;</a>
                    </div>
                </div>
            </div>
            <div className="">
                <button className="mt-4 bg-[#D8A633] " onClick={showModal}>
                    DANH MỤC QUAN TÂM
                </button>
                <Modal open={isModalOpen}
                    onCancel={handleCancel}
                    footer={null} 
                    style={{ maxWidth: '400px', width: '80%' }}
                    >
                    <div className="flex justify-between">
                        <h2 className="text-lg font-semibold mb-4">Chọn danh mục quan tâm</h2>
                    </div>
                    <div className="overflow-y-auto max-h-80">
                        <ul className="space-y-2">
                            {/* Mục Đồ ăn */}
                            <li className="flex items-center cursor-pointer">
                                <label className="flex items-center">
                                    <RiArrowDropDownFill onClick={() => toggleDropdown(0)} className="cursor-pointer" />
                                    <Checkbox>Đồ ăn</Checkbox>
                                </label>
                            </li>

                            {/* Mục Đồ uống (dropdown) */}
                            <li>
                                <label className="flex items-center cursor-pointer">
                                    <RiArrowDropDownFill onClick={() => toggleDropdown(1)} />
                                    <Checkbox>Đồ uống</Checkbox>
                                </label>
                                {/* Hiển thị các li bên dưới khi dropdown mở */}
                                {openDropdowns.includes(1) && (
                                    <ul className="pl-8 space-y-2">
                                        <li>
                                            <label className="flex items-center">
                                                <Checkbox>Đồ uống</Checkbox>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="flex items-center">
                                                <Checkbox>Đồ uống</Checkbox>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="flex items-center " >
                                                <Checkbox>Đồ uống</Checkbox>
                                            </label>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* Mục Thức ăn (dropdown) */}
                            <li>
                                <label className="flex items-center cursor-pointer">
                                    <RiArrowDropDownFill onClick={() => toggleDropdown(2)} />
                                    <Checkbox>Phi thực phẩm</Checkbox>
                                </label>
                                {/* Hiển thị các li bên dưới khi dropdown mở */}
                                {openDropdowns.includes(2) && (
                                    <ul className="pl-8 space-y-2">
                                        <li>
                                            <label className="flex items-center space-x-2">
                                                <Checkbox>Thức ăn 1</Checkbox>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="flex items-center space-x-2">
                                                <Checkbox>Thức ăn 2</Checkbox>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="flex items-center space-x-2">
                                                <Checkbox>Thức ăn 3</Checkbox>
                                            </label>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* Mục Trái cây (dropdown) */}
                            <li>
                                <label className="flex items-center cursor-pointer">
                                    <RiArrowDropDownFill onClick={() => toggleDropdown(3)} />
                                    <Checkbox>Xây dựng</Checkbox>
                                </label>
                                {/* Hiển thị các li bên dưới khi dropdown mở */}
                                {/* Hiển thị các li bên dưới khi dropdown mở */}
                                {openDropdowns.includes(3) && (
                                    <ul className="pl-8 space-y-2">
                                        <li>
                                            <label className="flex items-center space-x-2">
                                                <Checkbox>Kế hoạch đầu tư</Checkbox>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="flex items-center space-x-2">
                                                <Checkbox>Kế hoạch phát triển</Checkbox>
                                            </label>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="flex items-center cursor-pointer">
                                <label className="flex items-center">
                                    <RiArrowDropDownFill onClick={() => toggleDropdown(5)} className="cursor-pointer" />
                                    <Checkbox>Marheting</Checkbox>
                                </label>
                            </li>
                            <li className="flex items-center cursor-pointer">
                                <label className="flex items-center">
                                    <RiArrowDropDownFill onClick={() => toggleDropdown(6)} className="cursor-pointer" />
                                    <Checkbox>Dịch vụ khác</Checkbox>
                                </label>
                            </li>
                            <li className="flex items-center cursor-pointer">
                                <label className="flex items-center">
                                    <RiArrowDropDownFill onClick={() => toggleDropdown(7)} className="cursor-pointer" />
                                    <Checkbox>IT/Công nghệ</Checkbox>
                                </label>
                            </li>
                            <li className="flex items-center cursor-pointer">
                                <label className="flex items-center">
                                    <RiArrowDropDownFill onClick={() => toggleDropdown(6)} className="cursor-pointer" />
                                    <Checkbox>IT/Công nghệ</Checkbox>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button className="bg-[#D8A633] text-black py-2 px-4 w-1/4">
                            Đồng ý
                        </button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default ListCategoryUser;
