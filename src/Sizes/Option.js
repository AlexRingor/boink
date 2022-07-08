import './Option.css'
import {useState} from 'react'

export default function Option(size) {
    const [toggleSize, setToggleSize] = useState(false)
    const toggleSizeSelect = () => {
        setToggleSize(!toggleSize)
    }
    return (
        <div className={"option__wrapper " + (size.isAvailable ? 'is-available ' : 'not-available ') + (toggleSize === true ? 'selected' : '')} onClick={toggleSizeSelect}>
            {size.sizeLabel}
        </div>
    )
}