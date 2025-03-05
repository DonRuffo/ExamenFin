import { motion } from "framer-motion";

export default function RuedaCarga() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-900">
      <motion.div
        className="w-16 h-16 border-4 border-transparent border-t-yellow-400 rounded-full"
        initial={{ filter: "blur(10px)", opacity: 0.5 }}
        animate={{ rotate: 360, filter: ["blur(10px)", "blur(0px)", "blur(10px)"], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />
    </div>
  );
}
