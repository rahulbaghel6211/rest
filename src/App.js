import './App.css';

import {
  useEffect,
  useState,
} from 'react';

import { Resturent } from './component/resturent';
import { Restaurantlist } from './component/resturentlist';

function App() {

  const [load, setLoad] = useState(true);

  const [list, setList] = useState([]);

  const [page, setPage] = useState(1);
  
  const [filter, setFilter] = useState([]); 


  //const [total,setTotal]=useState(1);

  const [formdata, setFormdata] = useState({

    name: "",
    Image: "",
    rating: "",
    categorie: "",
    min_amount: "",
    cash: false,
    upi: false,
    card: false,
    

  })


  // console.log(filter)

  const handleChange = (e) => {

    setFormdata({
      ...formdata, [e.target.id]: e.target.value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      await fetch(` http://localhost:8080/restaurent`, {
        method: "POST",
        body: JSON.stringify(formdata),
        headers: { "Content-Type": "application/json" }
      })
      getdata()
      
    }
    catch (err) {
      console.log(err)
    }

  }


  useEffect(() => {
    getdata();
  }, [page])



  const getdata = async () => {

    let data = await fetch(`http://localhost:8080/restaurent?_page=${page}&_limit=5`);

    let data1 = await data.json();
    // console.log(data1)

    setList(data1);

    setFilter(data1);

    setLoad(false)
  }

  const handlePrev = () => {
    setPage(page - 1);
  }
  const handleNext = () => {
    setPage(page + 1);
  }

  const sortratingHL = () => {

    let item = list.sort((a, b) => b.rating - a.rating)
    //console.log(item)
    setFilter([...item])
    
  }


  const sortratingLH = () => {
    let item = list.sort((a, b) => a.rating - b.rating)
    //console.log(item)
    setFilter([...item])
  }
  return (
    <div className="App">

    
    <Resturent handleChange={handleChange} handleSubmit={handleSubmit} sortratingHL={sortratingHL} sortratingLH={sortratingLH} />

    <h1 >TOP RESTAURANT</h1>


      <Restaurantlist load = {load} list = {filter} setList = {setList} handlePrev = {handlePrev} handleNext= {handleNext} page={page} />

      
    </div>
  );
}

export default App;