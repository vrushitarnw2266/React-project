import { useState, useEffect }   from "react";


export default function Counter(){
    let [count, setCount] = useState(0);
    useEffect(() => {
     //   global code   
    },[count]);

    const incrCount =() => {
        setCount(count + 1);
    };

    const descCount = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        console.log("Only Callback Function");
    },);

    useEffect(() =>{
        console.log("Callback Function with empty Array");
    },[])

    return (
        <>

        <section>
          

          <button onClick={descCount}>Desc Count</button>
                 <h1> Count :  {count}</h1>
  <button onClick={incrCount}>Incr Count</button>
        

            

            
        </section>

        </>
    )

}
