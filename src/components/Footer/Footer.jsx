import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <div className="footer-sec">
        <div className="sec-first">
          <h3>SHE SHARE</h3>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Foil on vs FOD</li>
          </ul>
        </div>
              <div className="sec-second">
                  <h3>Support</h3>
                  <ul>
                    <li>FAQs</li>
                    <li>Cancellation Policy</li>
                  </ul>
        </div>
        <div className="sec-third">
          <h3>Become a Host</h3>
          <ul>
            <li>Hosting Resources</li>
            <li>Hosting Responsibility</li>
            <li>Share a Room</li>
            <li>Pets</li>
          </ul>
        </div>
              <div className="sec-fourth">
                  <h3>Terms & Privacy</h3>
                  <ul>
                    <li>Terms & consitions</li>
                    <li>Privacy Policy</li>
                  </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer