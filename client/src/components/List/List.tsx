import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import axios from 'axios'
import { iCheckboxValues, iTask } from '../../interface'
import PopupMenu from '../PopupMenu/Popup'
import { CSSTransition } from 'react-transition-group'

export default function List() {
    const [dataFromDB, setDataFromDB] = useState<iTask[]>([])
    const [checkboxValues, setCheckboxValues] = useState<iCheckboxValues>({})
    const [openModal, setOpenModal] = useState<boolean>(false)

    useEffect(() => {
        getAllDataFromDB()
    }, [dataFromDB])

    const getAllDataFromDB = async () => {
        const { data } = await axios.get('http://localhost:3001/task');
        setDataFromDB(data);
    }

    const deleteTask = async (event: React.MouseEvent<HTMLDivElement>) => {
        const response = await axios.delete(`http://localhost:3001/task/${event.currentTarget.id}`);
        console.log(response);
    }

    return (
        <>
            <CSSTransition
                in={openModal}
                timeout={300}
                classNames={"fade"}
                unmountOnExit
            >
                <PopupMenu openModal={openModal} setOpenModal={setOpenModal} />
                {/* {openModal ? <PopupMenu openModal={openModal} setOpenModal={setOpenModal} /> : null} */}
            </CSSTransition>

            {dataFromDB.length == 0 ?
                <div className={style.empty}>
                    <div className={style.image}></div>
                    <h2>Empty...</h2>
                </div>
                :
                dataFromDB.map((el: iTask, ind: number) =>
                    <div key={ind} className={style.list}>
                        <label className={!checkboxValues[`${el._id}`] ? style.lable : style.active}>
                            <input type="checkbox"
                                id={el._id}
                                checked={checkboxValues[`${el._id}`] || false}
                                onChange={(event) => setCheckboxValues({ ...checkboxValues, [event.target.id]: event.target.checked })} />
                            <span className={style.textConten}>
                                {el.title}
                            </span>
                        </label>

                        <div className={style.textForm}>
                            <h1>{el.description}</h1>
                        </div>

                        <div onClick={() => setOpenModal(!openModal)} className={style.svgPen}></div>
                        <div id={el._id} onClick={deleteTask} className={style.svgTrash}></div>

                    </div >
                )
            }

        </>
    )
}
