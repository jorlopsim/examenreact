import React, { useState } from 'react';
import { useModal } from './useModal';
/*import React from 'react';*/
import './modal.css';


export const Modal=({primary,backgroundColor,titulo,button1,button2})=>{
  const [isOpenModal, openModal, closeModal] = useModal(true);
  const handleModalContainerClick = (e) => e.stopPropagation();
  if (primary===true)
      return (  
  <html lang="en">
    <body>   
    <button id="abrirModal" onClick={openModal}>Abrir Modal</button>   
    <div id="fondoPantalla" style={backgroundColor && { backgroundColor }} className='fondo_transparente' onClick={closeModal}> 
         <div id="ventanaModal" className='modal' onClick={handleModalContainerClick} >
          <div className="modal_cerrar">
              <span onClick={closeModal}>x</span>
          </div>
          <div className="modal_titulo">{titulo}</div>
          <div className="modal_mensaje">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, nam? Minus nihil temporibus, minima reprehenderit, rem explicabo earum nemo debitis, maxime deserunt quidem. Quia odit quae voluptate nobis sit beatae!</p>
            </div>
             <div className="modal_botones">
              <button className="boton" onClick={closeModal}>{button1}</button>
              <button className="boton" onClick={closeModal}>{button2}</button>
             </div>
             </div>
        </div>      
     </body>               
  </html> 
          );
  };





