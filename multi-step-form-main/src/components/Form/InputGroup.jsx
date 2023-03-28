import { useDispatch } from "../../sotre/storeProvider";
import { types } from "../../sotre/storeReducer";
import './inputGroup.component.css'

const InputGroup = ({name, type, placeholder, value, prov}) => {
  const nameL = name.replaceAll(' ', '-').toLowerCase();
  const typeL = type.toLowerCase();
  const dispatch = useDispatch();

  return (
    <div className='input_group'>
      <label htmlFor={nameL} className={`${nameL}-label`}>{name}</label>
      <input
        type={typeL}
        name={nameL}
        className={`${nameL}-input`}
        id={nameL}
        placeholder={placeholder}
        value={value}
        onChange={(e) => dispatch({ type: types.step1, input: prov, value: e.target.value})}
      />
    </div>
  )
}

export default InputGroup