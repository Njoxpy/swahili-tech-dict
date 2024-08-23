import "../index.css";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>
        We’d love to hear from you! Whether you have questions, feedback, or
        need assistance, our team is here to help.
      </p>
      <div className="contact">
        <address>
          <a href="mailto:support@techdict.com">support@techdict.com</a>
          <p>Phone: +255 623 456-7890</p>
          <address>
            TechDict Headquarters, 123 Innovation Drive, Tech City, TC 12345
          </address>
        </address>
      </div>
      <div className="social-media">
        <h4>Follow Us</h4>
        <a href="twitter">Swahili Tech Terms</a>
        <a href="linkedin">Swahili Tech Terms</a>
        <a href="facebook">Swahili Tech Terms</a>
      </div>
      <div className="form">
        <form action="">
          <label htmlFor="name" className="name">
            Name
          </label>
          <input type="text" name="" id="" placeholder="name" />

          <label htmlFor="email" className="email">
            E-Mail
          </label>
          <input type="email" name="" id="" placeholder="email" />
          <label htmlFor="message" className="message">
            Message
          </label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button className="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;