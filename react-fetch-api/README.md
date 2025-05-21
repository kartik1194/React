## fetch ai in react

# api folder

export const getPosts = async () => {
const response= await fetch("https://jsonplaceholder.typicode.com/posts", {
method: "GET",
});
return await response.json();
};

# app.jsx

const [data, setData] = useState(null);

useEffect(() => {
getPosts().then((posts) => setData(posts));
}, []);

return (
<div className="App">
{data ? data.map((e) => <li>{e.body}</li>) : <div>no data</div>}
</div>
);
