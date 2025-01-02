import { Link } from "react-router-dom";
import ImageCahoi from "./cahoi.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
const CardNewsUser = () => {
    return (
        <div className="max-w-1/2 sm:max-w-[247px] mx-auto h-fit overflow-hidden bg-white p-3">
            <div className="space-y-2">
                <img src={ImageCahoi} alt="" />
                <div className="flex justify-between">
                    <p className="text-xs">27/12/2024</p>
                    <span className="text-xs text-blue-600 font-normal">Phi thực phấm</span>
                </div>
                <div>
                    <h2 className="font-bold">
                        [10 tỷ][CHÀO GIÁ CẠNH TRANH][CÁ HỒI TƯƠI NAUY]
                    </h2>
                </div>
                <div className="flex justify-start items-center gap-1">
                    <Link to={"/user/newuser/newuserdetails"} className="text-xs text-yellow-500">Xem chi tiết</Link>
                    <IoIosArrowRoundForward className="text-yellow-500"/>
                </div>
            </div>
        </div>
    )
}
export default CardNewsUser