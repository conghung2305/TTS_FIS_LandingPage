// import { Checkbox } from "antd"
// import "./checkbox.css";
// const Listofinterest = () => {
//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
//                 <h2 className="text-lg font-semibold mb-4">Chọn danh mục quan tâm</h2>
//                 <div className="overflow-y-auto max-h-80">
//                     <ul className="space-y-2">
//                         <li>
//                             <label className="flex items-center space-x-2">
//                                 <Checkbox>Đồ ăn</Checkbox>
//                             </label>
//                         </li>
//                         <li>
//                             <label className="flex items-center space-x-2">
//                                 <Checkbox>Đồ uống</Checkbox>
//                             </label>
//                             <ul className="pl-6 space-y-2">
//                                 <li>
//                                     <label className="flex items-center space-x-2">
//                                         <Checkbox>Đồ uống</Checkbox>
//                                     </label>
//                                 </li>
//                                 <li>
//                                     <label className="flex items-center space-x-2">
//                                         <Checkbox>Đồ uống</Checkbox>
//                                     </label>
//                                 </li>
//                                 <li>
//                                     <label className="flex items-center space-x-2">
//                                         <Checkbox>Đồ uống</Checkbox>
//                                     </label>
//                                 </li>
//                                 <li>
//                                     <label className="flex items-center space-x-2">
//                                         <Checkbox>Đồ uống</Checkbox>
//                                     </label>
//                                 </li>
//                                 <li>
//                                     <label className="flex items-center space-x-2">
//                                         <Checkbox>Đồ uống</Checkbox>
//                                     </label>
//                                 </li>
//                                 <li>
//                                     <label className="flex items-center space-x-2">
//                                         <Checkbox>Đồ uống</Checkbox>
//                                     </label>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li>
//                             <label className="flex items-center space-x-2">
//                                 <Checkbox>Đồ uống</Checkbox>
//                             </label>
//                         </li>
//                         <li>
//                             <label className="flex items-center space-x-2">
//                                 <Checkbox>Đồ uống</Checkbox>
//                             </label>
//                         </li>
//                         <li>
//                             <label className="flex items-center space-x-2">
//                                 <Checkbox>Đồ uống</Checkbox>
//                             </label>
//                         </li>
//                         <li>
//                             <label className="flex items-center space-x-2">
//                                 <Checkbox>Đồ uống</Checkbox>
//                             </label>
//                         </li>
//                         <li>
//                             <label className="flex items-center space-x-2">
//                                 <Checkbox>Đồ uống</Checkbox>
//                             </label>
//                         </li>
//                         <li>
//                             <label className="flex items-center space-x-2">
//                                 <Checkbox>
//                                     Đồ uống
//                                 </Checkbox>
//                             </label>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="mt-4 flex justify-center">
//                     <button className="bg-[#D8A633] text-black  py-2 px-4  w-1/4">
//                         Đồng ý
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Listofinterest

// import { useState } from "react";
// import { Checkbox } from "antd";
// import "./checkbox.css";
// import { RiArrowDropDownFill } from "react-icons/ri";
// const Listofinterest = () => {
//     // State để theo dõi trạng thái mở của các dropdown
//     const [openDropdown, setOpenDropdown] = useState(null);

//     // Hàm để toggle trạng thái mở/đóng của từng dropdown
//     const toggleDropdown = (index: any) => {
//         setOpenDropdown(openDropdown === index ? null : index);
//     };

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
//                 <h2 className="text-lg font-semibold mb-4">Chọn danh mục quan tâm</h2>
//                 <div className="overflow-y-auto max-h-80">
//                     <ul className="space-y-2">
//                         {/* Mục Đồ ăn */}
//                         <li className="flex items-center cursor-pointer">
//                             <label className="flex items-center">
//                                 <RiArrowDropDownFill onClick={() => toggleDropdown(0)} className="cursor-pointer" />
//                                 <Checkbox>Đồ ăn</Checkbox>
//                             </label>
//                         </li>

