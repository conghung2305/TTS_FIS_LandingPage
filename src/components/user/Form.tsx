import { useState } from "react";

const FormDangkiNCC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Ngăn chặn reload trang
        setIsModalOpen(true); // Hiển thị modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Ẩn modal
    };
    return (
        <div className="overflow-hidden w-full">
            {/* <form onSubmit={handleSubmit} className="max-w-full sm:max-w-[670px] mx-auto overflow-hidden bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Đăng kí trở thành nhà cung cấp</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Công ty/Đơn vị <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Nhập tên công ty/đơn vị"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Người liên hệ <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Nhập tên người liên hệ"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Nhập email liên hệ"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Mã số thuế <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Nhập mã số thuế"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Số điện thoại <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Nhập số điện thoại"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Danh mục hàng hóa, dịch vụ quan tâm <span className="text-red-500">*</span>
                        </label>
                        <select
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Chọn danh mục</option>
                            <option value="category1">Danh mục 1</option>
                            <option value="category2">Danh mục 2</option>
                            <option value="category3">Danh mục 3</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-1/4 mt-6 py-2 px-4 bg-[#D8A633] text-black font-bold rounded-md focus:outline-none "
                    >
                        Đăng kí
                    </button>
                </div>
            </form> */}
            <form
                onSubmit={handleSubmit}
                className="max-w-full sm:max-w-[500px] mx-auto overflow-hidden bg-white p-3  shadow-lg"
            >
                <h2 className="text-xl font-bold mb-3 text-center text-gray-800">
                    Đăng kí trở thành nhà cung cấp
                </h2>
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                        <label className="block text-xs text-gray-700 mb-1">
                            Công ty/Đơn vị <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Tên công ty/đơn vị"
                            className="block placeholder:text-xs w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-700 mb-1">
                            Người liên hệ <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Tên người liên hệ"
                            className="placeholder:text-xs block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email liên hệ"
                            className="block placeholder:text-xs w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-700 mb-1">
                            Mã số thuế <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Mã số thuế"
                            className="block placeholder:text-xs w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-700 mb-1">
                            Số điện thoại <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Số điện thoại"
                            className="block placeholder:text-xs w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-700 mb-1">
                            Danh mục hàng hóa, dịch vụ quan tâm <span className="text-red-500">*</span>
                        </label>
                        <select
                            className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm font-bold"
                        >
                            <option value="">Chọn danh mục</option>
                            <option value="category1">Danh mục 1</option>
                            <option value="category2">Danh mục 2</option>
                            <option value="category3">Danh mục 3</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-1/3 mt-4 py-1 bg-[#D8A633] text-black font-bold focus:outline-none hover:bg-[#c2982c] text-sm"
                    >
                        Đăng kí
                    </button>
                </div>
            </form>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg text-center w-96">
                        <h3 className="text-sm text-left font-bold mb-2 text-gray-800">Xác nhận gửi phiếu đăng kí thành công</h3>
                        <p className="text-gray-600 mb-6 text-xs text-left">
                            Sau khi nhận được phiêú đăng kí của Quý công ty.
                            Golden Gate sẽ phản hồi và liên hệ trong thời gian sớm nhất
                        </p>
                        <p className="text-gray-600 mb-6 text-xs text-left">
                            Khi trở thành nhà cung cấp của Golden Gate. Quý công ty sẽ nhận được các thông báo thầu và hỗ trợ
                            chuẩn bị làm rõ hồ sơ dự thầu, có cơ hội cung cấp nhiều sản phẩm hàng hóa hơn, tăng doanh thu và sớm đạt được mục tiêu trong kinh doanh
                        </p>
                        <p className="text-gray-600 mb-6 text-xs text-left">Chân thành cảm ơn sự quan tâm của Qúy công ty</p>
                        <button
                            className="bg-[#D8A633] px-4 py-2 rounded-md text-black text-sm font-bold focus:outline-none"
                            onClick={closeModal}
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            )}
        </div>

    )
}
export default FormDangkiNCC