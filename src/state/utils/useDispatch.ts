import { useDispatch } from "react-redux";
import setupStore from "..";

export type AppDispatch = typeof setupStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
