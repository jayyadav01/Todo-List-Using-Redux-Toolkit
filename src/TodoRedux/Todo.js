import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add,del,edit,clear} from './Slice';
import './Todo.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo() {
    const dispatch = useDispatch();
    const [value,setValue] = useState('');
    const [Isedit,setIsEdit] = useState(null);
    const inputref = useRef(null);

    const init = useSelector((state) => {
        return state.todoList.values
    })

    function handleClick()
    {
        if(!value)
        {
            alert('Please add input field');
        }
        else if(Isedit == null)
        {
            dispatch(add(value));
        }
        else
        {
            dispatch(edit({index: Isedit, value: value}))
            setIsEdit(null);
        }
        setValue('')
        inputref.current.focus();

    }
    function handleEdit(e,item,index)
    {
        e.preventDefault();
        setValue(item)
        setIsEdit(index);
        inputref.current.focus();
    }
    function handleDelete(e,index)
    {
        e.preventDefault();
        dispatch(del(index));
    }
    function handleClear()
    {
        dispatch(clear());
    }
  return (
    <>
        <div className='container'>
        
            <h1>Todo List</h1>

            <div className='head'>
                <input ref={inputref} placeholder='type here' value={value} onChange={(e) => setValue(e.target.value)} />
                <button className='btn btn1' onClick={handleClick}>Add</button>
                <button className='btn btn2' onClick={handleClear}>Clear</button>    
            </div>
            
            
            <ul>
                {
                    init.map((item,index) => {
                    return (
                        <div key={index} className='box'>
                            <li>{item}</li>
                            <div className='action'>
                                <a className='edit' href='#' onClick={(e) => handleEdit(e,item,index)}><EditIcon/></a>
                                <a className='del' href='#' onClick={(e) => handleDelete(e,index)}><DeleteIcon/></a>
                            </div>
                        </div>
                        )
                    })
                }
            </ul>

        </div>
            
       

    </>
  )
}

export default Todo
