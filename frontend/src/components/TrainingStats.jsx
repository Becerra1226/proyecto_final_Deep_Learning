import { motion } from "framer-motion";
import { useState } from "react";
import {
    BarChart3,
    BrainCircuit,
    CheckCircle2,
    Database,
    Layers3,
    LineChart,
    Target,
    X,
} from "lucide-react";

import accuracyChart from "../Content/Training_Validation_Accuracy.png";
import lossChart from "../Content/Training_Validation_Loss.png";
import confusionMatrix from "../Content/Confusion_Matrix.png";

const metrics = [
    {
        label: "Accuracy en test",
        value: "79.00%",
        detail: "Evaluado sobre 600 imagenes balanceadas.",
        icon: Target,
        accent: "text-emerald-400",
    },
    {
        label: "Macro F1-score",
        value: "0.7885",
        detail: "Promedio equilibrado entre las seis clases.",
        icon: CheckCircle2,
        accent: "text-cyan-400",
    },
    {
        label: "Dataset total",
        value: "6000",
        detail: "1000 imagenes por clase ambiental.",
        icon: Database,
        accent: "text-emerald-400",
    },
    {
        label: "Arquitectura CNN",
        value: "4 bloques",
        detail: "Conv2D, BatchNorm, pooling adaptativo y dropout.",
        icon: Layers3,
        accent: "text-cyan-400",
    },
];

const charts = [
    {
        title: "Evolucion de la perdida",
        description:
            "La curva compara la perdida de entrenamiento contra la perdida de validacion para detectar convergencia y sobreajuste.",
        image: lossChart,
        alt: "Grafica de perdida de entrenamiento y validacion",
        icon: LineChart,
    },
    {
        title: "Evolucion del accuracy",
        description:
            "La precision por epoca muestra el aprendizaje progresivo del modelo en train y validacion.",
        image: accuracyChart,
        alt: "Grafica de accuracy de entrenamiento y validacion",
        icon: BarChart3,
    },
    {
        title: "Matriz de confusion",
        description:
            "La evaluacion final evidencia en que clases el modelo acierta con mayor solidez y donde aparecen confusiones.",
        image: confusionMatrix,
        alt: "Matriz de confusion del modelo CNN",
        icon: Target,
    },
];

const classResults = [
    { label: "forest", f1: "0.9608" },
    { label: "illegal_mining", f1: "0.8641" },
    { label: "illicit_crops_PCCA", f1: "0.8627" },
    { label: "water", f1: "0.7168" },
    { label: "deforestation", f1: "0.6762" },
    { label: "airstrips", f1: "0.6502" },
];

