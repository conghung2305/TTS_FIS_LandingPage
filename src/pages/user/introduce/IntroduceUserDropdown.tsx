import { useState } from "react";
import { BsFlower2 } from "react-icons/bs";
import { BiSolidLayer } from "react-icons/bi";
interface DropdownProps {
    title: string;
    items: string[];
    isOpen: boolean;
    toggleOpen: () => void;
}
// Component Dropdown chung
const Dropdown: React.FC<DropdownProps> = ({ title, items, isOpen, toggleOpen }) => (
    <div className="mb-6">
        <div className=" cursor-pointer mb-2" onClick={toggleOpen}>
            <div className="flex  items-center">
                <span className="text-yellow-500 text-xs font-bold mr-2">
                    <BsFlower2 className="text-[#D8A633]" />
                </span>
                <h3 className="font-bold text-sm">{title}</h3>
            </div>
        </div>
        {isOpen && (
            <ul className="space-y-2 pl-6">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <span className="mr-2 text-gray-500">
                            <BiSolidLayer />
                        </span>
                        {item}
                    </li>
                ))}
            </ul>
        )}
    </div>
);

const IntroduceUserDropdown = () => {
    const [isFoodOpen, setIsFoodOpen] = useState(false);
    const [isDrinkOpen, setIsDrinkOpen] = useState(false);
    const [isNonfoodOpen, setIsNonfoodOpen] = useState(false);
    const [isBuild, setIsBuild] = useState(false);
    const [isMarketing, setIsmarketing] = useState(false);
    const [isTransport, setIstransport] = useState(false);
    const [isTechnology, setIstechnology] = useState(false);
    const [isService, setIsservice] = useState(false);
    const foodItems = [
        "Thịt bò", "Thủy hải sản", "Rau, củ quả", "Thực phẩm khô, gia vị", "Thực phẩm sẵn",
        "Thịt heo", "Bò sữa, các sản phẩm từ sữa", "Thịt chế biến sẵn", "Thịt gia cầm khác", "Thịt cừu", "Thịt gia súc khác"
    ];

    const drinkItems = ["Nước uống không có cồn", "Bia", "Rượu", "Đá lạnh, nước", "Trà,Cà phê"];

    const nonfoodItems = ["Thiết bị", "Vật liệu tiêu hao", "Công cụ", "Nội thất", "Vật tư hệ thống,thiết bị", "Đồng phục và bảo hộ",
        "Thuốc lá,khăn lạnh", "Vật tư xây dựng", "Vật tư điện", "vật tư cấp thoát nước", "Chi phí & công cụ quản lí", "Vật tư thông gió", "Bảo trì,sữa chữa"
    ];
    const buildItem = [""];
    const makertingItem = [""];
    const transportItem = [""];
    const technologyItem = [""];
    const serviceItem = [""];

    return (
        <div className="flex space-x-12  bg-white max-w-[1095px] mx-auto p-8 shadow-lg mt-4 mb-8">
            <div className="max-w-[180px]">
                <h2 className="font-bold">15+ NĂM KINH NGHIỆM TRONG LĨNH VỰC F&B</h2>
            </div>

            <div className="p-4">
                <Dropdown
                    title="ĐỒ ĂN"
                    items={foodItems}
                    isOpen={isFoodOpen}
                    toggleOpen={() => setIsFoodOpen(!isFoodOpen)}
                />
                <Dropdown
                    title="ĐỒ UỐNG"
                    items={drinkItems}
                    isOpen={isDrinkOpen}
                    toggleOpen={() => setIsDrinkOpen(!isDrinkOpen)}
                />
            </div>

            <div className="p-4">
                <Dropdown
                    title="PHI THỰC PHẨM"
                    items={nonfoodItems}
                    isOpen={isNonfoodOpen}
                    toggleOpen={() => setIsNonfoodOpen(!isNonfoodOpen)}
                />
                <Dropdown
                    title="XÂY DỰNG"
                    items={buildItem}
                    isOpen={isBuild}
                    toggleOpen={() => setIsBuild(!isBuild)}
                />
                <Dropdown
                    title="MARKETING"
                    items={makertingItem}
                    isOpen={isMarketing}
                    toggleOpen={() => setIsmarketing(!isMarketing)}
                />
                <Dropdown
                    title="VẬN CHUYỂN"
                    items={transportItem}
                    isOpen={isTransport}
                    toggleOpen={() => setIstransport(!isTransport)}
                />
                <Dropdown
                    title="IT,CÔNG NGHỆ"
                    items={technologyItem}
                    isOpen={isTechnology}
                    toggleOpen={() => setIstechnology(!isTechnology)}
                />
                 <Dropdown
                    title="DỊCH VỤ KHÁC"
                    items={serviceItem}
                    isOpen={isService}
                    toggleOpen={() => setIsservice(!isService)}
                />
            </div>
        </div>
    );
};

export default IntroduceUserDropdown;
