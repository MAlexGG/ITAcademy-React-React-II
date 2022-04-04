import React from 'react';
import { CtPopUp, Popup } from '../styles/styled';

export default function PopUp({isPageVisible, isLangVisible, setIsPageVisible, setIsLangVisible}) {
    return (
        <>
            <CtPopUp isVisible={isPageVisible} onClick={() => setIsPageVisible(false)}>
                <Popup>En este componente debe indicar el número de páginas que tendrá su sitio web</Popup> 
            </CtPopUp>
            <CtPopUp isVisible={isLangVisible} onClick={() => setIsLangVisible(false)}>
                <Popup>En este componente debe indicar el número de idiomas que tendrá su sitio web</Popup>
            </CtPopUp>
        </>    
    )
}
