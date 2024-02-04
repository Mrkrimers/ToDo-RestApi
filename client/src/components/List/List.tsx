import style from './style.module.scss'

export default function List() {
    return (
        <>
            <div className={style.empty}>
                <div className={style.image}></div>
                <h2>Empty...</h2>
            </div>

            <div className={style.list}>
                <input type="checkbox" />

                <div className={style.textForm}>
                    <h1>Note #1</h1>
                    <h1>description...</h1>
                </div>

                <div className={style.svgPen}></div>
                <div className={style.svgTrash}></div>
            </div>

        </>
    )
}
