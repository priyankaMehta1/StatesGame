states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
abbreviations = ["AL", "AK", "AR", "AZ", "CA", "CO", "CT","DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA","MI", "MN",  "MS","MO", "MT", "NE", "NV", "NH","NJ","NM","NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC","SD", "TN", "TX", "UT","VT","VA","WA", "WV","WI","WY"];
AdjaMatrx = {0:[8,9,41,23],1:[],2:[30,43,27,4],3:[23,41,24,35,42],4:[2,27,36],5:[15,30,35,26,49,43],6:[38,20,31,29],7:[29,37,19],8:[9,0],9:[8,0,39,32,41],10:[],11:[49,25,46,36,27,43],12:[13,48,14,24,16],13:[12,21,34,16],14:[12,24,26,40,22,48],15:[24,35,5,26],16:[13,34,47,45,41,24,12],17:[23,3,42],18:[28],19:[7,37,47,45],20:[28,44,6,38],21:[34,13],22:[48,14,40,33],23:[0,41,3,17],24:[12,16,41,3,35,15,20,14],25:[11,49,33,40],26:[14,40,49,5,15,24],27:[43,11,36,4,2],28:[18,44,20],29:[37,31,7],30:[42,35,5,2],31:[6,20,44,29,37],32:[45,41,39],33:[22,40,25],34:[47,16,13,21,37],35:[3,42,30,5,15,24],36:[11,46,27,4],37:[19,47,34,31,29],38:[6,20],39:[32,9],40:[22,33,25,49,26,14],41:[32,45,16,24,3,23,0,9],42:[17,3,35,30],43:[5,49,11,27,2,30],44:[28,31,20],45:[47,19,32,41,16],46:[11,36],47:[45,16,34,37,19],48:[22,14,12],49:[25,11,43,5,26,40]};
console.log(AdjaMatrx);
console.log("------------------------------------------------");
console.log("Adjacency Matrix checks");
console.log("------------------------------------------------");
getBorder(2);
getBorder(42);
getBorder(21);
getBorder(6);
getBorder(72);
console.log("------------------------------------------------");
console.log("Getting border states");
console.log("------------------------------------------------");
getBorderStates("AL");
getBorderStates("CalIForNia");
getBorderStates("VA");
getBorderStates("cOLORADO");
getBorderStates("Pennsylvania");
console.log("------------------------------------------------");
console.log("Do states border?");
console.log("------------------------------------------------");
doStatesBorder("AL","AR");
doStatesBorder("CA","OR");
doStatesBorder("Pennsylvania","cOLORaDO");
doStatesBorder("CalIForNia","cOLORaDO");
doStatesBorder("AR","CalIForNia");

function getBorder(integer)
{
    if(0<integer && integer<50)
    {
        console.log(AdjaMatrx[integer]);
    }
    else
    {
        console.log(integer + " not in matrix");
    }
}
function getBorderStates(state)
{
    num2 = 51;
    state = String(state);
    state = state.toUpperCase();
    if (state.length == 2)
    {
        num2 = abbreviations.indexOf(state);
    }
    else
    {
        state = state.substring(0,1) + state.substring(1).toLowerCase();
        num2 = states.indexOf(state);
    }
    console.log("Border states of " + state + " are: ");
    array = [];
    for(i=0;i<AdjaMatrx[num2].length;i++)
    {
        array[i] = (states[AdjaMatrx[num2][i]]);
    }
    console.log(array);
}
function doStatesBorder(state, state2)
{
    number = 51;
    number2 = 51;
    state = String(state).toUpperCase();
    state2 = String(state2).toUpperCase();

    if (state.length == 2)
    {
        number = abbreviations.indexOf(state);
    }
    else
    {
        state = state.substring(0,1) + state.substring(1).toLowerCase();
        number = states.indexOf(state);
    }
    if (state2.length == 2)
    {
        number2 = abbreviations.indexOf(state2);
    }
    else
    {
        state2 = state2.substring(0,1) + state2.substring(1).toLowerCase();
        number2 = states.indexOf(state2);
    }
    array1 = AdjaMatrx[number];
    if(array1.includes(number2))
    {
        console.log(true);
        console.log(states[number] + " and " + states[number2] + " border!");
    }
    else
    {
        console.log(false);
        console.log(states[number] + " and " + states[number2] + " do not border!");
    }
}

//modules.exports.getBorderStates = getBorderStates;
//modules.exports.doStatesBorder = doStatesBorder;
//get borders
//get  border states
//do states border
//check len of input
//if its two then use the array of abbreviations
//else use the stae names in allcaps
//maybe use tha rray of len 51 and the Number
// syayes and use that index

//test cases: both caps both lower or one of each
//or just the actual name