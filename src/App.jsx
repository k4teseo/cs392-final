import Overlay from "./components/Overlay.jsx"
import Book from "./components/Book.jsx";
import { useState } from "react";
function App() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  return (
    <>
        <button onClick={() => setIsOverlayOpen(!isOverlayOpen)}><Book /></button>
      <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(!isOverlayOpen)}>

      </Overlay>
    </>
  )
}

export default App
