
import tshirt1 from '../../assets/tshirt1.jpg'
import Jeans1 from '../../assets/Jeans1.jpg'
import Shirt from '../../assets/Shirt-1.jpg'
import { RiDeleteBin3Line } from "react-icons/ri";

const CardContents = () => {

  const cardProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "red",
      quantity: 1,
      price: 15,
      Image: tshirt1,
    },
    {
      productId: 2,
      name: "Jeans",
      size: "M",
      color: "Blue",
      quantity: 1,
      price: 25,
      Image: Jeans1,
    },
    {
      productId: 3,
      name: "T-shirt",
      size: "M",
      color: "red",
      quantity: 1,
      price: 35,
      Image: Shirt,
    },

  ]

  return (
    <div>
      {
        cardProducts.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-4 border-b">
            <div className="flex items-start">
              <img
                src={item.Image}
                alt={item.name}
                className='w-20 h-20 object-cover mr-4 rounded'
              />
              <div>
                <h3>{item.name}</h3>
                <p className='text-sm text-gray-500'>
                  size: {item.size}  | color : {item.color}
                </p>
                <div className='flex items-center mt-2'>
                  <button className='border rounded px-2 py-1 text-xl font-medium'>
                      +
                  </button>
                  <span className='mx-4'>{item.quantity}</span>
                  <button className='border rounded px-2 py-1 text-xl font-medium'>
                      -
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p>
                $ {item.price.toLocaleString()}
              </p>
              <button>
                <RiDeleteBin3Line className='h-6 w-6 mt-2 text-orange-600' />
              </button>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default CardContents