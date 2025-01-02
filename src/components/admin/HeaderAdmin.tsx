import logo from "./image/logoADmin.png";
const HeaderAdmin = () => {
    return (
        <header className="flex items-center justify-between bg-black h-[48px] max-w-screen">
            <div className="flex items-center gap-10 leading-[48px] w-full">
                <div className="flex items-center gap-2 pr-8 relative">
                    <img src={logo} alt="" className="w-[26.29px] h-[24px]" />
                    <h2 className="text-base md:text-lg text-yellow-500 font-thin">GOLDEN GATE</h2>
                    <div className="absolute -right-6 top-1 h-6 w-[0.5px] bg-white"></div>
                </div>
                <div>
                    <ul className="flex gap-4">
                        <div className="hover:bg-gray-500">
                            <li className="">
                                <a href="/admin/home" className="text-sm font-normal text-white hover:text-white p-4">Danh sách bài viết</a>
                            </li>
                        </div>
                        <div className="hover:bg-gray-500">
                            <li>
                                <a href="" className="text-sm font-normal text-white hover:text-white p-4">Về trang chủ</a>
                            </li>
                        </div>
                        <div className="hover:bg-gray-500">
                            <li>
                                <a href="" className="text-sm font-normal text-white hover:text-white p-4">Đăng xuất</a>
                            </li>
                        </div>

                    </ul>
                </div>
            </div>
            <div className="pr-4">
                <div className="w-6 h-6 rounded-full bg-gray-500 text-xs"></div>
            </div>
        </header>

    )
}
export default HeaderAdmin