import { MdMapsHomeWork } from "react-icons/md";
import HeaderUser from "../../../components/user/HeaderUser";
import IntroduceUserDropdown from "./IntroduceUserDropdown";
import Footer from "../../../components/user/Footer";
import { FaBoxes } from "react-icons/fa";
import { GiJigsawBox } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
const IntroduceUser = () => {

    return (
        <div className="bg-gray-100">
            <HeaderUser />
            <div className="flex items-center ml-[118px] py-4 text-sm font-thin">
                <h2>Trang chủ / Giới thiệu</h2>
            </div>
            <div className="flex justify-center">
                <div className="w-fit gap-8 bg-white flex justify-center p-8 shadow-md ">
                    <div className="w-fit max-w-[180px]">
                        <h2 className="font-bold">15+ NĂM KINH NGHIỆM TRONG LĨNH VỰC F&B</h2>
                        <button className="bg-[#D8A633] text-sm font-semibold mt-4">Về Golden Gate</button>
                    </div>
                    <div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="border border-gray-100  max-w-[262px] rounded-md flex flex-col space-y-4 p-4">
                                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-yellow-50">
                                    <MdMapsHomeWork className="text-[#B98803] w-6 h-6" />
                                </div>
                                <p className="font-bold">400+ nhà hàng trên toàn quốc</p>
                            </div>
                            <div className="border border-gray-100  max-w-[262px] rounded-md flex flex-col space-y-4 p-4">
                                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-yellow-50">
                                    <FaBoxes className="text-[#B98803] w-6 h-6" />
                                </div>
                                <p className="font-bold">50,000+ mặt hàng đang giao dịch</p>
                            </div>
                            <div className="border border-gray-100  max-w-[262px] rounded-md flex flex-col space-y-4 p-4">
                                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-yellow-50">
                                    <GiJigsawBox className="text-[#B98803] w-6 h-6" />
                                </div>
                                <p className="font-bold">7000+ mặt hàng mới trong năm 2023</p>
                            </div>
                            <div className="border border-gray-100  max-w-[262px] rounded-md flex flex-col space-y-4 p-4">
                                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-yellow-50">
                                    <FaHandshake className="text-[#B98803] w-6 h-6" />
                                </div>
                                <p className="font-bold">700+ NCC trên toàn quốc và thế giới</p>
                            </div>
                            <div className="border border-gray-100  max-w-[262px] rounded-md flex flex-col space-y-4 p-4">
                                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-yellow-50">
                                    <RiMoneyDollarCircleFill className="text-[#B98803] w-6 h-6" />
                                </div>
                                <p className="font-bold">5000+ tỷ VNĐ sức mua mỗi năm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <IntroduceUserDropdown/>
            <Footer/>
        </div>
    )
}
export default IntroduceUser