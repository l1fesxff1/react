import PropTypes from 'prop-types';
// Get the backend URL from the environment variables
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// TestimonialsImg component to display a testimonial image
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
TestimonialsImg.propTypes = {
    blockContent12: PropTypes.shape({
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
// Export the TestimonialsImg component as the default export
export default TestimonialsImg;
