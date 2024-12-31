import { motion } from "framer-motion";
console.log('FloatingShape is loading...');
// Define props with default values to prevent crashes
const FloatingShape = ({ color = "bg-blue-500", size = "w-32 h-32", top = "0%", left = "0%", delay = 0 }) => {
	return (
		<motion.div
			className={`absolute rounded-full ${color} ${size} opacity-20 blur-xl`}
			style={{ top, left }}
			animate={{
				y: ["0%", "100%", "0%"], 
				x: ["0%", "100%", "0%"],
				rotate: [0, 360],
			}}
			transition={{
				duration: 20,
				ease: "linear",
				repeat: Infinity,
				delay, // Ensure delay is properly factored
			}}
			aria-hidden='true'
			></motion.div>
	);
};


export default FloatingShape;