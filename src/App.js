//Componentes x Props
//Props: São as propriedades dos componentes
//Componentes: São pedaços de códigos

import React from 'react';
import './App.css'

export default class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        boardgames : [
          {
              id:"1",
              nome:"Caverna: The Cave Farmers",
              imagemUrl:"https://cf.geekdo-images.com/rz22tqa5PCYvK9oDjIbvxg__imagepage/img/asnC8cfJxGNI0hSJkfCGKaRNd6w=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1790789.jpg",
              estilo:"Euro",
              jogadoresMin:"1",
              jogadoresMax:"7",
              tempoEstimado:"210",
              scoreBGG:"8.0",
              ano:"2013"
          },
          {
              id:"2",
              nome:"Legendary: A Marvel Deck Building Game",
              imagemUrl:"https://cf.geekdo-images.com/ZrRidumkzu62HuwKdgQpHA__imagepage/img/rEh0oKbvD45eDIZqPZOfx0UmfhA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1430769.jpg",
              estilo:"Deckbuilding",
              jogadoresMin:"1",
              jogadoresMax:"5",
              tempoEstimado:"60",
              scoreBGG:"7.6",
              ano:"2012"
          },
          {
              id:"3",
              nome:"Stone Age",
              imagemUrl:"https://cf.geekdo-images.com/elmZegVZ6gp4_5izUgxGQQ__imagepage/img/rC8YvN1x0vj-3ot8WK9YDzDxORU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1632539.jpg",
              estilo:"Euro",
              jogadoresMin:"2",
              jogadoresMax:"4",
              tempoEstimado:"90",
              scoreBGG:"7.6",
              ano:"2008"
          },
          {
              id:"4",
              nome:"Alhambra",
              imagemUrl:"https://cf.geekdo-images.com/OiqKsYDh7pqeRYKG__kMSw__imagepage/img/DgfcCRh3qcOFt2jQDfCQ99AaDNI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4893652.jpg",
              estilo:"Euro",
              jogadoresMin:"2",
              jogadoresMax:"6",
              tempoEstimado:"60",
              scoreBGG:"7.0",
              ano:"2003",
          },
          {
              id:"5",
              nome:"Five Tribes",
              imagemUrl:"https://cf.geekdo-images.com/dmo-WD6HZHVUPrbVHunaTw__imagepage/img/6Zrd6v5Z7gukQ-18akZ2hesGr_c=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2055255.jpg",
              estilo:"Euro",
              jogadoresMin:"1",
              jogadoresMax:"4",
              tempoEstimado:"80",
              scoreBGG:"7.8",
              ano:"2014"
          },
          {
              id:"6",
              nome:"Carcassonne",
              imagemUrl:"https://cf.geekdo-images.com/Z3upN53-fsVPUDimN9SpOA__imagepagezoom/img/J0mztz56j5-UZ4-V4_ekPDrCjeM=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic2337577.jpg",
              estilo:"Euro",
              jogadoresMin:"2",
              jogadoresMax:"5",
              tempoEstimado:"45",
              scoreBGG:"7.4",
              ano:"2000"
          },
          {
              id:"7",
              nome:"The Voyages of Marco Polo",
              imagemUrl:"https://cf.geekdo-images.com/n1G7_aWToLAAB7Mqt8iwyA__imagepage/img/Br9Czi58HojFg6EK5AIgsZh4lW0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2461346.png",
              estilo:"Euro",
              jogadoresMin:"2",
              jogadoresMax:"4",
              tempoEstimado:"100",
              scoreBGG:"7.9",
              ano:"2015"
          },
          {
              id:"8",
              nome:"Village",
              imagemUrl:"https://cf.geekdo-images.com/5FBIAvZi3Sw8dvmfwwJTjg__imagepage/img/FDa_unt0cz22oYwTc5L57JpkIlE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2760568.jpg",
              estilo:"Euro",
              jogadoresMin:"2",
              jogadoresMax:"4",
              tempoEstimado:"90",
              scoreBGG:"7.5",
              ano:"2011"
          },
          {
              id:"9",
              nome:"Sushi Go!",
              imagemUrl:"https://cf.geekdo-images.com/EPdI2KbLVtpGWLgL_eJLFg__imagepagezoom/img/vrTcARFssf6amFwSqs5PGgt5VQs=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic5885690.jpg",
              estilo:"Party",
              jogadoresMin:"2",
              jogadoresMax:"5",
              tempoEstimado:"15",
              scoreBGG:"7.0",
              ano:"2013"
          },
          {
              id:"10",
              nome:"Smallworld",
              imagemUrl:"https://cf.geekdo-images.com/aoPM07XzoceB-RydLh08zA__imagepage/img/lHmv0ddOrUvpiLcPeQbZdT5yCEA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic428828.jpg",
              estilo:"Strategia",
              jogadoresMin:"2",
              jogadoresMax:"5",
              tempoEstimado:"80",
              scoreBGG:"7.3",
              ano:"2009"
          },
          {
              id:"11",
              nome:"Le Havre",
              imagemUrl:"https://cf.geekdo-images.com/mU-YdL_-3Fm4RvNv-y5WJg__imagepage/img/7DqfKklmURAJpDV_CWHeYE2-sgE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3330230.jpg",
              estilo:"Strategia",
              jogadoresMin:"1",
              jogadoresMax:"5",
              tempoEstimado:"150",
              scoreBGG:"7.9",
              ano:"2008"  
          },
          {         
            id:"12",
            nome:"Karuba",
            imagemUrl:"https://cf.geekdo-images.com/hhV3JiYZUHEi_glLhC0v8w__imagepage/img/2VFdnIlLpNfJkJpMKVkA1F18oak=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2727088.jpg",
            estilo:"Familia",
            jogadoresMin:"2",
            jogadoresMax:"4",
            tempoEstimado:"40",
            scoreBGG:"7.2",
            ano:"2015"
          },
          {         
            id:"13",
            nome:"Love Letter",
            imagemUrl:"https://cf.geekdo-images.com/T1ltXwapFUtghS9A7_tf4g__imagepage/img/wf3HgW2e24O0mcsB5OIHJnxaeIM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1401448.jpg",
            estilo:"Familia",
            jogadoresMin:"2",
            jogadoresMax:"4",
            tempoEstimado:"20",
            scoreBGG:"7.2",
            ano:"2012"
          },
          {         
            id:"14",
            nome:"Quarriors",
            imagemUrl:"https://cf.geekdo-images.com/12Bgvi0MpA10redngwI5MA__imagepage/img/FcwDVoX-vyF_eXPlw5AZelrnqus=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1604985.jpg",
            estilo:"Strategy",
            jogadoresMin:"2",
            jogadoresMax:"4",
            tempoEstimado:"30",
            scoreBGG:"6.8",
            ano:"2011"
          },
          {         
            id:"15",
            nome:"Zombicide",
            imagemUrl:"https://cf.geekdo-images.com/ZqjfzvtaTIT5FYp1D2CfKw__imagepage/img/2TYuxSAUY8qpo066xG15mrxw_X4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1196191.jpg",
            estilo:"Sobrevivência",
            jogadoresMin:"1",
            jogadoresMax:"6",
            tempoEstimado:"60",
            scoreBGG:"7.2",
            ano:"2012"
          },
          {         
            id:"16",
            nome:"Epic Spell Wars",
            imagemUrl:"https://cf.geekdo-images.com/Da8TXGBq3UjKINgTRIZY9A__imagepage/img/RHaGhriDSnGO1KwYugXqWJevDRE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1170265.jpg",
            estilo:"Party",
            jogadoresMin:"2",
            jogadoresMax:"6",
            tempoEstimado:"30",
            scoreBGG:"6.5",
            ano:"2012"
          },
          {         
            id:"17",
            nome:"Forbidden Desert",
            imagemUrl:"https://cf.geekdo-images.com/OU26qQZoHJodxSFKiR5IzA__imagepage/img/SE0hRE7vK9YgJANkVIlu34Lf-YU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1528722.jpg",
            estilo:"Family",
            jogadoresMin:"2",
            jogadoresMax:"5",
            tempoEstimado:"45",
            scoreBGG:"7.1",
            ano:"2013"
          },
          {         
            id:"18",
            nome:"Harbour",
            imagemUrl:"https://cf.geekdo-images.com/ECislQBZPHzEiCHOb1H3Bg__imagepage/img/51CgyrNj5ZA5kpfvLAVQvOE-Qt0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2726915.jpg",
            estilo:"Strategia",
            jogadoresMin:"1",
            jogadoresMax:"4",
            tempoEstimado:"60",
            scoreBGG:"6,5",
            ano:"2015"
          },
          {         
            id:"19",
            nome:"Munchkin",
            imagemUrl:"https://cf.geekdo-images.com/wowx1P_-CUf_ZP6CK9fWpw__imagepage/img/dvrrXOCBx7q4AWs4vt3IBEiZrlA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2358779.jpg",
            estilo:"Party",
            jogadoresMin:"3",
            jogadoresMax:"6",
            tempoEstimado:"120",
            scoreBGG:"6.6",
            ano:"2014"
          },
          /*
          {         
          id:"",
          nome:"",
          imagemUrl:"",
          estilo:"",
          jogadoresMin:"",
          jogadoresMax:"",
          tempoEstimado:"",
          scoreBGG:"",
          ano:""
          }, 
          */
      ],
      nomeBG:"",
      imagemUrlBG:"",
      estiloBG:"",
      jogadoresMinBG:"",
      jogadoresMaxBG:"",
      tempoEstimadoBG:"",
      scoreBGGBG:"",
      anoBG:"",
      editando: false,
      indexEditando: null,
      };
    }//Exportar para a aplicação que enxergue esse trecho de código

    onSubmit = (e) => {
      e.preventDefault();
      const {boardgames, editando, indexEditando, nomeBG, imagemUrlBG, estiloBG, jogadoresMinBG, jogadoresMaxBG, tempoEstimadoBG, scoreBGGBG, anoBG} = this.state;
      if(editando){
        const boardgamesAtualizados = boardgames.map((bg, index) => {
          if(indexEditando === index){
            bg.nome = nomeBG;
            bg.imagemUrl = imagemUrlBG;
            bg.estilo = estiloBG;
            bg.jogadoresMin = jogadoresMinBG;
            bg.jogadoresMax = jogadoresMaxBG;
            bg.tempoEstimado = tempoEstimadoBG;
            bg.scoreBGG = scoreBGGBG;
            bg.ano = anoBG;
          }
          return bg;
        });

        this.setState({
          boardgames:boardgamesAtualizados,
          indexEditando:null,
          editando: false,
        });
      }else{
        this.setState({
          boardgames:[
            ...boardgames,
            {
              nome: nomeBG,
              imagemUrl: imagemUrlBG,
              estilo: estiloBG,
              jogadoresMin: jogadoresMinBG,
              jogadoresMax: jogadoresMaxBG,
              tempoEstimado: tempoEstimadoBG,
              scoreBGG: scoreBGGBG,
              ano: anoBG
            },
          ],
        });
      }

      this.setState({
        nomeBG:"",
        imagemUrlBG:"",
        estiloBG:"",
        jogadoresMinBG:"",
        jogadoresMaxBG:"",
        tempoEstimadoBG:"",
        scoreBGGBG:"",
        anoBG:"",
      });
    };

    deletar = (index) => {
      const { boardgames } = this.state;
      this.setState({
        boardgames: boardgames.filter((bg, i) => i !== index),
      });
    };

  render(){
    const {boardgames,
          editando,
          indexEditando, 
          nomeBG, 
          imagemUrlBG, 
          estiloBG, 
          jogadoresMinBG, 
          jogadoresMaxBG, 
          tempoEstimadoBG, 
          scoreBGGBG, 
          anoBG} = this.state;
    return( 
      <div className="container">
        <header>
          <h1>Boardgames</h1>
        </header>
        <main className="main">
        <hr />
        <div>
          <p className="cadastro">
          {
          editando?`Editando:
          ${boardgames[indexEditando]?.nome}`
          : "Cadastre um novo jogo"
          }
          </p>
        </div>
        <form onSubmit={this.onSubmit}>
            <input
            placeholder="Nome"
            value={nomeBG}
            onChange={(e) => {
              this.setState({nomeBG: e.target.value,});
            }}
            />
            <br />
            <input
            placeholder="Url da Imagem"
            value={imagemUrlBG}
            onChange={(e) => {
              this.setState({imagemUrlBG: e.target.value,});
            }}
            />
            <br />
            <input
            placeholder="Estilo"
            value={estiloBG}
            onChange={(e) => {
              this.setState({estiloBG: e.target.value,});
            }}
            />
            <br />
            <input
            placeholder="Minimo de Jogadores"
            value={jogadoresMinBG}
            onChange={(e) => {
              this.setState({jogadoresMinBG: e.target.value,});
            }}
            />
            <br />
            <input
            placeholder="Máximo de Jogadores"
            value={jogadoresMaxBG}
            onChange={(e) => {
              this.setState({jogadoresMaxBG: e.target.value,});
            }}
            />
            <br />
            <input
            placeholder="Tempo Estimado"
            value={tempoEstimadoBG}
            onChange={(e) => {
              this.setState({tempoEstimadoBG: e.target.value,});
            }}
            />
            <br />
            <input
            placeholder="Score no BoardgameGeek"
            value={scoreBGGBG}
            onChange={(e) => {
              this.setState({scoreBGGBG: e.target.value,});
            }}
            />
            <br />
            <input
            placeholder="Ano de Lançamento"
            value={anoBG}
            onChange={(e) => {
              this.setState({anoBG: e.target.value,});
            }}
            />
            <br />
            <button type="submit">Salvar</button> 
          </form><hr />
        <h2>Boardgames</h2>
        <ul>
            {boardgames.map((bg, index)=>(
              <div className="fichaDoJogo">
                <p className="nome">{bg.nome}</p>
                <div className="ficha"> 
                  <img src={bg.imagemUrl} alt={bg.nome} className="capa"></img>
                </div>
                <div className="detalhes">
                  <h3>Estilo: {bg.estilo}</h3>
                  <h3>N° de jogadores: {bg.jogadoresMin} - {bg.jogadoresMax}</h3>
                  <h3>Tempo estimado: {bg.tempoEstimado} min</h3>
                  <h3>Pontuação média: {bg.scoreBGG}</h3>
                  <h3>Ano de publicação: {bg.ano}</h3>
                
                  <div className = "containerBotoes">
                    <button className = "botao" onClick={()=> this.deletar(index)}>Deletar</button>
                    <button className = "botao" onClick={() =>{
                      this.setState({
                      editando: true,
                      indexEditando: index,
                      nomeBG: bg.nome,
                      imagemUrlBG: bg.imagemUrl,
                      estiloBG: bg.estilo,
                      jogadoresMinBG: bg.jogadoresMin,
                      jogadoresMaxBG: bg.jogadoresMax,
                      tempoEstimadoBG: bg.tempoEstimado,
                      scoreBGGBG: bg.scoreBGG,
                      anoBG: bg.ano,
                      });
                    }}>Editar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </main>
      </div>
    ); 
  }
}