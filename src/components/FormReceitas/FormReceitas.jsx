// FormReceitas.js
import React from 'react';
import { Button } from '../Button/Button';
import style from './FormReceitas.module.css'

const FormReceitas = ({ novaReceita, setNovaReceita, handleSubmit, cancelarAdicao }) => {
  return (
    <form onSubmit={handleSubmit} className={style.formReceitas}>
      <input className={style.instructions}
        type="text"
        value={novaReceita.strMeal}
        onChange={(e) => setNovaReceita({ ...novaReceita, strMeal: e.target.value })}
        placeholder="Nome da Receita"
      />
      <input
        type="text"
        value={novaReceita.strMealThumb}
        onChange={(e) => setNovaReceita({ ...novaReceita, strMealThumb: e.target.value })}
        placeholder="URL da Imagem"
      />
      <textarea className={style.instructions}
        value={novaReceita.strInstructions}
        onChange={(e) => setNovaReceita({ ...novaReceita, strInstructions: e.target.value })}
        placeholder="Instruções"
      />
      <Button type="submit">Adicionar Receita</Button>
      <Button type="button" onClick={cancelarAdicao}>Cancelar</Button>
    </form>
  );
};

export { FormReceitas };

