import { motion } from "framer-motion";

import {
    Trees,
    Pickaxe,
    Sprout,
    Plane,
    Globe,
    Radar,
    Mountain
} from "lucide-react";


const problems = [

    {
        icon: Trees,
        title: "Illegal Deforestation",
        description:
            "Unauthorized logging destroys large forest areas, accelerating biodiversity loss and ecosystem degradation.",
    },

    {
        icon: Pickaxe,
        title: "Illegal Mining",
        description:
            "River contamination and severe soil degradation caused by unregulated extraction activities.",
    },

    {
        icon: Sprout,
        title: "Illicit Crops",
        description:
            "Illegal land use expansion threatens protected ecosystems and increases environmental instability.",
    },

    {
        icon: Plane,
        title: "Clandestine Airstrips",
        description:
            "Remote illegal infrastructure enables trafficking operations in isolated regions.",
    },
];


const challenges = [

    {
        icon: Globe,
        title: "Huge Geographic Extension",
    },

    {
        icon: Mountain,
        title: "Limited Access Regions",
    },

    {
        icon: Radar,
        title: "Low Real-Time Surveillance",
    },
];


function ProblemSection() {

    return (

        <section id="problem" className="
            relative
            py-32
            px-6
            bg-[#020617]
            overflow-hidden
        ">

            {/* BACKGROUND GLOW */}

            <div className="
                absolute
                top-0
                left-0
                w-[400px]
                h-[400px]
                bg-emerald-500/10
                blur-[120px]
                rounded-full
            " />

            <div className="
                absolute
                bottom-0
                right-0
                w-[400px]
                h-[400px]
                bg-cyan-500/10
                blur-[120px]
                rounded-full
            " />


            <div className="
                relative
                z-10
                max-w-7xl
                mx-auto
            ">

                {/* HEADER */}

                <motion.div

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    transition={{ duration: 0.8 }}

                    viewport={{ once: true }}

                    className="
                        text-center
                        mb-24
                    "
                >

                    <p className="
                        text-emerald-400
                        uppercase
                        tracking-[0.3em]
                        mb-6
                        font-medium
                    ">

                        Environmental Problematic

                    </p>


                    <h2 className="
                        text-4xl
                        md:text-6xl
                        font-bold
                        text-white
                        mb-8
                        leading-tight
                    ">

                        Environmental Crimes

                        <span className="text-emerald-400">

                            {" "}Threatening

                        </span>

                        <br />

                        The Amazon Ecosystem

                    </h2>


                    <p className="
                        text-slate-400
                        text-lg
                        max-w-3xl
                        mx-auto
                        leading-relaxed
                    ">

                        Large-scale environmental crimes continue to affect
                        remote Amazon regions through deforestation,
                        illegal mining, illicit crops, and clandestine
                        infrastructure, causing severe ecological
                        and social consequences.

                    </p>

                </motion.div>


                {/* PROBLEM CARDS */}

                <div className="
                    grid
                    md:grid-cols-2
                    xl:grid-cols-4
                    gap-8
                    mb-32
                ">

                    {
                        problems.map((problem, index) => {

                            const Icon = problem.icon;

                            return (

                                <motion.div

                                    key={index}

                                    initial={{ opacity: 0, y: 40 }}

                                    whileInView={{ opacity: 1, y: 0 }}

                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1
                                    }}

                                    viewport={{ once: true }}

                                    whileHover={{
                                        y: -10
                                    }}

                                    className="
                                        relative
                                        bg-white/5
                                        border
                                        border-white/10
                                        backdrop-blur-xl
                                        rounded-3xl
                                        p-8
                                        overflow-hidden
                                        group
                                    "
                                >

                                    {/* HOVER GLOW */}

                                    <div className="
                                        absolute
                                        inset-0
                                        bg-emerald-500/0
                                        group-hover:bg-emerald-500/5
                                        transition
                                    " />


                                    <div className="
                                        relative
                                        z-10
                                    ">

                                        <div className="
                                            w-16
                                            h-16
                                            rounded-2xl
                                            bg-emerald-500/10
                                            flex
                                            items-center
                                            justify-center
                                            mb-6
                                        ">

                                            <Icon
                                                size={32}
                                                className="text-emerald-400"
                                            />

                                        </div>


                                        <h3 className="
                                            text-white
                                            text-2xl
                                            font-bold
                                            mb-4
                                        ">

                                            {problem.title}

                                        </h3>


                                        <p className="
                                            text-slate-400
                                            leading-relaxed
                                        ">

                                            {problem.description}

                                        </p>

                                    </div>

                                </motion.div>
                            );
                        })
                    }

                </div>


                {/* MONITORING CHALLENGES */}

                <motion.div

                    initial={{ opacity: 0, y: 40 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    transition={{ duration: 0.8 }}

                    viewport={{ once: true }}

                    className="
                        bg-white/5
                        border
                        border-white/10
                        rounded-[40px]
                        p-10
                        md:p-16
                        backdrop-blur-xl
                    "
                >

                    <div className="
                        grid
                        lg:grid-cols-2
                        gap-16
                        items-center
                    ">

                        {/* LEFT */}

                        <div>

                            <p className="
                                text-cyan-400
                                uppercase
                                tracking-[0.3em]
                                mb-6
                            ">

                                Monitoring Challenges

                            </p>


                            <h3 className="
                                text-4xl
                                md:text-5xl
                                text-white
                                font-bold
                                leading-tight
                                mb-8
                            ">

                                Why Traditional Monitoring

                                <span className="text-cyan-400">

                                    {" "}Is Difficult

                                </span>

                            </h3>


                            <p className="
                                text-slate-400
                                text-lg
                                leading-relaxed
                            ">

                                The Amazon rainforest covers massive remote
                                territories with difficult physical access,
                                making traditional environmental monitoring
                                slow, expensive and inefficient in real time.

                            </p>

                        </div>


                        {/* RIGHT */}

                        <div className="
                            grid
                            gap-6
                        ">

                            {
                                challenges.map((challenge, index) => {

                                    const Icon = challenge.icon;

                                    return (

                                        <motion.div

                                            key={index}

                                            whileHover={{
                                                scale: 1.03
                                            }}

                                            className="
                                                bg-black/20
                                                border
                                                border-white/10
                                                rounded-2xl
                                                p-6
                                                flex
                                                items-center
                                                gap-5
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
                                            ">

                                                <Icon
                                                    size={28}
                                                    className="text-cyan-400"
                                                />

                                            </div>


                                            <h4 className="
                                                text-white
                                                text-xl
                                                font-semibold
                                            ">

                                                {challenge.title}

                                            </h4>

                                        </motion.div>
                                    );
                                })
                            }

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

export default ProblemSection;