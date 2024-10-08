import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { FormReceitas } from '../FormReceitas/FormReceitas';

const AdicionarReceita = ({ adicionarReceita }) => {
  const [modoManual, setModoManual] = useState(false);
  const [novaReceita, setNovaReceita] = useState({
    strMeal: '',
    strMealThumb: '',
    strInstructions: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (novaReceita.strMeal && novaReceita.strMealThumb && novaReceita.strInstructions) {
      const receitaComId = {
        ...novaReceita,
        idMeal: Date.now().toString(), 
      };
      adicionarReceita(receitaComId);
      setNovaReceita({
        strMeal: '',
        strMealThumb: '',
        strInstructions: '',
      });
      setModoManual(false)
    }
  };
  

  const adicionarAleatoria = async () => {
    try {
      const resposta = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const dados = await resposta.json();
      const receitaAleatoria = dados.meals[0];
  
  
      const receitaFormatada = {
        id: receitaAleatoria.idMeal || Date.now(), 
        strMeal: receitaAleatoria.strMeal,
        strMealThumb: receitaAleatoria.strMealThumb,
        strInstructions: receitaAleatoria.strInstructions,
      };
  
      adicionarReceita(receitaFormatada);
    } catch (erro) {
      console.error('Erro ao buscar receita aleatória:', erro);
    }
  };

  const cancelarAdicao = () => {
    setModoManual(false);
    setNovaReceita({
      strMeal: '',
      strMealThumb: '',
      strInstructions: '',
    });
  };

  return (
    <div>
      <Button onClick={() => setModoManual(!modoManual)}>
        {modoManual ? 'Adicionar Receita Aleatória' : 'Adicionar Manualmente'}
      </Button>
      {!modoManual && (
        <Button onClick={adicionarAleatoria}>Adicionar Receita Aleatória</Button>
      )}

      {modoManual && (
        <FormReceitas
          novaReceita={novaReceita}
          setNovaReceita={setNovaReceita}
          handleSubmit={handleSubmit}
          cancelarAdicao={cancelarAdicao}
        />
      )}

      
    </div>
  );
};

export { AdicionarReceita };
