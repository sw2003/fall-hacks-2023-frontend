import { useContext, useState } from "react"
import { boardContext } from '../App'

import { AiFillCaretDown } from 'react-icons/ai'

export default function AddForm() {
    const createWindow = useContext(boardContext)[1];
    const setCreateWindow = useContext(boardContext)[2]; 

    const [showInsightOptions, setShowInsightOptions] = useState(false);

    const [insightStatus, setInsightStatus] = useState('')

    const [comments, setComments] = useState(''); 

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

    function textBoxChange(){

    }

    return (
        <>
            {
                createWindow &&
                <div className={`absolute w-screen h-screen  bg-slate-600 opacity-80 ${createWindow && 'z-0'} ${!createWindow && '-z-20'} flex items-center justify-center`} id="background" onClick={exitStatusForm}>
                    <div className="w-1/2 h-1/2 shadow-xl bg-slate-50">


                        <div className="relative w-full flex justify-center my-2 opacity-1">
                            <div onClick={onClick} className={`flex items-center gap-3 ${insightStatus === '' && 'bg-blue-500'} ${insightStatus === 'Went Well' && 'bg-teal-500'} ${insightStatus === 'To Improve' && 'bg-rose-400'} ${insightStatus === 'Action Items' && 'bg-violet-600'} p-2 rounded-lg cursor-pointer my-2 text-white`}>
                                
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
                                <div className="p-1 bg-teal-500 text-white rounded-md cursor-pointer hover:pl-6 transition-all" onClick={clickStatus}>Went Well</div>
                                <div className="p-1 bg-rose-400 text-white rounded-md cursor-pointer hover:pl-6 transition-all" onClick={clickStatus}>To Improve</div>
                                <div className="p-1 bg-violet-600 text-white rounded-md cursor-pointer hover:pl-6 transition-all" onClick={clickStatus}>Action Items</div>
                            </div>
                        }

                        <div className="w-full flex justify-center">
                            <textarea className="resize-none w-3/4 h-28 my-4 mx-auto border shadow-lg border-slate-200" text={comments} ></textarea>
                        </div>


                


                    </div>
                </div>
            }
        </>
    )
}