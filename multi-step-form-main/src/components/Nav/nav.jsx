import './Nav.component.css';

const Nav = ({ activeStep, setActiveStep }) => {

  const handleClick = (step) => setActiveStep(step)

  return (
    <nav>
      <div
        data-step="1"
        onClick={() => handleClick(1)}
        className={activeStep === 1 && 'active'}
      >
        <span>Step 1</span>
        <h3>Your info</h3>
      </div>
      <div
        data-step="2"
        onClick={() => handleClick(2)}
        className={activeStep === 2 && 'active'}
      >
        <span>Step 2</span>
        <h3>Select plan</h3>
      </div>
      <div
        data-step="3"
        onClick={() => handleClick(3)}
        className={activeStep === 3 && 'active'}
      >
        <span>Step 3</span>
        <h3>Add-ons</h3>
      </div>
      <div
        data-step="4"
        onClick={() => handleClick(4)}
        className={activeStep === 4 && 'active'}
      >
        <span>Step 4</span>
        <h3>Summary</h3>
      </div>
    </nav>
  )
}

export default Nav