## useCallback

## un necessary re render of child component

solution-
wrap child in React.memo
abh re render tabhi hoga jabh props change honge

# abh function handle click bhi pass krengay toh fir re render hora hai😵‍💫

if you send function react.memo cant save you from re-render

# why???

jabh bhi parent component re render ho rha hai coz count value update hui hai tabh handle click wala function re-create ho rha hai

### abh is function ko freeze krna pdega taaki yeah recreate na ho taki new reference bane hi na

# iske liye isko useCallback m wrap krdo

const handleClick = useCallback(() => {
setCount(count + 1);
},[count]);

# aise function , abh function count k case main hi re create hoga

## abh jabh bhi un necessary render honge main ya to

React.memo ka use kru ga ya fir useCallback ka use krun ga

##################################################
# useMemo -> result/value save krta ha bas ,function nhi chlne degaa puraane data ka jiska result already ha
# useCallback -> function Reference ko memo kr deta , function run hoga hi

ek or use case use callBack ka expensive Operation handle krne k liye
