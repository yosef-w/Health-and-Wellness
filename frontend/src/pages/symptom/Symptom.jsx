// import React from 'react'
// import SymptomDisplay from '../../components/symptom/SymptomDisplay'
// import SymptomForm from '../../components/symptom/SymptomForm'

// export default function Symptom() {

//   const [symptomSearch, setSymptomSearch] = useState('');
//   const [symptomObj, setSymptomObj] = useState({});

//   useEffect(() => {
//     // Define async function
//     async function fetchData(){
//         console.log('rendered!', pokeSearch);
//         let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeSearch.toLowerCase()}`)
//         if (!response.ok){
//             console.error('There was an issue')
//         } else {
//             let data = await response.json();
//             console.log(data)
//             setPokeObj(data);
//         };
//     };
//     // Execute the function
//     fetchData();
// }, [pokeSearch]);
  
//   return (
//     <div>
//       <SymptomForm />
//       <SymptomDisplay />
//     </div>
//   )
// }
