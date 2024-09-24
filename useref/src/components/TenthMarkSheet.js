import React, { useRef } from 'react'

function TenthMarkSheet() {
    let firstNameRef =useRef();
    let lastNameRef =useRef();
    let engInputRef =useRef();
    let telInputRef =useRef();
    let hinInputRef =useRef();
    let mathInputRef =useRef();
    let sciInputRef =useRef();
    let socInputRef =useRef();
    let resultParaRef =useRef();
    
  return (
    <div>
        <h1>Tenth Marksheet</h1>
        <form>
            
            <div>
                <label>FirstName</label>
                <input ref={firstNameRef}></input>
            </div>
            <div>
                <label>LastName</label>
                <input ref={lastNameRef}></input>
            </div>
            <div>
                <label >Engmarks</label>
                <input type='number' ref={engInputRef}></input>
            </div>
            <div>
                <label>Telmarks</label>
                <input type='number' ref={telInputRef}></input>
            </div>
            <div>
                <label>Hindimarks</label>
                <input type='number' ref={hinInputRef}></input>
            </div>
            <div>
                <label>Mathsmarks</label>
                <input type='number' ref={mathInputRef}></input>
            </div>
            <div>
                <label >Sciencemarks</label>
                <input type='number' ref={sciInputRef}></input>
            </div>
            <div>
                <label>Socialmarks</label>
                <input type='number' ref={socInputRef}></input>
            </div>
            <div>
                <button type='button' onClick={()=>{ 
                    let firstName =firstNameRef.current.value;
                    let lastName =lastNameRef.current.value;
                    

                    
                    let engmarks =Number(engInputRef.current.value);
                    let telmarks =Number(telInputRef.current.value);
                    let hindhimarks =Number(hinInputRef.current.value);
                    let mathsmarks =Number(mathInputRef.current.value);
                    let sciencemarks =Number(sciInputRef.current.value);
                    let socialmarks =Number(socInputRef.current.value);
                    let totalmarks =engmarks+telmarks+hindhimarks+mathsmarks+sciencemarks+socialmarks;
                    alert(`${firstName} ${lastName} got  total marks are ${totalmarks}`);
                    resultParaRef.current.innerHTML=`${firstName} ${lastName} got total marks are ${totalmarks}`
                    }}>calculate marks</button>
                    <button type='button' onClick={()=>{
                        let a =20;
                        console.log(a);
                        let b=()=>{
                            b=30 
                            console.log(b);

                        }
                    }}>scope of variables</button>
                    
  
                               
            </div>
            <div>
            <p ref={resultParaRef}>Please enter your marks and Click it</p>
            </div>

        </form>
      
    </div>
  )
}

export default TenthMarkSheet
