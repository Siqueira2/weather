import { useDispatch } from "react-redux";

import { ThunkDispatch } from "@reduxjs/toolkit";

import { RootState } from "@/store";

export type AppThunkDispatch = ThunkDispatch<RootState, any, any>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
