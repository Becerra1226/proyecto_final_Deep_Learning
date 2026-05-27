import { motion } from "framer-motion";

function Hero() {

    return (

        <section id="home" className="
            relative
            min-h-screen
            flex
            items-center
            justify-center
            overflow-hidden
            px-6
            bg-[#020617]
        ">

            {/* BACKGROUND GLOW */}

            <div className="
                absolute
                top-[-200px]
                left-[-100px]
                w-[500px]
                h-[500px]
                bg-emerald-500/20
                blur-[120px]
                rounded-full
            " />

            <div className="
                absolute
                bottom-[-200px]
                right-[-100px]
                w-[500px]
                h-[500px]
                bg-cyan-500/20
                blur-[120px]
                rounded-full
            " />


            {/* GRID */}

            <div className="
                absolute
                inset-0
                opacity-10
                bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
                bg-[size:60px_60px]
            " />


            {/* CONTENT */}

            <div className="
                relative
                z-10
                max-w-7xl
                w-full
                grid
                md:grid-cols-2
                gap-16
                items-center
            ">

                {/* LEFT SIDE */}

                <motion.div

                    initial={{ opacity: 0, y: 40 }}

                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: 1 }}

                >

                    <motion.p

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        transition={{ delay: 0.3 }}

                        className="
                            text-emerald-400
                            font-medium
                            mb-4
                            tracking-widest
                            uppercase
                        "
                    >

                        Monitoreo Ambiental con IA

                    </motion.p>


                    <motion.h1

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        transition={{ delay: 0.5 }}

                        className="
                            text-5xl
                            md:text-7xl
                            font-bold
                            text-white
                            leading-tight
                            mb-8
                        "
                    >

                        Monitoreo de

                        <span className="text-emerald-400">

                            {" "}Delitos Ambientales

                        </span>

                        <br />

                        mediante Visión por Computadora

                    </motion.h1>


                    <motion.p

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        transition={{ delay: 0.7 }}

                        className="
                            text-slate-400
                            text-lg
                            leading-relaxed
                            max-w-xl
                            mb-10
                        "
                    >

                        Análisis de imágenes satelitales impulsado por inteligencia artificial,
                        capaz de detectar deforestación, minería ilegal, cultivos ilícitos 
                        y pistas de aterrizaje clandestinas en regiones remotas de la Amazonía.

                    </motion.p>


                    {/* BUTTONS */}

                    <motion.div

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        transition={{ delay: 0.9 }}

                        className="flex gap-4 flex-wrap"
                    >

                        <button onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })} 
                            className="
                            bg-white
                            text-black
                            px-8
                            py-4
                            rounded-2xl
                            font-semibold
                            hover:scale-105
                            transition
                        ">

                            Analizar Imagen Satelital

                        </button>


                        <button className="
                            border
                            border-white/10
                            bg-white/5
                            backdrop-blur-md
                            text-white
                            px-8
                            py-4
                            rounded-2xl
                            hover:bg-white/10
                            transition
                        ">

                            Saber Más

                        </button>

                    </motion.div>

                </motion.div>


                {/* RIGHT SIDE */}

                <motion.div

                    initial={{ opacity: 0, scale: 0.9 }}

                    animate={{ opacity: 1, scale: 1 }}

                    transition={{ duration: 1 }}

                    className="
                        relative
                        flex
                        items-center
                        justify-center
                    "
                >

                    {/* MAIN CARD */}

                    <div className="
                        relative
                        w-full
                        max-w-lg
                        h-[500px]
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        backdrop-blur-xl
                        overflow-hidden
                        shadow-2xl
                    ">

                        {/* IMAGE */}

                        <img

                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"

                            alt="bosque"

                            className="
                                absolute
                                inset-0
                                w-full
                                h-full
                                object-cover
                                opacity-70
                            "
                        />


                        {/* OVERLAY */}

                        <div className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-[#020617]
                            via-[#020617]/40
                            to-transparent
                        " />


                        {/* INFO CARD */}

                        <motion.div

                            animate={{
                                y: [0, -10, 0]
                            }}

                            transition={{
                                repeat: Infinity,
                                duration: 4
                            }}

                            className="
                                absolute
                                bottom-8
                                left-8
                                right-8
                                bg-black/40
                                backdrop-blur-lg
                                border
                                border-white/10
                                rounded-2xl
                                p-6
                            "
                        >

                            <p className="
                                text-emerald-400
                                text-sm
                                mb-2
                            ">

                                DETECCIÓN EN VIVO

                            </p>

                            <h3 className="
                                text-white
                                text-2xl
                                font-bold
                                mb-3
                            ">

                                Deforestación Ilegal

                            </h3>

                            <div className="
                                flex
                                items-center
                                justify-between
                            ">

                                <p className="text-slate-300">

                                    Confianza

                                </p>

                                <p className="
                                    text-emerald-400
                                    font-bold
                                    text-xl
                                ">

                                    97.4%

                                </p>

                            </div>

                        </motion.div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

export default Hero;