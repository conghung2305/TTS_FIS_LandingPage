
import React, { useState, useEffect } from "react";
import banner1 from "./image2738.png";
import banner2 from "./image2738.png";
import banner3 from "./image2738.png";
import { IoIosClose } from "react-icons/io";

const BannerSlideshow = () => {
  const banners = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Thay đổi ảnh mỗi 3 giây
    return () => clearInterval(interval);
  }, [banners.length]);

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
    setShowModal(true); // Hiển thị modal khi click vào ảnh
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className="relative w-screen h-full overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
            onClick={() => handleImageClick(banner)} // Bắt sự kiện click vào ảnh
          >
            <img
              src={banner}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer rounded-full w-2 h-2 ${currentIndex === index ? "bg-white" : "bg-gray-400"}`}
          ></div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative max-w-4xl mx-auto">

            <IoIosClose onClick={handleCloseModal} className="cursor-pointer absolute right-2 bg-transparent text-white text-4xl font-bold p-2  focus:outline-none" />
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full object-contain"
            />
            <a
              href={selectedImage} // Đặt URL ảnh vào href
              download // Kích hoạt chế độ tải về
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-[#D8A633] px-4 py-2 rounded"
            >
              Tải về
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerSlideshow;

