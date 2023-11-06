import { observer } from "mobx-react-lite";
import useStore  from "../Hooks/useStore";

 const Count = observer(() => {
  const {
    rootStore: { countStore },
  } = useStore();

  const onIncrement = () => {
    countStore.increment();
  };
  const onDecrement = () => {
    countStore.decrement();
  };
  return (
    <div>
      Count: {countStore.getCountValue}
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
 })
export default Count;