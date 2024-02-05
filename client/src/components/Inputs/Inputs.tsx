import { useState } from 'react';
import style from './style.module.scss';
import axios from 'axios';

export default function Inputs() {
    const [inp, setInp] = useState({})

    const sendData = async () => {
        const response = await axios.post('http://localhost:3001/task', inp, {
            withCredentials: true
        });
        console.log(response);
    }

    const collectData = (event: React.ChangeEvent<HTMLInputElement>) => setInp({ ...inp, [event.target.name]: event.target.value })


    return (
        <div className={style.wrapper}>
            <h1>TODO LIST</h1>

            <div className={style.inputWrapper}>
                <div className={style.entryField}>
                    <input onChange={collectData} name='title' type="text" placeholder='Create note...' />
                    <input onChange={collectData} name='description' type="text" placeholder='Create description note...' />
                </div>

                <div className={style.btn} onClick={sendData
                }>create</div>
            </div>

        </div>
    )
}