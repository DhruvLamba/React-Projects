import { useState } from 'react'
import './App.css'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmount]=useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)
  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)
  const swap=()=>{
    setfrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }    

  return (
        <div
            
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >
            <div className="w-full ">
                <div className="w-full max-w-md mx-auto border border-black rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <h1 className='text-3xl py-3 font-bold'>Currency Convertor</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()                           
                        }}
                    >
                        <div className="w-full  mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setfrom(currency)}
                                selectCurrency={from} 
                                onAmountChange={(amount) => setAmount(amount)}   
                                                           
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button 
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                        <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}     
                                amountDisable                           
                            />
                        </div>
                        <button type="submit" className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

} 

export default App
