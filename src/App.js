import './App.css';
import Header from './componentes/Header/index';
import Main from './componentes/Main/index';



function App() {
  return (
    <div>
      <Header menu = "Documentos" menu2 = "Inscrição em Disciplinas" menu3 = "Grades" menu4 = "Dados Pessoais" menu5 = "Pesquisa Avaliativa" menu6 = "Requerimentos" menu7 = "Ajuda"/>
      <Main name = "Rosana Borges" course = "Engenharia de Controle e Automação" period = "1" level = "Graduação" credits = "11"/>
    </div>
  );
}

export default App;
