// Archives component to display a list of archives
const Archives = ({ blockContent11 }) => {
    return (
        <div className={"wrapper_archives pad20"}>
            {blockContent11.map((item, index) => (
                <div className={"archive"} key={index}>
                    <p className={"archive_field_date field_date"}>{item.field_date}</p>
                    <div className={"archive_title"} dangerouslySetInnerHTML={{__html: item.title}}/>
                </div>
            ))}
        </div>
    );
};


// Export the Archives component as the default export
export default Archives;
