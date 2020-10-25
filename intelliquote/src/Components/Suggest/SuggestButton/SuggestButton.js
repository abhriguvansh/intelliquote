import React from 'react'
import './SuggestButton.css'
import Quote from '../../Quote/Quote'

function SuggestButton() {

    function submitClick(){
        alert('quote submitted')
    
    }
    return(
       <div className = 'form-div'>
          <form action="" className = 'suggest-form'>
          <label htmlFor="">Suggest A Quote: </label>
              <input type="text" name="" id=""/>
              <button onClick = {submitClick}/>
          </form>
       </div>
    )

}
export default SuggestButton
