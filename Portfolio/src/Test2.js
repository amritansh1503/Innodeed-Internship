export default function Test2 () {
    function submit() {
  console.log("Button clicked");
  alert("BYE")
}
   return(
    <div>
        "Hello World"
        <button onClick={submit}>Submit</button>
    </div>
   )
};
