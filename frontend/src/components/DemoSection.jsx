import { useState } from "react";

import axios from "axios";

import { motion } from "framer-motion";

import {
    Upload,
    ImageIcon,
    ScanSearch,
    CheckCircle2,
    Info
} from "lucide-react";

const classContext = {
    water: {
        label: "Agua",
        summary:
            "El modelo identifica cuerpos de agua como rios, lagunas o zonas inundadas visibles en la imagen satelital.",
        meaning:
            "Esta clase ayuda a separar coberturas naturales de agua frente a zonas alteradas, y tambien sirve como referencia para revisar cambios cerca de rios o areas con actividad minera.",
    },
    deforestation: {
        label: "Deforestacion",
        summary:
            "El modelo detecta perdida de cobertura vegetal o claros amplios donde antes podria existir bosque continuo.",
        meaning:
            "Este resultado puede indicar tala, expansion de caminos, apertura de terrenos o degradacion del bosque. Debe interpretarse como una alerta visual para priorizar revision.",
    },
    forest: {
        label: "Bosque",
        summary:
            "El modelo reconoce cobertura boscosa densa y relativamente continua en la escena satelital.",
        meaning:
            "Esta clase representa areas conservadas o con vegetacion predominante. Es util como referencia para comparar con zonas de perdida de bosque o intervencion humana.",
    },
    illegal_mining: {
        label: "Mineria ilegal",
        summary:
            "El modelo identifica patrones visuales asociados con extraccion minera, como suelos expuestos, formas irregulares y alteracion cerca de cuerpos de agua.",
        meaning:
            "Este resultado sugiere una posible zona de actividad extractiva no regulada. La prediccion no reemplaza verificacion en campo, pero ayuda a ubicar areas de riesgo ambiental.",
    },
    illicit_crops_PCCA: {
        label: "Cultivos ilicitos",
        summary:
            "El modelo detecta patrones de parcelas o coberturas agricolas asociadas a cultivos ilicitos en imagenes satelitales.",
        meaning:
            "Esta clase funciona como una senal de posible transformacion del uso del suelo. Conviene revisarla junto con contexto geografico, historico y validacion especializada.",
    },
    airstrips: {
        label: "Pistas de aterrizaje",
        summary:
            "El modelo reconoce superficies lineales despejadas que pueden corresponder a pistas clandestinas o infraestructura remota.",
        meaning:
            "Este resultado puede indicar vias de acceso o infraestructura usada en zonas aisladas. Debe verse como una alerta para analisis complementario.",
    },
};

const getClassContext = (className) =>
    classContext[className] || {
        label: className,
        summary:
            "El modelo encontro un patron visual asociado a una de las clases entrenadas.",
        meaning:
            "La prediccion resume la clase con mayor probabilidad segun la CNN y debe revisarse junto con la confianza reportada.",
    };


