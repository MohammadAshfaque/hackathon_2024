import React from "react";

const Footer = () => {
    // Lists of products, contact information, and useful links
    const productList = ["Market", "ERC20 Token", "Donations"];
    const contactList = ["fund@crowd.com", "info@example.com", "Contact us"];
    const usefulLink = ["Home", "About Us", "Company Bio"];

    // Footer component
    return (
        <footer className="text-center text-white backgroundMain lg:text-left">
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Column for company information */}
                    <div className="">
                        <h6 className="mb-4 items-center justify-center font-semibold uppercase md:justify-start">
                            Crypto Maniac
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your
                            footer content. Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit.
                        </p>
                    </div>

                    {/* Column for products*/}
                    <div className="">
                        <h6 className="mb-4 items-center justify-center font-semibold uppercase md:justify-start">
                            Products
                        </h6>
                        {productList.map((el, i) => (
                            <p className="mb-4" key={i}>
                                <a href="#!">{el}</a>
                            </p>
                        ))}
                    </div>

                    {/* Column for useful links */}
                    <div className="">
                        <h6 className="mb-4 items-center justify-center font-semibold uppercase md:justify-start">
                            Useful Links
                        </h6>

                        {usefulLink.map((el, i) => (
                            <p className="mb-4" key={i + 1}>
                                <a href="#!">{el}</a>
                            </p>
                        ))}
                    </div>

                    {/* Column for contact information */}
                    <div className="">
                        <h6 className="mb-4 items-center justify-center font-semibold uppercase md:justify-start">
                            Contact
                        </h6>
                        {contactList.map((el, i) => (
                            <p className="mb-4" key={i + 1}>
                                <a href="#!">{el}</a>
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright information */}
            <div className="backgroundMain p-6 text-center">
                <span>&copy; 2023 Copyright:</span>
                <a
                    className="font-semibold"
                    href="https://tailwind-elements.com"
                >
                    Crypto Maniac
                </a>
            </div>
        </footer>
    );
};

export default Footer;
