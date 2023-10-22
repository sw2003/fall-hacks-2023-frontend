import { useState, useEffect } from 'react'
import axios from "axios";
import { IoThumbsUpSharp } from 'react-icons/io5'
import { FaCommentAlt } from 'react-icons/fa'
import redLeaf from '../assets/red_leaf.jpg'
import greenLeaf from '../assets/green_leaf.jpg'
import yellowLeaf from '../assets/yellow_leaf.jpg'

export default function Board(){

    const styles = {
        column: {
            float: "left",
            width: "30%"
        }
    }
    const mockapi = {
        "retroboard_id": 1,
        "title": "Our Restrospect Board",
        "well_column": [
            {
                "task_id": 1,
                "content": "well done guys!",
                "thumbup_count": 2,
                "comments": [
                    {
                        "comment_id": 1,
                        "content": "Agree"
                    }
                ]
            },
            {
                "task_id": 4,
                "content": "well done guys!",
                "thumbup_count": 0,
                "comments": [
                    {
                        "comment_id": 1,
                        "content": "Agree"
                    }
                ]
            }
        ],
        "improve_column": [
            {
                "task_id": 2,
                "content": "not well guys!",
                "thumbup_count": 3,
                "comments": [
                    {
                        "comment_id": 1,
                        "content": "Disagree"
                    }
                ]
            },
            {
                "task_id": 5,
                "content": "not well guys!",
                "thumbup_count": 3,
                "comments": [
                    {
                        "comment_id": 1,
                        "content": "Disagree"
                    }
                ]
            }
        ],
        "action_column": [
            {
                "task_id": 3,
                "content": "do some action!",
                "thumbup_count": 0,
                "comments": [
                    {
                    "comment_id": 21,
                    "content": "No"
                    }
                ]
            },
            {
                "task_id": 6,
                "content": "do some action!",
                "thumbup_count": 10,
                "comments": [
                    {
                    "comment_id": 22,
                    "content": "No"
                    }
                ]
            },
            {
                "task_id": 7,
                "content": "do some action!",
                "thumbup_count": 4,
                "comments": [
                    {
                    "comment_id": 23,
                    "content": "No"
                    }
                ]
            }
        ]
    }

    const [tasks, setTasks] = useState({
        well_column: [],
        improve_column: [],
        action_column: []
    })

    // useEffect(() => {
    //     axios
    //       .get(`/1`)
    //       .then((res) => {setTasks({ 
    //         well_column: res.well_column,  
    //         improve_column: res.improve_column,
    //         action_column: res.action_column
    //     });})
    //     .catch((err) => console.log(err));      
    // }, []);

    useEffect(() => {
        setTasks({
            well_column: mockapi.well_column,  
            improve_column: mockapi.improve_column,
            action_column: mockapi.action_column
        })
    }, [])

    useEffect(()=> {
        console.log(tasks.well_column[0])
    })

    const thumbsup = (task_id) => {
        axios
            .put(`/task/${task_id}/add_thumbup`)
            .then((res) => window.location.href='/')
    }

    const showComment = (task_id) => {

    }

    const mapColumn = (column) => {
        return column.map((task) => (
            <div className='border-2 w-5/6 rounded-lg'>
                <p className="ml-2">{task.content}</p>
                <p className='ml-4'>{mapComments(task.comments)}</p>
                <div className='flex float-right mr-2'>

                    <IoThumbsUpSharp onClick={() => thumbsup(task.task_id)}></IoThumbsUpSharp>
                    <span className='ml-1'>{task.thumbup_count}</span>

                    <FaCommentAlt className='ml-2' onClick={() => showComment(task.task_id)}></FaCommentAlt>
                    <span className='ml-1'>{task.comments.length}</span>
                </div>
                <br></br>
            </div>
        ))
    }


    const mapComments = (comments) => {
        return comments.map((comment) => (
            <p>{comment.content}</p>
        ))
    }

    return (
        <>
            <main className='flex justify-center w-3/4 ml-48 mt-8'>
                <section style={styles.column} className='border-2 rounded-lg bg-white'>
                    <h1 className='ml-8 mt-4 font-bold'>
                        Went Well 
                        <img src={greenLeaf} alt='logo' className="ml-1 h-6 inline"/>
                    </h1>
                    <br></br>
                    <p className='ml-8 mb-2'>{mapColumn(tasks.well_column)}</p>
                </section>
                <section style={styles.column} className='border-2 rounded-lg bg-white'>
                    <h1 className='ml-8 mt-4 font-bold'>
                        To Improve
                        <img src={yellowLeaf} alt='logo' className="ml-1 h-6 inline"/>
                    </h1>
                    <br></br>
                    <p className='ml-8 mb-2'>{mapColumn(tasks.improve_column)}</p>
                </section>
                <section style={styles.column} className='border-2 rounded-lg bg-white'>
                    <h1 className='ml-8 mt-4 font-bold'>
                        Action Items
                        <img src={redLeaf} alt='logo' className="ml-1 h-6 inline"/>
                    </h1>
                    <br></br>
                    <p className='ml-8 mb-2'>{mapColumn(tasks.action_column)}</p>
                </section>
            </main>
        </>
    )
}