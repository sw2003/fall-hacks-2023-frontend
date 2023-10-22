import { useState, useContext } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'

export default function AddButton(){
    const [formOpen, setFormOpen] = useState(false); 

    function onClick(){
        console.log("Hello world"); 
    }

    return (
        <div className='flex gap-2 items-center w-16 p-1 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-400 transition-all'>
            <span className='ml-2'>Add</span>
            <IoAddCircleOutline></IoAddCircleOutline>
        </div>
    )
}