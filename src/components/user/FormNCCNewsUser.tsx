const FormNCCNewsUser = () => {
    return (
        <div className="">
                <form
                    className="max-w-1/2 sm:max-w-[370px] mx-auto overflow-hidden bg-white p-3  shadow-lg"
                >
                    <h2 className="text-sm font-bold mb-3 text-left text-gray-800">
                        Đăng kí trở thành nhà cung cấp
                    </h2>
                    <div className="text-sm space-y-4">
                        <div>
                            <label className="block text-xs text-gray-700 mb-1 font-semibold">
                                Công ty/Đơn vị <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Tên công ty/đơn vị"
                                className="block placeholder:text-xs w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-700 mb-1 font-semibold">
                                Người liên hệ <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Tên người liên hệ"
                                className="placeholder:text-xs block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-700 mb-1 font-semibold">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email liên hệ"
                                className="block placeholder:text-xs w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-700 mb-1 font-semibold">
                                Mã số thuế <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Mã số thuế"
                                className="block placeholder:text-xs w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-700 mb-1 font-semibold">
                                Số điện thoại <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Số điện thoại"
                                className="block placeholder:text-xs w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-700 mb-1 font-semibold">
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
                            className="w-full mt-4 py-1 bg-[#D8A633] text-black font-semibold focus:outline-none hover:bg-[#c2982c] text-sm"
                        >
                            Đăng kí ngay
                        </button>
                    </div>
                </form>
        </div>
    )
}
export default FormNCCNewsUser