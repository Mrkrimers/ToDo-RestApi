import style from './style.module.scss'

export default function PopupMenu({ openModal, setOpenModal }) {


    return (
        <div className={style.modal}>

            <div className={style.menu}>

                <h1>Update Note</h1>

                <div className={style.inputForm}>
                    <input type="text" placeholder='Input your note...' />
                    <input type="text" placeholder='Input your description note...' />
                </div>

                <div className={style.btnForm}>
                    <div className={style.btnCancel}>Cancel</div>
                    <div className={style.btnApply}>Apply</div>
                </div>
            </div>

        </div>
    )
}