import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Id = number | null;

interface CurrentSessionState {
  patieintId: Id;
}

const initialState: CurrentSessionState = { patieintId: null };

const currentSessionSlice = createSlice({
  name: 'currentPatinet',
  initialState,
  reducers: {
    setPatientId(state, action: PayloadAction<number | null>) {
      state.patieintId = action.payload;
    }
  }
});

export const { setPatientId } = currentSessionSlice.actions;
export default currentSessionSlice.reducer;
