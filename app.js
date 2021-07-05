function dis(val){
    document.getElementById("coder").value+=val;
}
function solve(){
    let x = document.getElementById("coder").value;
    let y = eval(x)
    document.getElementById("coder").value=y;

}
function clr(){
    document.getElementById("coder").value="";
}