import { motion } from "framer-motion";
import {
    ArrowRight,
    BarChart3,
    BrainCircuit,
    ClipboardCheck,
    Database,
    FileImage,
    GitBranch,
    ImageIcon,
    Layers3,
    MapPinned,
    SlidersHorizontal,
} from "lucide-react";

const pipelineSteps = [
    {
        icon: FileImage,
        title: "Entrada",
        description:
            "El sistema recibe una imagen satelital RGB desde la interfaz web o desde el conjunto de datos preparado para entrenamiento.",
    },
    {
        icon: SlidersHorizontal,
        title: "Preprocesamiento",
        description:
            "La imagen se redimensiona a 224x224, se transforma a tensor y se normaliza con medias y desviaciones estandar compatibles con modelos visuales.",
    },
    {
        icon: BrainCircuit,
        title: "Modelo CNN",
        description:
            "La red convolucional extrae patrones espaciales y topograficos para clasificar la escena en una de las seis clases ambientales.",
    },
    {
        icon: BarChart3,
        title: "Resultado",
        description:
            "El modelo entrega la clase estimada y un porcentaje de confianza calculado con softmax sobre las salidas del clasificador.",
    },
    {
        icon: MapPinned,
        title: "Uso final",
        description:
            "La prediccion se convierte en una alerta interpretable para apoyar el monitoreo ambiental y priorizar revision de zonas criticas.",
    },
];

const dataCards = [
    {
        icon: Database,
        title: "Dataset balanceado",
        value: "6000 imagenes",
        detail:
            "Se organizaron 1000 imagenes por clase para evitar que el modelo aprendiera sesgos por desbalance.",
    },
    {
        icon: GitBranch,
        title: "Division estratificada",
        value: "70 / 20 / 10",
        detail:
            "El conjunto se separo en entrenamiento, validacion y prueba manteniendo representacion equivalente por clase.",
    },
    {
        icon: ImageIcon,
        title: "Conversion visual",
        value: "TIFF a RGB/JPG",
        detail:
            "Las imagenes multibanda o en escala de grises se adaptaron a tres canales para alimentar la CNN de forma consistente.",
    },
    {
        icon: Layers3,
        title: "Clases del problema",
        value: "6 categorias",
        detail:
            "Agua, bosque, deforestacion, mineria ilegal, cultivos ilicitos y pistas de aterrizaje.",
    },
];

