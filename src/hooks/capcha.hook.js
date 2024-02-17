export function useCapcha(){
    var a = Math.floor(Math.random() * 10);
    var b = Math.floor(Math.random() * 10);
    var c = Math.floor(Math.random() * 10);
    var d = Math.floor(Math.random() * 10);
    var e = Math.floor(Math.random() * 10);
    var f = Math.floor(Math.random() * 10);
    return `${a} ${b} ${c} ${d} ${e} ${f}`;

}