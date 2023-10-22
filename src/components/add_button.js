import { useState, useContext } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'

import { boardContext } from '../App';

export default function AddButton(){
    const [formOpen, setFormOpen] = useState(false); 

    const createWindow = useContext(boardContext)[1]; 
    const setCreateWindow = useContext(boardContext)[2];
    
    function onClick(){
        setCreateWindow(!createWindow);
    }

    return (
        <div className='flex gap-2 items-center w-16 h-8 pl-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-400 transition-all' onClick={onClick}>
            <span>Add</span>

            <IoAddCircleOutline></IoAddCircleOutline>
        </div>
    )
}