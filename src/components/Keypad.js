// Code Keypad Component Here

function Keypad (){
    function handleChange(){
        console.log("Entering password...")
    }
    return (
        <div>
            <form>
                <input type="password" id="password" onChange={handleChange}/>
                <label htmlFor="password" placeholder="Enter password">Password</label>
            </form>
        </div>
    )
}

export default Keypad;