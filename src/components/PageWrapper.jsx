import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}   // Start from bottom
      animate={{ opacity: 1, y: 0 }}     // Animate to normal position
      exit={{ opacity: 0, y: -100 }}     // Exit upwards
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
