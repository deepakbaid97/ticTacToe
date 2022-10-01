import create from "zustand";
//import { devtools, persist } from "zustand/middleware";

const helloStore = (set: any) => ({
    world: 0,
    addWorld: () => {
        set((state: any) => ({
            world: state.world + 1
        }))
    }
})
export interface World {
    world: number
    addWorld: () => void
}
const useHelloStore = create<World>(helloStore)

export default useHelloStore;