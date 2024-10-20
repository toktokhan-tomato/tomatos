export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div>
          <div className="text-heading-1 text-red-100">heading 1</div>
          <div className="text-heading-2 text-red-200">heading 2</div>
          <div className="text-heading-3 text-green-100">heading 3</div>
          <div className="text-heading-4 text-orange-200">heading 4</div>
          <div className="text-heading-5">heading 5</div>
          <div className="text-heading-6">heading 6</div>
        </div>
        <div>
          <div className="text-body-1">text 1</div>
          <div className="text-body-2">text 2</div>
          <div className="text-body-3">text 3</div>
          <div className="text-body-4">text 4</div>
          <div className="text-body-5">text 5</div>
        </div>
        <div>
          <button className="text-button-1">button 1</button>
          <button className="text-button-2">button 2</button>
          <button className="text-button-3">button 3</button>
          <button className="text-button-4">button 4</button>
        </div>
      </div>
    </>
  );
}
