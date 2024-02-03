import style from './style.module.scss'

function Inputs() {
    return (
        <div className={style.wrapper}>
            <h1>TODO LIST</h1>

            <div className={style.entryField}>
                <input type="text" placeholder='Create note...' />
                <input type="text" placeholder='Create description note...' />
                <button>create</button>
            </div>
        </div>
    )
}

export default Inputs;