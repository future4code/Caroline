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
      <h1>Dias da semana</h1>
      <CustomizedTable/>
    
      </div>
    ;
  }
}

export default connect()(Planner);
//<CustomizedTable/>