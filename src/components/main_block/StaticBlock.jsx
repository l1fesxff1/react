import PropTypes from 'prop-types';
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
StaticBlock.propTypes = {
    blockContent7: PropTypes.shape({
        field_title: PropTypes.string.isRequired,
        body: PropTypes.shape({
            processed: PropTypes.string.isRequired,
        }),
        field_link: PropTypes.shape({
            uri: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }),
        field_image: PropTypes.shape({
            uri: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }),
            meta: PropTypes.shape({
                alt: PropTypes.string.isRequired,
            }),
        }),
    }),
};
// Export the StaticBlock component as the default export
export default StaticBlock;
