## useEffect hook

// first -> side effect func
// second -> cleanup function
// third -> comma seprated dependency list

### variation 1:

# run on every render

// useEffect(() => {
// alert("runs on each render");
// });

### variation 2:

# run on first render

// useEffect(() => {
// alert("runs on first render");
// },[]);

### variation 3

# on paticular render

// useEffect(() => {
// alert("runs every time when count is updated!");
// }, [count]);

### variation 4

# multiple particular render

useEffect(() => {
alert("runs every time when count or total is updated!");
}, [count, total]);

### variation 5

# with clean up function

useEffect(() => {
alert("count is updated");
return () => {
alert("old count is unmount");
};
}, [count, total]);
