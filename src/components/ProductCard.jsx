import useImageURL from "../hooks/useImageURL.js";
import { useNavigate } from 'react-router';

const Home = () => {
  const { imageURL, error, loading } = useImageURL("Hu475i12tHBg94FIeD");
  const navigate = useNavigate();

  if(loading) {
    return <h2 className="text-center font-bold">Just A Moment</h2>;
  }

  if(error) {
    console.log(error);
  }

  return (
    <main>
      { error && 
        <h2 className="text-center font-bold bg-gray-100">Error: Couldn't Load Image</h2>
      }
      { imageURL &&
      <img src={imageURL} alt='mySHOP Hero Image'/>
      }
      <header className="text-center">Welcome to mySHOP</header>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={navigate('/shop')}>Start Shopping</button>
      <p>mySHOP is a global grocery store franchise where you will find anything and everything that you need!</p>
    </main>
  );
};

export default Home; 