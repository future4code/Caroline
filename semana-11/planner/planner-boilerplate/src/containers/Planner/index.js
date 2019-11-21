import React from "react";
import { connect } from "react-redux";
import CustomizedTable from "../Table";
import CreateTask from "../Create" 
import WeekDays from "../Table"

class Planner extends React.Component {
  render() {
    return <div>
      <h1>Criar Tarefa</h1>
      <CreateTask />
      <h3>Selecione o dia </h3>
      <select id="DiaDaTarefa"> 
                <option value="Seg">Segunda</option>
                <option value="Ter">Terça</option>
                <option value="Qua">Quarta</option>
                <option value="Qui">Quinta</option>
                <option value="Sex">Sexta</option>
                <option value="Sab">Sábado</option>
                <option value="Dom">Domingo</option>
      </select>
      <h1>Dias da semana</h1>
      <CustomizedTable/>
    
      </div>
    ;
  }
}

export default connect()(Planner);
//<CustomizedTable/>