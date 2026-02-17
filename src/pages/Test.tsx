const Test = () => {
    
    const response = 
    {
        1:"Hi My name",
        2: "hi",
        dd2: "Df"
    }

    const arr = [1,2,3,44,"2"];

    function print(value: string | number) {
        if (typeof value === "string") {
            value.toUpperCase(); // TS knows it's string
            console.log("String " + value.toUpperCase());


            if (value in response){
                console.log("exist");
                
            }
            else console.log("not exist");

            if (Array.isArray(arr))
                console.log("Array is: "+arr);
                
          
        }
        else 
            console.log("Number " + value);
    }
          
      
    return (
        <div>
            <button onClick={() => print("dd2")}>Click</button>
        </div>
    )
}


export default Test;