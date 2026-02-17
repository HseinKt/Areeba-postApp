import { getId, type PartialPost } from "../types/post";

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

    const handleClick = () => {

        const post: PartialPost = {
            id: 2222,
            title: "Hello",
            body: "test Generic constraint",
        };

          // Fix: Ensure 'id' is not possibly undefined for getId (which expects {id: number})
        if (post.id !== undefined) {
            const postId = getId(post as { id: number } );
            console.log(postId); // "2222"
        } else {
            console.error("Post id is undefined");
        }
          
    }

    return (
        <div>
            <button onClick={() => print("dd2")}>Click</button>
            <button onClick={handleClick}>getId</button>
        </div>
    )
}


export default Test;