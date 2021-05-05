import {useState, useEffect} from 'react'
import './App.css';
import NavInshort from './component/NavInshort';
import NewsContent from './component/NewsComponent/NewsContent';
import axios from 'axios'
import apiKey from './data/config'
function App() {
  const [category, setCategory] = useState('general')
  const [newsArray, setnewsArray] = useState([])
  const [newsResult, setnewsResult] = useState()

  const newsApi = async () => {
    try{
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}`)
      setnewsArray(news.data.articles);
      setnewsResult(news.data.totalResults);
      console.log(newsArray);
    }

    catch (error){
        console.log(error); 
    }
  }
  useEffect(() => {
    newsApi();
    }, [newsResult, category])
  return (
    <div className="App">
     <NavInshort setCategory={setCategory}/>
     <NewsContent newsArray={newsArray} newsResult={newsResult}/>
    </div>
  );
}

export default App;
