import InputGroup from '../Form/InputGroup'
import { useStore } from '../../sotre/storeProvider'
import './Steps.component.css'

const Step1 = () => {
  const store = useStore();
  const { name, email, phone } = store[1]

  return (
    <article className="step step_1">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <form>
        <InputGroup type='text' name='Name' placeholder='e.g. Stephen King' value={name} prov='name' />
        <InputGroup type='email' name='Email Address' placeholder='e.g. stephenking@lorem.com' value={email} prov='email' />
        <InputGroup type='tel' name='Phone Number' placeholder='e.g. +1 234 567 890' value={phone} prov='phone' />
      </form>
    </article>
  )
}

export default Step1;