import { useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { TabNames } from '../../types';
import ItemCard from '../../components/ItemCard';
import StoresTable from '../../components/StoresTable';

const ReceivedList = () => {
  const { activeTab } = useOutletContext<{ activeTab: TabNames }>();
  const items = useSelector((state: RootState) => state.items);

  const filteredItems = items
    .filter((item) => item.received)
    .sort(
      (a, b) =>
        new Date(a.deliveryEstimationDate).getTime() - new Date(b.deliveryEstimationDate).getTime()
    );

  return (
    <div className="px-0 sm:px-6 py-3 flex flex-wrap items-center">
      {activeTab === TabNames.Items &&
        filteredItems.map((item, key) => <ItemCard item={item} key={key} />)}
      {activeTab === TabNames.Store && <StoresTable items={filteredItems} />}
    </div>
  );
};

export default ReceivedList;
