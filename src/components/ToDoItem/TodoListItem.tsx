import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {DeleteToDo, Todo, ToggleTodo} from '../../interfaces/interTodo';
import { useTodo } from '../../compositions/useTodo';
import Tilt from 'react-parallax-tilt';
import DeleteButton from '../../assets/DeleteButton.png';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteToDo: DeleteToDo;
}

    export const TodoListItem: React.FC<Props> = ({todo, toggleTodo, deleteToDo}) => {
        const {submitTodo} = useTodo();

/*        function myfunction() {
            console.log('CLICKED');
        }*/


        return (
            <Tilt>
                <CardWrapper>

                    <CardTextWrapper>
                        <CardTextTitle style={{textDecoration: todo.todo_complete ? 'line-through' : undefined}}>
                            {todo.todo_title}{' '}

                        </CardTextTitle>
                        <CardTextDate>{'('}
                            {moment(todo.todo_duedate).format('DD.MM.YYYY')}
                            {')'}
                        </CardTextDate>
                    </CardTextWrapper>
                    <CardStatWrapper>
                        {/* <CardStats>
            <div>
              1<sup>m</sup>
            </div>
            <div>read</div>
          </CardStats> */}
                        <CardStats>
                            <StyledCheckbox
                                type='checkbox'
                                name='todo_complete'
                                checked={todo.todo_complete}
                                onChange={() => {
                                    toggleTodo(todo);
                                    submitTodo(todo);
                                }}
                            />
                        </CardStats>
                        <CardStats>
                            <Styledbutton><Styledimg src={DeleteButton} onClick={() => {
                                deleteToDo(todo);
                            }}  /></Styledbutton>
                        </CardStats>
                    </CardStatWrapper>
                </CardWrapper>
            </Tilt>
        );
    };


    const StyledCheckbox = styled.input`
display: center;
hight: 30px;
width: 30px;
`;

    const Styledimg = styled.img`
    background: transparent;
    height: 80%;
     width: 100%;
`;

const Styledbutton = styled.button`
display: center;
background: transparent;
border-width: 0px;
hight: 30px;
width: 30px;
`;

    export const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #91AEB6;
`;

    export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  
`;

    export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: 240px;
  grid-template-rows: 110px 110px 60px;
  grid-template-areas: "text" "stats";
  border-radius: 18px;
  background: inherit;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  text-align: center;
`;


    export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

    export const CardTextDate = styled.span`
  color: #DF9D76;
  font-size: 13px;
`;

    export const CardTextTitle = styled.div`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
/*  background: linear-gradient(
    20.78deg,
    rgb(223, 157, 118) 12%,
    rgb(191, 163, 132) 20.22%,
    rgb(167, 168, 158) 40.09%,
    rgb(145, 174, 182) 48.96%,
    rgb(145, 174, 182) 67.94%,
    rgb(167, 168, 158) 85.34%,
    rgb(223, 157, 118) 80.57%
  );
  background-clip: text;
  -webkit-background-clip: text;*/
  color: #DF9D76;
`;
