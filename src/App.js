import React, {Component} from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';
import Log from './components/Logbtn';
import Menu from './components/Menu';



class App extends Component {

  state={
    termino :'',
    imagenes : [],
    pagina : ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () =>{
    //leer el state de la pagina actual
      
      let pagina = this.state.pagina;

    //
      if(pagina === 1) return null; 
    //Restar uno a la pagina actual
      
      pagina -= 1;

    //agregar el cambio al state
       
        this.setState({
            pagina
          }, () => {
            this.consultarApi();
            this.scroll();
          });
        //console.log(pagina)  
    }

  paginaSiguiente = () =>{
    //leer el state de la pagina actual
      let pagina = this.state.pagina;
    //Sumar uno a la pagina actual
      pagina += 1;
    //agregar el cambio al state
      this.setState({
        pagina
      }, () => {
        this.consultarApi();
        this.scroll();
      });
    //console.log(pagina)
  }

  consultarApi = () => {
    
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=17284562-5edef3c195d5e8dbacda653fb&q=${termino}&per_page=30&page=${pagina}`;

    //console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState( {imagenes : resultado.hits}) )
  }


  datosBusqueda = (termino) =>{
    

      if (termino == "") {
        alert("Oopsi! Something is wrong");
        return false;
      }
    
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
      this.consultarApi() ;
    })
  }
  render() {
    return (

      <div className="app container">
        <div className="jumbotron ">
        <Menu />
          <p className="lead text-center "> Welcome to Search Your Image</p>

          <Buscador 
          datosBusqueda={this.datosBusqueda}
          />
        </div>
        <div className="row justify-content-center">
        <Resultado 
          imagenes = {this.state.imagenes}
          paginaAnterior = {this.paginaAnterior}
          paginaSiguiente = {this.paginaSiguiente}

        />
      
        </div>

      </div>
    );
  }
}

export default App;