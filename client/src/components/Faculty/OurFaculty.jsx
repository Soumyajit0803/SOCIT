import "./OurFaculty.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
// Assuming FacultyCard, facultyData, FaPhoneAlt, FaEnvelope are available

gsap.registerPlugin(ScrollTrigger);
// Faculty data structure - easily replaceable
const facultyData = [
    {
        id: 1,
        name: "Arindam Biswas",
        designation: "Dean, Academic Professor",
        phone: "+91 33 26680525/0526 (2 lines) x 3003(O)",
        emails: ["abiswas@it.iiests.ac.in", "barindam@gmail.com"],
        image: "https://www.iiests.ac.in/assets/images/faculty/66cc2514dd20fAB.jpg",
        page: "https://www.iiests.ac.in/IIEST/Faculty/it-abiswas",
    },
    {
        id: 2,
        name: "Hafizur Rahaman",
        designation: "Professor",
        phone: "+91 33 26684561(3 lines) x309/249 (O)",
        emails: ["rahaman_h@it.iiests.ac.in", "hafizur@vlsi.iiests.ac.in"],
        image: "https://www.iiests.ac.in/assets/images/faculty/1.jpg",
        page: "https://www.iiests.ac.in/IIEST/Faculty/it-rahaman_h",
    },
    {
        id: 3,
        name: "Tuhina Samanta",
        designation: "Head of Department",
        phone: " +91 33 26684561(3 lines) x260 (O)",
        emails: [" t_samanta@it.iiests.ac.in"],
        image: "https://www.iiests.ac.in/assets/images/faculty/5.jpg",
        page: "https://www.iiests.ac.in/IIEST/Faculty/it-t_samanta",
    },
    {
        id: 4,
        name: "Indrajit Banerjee",
        designation: "Professor",
        phone: "+91 33 26684561-63",
        emails: ["ibanerjee@it.iiests.ac.in", "ibanerjee.it@faculty.iiests.ac.in"],
        image: "https://www.iiests.ac.in/assets/images/faculty/6315a272e24541662109870016.jpg",
        page: "https://www.iiests.ac.in/IIEST/Faculty/it-indrajit",
    },
    {
        id: 5,
        name: "Chandan Giri",
        designation: "Associate Professor",
        phone: " +91 33 26684561(3 lines) x260 (O)",
        emails: ["chandan@it.iiests.ac.in", "chandangiri@gmail.com"],
        image: "https://www.iiests.ac.in/assets/images/faculty/2.jpg",
        page: "https://www.iiests.ac.in/IIEST/Faculty/it-chandan",
    },
    {
        id: 6,
        name: "Surajit Kumar Roy",
        designation: "Associate Professor",
        phone: "+91 33 26684561(3 lines) x260 (O)",
        emails: ["suraroy@it.iiests.ac.in", "suraroy@gmail.com"],
        image: "https://www.iiests.ac.in/assets/images/faculty/4.jpg",
        page: "https://www.iiests.ac.in/IIEST/Faculty/it-suraroy",
    },
    {
        id: 7,
        name: "Binanda Sengupta",
        designation: "Assistant Professor",
        phone: "+91 33 26684561",
        emails: ["binanda@it.iiests.ac.in", "binanda.it@faculty.iiests.ac.in"],
        image: "https://www.iiests.ac.in/assets/images/faculty/65d9cb50c3233Binanda.jpg",
        page: "https://www.iiests.ac.in/IIEST/Faculty/it-binanda",
    },
    {
        id: 8,
        name: "Santi Prasad Maity",
        designation: "Professor",
        phone: "+91 33 26684561(3 lines) x858 (O)",
        emails: ["santipmaity@it.iiests.ac.in", "spmaity@yahoo.com"],
        image: "https://www.iiests.ac.in/assets/images/faculty/64cfb3c37f802spmaity1.jpg",
        page: "https://www.iiests.ac.in/IIEST/Faculty/it-santipmaity",
    },
    {
        id: 9,
        name: "Sukanta Das",
        designation: "Associate Professor",
        phone: "+91 33 26684561(3 lines) x260 (O)",
        emails: [" sukanta@it.iiests.ac.in", "sukanta78das@yahoo.com"],
        image: "https://www.iiests.ac.in/assets/images/faculty/61fba883bbf70download.jpg",
        page: "https://www.iiests.ac.in/IIEST/Faculty/it-sukanta",
    },
    {
        id: 10,
        name: "Shyamalendu Kandar",
        designation: "Assistant Professor",
        phone: "+91 33 26684561 x260 (O)",
        emails: ["shyamalenduk@it.iiests.ac.in"],
        image: "https://www.iiests.ac.in/assets/images/faculty/103.jpg",
        page: "https://www.iiests.ac.in/IIEST/Faculty/it-shyamalenduk",
    },
    {
        id: 11,
        name: "Ruchira Naskar",
        designation: "Associate Dean, PG & PhD Associate Professor",
        phone: "+91 33 26684561",
        emails: [" ruchira@it.iiests.ac.in", "ruchira.naskar@gmail.com"],
        image: "https://www.iiests.ac.in/assets/images/faculty/5e996a26322c3us.jpg",
        page: "https://www.iiests.ac.in/IIEST/Faculty/it-ruchira",
    },
    {
        id: 12,
        name: "Prasun Ghosal",
        designation: "Associate Professor",
        phone: "+91 33 26684561(3 lines) x260 (O)",
        emails: ["p_ghosal@it.iiests.ac.in", "p_ghosal.it@faculty.iiests.ac.in"],
        image: "https://www.iiests.ac.in/assets/images/faculty/6225bc037c1d0prasun_profile_pic2.jpg",
        page: "https://www.iiests.ac.in/IIEST/Faculty/it-p_ghosal",
    },
    {
        id: 13,
        name: "Basabdatta Palit",
        designation: "Assistant Professor",
        emails: ["basabdatta@it.iiests.ac.in"],
        image: "https://www.iiests.ac.in/assets/images/faculty/68aaaa2f5a361IMG-20250814-WA0138~2.jpg",
        page: "https://www.iiests.ac.in/IIEST/Faculty/it-basabdatta",
    },
];

