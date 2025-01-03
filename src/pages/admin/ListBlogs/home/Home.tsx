import { Button, Table } from "antd";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import "./home.css"
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleDelete = () => {
        console.log('Xóa thành công');
        closeModal(); // Đóng modal sau khi xóa
    };
    const columns = [
        {
            title: "STT",
            dataIndex: "index",
            key: "index",
        },
        {
            title: "Bài viết",
            dataIndex: "post",
            key: "post",
        },
        {
            title: "Người update",
            dataIndex: "updatedBy",
            key: "updatedBy",
        },
        {
            title: "Thời gian update",
            dataIndex: "updateTime",
            key: "updateTime",
        },
        {
            title: "Thời hạn bài viết",
            dataIndex: "postDeadline",
            key: "postDeadline",
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (status: any) => (
                <Button type="text" className="flex items-center justify-center h-6 text-xs -py-4 bg-[#A7F0BA]">
                    {status}
                </Button>
            ),
        },
        {
            title: "",
            key: "actions",
            render: (_: any, record: any) => (
                <div className="flex gap-2 justify-center items-center space-x-1">
                    <a href="/editSlide">
                        <CiEdit className="w-4 h-4 text-black cursor-pointer" />
                    </a>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3.5 h-3.5 cursor-pointer opacity-45"
                        onClick={openModal}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                    </svg>
                </div>
            ),
        },
    ];

    const dataSource = [
        {
            key: "1",
            index: "1",
            post: "Slide",
            updatedBy: "Nguyễn Văn Nam",
            updateTime: "12/10/2024",
            postDeadline: "19/10/2024",
            status: "Hiển thị",
        },
        {
            key: "2",
            index: "2",
            post: "Cá hồi",
            updatedBy: "Nguyễn Văn Nam",
            updateTime: "12/10/2024",
            postDeadline: "19/10/2024",
            status: "Hiển thị",
        },
    ];
    return (
        <>
            <div className="mr-3 pt-4">

                <Table
                    columns={columns}
                    dataSource={dataSource}
                    pagination={true}
                    className="w-full table-auto custom-table"
                />
            </div>
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
                            <div className="w-full h-full bg-black cursor-pointer" onClick={closeModal}>
                                <button className="h-max w-full bg-black text-white hover:bg-gray-900 text-left">Không</button>
                            </div>
                            <div className="w-full h-full bg-blue-600" onClick={handleDelete}>
                                <button className="w-full bg-blue-600 text-white hover:bg-blue-700 text-left">Xóa</button>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>

    )
}
export default Home