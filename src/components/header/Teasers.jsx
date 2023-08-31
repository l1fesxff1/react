// Get the backend URL from the environment variables
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Teasers component that displays important and other teasers
const Teasers = ({blockContent4, blockContent5}) => {
    return (
        <div className={"teasers gap-5 lg:gap-16 flex lg:flex-row flex-col lg:px-[20px]"}>
            <div className={"important_teaser lg:w-1/2"}>
                {Object.keys(blockContent4).length > 0 && (
                    <div className={"important_teaser_item"}>
                        <img className={""} src={`${backendUrl}${blockContent4.field_image_1}`}
                             alt={blockContent4.title_1}/>
                        <p className={"field_date field_date_teaser pt-[20px] pb-[10px]"}>{blockContent4.field_date}</p>
                        <h1 className={"text-white text-[32px] leading-[42px] opacity-80 mb-[16px] font-semibold tracking-[0px]"}
                            dangerouslySetInnerHTML={{__html: blockContent4.title}}/>
                        <div className={"text-white text-[18px] leading-[28px] opacity-50 mb-[16px] font-extralight"}
                             dangerouslySetInnerHTML={{__html: blockContent4.body}}/>
                    </div>
                )}
            </div>
            <div className={"other_teasers lg:w-1/2"}>
                {blockContent5.map((item, index) => (
                    <div className={"other_teaser_item flex w lg:flex-row flex-row-reverse justify-between mt-[32px] gap-5 first:mt-[0px] pb-[32px] "} key={index}>
                        <div className={"max-w-[248px] h-auto"}>
                            <img src={`${backendUrl}${item.field_image_1}`}
                                 alt={item.title_1} height={"152px"} className={"h-auto w-full"}/>
                        </div>
                        <div className={"other_teaser_item_right"}>
                            <p className={"field_date field_date_teaser pt-[4px] pb-[10px]"}>{item.field_date}</p>
                            <h1 dangerouslySetInnerHTML={{__html: item.title}}
                                className={"text-white lg:text-[25px] lg:leading-[35px] text-[18px] leading-[24px] font-semibold tracking-[0px] opacity-80"}>
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Export the Teasers component as the default export
export default Teasers;
