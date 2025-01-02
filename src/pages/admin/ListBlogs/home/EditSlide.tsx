import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { FcCamcorderPro } from 'react-icons/fc';
import { FaTelegramPlane } from 'react-icons/fa';
import { GoX } from 'react-icons/go';
import HeaderAdmin from '../../../../components/admin/HeaderAdmin';
const EditSlide = () => {
    const [title, setTitle] = useState('Sửa slide');
    const [editorHtml, setEditorHtml] = useState('');
    const [image, setImage] = useState(null);
    const [expiryDate, setExpiryDate] = useState('');
    const [isPreviewOpen, setIsPreviewOpen] = useState(false); // Quản lý trạng thái modal
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
            <HeaderAdmin />
            <div className="flex flex-col">
                <div className='flex flex-col'>
                    <div className='flex gap-2 p-4'>
                        <p>Danh sách bài viết / </p>
                        <p className='text-blue-600'>Trang chủ /</p>
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
                                        placeholder='Nhập nội dung không quá 200 kí tự'

                                    />
                                </div>
                                <div className='flex flex-col space-y-2 shadow-xl p-4 h-screen border-l-[2px] border-t-[2px]'>
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
                                    </div>
                                </div>
                            </div>

                            <div className="bottom-0 left-0 w-full bg-black text-white flex justify-between items-center p-1">
                                <div className="ml-2">
                                    <p>Bạn có thay đổi chưa lưu</p>
                                </div>

                                <div className="flex">
                                    <div className="hover:bg-blue-700">
                                        <button className="flex items-center text-white bg-black font-medium space-x-8 hover:bg-blue-700">
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
                                    <p>{editorHtml}</p>
                                </div>
                            </div>
                        )}
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

export default EditSlide;


