import React from 'react';
import { CtBudgetSubmited} from '../styles/stylesTotalBudget';

export default function TotalBudget({ item }) {

  let date = new Date();
  let dateShort = date.toLocaleDateString();

  return (
    <CtBudgetSubmited>
      <p>Fecha: {dateShort}</p>      
      <p>{item.name}</p>
      <p>{item.Reactclient}</p>       
      <h3>Servicios:</h3>
      <p>{item.web}</p>
      <p>{item.pages ? `nº páginas: ${item.pages}` : ''}</p>
      <p>{item.lang ? `nº lenguajes: ${item.lang}` : ''}</p>
      <p>{item.seo}</p>
      <p>{item.google}</p>
      <h3>Total: {item.cost}€</h3>
    </CtBudgetSubmited>  
  )
}
