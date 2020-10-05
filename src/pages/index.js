import React from "react"
import Img from 'gatsby-image';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import $ from 'jquery';
import {navigate} from '@reach/router';
import Svg from '../assets/nav-icon.svg';

/*global $, jQuery, alert*/
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    $(document).ready(function () {

        // ========================================================================= //
        //  //SMOOTH SCROLL
        // ========================================================================= //


        $(document).on("scroll", onScroll);

        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
                if ($(window).width() < 768) {
                    $('.nav-menu').slideUp();
                }
            });

            $(this).addClass('active');

            let target = this.hash,
                menu = target;

            target = $(target);
            $('html, body').stop().animate({
                'scrollTop': target.offset().top - 80
            }, 500, 'swing', function () {
                window.location.hash = target.selector;
                $(document).on("scroll", onScroll);
            });
        });


        function onScroll(event) {
            if ($('.home').length) {
                let scrollPos = $(document).scrollTop();
                $('nav ul li a').each(function () {
                    let currLink = $(this);
                    let refElement = $(currLink.attr("href"));
                });
            }
        }

        // ========================================================================= //
        //  //NAVBAR SHOW - HIDE
        // ========================================================================= //


        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if (scroll > 200) {
                $("#main-nav, #main-nav-subpage").slideDown(700);
                $("#main-nav-subpage").removeClass('subpage-nav');
            } else {
                $("#main-nav").slideUp(700);
                $("#main-nav-subpage").hide();
                $("#main-nav-subpage").addClass('subpage-nav');
            }
        });

        // ========================================================================= //
        //  // RESPONSIVE MENU
        // ========================================================================= //

        $('.nav-icon').on('click', function (e) {
            $('.nav-menu').slideToggle();
        });

    });
}

