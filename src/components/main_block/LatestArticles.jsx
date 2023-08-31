
// Function to remove HTML tags from a string
function stripTags(input) {
    return input.replace(/<[^>]+>/g, '');
}

// Get the backend URL from the environment variables
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// LatestArticles component that displays a list of articles
const LatestArticles = ({ blockContent10 }) => {
    return (
            <div className={"wrapper_articles"}>
                {blockContent10.map((item, index) => (
                    <div className={"article"} key={index}>
                        <div className={"article_img"}>
                            <img src={`${backendUrl}${item.field_image_1}`}
                                 alt={stripTags(item.title_1)} className={""}/>
                        </div>
                        <div className={"article_body"}>
                            {item.field_date && (<p className={"article_date field_date"}>{item.field_date}</p>)}
                            <h1 dangerouslySetInnerHTML={{__html: item.title}}
                                className={"article_title"}>
                            </h1>
                            {item.body && (<p className={"article_text cut_text small_synopsis"}>{stripTags(item.body)}</p>)}
                        </div>
                    </div>
                ))}
            </div>
    );
};

// Export the LatestArticles component as the default export
export default LatestArticles;
