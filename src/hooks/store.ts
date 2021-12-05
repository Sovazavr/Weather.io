import { AppDispath, RootState } from './../store/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useCustomeDispatch=()=> useDispatch<AppDispath>();
export const useCustomeSelector: TypedUseSelectorHook<RootState> = useSelector; 