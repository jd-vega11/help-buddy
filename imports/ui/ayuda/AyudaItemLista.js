import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { Meteor } from "meteor/meteor";
import { withTracker } from 'meteor/react-meteor-data';
export default class AyudaItemLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solicitud:this.props.solicitud
    };
    this.verDetalle=this.verDetalle.bind(this);
  }
  renderSolicitud(solicitud){
    const divStyle = {
      margin: "auto",
      textAlign: "center",
    }
    if(solicitud.remunerada){
      return(
        <div style={divStyle}>
        <h2 className="hIem" style={divStyle}>{solicitud.nombreSolicitud}</h2>
        <h3 className="hIem" style={divStyle}>{solicitud.descripcion}</h3>
        <h3 className="hIem" style={divStyle}>{solicitud.fechaLimite}</h3>
        <h4 className="hIem" style={divStyle}>{"Remuneración: $"+solicitud.remunn}</h4>
        </div>
      );
    }
    else{
      return(
        <div style={divStyle}>
        <h2 className="hIem" style={divStyle}>{solicitud.nombreSolicitud}</h2>
        <h3 className="hIem" style={divStyle}>{solicitud.descripcion}</h3>
        <h3 className="hIem" style={divStyle}>{solicitud.fechaLimite}</h3>
        </div>
      );
    }

  }
  verDetalle(){
    let id = this.state.solicitud._id;
   this.props.verDetalle(id);
  }
    render() {
      let solicitud = this.state.solicitud;
      const center={
        margin: "auto",
        textAlign: "center",
      }
      const divStyle = {
      width: "90%",
      margin: "auto",
      justifyContent: "center",
      alignItems: "center",
      borderStyle: "solid",
      borderWidth: "2px",
      borderRadius: "20px",
      borderColor: "#00A0D8",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  };
    return (
      <div>
      <br/>
      <div style={divStyle} key={solicitud._id}>
      <br/>
      <br/>
            {this.renderSolicitud(solicitud)}
      <br/>
      <button type="button" className="btnLis" onClick={this.verDetalle}>Ver</button>
      <br/>
      <br/>
      <br/>
      </div>
      </div>
    );
  }
}
