import Head from "next/head";
import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="txt-wrapper-contact">
                        <h3 className="title">Let's have a chat.</h3>
                        <p className="description">Have coool idea for collaboration ? Or maybe just want to say hello ?<br/> For information on available work or all other inquiries, please email :</p>
                        <p className="email">galih@google.com</p>
                        <div className="contact-image">
                            <img src="/linkedin-outline.svg"/>
                            <img src="/instagram.svg"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
