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
  const [category, setCategory] = useState(filterData[0].title);
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
    <div className="flex flex-col ">
      <Navbar />
      <div
        className="bg-bgDark2 min-h-screen">
        <Filter filterData={filterData} category={category} setCategory={setCategory} />

        <div className="w-11/12 max-w-[1200px]  mx-auto flex flex-wrap items-center justify-center">
          {
            loading ? <Spinner /> : <Cards courses={courses} category={category} />
          }
        </div>
      </div>
    </div>
  )
}

export default App;
