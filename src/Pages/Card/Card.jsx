import React from "react";
import { NavLink } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Card = ({ data }) => {
    const { image, serviceName, rating, price } = data;

    const x = useMotionValue(150);
    const y = useMotionValue(150);

    const rotateX = useTransform(y, [0, 300], [15, -15]);
    const rotateY = useTransform(x, [0, 300], [-15, 15]);

    const handleMove = (clientX, clientY, rect) => {
        const offsetX = clientX - rect.left;
        const offsetY = clientY - rect.top;
        x.set(offsetX);
        y.set(offsetY);
    };

    const handleMouseMove = (e) => handleMove(e.clientX, e.clientY, e.currentTarget.getBoundingClientRect());
    const handleTouchMove = (e) => {
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY, e.currentTarget.getBoundingClientRect());
    };

    const resetAnimation = () => {
        x.set(150);
        y.set(150);
    };

    return (
        <motion.div
            className="group relative lg:w-[350px] xl:w-[400px] sm:w-[340px] w-[560px] mx-auto rounded-2xl overflow-hidden shadow-lg cursor-pointer "
            style={{ rotateX, rotateY, perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetAnimation}
            onTouchMove={handleTouchMove}
            onTouchEnd={resetAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
            <motion.img
                src={image}
                alt={serviceName}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
            />

            <motion.div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></motion.div>

            <motion.div
                className="absolute bottom-0 left-0 w-full p-5 text-white"
                initial={{ y: 50, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                whileTap={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold drop-shadow-md">{serviceName}</h2>

                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-1">⭐ <span className="font-medium">{rating}</span></div>
                    <span className="bg-orange-500 px-3 py-1 rounded-full text-sm font-semibold shadow-md">${price}</span>
                </div>

                <NavLink to="/service">
                    <motion.button
                        className="w-full mt-4 bg-white/20 hover:bg-orange-500 backdrop-blur-md text-white font-semibold py-2 rounded-xl shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Service
                    </motion.button>
                </NavLink>
            </motion.div>
        </motion.div>
    );
};

export default Card;
