import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetData1 } from "./Service";
import Helper1 from "./Helper1";

const Home = () => {

    const navigate = useNavigate();

    const handleDashboard = () => {
        navigate('/dashboard')
    }

    const [data,setData] = useState([]);

    useEffect(()=>{
        
        const fetchData = async () => {
            const result = await GetData1();
            setData(result);
            console.log('data',result);
        }

        fetchData();

    },[]);

    return (

        <>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 text-wrap">
                {
                    data && data.map((obj)=>(
                        <Helper1 key={obj.id} id={obj.id} title={obj.title} />
                    ))
                }
            </div>

            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                
                <button type="button" onClick={handleDashboard} className="px-2 py-1 bg-green-500 rounded-sm cursor-pointer">
                    Go to Dashboard 
                </button>
                
            </div>

        </>

        
    )
}

export default Home;