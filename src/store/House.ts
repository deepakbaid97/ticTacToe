import create from "zustand";
//import { devtools, persist } from "zustand/middleware";

const houseStore = (set: any) => (<TicTacToeStore>{
    isWinner: false,
    setIsWinner: (status: boolean) => set(
        () => ({ isWinner: status })
    ),

    winner: "",
    setWinner: (player: string) => set(
        () => ({winner: player})
    ),

    whoseTurn: true,
    setWhoseTurn: (player: boolean) => set(
        () => ({whoseTurn: player})
    ),

    board: [[0,0,0],[0,0,0],[0,0,0]],
    setBoard: (status: number[][]) => set(
        () => ({board: status})
    ),
})
export interface TicTacToeStore {
    isWinner: boolean
    setIsWinner: (status: boolean) => void
    winner: string
    setWinner: (player: string) => void
    whoseTurn: boolean
    setWhoseTurn: (player: boolean) => void
    board: number[][]
    setBoard: (status: number[][]) => void
}
const useHouseStore = create<TicTacToeStore>(houseStore)

export default useHouseStore;