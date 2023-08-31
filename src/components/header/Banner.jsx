import PropTypes from 'prop-types';
// Function to strip HTML tags from the given input
function stripTags(input) {
    return input.replace(/<[^>]+>/g, '');
}

// Banner component that displays content from blockContent3
const Banner = ({ blockContent3 }) => {
    return (
        <div>
        {Object.keys(blockContent3).length > 0 && (
                <div className={"lg:px-[20px]"}>
                    <svg className={"theblog border-y border-white/10 pb-[15px] mb-[30px] lg:mb-[60px] lg:mt-[20px] mx-[0px]"} viewBox={"0 0 70 15"}>
                        <text fill={"white"} x="49.2%" y="60%" dominantBaseline="middle" textAnchor="middle" className={"text-white tracking-[-0.8px] font-bold uppercase text-center"}>
                            {stripTags(blockContent3.body.value)}
                        </text>
                    </svg>
                </div>
            )}
        </div>
    );
};
Banner.propTypes = {
    blockContent3: PropTypes.shape({
        body: PropTypes.shape({
            value: PropTypes.string.isRequired,
        }),
    }),
};
// Export the Banner component as the default export
export default Banner;
