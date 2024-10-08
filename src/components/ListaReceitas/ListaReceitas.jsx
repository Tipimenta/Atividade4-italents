import { useState, useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import { CardReceitas } from '../CardReceitas/CardReceitas';
import { AdicionarReceita } from '../AdicionarReceita/AdicionarReceita';
import style from './ListaReceitas.module.css';

const ListaReceitas = () => {
  const [receitas, setReceitas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const buscarReceitas = async () => {
    try {
      const resposta = await fetch('http://localhost:5000/receitas');
      const dados = await resposta.json();
      setReceitas(dados);
    } catch (erro) {
      console.error('Erro ao buscar receitas:', erro);
    } finally {
      setCarregando(false);
    }
  };


  const adicionarReceita = async (novaReceita) => {
    try {
    
      await fetch('http://localhost:5000/receitas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaReceita),
      });

      setReceitas((prevReceitas) => [...prevReceitas, novaReceita]);
    } catch (erro) {
      console.error('Erro ao adicionar receita:', erro);
    }
  };

  const removerReceita = async (id) => {
    try {
      console.log(id)
  
      await fetch(`http://localhost:5000/receitas/${id}`, {
        method: 'DELETE',
      });
      
    
      setReceitas((receitasAtuais) => receitasAtuais.filter((receita) => receita.id !== id));
    } catch (erro) {
      console.error('Erro ao remover a receita:', erro);
    }
  };
  
  const editarReceita = async (id, receitaAtualizada) => {
    try {
    
      await fetch(`http://localhost:5000/receitas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(receitaAtualizada),
      });

      setReceitas((prevReceitas) =>
        prevReceitas.map((receita) => (receita.id === id ? receitaAtualizada : receita))
      );
    } catch (erro) {
      console.error('Erro ao editar receita:', erro);
    }
  };

  useEffect(() => {
    buscarReceitas();
  }, []);

  return (
    <div className={style.lista}>
    <AdicionarReceita adicionarReceita={adicionarReceita} /> 
    {carregando ? (
      <Loader />
    ) : (
      <div className="lista-receitas">
        {receitas.map((receita, index) => (
          <CardReceitas
            key={receita.id || index} 
            receita={receita}
            removerReceita={removerReceita}
            editarReceita={editarReceita} 
          />
        ))}
      </div>
    )}
  </div>
  );
};

export { ListaReceitas };
