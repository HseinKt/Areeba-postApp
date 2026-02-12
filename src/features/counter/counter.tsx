import type { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <span>{ count }</span>

            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <span>{ count }</span>
        </div>
    )
}

export default Counter;

{/* // Typed hooks for Redux
// Hooks are functions that allow you to use the Redux store in your components
// useSelector is a hook that allows you to read the state from the store
// useDispatch is a hook that allows you to write to the store   */}
