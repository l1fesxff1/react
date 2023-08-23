import React, { useState } from "react";
function stripTags(input) {
    return input.replace(/<[^>]+>/g, '');
}
const webUrl = 'http://91.107.217.207';
const LatestArticles = ({ blockContent10 }) => {
    return (
            <div className={"wrapper_articles"}>
                {blockContent10.map((item, index) => (
                    <div className={"article"} key={index}>
                        <div className={"article_img"}>
                            <img src={ webUrl + item.field_image_1}
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

export default LatestArticles;
