import "./styles.css"

export function MyButton({onClick, value}) {
    return (
        <input id={"my-button"} type={"button"} onClick={onClick} value={value}/>
    )
}