export const List = () => {
  const fetchList = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = result.json();
    console.log(data);
  };
  return (
    <div>
      <button onClick={() => fetchList()}>Fetch</button>
    </div>
  );
};