function TrainingStats() {
    const [selectedChart, setSelectedChart] = useState(null);

    return (
        <section
            id="results"
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
                    inset-x-0
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/15
                    to-transparent
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
                            text-cyan-400
                            uppercase
                            tracking-[0.3em]
                            mb-6
                            font-medium
                        "
                    >
                        Resultados del entrenamiento
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
                        Evidencia del modelo
                        <span className="text-cyan-400"> CNN </span>
                        entrenado
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
                        El notebook de entrenamiento preparo un conjunto balanceado de seis
                        clases, entreno una CNN regularizada en PyTorch y evaluo su rendimiento
                        final con curvas de aprendizaje, matriz de confusion y metricas por
                        clase.
                    </p>
                </motion.div>

                <div
                    className="
                        grid
                        sm:grid-cols-2
                        xl:grid-cols-4
                        gap-6
                        mb-16
                    "
                >
                    {metrics.map((metric, index) => {
                        const Icon = metric.icon;

                        return (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, y: 30 }}
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
                                    bg-white/5
                                    border
                                    border-white/10
                                    rounded-3xl
                                    p-7
                                    backdrop-blur-xl
                                    interactive-card
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                        mb-6
                                    "
                                >
                                    <div
                                        className="
                                            w-14
                                            h-14
                                            rounded-2xl
                                            bg-white/5
                                            border
                                            border-white/10
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >
                                        <Icon size={28} className={metric.accent} />
                                    </div>

                                    <p className="text-slate-400 font-medium">
                                        {metric.label}
                                    </p>
                                </div>

                                <h3
                                    className={`
                                        text-4xl
                                        font-bold
                                        mb-3
                                        ${metric.accent}
                                    `}
                                >
                                    {metric.value}
                                </h3>

                                <p className="text-slate-400 leading-relaxed">
                                    {metric.detail}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div
                    className="
                        grid
                        lg:grid-cols-[1fr_0.85fr]
                        gap-10
                        items-start
                        mb-16
                    "
                >
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="
                            bg-white/5
                            border
                            border-white/10
                            rounded-[40px]
                            p-8
                            md:p-10
                            backdrop-blur-xl
                        "
                    >
                        <div
                            className="
                                flex
                                items-center
                                gap-4
                                mb-8
                            "
                        >
                            <div
                                className="
                                    w-16
                                    h-16
                                    rounded-2xl
                                    bg-cyan-500/10
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <BrainCircuit size={34} className="text-cyan-400" />
                            </div>

                            <div>
                                <p className="text-slate-400 mb-1">
                                    Configuracion experimental
                                </p>
                                <h3 className="text-white text-3xl font-bold">
                                    Pipeline de entrenamiento
                                </h3>
                            </div>
                        </div>

                        <div
                            className="
                                grid
                                md:grid-cols-3
                                gap-5
                            "
                        >
                            {[
                                ["Split", "70% train / 20% val / 10% test"],
                                ["Entrada", "Imagen RGB normalizada a 224x224"],
                                ["Optimizacion", "Adam, CrossEntropyLoss y weight decay"],
                            ].map(([label, value]) => (
                                <div
                                    key={label}
                                    className="
                                        bg-black/20
                                        border
                                        border-white/10
                                        rounded-2xl
                                        p-5
                                        interactive-card
                                    "
                                >
                                    <p className="text-cyan-400 font-semibold mb-2">
                                        {label}
                                    </p>
                                    <p className="text-slate-300 leading-relaxed">
                                        {value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.8 },
                        }}
                        whileHover={{
                            y: -6,
                            transition: { duration: 0.18, ease: "easeOut" },
                        }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="
                            bg-black/20
                            border
                            border-white/10
                            rounded-[40px]
                            p-8
                            interactive-card
                        "
                    >
                        <h3 className="text-white text-3xl font-bold mb-6">
                            F1-score por clase
                        </h3>

                        <div className="grid gap-4">
                            {classResults.map((item) => (
                                <div key={item.label}>
                                    <div className="flex justify-between gap-4 mb-2">
                                        <p className="text-slate-300">{item.label}</p>
                                        <p className="text-emerald-400 font-semibold">
                                            {item.f1}
                                        </p>
                                    </div>

                                    <div
                                        className="
                                            h-3
                                            bg-white/5
                                            rounded-full
                                            overflow-hidden
                                        "
                                    >
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{
                                                width: `${Number(item.f1) * 100}%`,
                                            }}
                                            transition={{ duration: 0.9 }}
                                            viewport={{ once: true }}
                                            className="
                                                h-full
                                                bg-gradient-to-r
                                                from-emerald-400
                                                to-cyan-400
                                            "
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div
                    className="
                        grid
                        lg:grid-cols-3
                        gap-8
                    "
                >
                    {charts.map((chart, index) => {
                        const Icon = chart.icon;

                        return (
                            <motion.button
                                key={chart.title}
                                type="button"
                                onClick={() => setSelectedChart(chart)}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.7, delay: index * 0.08 },
                                }}
                                whileHover={{
                                    y: -6,
                                    transition: { duration: 0.18, ease: "easeOut" },
                                }}
                                transition={{ duration: 0.18, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="
                                    text-left
                                    bg-white/5
                                    border
                                    border-white/10
                                    rounded-[32px]
                                    overflow-hidden
                                    backdrop-blur-xl
                                    cursor-zoom-in
                                    transition
                                    hover:border-cyan-400/40
                                    hover:bg-white/[0.07]
                                    interactive-card
                                "
                            >
                                <div
                                    className="
                                        aspect-[4/3]
                                        bg-white
                                        overflow-hidden
                                    "
                                >
                                    <img
                                        src={chart.image}
                                        alt={chart.alt}
                                        className="
                                            w-full
                                            h-full
                                            object-contain
                                        "
                                    />
                                </div>

                                <div className="p-7">
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                            mb-4
                                        "
                                    >
                                        <Icon size={24} className="text-cyan-400" />
                                        <h3 className="text-white text-2xl font-bold">
                                            {chart.title}
                                        </h3>
                                    </div>

                                    <p className="text-slate-400 leading-relaxed">
                                        {chart.description}
                                    </p>
                                </div>
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            {selectedChart && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="
                        fixed
                        inset-0
                        z-[80]
                        bg-[#020617]/90
                        backdrop-blur-xl
                        px-6
                        py-8
                        flex
                        items-center
                        justify-center
                    "
                    onClick={() => setSelectedChart(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="
                            relative
                            w-full
                            max-w-6xl
                            max-h-[90vh]
                            bg-white/5
                            border
                            border-white/10
                            rounded-[32px]
                            overflow-hidden
                            shadow-2xl
                        "
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                gap-6
                                px-6
                                py-5
                                border-b
                                border-white/10
                                bg-black/20
                            "
                        >
                            <div>
                                <p className="text-cyan-400 font-medium mb-1">
                                    Grafica ampliada
                                </p>
                                <h3 className="text-white text-2xl font-bold">
                                    {selectedChart.title}
                                </h3>
                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedChart(null)}
                                className="
                                    w-12
                                    h-12
                                    rounded-2xl
                                    bg-white/10
                                    border
                                    border-white/10
                                    flex
                                    items-center
                                    justify-center
                                    text-white
                                    hover:bg-white/15
                                    transition
                                "
                                aria-label="Cerrar grafica ampliada"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div
                            className="
                                bg-white
                                p-4
                                md:p-6
                                h-[calc(90vh-112px)]
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <img
                                src={selectedChart.image}
                                alt={selectedChart.alt}
                                className="
                                    max-w-full
                                    max-h-full
                                    w-auto
                                    h-auto
                                    object-contain
                                "
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}

export default TrainingStats;
