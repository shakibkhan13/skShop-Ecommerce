import mensCollection from '../../assets/mens-collection.webp'
import WomensCollection from '../../assets/womens-collection.webp'
import { Link} from 'react-router-dom'

const GenderCollection = () => {
  return (
      <section
          className='container mx-auto flex flex-col md:flex-row gap-8 mt-4'
      >
          <div className='relative flex-1'>
              <img
                  src={WomensCollection}
                  alt="Women's Collection" 
                  className='w-full h-[700px] object-cover'
              />
              <div
                  className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'
              >
                  <h2
                    className='text-2xl font-bold text-gray-900 mb-3'
                  >
                      Women's Collection
                  </h2>
                  <Link to="/collections/all?gender=Women"
                    className='text-gray-900 underline'
                  >Shop Now</Link>
              </div>
          </div>
          <div className='relative flex-1'>
              <img
                  src={mensCollection}
                  alt="men's Collection"
                  className='w-full h-[700px] object-cover'
              />
              <div
                  className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'
              >
                  <h2
                      className='text-2xl font-bold text-gray-900 mb-3'
                  >
                      Men's Collection
                  </h2>
                  <Link to="/collections/all?gender=Men"
                      className='text-gray-900 underline'
                  >Shop now</Link>
              </div>
          </div>
    </section>
  )
}

export default GenderCollection