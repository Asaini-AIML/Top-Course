import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'; 
import Spinner from './components/Spinner';


function App() {
  const [courses, setCourses] = useState([]);
  const [loading , setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        console.log(output.data); // Check the structure of the output

        // Update state with the fetched courses
        setCourses(output.data); // Assuming output.data is an array of courses
      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className=''>
     <div>  <Navbar /></div>
     <div> <Filter filterData={filterData} /></div> 
     <div> 
      {
        loading ? (
          <Spinner/>
        ) : (
          <Cards courses={courses} />
        )
      }
      </div> 
    </div>
  );
}

export default App;
