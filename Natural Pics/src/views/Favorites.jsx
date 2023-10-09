import { useContext } from 'react'
import { PicturesContext } from '../context/PictureContext'
import IconHeart from '../components/IconHeart'

const Favorites = () => {
  const { pictures, setPictures } = useContext(PicturesContext)

  const favPictures = pictures.filter((picture) => picture.liked == true)

  const removePicture = (id) => {
    const deleteLike = pictures.map((picture) => {
      if (picture.id === id) {
        return {
          ...picture,
          liked: !picture.liked,
        }
      }
      return picture
    })

    setPictures(deleteLike)
  }

  return (
    <main className='App'>
      <h1>Fotos favoritas</h1>
      <div className='gallery grid-columns-5 p-3'>
        {favPictures.map((picture, i) => (
          <div
            key={i}
            className='photo'
            onClick={() => removePicture(picture.id)}
            style={{ backgroundImage: `url(${picture.src.large})` }}
          >
            <IconHeart filled={picture.liked} />
            <article>
              <p>{picture.alt}</p>
            </article>
          </div>
        ))}
      </div>
    </main>
  )
}
export default Favorites
