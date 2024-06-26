// import { AiFillDelete } from "react-icons/ai";
// import { useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/cartSlice";
// import toast from "react-hot-toast";

// const CartItem = ({ item, itemindex }) => {
//   const dispatch = useDispatch();

//   const removefromcart = () => {
//     dispatch(remove(item.id));
//     toast.success("Item removed");
//   };

//   return (
//     <div className="w-full border-b-4 border-black flex flex-col md:flex-row gap-3 justify-center items-center p-4">
//       <div className="flex flex-col md:flex-row h-auto md:h-[20rem] w-full md:w-auto">
//         <div className="flex justify-center items-center md:justify-start">
//           <img className="h-[16rem] w-[24rem] object-cover" src={item.image} alt={item.title} />
//         </div>
//         <div className="mt-4 md:mt-0 md:ml-4 flex flex-col justify-between">
//           <div>
//             <h1 className="text-lg font-bold">{item.title}</h1>
//             <p className="text-sm text-gray-600">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</p>
//           </div>
//           <div className="flex flex-row items-center mt-4 md:mt-0">
//             <p className="text-xl font-semibold">{item.price}</p>
//             <div onClick={removefromcart} className="ml-4 cursor-pointer text-red-600">
//               <AiFillDelete size={24} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;


import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item, itemindex }) => {
  const dispatch = useDispatch();

  const removefromcart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed");
  };

  return (
    <div className="w-full border-b-4 border-black flex flex-col md:flex-row gap-3 justify-center items-center p-4">
      <div className="flex flex-col md:flex-row h-auto md:h-[20rem] w-full md:w-auto">
        <div className="flex justify-center items-center md:justify-start">
          <img className="h-[16rem] w-[24rem] object-cover" src={item.image} alt={item.title} />
        </div>
        <div className="mt-4 md:mt-0 md:ml-4 flex flex-col justify-between w-full">
          <div>
            <h1 className="text-lg font-bold">{item.title}</h1>
            <p className="text-sm text-gray-600">
              {item.description.split(" ").slice(0, 15).join(" ") + "..."}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
            <p className="text-xl font-semibold">{item.price}</p>
            <div onClick={removefromcart} className="mt-2 md:mt-0 md:ml-4 cursor-pointer text-red-600">
              <AiFillDelete size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
