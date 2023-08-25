// Get the backend URL from the environment variables using VITE_BACKEND_URL
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Function to fetch data from a given URL
export async function fetchData(url) {
    try {
        // Send a GET request to the provided URL
        const response = await fetch(url);

        // Check if the response status is not OK
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        // Parse the response body as JSON
        const data = await response.json();

        // Return the fetched data
        return data;
    } catch (error) {
        // Log and re-throw any errors that occur during the fetch process
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Object containing API URLs
export const ApiUrls = {
    menu: `${backendUrl}/jsonapi/menu_link_content/menu_link_content`,
    block1: `${backendUrl}/jsonapi/block_content/basic/d6ee7696-ee2d-47f1-a4ba-c6b6a2ac583c?resourceVersion=id%3A1&include=field_image`,
    block2: `${backendUrl}/jsonapi/block_content/social_links/da13c4ff-fea5-48e6-bedb-7ede57c8f29d?resourceVersion=id%3A2&include=field_social_links.field_icon_svg`,
    block3: `${backendUrl}/jsonapi/node/page`,
    block4: `${backendUrl}/blog-articles-first?_format=json`,
    block5: `${backendUrl}/blog-articles-second?_format=json`,
    block6: `${backendUrl}/design-tutorials-first?_format=json`,
    block7: `${backendUrl}/jsonapi/block_content/w_full_block/cf972415-4ba6-4d47-ae43-11798f4b8e2a?resourceVersion=id%3A3&include=field_image`,
    block8: `${backendUrl}/editors-choice?_format=json`,
    block9: `${backendUrl}/jsonapi/block_content/w_full_block/121c2905-1aad-4a35-b001-249f99f464e1?resourceVersion=id%3A4&include=field_image`,
    block10: `${backendUrl}/latest-articles?_format=json`,
    block11: `${backendUrl}/archives?_format=json`,
    block12: `${backendUrl}/jsonapi/block_content/basic/07440139-1de0-44ab-98d8-9a7b437245db?resourceVersion=id%3A5&include=field_image`,
    block13: `${backendUrl}/testimonials?_format=json`,
};