//                         {/* Mục Đồ uống (dropdown) */}
//                         <li>
//                             <label className="flex items-center cursor-pointer">
//                                 <RiArrowDropDownFill onClick={() => toggleDropdown(1)} />
//                                 <Checkbox>Đồ uống</Checkbox>
//                             </label>
//                             {/* Hiển thị các li bên dưới khi dropdown mở */}
//                             {openDropdown === 1 && (
//                                 <ul className="pl-8 space-y-2">
//                                     <li>
//                                         <label className="flex items-center">
//                                             <Checkbox>Đồ uống</Checkbox>
//                                         </label>
//                                     </li>
//                                     <li>
//                                         <label className="flex items-center">
//                                             <Checkbox>Đồ uống</Checkbox>
//                                         </label>
//                                     </li>
//                                     <li>
//                                         <label className="flex items-center ">
//                                             <Checkbox>Đồ uống</Checkbox>
//                                         </label>
//                                     </li>
//                                 </ul>
//                             )}
//                         </li>

//                         {/* Mục Thức ăn (dropdown) */}
//                         <li>
//                             <label className="flex items-center cursor-pointer">
//                                 <RiArrowDropDownFill onClick={() => toggleDropdown(2)} />
//                                 <Checkbox>Thức ăn</Checkbox>
//                             </label>
//                             {/* Hiển thị các li bên dưới khi dropdown mở */}
//                             {openDropdown === 2 && (
//                                 <ul className="pl-8 space-y-2">
//                                     <li>
//                                         <label className="flex items-center space-x-2">
//                                             <Checkbox>Thức ăn 1</Checkbox>
//                                         </label>
//                                     </li>
//                                     <li>
//                                         <label className="flex items-center space-x-2">
//                                             <Checkbox>Thức ăn 2</Checkbox>
//                                         </label>
//                                     </li>
//                                     <li>
//                                         <label className="flex items-center space-x-2">
//                                             <Checkbox>Thức ăn 3</Checkbox>
//                                         </label>
//                                     </li>
//                                 </ul>
//                             )}
//                         </li>

//                         {/* Mục Trái cây (dropdown) */}
//                         <li>
//                             <label className="flex items-center  cursor-pointer">
//                                 <RiArrowDropDownFill onClick={() => toggleDropdown(3)} />
//                                 <Checkbox>Trái cây</Checkbox>
//                             </label>
//                             {/* Hiển thị các li bên dưới khi dropdown mở */}
//                             {openDropdown === 3 && (
//                                 <ul className="pl-8 space-y-2">
//                                     <li>
//                                         <label className="flex items-center space-x-2">
//                                             <Checkbox>Trái cây 1</Checkbox>
//                                         </label>
//                                     </li>
//                                     <li>
//                                         <label className="flex items-center space-x-2">
//                                             <Checkbox>Trái cây 2</Checkbox>
//                                         </label>
//                                     </li>
//                                 </ul>
//                             )}
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="mt-4 flex justify-center">
//                     <button className="bg-[#D8A633] text-black py-2 px-4 w-1/4">
//                         Đồng ý
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Listofinterest;

import { useState } from "react";
import { Checkbox } from "antd";
import "./checkbox.css";
import { RiArrowDropDownFill, RiCloseFill } from "react-icons/ri";

const Listofinterest = () => {
    // State để theo dõi các dropdown đang mở (mảng)
    const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);
    const [isOpen, setIsOpen] = useState(true); // State để quản lý trạng thái mở/đóng modal
    const closeModal = () => {
        setIsOpen(false); // Đóng modal
    };
    if (!isOpen) return null; // Không hiển thị modal nếu isOpen là false
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold mb-4">Chọn danh mục quan tâm</h2>
                    <RiCloseFill
                        onClick={closeModal}
                        className=" text-xl cursor-pointer mt-2"
                    />
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
                                <Checkbox>Thức ăn</Checkbox>
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
                                <Checkbox>Trái cây</Checkbox>
                            </label>
                            {/* Hiển thị các li bên dưới khi dropdown mở */}
                            {openDropdowns.includes(3) && (
                                <ul className="pl-8 space-y-2">
                                    <li>
                                        <label className="flex items-center space-x-2">
                                            <Checkbox>Trái cây 1</Checkbox>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="flex items-center space-x-2">
                                            <Checkbox>Trái cây 2</Checkbox>
                                        </label>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="mt-4 flex justify-center">
                    <button className="bg-[#D8A633] text-black py-2 px-4 w-1/4">
                        Đồng ý
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Listofinterest;

