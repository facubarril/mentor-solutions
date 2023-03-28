import { useStore, useDispatch } from '../../sotre/storeProvider'
import { types } from '../../sotre/storeReducer';
import './Nav.component.css';

const Nav = () => {
  const store = useStore();
  const dispatch = useDispatch();

  const handleClick = (step) => dispatch({ type: types.active, value: step })

  return (
    <nav>
      <div
        data-step="1"
        onClick={() => handleClick(1)}
        className={store[0].activeStep === 1 && 'active'}
      >
        <span>Step 1</span>
        <h3>Your info</h3>
      </div>
      <div
        data-step="2"
        onClick={() => handleClick(2)}
        className={store[0].activeStep === 2 && 'active'}
      >
        <span>Step 2</span>
        <h3>Select plan</h3>
      </div>
      <div
        data-step="3"
        onClick={() => handleClick(3)}
        className={store[0].activeStep === 3 && 'active'}
      >
        <span>Step 3</span>
        <h3>Add-ons</h3>
      </div>
      <div
        data-step="4"
        onClick={() => handleClick(4)}
        className={store[0].activeStep === 4 && 'active'}
      >
        <span>Step 4</span>
        <h3>Summary</h3>
      </div>
    </nav>
  )
}

export default Nav