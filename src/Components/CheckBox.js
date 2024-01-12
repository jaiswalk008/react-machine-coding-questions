import { useState } from "react";
const CheckBox  = () =>{
    const formSubmitHandler = (e) =>{
        
        e.preventDefault();
        //to get the value of radio button since all the radio buttons have the same name value
        console.log(e.target.fav_language.value)
        //using react states
        const checkedBoxes = {"India":india , "USA":usa , "UK":uk}
        console.log(checkedBoxes);
        //using javascript
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const res = Array.from(checkboxes).filter((element) => {
            return  element.checked===true;
        })
        Array.from(res).forEach(element =>{
            console.log(element.name)
        })
    }
    const [india,setIndia] = useState(false);
    const [usa,setUsa] = useState(false);
    const [uk,setUk] = useState(false);
    
    return( 
        <div>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor="India">India</label>
                <input type="checkbox" id="India" onChange={(e) => setIndia(e.target.checked)} name="India"/>
                <label htmlFor="USA">USA</label>
                <input type="checkbox" id="USA" onChange={(e) => setUsa(e.target.checked)} name="USA"/>
                <label htmlFor="UK">UK</label>
                <input type="checkbox" id="UK"  onChange={(e) => setUk(e.target.checked)} name="UK"/>
                <h3>Select your fav language</h3>
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label htmlFor="html">HTML</label><br/>
                <input type="radio" id="css" name="fav_language" value="CSS"/>
                <label htmlFor="css">CSS</label><br/>
                <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                <label htmlFor="javascript">JavaScript</label>

                <button type="submit">submit</button>
            </form>
        </div>        
    )
}
export default CheckBox;