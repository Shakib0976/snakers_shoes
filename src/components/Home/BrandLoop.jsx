'use client'
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiMongodb,
    SiGit,
    SiTypescript,
    SiPython,
    SiFigma,
    SiTailwindcss
} from "react-icons/si";

const BrandLoop = () => {

    const skills = [
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "Python", icon: SiPython, color: "text-blue-400" },
        { name: "Figma", icon: SiFigma, color: "text-purple-500" },
    ];
    // Duplicate skills array for infinite scroll
    const loopSkills = [...skills, ...skills];

    return (
        <div className="flex animate-scroll mb-8">
            {loopSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                    <div
                        key={index}
                        className="flex-shrink-0 mx-4 group"
                    >
                        <div className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 min-w-[140px]">
                            <div className="relative mb-4">
                                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                                <IconComponent
                                    size={48}
                                    className={`${skill.color}`}
                                />
                            </div>
                            <p className="text-gray-700 font-semibold text-center group-hover:text-gray-900 transition-colors duration-300">
                                {skill.name}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default BrandLoop;