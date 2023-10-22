import { useContext, useState } from "react"
import { boardContext } from '../App'
import axios from "axios";
import { BiSubdirectoryLeft } from 'react-icons/bi'

import { AiFillCaretDown } from 'react-icons/ai'

export default function AddForm() {
    const createWindow = useContext(boardContext)[1];
    const setCreateWindow = useContext(boardContext)[2]; 

    const [showInsightOptions, setShowInsightOptions] = useState(false);

    const [insightStatus, setInsightStatus] = useState('')

    const [content, setContent] = useState(''); 

    function onClick() {
        setShowInsightOptions(!showInsightOptions);
    }

    function clickStatus(e){
        let textContent = e.target.textContent;

        setInsightStatus(textContent); 
        setShowInsightOptions(false); 
    }

    function exitStatusForm(e){

        let id = e.target.getAttribute('id');

        if (id === 'background'){
   
            setCreateWindow(false); 
        }
    }

    function textBoxChange(e){
        setContent(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (insightStatus === ''){
            alert('Insignt Status needs to be selected');
            return;
        }

        console.log(content)
        console.log(insightStatus)

        // parse col name -> col id

        var colID = 0;
        if (insightStatus === 'Went Well'){colID = 0;}
        if (insightStatus === 'To Improve'){colID = 1;}
        if (insightStatus === 'Action Items'){colID = 2;}

        try {
            axios
            .post(`/1/${colID}/`, content)
            .then((res) => window.location.href='/')  
        } catch (error) {
            
        }
    }

    return (
        <>
            {
                createWindow &&
                <div className={`absolute w-screen h-screen  bg-slate-600 ${createWindow && 'z-0'} ${!createWindow && '-z-20'} flex items-center justify-center`} id="background" onClick={exitStatusForm}>
                    <div className="w-1/2 h-1/2 shadow-xl bg-slate-50">

                        <form method="post" onSubmit={handleSubmit}>

                            <div className="relative w-full flex justify-center my-2 opacity-1">
                                <div onClick={onClick} className={`flex items-center gap-3 ${insightStatus === '' && 'bg-blue-500'} ${insightStatus === 'Went Well' && 'bg-green-400'} ${insightStatus === 'To Improve' && 'bg-yellow-500'} ${insightStatus === 'Action Items' && 'bg-rose-500'} p-2 rounded-lg cursor-pointer my-2 text-white`}>
                                    
                                    {
                                        insightStatus === '' && "Select Insight Status"
                                    }
                                    {
                                        insightStatus
                                    }
                                    <AiFillCaretDown></AiFillCaretDown>
                                </div>
                            </div>

                            {
                                showInsightOptions && 
                                <div className="w-2/5 mx-auto flex flex-col gap-1">
                                    <div className="p-1 bg-green-400 text-white rounded-md cursor-pointer hover:pl-6 transition-all" onClick={clickStatus}>Went Well</div>
                                    <div className="p-1 bg-yellow-500 text-white rounded-md cursor-pointer hover:pl-6 transition-all" onClick={clickStatus}>To Improve</div>
                                    <div className="p-1 bg-rose-500 text-white rounded-md cursor-pointer hover:pl-6 transition-all" onClick={clickStatus}>Action Items</div>
                                </div>
                            }

                            <div className="block text-center"> Enter content: </div>
                            <div className="w-full flex justify-center">
                                <textarea name="contentInput" type="text" className="resize-none w-3/4 h-28 my-2 mx-auto border shadow-lg border-slate-200" value={content} onChange={textBoxChange} ></textarea>
                                {/* <input type="text" className="ml-2 border w-3/4" value={content} onChange={textBoxChange}/> */}
                            </div>

                            <div className="flex justify-center">
                                <button className="border text-white bg-green-600 rounded hover:bg-green-500 cursor-pointer flex gap-2 transition-all w-16 p-1" type="submit"> 
                                    Submit 
                                    <span><BiSubdirectoryLeft></BiSubdirectoryLeft></span>
                                </button>
                            </div>

                        </form>


                    </div>
                </div>
            }
        </>
    )
}