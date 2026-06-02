import { motion } from "framer-motion";
import {
    AlertTriangle,
    CheckCircle2,
    Eye,
    Lightbulb,
    Radar,
    TrendingUp,
} from "lucide-react";

const findings = [
    {
        icon: CheckCircle2,
        title: "Fortalezas observadas",
        items: [
            "El modelo reconoce con mayor solidez coberturas visualmente marcadas como bosque, mineria ilegal y cultivos ilicitos.",
            "El dataset balanceado permite interpretar las metricas globales sin que una clase dominante oculte errores.",
            "La salida se integra en una interfaz funcional con confianza y explicacion contextual.",
        ],
        accent: "text-emerald-400",
        bg: "bg-emerald-500/10",
    },
    {
        icon: AlertTriangle,
        title: "Limitaciones",
        items: [
            "Algunas clases pueden compartir patrones visuales similares, especialmente zonas despejadas, agua y superficies intervenidas.",
            "La prediccion depende de la calidad de la imagen, resolucion espacial, nubosidad y encuadre de la escena.",
            "El resultado es una alerta de apoyo y no una validacion oficial del evento ambiental.",
        ],
        accent: "text-amber-300",
        bg: "bg-amber-500/10",
    },
    {
        icon: Lightbulb,
        title: "Mejoras futuras",
        items: [
            "Agregar aumentacion de datos y validacion con imagenes de diferentes sensores o regiones.",
            "Guardar historico de predicciones para comparar cambios temporales por zona.",
            "Incorporar mapas, coordenadas o capas geograficas para priorizar inspecciones.",
        ],
        accent: "text-cyan-400",
        bg: "bg-cyan-500/10",
    },
];

const classInsights = [
    {
        label: "forest",
        value: "0.9608 F1",
        note: "Clase mas estable: la textura boscosa continua parece diferenciarse bien del resto.",
    },
    {
        label: "illegal_mining",
        value: "0.8641 F1",
        note: "Buen rendimiento por patrones de suelo expuesto y alteracion espacial marcada.",
    },
    {
        label: "illicit_crops_PCCA",
        value: "0.8627 F1",
        note: "Resultado fuerte, aunque puede requerir validacion adicional por similitud con otras coberturas agricolas.",
    },
    {
        label: "airstrips / deforestation / water",
        value: "Zona de mejora",
        note: "Estas clases muestran mayor riesgo de confusion por formas despejadas, cambios de color o bordes compartidos.",
    },
];

function CriticalAnalysis() {
    return (
        <section
            id="analysis"
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
                    bottom-[-140px]
                    right-[-120px]
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-cyan-500/10
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
                        Analisis critico
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
                        Interpretar resultados antes de
                        <span className="text-emerald-400"> tomar decisiones</span>
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
                        Las metricas del modelo indican un rendimiento prometedor, pero el
                        sistema debe leerse como una herramienta de priorizacion. La salida
                        apoya el analisis ambiental y requiere verificacion cuando se use en
                        escenarios reales.
                    </p>
                </motion.div>

                <div
                    className="
                        grid
                        lg:grid-cols-3
                        gap-8
                        mb-16
                    "
                >
                    {findings.map((finding, index) => {
                        const Icon = finding.icon;

                        return (
                            <motion.div
                                key={finding.title}
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
                                    bg-white/5
                                    border
                                    border-white/10
                                    rounded-[32px]
                                    p-8
                                    backdrop-blur-xl
                                    interactive-card
                                "
                            >
                                <div
                                    className={`
                                        w-16
                                        h-16
                                        rounded-2xl
                                        flex
                                        items-center
                                        justify-center
                                        mb-7
                                        ${finding.bg}
                                    `}
                                >
                                    <Icon size={32} className={finding.accent} />
                                </div>

                                <h3 className="text-white text-3xl font-bold mb-6">
                                    {finding.title}
                                </h3>

                                <div className="grid gap-4">
                                    {finding.items.map((item) => (
                                        <div
                                            key={item}
                                            className="
                                                flex
                                                gap-3
                                                items-start
                                            "
                                        >
                                            <span
                                                className={`
                                                    mt-2
                                                    h-2
                                                    w-2
                                                    rounded-full
                                                    shrink-0
                                                    ${finding.bg}
                                                `}
                                            />
                                            <p className="text-slate-400 leading-relaxed">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
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
                        grid
                        lg:grid-cols-[0.9fr_1.1fr]
                        gap-10
                        items-start
                    "
                >
                    <div
                        className="
                            bg-black/20
                            border
                            border-white/10
                            rounded-[40px]
                            p-8
                            md:p-10
                        "
                    >
                        <div
                            className="
                                w-16
                                h-16
                                rounded-2xl
                                bg-emerald-500/10
                                flex
                                items-center
                                justify-center
                                mb-8
                            "
                        >
                            <Radar size={34} className="text-emerald-400" />
                        </div>

                        <h3
                            className="
                                text-white
                                text-3xl
                                md:text-4xl
                                font-bold
                                leading-tight
                                mb-6
                            "
                        >
                            Que significa usar esta salida en la solucion
                        </h3>

                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            La prediccion convierte una imagen satelital en una senal de
                            monitoreo. En vez de revisar manualmente todas las escenas, el
                            sistema ayuda a priorizar imagenes con patrones de riesgo y a
                            explicar por que una clase fue marcada.
                        </p>

                        <div
                            className="
                                flex
                                items-center
                                gap-4
                                bg-white/5
                                border
                                border-white/10
                                rounded-2xl
                                p-5
                                interactive-card
                            "
                        >
                            <TrendingUp size={28} className="text-cyan-400" />
                            <p className="text-slate-300 leading-relaxed">
                                Accuracy global en test: <span className="text-white font-semibold">79.00%</span>.
                                Es una base funcional para demostracion, con margen claro de
                                mejora antes de despliegue operativo.
                            </p>
                        </div>
                    </div>

                    <div
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
                                    w-14
                                    h-14
                                    rounded-2xl
                                    bg-cyan-500/10
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <Eye size={30} className="text-cyan-400" />
                            </div>

                            <div>
                                <p className="text-slate-400 mb-1">
                                    Lectura por clase
                                </p>
                                <h3 className="text-white text-3xl font-bold">
                                    Donde acierta y donde puede fallar
                                </h3>
                            </div>
                        </div>

                        <div className="grid gap-5">
                            {classInsights.map((insight) => (
                                <div
                                    key={insight.label}
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
                                            flex-wrap
                                            items-center
                                            justify-between
                                            gap-3
                                            mb-3
                                        "
                                    >
                                        <h4 className="text-white text-xl font-semibold">
                                            {insight.label}
                                        </h4>
                                        <p className="text-emerald-400 font-bold">
                                            {insight.value}
                                        </p>
                                    </div>

                                    <p className="text-slate-400 leading-relaxed">
                                        {insight.note}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default CriticalAnalysis;
