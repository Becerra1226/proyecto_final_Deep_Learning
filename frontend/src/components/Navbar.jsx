import { motion } from "framer-motion";

import { Leaf } from "lucide-react";


const navItems = [

    {
        label: "Home",
        href: "#home",
    },

    {
        label: "Problem",
        href: "#problem",
    },

    {
        label: "Computer Vision",
        href: "#vision",
    },

    {
        label: "Demo",
        href: "#demo",
    },
];


function Navbar() {

    return (

        <motion.nav

            initial={{ y: -100 }}

            animate={{ y: 0 }}

            transition={{ duration: 0.8 }}

            className="
                fixed
                top-0
                left-0
                w-full
                z-50
                px-6
                py-4
            "
        >

            <div className="
                max-w-7xl
                mx-auto
                flex
                items-center
                justify-between
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                rounded-2xl
                px-8
                py-4
                shadow-2xl
            ">

                {/* LOGO */}

                <div className="
                    flex
                    items-center
                    gap-3
                ">

                    <div className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-emerald-500/10
                        flex
                        items-center
                        justify-center
                    ">

                        <Leaf
                            size={26}
                            className="text-emerald-400"
                        />

                    </div>


                    <div>

                        <h1 className="
                            text-white
                            font-bold
                            text-xl
                        ">

                            Amazon AI

                        </h1>

                        <p className="
                            text-slate-400
                            text-sm
                        ">

                            Environmental Monitoring

                        </p>

                    </div>

                </div>


                {/* NAV LINKS */}

                <div className="
                    hidden
                    md:flex
                    items-center
                    gap-8
                ">

                    {
                        navItems.map((item, index) => (

                            <a

                                key={index}

                                href={item.href}

                                className="
                                    text-slate-300
                                    hover:text-white
                                    transition
                                    relative
                                    group
                                "
                            >

                                {item.label}

                                <span className="
                                    absolute
                                    left-0
                                    -bottom-1
                                    w-0
                                    h-[2px]
                                    bg-emerald-400
                                    transition-all
                                    group-hover:w-full
                                " />

                            </a>
                        ))
                    }

                </div>


                {/* BUTTON */}

                <a
                    href="#demo"
                    className="
                        hidden
                        md:flex
                        items-center
                        justify-center
                        bg-white
                        text-black
                        px-6
                        py-3
                        rounded-2xl
                        font-semibold
                        hover:scale-105
                        transition
                    "
                >

                    Try AI

                </a>

            </div>

        </motion.nav>
    );
}

export default Navbar;