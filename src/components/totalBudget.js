import React from 'react';
import { CtBudgetSubmited} from '../styles/stylesTotalBudget';

export default function TotalBudget({ name, client, cost, web, pages, lang, seo, google }) {

  let date = new Date();
  let dateShort = date.toLocaleDateString();

  return (
        <CtBudgetSubmited>
            <p>Fecha: {dateShort}</p>      
            <p>{name}</p>
            <p>{client}</p>       
            <h3>Servicios:</h3>
            <p>{web}</p>
            <p>{pages ? `nº páginas: ${pages}` : ''}</p>
            <p>{lang ? `nº lenguajes: ${lang}` : ''}</p>
            <p>{seo}</p>
            <p>{google}</p>
            <h3>Total: {cost}€</h3>
        </CtBudgetSubmited>  
  )
}
