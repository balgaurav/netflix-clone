const footerLinks = [
  "Audio Description",
  "Investor Relations",
  "Help Center",
  "Media Center",
  "Jobs",
  "Privacy",
  "Terms"
];

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__eyebrow">Questions? Contact support@streambox.dev</p>
      <div className="footer__grid">
        {footerLinks.map((link) => (
          <a key={link} href="/" onClick={(event) => event.preventDefault()}>
            {link}
          </a>
        ))}
      </div>
      <p className="footer__meta">Netflix clone concept built with React + TypeScript.</p>
    </footer>
  );
};

export default Footer;
