import "./styles.css"

export function MyButton({onClick, value}) {
    return (
        <input type={"button"} onClick={onClick} value={value}/>
    )
}