// Typed hooks for Redux
// Hooks are functions that allow you to use the Redux store in your components
// useSelector is a hook that allows you to read the state from the store
// useDispatch is a hook that allows you to write to the store  

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./index";

// Typed selector
// export const useAppSelector = <T>(selector: (state: RootState) => T) => {
//     return useSelector(selector);
// }
// Typed dispatch
// export const useAppDispatch = () => useDispatch<AppDispatch>();

// This way is better, recommended
export const useAppDispatch = useDispatch.withTypes<AppDispatch>
export const useAppSelector = useSelector.withTypes<RootState>()