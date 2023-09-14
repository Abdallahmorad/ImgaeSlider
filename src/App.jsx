import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Images from "./components/Images";
import "./App.css";

function App() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  return (
    <motion.div ref={carouselRef}  whileTap={{cursor: 'grabbing'}}className="carousel">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {Images.map((image) => (
          <motion.div className="item" key={self.crypto.randomUUID()}>
            <img src={image} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default App;
