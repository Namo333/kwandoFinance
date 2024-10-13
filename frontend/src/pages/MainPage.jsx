import Header from "../components/Header";
import BanerHead from "../components/BanerHead";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import BanerTest from "../components/BanerTest";
import Faq from "../components/Faq";
import { HeroBlock, ComponyBlock, CalcBlock, SlideBlock, IconBlock, TwoIconBlock, ApproachBlock } from "../components/mainPageComponent/exportMainComponents";

const sections = [
  { component: <HeroBlock />, className: "pt-[3.5rem]" },
  { component: <ComponyBlock />, className: "" },
  { component: <CalcBlock />, className: "pb-[42rem] max-lg:pb-[43rem] max-[767px]:pb-[43rem] max-[398px]:pb-[46rem] max-[369px]:pb-[50rem] max-[311px]:pb-[52rem] max-[290px]:pb-[55rem] max-[263px]:pb-[60rem]" },
  { component: <IconBlock />, className: "" },
  { component: <BanerTest />, className: "pb-[150px] max-lg:pb-[12rem] max-md:pb-[12rem] max-[767px]:pb-[15rem] max-[398px]:pb-[18rem] max-[290px]:pb-[18rem]" },
  { component: <TwoIconBlock />, className: "" },
  { component: <ApproachBlock />, className: "" },
  { component: <Faq />, className: "" },
  { component: <ContactUs />, className: "" },
];

const MainPage = () => {
  return (
    <div className="min-h-full">
      <BanerHead />
      <Header />

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {sections.map((section, index) => (
            <section key={index} className={section.className}>
              {section.component}
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainPage;
