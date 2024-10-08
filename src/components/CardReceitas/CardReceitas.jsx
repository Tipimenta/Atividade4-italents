import React, { useState } from 'react';
import { Button } from '../Button/Button';
import style from './CardReceitas.module.css'

const CardReceitas = ({ receita, removerReceita, editarReceita }) => {
  const [modoEdicao, setModoEdicao] = useState({
    title: false,
    instructions: false,
    image: false,
  });
  const [novaReceita, setNovaReceita] = useState(receita);

  const handleEditar = (campo) => {
    if (campo === 'title') {
      editarReceita(receita.id, novaReceita);
      setModoEdicao({ ...modoEdicao, title: false });
    } else if (campo === 'instructions') {
      editarReceita(receita.id, novaReceita);
      setModoEdicao({ ...modoEdicao, instructions: false });
    } else if (campo === 'image') {
      editarReceita(receita.id, novaReceita);
      setModoEdicao({ ...modoEdicao, image: false });
    }
  };

  return (
   
    <div className={style.cardReceitas}>
        
      {modoEdicao.title ? (
        <input
          type="text"
          value={novaReceita.strMeal}
          onChange={(e) => setNovaReceita({ ...novaReceita, strMeal: e.target.value })}
          onBlur={() => handleEditar('title')}
          autoFocus
        />
      ) : (
        <h3 onClick={() => setModoEdicao({ ...modoEdicao, title: true })}>{novaReceita.strMeal}</h3>
      )}
      <div className={style.conteudo}>
      {modoEdicao.image ? (
        <input
          type="text"
          value={novaReceita.strMealThumb}
          onChange={(e) => setNovaReceita({ ...novaReceita, strMealThumb: e.target.value })}
          onBlur={() => handleEditar('image')}
          autoFocus
        />
      ) : (
        <img
          src={novaReceita.strMealThumb}
          alt={novaReceita.strMeal}
          onClick={() => setModoEdicao({ ...modoEdicao, image: true })}
          style={{ cursor: 'pointer' }} 
        />
        
      )}

      {modoEdicao.instructions ? (
        <textarea
          value={novaReceita.strInstructions}
          onChange={(e) => setNovaReceita({ ...novaReceita, strInstructions: e.target.value })}
          onBlur={() => handleEditar('instructions')}
          autoFocus
        />
      ) : (
        <p onClick={() => setModoEdicao({ ...modoEdicao, instructions: true })}>
          {novaReceita.strInstructions}
        </p>
      )}
      </div>
      <Button onClick={() => removerReceita(receita.id)}>Remover</Button>

    </div>
  );
};

export { CardReceitas };
