import { Item } from '../../types';

type Props = {
  items: Item[];
};

type StoreTotal = {
  store: string;
  totalSpent: number;
};

const StoresTable = (props: Props) => {
  const aggregatedItems: StoreTotal[] = Object.values(
    props.items.reduce<Record<string, StoreTotal>>((acc, { store, price }) => {
      const numericPrice = parseFloat(price);

      if (!acc[store]) {
        acc[store] = { store, totalSpent: numericPrice };
      } else {
        acc[store].totalSpent += numericPrice;
      }

      return acc;
    }, {})
  );

  return (
    <table className="mx-2 sm:mx-10 mt-5 bg-white">
      <thead>
        <tr>
          <th scope="col">Store name</th>
          <th scope="col">Total amount of bought items</th>
        </tr>
      </thead>
      <tbody>
        {aggregatedItems.map((item, key) => (
          <tr key={key}>
            <th scope="row">{item.store}</th>
            <td className="text-center">{item.totalSpent} $</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StoresTable;
