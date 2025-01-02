import { useState } from "react";
import { CiEdit } from "react-icons/ci";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleDelete = () => {
        console.log('Xóa thành công');
        closeModal(); // Đóng modal sau khi xóa
    };
    return (
        <>
            <div className="mr-3 pt-4">
                <table className="w-full table-auto">
                    <thead className="h-12 bg-gray-300 font-mono text-sm">
                        <tr>
                            <th className="text-left px-2">STT</th>
                            <th className="text-left px-2">Bài viết</th>
                            <th className="text-left px-2">Người update</th>
                            <th className="text-left px-2">Thời gian update</th>
                            <th className="text-left px-2">Thời hạn bài viết</th>
                            <th className="text-left px-2">Trạng thái</th>
                            <th className="px-2"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-sm ">
                        <tr className="h-12 border-b">
                            <td className="px-2">1</td>
                            <td className="px-2">Slide</td>
                            <td className="px-2">Nguyễn Văn Nam</td>
                            <td className="px-2">12/10/2024</td>
                            <td className="px-2">19/10/2024</td>
                            <td className="px-2">
                                <button className="flex items-center justify-center h-6 text-xs -py-4 bg-[#A7F0BA]">Hiển thị</button>
                            </td>
                            <td className="px-2">
                                <div className="flex gap-2 justify-end mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 opacity-45"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 opacity-45"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                                        />
                                    </svg>
                                    <a href="/editSlide">
                                        <CiEdit className="w-5 h-4 text-black" />
                                    </a>

                                    <svg
                                        onClick={openModal}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 opacity-45 cursor-pointer"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                    </svg>
                                    {isOpen && (
                                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                            <div className="bg-white w-1/3 space-y-4">
                                                <div className="pl-4 pb-8 pt-4">
                                                    <h2 className="text-lg font-semibold pb-6">Xác nhận xóa danh mục</h2>
                                                    <p className="text-sm ">
                                                        Bạn có chắc chắn muốn xóa danh mục "<span className="font-bold">...</span>" không?
                                                    </p>
                                                </div>
                                                {/* Nút "Không" và "Xóa" */}
                                                <div className="flex w-full">
                                                    {/* Nút "Không" */}
                                                    <div className="w-full h-full bg-black cursor-pointer" onClick={closeModal}>
                                                        <button

                                                            className="max-w-max h-max bg-black text-white   hover:bg-gray-900">
                                                            Không

                                                        </button>
                                                    </div>
                                                    <div className="w-full h-full bg-blue-600" onClick={handleDelete}>
                                                        <button

                                                            className="max-w-max bg-blue-600 text-white hover:bg-blue-700">
                                                            Xóa
                                                        </button>
                                                    </div>

                                                    {/* Nút "Xóa" */}

                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                        <tr className="h-12">
                            <td className="px-2">2</td>
                            <td className="px-2">Cá hồi</td>
                            <td className="px-2">Nguyễn Văn Nam</td>
                            <td className="px-2">12/10/2024</td>
                            <td className="px-2">19/10/2024</td>
                            <td className="px-2">
                                <button className="flex items-center justify-center h-6 text-xs -py-4 bg-[#A7F0BA]">Hiển thị</button>
                            </td>
                            <td className="px-2">
                                <div className="flex gap-2 justify-end mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 opacity-45"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 opacity-45"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                                        />
                                    </svg>
                                    <a href="/editSlide">
                                        <CiEdit className="w-5 h-4 text-black" />
                                    </a>
                                    <svg
                                        onClick={openModal}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 opacity-45 cursor-pointer"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                    </svg>
                                    {isOpen && (
                                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                            <div className="bg-white w-1/3 space-y-4">
                                                <div className="pl-4 pb-8 pt-4">
                                                    <h2 className="text-lg font-semibold pb-6">Xác nhận xóa danh mục</h2>
                                                    <p className="text-sm ">
                                                        Bạn có chắc chắn muốn xóa danh mục "<span className="font-bold">...</span>" không?
                                                    </p>
                                                </div>
                                                {/* Nút "Không" và "Xóa" */}
                                                <div className="flex w-full">
                                                    {/* Nút "Không" */}
                                                    <div className="w-full h-full bg-black cursor-pointer" onClick={closeModal}>
                                                        <button

                                                            className="max-w-max h-max bg-black text-white   hover:bg-gray-900">
                                                            Không

                                                        </button>
                                                    </div>
                                                    <div className="w-full h-full bg-blue-600" onClick={handleDelete}>
                                                        <button

                                                            className="max-w-max bg-blue-600 text-white hover:bg-blue-700">
                                                            Xóa
                                                        </button>
                                                    </div>
                                                    {/* Nút "Xóa" */}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>

    )
}
export default Home