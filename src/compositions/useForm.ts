/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useState } from 'react';

// useForm functional componen
export const useForm = (callback: any, initialState) => {
  const [values, setValues] = useState(initialState);
  const [title, setTitle] = useState('');
  const [due_date, setDate] = useState('');

  // onChange
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setTitle(event.target.value);
  };

  // onChange
  const onChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setDate(event.target.value);
  };

  // onSubmit
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent Page reload
    // empty text input fields
    Array.from(document.querySelectorAll('input')).forEach((input) => {
      if (input.type == 'text') {
        input.value = '';
      }
    });
    await callback(); // run the callback function "submitTodo"
  };

  // return values
  return {
    onChangeTitle,
    onChangeDate,
    onSubmit,
    values,
    title,
    due_date,
  };
};
