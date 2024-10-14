import { useEffect, useState } from 'react';
import { Item, RatesAPI } from '../../types';

const apiUrl = process.env.REACT_APP_EXCHANGE_RATES_API;
const apiKey = process.env.REACT_APP_EXCHANGE_RATES_API_KEY;

type Props = {
  item: Item;
  withReceivedButton?: boolean;
};

const ItemCard = (props: Props) => {
  const { item, withReceivedButton } = props;
  const [isPriceInILS, setIsPriceInILS] = useState(false);
  const [priceInILS, setPriceInILS] = useState<number>();
  const [error, setError] = useState<string>();
  const formattedDate = new Date(item.deliveryEstimationDate).toLocaleDateString('en-GB');

  useEffect(() => {
    if (isPriceInILS) {
      fetchCurrencyRate();
    }
  } , [isPriceInILS])

  const fetchCurrencyRate = async () => {
    const response = await fetch(`${apiUrl}/latest?access_key=${apiKey}`);
    const data: RatesAPI = await response.json();
    if (data.error) {
      setError('Something went wrong');
    } else {
      const ILSinUSD = data.rates.ILS / data.rates.USD;
      setPriceInILS(Math.floor(ILSinUSD * +item.price));
    }
  }

  const changeCurrency = () => {
    setIsPriceInILS(!isPriceInILS);
  }

  const renderPrice = () => {
    if (error) {
      return (
        <div className='text-red-600'>{error}</div>
      )
    } else if (isPriceInILS && priceInILS) {
      return `${priceInILS} ₪`;
    } else {
      return `${item.price} $`;
    }
  }

  return (
    <div className="bg-white w-64 h-64 flex flex-col p-3 m-3">
      <div className="flex justify-center mb-1">
        <img className="h-28" src={item.image} alt="product picture" />
      </div>
      <div className="h-full flex flex-col justify-center">
        <div className="text-blue-500 font-semibold">{item.name}</div>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-slate-500">
              {item.store}
            </div>
            <div className="text-xs text-slate-400 mt-0.5 max-w-40">
              Delivery estimation date: {formattedDate}
            </div>
          </div>
          <div
            className="text-green-600 font-semibold cursor-pointer"
            onClick={changeCurrency}
          >
            {renderPrice()}
          </div>
        </div>
      </div>
      {withReceivedButton && (
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white p-1 rounded-md">
            Received
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
