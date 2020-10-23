/*
This file stores the questions that the quiz displays
Each element in the questions array holds a question and an answer
The answer is made up of an array of possible choices
Each element in the answer array keeps track of the personality type associated with the choice:

O = Openness
C = Conscientiousness
E = Extroversion 
A = Agreeableness
N = Neuroticism 


*/



let quizQuestions = [

    {
        question: 'I Am the life of the party.',
        answer: [
            {
                type: 'E',
                content: 'Agree'
            },
            {
                type: '',
                content: 'Neutral'
            },
            {
                type: '',
                content: 'Disagree'       
            }
        ]
    },
    {
        question: 'I am interested in people.',
        answer: [
            {
                type: 'A',
                content: 'Agree'
            },
            {
                type: '',
                content: 'Neutral'
            },
            {
                type: '',
                content: 'Disagree'       
            }
        ]
    },
    {
        question: 'I am always prepared',
        answer: [
            {
                type: 'C',
                content: 'Agree'
            },
            {
                type: '',
                content: 'Neutral'
            },
            {
                type: '',
                content: 'Disagree'       
            }
        ]
    },
    {
        question: 'I am relaxed most of the time',
        answer: [
            {
                type: 'N',
                content: 'Agree'
            },
            {
                type: '',
                content: 'Neutral'
            },
            {
                type: '',
                content: 'Disagree'       
            }
        ]
    },
    {
        question: 'Have a vivid imagination',
        answer: [
            {
                type: 'A',
                content: 'Agree'
            },
            {
                type: '',
                content: 'Neutral'
            },
            {
                type: '',
                content: 'Disagree'       
            }
        ]
    },
]

export default quizQuestions;