<?php 
    $title='Product Design';
    $subTitle = 'Portfolio Single';
    $css = '<link rel="stylesheet" href="assets/fonts/webfonts/syne/stylesheet.css">'
?>
<?php include './partials/layouts/layoutTop.php' ?>

<!-- ...::: Portfolio Details Section Start :::... -->
<section class="section-portfolio">
    <!-- Section Space -->
    <div class="section-space">
        <!-- Section Container -->
        <div class="container">
            <!-- Portfolio Hero Image Block -->
            <div class="overflow-hidden rounded-[31px] border-[5px] border-black">
                <img src="assets/img/images/th-1/project-details-hero-img.jpg" alt="project-details-hero-img" class="h-auto w-full" />
            </div>
            <!-- Portfolio Hero Image Block -->

            <!-- Project Details Info List -->
            <ul class="mb-10 mt-10 flex flex-wrap justify-between gap-x-5 gap-y-2 md:mb-[60px] lg:mb-20">
                <li class="flex items-center gap-x-4">
                    <h4>Client:</h4>
                    <span>Alfado Company,UK</span>
                </li>
                <li class="flex items-center gap-x-4">
                    <h4>Date:</h4>
                    <span>June 16, 2024</span>
                </li>
                <li class="flex items-center gap-x-4">
                    <h4>Duration:</h4>
                    <span>Two Months</span>
                </li>
                <li class="flex items-center gap-x-4">
                    <h4>Cost:</h4>
                    <span>50k USD</span>
                </li>
            </ul>
            <!-- Project Details Info List -->

            <!-- Content Block -->
            <div class="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_minmax(0,440px)]">
                <!-- Content Left Block -->
                <div>
                    <!-- Section Block -->
                    <div class="section-block mb-10">
                        <h2 class="jos mb-6">
                            How we initiate and resolve the project
                            <span>
                                <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" class="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
                            </span>
                        </h2>

                        <p class="section-para">
                            The project began when a leading technology identified a
                            market need for an innovative and energy-efficient smart
                            home thermostat.
                        </p>
                    </div>
                    <!-- Section Block -->

                    <!-- Text List -->
                    <ul class="flex flex-col gap-y-8">
                        <li>
                            <h4 class="mb-4">Concept Development:</h4>
                            <p>
                                Based on the market research findings, the design team
                                began developing conceptual designs for the smart
                                thermostat. They brainstormed ideas, created mood
                                boards, and explored various design directions.
                            </p>
                        </li>
                        <li>
                            <h4 class="mb-4">Manufacturing and Production:</h4>
                            <p>
                                Once the design was finalized, the project transitioned
                                to the manufacturing phase. Materials, suppliers, and
                                production processes were carefully selected to ensure
                                quality and cost-effectiveness.
                            </p>
                        </li>
                        <li>
                            <h4 class="mb-4">Success and Impact:</h4>
                            <p>
                                The smart home thermostat quickly gained popularity and
                                was well-received in the market. The project was a
                                success, benefiting both the company and the
                                environment.
                            </p>
                        </li>
                    </ul>
                    <!-- Text List -->
                </div>
                <!-- Content Left Block -->
                <!-- Content Right Block -->
                <div class="mx-auto max-w-[450px] overflow-hidden rounded-[23px] border-[5px] border-black lg:mx-0 lg:max-w-full">
                    <img src="assets/img/images/th-1/portfolio-content-img.jpg" alt="portfolio-content-img" width="456" height="736" class="h-auto w-full object-cover lg:h-full" />
                </div>
                <!-- Content Right Block -->
            </div>
            <!-- Content Block -->
        </div>
        <!-- Section Container -->
    </div>
    <!-- Section Space -->
</section>
<!-- ...::: Portfolio Details Section End :::... -->

<!-- Horizontal Line -->
<div class="horizontal-line bg-[#E6E6E6]"></div>
<!-- Horizontal Line -->

