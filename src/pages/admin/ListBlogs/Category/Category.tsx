import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CiEdit } from "react-icons/ci"
import { FaPlus } from "react-icons/fa6"
import { toast } from "react-toastify";
import type { Category } from "../../../../interface/ICategory";
import axios from "axios";
import { Modal } from "flowbite-react";
const Category: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);
    const [category, setCategory] = useState<Category[]>([])
    const [addOrupdate, setaddOrupdate] = useState("ADD");
    const [idUpdate, setIdUpdate] = useState<number>();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Category>();
    const fetchCategory = async () => {
        try {
            const { data } = await axios.get("/category");
            setCategory(data)
        } catch (error) {
            toast.error("No data")
        }
    }
    useEffect(() => {
        fetchCategory()
    }, [])
    useEffect(() => {
        setaddOrupdate("ADD");
    }, [openModal === false]);

    const fillDataFormUpdate = async (id: number) => {
        try {
            const { data } = await axios.get("/category/" + id);
            reset({
                name: data.data.name,
                image: data.data.image
            });
            setIdUpdate(id);
            setaddOrupdate("UPDATE");
        } catch (error) {
            toast.error("Có lỗi xảy ra", error!);
        }
    }
    const onSubmit = async (dataForm: Category) => {
        try {
            if (addOrupdate == "ADD") {
                const formData = new FormData();
                formData.append("name", dataForm.name);
                formData.append("image", dataForm.image);
                console.log("data:", formData.values);
                await axios.post("/category", formData);
                reset();
                toast.success("Thêm danh mục thành công");
                setOpenModal(false);
                fetchCategory();
            }
            else if (addOrupdate == "UPDATE") {
                await axios.put("category/" + idUpdate, {
                    name: dataForm.name,
                    image: dataForm.image
                })
                toast.success("Sửa danh mục thành công");
                setOpenModal(false);
                fetchCategory();
                setaddOrupdate("ADD");
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message);
            } else if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("Đã xảy ra lỗi không mong muốn");
            }
        }
    }
    const [isOpen, setIsOpen] = useState(false);

    const openModalDelete = () => setIsOpen(true);
    const closeModalDelete = () => setIsOpen(false);

    const handleDelete = () => {
        console.log('Xóa thành công');
        closeModalDelete(); // Đóng modal sau khi xóa
    };

    return (
        <div className="pt-2">
            <div className="bg-blue-600 w-fit">
                <a >
                    <button
                        onClick={() => {
                            setOpenModal(true);
                        }}
                        className="flex items-center text-white bg-blue-600 font-medium gap-8  hover:bg-blue-700">
                        Thêm mới
                        <FaPlus />
                    </button>
                </a>
            </div>
            <div className="mr-3 pt-4">
                <table className="w-full table-auto">
                    <thead className="h-12 bg-gray-300 font-mono text-sm">
                        <tr>
                            <th className="text-left px-2">STT</th>
                            <th className="text-left px-2">Tên danh mục</th>
                            <th className="text-left px-2">Hình ảnh</th>
                            <th className="text-left px-2">Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-sm ">
                        <tr className="h-12 border-b">
                            <td className="px-2">1</td>
                            <td className="px-2">Đồ ăn</td>
                            <td className="px-2">Nguyễn Văn Nam</td>
                            <td className="px-2">
                                <div className="flex gap-2 justify-start mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 opacity-45"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 opacity-45"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                                        />
                                    </svg>
                                    <CiEdit className="w-5 h-4" />
                                    <svg
                                        onClick={openModalDelete}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 opacity-45 cursor-pointer"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                    </svg>
                                    {isOpen && (
                                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                            <div className="bg-white w-1/3 space-y-4">
                                                <div className="pl-4 pb-8 pt-4">
                                                    <h2 className="text-lg font-semibold pb-6">Xác nhận xóa danh mục</h2>
                                                    <p className="text-sm ">
                                                        Bạn có chắc chắn muốn xóa danh mục "<span className="font-bold">...</span>" không?
                                                    </p>
                                                </div>
                                                {/* Nút "Không" và "Xóa" */}
                                                <div className="flex w-full">
                                                    {/* Nút "Không" */}
                                                    <div className="w-full h-full bg-black cursor-pointer" onClick={closeModalDelete}>
                                                        <button
                                                            className="max-w-max h-max bg-black text-white   hover:bg-gray-900">
                                                            Không
                                                        </button>
                                                    </div>
                                                    <div className="w-full h-full bg-blue-600 cursor-pointer" onClick={handleDelete}>
                                                        <button
                                                            className="max-w-max bg-blue-600 text-white hover:bg-blue-700">
                                                            Xóa
                                                        </button>
                                                    </div>

                                                    {/* Nút "Xóa" */}

                                                </div>
                                            </div>

                                        </div>


                                    )}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Modal
                popup
                show={openModal}
                onClose={() => setOpenModal(false)}
                className="z-50 mt-10"
                size={"md"}
            >
                <Modal.Header>
                    {addOrupdate === "ADD" ? "THÊM DANH MỤC" : "SỬA DANH MỤC"}
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Tên Danh Mục
                            </label>
                            <input
                                type="text"
                                {...register("name", {
                                    required: "Tên danh mục là bắt buộc",
                                    minLength: {
                                        value: 6,
                                        message: "Tên danh mục phải có ít nhất 6 ký tự",
                                    },
                                })}
                                id="name"
                                name="name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.name && (
                                <span className="text-primary text-sm">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Tên Danh Mục
                            </label>
                            <input

                                type="text"
                                {...register("image", {
                                    required: "Image là bắt buộc",

                                })}
                                name="image"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.image && (
                                <span className="text-primary text-sm">
                                    {errors.image.message}
                                </span>
                            )}
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="px-4 py-2 text-sm bg-primary text-white font-medium rounded-md hover:bg-primary"
                            >
                                {addOrupdate === "ADD" ? "Thêm mới" : "Cập nhật"}
                            </button>
                        </div>
                    </form>

                </Modal.Body>
            </Modal>
        </div>
    )
}
export default Category