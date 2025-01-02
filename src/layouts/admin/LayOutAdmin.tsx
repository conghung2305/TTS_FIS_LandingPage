
import HeaderAdmin from "../../components/admin/HeaderAdmin";
import SidebarAdmin from "../../components/admin/SidebarAdmin";
import MainContentAdmin from "./MainContentAdmin";

const LayoutAdmin = () => {
    document.body.style.backgroundColor = "#F5F5F5";
    return (
        <div id="layout-admin" className="w-screen">
            <HeaderAdmin/>
            <div className="p-7 bg-white border-b-2 flex flex-col gap-2">
                <p className="text-sm">Danh sách bài viết/</p>
                <h1 className="font-normal text-3xl">Danh sách bài viết</h1>
            </div>
            <div className="">
                <SidebarAdmin />
                <MainContentAdmin />
            </div>
        </div>
    )
}
export default LayoutAdmin