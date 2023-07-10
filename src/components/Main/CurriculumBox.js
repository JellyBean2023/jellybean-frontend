import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CurriculumBox = (props) => {
    const { variable } = props;

    useEffect(() => {
        AOS.init({
            duration: 1000, // 애니메이션 지속 시간 (밀리초)
            easing: "ease-in-out", // 애니메이션 이징
            anchorPlacement: "center-center", // 데이터 앵커 위치
        });
    });

    return (
        <div data-aos="fade-up" className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative dark:bg-slate-800 ">
                <h2 className="tracking-widest text-base title-font font-medium text-black-400 mb-1 dark:text-slate-400">
                    {variable.state ? "모집중" : "모집마감"}
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 dark:text-white">
                    {variable.title}
                </h1>
                <p className="leading-relaxed mb-3 dark:text-slate-400">
                    {variable.content}
                </p>
                <Link href={`/curriculum/${variable.id}`} className="text-indigo-500 inline-flex items-center">
                    더 알아보기
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default CurriculumBox;