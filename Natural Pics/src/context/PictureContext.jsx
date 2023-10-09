import { createContext, useEffect, useState } from 'react'

export const PicturesContext = createContext()

const picturesApi = 'public/photos.json'

const PicturesProvider = ({ children }) => {
  const [pictures, setPictures] = useState([])

  const getPictures = async () => {
    try {
      const response = await fetch(picturesApi)

      if (!response.status) {
        throw new Error('There is not data')
      }

      const { photos: allPictures } = await response.json()

      setPictures(allPictures)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getPictures()
  }, [])

  return (
    <PicturesContext.Provider value={{ pictures, setPictures }}>
      {children}
    </PicturesContext.Provider>
  )
}
export default PicturesProvider
