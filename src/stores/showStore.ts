
// 1 функция без кеша
import axios from 'axios'
import { create } from 'zustand'
import { useDebounce } from '../hooks/useDebounce';

interface GraphData {
  Date: string;
  Price: number;
}
interface CoinData {
  name: string;
  symbol: string;
  image: string;
  market_cap_rank:string;
  market_data:string;
  high_24:string;
  low_24:string;
  supply:string;
  year_change:string;
  current_price:string;
}

interface StoreState {
  graphData: { name: number; uv: number }[];
  coinData: CoinData | null;
  fetchData: (id:string| undefined) =>void;
  searching: boolean,
}

export const showStore = create<StoreState>((set) => ({
  graphData: [],
  coinData: null,
  searching:false,


    fetchData: useDebounce(async(id:any) => {
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)

      const filteredData = res.data.prices.slice(100, 168);
        const graphData = filteredData.map((price: [number, number]) =>{
          const [timestamp, p] = price;
          const date = new Date(timestamp).toLocaleDateString("en-us")
          return {
            Date: date, 
            Price: p, 
          }
        })
        
        set({ graphData})
    })
  }))






//С КЕШЕМ на 2 ФУНКЦИИ

// import axios from 'axios'
// import { create } from 'zustand'
// import { useDebounce } from '../hooks/useDebounce';
// import { homeStore } from './homeStore';

// interface GraphData {
//   Date: string;
//   Price: number;
// }
// interface CoinData {
//   name: string;
//   symbol: string;
//   image: string;
//   market_cap_rank:string;
//   market_data:string;
//   high_24:string;
//   low_24:string;
//   supply:string;
//   year_change:string;
//   current_price:string;
// }

// interface StoreState {
//   graphData: { name: number; uv: number }[];
//   coinData: CoinData | null;
//   fetchData:(id:string| undefined) =>void;
//   searching: boolean,

// }
// // let cachedData: { [key: string]: { graphData: { name: number; uv: number }[]; coinData: CoinData } } = {};

// export const showStore = create<StoreState>((set) => ({
//   graphData: [],
//   coinData: null,
//   searching:false,

//   fetchData: useDebounce(async (id: any) => {
//     const cachedData = localStorage.getItem('coinCache');

//     if (cachedData) {
//       const parsedCache = JSON.parse(cachedData);
//       set({ graphData: parsedCache, coinData: parsedCache });
//       return;
//     }
//     try {
//       const [graphRes, dataRes] = await Promise.all([
//         axios.get(`
//         https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`),
//         axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`)
//       ]);

//       const { data: coinDataResponse } = dataRes;

//       const filteredData = graphRes.data.prices.slice(100, 168);
//       const graphData = filteredData.map((price: [number, number]) => {
//         const [timestamp, p] = price;
//         const date = new Date(timestamp).toLocaleDateString("en-us");
//         return { Date: date, Price: p };
//       });

//       const { name, symbol, image, market_data, market_cap_rank } = coinDataResponse;
//       const img = image.large;
//       const high_24 = market_data.high_24h.usd;
//       const low_24 = market_data.low_24h.usd;
//       const supply = market_data.circulating_supply;
//       const current_price = market_data.current_price.usd;
//       const year_change = market_data.price_change_percentage_1y.toFixed(2);

//       const coinData = {name, symbol, image: img, market_data, market_cap_rank, high_24, low_24, supply, year_change, current_price };

//       localStorage.setItem('coinCache', JSON.stringify({graphData, coinData} ));
//       // Записываем полученные данные в кеш
//       // cachedData[id] = {
//       //   graphData,
//       //   coinData: { name, symbol, image: img, market_data, market_cap_rank, high_24, low_24, supply, year_change, current_price }
//       // };

//       // Устанавливаем полученные данные в состояние
//       set({ graphData:graphData, coinData:coinData });
//     } catch (error) {
//       console.error('error');
//     }
//   })
// }));

//БЕЗ КЕША

// import axios from 'axios'
// import { create } from 'zustand'
// import { useDebounce } from '../hooks/useDebounce';

// interface GraphData {
//   Date: string;
//   Price: number;
// }
// interface CoinData {
//   name: string;
//   symbol: string;
//   image: string;
//   market_cap_rank:string;
//   market_data:string;
//   high_24:string;
//   low_24:string;
//   supply:string;
//   year_change:string;
//   current_price:string;
// }

// interface StoreState {
//   graphData: { name: number; uv: number }[];
//   coinData: CoinData | null;
//   fetchData: (id:string| undefined) =>void;
//   searching: boolean,
// }

// export const showStore = create<StoreState>((set) => ({
//   graphData: [],
//   coinData: null,
//   searching:false,


//     fetchData: useDebounce(async(id:any) => {
//       const [graphRes, dataRes] = await Promise.all([
//         axios.get(`
//         https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
//       ),
//       axios.get(
//         `https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`
//       )
//     ])

//     const { data: coinDataResponse } = dataRes;
      
//       const filteredData = graphRes.data.prices.slice(100, 168);
//         const graphData = filteredData.map((price: [number, number]) =>{
//           const [timestamp, p] = price;
//           const date = new Date(timestamp).toLocaleDateString("en-us")
//           return {
//             Date: date, 
//             Price: p, 
//           }
//         })
        
//         const { name, symbol, image, market_data, market_cap_rank } = coinDataResponse;
//         const img = image.large;
//         const high_24 = market_data.high_24h.usd;
//         const low_24 = market_data.low_24h.usd;
//         const supply = market_data.circulating_supply;
//         const current_price = market_data.current_price.usd;
//         const year_change = market_data.price_change_percentage_1y.toFixed(2)

//         set({ graphData, coinData: { name, symbol, image: img, market_data,market_cap_rank, high_24,low_24,supply,year_change, current_price  } })
//     })
//   }))