import './App.css';
import { BrowserRouter} from 'react-router-dom';
import ThemeRoutes from './ThemeRoutes';
import { RecoilRoot, useRecoilState } from 'recoil';
// import { newTestProdData } from './Recoil/atom';
// import { newProdApiCalling } from './ALL-Theme/SMININGROCKS/Utils/API/ProductListAPI';
// import { useEffect } from 'react';

function App() {

  // const fetchData = async () => {
  //   // const APIURL = 'http://zen/api/';
  //   const APIURL = 'https://api.optigoapps.com/storev26/store.aspx';
  //   // const APIURL = 'https://api.optigoapps.com/test/store.aspx';

  //   const header = {
  //     Authorization: 'Bearer optigo_json_api',
  //     domain:  (window.location.hostname === 'localhost' || window.location.hostname === 'zen') ? 'astore.orail.co.in' : window.location.hostname,
  //     version: 'V6',
  //     sp: "1"
  //     // domain: 'zen',
  //   };
  //   // const header = {
  //   //   Authorization: 'Bearer optigo_json_api',
  //   //   YearCode:'',
  //   //   version: '',
  //   //   domain: 'zen',
  //   //   // domain: 'zen',
  //   // };

  //   try {
  //     const body = {
  //       "con": "{\"id\":\"\",\"mode\":\"store_init\"}",
  //       "p": "",
  //       "f": "formname (init)",
  //     };
  //     const response = await axios.post(APIURL, body, { headers: header });
  //     if (response.status === 200) {
  //       localStorage.setItem('UploadLogicalPath', response.data.Data.rd[0].UploadLogicalPath);
  //       localStorage.setItem('storeInit', JSON.stringify(response.data.Data.rd[0]));
  //       localStorage.setItem('myAccountFlags', JSON.stringify(response.data.Data.rd1));
  //     }
  //   } catch (error) {
  //     console.error('Error:', error );
  //   }
  // }

//   const [largeProdData,setLargeProdData] = useRecoilState(newTestProdData)

//   const getAllProdData = async() =>{
//     await newProdApiCalling().then((res)=>{
//         console.log("res",res)
//         setLargeProdData(res)
//     })
// }

//   useEffect(()=>{
//     if(!largeProdData.length){
//       getAllProdData()
//     }
//   },[])

//   console.log("largeProdData",largeProdData)

  return (
    <RecoilRoot>
    <BrowserRouter>
      <ThemeRoutes />
    </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;