import React, {useEffect, useImperativeHandle, useRef, useState} from "react";

const MegaInputComponent = ({label, name, onChange, value, id}, ref) => {
    const inputRef = useRef()

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current.focus()
    }))
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                name={name}
                id={id}
                ref={inputRef}
            />
        </div>
    );
}

const MegaInput = React.forwardRef(MegaInputComponent)

export const Ex8 = () => {
    const ref = useRef();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    useEffect(() => ref.current.focus(), [])
    return (
        <div>
            <MegaInput id={'name'} onChange={setName} value={name} label={'Имя'}/>
            <MegaInput id={'mail'} onChange={setEmail} value={email} label={'И-мейл'} ref={ref}/>
        </div>
    );
}
