import { createSlice } from '@reduxjs/toolkit'
// funciones que voy a poder hacer dentro del estado

export const taskSlice = createSlice({
  name: 'talks',
  initialState: [], // valor inicial cuando inicie la app
  reducers: {
    // acá van las funciones para modificar el estado inicial
  }
})

export default taskSlice.reducer
