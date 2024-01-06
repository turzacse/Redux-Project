import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../Redux/Action/TodosAction';

const Todos = () => {
    const { isLoading, todos, error } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllTodos())
    } , [])
    return (
        <div className='mx-10'>
            Todos
            {isLoading && <h1>Loading.....</h1>}
            {error && <h2>{error.message}</h2>}
            <div className='grid lg:grid-cols-8 md:grid-cols-5 grid-cols-3  gap-4 '>
                {
                    todos && 
                    todos.slice(0,40).map(todo => <div className='bg-indigo-400 rounded-xl shadow-2xl p-2' key={todo.id}>
                        <h3 className='w-10 h-10 flex justify-center items-center  rounded-full bg-yellow-300 text-center'>{todo.id}</h3>
                        <h2 className='text-xl font-medium'>{todo.title}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Todos;