import { createSlice, configureStore } from "@reduxjs/toolkit";

const Grid = createSlice({
  name: "Grid",
  initialState: {
    gridDisplay: "",
  },
  reducers: {
    setGridDisplay(state, action) {
      state.gridDisplay = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { Grid: Grid.reducer },
});

export default store;
export const GridActions = Grid.actions;
export type RootState = ReturnType<typeof store.getState>;

//TS STUFF:
// const dispatch = useDispatch();
// const changeHandler = () => {
//   dispatch(GridActions.setGridDisplay("NOAH"));
// };
// const displayStatus: string = useSelector(
//   (state: RootState) => state.Grid.gridDisplay
// );

//export type RootState = ReturnType<typeof store.getState>
