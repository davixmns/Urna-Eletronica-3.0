import "./styles.css"

export function MyTextInput({onChange, placeholder, value, max}) {
    return (
        <input
            id={"my-input"}
            type={"text"}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            maxLength={max}
        />
    )
}