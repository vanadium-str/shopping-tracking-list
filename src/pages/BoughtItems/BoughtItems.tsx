import { useOutletContext } from 'react-router-dom';
import ItemCard from '../../components/ItemCard';
import items from "../../db/items.json";
import { TabNames } from '../../types';

const BoughtItems = () => {
  const { activeTab } = useOutletContext<{ activeTab: TabNames }>();

  const filteredItems = items
    .filter((item) => !item.received)
    .sort((a, b) => new Date(a.deliveryEstimationDate).getTime() - new Date(b.deliveryEstimationDate).getTime());

  return (
    <div className="px-6 py-3 flex flex-wrap items-center">
      {activeTab === TabNames.Items && filteredItems.map((item, key) => (
        <ItemCard
          key={key}
          item={item}
          withReceivedButton
        />
      ))}
    </div>
  );
};

export default BoughtItems;
