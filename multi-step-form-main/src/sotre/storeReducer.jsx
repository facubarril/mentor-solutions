const initialStore = [
  {
    activeStep: 1
  },
  {
    name: '',
    email: '',
    phone: ''
  },
  {
    option: 'advanced',
    plan: 'year'
  },
  {
    online: false,
    storate: false,
    profile: false
  }
]

const types = {
  step1: 'step - 1',
  step2: 'step - 2',
  step3: 'step - 3',
  step4: 'step - 4',
  active: 'set active'
}

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.step1:
      return {
        ...state,
        1: {
          ...state[1],
          [action.input]: action.value
        }
      }
    case types.active:
      return {
        ...state,
        0: { activeStep: action.value }
      }
    default:
      return state;
  }
}

export { initialStore, types }
export default storeReducer