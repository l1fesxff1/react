// Import necessary components and hooks from React
import PropTypes from 'prop-types';
import {useState} from "react";

// Get the backend URL from the environment variables
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Header component that displays a navigation menu and social links
const Header = ({menuLinks, blockContent1, blockContent2}) => {

    // State to track the status of the burger menu
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

    // Function to toggle the burger menu and apply a class to the body for styling
    const handleBurgerMenuToggle = () => {
        setBurgerMenuOpen(!burgerMenuOpen);
        document.body.classList.toggle("menu-open");
    };
    return (
        <header className={"header"}>
            <div className="header_wrapper flex justify-between items-center ">
                <div className="header_left flex py-[30px] px-[10px] lg:px-[18px]">
                    {Object.keys(blockContent1).length > 0 && (
                        <div>
                            <img
                                className="logoimg w-10"
                                src={`${backendUrl}${blockContent1?.field_image.uri.url}`}
                                alt={blockContent1.field_image.meta.alt}
                            />
                        </div>
                    )}


                    <ul className="header_menu hidden lg:flex flex-row self-center">
                        {menuLinks.map((menuLink) => (
                            <li key={menuLink.id}>
                                <a
                                    className="text-white opacity-50 hover:opacity-100"
                                    href={menuLink.link.uri}
                                >
                                    {menuLink.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {Object.keys(blockContent2).length > 0 && (
                    <div className="block_social">
                        <ul className="menu_social_links hidden lg:flex  flex-row justify-end">
                            {blockContent2.field_social_links.map((socialLink) => (
                                <li className="flex align-top" key={socialLink.id}>
                                    <a className="sociallink" href={socialLink.field_link.uri}>
                                        <img
                                            className="social_link_icon opacity-50 hover:opacity-100"
                                            src={`${backendUrl}${socialLink.field_icon_svg.uri.url}`}
                                            alt={socialLink.field_icon_svg.meta.alt}
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <button className="burger-button lg:hidden" onClick={handleBurgerMenuToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd"
                              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                              clipRule="evenodd"/>
                    </svg>
                </button>



                {/* Mobile menu */}
                    <div className={`mobile-menu ${burgerMenuOpen ? "show" : ""}`}>
                        <div className={"closed-burger flex justify-end"}>
                            <button className="burger-button" onClick={handleBurgerMenuToggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <ul className="">
                            {menuLinks &&
                                menuLinks.map((menuLink) => (
                                        <li key={menuLink.id} className="menu_link">
                                            <a
                                                className="text-black before:content-['↳'] opacity-50 hover:opacity-100"
                                                href={menuLink.link.uri}
                                                onClick={() => setBurgerMenuOpen(false)}
                                            >
                                                {menuLink.title}
                                            </a>
                                        </li>
                                    ))
                            }
                            {blockContent2.field_social_links &&
                                blockContent2.field_social_links.map((socialLink) => (
                                        <li className="menu_link" key={socialLink.id}>
                                            <a href={socialLink.field_link.uri}
                                               className={"social_link before:content-['↳'] text-black opacity-50 hover:opacity-100"}>{socialLink.field_link.title}</a>
                                        </li>
                                    ))
                            }
                        </ul>
                    </div>
            </div>
        </header>
    );
};
Header.propTypes = {
    menuLinks: PropTypes.array.isRequired,
    blockContent1: PropTypes.shape({
        field_image: PropTypes.shape({
            uri: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }),
            meta: PropTypes.shape({
                alt: PropTypes.string.isRequired,
            }),
        }),
    }),
    blockContent2: PropTypes.shape({
        field_social_links: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                field_link: PropTypes.shape({
                    uri: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                }),
                field_icon_svg: PropTypes.shape({
                    uri: PropTypes.shape({
                        url: PropTypes.string.isRequired,
                    }),
                    meta: PropTypes.shape({
                        alt: PropTypes.string.isRequired,
                    }),
                }),
            })
        ),
    }),
};
// Export the Header component as the default export
export default Header;
