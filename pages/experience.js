import Head from "next/head";
import Navbar from "../components/Navbar";

const Experience = () => {
    return (
        <>
            <Head>
                <title>Experience</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="txt-wrapper-contact">
                        <h3 className="title">Selected Project</h3>

                    <div className="portofolio-wrapper">
                        <div className="portofolio-item">
                            <img src="/porto-1.jpg" className="portofolio-image"/>
                            <div className="portofolio-name">
                                <p className="portofolio-name-item">View Study Case</p>
                                <p className="portofolio-name-item">Visit Website</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Experience;
