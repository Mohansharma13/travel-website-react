import { useEffect,useTransition,useState } from "react";
import { getCountryData } from "../api/PostApi";
import { Loader } from "../Components/Ui/Loader";
import CountryCard from "../Components/Layout/CountryCard";

function Country() {

  const [isPending,startTransition]=useTransition();
  const [countries,setCountries]=useState([]);

  useEffect(()=>{
    startTransition(async ()=>{
      const res= await getCountryData();
      setCountries(res.data)
    });
  },[]);

  if(isPending){
    return <Loader/>
  }
  
  return (
      <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((currcountry,index)=>{
          return <CountryCard country={currcountry} key={index} />
          
        })
        }

      </ul>
      </section>

  );
}

export default Country;