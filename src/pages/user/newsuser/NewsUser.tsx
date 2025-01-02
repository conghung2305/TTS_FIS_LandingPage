import CardNewsUser from "../../../components/user/CardNewsUser";
import Footer from "../../../components/user/Footer";
import FormNCCNewsUser from "../../../components/user/FormNCCNewsUser";
import HeaderUser from "../../../components/user/HeaderUser"
import NavbarNewsUser from "../../../components/user/NavbarNewsUser";

const NewsUser = () => {
    return (
        <div className="bg-gray-50">
            <HeaderUser />
            <div className="flex items-center ml-[118px] py-4 text-sm font-thin">
                <h2>Trang chủ / Tin tức</h2>
            </div>
            <NavbarNewsUser />
            <div className="flex gap-8 mt-5 justify-center mb-20">
                <div className=" bg-white">
                    <div className="grid grid-cols-3 gap-1 space-x-2 ">
                        <CardNewsUser />
                        <CardNewsUser />
                        <CardNewsUser />
                        <CardNewsUser />
                        <CardNewsUser />
                        <CardNewsUser />
                        <CardNewsUser />
                        <CardNewsUser />
                        <CardNewsUser />
                    </div>
                    <div className="flex justify-center mb-8">
                        <button
                            type="submit"
                            className="w-1/8 mt-4 py-2 px-6 bg-[#D8A633] text-black font-semibold focus:outline-none hover:bg-[#c2982c] text-sm"
                        >
                            Xem thêm
                        </button>
                    </div>
                </div>
                <FormNCCNewsUser />
            </div>
            <Footer />
        </div>
    )
}
export default NewsUser