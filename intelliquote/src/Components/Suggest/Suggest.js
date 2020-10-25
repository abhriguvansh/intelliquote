import React from 'react'
import './Suggest.css'
import Navbar from '../Navbar/Navbar'
import Quote from './Quote/Quote'



function Suggest(){

    function renderQuotes(){
        //fetch quotes from database
        //for each quote returned, create a <Quote /> component
        //add the <Quote /> component to the list of things to be rendered
    }
    return(
        <div>
        <Navbar />
          <h2>Suggest</h2>
          <div className="quotes-display">
          <Quote quote =  'Experience is simply the name we give our mistakes.' author = 'Oscar Wilde' />
          <Quote quote = 'It always seems impossible until its done.' author = 'Nelson Mandela' />
          <Quote quote = 'Love all, trust a few, do wrong to none.' author = 'William Shakespeare' />
          <Quote quote = 'Creativity is intelligence having fun' author = 'Albert Einstein' />
          <Quote quote = 'Let me never fall into the vulgar mistake of dreaming that I am persecuted whenever I am contradicted.' author = 'Ralph Waldo Emerson' />
          <Quote quote = 'Even the most practical man of affairs is usually in the thrall of the ideas of some long-dead economist.' author = 'John Maynard Keynes' />

          </div>
        </div>
    )

}

export default Suggest