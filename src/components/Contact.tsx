import CLCA from "./icons/CLCA";
import CASEAL from "./icons/CASEAL";

function Contact() {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <div className="underline"/>
            <p>PO Box 1140    Homewood CA   96141    US</p>
            <div className="contact-info-container">
                <div>
                    <h3>Lasting Landscapes</h3>
                    <a href="mailto:lastinglandscapes@gmail.com">lastinglandscapes@gmail.com</a>
                    <p>Ph: (530) 546-2400</p>
                    <p>Cell: (530) 510-5161</p>
                </div>
                <div>
                    <h3>Iron Works</h3>
                    <a href="mailto:roachparker1@gmail.com">roachparker1@gmail.com</a>
                    <p>Ph: (530) 262-7626</p>
                </div>
            </div>
            <div className="licenses">
                <CLCA />
                <CASEAL />
            </div>
            <footer>©2026 by Lasting Landscapes</footer>
        </div>
    )
}

export default Contact;