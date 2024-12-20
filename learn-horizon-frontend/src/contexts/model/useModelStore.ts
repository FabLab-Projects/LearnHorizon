import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// * Importar interfaces
import { type IEditModelState } from './interfaces/model.interface'

// * Importar los actions
import { actions } from './actions/edit-article.actions'

const useEditModelStore = create<IEditModelState>()(
  persist(
    (set) => {
      const { setModel, resetModel, updateModel } = actions(set)
      return {
        model: null,
        isModelLoaded: false,
        setModel,
        updateModel,
        resetModel
      }
    },
    {
      name: 'article-storage'
    }
  )
)

export default useEditModelStore
