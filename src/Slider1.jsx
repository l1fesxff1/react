import React from "react";
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
function stripTags(input) {
    return input.replace(/<[^>]+>/g, '');
}
const Slider1 = ({ blockContent6 }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className={"first_slider"}>
            <Slider {...settings}>
                {blockContent6.map((item, index) => (
                    <div key={index} className={"first_slider_item p-[10px]"}>
                        <img className={"slider_image"}
                            src={`http://91.107.217.207/${item.field_image_1}`}
                            alt={stripTags(item.title_1)}
                        />
                        {item.field_date && (<p className={"slider_field_date field_date"}>{item.field_date}</p>)}
                        <p className={"slider_title "}>{stripTags(item.title_1)}</p>
                        {item.body && (<p className={"slider_body cut_text"}>{stripTags(item.body)}</p>)}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slider1;
