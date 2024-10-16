import { useOutletContext } from 'react-router-dom';
import items from '../../db/items.json';
import { TabNames } from '../../types';
import ItemCard from '../../components/ItemCard';
import StoresTable from '../../components/StoresTable';

const BoughtItems = () => {
  const { activeTab } = useOutletContext<{ activeTab: TabNames }>();

  const filteredItems = items
    .filter((item) => !item.received)
    .sort(
      (a, b) =>
        new Date(a.deliveryEstimationDate).getTime() - new Date(b.deliveryEstimationDate).getTime()
    );

  switch (activeTab) {
    case TabNames.Items:
      return (
        <div className="px-0 sm:px-6 py-3 flex flex-wrap items-center">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} withReceivedButton />
          ))}
        </div>
      );
    case TabNames.Store:
      return <StoresTable items={filteredItems} />;
    default:
      return null;
  }
};

export default BoughtItems;
