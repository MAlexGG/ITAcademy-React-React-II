import React from 'react';
import { Link } from 'react-router-dom';
import { BtBudget, CtHome } from '../styles/stylesHome';

export default function Home() {

  return (
    <>
        <CtHome>
            <h1>BIENVENID@</h1> 
              <p>Esta es una página que te permite calcular un presupuesto para la elaboración de una página web con servicios complementarios.</p>
              <Link to='/budget'><BtBudget>ir a presupuesto</BtBudget></Link>
        </CtHome>
    </>
  )
}
