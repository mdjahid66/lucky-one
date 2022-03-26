import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <div className="QnA-container">
                <h1 className="faqs">Frequently Asked Questions</h1>

                <div className="QnA">
                    <h3>How React Works?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eum voluptatem qui blanditiis nemo reprehenderit asperiores atque repellat mollitia, porro molestiae assumenda, quo dolorum incidunt unde et laudantium beatae vero.</p>

                    <h3>Difference Between Props and UseState?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eum voluptatem qui blanditiis nemo reprehenderit asperiores atque repellat mollitia, porro molestiae assumenda, quo dolorum incidunt unde et laudantium beatae vero.</p>

                    <h3>How useState Works</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eum voluptatem qui blanditiis nemo reprehenderit asperiores atque repellat mollitia, porro molestiae assumenda, quo dolorum incidunt unde et laudantium beatae vero.</p>
                </div>

            <footer>
                <p className="creator">© Made By Mohammad Jahid</p>
            </footer>
            </div>
        </div>
    );
};

export default Footer;