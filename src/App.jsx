import React, {useState, useEffect} from "react";
import Header from "./components/header/Header.jsx";
import Banner from "./components/header/Banner.jsx";
import Teasers from "./components/header/Teasers.jsx";
import Slider1 from "./components/main_block/Slider1.jsx";
import StaticBlock from "./components/main_block/StaticBlock.jsx";
import LatestArticles from "./components/main_block/LatestArticles.jsx";
import Archives from "./components/bottom_block/Archives.jsx";
import TestimonialsImg from "./components/bottom_block/TestimonialsImg.jsx";
import Testimonials from "./components/bottom_block/Testimonials.jsx";

function stripTags(input) {
    return input.replace(/<[^>]+>/g, '');
}

const App = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const [menuLinks, setMenuLinks] = useState([]);
    const [blockContent1, setBlockContent1] = useState({});
    const [blockContent2, setBlockContent2] = useState({});
    const [blockContent3, setBlockContent3] = useState({});
    const [blockContent4, setBlockContent4] = useState({});
    const [blockContent5, setBlockContent5] = useState([]);
    const [blockContent6, setBlockContent6] = useState([]);
    const [blockContent7, setBlockContent7] = useState({});
    const [blockContent8, setBlockContent8] = useState([]);
    const [blockContent9, setBlockContent9] = useState({});
    const [blockContent10, setBlockContent10] = useState([]);
    const [blockContent11, setBlockContent11] = useState([]);
    const [blockContent12, setBlockContent12] = useState({});
    const [blockContent13, setBlockContent13] = useState([]);


    const apiUrlMenu = "http://91.107.217.207/jsonapi/menu_link_content/menu_link_content";
    const apiUrlBlock1 = "http://91.107.217.207/jsonapi/block_content/basic/d6ee7696-ee2d-47f1-a4ba-c6b6a2ac583c?resourceVersion=id%3A1&include=field_image";
    const apiUrlBlock2 = "http://91.107.217.207/jsonapi/block_content/social_links/da13c4ff-fea5-48e6-bedb-7ede57c8f29d?resourceVersion=id%3A2&include=field_social_links.field_icon_svg";
    const apiUrlBlock3 = "http://91.107.217.207/jsonapi/node/page";
    const apiUrlBlock4 = "http://91.107.217.207/blog-articles-first?_format=json";
    const apiUrlBlock5 = "http://91.107.217.207/blog-articles-second?_format=json";
    const apiUrlBlock6 = "http://91.107.217.207/design-tutorials-first?_format=json";
    const apiUrlBlock7 = "http://91.107.217.207/jsonapi/block_content/w_full_block/cf972415-4ba6-4d47-ae43-11798f4b8e2a?resourceVersion=id%3A3&include=field_image";
    const apiUrlBlock8 = "http://91.107.217.207/editors-choice?_format=json";
    const apiUrlBlock9 = "http://91.107.217.207/jsonapi/block_content/w_full_block/121c2905-1aad-4a35-b001-249f99f464e1?resourceVersion=id%3A4&include=field_image";
    const apiUrlBlock10 = "http://91.107.217.207/latest-articles?_format=json";
    const apiUrlBlock11 = "http://91.107.217.207/archives?_format=json";
    const apiUrlBlock12 = "http://91.107.217.207/jsonapi/block_content/basic/07440139-1de0-44ab-98d8-9a7b437245db?resourceVersion=id%3A5&include=field_image";
    const apiUrlBlock13 = "http://91.107.217.207/testimonials?_format=json";

    useEffect(() => {

        fetch(apiUrlMenu)
            .then((response) => response.json())
            .then((data) => {
                setMenuLinks(data.data);
            })
            .catch((error) => console.error("Error fetching menu links:", error));

        fetch(apiUrlBlock1)
            .then((response) => response.json())
            .then((data) => {
                setBlockContent1(data.data);
            })
            .catch((error) => console.error("Error fetching block content 1:", error));

        fetch(apiUrlBlock2)
            .then((response) => response.json())
            .then((data) => {
                setBlockContent2(data.data);
            })
            .catch((error) => console.error("Error fetching block content 2:", error));

        fetch(apiUrlBlock3)
            .then((response) => response.json())
            .then((data) => {
                setBlockContent3(data.data[0]);
            })
            .catch((error) => console.error("Error fetching block content 3:", error));

        fetch(apiUrlBlock4)
            .then((response) => response.json())
            .then((data) => {
                setBlockContent4(data[0]);
            })
        .catch((error) => console.error("Error fetching block content 4:", error));

        fetch(apiUrlBlock5)
            .then((response) => response.json())
            .then((data) => {
                setBlockContent5(data);
            })
            .catch((error) => console.error("Error fetching block content 5:", error));

        fetch(apiUrlBlock6)
            .then((response) => response.json())
            .then((data) => {
                setBlockContent6(data);
            })
            .catch((error) => console.error("Error fetching block content 6:", error));

        fetch(apiUrlBlock7)
            .then((response) => response.json())
            .then((data) => {
                setBlockContent7(data.data);
            })
            .catch((error) => console.error("Error fetching block content 7:", error));

        fetch(apiUrlBlock8)
            .then((response) => response.json())
            .then((data) => {
                setBlockContent8(data);
            })
            .catch((error) => console.error("Error fetching block content 8:", error));

        fetch(apiUrlBlock9)
            .then((response) => response.json())
            .then((data) => {
                setBlockContent9(data.data);
            })
            .catch((error) => console.error("Error fetching block content 9:", error));

        fetch(apiUrlBlock10)
            .then((response) => response.json())
            .then((data) => {
                setBlockContent10(data);
            })
            .catch((error) => console.error("Error fetching block content 10:", error));

        fetch(apiUrlBlock11)
            .then((response) => response.json())
            .then((data) => {
                setBlockContent11(data);
            })
            .catch((error) => console.error("Error fetching block content 11:", error));

        fetch(apiUrlBlock12)
            .then((response) => response.json())
            .then((data) => {
                setBlockContent12(data.data);
            })
            .catch((error) => console.error("Error fetching block content 12:", error));

        fetch(apiUrlBlock13)
            .then((response) => response.json())
            .then((data) => {
                setBlockContent13(data);
            })
            .catch((error) => console.error("Error fetching block content 12:", error));
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });


    return (
        <>
            <div className={"mainlayout"}>
                <div className={"container "}>
                    <div className={"dark px-[20px] py-[0px] bg-dark lg:px-[40px] lg:pt-[20px] lg:pb-[40px]"}>
                        <Header menuLinks={menuLinks} blockContent1={blockContent1} blockContent2={blockContent2}/>
                        <Banner blockContent3={blockContent3}/>
                        <Teasers blockContent4={blockContent4} blockContent5={blockContent5}/>
                    </div>
                    <div className={"bg-white slider1 p-[20px] lg:px-[40px] lg:pt-[60px] lg:pb-[40px]"}>
                        <h1 className={"title_block ml-[28px]"}>TUTORIAL DESIGN</h1>
                        <Slider1 blockContent6={blockContent6}/>
                    </div>
                    <div className={"text-white static_block1 bg-dark"}>
                        <StaticBlock blockContent7={blockContent7}/>
                    </div>
                    <div className={"bg-white slider2 p-[20px] lg:px-[40px] lg:pt-[60px] lg:pb-[40px]"}>
                        <h1 className={"title_block ml-[28px]"}>Pilihan Editor</h1>
                        <Slider1 blockContent6={blockContent8}/>
                    </div>
                    <div className={"text-dark static_block2 bg-yellow"}>
                        <StaticBlock blockContent7={blockContent9}/>
                    </div>
                    <div className={"latest_articles bg-white p-[20px] lg:px-[40px] lg:pt-[60px] lg:pb-[40px]"}>
                        <h1 className={"title_block"}>Artikel Terbaru</h1>
                        <div className={"articles1"}>
                            <LatestArticles blockContent10={blockContent10}/>
                        </div>
                    </div>
                    <div className={"bg-dark slider3 p-[20px] lg:px-[40px] lg:pt-[60px] lg:pb-[40px]"}>
                        <h1 className={"title_block ml-[28px]"}>Industri Design</h1>
                        <Slider1 blockContent6={blockContent10}></Slider1>
                    </div>
                    <div
                        className={"last_block flex flex-wrap  bg-white p-[20px] lg:px-[40px] lg:pt-[60px] lg:pb-[40px]"}>
                        <div className={"latest_articles lg:w-2/3"}>
                            <h1 className={"title_block articles2_title pad20"}>Artikel Lainnya</h1>
                            <div className={"articles2 pad20"}>
                                <LatestArticles blockContent10={blockContent10}/>
                            </div>
                        </div>
                        <div className={"right_section lg:w-1/3"}>
                            <div className={"arsip"}>
                                <h1 className={"title_block pad20"}>ARSIP 2021</h1>
                                <Archives blockContent11={blockContent11}/>
                            </div>
                            <div className={""}>
                                <TestimonialsImg blockContent12={blockContent12}/>
                            </div>
                            <div className={"testimonials"}>
                                <h1 className={"title_block pad20"}>Testimonial</h1>
                                <Testimonials blockContent13={blockContent13}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`back-to-top ${showBackToTop ? "show" : ""}`}
                    onClick={scrollToTop}>
                    <svg width="119" height="36" viewBox="0 0 119 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="119" height="36" rx="5" fill="white"/>
                        <path d="M102.309 23V14.802" stroke="#1E1F57" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M98.5526 17.6713L102.167 14L105.782 17.6713" stroke="#1E1F57" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.364 17.716C18.812 17.796 19.192 18.032 19.504 18.424C19.816 18.816 19.972 19.26 19.972 19.756C19.972 20.18 19.86 20.564 19.636 20.908C19.42 21.244 19.104 21.512 18.688 21.712C18.272 21.904 17.788 22 17.236 22H13.9V13.66H17.08C17.648 13.66 18.136 13.756 18.544 13.948C18.952 14.14 19.26 14.4 19.468 14.728C19.676 15.048 19.78 15.408 19.78 15.808C19.78 16.288 19.652 16.688 19.396 17.008C19.14 17.328 18.796 17.564 18.364 17.716ZM15.268 17.164H16.96C17.408 17.164 17.756 17.064 18.004 16.864C18.26 16.656 18.388 16.36 18.388 15.976C18.388 15.6 18.26 15.308 18.004 15.1C17.756 14.884 17.408 14.776 16.96 14.776H15.268V17.164ZM17.116 20.884C17.58 20.884 17.944 20.772 18.208 20.548C18.472 20.324 18.604 20.012 18.604 19.612C18.604 19.204 18.464 18.88 18.184 18.64C17.904 18.4 17.532 18.28 17.068 18.28H15.268V20.884H17.116ZM21.2026 18.664C21.2026 18 21.3386 17.412 21.6106 16.9C21.8906 16.388 22.2666 15.992 22.7386 15.712C23.2186 15.424 23.7466 15.28 24.3226 15.28C24.8426 15.28 25.2946 15.384 25.6786 15.592C26.0706 15.792 26.3826 16.044 26.6146 16.348V15.388H27.9946V22H26.6146V21.016C26.3826 21.328 26.0666 21.588 25.6666 21.796C25.2666 22.004 24.8106 22.108 24.2986 22.108C23.7306 22.108 23.2106 21.964 22.7386 21.676C22.2666 21.38 21.8906 20.972 21.6106 20.452C21.3386 19.924 21.2026 19.328 21.2026 18.664ZM26.6146 18.688C26.6146 18.232 26.5186 17.836 26.3266 17.5C26.1426 17.164 25.8986 16.908 25.5946 16.732C25.2906 16.556 24.9626 16.468 24.6106 16.468C24.2586 16.468 23.9306 16.556 23.6266 16.732C23.3226 16.9 23.0746 17.152 22.8826 17.488C22.6986 17.816 22.6066 18.208 22.6066 18.664C22.6066 19.12 22.6986 19.52 22.8826 19.864C23.0746 20.208 23.3226 20.472 23.6266 20.656C23.9386 20.832 24.2666 20.92 24.6106 20.92C24.9626 20.92 25.2906 20.832 25.5946 20.656C25.8986 20.48 26.1426 20.224 26.3266 19.888C26.5186 19.544 26.6146 19.144 26.6146 18.688ZM29.5354 18.688C29.5354 18.008 29.6714 17.412 29.9434 16.9C30.2234 16.38 30.6074 15.98 31.0954 15.7C31.5834 15.42 32.1434 15.28 32.7754 15.28C33.5754 15.28 34.2354 15.472 34.7554 15.856C35.2834 16.232 35.6394 16.772 35.8234 17.476H34.3474C34.2274 17.148 34.0354 16.892 33.7714 16.708C33.5074 16.524 33.1754 16.432 32.7754 16.432C32.2154 16.432 31.7674 16.632 31.4314 17.032C31.1034 17.424 30.9394 17.976 30.9394 18.688C30.9394 19.4 31.1034 19.956 31.4314 20.356C31.7674 20.756 32.2154 20.956 32.7754 20.956C33.5674 20.956 34.0914 20.608 34.3474 19.912H35.8234C35.6314 20.584 35.2714 21.12 34.7434 21.52C34.2154 21.912 33.5594 22.108 32.7754 22.108C32.1434 22.108 31.5834 21.968 31.0954 21.688C30.6074 21.4 30.2234 21 29.9434 20.488C29.6714 19.968 29.5354 19.368 29.5354 18.688ZM40.0027 18.7L43.0507 22H41.2027L38.7547 19.156V22H37.3867V13.12H38.7547V18.28L41.1547 15.388H43.0507L40.0027 18.7ZM49.1444 16.504V20.164C49.1444 20.412 49.2004 20.592 49.3124 20.704C49.4324 20.808 49.6324 20.86 49.9124 20.86H50.7524V22H49.6724C49.0564 22 48.5844 21.856 48.2564 21.568C47.9284 21.28 47.7644 20.812 47.7644 20.164V16.504H46.9844V15.388H47.7644V13.744H49.1444V15.388H50.7524V16.504H49.1444ZM55.0813 22.108C54.4573 22.108 53.8933 21.968 53.3893 21.688C52.8853 21.4 52.4893 21 52.2013 20.488C51.9133 19.968 51.7693 19.368 51.7693 18.688C51.7693 18.016 51.9173 17.42 52.2133 16.9C52.5093 16.38 52.9133 15.98 53.4253 15.7C53.9373 15.42 54.5093 15.28 55.1413 15.28C55.7733 15.28 56.3453 15.42 56.8573 15.7C57.3693 15.98 57.7733 16.38 58.0693 16.9C58.3653 17.42 58.5133 18.016 58.5133 18.688C58.5133 19.36 58.3613 19.956 58.0573 20.476C57.7533 20.996 57.3373 21.4 56.8093 21.688C56.2893 21.968 55.7133 22.108 55.0813 22.108ZM55.0813 20.92C55.4333 20.92 55.7613 20.836 56.0653 20.668C56.3773 20.5 56.6293 20.248 56.8213 19.912C57.0133 19.576 57.1093 19.168 57.1093 18.688C57.1093 18.208 57.0173 17.804 56.8333 17.476C56.6493 17.14 56.4053 16.888 56.1013 16.72C55.7973 16.552 55.4693 16.468 55.1173 16.468C54.7653 16.468 54.4373 16.552 54.1333 16.72C53.8373 16.888 53.6013 17.14 53.4253 17.476C53.2493 17.804 53.1613 18.208 53.1613 18.688C53.1613 19.4 53.3413 19.952 53.7013 20.344C54.0693 20.728 54.5293 20.92 55.0813 20.92ZM68.7708 13.66V14.776H66.5508V22H65.1828V14.776H62.9508V13.66H68.7708ZM73.2242 22.108C72.6002 22.108 72.0362 21.968 71.5322 21.688C71.0282 21.4 70.6322 21 70.3442 20.488C70.0562 19.968 69.9122 19.368 69.9122 18.688C69.9122 18.016 70.0602 17.42 70.3562 16.9C70.6522 16.38 71.0562 15.98 71.5682 15.7C72.0802 15.42 72.6522 15.28 73.2842 15.28C73.9162 15.28 74.4882 15.42 75.0002 15.7C75.5122 15.98 75.9162 16.38 76.2122 16.9C76.5082 17.42 76.6562 18.016 76.6562 18.688C76.6562 19.36 76.5042 19.956 76.2002 20.476C75.8962 20.996 75.4802 21.4 74.9522 21.688C74.4322 21.968 73.8562 22.108 73.2242 22.108ZM73.2242 20.92C73.5762 20.92 73.9042 20.836 74.2082 20.668C74.5202 20.5 74.7722 20.248 74.9642 19.912C75.1562 19.576 75.2522 19.168 75.2522 18.688C75.2522 18.208 75.1602 17.804 74.9762 17.476C74.7922 17.14 74.5482 16.888 74.2442 16.72C73.9402 16.552 73.6122 16.468 73.2602 16.468C72.9082 16.468 72.5802 16.552 72.2762 16.72C71.9802 16.888 71.7442 17.14 71.5682 17.476C71.3922 17.804 71.3042 18.208 71.3042 18.688C71.3042 19.4 71.4842 19.952 71.8442 20.344C72.2122 20.728 72.6722 20.92 73.2242 20.92ZM79.5766 16.36C79.8086 16.056 80.1246 15.8 80.5246 15.592C80.9246 15.384 81.3766 15.28 81.8806 15.28C82.4566 15.28 82.9806 15.424 83.4526 15.712C83.9326 15.992 84.3086 16.388 84.5806 16.9C84.8526 17.412 84.9886 18 84.9886 18.664C84.9886 19.328 84.8526 19.924 84.5806 20.452C84.3086 20.972 83.9326 21.38 83.4526 21.676C82.9806 21.964 82.4566 22.108 81.8806 22.108C81.3766 22.108 80.9286 22.008 80.5366 21.808C80.1446 21.6 79.8246 21.344 79.5766 21.04V25.144H78.2086V15.388H79.5766V16.36ZM83.5966 18.664C83.5966 18.208 83.5006 17.816 83.3086 17.488C83.1246 17.152 82.8766 16.9 82.5646 16.732C82.2606 16.556 81.9326 16.468 81.5806 16.468C81.2366 16.468 80.9086 16.556 80.5966 16.732C80.2926 16.908 80.0446 17.164 79.8526 17.5C79.6686 17.836 79.5766 18.232 79.5766 18.688C79.5766 19.144 79.6686 19.544 79.8526 19.888C80.0446 20.224 80.2926 20.48 80.5966 20.656C80.9086 20.832 81.2366 20.92 81.5806 20.92C81.9326 20.92 82.2606 20.832 82.5646 20.656C82.8766 20.472 83.1246 20.208 83.3086 19.864C83.5006 19.52 83.5966 19.12 83.5966 18.664Z" fill="#1E1F57"/>
                    </svg>
                </div>
            </div>

        </>
    );
};

export default App;
