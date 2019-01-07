/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./App.css";
import { todos } from "./todos.json";
import Form from "./component/Form";
import domtoimage from 'dom-to-image';
import ReactDOM from 'react-dom';
import FileSaver from 'file-saver';

//class para nombrar un componente y className para css
class App extends Component {
  //constructor almacena datos, ni bien inicializamos un constructor
  //debemos inicializar super(); para q se traiga toda la configuracion de react
  constructor() {
    //para heredar funcionalidad de react
    super();
    //estado
    this.state = {
      todos

    };
    this.handleAddform = this.handleAddform.bind(this);
    this.download= this.download.bind(this);
  }

    handleAddform(todo) {
      this.setState({
        todos: [...this.state.todos, todo]
      })
      console.log(todo)
      
    }
    download(){
      let formulario = ReactDOM.findDOMNode(this.refs['formulario']);
      domtoimage.toBlob(formulario)
    .then(function (blob) {
      FileSaver.saveAs(blob, 'picture.png');
    });
    } 
  render() {

   const todo = this.state.todos.map((tareas, i) => {
      return (
      
      <div ref= {'formulario'} className="col-md-8">
        <div className="card" >
      <div className="card-header">
       <h1> DIVEMOTOR </h1>
        </div>
        <div className="card-body">
        <p>{tareas.nombre} </p>
        <p>{tareas.apellido}</p>
        <p>{tareas.correo} </p>
        <p>{tareas.cargo} </p>
        <p>{tareas.ingreso} </p>
        
        <p> <img src={tareas.image} alt=" " className="img-thumbnail  width: 100% "/>
        
</p>
         <button onClick={this.download}> DESCARGAR </button>
        </div>
        
      </div>
      </div>
      )
      
      
    });
    return (
      <div className="App">
        
        <div className="container">
          <div id="form" className="row mt-5">
          
          <Form onAddForm={this.handleAddform}/>
          <div id="todo" className="col-md-8">
      { todo }
      </div>
          
          </div>
        </div>
        <header>
          
         
        </header>
      </div>
    );
  }
}

export default App;
