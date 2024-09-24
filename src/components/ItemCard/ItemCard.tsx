import { Item } from '../../types';

type Props = {
  item: Item;
};

const ItemCard = (props: Props) => {
  const { item } = props;
  const formattedDate = item.deliveryEstimationDate.toLocaleDateString('en-GB');

  return (
    <div className="bg-white w-60 h-60 flex flex-col p-3 m-3">
      <div className="flex justify-center mb-1">
        <img className="h-28" src={item.image} alt="product picture" />
      </div>
      <div className='h-full flex flex-col justify-center'>
        <div className="text-blue-500 font-semibold">{item.name}</div>
        <div className="flex justify-between items-center">
            <div>
            <div className="text-sm text-slate-500">Amazon</div>
            <div className="text-xs text-slate-400 mt-0.5">
                Delivery estimation date: {formattedDate}
            </div>
            </div>
            <div className="text-green-600 font-semibold">{item.price}</div>
        </div>
      </div>

    </div>
  );
};

export default ItemCard;
