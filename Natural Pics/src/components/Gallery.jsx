import { useContext } from 'react'
import { PicturesContext } from '../context/PictureContext'
import IconHeart from './IconHeart'

const Gallery = () => {
  const { pictures, setPictures } = useContext(PicturesContext)

  const handleFavorite = (id) => {
    const newPictures = pictures.map((picture) => {
      if (picture.id === id) {
        return {
          ...picture,
          liked: !picture.liked,
        }
      }
      return picture
    })
    setPictures(newPictures)
  }

  return (
    <main className='gallery grid-columns-5 p-3'>
      {pictures.map((picture, e) => (
        <div
          key={e}
          className='photo'
          onClick={() => handleFavorite(picture.id)}
          style={{ backgroundImage: `url(${picture.src.large})` }}
        >
          <IconHeart filled={picture.liked} />
          <article>
            <p>{picture.alt}</p>
          </article>
        </div>
      ))}
    </main>
  )
}
export default Gallery
