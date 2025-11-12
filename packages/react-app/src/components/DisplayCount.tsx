import { useReducer } from 'react'
import Button from '../components/Button'

type State = { count: number }
type Action = { type: 'INC' } | { type: 'DEC' } | { type: 'RESET' }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'INC':
      return { count: state.count + 1 }
    case 'DEC':
      return { count: state.count - 1 }
    case 'RESET':
      return { count: 0 }
    default:
      throw new Error('Unknown Action')
  }
}

export default function DisplayCount() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  const doubleCount = state.count * 2

  return (
    <>
      <h1>Count: {state.count}</h1>
      <h1>Double Count: {doubleCount}</h1>

      <Button label="Increment" onClick={() => dispatch({ type: 'INC' })}>
        ➕
      </Button>
      <Button label="Decrement" onClick={() => dispatch({ type: 'DEC' })}>
        ➖
      </Button>
      <Button label="Reset" onClick={() => dispatch({ type: 'RESET' })}>
        🔄️
      </Button>
    </>
  )
}
