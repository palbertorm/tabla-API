import React, { Component} from "react";
import './Combo.css'
import axios from 'axios'

const url = 'http://localhost:3000/dias'
export default class Combo extends Component{

    state = { dias: []}
componentDidMount(){
    axios.get(url).then(resp =>{/* funcao para fazer um get da minha bdd*/
        this.setState({dias: resp.data})
    })
}
renderPantalla() {
    return this.state.dias.map((dia, i) => {
        return (
            <tr key={dia.id}
            className= {i % 2 === 0 ? 'Par':'Impar'}>
              <td>{dia.id}</td> 
              <td>{dia.nombre}</td> 
              <td>{dia.tiempo}</td> 
            </tr>
        )
        
    
            
                
    })
}

   render(){
       return(
           <div className='Combo'>
               <table>
                   <thead>
                       <tr>
                           <th>Id</th>
                           <th>Dia</th>
                           <th>Temperatura</th>
                       </tr>
                   </thead>
                   <tbody>{this.renderPantalla()}</tbody>
               </table>
           </div>
       )
   }

}