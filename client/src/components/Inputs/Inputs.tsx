import style from './style.module.scss'

export default function Inputs() {
    return (
        <div className={style.wrapper}>
            <h1>TODO LIST</h1>

            <div className={style.inputWrapper}>
                <div className={style.entryField}>
                    <input type="text" placeholder='Create note...' />
                    <input type="text" placeholder='Create description note...' />
                </div>

                <div className={style.btn}>create</div>
            </div>

        </div>
    )
}