<!-- ...::: Portfolio Section Start :::... -->
<section class="section-portfolio">
    <!-- Section Space -->
    <div class="section-space">
        <!-- Section Container -->
        <div class="container">
            <!-- Section Block -->
            <div class="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
                <h2 class="jos">
                    Explore our latest successful projects
                    <span>
                        <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" class="inline-block h-auto w-8 md:w-10 lg:w-[57px]" />
                    </span>
                </h2>
            </div>
            <!-- Section Block -->
        </div>

        <!-- Project Slider Area -->
        <div class="swiper projectSliderTwo lg:-mx-6">
            <div class="swiper-wrapper">
                <!-- Single Slide Item -->
                <div class="swiper-slide">
                    <div class="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
                        <!-- Thumbnail -->
                        <img src="assets/img/images/th-1/project-slide-img-1.jpg" alt="project-slide-img-1.jpg" width="613" height="390" class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                        <!-- Thumbnail -->

                        <!-- Content -->
                        <div class="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                            <div class="max-w-[400px] flex-1 text-colorButteryWhite">
                                <a href="portfolio-details.php" class="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl">App UI/UX Design</a>
                                <p class="line-clamp-2">
                                    Designing the UI/UXe for mobile apps and web
                                    applications to ensure usability & engagement.
                                </p>
                            </div>
                            <a href="portfolio-details.php" class="relative hidden items-start justify-center overflow-hidden sm:inline-flex">
                                <img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-buttery-white-arrow-right" width="34" height="28" class="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" />
                                <img src="assets/img/icons/icon-light-lime-arrow-right.svg" alt="light-lime-arrow-right" width="34" height="28" class="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            </a>
                        </div>
                        <!-- Content -->

                        <!-- Overlay -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"></div>
                        <!-- Overlay -->
                    </div>
                </div>
                <!-- Single Slide Item -->
                <!-- Single Slide Item -->
                <div class="swiper-slide">
                    <div class="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
                        <!-- Thumbnail -->
                        <img src="assets/img/images/th-1/project-slide-img-2.jpg" alt="project-slide-img-2.jpg" width="613" height="390" class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                        <!-- Thumbnail -->

                        <!-- Content -->
                        <div class="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                            <div class="max-w-[400px] flex-1 text-colorButteryWhite">
                                <a href="portfolio-details.php" class="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl">Packaging Design</a>
                                <p class="line-clamp-2">
                                    Creating packaging solutions for products that not
                                    only protect attract customers on store.
                                </p>
                            </div>
                            <a href="portfolio-details.php" class="relative hidden items-start justify-center overflow-hidden sm:inline-flex">
                                <img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-buttery-white-arrow-right" width="34" height="28" class="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" />
                                <img src="assets/img/icons/icon-light-lime-arrow-right.svg" alt="light-lime-arrow-right" width="34" height="28" class="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            </a>
                        </div>
                        <!-- Content -->

                        <!-- Overlay -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"></div>
                        <!-- Overlay -->
                    </div>
                </div>
                <!-- Single Slide Item -->
                <!-- Single Slide Item -->
                <div class="swiper-slide">
                    <div class="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
                        <!-- Thumbnail -->
                        <img src="assets/img/images/th-1/project-slide-img-3.jpg" alt="project-slide-img-3.jpg" width="613" height="390" class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                        <!-- Thumbnail -->

                        <!-- Content -->
                        <div class="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                            <div class="max-w-[400px] flex-1 text-colorButteryWhite">
                                <a href="portfolio-details.php" class="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl">Product Design</a>
                                <p class="line-clamp-2">
                                    Developing the look and feel of physical products,
                                    considering ergonomics, aesthetics, and functionality.
                                </p>
                            </div>
                            <a href="portfolio-details.php" class="relative hidden items-start justify-center overflow-hidden sm:inline-flex">
                                <img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-buttery-white-arrow-right" width="34" height="28" class="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" />
                                <img src="assets/img/icons/icon-light-lime-arrow-right.svg" alt="light-lime-arrow-right" width="34" height="28" class="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            </a>
                        </div>
                        <!-- Content -->

                        <!-- Overlay -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"></div>
                        <!-- Overlay -->
                    </div>
                </div>
                <!-- Single Slide Item -->
                <!-- Single Slide Item -->
                <div class="swiper-slide">
                    <div class="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
                        <!-- Thumbnail -->
                        <img src="assets/img/images/th-1/project-slide-img-1.jpg" alt="project-slide-img-1.jpg" width="613" height="390" class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                        <!-- Thumbnail -->

                        <!-- Content -->
                        <div class="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                            <div class="max-w-[400px] flex-1 text-colorButteryWhite">
                                <a href="portfolio-details.php" class="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl">App UI/UX Design</a>
                                <p class="line-clamp-2">
                                    Designing the UI/UXe for mobile apps and web
                                    applications to ensure usability & engagement.
                                </p>
                            </div>
                            <a href="portfolio-details.php" class="relative hidden items-start justify-center overflow-hidden sm:inline-flex">
                                <img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-buttery-white-arrow-right" width="34" height="28" class="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" />
                                <img src="assets/img/icons/icon-light-lime-arrow-right.svg" alt="light-lime-arrow-right" width="34" height="28" class="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            </a>
                        </div>
                        <!-- Content -->

                        <!-- Overlay -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"></div>
                        <!-- Overlay -->
                    </div>
                </div>
                <!-- Single Slide Item -->
                <!-- Single Slide Item -->
                <div class="swiper-slide">
                    <div class="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
                        <!-- Thumbnail -->
                        <img src="assets/img/images/th-1/project-slide-img-2.jpg" alt="project-slide-img-2.jpg" width="613" height="390" class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                        <!-- Thumbnail -->

                        <!-- Content -->
                        <div class="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                            <div class="max-w-[400px] flex-1 text-colorButteryWhite">
                                <a href="portfolio-details.php" class="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl">Packaging Design</a>
                                <p class="line-clamp-2">
                                    Creating packaging solutions for products that not
                                    only protect attract customers on store.
                                </p>
                            </div>
                            <a href="portfolio-details.php" class="relative hidden items-start justify-center overflow-hidden sm:inline-flex">
                                <img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-buttery-white-arrow-right" width="34" height="28" class="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" />
                                <img src="assets/img/icons/icon-light-lime-arrow-right.svg" alt="light-lime-arrow-right" width="34" height="28" class="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            </a>
                        </div>
                        <!-- Content -->

                        <!-- Overlay -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"></div>
                        <!-- Overlay -->
                    </div>
                </div>
                <!-- Single Slide Item -->
                <!-- Single Slide Item -->
                <div class="swiper-slide">
                    <div class="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
                        <!-- Thumbnail -->
                        <img src="assets/img/images/th-1/project-slide-img-3.jpg" alt="project-slide-img-3.jpg" width="613" height="390" class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                        <!-- Thumbnail -->

                        <!-- Content -->
                        <div class="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                            <div class="max-w-[400px] flex-1 text-colorButteryWhite">
                                <a href="portfolio-details.php" class="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl">Product Design</a>
                                <p class="line-clamp-2">
                                    Developing the look and feel of physical products,
                                    considering ergonomics, aesthetics, and functionality.
                                </p>
                            </div>
                            <a href="portfolio-details.php" class="relative hidden items-start justify-center overflow-hidden sm:inline-flex">
                                <img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-buttery-white-arrow-right" width="34" height="28" class="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" />
                                <img src="assets/img/icons/icon-light-lime-arrow-right.svg" alt="light-lime-arrow-right" width="34" height="28" class="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            </a>
                        </div>
                        <!-- Content -->

                        <!-- Overlay -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"></div>
                        <!-- Overlay -->
                    </div>
                </div>
                <!-- Single Slide Item -->
            </div>
        </div>
        <!-- Project Slider Area -->
        <!-- Section Container -->
    </div>
    <!-- Section Space -->
</section>
<!-- ...::: Portfolio Section End :::... -->
</main>
<!--  Main Wrapper End -->

<?php include './partials/layouts/layoutBottom.php' ?>