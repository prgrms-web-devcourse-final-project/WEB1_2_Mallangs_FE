const Footer = () => {
    const thisYear = new Date().getFullYear();

    return (
        <footer id="foot-primary">
            <div>
                Copyright © {thisYear} MallangPlace Inc. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
