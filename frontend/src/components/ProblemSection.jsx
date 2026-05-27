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
        title: "Deforestación Ilegal",
        description:
            "La tala no autorizada destruye grandes áreas de bosque, acelerando la pérdida de biodiversidad y la degradación de los ecosistemas.",
    },

    {
        icon: Pickaxe,
        title: "Minería Ilegal",
        description:
            "Contaminación de ríos y degradación severa del suelo causada por actividades de extracción no reguladas.",
    },

    {
        icon: Sprout,
        title: "Cultivos Ilícitos",
        description:
            "La expansión ilegal del uso de la tierra amenaza los ecosistemas protegidos y aumenta la inestabilidad ambiental.",
    },

    {
        icon: Plane,
        title: "Pistas de Aterrizaje Clandestinas",
        description:
            "La infraestructura ilegal remota facilita las operaciones de tráfico en regiones aisladas.",
    },
];


const challenges = [

    {
        icon: Globe,
        title: "Enorme Extensión Geográfica",
    },

    {
        icon: Mountain,
        title: "Regiones de Acceso Limitado",
    },

    {
        icon: Radar,
        title: "Poca Vigilancia en Tiempo Real",
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

                        Problemática Ambiental

                    </p>


                    <h2 className="
                        text-4xl
                        md:text-6xl
                        font-bold
                        text-white
                        mb-8
                        leading-tight
                    ">

                        Delitos Ambientales

                        <span className="text-emerald-400">

                            {" "}Amenazando

                        </span>

                        <br />

                        El Ecosistema Amazónico

                    </h2>


                    <p className="
                        text-slate-400
                        text-lg
                        max-w-3xl
                        mx-auto
                        leading-relaxed
                    ">

                        Los delitos ambientales a gran escala continúan afectando
                        las regiones remotas de la Amazonía a través de la deforestación,
                        la minería ilegal, los cultivos ilícitos y la infraestructura clandestina,
                        causando graves consecuencias ecológicas y sociales.

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

                                Desafíos de Monitoreo

                            </p>


                            <h3 className="
                                text-4xl
                                md:text-5xl
                                text-white
                                font-bold
                                leading-tight
                                mb-8
                            ">

                                Por Qué el Monitoreo Tradicional

                                <span className="text-cyan-400">

                                    {" "}es Difícil

                                </span>

                            </h3>


                            <p className="
                                text-slate-400
                                text-lg
                                leading-relaxed
                            ">

                                La selva amazónica cubre territorios remotos masivos
                                con difícil acceso físico, lo que hace que el monitoreo
                                ambiental tradicional sea lento, costoso e ineficiente
                                en tiempo real.

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