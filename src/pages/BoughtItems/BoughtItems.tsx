import { useOutletContext } from 'react-router-dom';
import ItemCard from '../../components/ItemCard';
import items from "../../db/items.json";

enum TabNames {
  Items = 'items',
  Store = 'store',
}

const BoughtItems = () => {
  const { activeTab } = useOutletContext<{ activeTab: TabNames }>();
  const filteredItems = items
    .filter((item) => !item.received)
    .sort((a, b) => new Date(a.deliveryEstimationDate).getTime() - new Date(b.deliveryEstimationDate).getTime());

  return (
    <div className="px-6 py-3 flex flex-wrap items-center">
      {filteredItems.map((item, key) => (
        <ItemCard item={item} key={key} />
      ))}
    </div>
  );
};

export default BoughtItems;
