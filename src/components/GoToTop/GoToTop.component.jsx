import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoToTop = () => {
	// Usa useLocation per ottenere l'oggetto di posizione corrente (che include la route corrente)
	const routePath = useLocation();

	// Funzione per scrollare la pagina all'inizio
	const onTop = () => {
		window.scrollTo(0, 0); 
	}

	// useEffect viene eseguito ogni volta che la route cambia
	useEffect(() => {
		onTop(); 
	}, [routePath]); 

	// Questo componente non rende nulla, quindi restituisce null
	return null;
}

export default GoToTop; 
