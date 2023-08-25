import React, { useState } from "react";
function stripTags(input) {
    return input.replace(/<[^>]+>/g, '');
}
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const parseAttribute = (string, tag, attribute) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(string, 'text/html');
    const element = doc.querySelector(tag);
    return element ? element.getAttribute(attribute) : null;
};
const Testimonials = ({ blockContent13 }) => {
    return (
        <div className={"wrapper_testimonials pad20"}>
            {blockContent13.map((item, index) => (
                <div className={"flex testimonial"} key={index}>
                    <img className={"testimonials_avatar"} src={`${backendUrl}${parseAttribute(item.field_image, 'img', 'src')}`} alt={parseAttribute(item.field_image, `img`, `alt`)} />
                    <div className={"testimonials_left"}>
                        <p className={"testimonials_text"}>{stripTags(item.body)}</p>
                        <p className={"testimonials_user before:content-['@']"}>{item.field_remember}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