export default function Home() {
    const data = useStaticQuery(graphql`
        query {
            me: file(relativePath: { regex: "/standing/"}) {
                sharp: childImageSharp {
                    fluid(maxWidth: 800, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            bkg: file(relativePath: { regex: "/bg_main_dark/"}) {
                sharp: childImageSharp {
                    fluid(maxWidth: 2400, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            patient : file(relativePath: { regex: "/patient/" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            employees : file(relativePath: { regex: "/employees/" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            chair : file(relativePath: { regex: "/chair/" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            office : file(relativePath: { regex: "/office/" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    const handleClick = async (link) => {
        await navigate(link);
        $('.nav-menu').slideToggle();
    }

    return (
        <div>
            <nav id="main-nav">
                <div className="row">
                    <div className="container d-flex align-items-center justify-content-between">
                        <div className="">
                            <a href="/" className="h5 font-weight-bold text-uppercase">
                                DAKOTA ARGYLE
                            </a>
                        </div>

                        <div className="nav-icon d-block d-lg-none">
                            <Svg />
                        </div>
                    </div>
                    <ul className="nav-menu list-unstyled">
                        <li>
                            <a onClick={() => handleClick("#about")} className="smoothScroll">
                                About
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleClick("#philosophies")} className="smoothScroll">
                                Philosophies
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleClick("#ce")} className="smoothScroll">
                                Education
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleClick("#skills")} className="smoothScroll">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleClick("#contact")} className="smoothScroll">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <BackgroundImage
                fluid={data.bkg.sharp.fluid}
                style={{
                    width: '100%',
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    overflowX: 'hidden'
                }}
            >
                <div id="header" className="home">
                    <div className="container">
                        <div className="header-content">
                            <h1>Hi, I'm Dakota Argyle</h1>
                            <p>
                                University of Utah School of Dentistry
                                <br/>
                                Class of 2021
                            </p>
                        </div>
                    </div>
                </div>
            </BackgroundImage>

            <div className="text-center py-3">
                <img src="https://img.icons8.com/ios/32/cfcfcf/line--v1.png" style={{transform: "rotate(45deg)"}}/>
                <img src="https://img.icons8.com/material-sharp/24/cfcfcf/chevron-down.png" className="mx-2"/>
                <img src="https://img.icons8.com/ios/32/cfcfcf/line--v1.png" style={{transform: "rotate(45deg)"}}/>
            </div>

            <div id="about" className="py-5">
                <div className="container mt-lg-5">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="div-img-bg">
                                <div className="about-img">
                                    <Img fluid={data.me.sharp.fluid} alt="Dakota Argyle" className="img-responsive"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-descr">
                                <p className="p-heading">
                                    I’m looking to purchase a dental practice in the greater
                                    Dallas area.
                                </p>
                                <p className="separator">
                                    I am currently finishing my final year at the University of
                                    Utah School of Dentistry. I am happy to say that I enjoy my
                                    career. I love that dentistry gives me the opportunity to give
                                    people something valuable that they can’t give themselves. I
                                    love that dentistry is a continuously improving field. It is a
                                    field where I can always learn new skills and be able to offer
                                    my patients better treatments.
                                </p>
                                <p className="separator">
                                    Dentistry is a rare field where you are both a clinical
                                    provider as well as an employer, and I do not take that dual
                                    role for granted. I have put in a great deal of time, money
                                    and effort to develop my leadership skills and my business
                                    competency. I have done this because I realize that as a small
                                    business owner, I know that it is not just my own living that
                                    I am responsible for, but the living of my employees as well
                                    as their families. I take this responsibility seriously.
                                </p>
                                <p className="separator">
                                    Feel free to scroll and learn a little about me and my
                                    educational background, as well as my practice philosophies.
                                    If you are considering selling your practice in the next year,
                                    I’d love to talk! I can be reached over the phone at{" "}
                                    <a href="tel:9162243744">916-224-3744</a> (talk or text) or
                                    over email at{" "}
                                    <a href="mailto:dakota.argyle@gmail.com">
                                        dakota.argyle@gmail.com
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="philosophies" className="bg-white py-5">
                <div className="container my-lg-5">
                    <h2 className="text-center text-uppercase">PRACTICE PHILOSOPHIES</h2>
                    <div className="row justify-content-around my-3 my-md-5">
                        <div className="col-12 col-lg-4 p-3">
                            <div className="bg-light rounded p-3">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src="https://img.icons8.com/ios/40/898989/call-in-bed.png"/>
                                    <h2 className="font-weight-bold h4 text-uppercase ml-3">
                                        PATIENT VALUES
                                    </h2>
                                </div>
                                <p className="separator">
                                    I believe that patients deserve both the respect to have all
                                    reasonable treatment options explained to them as well as the
                                    autonomy to choose the best treatment option for their
                                    individual situation. While I will always give my
                                    recommendation on what I believe is best for him or her, I
                                    will always leave the final decision up to the patient.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 p-3">
                            <div className="bg-light rounded p-3">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src="https://img.icons8.com/ios/40/898989/conference.png"/>
                                    <h2 className="font-weight-bold h4 text-uppercase ml-3">
                                        DENTAL TEAM VALUES
                                    </h2>
                                </div>
                                <p className="separator">
                                    The strength of the team is the sum of its parts. I believe
                                    that every member of the dental team deserves to feel valued.
                                    Suggestions on practice improvement are always welcome,
                                    regardless of the source. In addition, when grievances are
                                    experienced, the doctor should always be approachable to
                                    listen to concerns. For this to truly work, a relationship of
                                    trust must be established between the doctor and the staff
                                    member early on. This level of trust can only come from the
                                    doctor displaying a consistent type of character for a long
                                    duration of time.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 p-3">
                            <div className="bg-light rounded p-3">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src="https://img.icons8.com/ios/40/898989/clinic.png"/>
                                    <h2 className="font-weight-bold h4 text-uppercase ml-3">
                                        CLINICAL PHILOSOPHY
                                    </h2>
                                </div>
                                <p className="separator">
                                    If a clinical decision to treat or not to treat is close, I
                                    choose to watch the lesion. If a lesion can be treated without
                                    surgical intervention, that avenue is explored first. I
                                    believe that in the long run, avoiding overtreatment serves to
                                    prolong the lifespan of the dentition. This also serves to
                                    help patients build trust in the dental practice and know that
                                    when treatment is prescribed, it is something that they can
                                    trust.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="portfolio" className="text-center bg-light paddsection py-5">
                <div className="container my-lg-5">
                    <Img fluid={data.office.sharp.fluid} alt="office" className="img-responsive w-100"/>
                </div>
            </div>

            <div id="ce" className="paddsection bg-dark py-5">
                <div className="my-lg-5">
                    <h2 className="text-center text-white text-uppercase">
                        continuing education
                    </h2>
                    <p className="text-white text-center lead">CE Courses</p>
                    <div className="container">
                        <div className="row my-3 my-md-5 align-items-center">
                            <div className="col-1">
                                <div className="ce-row-icon">
                                    <svg
                                        preserveAspectRatio="xMidYMid meet"
                                        data-bbox="13 0 173.814 199.9"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="13 0 173.814 199.9"
                                        role="img"
                                        className="w-100"
                                    >
                                        <g>
                                            <path
                                                d="M182.6 0H17.4C15 0 13 1.9 13 4.3v191.3c0 2.4 1.9 4.3 4.3 4.3h165.2c2.4 0 4.3-1.9 4.3-4.3V4.3C187 1.9 185 0 182.6 0zm-4.3 191.3H21.7V8.7h156.5v182.6z"></path>
                                            <path
                                                d="M52.2 147.8h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M52.2 169.6h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M52.2 125.9h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M72.5 75.1c0 11.2 12.1 20 27.5 20s27.5-8.8 27.5-20c0-7.1-4.9-16.2-11.5-22.2.8-2.6 1.3-5.2 1.3-7.5 0-9.5-7.7-17.2-17.2-17.2S82.8 36 82.8 45.5c0 2.3.4 4.9 1.3 7.4-6.7 6-11.6 15.2-11.6 22.2zM100 37c4.7 0 8.5 3.8 8.5 8.5 0 5.9-5 14.4-8.5 14.4s-8.5-8.5-8.5-14.4c0-4.7 3.8-8.5 8.5-8.5zm0 31.6c4.8 0 8.9-3.1 11.9-7.4 4.2 4.5 6.9 10.3 6.9 14 0 6.1-8.6 11.3-18.8 11.3-10.2 0-18.8-5.2-18.8-11.3 0-3.6 2.7-9.5 6.9-14 3 4.3 7.1 7.4 11.9 7.4z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2">
                                <p className="text-white mb-0">February 2020</p>
                                <p className="text-uppercase text-info-light h4 mt-0 text-serif">
                                    HANS C. REINEMER, DDS MS
                                </p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-9">
                                <p className="text-white">
                                    A two hour CE course led by Dr. Reinemer, a practicing pediatric
                                    dentist as well as the head of pediatric dentistry for the
                                    University of Utah School of Dentistry. Dr. Reinemer shared new
                                    research in pediatric dentistry as well practical applications
                                    for clinicians to take from the new research.
                                </p>
                            </div>
                        </div>
                        <div className="row my-3 my-md-5 align-items-center">
                            <div className="col-1">
                                <div className="ce-row-icon">
                                    <svg
                                        preserveAspectRatio="xMidYMid meet"
                                        data-bbox="13 0 173.814 199.9"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="13 0 173.814 199.9"
                                        role="img"
                                        className="w-100"
                                    >
                                        <g>
                                            <path
                                                d="M182.6 0H17.4C15 0 13 1.9 13 4.3v191.3c0 2.4 1.9 4.3 4.3 4.3h165.2c2.4 0 4.3-1.9 4.3-4.3V4.3C187 1.9 185 0 182.6 0zm-4.3 191.3H21.7V8.7h156.5v182.6z"></path>
                                            <path
                                                d="M52.2 147.8h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M52.2 169.6h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M52.2 125.9h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M72.5 75.1c0 11.2 12.1 20 27.5 20s27.5-8.8 27.5-20c0-7.1-4.9-16.2-11.5-22.2.8-2.6 1.3-5.2 1.3-7.5 0-9.5-7.7-17.2-17.2-17.2S82.8 36 82.8 45.5c0 2.3.4 4.9 1.3 7.4-6.7 6-11.6 15.2-11.6 22.2zM100 37c4.7 0 8.5 3.8 8.5 8.5 0 5.9-5 14.4-8.5 14.4s-8.5-8.5-8.5-14.4c0-4.7 3.8-8.5 8.5-8.5zm0 31.6c4.8 0 8.9-3.1 11.9-7.4 4.2 4.5 6.9 10.3 6.9 14 0 6.1-8.6 11.3-18.8 11.3-10.2 0-18.8-5.2-18.8-11.3 0-3.6 2.7-9.5 6.9-14 3 4.3 7.1 7.4 11.9 7.4z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2">
                                <p className="text-white mb-0">November 2019</p>
                                <p className="text-uppercase text-info-light h4 mt-0 text-serif">
                                    RYAN EDMUNDS, DDS MS
                                </p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-9">
                                <p className="text-white">
                                    A two hour CE course where Dr. Edmunds, a periodontist,
                                    discussed several tips and tricks for effective placement of
                                    dental implants. He showed several before and after images of
                                    clinical cases that he participated in.
                                </p>
                            </div>
                        </div>
                        <div className="row my-3 my-md-5 align-items-center">
                            <div className="col-1">
                                <div className="ce-row-icon">
                                    <svg
                                        preserveAspectRatio="xMidYMid meet"
                                        data-bbox="13 0 173.814 199.9"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="13 0 173.814 199.9"
                                        role="img"
                                        className="w-100"
                                    >
                                        <g>
                                            <path
                                                d="M182.6 0H17.4C15 0 13 1.9 13 4.3v191.3c0 2.4 1.9 4.3 4.3 4.3h165.2c2.4 0 4.3-1.9 4.3-4.3V4.3C187 1.9 185 0 182.6 0zm-4.3 191.3H21.7V8.7h156.5v182.6z"></path>
                                            <path
                                                d="M52.2 147.8h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M52.2 169.6h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M52.2 125.9h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M72.5 75.1c0 11.2 12.1 20 27.5 20s27.5-8.8 27.5-20c0-7.1-4.9-16.2-11.5-22.2.8-2.6 1.3-5.2 1.3-7.5 0-9.5-7.7-17.2-17.2-17.2S82.8 36 82.8 45.5c0 2.3.4 4.9 1.3 7.4-6.7 6-11.6 15.2-11.6 22.2zM100 37c4.7 0 8.5 3.8 8.5 8.5 0 5.9-5 14.4-8.5 14.4s-8.5-8.5-8.5-14.4c0-4.7 3.8-8.5 8.5-8.5zm0 31.6c4.8 0 8.9-3.1 11.9-7.4 4.2 4.5 6.9 10.3 6.9 14 0 6.1-8.6 11.3-18.8 11.3-10.2 0-18.8-5.2-18.8-11.3 0-3.6 2.7-9.5 6.9-14 3 4.3 7.1 7.4 11.9 7.4z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2">
                                <p className="text-white mb-0">October 2019</p>
                                <p className="text-uppercase text-info-light h4 mt-0 text-serif">
                                    2ND ANNUAL LYNN G. POWELL MEMORIAL LECTURE
                                </p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-9">
                                <p className="text-white">
                                    An eight hour lecture by Gordon Christensen on the newest and
                                    latest dental materials. The presentation included everything
                                    from discussion of the latest composite materials to a
                                    discussion of the costs and benefits of lasers in dentistry.
                                </p>
                            </div>
                        </div>
                        <div className="row my-3 my-md-5 align-items-center">
                            <div className="col-1">
                                <div className="ce-row-icon">
                                    <svg
                                        preserveAspectRatio="xMidYMid meet"
                                        data-bbox="13 0 173.814 199.9"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="13 0 173.814 199.9"
                                        role="img"
                                        className="w-100"
                                    >
                                        <g>
                                            <path
                                                d="M182.6 0H17.4C15 0 13 1.9 13 4.3v191.3c0 2.4 1.9 4.3 4.3 4.3h165.2c2.4 0 4.3-1.9 4.3-4.3V4.3C187 1.9 185 0 182.6 0zm-4.3 191.3H21.7V8.7h156.5v182.6z"></path>
                                            <path
                                                d="M52.2 147.8h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M52.2 169.6h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M52.2 125.9h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M72.5 75.1c0 11.2 12.1 20 27.5 20s27.5-8.8 27.5-20c0-7.1-4.9-16.2-11.5-22.2.8-2.6 1.3-5.2 1.3-7.5 0-9.5-7.7-17.2-17.2-17.2S82.8 36 82.8 45.5c0 2.3.4 4.9 1.3 7.4-6.7 6-11.6 15.2-11.6 22.2zM100 37c4.7 0 8.5 3.8 8.5 8.5 0 5.9-5 14.4-8.5 14.4s-8.5-8.5-8.5-14.4c0-4.7 3.8-8.5 8.5-8.5zm0 31.6c4.8 0 8.9-3.1 11.9-7.4 4.2 4.5 6.9 10.3 6.9 14 0 6.1-8.6 11.3-18.8 11.3-10.2 0-18.8-5.2-18.8-11.3 0-3.6 2.7-9.5 6.9-14 3 4.3 7.1 7.4 11.9 7.4z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2">
                                <p className="text-white mb-0">October 2019</p>
                                <p className="text-uppercase text-info-light h4 mt-0 text-serif">
                                    TOTAL PATIENT SERVICE INSTITUTE: TOTAL IMMERSION EXPERIENCE
                                </p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-9">
                                <p className="text-white">
                                    A two day seminar led by Steven Anderson that was designed to
                                    improve communication with patients. Steve explored topics such
                                    as increasing case acceptance and improving the overall patient
                                    experience by improving doctor and patient communication and
                                    understanding.
                                </p>
                            </div>
                        </div>
                        <div className="row my-3 my-md-5 align-items-center">
                            <div className="col-1">
                                <div className="ce-row-icon">
                                    <svg
                                        preserveAspectRatio="xMidYMid meet"
                                        data-bbox="13 0 173.814 199.9"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="13 0 173.814 199.9"
                                        role="img"
                                        className="w-100"
                                    >
                                        <g>
                                            <path
                                                d="M182.6 0H17.4C15 0 13 1.9 13 4.3v191.3c0 2.4 1.9 4.3 4.3 4.3h165.2c2.4 0 4.3-1.9 4.3-4.3V4.3C187 1.9 185 0 182.6 0zm-4.3 191.3H21.7V8.7h156.5v182.6z"></path>
                                            <path
                                                d="M52.2 147.8h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M52.2 169.6h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M52.2 125.9h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M72.5 75.1c0 11.2 12.1 20 27.5 20s27.5-8.8 27.5-20c0-7.1-4.9-16.2-11.5-22.2.8-2.6 1.3-5.2 1.3-7.5 0-9.5-7.7-17.2-17.2-17.2S82.8 36 82.8 45.5c0 2.3.4 4.9 1.3 7.4-6.7 6-11.6 15.2-11.6 22.2zM100 37c4.7 0 8.5 3.8 8.5 8.5 0 5.9-5 14.4-8.5 14.4s-8.5-8.5-8.5-14.4c0-4.7 3.8-8.5 8.5-8.5zm0 31.6c4.8 0 8.9-3.1 11.9-7.4 4.2 4.5 6.9 10.3 6.9 14 0 6.1-8.6 11.3-18.8 11.3-10.2 0-18.8-5.2-18.8-11.3 0-3.6 2.7-9.5 6.9-14 3 4.3 7.1 7.4 11.9 7.4z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2">
                                <p className="text-white mb-0">April 2019</p>
                                <p className="text-uppercase text-info-light h4 mt-0 text-serif">
                                    BREAKAWAY PRACTICE: BUSINESS MASTERS
                                </p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-9">
                                <p className="text-white">
                                    A two day seminar conducted by Dr. Scott Leune exploring
                                    different ways to improve dental practices. The course included
                                    information including marketing, patient communication,
                                    demographics, phone skills, practice goals, and more.
                                </p>
                            </div>
                        </div>
                        <div className="row my-3 my-md-5 align-items-center">
                            <div className="col-1">
                                <div className="ce-row-icon">
                                    <svg
                                        preserveAspectRatio="xMidYMid meet"
                                        data-bbox="13 0 173.814 199.9"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="13 0 173.814 199.9"
                                        role="img"
                                        className="w-100"
                                    >
                                        <g>
                                            <path
                                                d="M182.6 0H17.4C15 0 13 1.9 13 4.3v191.3c0 2.4 1.9 4.3 4.3 4.3h165.2c2.4 0 4.3-1.9 4.3-4.3V4.3C187 1.9 185 0 182.6 0zm-4.3 191.3H21.7V8.7h156.5v182.6z"></path>
                                            <path
                                                d="M52.2 147.8h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M52.2 169.6h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M52.2 125.9h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M72.5 75.1c0 11.2 12.1 20 27.5 20s27.5-8.8 27.5-20c0-7.1-4.9-16.2-11.5-22.2.8-2.6 1.3-5.2 1.3-7.5 0-9.5-7.7-17.2-17.2-17.2S82.8 36 82.8 45.5c0 2.3.4 4.9 1.3 7.4-6.7 6-11.6 15.2-11.6 22.2zM100 37c4.7 0 8.5 3.8 8.5 8.5 0 5.9-5 14.4-8.5 14.4s-8.5-8.5-8.5-14.4c0-4.7 3.8-8.5 8.5-8.5zm0 31.6c4.8 0 8.9-3.1 11.9-7.4 4.2 4.5 6.9 10.3 6.9 14 0 6.1-8.6 11.3-18.8 11.3-10.2 0-18.8-5.2-18.8-11.3 0-3.6 2.7-9.5 6.9-14 3 4.3 7.1 7.4 11.9 7.4z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2">
                                <p className="text-white mb-0">March 2019</p>
                                <p className="text-uppercase text-info-light h4 mt-0 text-serif">
                                    DENTAL SUCCESS INSTITUTE: DENTAL SUCCESS SUMMIT
                                </p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-9">
                                <p className="text-white">
                                    A two day summit that included lectures and presentations from
                                    some of the dental industry's best business minds. The summit
                                    emphasized personal wellness and strategies to maintain personal
                                    health while balancing the stresses of practicing dentistry and
                                    owning a business.
                                </p>
                            </div>
                        </div>
                        <div className="row my-3 my-md-5 align-items-center">
                            <div className="col-1">
                                <div className="ce-row-icon">
                                    <svg
                                        preserveAspectRatio="xMidYMid meet"
                                        data-bbox="13 0 173.814 199.9"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="13 0 173.814 199.9"
                                        role="img"
                                        className="w-100"
                                    >
                                        <g>
                                            <path
                                                d="M182.6 0H17.4C15 0 13 1.9 13 4.3v191.3c0 2.4 1.9 4.3 4.3 4.3h165.2c2.4 0 4.3-1.9 4.3-4.3V4.3C187 1.9 185 0 182.6 0zm-4.3 191.3H21.7V8.7h156.5v182.6z"></path>
                                            <path
                                                d="M52.2 147.8h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M52.2 169.6h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M52.2 125.9h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3z"></path>
                                            <path
                                                d="M72.5 75.1c0 11.2 12.1 20 27.5 20s27.5-8.8 27.5-20c0-7.1-4.9-16.2-11.5-22.2.8-2.6 1.3-5.2 1.3-7.5 0-9.5-7.7-17.2-17.2-17.2S82.8 36 82.8 45.5c0 2.3.4 4.9 1.3 7.4-6.7 6-11.6 15.2-11.6 22.2zM100 37c4.7 0 8.5 3.8 8.5 8.5 0 5.9-5 14.4-8.5 14.4s-8.5-8.5-8.5-14.4c0-4.7 3.8-8.5 8.5-8.5zm0 31.6c4.8 0 8.9-3.1 11.9-7.4 4.2 4.5 6.9 10.3 6.9 14 0 6.1-8.6 11.3-18.8 11.3-10.2 0-18.8-5.2-18.8-11.3 0-3.6 2.7-9.5 6.9-14 3 4.3 7.1 7.4 11.9 7.4z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2">
                                <p className="text-white mb-0">June 2018</p>
                                <p className="text-uppercase text-info-light h4 mt-0 text-serif">
                                    BREAKAWAY PRACTICE: ADVANCED STARTUP
                                </p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-9">
                                <p className="text-white">
                                    A two day seminar conducted by Dr. Scott Leune. The course
                                    focused on how to build a successful dental practice from
                                    scratch. It explored subjects such as practice demographics,
                                    practice design and layout, practice efficiency, and training
                                    techniques.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="education"
                className="paddsection bg-light-gray-fade"
                style={{padding: "7rem 0"}}
            >
                <div className="container">
                    <h2 className="text-center text-white text-uppercase">Education</h2>
                    <p className="text-white text-center lead">What I’ve Learned</p>
                    <div className="row justify-content-around my-3 my-md-5 py-3 py-md-5">
                        <div className="col-md-3 my-3 my-md-0">
                            <div className="ce-row-icon d-none d-md-block">
                                <svg
                                    preserveAspectRatio="xMidYMid meet"
                                    data-bbox="13 0 173.814 199.9"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="13 0 173.814 199.9"
                                    role="img"
                                    style={{width: "50px"}}
                                >
                                    <g>
                                        <path
                                            d="M182.6 0H17.4C15 0 13 1.9 13 4.3v191.3c0 2.4 1.9 4.3 4.3 4.3h165.2c2.4 0 4.3-1.9 4.3-4.3V4.3C187 1.9 185 0 182.6 0zm-4.3 191.3H21.7V8.7h156.5v182.6z"></path>
                                        <path
                                            d="M52.2 147.8h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                        <path
                                            d="M52.2 169.6h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                        <path
                                            d="M52.2 125.9h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3z"></path>
                                        <path
                                            d="M72.5 75.1c0 11.2 12.1 20 27.5 20s27.5-8.8 27.5-20c0-7.1-4.9-16.2-11.5-22.2.8-2.6 1.3-5.2 1.3-7.5 0-9.5-7.7-17.2-17.2-17.2S82.8 36 82.8 45.5c0 2.3.4 4.9 1.3 7.4-6.7 6-11.6 15.2-11.6 22.2zM100 37c4.7 0 8.5 3.8 8.5 8.5 0 5.9-5 14.4-8.5 14.4s-8.5-8.5-8.5-14.4c0-4.7 3.8-8.5 8.5-8.5zm0 31.6c4.8 0 8.9-3.1 11.9-7.4 4.2 4.5 6.9 10.3 6.9 14 0 6.1-8.6 11.3-18.8 11.3-10.2 0-18.8-5.2-18.8-11.3 0-3.6 2.7-9.5 6.9-14 3 4.3 7.1 7.4 11.9 7.4z"></path>
                                    </g>
                                </svg>
                            </div>
                            <p className="text-white h5 mb-0">August 2017 - May 2021</p>
                            <p className="h4 text-info-light text-serif mt-1">
                                DDS, UNIVERSITY OF UTAH SCHOOL OF DENTISTRY
                            </p>
                        </div>
                        <div className="col-md-3 my-3 my-md-0">
                            <div className="ce-row-icon d-none d-md-block">
                                <svg
                                    preserveAspectRatio="xMidYMid meet"
                                    data-bbox="13 0 173.814 199.9"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="13 0 173.814 199.9"
                                    role="img"
                                    style={{width: "50px"}}
                                >
                                    <g>
                                        <path
                                            d="M182.6 0H17.4C15 0 13 1.9 13 4.3v191.3c0 2.4 1.9 4.3 4.3 4.3h165.2c2.4 0 4.3-1.9 4.3-4.3V4.3C187 1.9 185 0 182.6 0zm-4.3 191.3H21.7V8.7h156.5v182.6z"></path>
                                        <path
                                            d="M52.2 147.8h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                        <path
                                            d="M52.2 169.6h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                        <path
                                            d="M52.2 125.9h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3z"></path>
                                        <path
                                            d="M72.5 75.1c0 11.2 12.1 20 27.5 20s27.5-8.8 27.5-20c0-7.1-4.9-16.2-11.5-22.2.8-2.6 1.3-5.2 1.3-7.5 0-9.5-7.7-17.2-17.2-17.2S82.8 36 82.8 45.5c0 2.3.4 4.9 1.3 7.4-6.7 6-11.6 15.2-11.6 22.2zM100 37c4.7 0 8.5 3.8 8.5 8.5 0 5.9-5 14.4-8.5 14.4s-8.5-8.5-8.5-14.4c0-4.7 3.8-8.5 8.5-8.5zm0 31.6c4.8 0 8.9-3.1 11.9-7.4 4.2 4.5 6.9 10.3 6.9 14 0 6.1-8.6 11.3-18.8 11.3-10.2 0-18.8-5.2-18.8-11.3 0-3.6 2.7-9.5 6.9-14 3 4.3 7.1 7.4 11.9 7.4z"></path>
                                    </g>
                                </svg>
                            </div>
                            <p className="text-white h5 mb-0">January 2020 - January 2021</p>
                            <p className="h4 text-info-light text-serif mt-1">
                                MBA, WESTERN GOVERNORS UNIVERSITY
                            </p>
                        </div>
                        <div className="col-md-3 my-3 my-md-0">
                            <div className="ce-row-icon d-none d-md-block">
                                <svg
                                    preserveAspectRatio="xMidYMid meet"
                                    data-bbox="13 0 173.814 199.9"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="13 0 173.814 199.9"
                                    role="img"
                                    style={{width: "50px"}}
                                >
                                    <g>
                                        <path
                                            d="M182.6 0H17.4C15 0 13 1.9 13 4.3v191.3c0 2.4 1.9 4.3 4.3 4.3h165.2c2.4 0 4.3-1.9 4.3-4.3V4.3C187 1.9 185 0 182.6 0zm-4.3 191.3H21.7V8.7h156.5v182.6z"></path>
                                        <path
                                            d="M52.2 147.8h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                        <path
                                            d="M52.2 169.6h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3-.1 2.3 1.9 4.3 4.3 4.3z"></path>
                                        <path
                                            d="M52.2 125.9h95.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3H52.2c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3z"></path>
                                        <path
                                            d="M72.5 75.1c0 11.2 12.1 20 27.5 20s27.5-8.8 27.5-20c0-7.1-4.9-16.2-11.5-22.2.8-2.6 1.3-5.2 1.3-7.5 0-9.5-7.7-17.2-17.2-17.2S82.8 36 82.8 45.5c0 2.3.4 4.9 1.3 7.4-6.7 6-11.6 15.2-11.6 22.2zM100 37c4.7 0 8.5 3.8 8.5 8.5 0 5.9-5 14.4-8.5 14.4s-8.5-8.5-8.5-14.4c0-4.7 3.8-8.5 8.5-8.5zm0 31.6c4.8 0 8.9-3.1 11.9-7.4 4.2 4.5 6.9 10.3 6.9 14 0 6.1-8.6 11.3-18.8 11.3-10.2 0-18.8-5.2-18.8-11.3 0-3.6 2.7-9.5 6.9-14 3 4.3 7.1 7.4 11.9 7.4z"></path>
                                    </g>
                                </svg>
                            </div>
                            <p className="text-white h5 mb-0">April 2014 - April 2017</p>
                            <p className="h4 text-info-light text-serif mt-1">
                                BS, BRIGHAM YOUNG UNIVERSITY - IDAHO
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="skills" className="text-left py-5 d-none">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>My Skills</h2>
                    </div>
                </div>

                <div className="container">
                    <div className="journal-block">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 my-3 my-md-0">
                                <div className="journal-info">
                                    <Img fluid={data.patient.sharp.fluid} alt="patient" className="img-responsive"/>

                                    <div className="journal-txt">
                                        <h4 className="mb-3">PATIENT COMMUNICATION</h4>
                                        <p className="separator">
                                            Being able to effectively communicate the necessity of
                                            dental procedures to patients is a critical part of
                                            practicing dentistry. This requires a specific skill set
                                            that includes being able to build rapport with patients as
                                            well as being able to tactfully present difficult news to
                                            patients when necessary.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 my-3 my-md-0">
                                <div className="journal-info">
                                    <Img fluid={data.employees.sharp.fluid} alt="employees" className="img-responsive"/>

                                    <div className="journal-txt">
                                        <h4 className="mb-3">CREATING A POSITIVE WORK ENVIRONMENT</h4>
                                        <p className="separator">
                                            Establishing an enjoyable and motivating work environment
                                            is essential for long-term practice success. Understanding
                                            that happy employees raise the overall value of a practice
                                            is something that is widely known, yet is not always put
                                            into practice. Having dedicated staff that enjoy their
                                            jobs is a recipe for a practice that patients want to be a
                                            part of.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 my-3 my-md-0">
                                <div className="journal-info">
                                    <Img fluid={data.chair.sharp.fluid} alt="chair" className="img-responsive"/>

                                    <div className="journal-txt">
                                        <h4 className="mb-3">NEW LIFE CIVILIZATIONS TO BOLDLY</h4>
                                        <p className="separator">
                                            To an English person, it will seem like simplified English
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="py-5">
                <div className="container">
                    <div className="contact-block1">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-contact">
                                    <h2 className="mb-30">GET IN TOUCH</h2>

                                    <ul className="contact-details">
                                        <li>
                      <span>
                        <a href="tel:1-916-224-3744">(916) 224-3744</a>
                      </span>
                                        </li>
                                        <li>
                      <span>
                        <a href="mailto:dakota.argyle@gmail.com">
                          dakota.argyle@gmail.com
                        </a>
                      </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <form
                                    method="post"
                                    role="form"
                                    className="contactForm"
                                    name="contact-form"
                                    netlify-honeypot="bot-field"
                                    data-netlify="true"
                                >
                                    <input type="hidden" name="bot-field" />
                                    <input type="hidden" name="form-name" value="contact-form" />
                                    <div className="row">
                                        <div id="sendmessage">
                                            Your message has been sent. Thank you!
                                        </div>
                                        <div id="errormessage"></div>

                                        <div className="col-lg-6">
                                            <div className="form-group contact-block1">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    data-rule="minlen:4"
                                                    data-msg="Please enter at least 4 chars"
                                                />
                                                <div className="validation"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Your Email"
                                                    data-rule="email"
                                                    data-msg="Please enter a valid email"
                                                />
                                                <div className="validation"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="subject"
                                                    id="subject"
                                                    placeholder="Subject"
                                                    data-rule="minlen:4"
                                                    data-msg="Please enter at least 8 chars of subject"
                                                />
                                                <div className="validation"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                        <textarea
                            className="form-control"
                            name="message"
                            rows="12"
                            data-rule="required"
                            data-msg="Please write something for us"
                            placeholder="Message"
                        ></textarea>
                                                <div className="validation"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <input
                                                type="submit"
                                                className="btn btn-defeault btn-send"
                                                value="Send message"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
