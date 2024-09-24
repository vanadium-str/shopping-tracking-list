import ItemCard from '../../components/ItemCard';
import { items } from '../../utils/items';

const ReceivedList = () => {
  const filteredItems = items
    .filter((item) => item.received)
    .sort((a, b) => a.deliveryEstimationDate.getTime() - b.deliveryEstimationDate.getTime());

  return (
    <div className="px-6 py-3 flex flex-wrap items-center">
      {filteredItems.map((item) => (
        <ItemCard item={item} />
      ))}
    </div>
  );
};

export default ReceivedList;
