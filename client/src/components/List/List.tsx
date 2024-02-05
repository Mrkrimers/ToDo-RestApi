import { useEffect, useState } from 'react'
import style from './style.module.scss'
import axios from 'axios'
import { iTask } from '../../interface'

export default function List() {
    const [dataFromDB, setDataFromDB] = useState([])
    // const [activeCheckbox, setActiveCheckbox] = useState({})

    useEffect(() => {
        getAllDataFromDB()
    }, [dataFromDB])

    const getAllDataFromDB = async () => {
        const { data } = await axios.get('http://localhost:3001/task');
        setDataFromDB(data);
    }

    const deleteTask = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const response = await axios.delete(`http://localhost:3001/task/${event.target.id}`);
        console.log(response);
    }

    return (
        <>

            {dataFromDB.length == 0 ?
                <div className={style.empty}>
                    <div className={style.image}></div>
                    <h2>Empty...</h2>
                </div>
                :
                dataFromDB.map((el: iTask, ind: number) =>
                    <div key={ind} className={style.list}>
                        <input type="checkbox" />

                        <div className={style.textForm}>
                            <h1>{el.title}</h1>
                            <h1>{el.description}</h1>
                        </div>

                        <div className={style.svgPen}></div>
                        <div id={el._id} onClick={deleteTask} className={style.svgTrash}></div>
                        {/* <button onClick={() => console.log(ref.current.checked)
                        }>CHECK</button> */}
                    </div>
                )
            }

        </>
    )
}
