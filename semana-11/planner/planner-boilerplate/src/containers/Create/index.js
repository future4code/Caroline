import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import { createTasks } from '../../actions/allActions';
import { connect } from 'react-redux';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },

  });


const FormStyled = styled.form `
  display:flex;
  flex-direction:column;
  margin-left: 40vh;
  margin-right: 40vh;
`

    class CreateTask extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                valueTask : "",
                weekDay: "",

            }
        }
        

    onChangeValue = (event) => {
        this.setState({
            valueTask: event.target.value
        });
    };

    onChangeWeekDay = (event) => {
        this.setState({
            weekDay: event.target.value
        });
    };

    handleSubmit = () => {
        const {valueTask,  weekDay} = this.state
        this.props.createTaksAction(valueTask, weekDay)
    
    }

 
    
    /*= event => {
        event.preventDefault();
        this.props.createTaksAction(
            this.state.text, 
            this.state.day,
            );
        alert("Tarefa Criada!");
      };*/

render(props) {
   
    return (
            <div>
                <FormStyled onSubimit = {this.handleSubmit}>
                    <TextField
                        label=""
                        multiline
                        rows="4"
                        variant="outlined"
                        value={this.state.valueTask}
                        onChange={this.onChangeValue}
                        name="text"
                    />

                    <Button variant="contained" color="primary"  onClick = {this.handleSubmit} >
                    Criar Tarefa!
                    </Button>

                    <h3>Selecione o dia </h3>
                    <select value={this.state.weekDay} onChange ={this.onChangeWeekDay} name="day" > 
                        <option value="Seg">Segunda</option>
                        <option value="Ter">Terça</option>
                        <option value="Qua">Quarta</option>
                        <option value="Qui">Quinta</option>
                        <option value="Sex">Sexta</option>
                        <option value="Sab">Sábado</option>
                        <option value="Dom">Domingo</option>
                    </select>
                </FormStyled>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createTaksAction: (valueTask, weekDay) => dispatch (createTasks(valueTask, weekDay)),
})




export default connect(null, mapDispatchToProps) (CreateTask);