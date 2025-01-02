import { GoX } from "react-icons/go";
import { FcCamcorderPro } from "react-icons/fc";
import { FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";
const FooterAdminSlide = () => {

    const [isPreviewOpen, setIsPreviewOpen] = useState(false); // Quản lý trạng thái modal
    const openPreview = () => {
        setIsPreviewOpen(true);
    };
    return (
        <div className="bg-black text-white flex justify-between w-screen items-center">
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
                    <button className="flex items-center text-white bg-black font-medium gap-8  hover:bg-blue-700">
                        Xem trước
                        <FcCamcorderPro className="mt-1 text-white" />
                    </button>
                </div>
                <div className="hover:bg-blue-700">
                    <button type="button" onClick={openPreview} // Mở modal khi nhấn nút
                        className="flex items-center text-white bg-black font-medium gap-8  hover:bg-blue-700">
                        Đăng bài viết
                        <FaTelegramPlane className="mt-1" />
                    </button>
                </div>

            </div>
        </div>
    )
}
export default FooterAdminSlide