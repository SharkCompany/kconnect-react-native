import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import testSlice from "./slices/testSlice";

const store = configureStore({
	reducer: {
		testSlice: testSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type AppRootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppRootState,
	unknown,
	Action<string>
>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;

export default store;
