import Header from "../components/Header";
import BanerHead from "../components/BanerHead";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import BanerTest from "../components/BanerTest";
import Faq from "../components/Faq";
import Reviews from "../components/Reviews";
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
  { component: <Reviews/>, className: "pb-[52rem] max-[1168px]:pb-[55rem] max-[1121px]:pb-[59rem] max-[1098px]:pb-[64rem] max-lg:pb-[83rem] max-[909px]:pb-[88rem] max-[790px]:pb-[90rem] max-md:pb-[80rem] max-[675px]:pb-[84rem] max-[649px]:pb-[89rem] max-sm:pb-[75rem] max-[517px]:pb-[79rem] max-[492px]:pb-[82rem] max-[465px]:pb-[85rem] max-[426px]:pb-[88rem] max-[409px]:pb-[91rem] max-[393px]:pb-[94rem] max-[371px]:pb-[98rem] max-[360px]:pb-[101rem] max-[335px]:pb-[104rem] max-[332px]:pb-[107rem] max-[326px]:pb-[110rem] max-[320px]:pb-[113rem] max-[311px]:pb-[117rem] max-[287px]:pb-[122rem] max-[275px]:pb-[126rem]"},
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
