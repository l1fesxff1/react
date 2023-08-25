import React from "react";
function stripTags(input) {
    return input.replace(/<[^>]+>/g, '');
}
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const TestimonialsImg = ({blockContent12}) => {
    return (
        <div className={"wrapper_testimonials_img"}>
            {Object.keys(blockContent12).length > 0 && (
                <div className={"testimonials_img pad20"}>
                        <img
                            className=""
                            src={`${backendUrl}${blockContent12.field_image.uri.url}`}
                            alt={blockContent12.field_image.meta.alt}
                        />
                </div>
            )}
        </div>
    );
};

export default TestimonialsImg;
