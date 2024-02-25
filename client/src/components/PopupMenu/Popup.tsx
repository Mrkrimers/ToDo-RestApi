import { useState } from 'react'
import { iPopupMenuProps } from '../../interface'
import style from './style.module.scss'
import axios from 'axios'

export default function PopupMenu({ openModal, setOpenModal, _id }: iPopupMenuProps) {
    const [inpData, setInpData] = useState({})

    const collectData = (event: React.ChangeEvent<HTMLInputElement>) => setInpData({ ...inpData, [event.target.name]: event.target.value })

    const updateTask = async () => {
        const response = await axios.put(`http://localhost:3001/task/${_id}`, inpData)

        location.reload();
        console.log(response);
    }

    return (

        <div className={style.modal}>
            <div className={style.menu}>

                <h1>Update Note</h1>

                <div className={style.inputForm}>
                    <input onChange={collectData} name='title' type="text" placeholder='Input your note...' />
                    <input onChange={collectData} name='description' type="text" placeholder='Input your description note...' />
                </div>

                <div className={style.btnForm}>
                    <div className={style.btnCancel} onClick={() => setOpenModal(!openModal)}>Cancel</div>
                    <div className={style.btnApply} onClick={updateTask}>Apply</div>
                </div>
            </div>

        </div>
    )
}