/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      nombre: " ",
      apellido: " ",
      correo: " ",
      cargo: " ",
      ingreso: " ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8x5R676Nop9d6D6R5WvdGaxCwOb12pOBiVHvMSzSHrINzrQ4rfw"

    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
}

    //funcion de modificacion
   handleInput(e){
    //    console.log(e.target.value, e.target.name)
       const { value, name } = e.target;
       //cambia el dato
       this.setState({
         [name]: value,
         
       })
   }
   
   handleSubmit(e){
    e.preventDefault();
    this.props.onAddForm(this.state);
    console.log('enviando data');
   }
 

  render() {
    return (
      <div className="card">
     
        <form className="card-body" onSubmit={this.handleSubmit}>
        CREA TU FOTOCHECK
            <div className="form-group">
           
            <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="nombre"
            onChange={this.handleInput}
            >
            </input>
            </div>

            <div className="form-group">
            <input
            type="text"
            name="apellido"
            className="form-control"
            placeholder="apellido"
            onChange={this.handleInput}
            >
            </input>
            </div>

            <div className="form-group">
            <input
            type="text"
            name="correo"
            className="form-control"
            placeholder="correo"
            onChange={this.handleInput}
            >
            </input>
            </div>
            
            <div className="form-group">
            <select
            name="cargo"
            className="form-control"
            placeholder="cargo"
            onChange={this.handleInput}
            >
            <option>Analista Funcional</option>
            <option>Gerente</option>
            </select>
            </div>


            <div className="form-group">
            Fecha de ingreso : 
            <input 
            type="date" 
            name="ingreso"
            onChange={this.handleInput}
            >
            </input>
            </div>

            <div className="form-group  ">
            <input 
            type="file" 
            name="image"
            onChange={this.handleInput}>
            </input>
            </div>
           
            <button className="btn btn-primary">Vista previa</button>
        </form>
      </div>
    );
  }
}
export default Form;