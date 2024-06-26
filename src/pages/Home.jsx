import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from '../components/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [laoding, setloading] = useState(false);
  const [posts, setposts] = useState([]);

  async function fetchProductData(){
    setloading(true);
    try{
      let res = await fetch(API_URL);
      let data = await res.json();
      console.log(data);
      setposts(data);
    }
    catch{
      console.log("error");
      setposts([])
    }
    setloading(false);
  }
  useEffect(()=>{
    fetchProductData();
  },[])

  return (
    <div className="flex w-screen justify-center">
      <div className="w-[1080px] flex justify-center  items-center ">
      {
        laoding ? <Spinner/> :
        posts.length > 0 ? (
          <div className="p-8 grid grid-cols-4 gap-x-4 gap-y-6 justify-center items-center">
          {
            posts.map((post)=>(
              <Product key={post.id} 
              post = {post}
              />
            ))
          }
          
          </div>
        ):
        (
          <div>
            <p>No data Found</p>
          </div>
        )
      }
      </div>
    </div>
    
  )
};

export default Home;
