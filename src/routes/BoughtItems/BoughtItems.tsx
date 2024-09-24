import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";
import { items } from "../../utils/items";

const BoughtItems = () => {

  const filteredItems = items.filter((item) => !item.received)
    .sort((a, b) => a.deliveryEstimationDate.getTime() - b.deliveryEstimationDate.getTime());

  return (
    <div>
      <Header />
      <div className="px-6 py-3 flex items-center">
        {filteredItems.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  )
}

export default BoughtItems;