const FacultyCard = ({ faculty }) => {
    return (
        <div className="faculty-1">
            <div className="faculty-image">
                <div className="img">
                    <img src={faculty.image || "/placeholder.svg"} alt={faculty.name} />
                </div>
            </div>

            <div className="faculty-content">
                <h3 className="faculty-name">{faculty.name}</h3>
                <p className="faculty-designation">{faculty.designation}</p>

                <div className="faculty-contact">
                    {faculty.phone && (
                        <div className="contact-item">
                            <FaPhoneAlt className="icon" /> {faculty.phone}
                        </div>
                    )}

                    {faculty.emails &&
                        faculty.emails.map((email, index) => (
                            <div key={index} className="contact-item">
                                <FaEnvelope className="icon" /> {email}
                            </div>
                        ))}
                </div>

                <a href={faculty.page} className="learn-more">
                    Learn More
                </a>
            </div>
        </div>
    );
};

const OurFaculty = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    useGSAP(
        () => {
            // Calculate dynamic width
            const getScrollAmount = () => {
                let elementWidth = triggerRef.current.scrollWidth;
                let containerWidth = sectionRef.current.offsetWidth;
                return -(elementWidth - containerWidth);
            };

            const tween = gsap.fromTo(
                triggerRef.current,
                { x: 0 },
                {
                    x: getScrollAmount,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "+=3000", // "3000 top" is invalid syntax for 'end'. Use relative value "+=3000"
                        scrub: 0.2, // Smooth scrubbing
                        pin: true,
                        invalidateOnRefresh: true,
                    },
                }
            );

            // No manual cleanup needed! useGSAP handles revert() automatically.
        },
        { scope: sectionRef }
    );
    return (
        <div className="content-wrapper-1" ref={sectionRef}>
            <div className="topic-1 hiderx">
                <div className="top-to-bottom">Our Esteemed Faculty</div>
            </div>
            {facultyData && (
                <div className="flist">
                    <div className="flist-scroller" ref={triggerRef}>
                        {facultyData.map((f, i) => (
                            <FacultyCard key={i} faculty={f}></FacultyCard>
                        ))}
                    </div>
                    <div className="flist-scroller">
                        {facultyData.map((f, i) => (
                            <FacultyCard key={i} faculty={f}></FacultyCard>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default OurFaculty;
