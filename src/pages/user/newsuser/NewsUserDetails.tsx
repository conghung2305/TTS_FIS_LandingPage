
import Footer from "../../../components/user/Footer"
import FormNCCNewsUser from "../../../components/user/FormNCCNewsUser"
import HeaderUser from "../../../components/user/HeaderUser"
import ImageNewsUserDetails from "./image2730.png"
import Image1 from "./Rectangle4440.png";
import Image2 from "./Rectangle4441.png";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoIosLink } from "react-icons/io";
import CardNewsUser from "../../../components/user/CardNewsUser";
const NewsUserDetail = () => {
    return (
        <div className="bg-gray-100">
            <HeaderUser />
            <div className="flex items-center ml-[118px] py-4 text-sm font-thin">
                <h2 className="">Trang chủ / Tin tức / Đồ ăn / Manwash-Mời báo giá cạnh tranh cho hải sản tươi sống</h2>
            </div>
            <div className="flex justify-center space-x-8 ">
                <div>
                    <div className="w-[770px] bg-white">
                        <h1 className="text-3xl font-semibold p-6">[10 TỶ] [CHÀO GIÁ CẠNH TRANH] [CÁ HỒI TƯƠI NAUY/ÚC]</h1>
                        <div className="flex space-x-4 ml-6 text-sm">
                            <p>03/12/2021</p>
                            <span className="text-[#248FED]">Đồ ăn</span>
                            <button className="flex items-center justify-center h-6 text-xs -py-4 bg-[#E0E0E0]">Hết hạn</button>
                        </div>
                        <div className="flex justify-center mt-4">
                            <img src={ImageNewsUserDetails} className="h-[300px] w-[730px]" />
                        </div>
                        <div className="p-4">
                            <span className="text-sm">Mở tiệc ăn mừng hết giãn cách cùng chương trình Flash Sale siêu hấp dẫn: Chỉ từ 0 G-Coin đổi
                                ngay Coupon trị giá lên đến 99.000 VNĐ trên ứng dụng The Golden Spoon.
                            </span><br />
                            <p className="text-sm mt-4 mb-4">
                                Khung giờ “vàng” săn Sale: 10H và 14H vào THỨ 6 HÀNG TUẦN (từ 24/09/21 – 22/10/21).
                                Duy nhất hơn 2000 Coupon áp dụng giảm giá khi đặt món từ 13 thương hiệu nổi tiếng Golden Gate qua iCOOK
                                Hạn sử dụng Coupon đến hết ngày 28/10/2021 để thực khách thoải mái mở tiệc tại gia.
                                Chỉ vài bước đặt hàng đơn giản, G-Delivery mang đại tiệc món ngon chuẩn vị nhà hàng từ hương vị lẩu Thái chua cay Kichi-Kichi, Dẻ sườn nướng đậm đà từ GoGi House đến Pizza Chicago nóng hổi Jack’s Saloon,… đến tận nhà bạn!
                            </p>
                            <p className="text-sm font-semibold mb-4">Số lượng giải thưởng</p>
                            <p className="text-sm">
                                Bên cạnh đó, The Golden Spoon sẽ cập nhật thường xuyên số lượng giải thưởng còn lại mỗi tuần trên trang Facebook The Golden Spoon, theo dõi ngay để cập nhật thông tin mới nhất về chương trình.
                            </p><br />
                            <span className="text-sm">
                                Quay Là Trúng diễn từ ngày 19/04/2021 đến 3/5/2021 trên ứng dụng The Golden Spoon và chỉ áp dụng cho ứng dụng The Golden Spoon phiên bản mới nhất, đừng quên cập nhật ứng dụng vào ngày 19/4 để sẵn sàng Quay Là Trúng!
                            </span>
                            <p className="text-sm font-semibold mb-4 mt-4">Bàn ghế và dụng cụ tiệc</p>
                            <p className="text-sm mb-4">
                                Chúng tôi đầu tư và trang bị tất cả bàn ghế, dụng cụ ăn uống, trang trí và các trang thiết bị sân khấu, âm thanh… cao cấp và chất lượng theo mọi nhu cầu của khách hàng, từ bình dân đến sang trọn đẳng cấp để mang lại sự tiện lợi và chu đáo nhất cho Khách hàng khi đặt tiệc tại nhà.
                            </p>
                            <div className="flex space-x-4">
                                <img src={Image1} alt="" />
                                <img src={Image2} alt="" />
                            </div>
                            <p className="text-sm mt-4">
                                Hiện nay, TIỆC TẠI GIA tổ chức và nấu tiệc tại nhà tại tất cả các
                                quận trong thành phố Tp.HCM: như nấu tiệc tại quận 1, tiệc tại quận 2,
                                tiệc tại quận 3, tiệc tại quận 4, tiệc tại quận 5, tiệc tại quận 6,
                                tiệc tại quận 7, tiệc tại quận 8, tiệc tại quận 9, tiệc tại quận 10,
                                tiệc tại quận 11, tiệc tại quận Bình Thạnh, tiệc tại quận Gò Vấp, tiệc
                                tại quận Phú Nhuận, tiệc tại quận Bình Tân, tiệc tại quận Tân Bình, tiệc tại quận Tân Phú,
                                tiệc tại quận Thủ Đức... Ngoài ra TIỆC TẠI GIA cũng tổ chức nấu tiệc tại nhà ở các tỉnh lân cận như:
                                Long An, Tiền Giang, Bến Tre, Tây Ninh, Bình Dương, Đồng Nai, Vũng Tàu.
                            </p>
                            <p className="text-sm mb-4 mt-2">
                                Với mong muốn mang lại trải nghiệm tốt nhất cho Quý khách hàng,
                                TIỆC TẠI GIA đầu tư tất cả tâm huyết, tiện ích và dịch vụ để phục vụ
                                để Quý khách hàng một cách chuyên nghiệp nhất, giúp Quý khách có thể tận hưởng trọn
                                vẹn những giây phút vui vẻ, thân thiết bên cạnh người thân, bạn bè,
                                đồng nghiệp trong những dịp đặc biệt mà không cần phải vất vả lo toan nhiều.
                            </p>
                            <div className="flex items-center space-x-2">
                                <span >Chia sẻ:</span>
                                <FaFacebook className="text-blue-800" />
                                <FaFacebookMessenger className="text-blue-600" />
                                <BsTwitter className="text-blue-400" />
                                <IoIosLink />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white mt-8 mb-12">
                        <div className="ml-2 p-2">
                            <p className="mb-4">Bài viết liên quan</p>
                            <hr />
                        </div>
                        <div className="flex">
                            <CardNewsUser />
                            <CardNewsUser />
                            <CardNewsUser />
                        </div>
                    </div>
                </div>


                <div className="">
                    <FormNCCNewsUser />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default NewsUserDetail