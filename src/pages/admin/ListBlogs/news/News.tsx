import { CiEdit } from "react-icons/ci"
import { CiFilter } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { Button, Input, Table } from "antd";
import { useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import "./news.css"
const News = () => {
   const [isOpen, setIsOpen] = useState(false);
   const openModal = () => {
      setIsOpen(true);
   }
   const closeModal = () => setIsOpen(false);
   const handleDelete = () => {
      console.log('Xóa thành công');
      closeModal(); // Đóng modal sau khi xóa
   };
   const data = [
      {
         key: '1',
         title: 'Tiêu đề bài viết',
         creator: 'Nguyễn Văn Nam',
         createdAt: '12/10/2024 11:20:20',
         expiry: '19/10/2024',
         status: 'Hiển thị',
      },
      {
         key: '2',
         title: 'Tiêu đề bài viết',
         creator: 'Nguyễn Văn Nam',
         createdAt: '12/10/2024 11:20:20',
         expiry: '19/10/2024',
         status: 'Hiển thị',
      },
   ];
   const columns = [
      {
         title: '',
         dataIndex: 'checkbox',
         render: (text: any, record: any) => <input type="checkbox" className="w-3 h-3" />,
         width: 50,
      },
      {
         title: 'Tiêu đề bài viết',
         dataIndex: 'title',
         width: '20%',
      },
      {
         title: 'Người tạo',
         dataIndex: 'creator',
      },
      {
         title: 'Ngày tạo',
         dataIndex: 'createdAt',
      },
      {
         title: 'Thời hạn bài viết',
         dataIndex: 'expiry',
      },
      {
         title: 'Trạng thái',
         dataIndex: 'status',
         render: (status: any) => (
            <Button className="flex items-center justify-center h-6 text-xs -py-4" style={{ backgroundColor: '#A7F0BA' }}>
               {status}
            </Button>
         ),
      },
      {
         title: '',
         dataIndex: 'actions',
         render: (_: any, record: any) => (
            <div className="flex gap-1 justify-end">
               <IoIosArrowRoundDown className="h-4 w-4" />
               <IoIosArrowRoundUp className="h-4 w-4" />
               <a href="/addBlogs" className="text-black">
                  <CiEdit className="w-5 h-4" />
               </a>

               <svg
                  onClick={openModal}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3.5 h-3.5 opacity-45 cursor-pointer"
               >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
               </svg>
            </div>
         ),
      },
   ];
   return (
      <>
         <div className="pt-4">
            <div className="flex justify-end items-center space-x-2 mr-3 bg-white">
               <div className="flex items-center border-2">
                  <Input
                     size="large"
                     placeholder="Tìm kiếm"
                     prefix={<IoMdSearch />}
                     style={{ borderRadius: 0 }}
                     // Bỏ border-radius
                     className="bg-[#CCCCCC]"
                  />
               </div>
               <div>
                  <CiFilter />
               </div>
               <div className="bg-blue-600">
                  <a href="/addBlogs">
                     <button className="flex items-center text-white bg-blue-600 font-medium gap-8  hover:bg-blue-700">
                        Thêm mới
                        <FaPlus />
                     </button>
                  </a>

               </div>
            </div>
            <div className="mr-3">
               <Table
                  dataSource={data}
                  columns={columns}
                  pagination={true}
                  rowClassName="h-12 border-b"
                  className="w-full custom-table"
               />
               {isOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                     <div className="bg-white w-1/3 space-y-4">
                        <div className="pl-4 pb-8 pt-4">
                           <h2 className="text-lg font-semibold pb-6">Xác nhận xóa danh mục</h2>
                           <p className="text-sm">
                              Bạn có chắc chắn muốn xóa danh mục "<span className="font-bold">...</span>" không?
                           </p>
                        </div>
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
            </div>
         </div>

      </>


   )
}
export default News