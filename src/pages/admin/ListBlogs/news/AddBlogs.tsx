import React, { useCallback, useState } from 'react';
import { RiArrowDropDownFill } from "react-icons/ri";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's stylesheet
import { FcCamcorderPro } from 'react-icons/fc';
import { FaTelegramPlane } from 'react-icons/fa';
import { GoX } from 'react-icons/go';
import HeaderAdmin from '../../../../components/admin/HeaderAdmin';
import { useDropzone } from 'react-dropzone';
import EditSlide from '../home/EditSlide';
import { ToggleSwitch } from "flowbite-react";
import PreviewImage from "./Group1389.png"
const AddBlogs = () => {
    const [title, setTitle] = useState('Tạo mới bài viết');
    const [editorHtml, setEditorHtml] = useState('');
    const [image, setImage] = useState(null);
    const [expiryDate, setExpiryDate] = useState('');
    const [switch1, setSwitch1] = useState(false);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false); // Quản lý trạng thái modal
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [selectedFoods, setSelectedFoods] = useState<string[]>([]);
    const [selectedDrinks, setSelectedDrinks] = useState<string[]>([]);
    const foods = [
        "Cá hồi",
        "Bò",
        "Heo",
        "Cá thu",
        "Cá ba sa",
    ];

    const options1 = [
        "Coca",
        "Pepsi",
        "Bia",
        "Nước lọc",
        "Nước chanh",
    ];
   
    const toggleDropdown = () => setIsOpen(!isOpen);
    const toggleDropdown1 = () => setIsOpen1(!isOpen1);

    const handleSelectFood = (option: string) => {
        setSelectedFoods((prev) => {
            // Nếu option đã tồn tại trong selectedOptions, xóa nó đi
            if (prev.includes(option)) {
                return prev.filter((o) => o !== option);
            }
            // Nếu option chưa tồn tại, thêm nó vào danh sách
            return [...prev, option];
        });
    };
    const handleSelectDrink = (option: string) => {
        setSelectedDrinks((prev) => {
            // Nếu option đã tồn tại trong selectedOptions, xóa nó đi
            if (prev.includes(option)) {
                return prev.filter((o) => o !== option);
            }
            // Nếu option chưa tồn tại, thêm nó vào danh sách
            return [...prev, option];
        });
    };
    const closePreview = () => {
        setIsPreviewOpen(false);
    };
    const openPreview = () => {
        setIsPreviewOpen(true);
    };
    const onDrop = useCallback((acceptedFiles: any[]) => {
        // Xử lý file đã tải lên
        const file = acceptedFiles[0];
        console.log('File đã tải lên:', file);
        // Có thể làm gì đó với file, như cập nhật state hoặc gọi API
    }, []);
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    const handleEditorChange = (html: React.SetStateAction<string>) => {
        setEditorHtml(html);
    };
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Tiêu đề:', title);
        console.log('Nội dung bài viết:', editorHtml);
        console.log('Ảnh:', image);
        console.log('Thời hạn bài viết:', expiryDate);
    };
    return (
        <>
            <div className='h-full'>
                <HeaderAdmin />
                <div className="flex flex-col">
                    <div className='flex flex-col'>
                        <div className='flex gap-2 p-4'>
                            <p>Danh sách bài viết / </p>
                            <p className='text-blue-600'>Tin tức /</p>
                        </div>
                        <h1 className="text-4xl font-medium mb-4 ml-4">{title}</h1>
                        <div className=''>
                            <form onSubmit={handleSubmit} className=''>
                                <div className='grid grid-cols-3 p-4'>
                                    <div className='shadow-xl col-span-2'>

                                        <ReactQuill
                                            value={editorHtml}
                                            onChange={handleEditorChange}
                                            modules={EditSlide.modules}
                                            formats={EditSlide.formats}
                                            className="h-[400px]"
                                            placeholder='Nhập tiêu đề bài viết và nội dung'

                                        />
                                    </div>
                                    <div className='flex flex-col space-y-2 shadow-xl p-4 h-full overflow-visible border-l-[2px] border-t-[2px]'>
                                        <h1 className='font-bold text-2xl '>Ảnh slide</h1>
                                        <div>
                                            <p>Chỉ load tệp định dạng .jpg và .png. Tổng dung lượng tối đa 25Mb.
                                            </p>
                                            <span>Kích thước ảnh khuyến nghị: 1440 x 430px</span>
                                        </div>

                                        <div className="flex flex-col space-y-2">
                                            <div
                                                {...getRootProps({ className: 'dropzone' })}
                                                className="border-dashed border-2 border-black h-32 flex flex-col items-center justify-center"
                                            >
                                                <input {...getInputProps()} />
                                                <p className="text-black">Kéo và thả tệp ở đây hoặc tải lên</p>
                                            </div>
                                            {/* Khu vực hiển thị tên file đã tải lên */}
                                            <div >
                                                {/* Hiển thị tên file ở đây nếu có */}
                                            </div>
                                            <div className=''>
                                                <label htmlFor="Thời hạn đăng bài">Thời hạn đăng bài</label><br />
                                                <div className="mt-2 w-3/4">
                                                    <div className="border-b-2 border-b-gray-500">
                                                        <input
                                                            type="datetime-local"
                                                            name=""
                                                            id=""
                                                            className="bg-[#EEEEEE] w-full border-none focus:outline-none"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bg-white'>
                                                <label htmlFor="">Hiển thị</label><br />
                                                <ToggleSwitch checked={switch1} label="On" onChange={setSwitch1}
                                                    className='bg-white relative right-4 border-none outline-none focus:outline-none focus:ring-0 shadow-none hover:shadow-none' />
                                            </div>

                                        </div>
                                        <div className="relative inline-block w-64">
                                            <label className="block text-gray-700">Danh mục hàng hóa</label>

                                            <div
                                                onClick={toggleDropdown}
                                                className=" cursor-pointer flex items-center p-2"
                                            >
                                                <RiArrowDropDownFill className='w-6 h-8' />
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFoods.length > 0} // Đánh dấu checkbox nếu có tùy chọn được chọn
                                                    onChange={() => { }} // Không làm gì khi checkbox được nhấp
                                                    className="mr-2"
                                                />

                                                <span className="ml-2">{selectedFoods.length > 0 ? selectedFoods.join(', ') : "Đồ ăn"}</span>
                                            </div>

                                            {isOpen && (
                                                <ul className="ml-8 w-full rounded z-10">
                                                    {foods.map((option, index) => (
                                                        <li
                                                            key={index}
                                                            onClick={() => handleSelectFood(option)}
                                                            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedFoods.includes(option)}
                                                                onChange={() => handleSelectFood(option)}
                                                                className="mr-2"
                                                            />
                                                            <span>{option}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>

                                        <div className="relative inline-block w-64">
                                            <div
                                                onClick={toggleDropdown1}
                                                className=" cursor-pointer flex items-center p-2"
                                            >
                                                <RiArrowDropDownFill className='w-6 h-8' />
                                                <input
                                                    type="checkbox"
                                                    checked={selectedDrinks.length > 0} // Đánh dấu checkbox nếu có tùy chọn được chọn
                                                    onChange={() => { }} // Không làm gì khi checkbox được nhấp
                                                    className="mr-2"
                                                />

                                                <span className="ml-2">{selectedDrinks.length > 0 ? selectedDrinks.join(', ') : "Đồ uống"}</span>
                                            </div>

                                            {isOpen1 && (
                                                <ul className="ml-8 w-full rounded z-10">
                                                    {options1.map((option, index) => (
                                                        <li
                                                            key={index}
                                                            onClick={() => handleSelectDrink(option)}
                                                            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedDrinks.includes(option)}
                                                                onChange={() => handleSelectDrink(option)}
                                                                className="mr-2"
                                                            />
                                                            <span>{option}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="bottom-0 left-0 w-full bg-black text-white flex justify-between items-center p-1">
                                    <div className="ml-2">
                                        <p>Bạn có thay đổi chưa lưu</p>
                                    </div>
                                    <div className="flex">
                                        <div className="hover:bg-blue-700">
                                            <button className="flex items-center text-white bg-black font-medium gap-8 hover:bg-blue-700">
                                                Hủy
                                                <GoX className="mt-1" />
                                            </button>
                                        </div>
                                        <div className="hover:bg-blue-700">
                                            <button onClick={openPreview} className="flex items-center text-white bg-black font-medium gap-8  hover:bg-blue-700">
                                                Xem trước
                                                <FcCamcorderPro className="mt-1 text-white" />
                                            </button>
                                        </div>
                                        <div className="hover:bg-blue-700">
                                            <button type="button" // Mở modal khi nhấn nút
                                                className="flex items-center text-white bg-black font-medium gap-8  hover:bg-blue-700">
                                                Đăng bài viết
                                                <FaTelegramPlane className="mt-1" />
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </form>
                            {isPreviewOpen && (
                                <div
                                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center p-12"
                                    onClick={closePreview} // Đóng modal khi click ra ngoài modal
                                >
                                    <div
                                        className="relative bg-white p-6 shadow-lg w-5/6"
                                        onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện đóng modal khi click vào bên trong
                                    >
                                        {/* Nút X đóng modal */}
                                        <button
                                            onClick={closePreview}
                                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
                                        >
                                            &times; {/* Biểu tượng X */}
                                        </button>

                                        <h2 className="text-xl font-normal mb-4">Xem trước nội dung</h2>
                                        <p className='mb-4'>Chào mừng bạn đến với Golden Gate</p>
                                        <img src={PreviewImage} alt=""/>
                                    </div>
                                </div>


                            )}
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
};

// Định nghĩa modules và formats cho thanh công cụ
EditSlide.modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['bold', 'italic', 'underline'],
        [{ color: [] }, { background: [] }], // Thêm lựa chọn màu chữ và màu nền
        [{ align: [] }], // Thêm tùy chọn canh lề
        [{ indent: '-1' }, { indent: '+1' }], // Thụt lề
        [{ direction: 'rtl' }], // Văn bản từ phải sang trái
        [{ 'lineheight': [] }], // Thêm kiểu dòng
        ['link', 'image'],
        ['clean'], // nút xóa định dạng
    ],
};

EditSlide.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline',
    'list', 'bullet',
    'link', 'image', 'align', 'color', 'background',
    'indent', 'direction', 'lineheight', // Thêm định dạng lề, canh lề, và khoảng cách dòng
];


export default AddBlogs