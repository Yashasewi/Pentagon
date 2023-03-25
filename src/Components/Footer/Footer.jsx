function Footer() {
    const date = new Date();
    return (
        <div className="footer">
            <p>Copyright @{date.getFullYear}</p>
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
            <p>Kid</p>
            <p>Treand</p>
            <p>Contact Us</p>
            <p>FAQ</p>
        </div>
    );
}

export default Footer;
