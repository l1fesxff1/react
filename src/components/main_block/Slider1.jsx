// Import necessary components and styles
import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

// Function to remove HTML tags from a string
function stripTags(input) {
    return input.replace(/<[^>]+>/g, '');
}

// Get the backend URL from the environment variables
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Slider1 component that displays a slider of items
const Slider1 = ({ blockContent6 }) => {
    // Slider settings configuration
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
                            src={`${backendUrl}${item.field_image_1}`}
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

// Export the Slider1 component as the default export
export default Slider1;
