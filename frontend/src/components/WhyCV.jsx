import { motion } from "framer-motion";

import {
    Brain,
    Satellite,
    ScanSearch,
    ShieldCheck,
    Activity,
    Eye
} from "lucide-react";


const features = [

    {
        icon: Satellite,
        title: "Satellite Image Analysis",
        description:
            "Automated processing of large-scale satellite imagery for environmental monitoring.",
    },

    {
        icon: ScanSearch,
        title: "Pattern Detection",
        description:
            "Identification of environmental crimes through learned visual patterns.",
    },

    {
        icon: Activity,
        title: "Real-Time Monitoring",
        description:
            "Continuous surveillance capabilities across remote and inaccessible regions.",
    },

    {
        icon: ShieldCheck,
        title: "Scalable Environmental Protection",
        description:
            "AI-driven monitoring enables faster response and better environmental control.",
    },
];


function WhyComputerVision() {

    return (

        <section id="vision" className="
            relative
            py-32
            px-6
            bg-[#020617]
            overflow-hidden
        ">

            {/* BACKGROUND */}

            <div className="
                absolute
                top-[-100px]
                right-[-100px]
                w-[400px]
                h-[400px]
                bg-cyan-500/10
                blur-[120px]
                rounded-full
            " />

            <div className="
                absolute
                bottom-[-100px]
                left-[-100px]
                w-[400px]
                h-[400px]
                bg-emerald-500/10
                blur-[120px]
                rounded-full
            " />


            <div className="
                relative
                z-10
                max-w-7xl
                mx-auto
            ">

                <div className="
                    grid
                    lg:grid-cols-2
                    gap-20
                    items-center
                ">

                    {/* LEFT SIDE */}

                    <motion.div

                        initial={{ opacity: 0, x: -40 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        transition={{ duration: 0.8 }}

                        viewport={{ once: true }}
                    >

                        <p className="
                            text-cyan-400
                            uppercase
                            tracking-[0.3em]
                            mb-6
                            font-medium
                        ">

                            Why Computer Vision

                        </p>


                        <h2 className="
                            text-4xl
                            md:text-6xl
                            font-bold
                            text-white
                            leading-tight
                            mb-8
                        ">

                            Artificial Intelligence

                            <span className="text-cyan-400">

                                {" "}For Large-Scale

                            </span>

                            <br />

                            Environmental Monitoring

                        </h2>


                        <p className="
                            text-slate-400
                            text-lg
                            leading-relaxed
                            mb-10
                            max-w-2xl
                        ">

                            Computer vision enables automated analysis of
                            satellite imagery, allowing early detection of
                            environmental crimes in regions that are difficult
                            to access physically. By leveraging deep learning,
                            the system can identify complex visual patterns
                            associated with illegal activities across the Amazon.

                        </p>


                        {/* STATS */}

                        <div className="
                            grid
                            grid-cols-2
                            gap-6
                        ">

                            <div className="
                                bg-white/5
                                border
                                border-white/10
                                rounded-3xl
                                p-6
                                backdrop-blur-xl
                            ">

                                <h3 className="
                                    text-4xl
                                    font-bold
                                    text-emerald-400
                                    mb-2
                                ">

                                    24/7

                                </h3>

                                <p className="text-slate-400">

                                    Continuous Monitoring

                                </p>

                            </div>


                            <div className="
                                bg-white/5
                                border
                                border-white/10
                                rounded-3xl
                                p-6
                                backdrop-blur-xl
                            ">

                                <h3 className="
                                    text-4xl
                                    font-bold
                                    text-cyan-400
                                    mb-2
                                ">

                                    AI

                                </h3>

                                <p className="text-slate-400">

                                    Automated Detection

                                </p>

                            </div>

                        </div>

                    </motion.div>


                    {/* RIGHT SIDE */}

                    <motion.div

                        initial={{ opacity: 0, x: 40 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        transition={{ duration: 0.8 }}

                        viewport={{ once: true }}

                        className="
                            relative
                        "
                    >

                        {/* MAIN PANEL */}

                        <div className="
                            relative
                            bg-white/5
                            border
                            border-white/10
                            rounded-[40px]
                            p-10
                            backdrop-blur-xl
                            overflow-hidden
                        ">

                            {/* TOP ICON */}

                            <div className="
                                w-24
                                h-24
                                rounded-3xl
                                bg-cyan-500/10
                                flex
                                items-center
                                justify-center
                                mb-10
                            ">

                                <Brain
                                    size={50}
                                    className="text-cyan-400"
                                />

                            </div>


                            {/* FEATURES */}

                            <div className="
                                grid
                                gap-6
                            ">

                                {
                                    features.map((feature, index) => {

                                        const Icon = feature.icon;

                                        return (

                                            <motion.div

                                                key={index}

                                                whileHover={{
                                                    scale: 1.02
                                                }}

                                                className="
                                                    bg-black/20
                                                    border
                                                    border-white/10
                                                    rounded-2xl
                                                    p-6
                                                    flex
                                                    gap-5
                                                    items-start
                                                "
                                            >

                                                <div className="
                                                    w-14
                                                    h-14
                                                    rounded-2xl
                                                    bg-cyan-500/10
                                                    flex
                                                    items-center
                                                    justify-center
                                                    shrink-0
                                                ">

                                                    <Icon
                                                        size={28}
                                                        className="text-cyan-400"
                                                    />

                                                </div>


                                                <div>

                                                    <h3 className="
                                                        text-white
                                                        text-xl
                                                        font-semibold
                                                        mb-2
                                                    ">

                                                        {feature.title}

                                                    </h3>


                                                    <p className="
                                                        text-slate-400
                                                        leading-relaxed
                                                    ">

                                                        {feature.description}

                                                    </p>

                                                </div>

                                            </motion.div>
                                        );
                                    })
                                }

                            </div>


                            {/* FLOATING EFFECT */}

                            <motion.div

                                animate={{
                                    y: [0, -15, 0]
                                }}

                                transition={{
                                    repeat: Infinity,
                                    duration: 5
                                }}

                                className="
                                    absolute
                                    top-8
                                    right-8
                                    w-16
                                    h-16
                                    rounded-2xl
                                    bg-emerald-500/10
                                    flex
                                    items-center
                                    justify-center
                                    border
                                    border-white/10
                                "
                            >

                                <Eye
                                    size={30}
                                    className="text-emerald-400"
                                />

                            </motion.div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}

export default WhyComputerVision;