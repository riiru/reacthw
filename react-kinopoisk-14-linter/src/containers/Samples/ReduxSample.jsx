import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmout } from '../../store/counterSlce'

const ReduxSample = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  console.log('count', count)

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmout(23))}>+23</button>

      <span>{count}</span>
    </div>
  )
}

export default ReduxSample
