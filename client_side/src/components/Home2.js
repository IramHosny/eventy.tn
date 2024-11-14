import React, { useEffect } from "react";
import './CSS/Home2.css';

const Home2 = () => {
    useEffect(() => {
        const getActiveSlide = () => document.querySelector(".carousel__slide.active");
        const getFirstSlide = () => document.querySelector(".carousel__slider").firstElementChild;
        const getLastSlide = () => document.querySelector(".carousel__slider").lastElementChild;

        const getSiblingSlide = (slide, direction) => 
            direction === "prev" ? slide.previousElementSibling : slide.nextElementSibling;

        const getNewActiveSlide = (key, activeSlide) => {
            const actions = {
                Home: getFirstSlide,
                End: getLastSlide,
                ArrowLeft: () => getSiblingSlide(activeSlide, "prev"),
                ArrowRight: () => getSiblingSlide(activeSlide, "next"),
            };
            return actions[key]?.() || null;
        };

        const updateScreen = (activeSlide) => {
            const carouselScreen = document.querySelector(".image-display .screen");
            const img = activeSlide.querySelector("img").cloneNode(true);
            carouselScreen.innerHTML = "";
            carouselScreen.appendChild(img);
        };

        const scrollToActiveSlide = (activeSlide) => {
            const carouselSlider = document.querySelector(".carousel__slider");
            const { offsetLeft, offsetWidth } = activeSlide;
            const { clientWidth } = carouselSlider;

            carouselSlider.scrollTo({
                left: offsetLeft - clientWidth / 2 + offsetWidth / 2,
                behavior: "smooth",
            });
        };

        const updateActiveSlideClass = (activeSlide) => {
            document.querySelectorAll(".carousel__slide.active").forEach(slide => slide.classList.remove("active"));
            activeSlide.classList.add("active");
        };

        const updateCarousel = (activeSlide) => {
            updateActiveSlideClass(activeSlide);
            updateScreen(activeSlide);
            scrollToActiveSlide(activeSlide);
            updateButtonStates(activeSlide);
        };

        const updateButtonStates = (activeSlide) => {
            const prevButton = document.querySelector(".carousel__btn.prev");
            const nextButton = document.querySelector(".carousel__btn.next");

            prevButton.disabled = !getSiblingSlide(activeSlide, "prev");
            nextButton.disabled = !getSiblingSlide(activeSlide, "next");
        };

        const handleKeydown = (e) => {
            if (!e.target.closest(".carousel__slider")) return;
            const activeSlide = getActiveSlide();
            const newActiveSlide = getNewActiveSlide(e.key, activeSlide);

            if (newActiveSlide) {
                e.preventDefault();
                updateCarousel(newActiveSlide);
            }
        };

        const handleButtonClick = (e) => {
            const activeSlide = getActiveSlide();
            const newActiveSlide = getSiblingSlide(activeSlide, e.currentTarget.classList.contains("prev") ? "prev" : "next");

            if (newActiveSlide) {
                updateCarousel(newActiveSlide);
            }
        };

        const handleCarouselClick = (e) => {
            const clickedSlide = e.target.closest(".carousel__slide");
            if (clickedSlide) {
                updateCarousel(clickedSlide);
            }
        };

        const initCarousel = () => {
            const carouselSlider = document.querySelector(".carousel__slider");
            const prevButton = document.querySelector(".carousel__btn.prev");
            const nextButton = document.querySelector(".carousel__btn.next");

            updateCarousel(getFirstSlide());

            document.addEventListener("keydown", handleKeydown);
            prevButton.addEventListener("click", handleButtonClick);
            nextButton.addEventListener("click", handleButtonClick);
            carouselSlider.addEventListener("click", handleCarouselClick);
        };

        initCarousel();

        // Clean up event listeners when the component unmounts
        return () => {
            document.removeEventListener("keydown", handleKeydown);
            document.querySelector(".carousel__btn.prev")?.removeEventListener("click", handleButtonClick);
            document.querySelector(".carousel__btn.next")?.removeEventListener("click", handleButtonClick);
            document.querySelector(".carousel__slider")?.removeEventListener("click", handleCarouselClick);
        };
    }, []);

    return (
        
        <div className="image-thumbnail-carousel">
            <section className="image-display">
                <div className="screen"></div>
            </section>
            <section className="thumbnail-carousel">
                <button type="button" className="carousel__btn prev" aria-label="Previous slide">
                    <svg width="16" height="16" fill="currentColor" className="arrow-icon arrow-left-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg>
                </button>
                <ul className="carousel__slider">
                    <li className="carousel__slide">
                        <div className="thumbnail">
                            <img loading="lazy" src="https://tapisrouge.tn/wp-content/uploads/2021/06/DSC05224-21-770x550.jpg" alt="" />
                        </div>
                    </li>
                    <li className="carousel__slide">
                        <div className="thumbnail">
                            <img loading="lazy" src="https://www.mariageatoutprix.com/wp-content/uploads/2021/06/mariage-en-plain-air-tunis-espace-mariage-2021-mariagetunisie.jpg" alt="" />
                        </div>
                    </li>
                    <li className="carousel__slide">
                        <div className="thumbnail">
                            <img loading="lazy" src="https://www.mariageatoutprix.com/wp-content/uploads/2020/06/espace-plein-air-mariage-sousse-vuesur-mer.jpg" alt="" />
                        </div>
                    </li>
                    <li className="carousel__slide">
                        <div className="thumbnail">
                            <img loading="lazy" src="https://www.mariageatoutprix.com/wp-content/uploads/2020/06/espace-mariage-pleinair-tunisie.jpg" alt="" />
                        </div>
                    </li>
                    <li className="carousel__slide">
                        <div className="thumbnail">
                            <img loading="lazy" src="https://www.lamarieeauxpiedsnus.com/wp-content/uploads/mariage-desert-sahara-celinechhuon-lamarieeauxpiedsnus-384-810x608.jpg" alt="" />
                        </div>
                    </li>
                    <li className="carousel__slide">
                        <div className="thumbnail">
                            <img loading="lazy" src="https://www.mariageatoutprix.com/wp-content/uploads/2023/05/twins-by-fatma-kairouan-patisserie-sucr%C3%A9-sal%C3%A9-macaron-piece-mont%C3%A9e-gateau-maiage-fete-outia-meilleurs-adresses-sur-toute-la-tunisie-8-1.jpg" alt="" />
                        </div>
                    </li>
                    <li className="carousel__slide">
                        <div className="thumbnail">
                            <img loading="lazy" src="https://www.mariageatoutprix.com/wp-content/uploads/2020/06/espace-plein-air-monastir-mariage.jpg" alt="" />
                        </div>
                    </li>
                    <li className="carousel__slide">
                        <div className="thumbnail">
                            <img loading="lazy" src="https://www.mariageatoutprix.com/wp-content/uploads/2019/10/el-mouradi-garden-grill.jpg" alt="" />
                        </div>
                    </li>
                    <li className="carousel__slide">
                        <div className="thumbnail">
                            <img loading="lazy" src="https://www.gourmandise.com.tn/img/cms/evenement02.jpg" alt="" />
                        </div>
                    </li>
                </ul>
                <button type="button" className="carousel__btn next" aria-label="Next slide">
                    <svg width="16" height="16" fill="currentColor" className="arrow-icon arrow-right-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg>
                </button>
            </section>
        </div>
    );
};

export default Home2;
