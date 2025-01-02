
import BannerSlideshow from "../../components/user/BannerUser";
import Content from "../../components/user/ContentLeft";
import Footer from "../../components/user/Footer";
import FormDangkiNCC from "../../components/user/Form";
import HeaderUser from "../../components/user/HeaderUser";
import ListCategoryUser from "../../components/user/ListCategoryUser";


const HomePage = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <HeaderUser />
      <div className="w-full h-auto"> {/* Ensure that the slideshow takes up proper height */}
        <BannerSlideshow />
        <div className="w-full overflow-auto flex bg-gray-200 pl-48 space-x-2 pr-48 pt-16 pb-16 justify-center mb-2">
          <Content />
          <FormDangkiNCC />
        </div>
        <ListCategoryUser />
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </div>
    
  );
};

export default HomePage;
