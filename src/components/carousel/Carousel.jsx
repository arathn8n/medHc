import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../../../public/slides1.webp" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Experience Excellence in General Treatment at Med</h2>
                        <p>Your health is our priority. From routine check-ups to specialized treatments, our
                            experienced professionals are here to guide you every step of the way.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="../../../public/slides2.webp" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Cutting-Edge Technology for Better Health</h5>
                        <p>Your health is our priority. From routine check-ups to specialized treatments, our
                            experienced professionals are here to guide you every step of the way.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="../../../public/slides3.webp" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Trusted Care from Experienced Professionals</h5>
                        <p>Your health is our priority. From routine check-ups to specialized treatments, our
                            experienced professionals are here to guide you every step of the way.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel