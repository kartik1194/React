## useMemo

const [input, setInput] = useState(0);

function expansiveTask(num) {
for (let i = 0; i <= 1000000000; i++) {}

    return num * 2;

}

let doubleValue = useMemo(() => expansiveTask(input), [input]);
