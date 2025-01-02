
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-8 pb-4 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-center  space-x-36">
          {/* Thông tin công ty */}
          <div className="space-y-2">
            <h3 className="font-medium mb-4">Công ty Cổ phần Tập đoàn Golden Gate</h3>
            <p className="text-sm text-gray-300">
              Trụ sở: Tầng 6, tòa nhà Toyota, 315 Trường Chinh, Thanh Xuân, Hà Nội
            </p>
            <p className="text-sm text-gray-300">
              GPĐK: Số 0103026179 cấp ngày 09/04/2008
            </p>
          </div>

          {/* Liên kết hỗ trợ */}
          <div className="space-y-2">
            <h3 className="font-medium mb-4">Hỗ trợ khách hàng</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Điều khoản chung
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  HSĐT dành cho Nhà cung cấp
                </a>
              </li>
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div className="space-y-2">
            <h3 className="font-medium mb-4">Thông tin liên hệ</h3>
            <p className="text-sm text-gray-300">Hotline: 1900 6622</p>
            <p className="text-sm text-gray-300">Email: muahang@ggg.com.vn</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Facebook">
                <FaSquareFacebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Youtube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="mt-8 pt-4 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © 2018 Golden Gate., JSC. All rights reserved
          </p>
        </div>
      </div>
      {/* Dòng màu xanh */}
      <div className="h-1 bg-g-500 mt-4"></div>
    </footer>
  );
};

export default Footer;
