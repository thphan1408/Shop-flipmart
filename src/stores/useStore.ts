import { create } from 'zustand'

// Định nghĩa kiểu dữ liệu cho trạng thái
interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
}

// Tạo store với Zustand
const useStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

export default useStore
