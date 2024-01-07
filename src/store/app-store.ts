import { create } from 'zustand'

type Store = {
	showDialog: boolean
	setShowDialog: (value: boolean) => void
}

export const appStore = create<Store>()((set) => ({
	showDialog: false,
	setShowDialog: (value) => set(() => ({ showDialog: value }))
}))
