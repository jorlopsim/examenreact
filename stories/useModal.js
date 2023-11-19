import { useState } from "react";
/*import { Primary } from "./modal.stories";*/

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => 
  { setIsOpen(true);
    /*const modal = document.getElementById("ventanaModal");
    modal.style.display = "block";*/
    const documento = document.getElementById("fondoPantalla");
    documento.style.display = "block";
  };

  const closeModal = () => 
  { setIsOpen(false);
    /*const modal = document.getElementById("ventanaModal");
    modal.style.display = "none";*/
    const documento = document.getElementById("fondoPantalla");
    documento.style.display = "none";
  };

  
  return [isOpen, openModal, closeModal];
};