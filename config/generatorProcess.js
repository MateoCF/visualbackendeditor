const prompts = {
    // Start
    0: {
        "prompt": "Does your website have users that sign in?",
        "inputType": "",
        "transition": "yesno"
    },
    1: {
        "prompt": "Are there different types of users?",
        "inputType": "",
        "transition": "yesno"
    },
    2: {
        "prompt": "What this user type called?",
        "inputType": "string",
        "transition": "yesno"
    },
    3: {
        "prompt": "Does this user have attributes besides a username and a password?",
        "inputType": "",
        "transition": "yesno"
    },
    4: {
      "prompt": "What is this attribute called?",
      "inputType": "string",
      "transition": ""
    },
    5: {
        "prompt": "Can posts or another form of data be saved on this website?",
        "inputType": "",
        "transition": "yesno"
    },
    6: {
        "prompt": "Are there different types of saved data?",
        "inputType": "",
        "transition": "yesno"
    },
    7: {
        "prompt": "What's this data type called?",
        "inputType": "string",
        "transition": ""
    },
    8: {
        "prompt": "What data can be saved?",
        "inputType": "attribute",
        "transition": ""
    },
    9: {
        "prompt": "Are these all the data types?",
        "inputType": "",
        "transition": "yesno"
    },
    10: {
        "prompt": "Can any of these data types own another data type?",
        "inputType": "",
        "transition": "yesno"
    },
    11: {
        "prompt": "How many datatypes can each datatype own?",
        "inputType": "allmodels",
        "transition": ""
    },
    12: {
        "prompt": "Can any of these datatypes own or be owned by a user?",
        "inputType": "",
        "transition": "yesno"
    },
    14: {
        "prompt": "How many of each can be owned?",
        "inputType": "integer",
        "transition": ""
    },
    15: {
        "prompt": "What pages would you like on your website?",
        "inputType": "",
        "transition": "",
    },
    16: {
        "prompt": "What is this page called?",
        "inputType": "string",
        "transition": "",
    },
    17: {
        "prompt": "What is this page path name?",
        "inputType": "string",
        "transition": "",
    },
    18: {
        "prompt": "Who can view this page?",
        "inputType": "users",
        "transition": ""
    },
    19: {
        "prompt": "What can this page do?",
        "inputType": "string",
        "transition": ""
    },
    99: {
        "prompt": "DONE"
    }
}

const options = {
    0: {
        "next": [1],
        "conditionalnext": [], //check condition from condition attribute
        "yes": [],
        "no": [],
    },
    1: {
        "defined": [1
    },
    2: [3],
    3: [2, 4, 5],
    4: [4, 5],
    5: [15, 6],
    6: [7, 8],
    7: [8],
    8: [8, 9],
    9: [7, 10],
    10: [11, 15],
    11: []
}

/**
 * Transition Function from prompts to option
 * Returns next prompt from chosen option
 * CS173 - http://mfleck.cs.illinois.edu/building-blocks/version-1.3/state-diagrams.pdf
 * @param currentPrompt Current prompt integer
 * @param option Option chosen
 */
const transition = (currentPrompt, option) => {

}

module.exports = { prompts, transition };