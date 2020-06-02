const key='hORBhcZqllD5pNGUIZdsWQgFvdSM7iz8';

//get weather information
const getWeather= async (id)=>{
    const base=`http://dataservice.accuweather.com/currentconditions/v1/`;
    const query=`${id}?apikey=${key}`;

    const response=await fetch(base+query);
    const data=await response.json();
    
    return data[0];

};


//get city information
const getCity=async(city) =>{
    const base='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;//? mean than we adding query parameter
    //we neet to combine the base and query togheter to fetch the result 
    const response=await fetch(base+query);//await until the promise was resolve 
    const data= await response.json();


    return data[0];
} 


// const tab=getCity('manchester');
// console.log(tab);

// getCity('manchester')
//     .then(data=>{
//         return getWeather(data.Key) //return a promise
//     }).then(data=>{
//         console.log(data);
//     })
//     .catch(err=>consome.log("err"));

