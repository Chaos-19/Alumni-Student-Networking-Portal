import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import Contact from "./contact";

type Props = {};

const link = [
    {
        icon: <FaFacebook size={24} color="white" />,
        link: "",
    },
    {
        icon: <FaLinkedin size={24} color="white" />,
        link: "",
    },
    {
        icon: <TfiEmail size={24} color="white" />,
        link: "",
    },
    {
        icon: <FaTwitter size={24} color="white" />,
        link: "",
    },
    {
        icon: <FaInstagram size={24} color="white" />,
        link: "",
    },
];

const fqa = [
    {
        title: "Courses",
        link: "",
    },
    {
        title: "Virtual classroom courses",
        link: "",
    },
    {
        title: "E-learning courses",
        link: "",
    },
    {
        title: "Video Courses",
        link: "",
    },
    {
        title: "Offline Courses",
        link: "",
    },
];

const Footer = (props: Props) => {
    return (
        <footer className="w-full bg-[#57AEF5] py-8 px-6 mb-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
                <div className="flex lg:flex-col gap-2 lg:justify-center items-center">
                    <Image src="/bdu logo.png" width={70} height={70} alt="logo" />
                    {link.map((link) => (
                        <Link href={link.link}>{link.icon}</Link>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h5 className="font-bold text-white text-xl">FAQ and Help</h5>
                    <div className="flex flex-col items-center gap-2">
                        {fqa.map((ques) => (
                            <Link href={ques.link} className="font-medium text-lg text-white">{ques.title}</Link>
                        ))}
                    </div>
                </div>
                <div>
                    <Contact />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
