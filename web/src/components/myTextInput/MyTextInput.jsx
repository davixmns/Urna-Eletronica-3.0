import "./styles.css"

export function MyTextInput({onChange, placeholder, value}) {
    return (
        <input type={"text"} onChange={onChange} placeholder={placeholder} value={value}/>
    )
}