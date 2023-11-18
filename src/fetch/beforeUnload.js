import { useState, useEffect } from 'react';

const useBeforeUnload = (formModified) => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (formModified) {
        const message = "¿Estás seguro de abandonar la página? Se perderán los cambios no guardados.";
        event.returnValue = message; 
        return message; 
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [formModified]);
};

export default useBeforeUnload;