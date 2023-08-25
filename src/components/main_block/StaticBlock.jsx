// Import necessary components and hooks from React
import React from "react";

// Function to remove HTML tags from a string
function stripTags(input) {
    return input.replace(/<[^>]+>/g, '');
}

// Get the backend URL from the environment variables
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// StaticBlock component to display a static content block
const StaticBlock = ({blockContent7}) => {
    return (
        <div className={"wrapper_static_block"}>
            {Object.keys(blockContent7).length > 0 && (
                <div className={"static_block flex flex-col-reverse items-center lg:flex-row justify-center gap-5 lg:gap-20"}>
                    <div className={"static_block_left lg:w-1/2 flex flex-col justify-center"}>
                        <h1 className={"static_block_title"}>{blockContent7.field_title}</h1>
                        <p className={"static_block_text"}>{stripTags(blockContent7.body.processed)}</p>
                        <div className={"static_block_button bg-dark mb-[20px] hover:bg-white hover:text-dark transition-colors ease-in duration-500"}><a href={blockContent7.field_link.uri} >{blockContent7.field_link.title}</a></div>
                    </div>
                    <div className={"static_block_left lg:w-1/2"}>
                        <img
                            className="static_block_img"
                            src={`${backendUrl}${blockContent7.field_image.uri.url}`}
                            alt={blockContent7.field_image.meta.alt}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

// Export the StaticBlock component as the default export
export default StaticBlock;