function DemoSection() {

    const [image, setImage] = useState(null);

    const [preview, setPreview] = useState(null);

    const [result, setResult] = useState(null);

    const [loading, setLoading] = useState(false);


    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setImage(file);

        setPreview(URL.createObjectURL(file));

        setResult(null);
    };


    const handleSubmit = async () => {

        if (!image) return;

        setLoading(true);

        const formData = new FormData();

        formData.append("file", image);

        try {

            const response = await axios.post(
                "https://proyecto-final-deep-learning.onrender.com/predict",
                formData
            );

            setResult(response.data);

        } catch (error) {

            console.error(error);
        }

        setLoading(false);
    };


    return (

        <section id="demo" className="
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
                left-[-100px]
                w-[400px]
                h-[400px]
                bg-emerald-500/10
                blur-[120px]
                rounded-full
            " />

            <div className="
                absolute
                bottom-[-100px]
                right-[-100px]
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

                        Demostración de IA

                    </p>


                    <h2 className="
                        text-4xl
                        md:text-6xl
                        font-bold
                        text-white
                        mb-8
                        leading-tight
                    ">

                        Analizar Imágenes Satelitales

                        <span className="text-emerald-400">

                            {" "}Usando IA

                        </span>

                    </h2>


                    <p className="
                        text-slate-400
                        text-lg
                        max-w-3xl
                        mx-auto
                        leading-relaxed
                    ">

                        Sube una imagen satelital y deja que el modelo de aprendizaje profundo
                        identifique patrones ambientales asociados con deforestación,
                        minería ilegal, cultivos ilícitos o pistas de aterrizaje clandestinas.

                    </p>

                </motion.div>


                {/* MAIN CONTENT */}

                <div className="
                    grid
                    lg:grid-cols-2
                    gap-10
                    items-center
                ">

                    {/* LEFT SIDE */}

                    <motion.div

                        initial={{ opacity: 0, x: -40 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        transition={{ duration: 0.8 }}

                        viewport={{ once: true }}

                        className="
                            relative
                        "
                    >

                        <div className="
                            relative
                            h-[500px]
                            border-2
                            border-dashed
                            border-white/10
                            rounded-[40px]
                            bg-white/5
                            backdrop-blur-xl
                            overflow-hidden
                            group
                            interactive-card
                        ">

                            {
                                preview ? (

                                    <img
                                        src={preview}
                                        alt="vista previa"
                                        className="
                                            w-full
                                            h-full
                                            object-cover
                                        "
                                    />

                                ) : (

                                    <div className="
                                        h-full
                                        flex
                                        flex-col
                                        items-center
                                        justify-center
                                        text-center
                                        px-10
                                    ">

                                        <div className="
                                            w-24
                                            h-24
                                            rounded-3xl
                                            bg-emerald-500/10
                                            flex
                                            items-center
                                            justify-center
                                            mb-8
                                        ">

                                            <Upload
                                                size={50}
                                                className="text-emerald-400"
                                            />

                                        </div>


                                        <h3 className="
                                            text-white
                                            text-3xl
                                            font-bold
                                            mb-4
                                        ">

                                            Subir Imagen

                                        </h3>


                                        <p className="
                                            text-slate-400
                                            max-w-md
                                            leading-relaxed
                                        ">

                                            Arrastra y suelta o selecciona una imagen
                                            satelital para analizar patrones ambientales
                                            utilizando inteligencia artificial.

                                        </p>

                                    </div>
                                )
                            }


                            {/* INPUT */}

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="
                                    absolute
                                    inset-0
                                    opacity-0
                                    cursor-pointer
                                "
                            />

                        </div>

                    </motion.div>


                    {/* RIGHT SIDE */}

                    <motion.div

                        initial={{ opacity: 0, x: 40 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        transition={{ duration: 0.8 }}

                        viewport={{ once: true }}

                        className="
                            flex
                            flex-col
                            gap-8
                        "
                    >

                        {/* BUTTON */}

                        <button

                            onClick={handleSubmit}

                            className="
                                bg-white
                                text-black
                                py-5
                                rounded-2xl
                                text-lg
                                font-semibold
                                hover:scale-[1.02]
                                transition
                                flex
                                items-center
                                justify-center
                                gap-3
                            "
                        >

                            <ScanSearch size={24} />

                            Analizar Imagen

                        </button>


                        {/* LOADING */}

                        {
                            loading && (

                                <motion.div

                                    initial={{ opacity: 0 }}

                                    animate={{ opacity: 1 }}

                                    className="
                                        bg-white/5
                                        border
                                        border-white/10
                                        rounded-3xl
                                        p-10
                                        backdrop-blur-xl
                                        interactive-card
                                    "
                                >

                                    <div className="
                                        flex
                                        items-center
                                        gap-4
                                        mb-6
                                    ">

                                        <div className="
                                            w-5
                                            h-5
                                            rounded-full
                                            border-2
                                            border-emerald-400
                                            border-t-transparent
                                            animate-spin
                                        " />

                                        <p className="
                                            text-white
                                            text-xl
                                            font-semibold
                                        ">

                                            IA Procesando Imagen

                                        </p>

                                    </div>


                                    <p className="
                                        text-slate-400
                                        leading-relaxed
                                    ">

                                        El modelo de aprendizaje profundo está analizando
                                        patrones satelitales y detectando posibles
                                        delitos ambientales.

                                    </p>

                                </motion.div>
                            )
                        }


                        {/* RESULTS */}

                        {
                            result && (() => {
                                const detectedClass = getClassContext(result.class);

                                return (

                                <motion.div

                                    initial={{
                                        opacity: 0,
                                        y: 20
                                    }}

                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}

                                    className="
                                        bg-white/5
                                        border
                                        border-white/10
                                        rounded-3xl
                                        p-10
                                        backdrop-blur-xl
                                    "
                                >

                                    <div className="
                                        flex
                                        items-center
                                        gap-4
                                        mb-8
                                    ">

                                        <div className="
                                            w-16
                                            h-16
                                            rounded-2xl
                                            bg-emerald-500/10
                                            flex
                                            items-center
                                            justify-center
                                        ">

                                            <CheckCircle2
                                                size={32}
                                                className="text-emerald-400"
                                            />

                                        </div>


                                        <div>

                                            <p className="
                                                text-slate-400
                                                mb-1
                                            ">

                                                Resultado de Detección

                                            </p>

                                            <h3 className="
                                                text-white
                                                text-3xl
                                                font-bold
                                            ">

                                                {detectedClass.label}

                                            </h3>

                                        </div>

                                        </div>


                                    {/* CLASS CONTEXT */}

                                    <div className="
                                        bg-black/20
                                        border
                                        border-white/10
                                        rounded-2xl
                                        p-6
                                        mb-8
                                        interactive-card
                                    ">

                                        <div className="
                                            flex
                                            items-start
                                            gap-4
                                        ">

                                            <div className="
                                                w-12
                                                h-12
                                                rounded-2xl
                                                bg-cyan-500/10
                                                flex
                                                items-center
                                                justify-center
                                                shrink-0
                                            ">

                                                <Info
                                                    size={24}
                                                    className="text-cyan-400"
                                                />

                                            </div>


                                            <div>

                                                <h4 className="
                                                    text-white
                                                    text-xl
                                                    font-semibold
                                                    mb-3
                                                ">

                                                    Que significa esta clase

                                                </h4>


                                                <p className="
                                                    text-slate-300
                                                    leading-relaxed
                                                    mb-3
                                                ">

                                                    {detectedClass.summary}

                                                </p>


                                                <p className="
                                                    text-slate-400
                                                    leading-relaxed
                                                ">

                                                    {detectedClass.meaning}

                                                </p>

                                            </div>

                                        </div>

                                    </div>


                                    {/* CONFIDENCE */}

                                    <div className="mb-4">

                                        <div className="
                                            flex
                                            justify-between
                                            mb-3
                                        ">

                                            <p className="text-slate-400">

                                                Confianza

                                            </p>

                                            <p className="
                                                text-emerald-400
                                                font-semibold
                                            ">

                                                {result.confidence}%

                                            </p>

                                        </div>


                                        <div className="
                                            w-full
                                            h-4
                                            bg-black/20
                                            rounded-full
                                            overflow-hidden
                                        ">

                                            <motion.div

                                                initial={{ width: 0 }}

                                                animate={{
                                                    width: `${result.confidence}%`
                                                }}

                                                transition={{
                                                    duration: 1
                                                }}

                                                className="
                                                    h-full
                                                    bg-gradient-to-r
                                                    from-emerald-400
                                                    to-cyan-400
                                                "
                                            />

                                        </div>

                                    </div>

                                </motion.div>
                                );
                            })()
                        }


                        {/* EXTRA INFO */}

                        <div className="
                            bg-black/20
                            border
                            border-white/10
                            rounded-3xl
                            p-8
                        ">

                            <div className="
                                flex
                                items-center
                                gap-4
                                mb-4
                            ">

                                <ImageIcon
                                    size={28}
                                    className="text-cyan-400"
                                />

                                <h3 className="
                                    text-white
                                    text-2xl
                                    font-bold
                                ">

                                    Clases Soportadas

                                </h3>

                            </div>


                            <div className="
                                flex
                                flex-wrap
                                gap-3
                            ">

                                {
                                    [
                                        "Bosque",
                                        "Agua",
                                        "Deforestación",
                                        "Minería Ilegal",
                                        "Cultivos Ilícitos",
                                        "Pistas de Aterrizaje"
                                    ].map((item, index) => (

                                        <div

                                            key={index}

                                            className="
                                                px-4
                                                py-2
                                                rounded-full
                                                bg-white/5
                                                border
                                                border-white/10
                                                text-slate-300
                                                interactive-card
                                            "
                                        >

                                            {item}

                                        </div>
                                    ))
                                }

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}

export default DemoSection;
