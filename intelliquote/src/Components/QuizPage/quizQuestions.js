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
                content:'I. I Am the life of the party'
            },
            {content: 'II. I am interested in people'},
            {content: 'III. I am always prepared'
            }],
        answer: [
            {
                type: 'Extroversion',
                content: 'l'
            },
            {
                type: 'Agreeableness',
                content: 'll'
            },
            {
                type: 'Conscientiousness',
                content: 'lll'       
            }
        ]
    },
    {
        question: [
            { 
                content:'Which Statement Resonates With You The Most'
            },
            { 
                content:'I. I am relaxed most of the time'
            },
            {content: 'II. I Have a vivid imagination'},
            {content: 'III. I am always prepared'
            }],
        answer: [
            {
                type: 'Neuroticism',
                content: 'l'
            },
            {
                type: 'Openness',
                content: 'll'
            },
            {
                type: 'Conscientiousness',
                content: 'lll'       
            }
        ]
    },
    {
        question: [
            { 
                content:'Which Statement Resonates With You The Most'
            },
            { 
                content:'I. I am relaxed most of the time'
            },
            {
                content: 'II. I am interested in people'},
            {
                content:'III. I Am the life of the party'
            }],
        answer: [
            {
                type: 'Neuroticism',
                content: 'l'
            },
            {
                type: 'Agreeableness',
                content: 'll'
            },
            {
                type: 'Extroversion',
                content: 'lll'       
            }
        ]
    },
    {
        question: [
            { 
                content:'Which Statement Resonates With You The Most'
            },
            { 
            content: 'I. I Have a vivid imagination'
            },
            {
                content: 'II. I am interested in people'},
            {
                content:'III. I Am the life of the party'
            }],
        answer: [
            {
                type: 'Openness',
                content: 'l'
            },
            {
                type: 'Agreeableness',
                content: 'll'
            },
            {
                type: 'Extroversion',
                content: 'lll'       
            }
        ]
    },
   
]

export default quizQuestions;