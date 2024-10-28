import CardItem from "./CardItem";

export default function CardList({ items }: { items: Card[] }) {
  return (
    <div className="grid grid-cols-4 gap-5 mx-4">
      {items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
}
