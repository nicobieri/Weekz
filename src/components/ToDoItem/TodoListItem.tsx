import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Todo, ToggleTodo } from '../../interfaces/interTodo';
import { useTodo } from '../../compositions/useTodo';
import Tilt from 'react-parallax-tilt';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  const { submitTodo } = useTodo();

  return (
      <Tilt>
    <CardWrapper>
        <StyledCheckbox
        type='checkbox'
        name='todo_complete'
        checked={todo.todo_complete}
        onChange={() => {
            toggleTodo(todo);
            submitTodo(todo);
        }}
    />
        <CardTextWrapper>
            <CardTextTitle>
            <StyledInput  style={{ textDecoration: todo.todo_complete ? 'line-through' : undefined }}/>
            {' '}
                {todo.todo_title}
        </CardTextTitle>
            <CardTextDate>{'('}
            {moment(todo.todo_duedate).format('DD.MM.YYYY')}
            {')'}
        </CardTextDate>
        </CardTextWrapper>
        <Separator />
    </CardWrapper>
          </Tilt>
  );
};

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledCheckbox = styled.input`
display: center;
hight: 30px;
width: 30px;
`;
const StyledInput = styled.input`
border-radius: 18px;


`;


export const CardWrapper = styled.div`
  display: grid;
  grid-direction: column;
  grid-template-columns: 240px;
  grid-template-rows: 110px 110px 60px;
  grid-template-areas: "text" "stats";
  border-radius: 18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
`;


export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const CardTextDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

export const CardTextTitle = styled.div`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;


const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #5930e5;
`;


