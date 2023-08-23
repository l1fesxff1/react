import React from "react";
function stripTags(input) {
    return input.replace(/<[^>]+>/g, '');
}
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
                            src={`http://91.107.217.207/${blockContent7.field_image.uri.url}`}
                            alt={blockContent7.field_image.meta.alt}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default StaticBlock;
