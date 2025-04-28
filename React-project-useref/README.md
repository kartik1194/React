## useRef

// step 1 import {useRef} from "react"
// step 2 let var =useRef(o)
// step 3 var.current = var.current+1;

## useRef ek React hook hai jo ek mutable object return karta hai jiska .current property re-render pe value persist karta hai, bina component ko re-render kiye.

## btn-ref

//1. let btnRef = useRef();
//2. <button ref={btnRef} onClick={handleincrement}>
//3. function changeColor() {
btnRef.current.style.backgroundColor = "yellowgreen";
}