function PipelineSection() {
    return (
        <section
            id="pipeline"
            className="
                relative
                py-32
                px-6
                bg-[#020617]
                overflow-hidden
            "
        >
            <div
                className="
                    absolute
                    top-[-120px]
                    left-1/2
                    h-[360px]
                    w-[720px]
                    -translate-x-1/2
                    rounded-full
                    bg-emerald-500/10
                    blur-[120px]
                "
            />

            <div
                className="
                    relative
                    z-10
                    max-w-7xl
                    mx-auto
                "
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="
                        text-center
                        mb-20
                    "
                >
                    <p
                        className="
                            text-emerald-400
                            uppercase
                            tracking-[0.3em]
                            mb-6
                            font-medium
                        "
                    >
                        Pipeline del sistema
                    </p>

                    <h2
                        className="
                            text-4xl
                            md:text-6xl
                            font-bold
                            text-white
                            mb-8
                            leading-tight
                        "
                    >
                        De imagen satelital a
                        <span className="text-emerald-400"> alerta ambiental</span>
                    </h2>

                    <p
                        className="
                            text-slate-400
                            text-lg
                            max-w-3xl
                            mx-auto
                            leading-relaxed
                        "
                    >
                        El proyecto no se limita a clasificar imagenes: conecta datos,
                        preprocesamiento, inferencia y explicacion del resultado para que
                        la salida del modelo aporte valor dentro del monitoreo ambiental.
                    </p>
                </motion.div>

                <div
                    className="
                        grid
                        lg:grid-cols-5
                        gap-5
                        mb-20
                    "
                >
                    {pipelineSteps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, delay: index * 0.08 },
                                }}
                                whileHover={{
                                    y: -6,
                                    transition: { duration: 0.18, ease: "easeOut" },
                                }}
                                transition={{ duration: 0.18, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="
                                    relative
                                    bg-white/5
                                    border
                                    border-white/10
                                    rounded-3xl
                                    p-6
                                    backdrop-blur-xl
                                    interactive-card
                                "
                            >
                                {index < pipelineSteps.length - 1 && (
                                    <div
                                        className="
                                            hidden
                                            lg:flex
                                            absolute
                                            top-8
                                            -right-5
                                            z-20
                                            w-10
                                            h-10
                                            rounded-full
                                            bg-[#020617]
                                            border
                                            border-white/10
                                            items-center
                                            justify-center
                                        "
                                    >
                                        <ArrowRight
                                            size={20}
                                            className="text-emerald-400"
                                        />
                                    </div>
                                )}

                                <div
                                    className="
                                        w-14
                                        h-14
                                        rounded-2xl
                                        bg-emerald-500/10
                                        flex
                                        items-center
                                        justify-center
                                        mb-6
                                    "
                                >
                                    <Icon size={28} className="text-emerald-400" />
                                </div>

                                <p className="text-slate-500 font-semibold mb-2">
                                    Paso {index + 1}
                                </p>

                                <h3 className="text-white text-2xl font-bold mb-4">
                                    {step.title}
                                </h3>

                                <p className="text-slate-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="
                        bg-white/5
                        border
                        border-white/10
                        rounded-[40px]
                        p-8
                        md:p-12
                        backdrop-blur-xl
                    "
                >
                    <div
                        className="
                            grid
                            lg:grid-cols-[0.8fr_1.2fr]
                            gap-10
                            items-start
                        "
                    >
                        <div>
                            <div
                                className="
                                    w-16
                                    h-16
                                    rounded-2xl
                                    bg-cyan-500/10
                                    flex
                                    items-center
                                    justify-center
                                    mb-8
                                "
                            >
                                <ClipboardCheck
                                    size={34}
                                    className="text-cyan-400"
                                />
                            </div>

                            <p
                                className="
                                    text-cyan-400
                                    uppercase
                                    tracking-[0.25em]
                                    mb-5
                                    font-medium
                                "
                            >
                                Preparacion de datos
                            </p>

                            <h3
                                className="
                                    text-3xl
                                    md:text-5xl
                                    text-white
                                    font-bold
                                    leading-tight
                                    mb-6
                                "
                            >
                                Base experimental alineada con el problema
                            </h3>

                            <p className="text-slate-400 text-lg leading-relaxed">
                                El dataset se estructuro para representar coberturas y
                                alteraciones relevantes en imagenes satelitales de la Amazonia.
                                Esta preparacion soporta la trazabilidad del entrenamiento y
                                permite evaluar el modelo sobre clases comparables.
                            </p>
                        </div>

                        <div
                            className="
                                grid
                                sm:grid-cols-2
                                gap-5
                            "
                        >
                            {dataCards.map((card) => {
                                const Icon = card.icon;

                                return (
                                    <div
                                        key={card.title}
                                        className="
                                            bg-black/20
                                            border
                                            border-white/10
                                            rounded-2xl
                                            p-6
                                            interactive-card
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-4
                                                mb-5
                                            "
                                        >
                                            <div
                                                className="
                                                    w-12
                                                    h-12
                                                    rounded-xl
                                                    bg-cyan-500/10
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                                            >
                                                <Icon
                                                    size={24}
                                                    className="text-cyan-400"
                                                />
                                            </div>

                                            <h4 className="text-white text-xl font-semibold">
                                                {card.title}
                                            </h4>
                                        </div>

                                        <p className="text-emerald-400 text-3xl font-bold mb-3">
                                            {card.value}
                                        </p>

                                        <p className="text-slate-400 leading-relaxed">
                                            {card.detail}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default PipelineSection;
