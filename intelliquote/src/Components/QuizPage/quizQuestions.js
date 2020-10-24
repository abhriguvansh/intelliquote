/*
This file stores the questions that the quiz displays
Each element in the questions array holds a question and an answer
There are multiple questions, the user will choose which resonates with them the most
The answer is made up of an array of possible choices
Each element in the answer array keeps track of the personality type associated with the choice:

 Openness
 Conscientiousness
 Extroversion 
 Agreeableness
 Neuroticism 

By choosing one of the 3 statements we are keeping track of what is their most prevalent personality



*/



let quizQuestions = [

    {
        question: [
            { 
                content:'Which Statement Resonates With You The Most'
            },
            { 
                content:'1. I Am the life of the party'
            },
            {content: '2. I am interested in people'},
            {content: '3. I am always prepared'
            }],
        answer: [
            {
                type: 'Extroversion',
                content: '1'
            },
            {
                type: 'Agreeableness',
                content: '2'
            },
            {
                type: 'Conscientiousness',
                content: '3'       
            }
        ]
    },
    {
        question: [
            { 
                content:'Which Statement Resonates With You The Most'
            },
            { 
                content:'1. I am relaxed most of the time'
            },
            {content: '2. I Have a vivid imagination'},
            {content: '3. I am always prepared'
            }],
        answer: [
            {
                type: 'Neuroticism',
                content: '1'
            },
            {
                type: 'Openness',
                content: '2'
            },
            {
                type: 'Conscientiousness',
                content: '3'       
            }
        ]
    },
   
]

export default quizQuestions;