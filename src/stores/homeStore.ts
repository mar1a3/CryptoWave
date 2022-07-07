
import axios from 'axios'
import { create } from 'zustand'
import { useDebounce } from '../hooks/useDebounce';

interface Coin {
  item:any;
  name: string;
  image: string;
  large:string;
  id: string;
  current_price: number;
  bitcoin:string;
  price_change24: string;
}

interface StoreState {
  coins: Coin[];
  trending: Coin[];
  fetchCoins:() => void;
  setQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
  query:string;
  searchCoins:() =>void;
  coinCache: Coin[] | null;
  searching:boolean; 
}

export const homeStore = create<StoreState>((set) => ({
  coins: [],
  trending: [],
  query:'',
  coinCache: null, 
  searching:false,


  setQuery: (e: React.ChangeEvent<HTMLInputElement>) =>{
    set({query: e.target.value})
    homeStore.getState().searchCoins()
  },

  searchCoins: useDebounce(async() =>{
    set({searching:true});
    const {query, trending} = homeStore.getState()
    if(query.length > 2){
    const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)

    const coins = res.data.coins.map((coin: Coin) =>({
      name: coin.name,
      image: coin.large,
      id: coin.id,
    }))
    
    set({coins, searching:false});
  } else{
    set({coins:trending, searching:false});
  }
  }),

  fetchCoins : useDebounce(async() =>{
    const cachedData = localStorage.getItem('coinCache');

    if (cachedData){
      const parsedCache = JSON.parse(cachedData);
      set ({ coins: parsedCache, trending: parsedCache})
    }else{
      try{
    const [res, btcRes] = await Promise.all([
      axios.get("https://api.coingecko.com/api/v3/search/trending"

      ), axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      )
    ])

    const { data: btcPriceResponse } = btcRes;
    const { bitcoin } = btcPriceResponse;
    const btcPrice = bitcoin.usd;

    console.log(res.data.coins[0].item.data.price_change_percentage_24h.usd)


        const coins = res.data.coins.map((coin: Coin) => ({
          name: coin.item.name,
          image: coin.item.thumb,
          id: coin.item.id,
          price_change24: (coin.item.data.price_change_percentage_24h.usd).toFixed(2),
          priceBTC: coin.item.data.price_btc,
          priceUSD: (coin.item.price_btc * btcPrice).toFixed(6)
        }))
        localStorage.setItem('coinCache', JSON.stringify(coins));

        set({coins, trending: coins})
      }catch(error){
        console.error('Error fetching coins:', error);
      }
    }
  }),
}))





// import axios from 'axios'
// import { create } from 'zustand'
// import { useDebounce } from '../hooks/useDebounce';

// interface Coin {
//   item:any;
//   name: string;
//   image: string;
//   large:string;
//   id: string;
//   current_price: number;
//   bitcoin:string;
// }

// interface StoreState {
//   coins: Coin[];
//   trending: Coin[];
//   fetchCoins:() => void;
//   setQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   query:string;
//   searchCoins:() =>void;
//   coinCache: Coin[] | null; 
// }

// export const homeStore = create<StoreState>((set) => ({
//   coins: [],
//   trending: [],
//   query:'',
//   coinCache: null, 


//   setQuery: (e: React.ChangeEvent<HTMLInputElement>) =>{
//     set({query: e.target.value})
//     homeStore.getState().searchCoins()
//   },

//   searchCoins: useDebounce(async() =>{
//     const {query, trending} = homeStore.getState()
//     if(query.length > 2){
//     const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)

//     const coins = res.data.coins.map((coin: Coin) =>({
//       name: coin.name,
//       image: coin.large,
//       id: coin.id,
//     }))
    
//     set({coins})
//   } else{
//     set({coins:trending})
//   }
//   }),

//   fetchCoins : useDebounce(async() =>{
//     const { coinCache } = homeStore.getState();
//     if (coinCache){
//       set ({ coins: coinCache, trending: coinCache })
//     }else{
//       try{
//     const [res, btcRes] = await Promise.all([
//       axios.get("https://api.coingecko.com/api/v3/search/trending"

//       ), axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
//       )
//     ])

//     const { data: btcPriceResponse } = btcRes;
//     const { bitcoin } = btcPriceResponse;
//     const btcPrice = bitcoin.usd;

//     // console.log(btcPrice +'btc Price')

//     // console.log(res.data.coins.item +' res ')

//         const coins = res.data.coins.map((coin: Coin) => ({
//           name: coin.item.name,
//           image: coin.item.thumb,
//           id: coin.item.id,
//           priceBTC: coin.item.data.price_btc,
          
//           priceUSD: (coin.item.price_btc * btcPrice).toFixed(6)
//         }))


//         set({coins, trending: coins})
//       }catch(error){
//         console.error('Error fetching coins:', error);
//       }
//     }
//   }),
// }))

//     // useEffect(()=>{
//     //     fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false')
//     //     .then((res) => {
//     //         return res.json()
//     //     })
//     //     .then((arr) => {
//     //         setData(arr)
//     //     })
//     // },[])