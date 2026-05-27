import { useState } from "react";

import axios from "axios";

import { motion } from "framer-motion";

import {
    Upload,
    ImageIcon,
    ScanSearch,
    CheckCircle2
} from "lucide-react";


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
                "http://127.0.0.1:8000/predict",
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

                        AI Demonstration

                    </p>


                    <h2 className="
                        text-4xl
                        md:text-6xl
                        font-bold
                        text-white
                        mb-8
                        leading-tight
                    ">

                        Analyze Satellite Images

                        <span className="text-emerald-400">

                            {" "}Using AI

                        </span>

                    </h2>


                    <p className="
                        text-slate-400
                        text-lg
                        max-w-3xl
                        mx-auto
                        leading-relaxed
                    ">

                        Upload a satellite image and let the deep learning
                        model identify environmental patterns associated
                        with deforestation, illegal mining,
                        illicit crops or clandestine airstrips.

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
                        ">

                            {
                                preview ? (

                                    <img
                                        src={preview}
                                        alt="preview"
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

                                            Upload Image

                                        </h3>


                                        <p className="
                                            text-slate-400
                                            max-w-md
                                            leading-relaxed
                                        ">

                                            Drag and drop or select a satellite
                                            image to analyze environmental
                                            patterns using artificial intelligence.

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

                            Analyze Image

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

                                            AI Processing Image

                                        </p>

                                    </div>


                                    <p className="
                                        text-slate-400
                                        leading-relaxed
                                    ">

                                        The deep learning model is analyzing
                                        satellite patterns and detecting
                                        potential environmental crimes.

                                    </p>

                                </motion.div>
                            )
                        }


                        {/* RESULTS */}

                        {
                            result && (

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

                                                Detection Result

                                            </p>

                                            <h3 className="
                                                text-white
                                                text-3xl
                                                font-bold
                                            ">

                                                {result.class}

                                            </h3>

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

                                                Confidence

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
                            )
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

                                    Supported Classes

                                </h3>

                            </div>


                            <div className="
                                flex
                                flex-wrap
                                gap-3
                            ">

                                {
                                    [
                                        "Forest",
                                        "Water",
                                        "Deforestation",
                                        "Illegal Mining",
                                        "Illicit Crops",
                                        "Airstrips"
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