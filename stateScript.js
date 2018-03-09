function doClick0()
{
   clicked(0,alabama)
}
function doClick1()
{
   clicked(1,alaska)
}
function doClick2()
{
   clicked(2,arizona)
}
function doClick3()
{
   clicked(3,arkansas)
}
function doClick4()
{
   clicked(4,california)
}
function doClick5()
{
   clicked(5,colorado)
}
function doClick6()
{
   clicked(6,connecticut)
}
function doClick7()
{
   clicked(7,delaware)
}
function doClick8()
{
   clicked(8,florida)
}
function doClick9()
{
   clicked(9,georgia)
}
function doClick10()
{
   clicked(10,hawaii)
}
function doClick11()
{
   clicked(11,idaho)
}
function doClick12()
{
   clicked(12,illinois)
}
function doClick13()
{
   clicked(13,indiana)
}
function doClick14()
{
   clicked(14,iowa)
}
function doClick15()
{
   clicked(15,kansas)
}
function doClick16()
{
   clicked(16,kentucky)
}
function doClick17()
{
   clicked(17,louisiana)
}
function doClick18()
{
   clicked(18,maine)
}
function doClick19()
{
   clicked(19,maryland)
}
function doClick20()
{
   clicked(20,massachusetts)
}
function doClick21()
{
   clicked(21,michigan)
}
function doClick22()
{
   clicked(22,minnesota)
}
function doClick23()
{
   clicked(23,mississippi)
}
function doClick24()
{
   clicked(24,missouri)
}
function doClick25()
{
   clicked(25,montana)
}
function doClick26()
{
   clicked(26,nebraska)
}
function doClick27()
{
   clicked(27,nevada)
}
function doClick28()
{
   clicked(28,newhampshire)
}
function doClick29()
{
   clicked(29,newjersey)
}
function doClick30()
{
   clicked(30,newmexico)
}
function doClick31()
{
   clicked(31,newyork)
}
function doClick32()
{
   clicked(32,northcarolina)
}
function doClick33()
{
   clicked(33,northdakota)
}
function doClick34()
{
   clicked(34,ohio)
}
function doClick35()
{
   clicked(35,oklahoma)
}
function doClick36()
{
   clicked(36,oregon)
}
function doClick37()
{
   clicked(37,pennsylvania)
}
function doClick38()
{
   clicked(38,rhodeisland)
}
function doClick39()
{
   clicked(39,southcarolina)
}
function doClick40()
{
   clicked(40,southdakota)
}
function doClick41()
{
   clicked(41,tennessee)
}
function doClick42()
{
   clicked(42,texas)
}
function doClick43()
{
   clicked(43,utah)
}
function doClick44()
{
   clicked(44,vermont)
}
function doClick45()
{
   clicked(45,virginia)
}
function doClick46()
{
   clicked(46,washington)
}
function doClick47()
{
   clicked(47,westvirginia)
}
function doClick48()
{
   clicked(48,wisconsin)
}
function doClick49()
{
   clicked(49,wyoming)
}

function clicked(num,object)
{
    if(states[num].toLowerCase() === state2 && bordersOfState.includes(num))
    {
        object.style['fill'] = 'magenta';
        immobilize();
    }
    else if(bordersOfState.includes(num))
    {
        stateCount += 1;
        object.style['fill'] = 'magenta';
        stateClicked = object;
        statesClicked.push(object);
        bordersOfState = AdjaMatrx[num];
    }
    else if(!statesClicked.includes(object))
    {
        object.style['fill'] = 'none';
        hintCount += 1;
        
    }
}

//how we start the timer
function startUnixTimer() 
{
	time1 = Date.now();
	timer_2 = setInterval(displayUnixTimer, 100);
}

//if the program terminates automatically, this is the display
function stopUnixTimer() 
{
	time2 = Date.now()-time1;
	clearInterval(timer_2);
	time = Math.floor(time2/1000);
	stateCount +=1;
	message = "seconds elapsed: " + time + " and number of states clicked: " + stateCount;
	if(hintCount > 0)
	{
	    message += " and hints used: " + hintCount;
	    time = time + hintCount;
	}
    timeDisplay.innerHTML = "Your score is " + Math.floor(100*(stateCount/time));
}

//if the user terminates the program manually, this is the display
function stopUnixTimer1() 
{
	clearInterval(timer_2);
	timeDisplay.innerHTML = "Time stopped";
}

//the display for the timer
function displayUnixTimer() 
{
	timeDisplay.innerHTML = Date.now();
}

//what occurs when the program terminates automatically (without user interference)
function immobilize()
{
    for(i=0;i<statesClicked.length;i++)
    {
        statesClicked[i].style['fill'] = 'cyan';
    }
    documentArray[num1].style['fill'] = 'cyan';
    documentArray[num2].style['fill'] = 'cyan';
    stateDisplay.innerHTML = "Good job! You have reached your destination.";
    state1 = "";
    stateClicked = "";
    bordersOfState = [];
    state2 = "";
    statesClicked = [];
    stopUnixTimer();
    hintCount = 0;
    stateCount = 0;
}

//this is what happens when the start button is clicked
function start()
{
    for(i=0;i<50;i++)
    {
        documentArray[i].style['fill'] = '#f3f315';
    }
    
    num1 = Math.floor((Math.random() * 49));
    num2 = Math.floor((Math.random() * 49));
    if(num1 == 10 | num1 == 1)
    {
        num1 = Math.floor((Math.random() * 49));
    }
    if(num2 == 10 | num2 == 1)
    {
        num2 = Math.floor((Math.random() * 49));
    }
    
    // $.get( "getrandom", {},
    //     function( data )
    //     {
    //         giveNumbers(data);
    //     }
    // )
    
    // if(num1 == 10 || num1 == 1 || num2 == 10 || num2 == 1)
    // {
    //     $.get( "getrandom", {},
    //         function( data )
    //         {
    //             num1 = data[0];
    //             num2 = data[1];
    //         }
    //     )
    // }
    
    state1 = states[num1].toLowerCase();
    state2 = states[num2].toLowerCase();
    stateClicked = state1;
    documentArray[num1].style['fill'] = 'magenta';
    bordersOfState = AdjaMatrx[num1];
    stateDisplay.innerHTML = "Go from " + state1 + " to " + state2;
    startUnixTimer();
}

function giveNumbers(data)
{
    num1 = data[0];
    num2 = data[1];
}

//this is applicable for when the user terminates the game manually
function end()
{
    for(i=0;i<50;i++)
    {
        documentArray[i].style['fill'] = '#f3f315';
    }
    state1 = "";
    stateClicked = "";
    bordersOfState = [];
    state2 = "";
    stateCount = 0;
    hintCount = 0;
    statesClicked = [];
    stateDisplay.innerHTML = "Game ended";
    stopUnixTimer1();
}

//gives the user a border of the state that they are stuck on
function hint()
{
    hintCount += 1;
    stateDisplay.innerHTML = "Go from " + state1 + " to " + state2 + "--------->" + "A border state is " + states[bordersOfState[0]];
}

//"imports" the text fields from the html for editing
var stateDisplay = document.getElementById('textField_State');
var timeDisplay = document.getElementById('textField_State1');

//creates an element for each state 
var alabama = document.getElementById('AL');
var alaska = document.getElementById('AK');
var arizona = document.getElementById('AZ');
var arkansas = document.getElementById('AR');
var california = document.getElementById('CA');
var colorado = document.getElementById('CO');
var connecticut = document.getElementById('CT');
var delaware = document.getElementById('DE');
var florida = document.getElementById('FL');
var georgia = document.getElementById('GA');
var hawaii = document.getElementById('HI');
var idaho = document.getElementById('ID');
var illinois = document.getElementById('IL');
var indiana = document.getElementById('IN');
var iowa = document.getElementById('IA');
var kansas = document.getElementById('KS');
var kentucky = document.getElementById('KY');
var louisiana = document.getElementById('LA');
var maine = document.getElementById('ME');
var maryland = document.getElementById('MD');
var massachusetts = document.getElementById('MA');
var michigan = document.getElementById('MI');
var minnesota = document.getElementById('MN');
var mississippi = document.getElementById('MS');
var missouri = document.getElementById('MO');
var montana = document.getElementById('MT');
var nebraska = document.getElementById('NE');
var nevada = document.getElementById('NV');
var newhampshire = document.getElementById('NH');
var newjersey = document.getElementById('NJ');
var newmexico = document.getElementById('NM');
var newyork = document.getElementById('NY');
var northcarolina = document.getElementById('NC');
var northdakota = document.getElementById('ND');
var ohio = document.getElementById('OH');
var oklahoma = document.getElementById('OK');
var oregon = document.getElementById('OR');
var pennsylvania = document.getElementById('PA');
var rhodeisland = document.getElementById('RI');
var southcarolina = document.getElementById('SC');
var southdakota = document.getElementById('SD');
var tennessee = document.getElementById('TN');
var texas = document.getElementById('TX');
var utah = document.getElementById('UT');
var vermont = document.getElementById('VT');
var virginia = document.getElementById('VA');
var washington = document.getElementById('WA');
var westvirginia = document.getElementById('WV');
var wisconsin = document.getElementById('WI');
var wyoming = document.getElementById('WY');

//creates onclick methods for each state
alabama.onclick = doClick0;
alaska.onclick = doClick1;
arizona.onclick = doClick2;
arkansas.onclick = doClick3;
california.onclick = doClick4;
colorado.onclick = doClick5;
connecticut.onclick = doClick6;
delaware.onclick = doClick7;
florida.onclick = doClick8;
georgia.onclick = doClick9;
hawaii.onclick = doClick10;
idaho.onclick = doClick11;
illinois.onclick = doClick12;
indiana.onclick = doClick13;
iowa.onclick = doClick14;
kansas.onclick = doClick15;
kentucky.onclick = doClick16;
louisiana.onclick = doClick17;
maine.onclick = doClick18;
maryland.onclick = doClick19;
massachusetts.onclick = doClick20;
michigan.onclick = doClick21;
minnesota.onclick = doClick22;
mississippi.onclick = doClick23;
missouri.onclick = doClick24;
montana.onclick = doClick25;
nebraska.onclick = doClick26;
nevada.onclick = doClick27;
newhampshire.onclick = doClick28;
newjersey.onclick = doClick29;
newmexico.onclick = doClick30;
newyork.onclick = doClick31;
northcarolina.onclick = doClick32;
northdakota.onclick = doClick33;
ohio.onclick = doClick34;
oklahoma.onclick = doClick35;
oregon.onclick = doClick36;
pennsylvania.onclick = doClick37;
rhodeisland.onclick = doClick38;
southcarolina.onclick = doClick39;
southdakota.onclick = doClick40;
tennessee.onclick = doClick41;
texas.onclick = doClick42;
utah.onclick = doClick43;
vermont.onclick = doClick44;
virginia.onclick = doClick45;
washington.onclick = doClick46;
westvirginia.onclick = doClick47;
wisconsin.onclick = doClick48;
wyoming.onclick = doClick49;

//instantiates variables used throughout the code
var states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
var abbreviations = ["AL", "AK", "AR", "AZ", "CA", "CO", "CT","DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA","MI", "MN",  "MS","MO", "MT", "NE", "NV", "NH","NJ","NM","NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC","SD", "TN", "TX", "UT","VT","VA","WA", "WV","WI","WY"];
var stateClicked = '';
var statesClicked = [];
var documentArray = [alabama,alaska,arizona,arkansas,california,colorado,connecticut,delaware,florida,georgia,hawaii,idaho,illinois,indiana,iowa,kansas,kentucky,louisiana,maine,maryland,massachusetts,michigan,minnesota,mississippi,missouri,montana,nebraska,nevada,newhampshire,newjersey,newmexico,newyork,northcarolina,northdakota,ohio,oklahoma,oregon,pennsylvania,rhodeisland,southcarolina,southdakota,tennessee,texas,utah,vermont,virginia,washington,westvirginia,wisconsin,wyoming];
var stateCount = 0;
var AdjaMatrx = {0:[8,9,41,23],1:[],2:[30,43,27,4],3:[23,17,41,24,35,42],4:[2,27,36],5:[15,30,35,26,49,43],6:[38,20,31,29],7:[29,37,19],8:[9,0],9:[8,0,39,32,41],10:[],11:[49,25,46,36,27,43],12:[13,48,14,24,16],13:[12,21,34,16],14:[12,24,26,40,22,48],15:[24,35,5,26],16:[13,34,47,45,41,24,12],17:[23,3,4,42],18:[28],19:[7,37,47,45],20:[28,44,6,38],21:[34,13,48],22:[48,14,40,33],23:[0,41,3,17],24:[12,16,41,3,35,15,20,14],25:[11,49,33,40],26:[14,40,49,5,15,24],27:[43,11,36,4,2],28:[18,44,20],29:[37,31,7],30:[42,35,5,2],31:[6,20,44,29,37],32:[45,41,39],33:[22,40,25],34:[47,16,13,21,37],35:[3,42,30,5,15,24],36:[11,46,27,4],37:[19,47,34,31,29],38:[6,20],39:[32,9],40:[22,33,25,49,26,14],41:[32,45,16,24,3,23,0,9],42:[17,3,35,30],43:[5,49,11,27,2,30],44:[28,31,20],45:[47,19,32,41,16],46:[11,36],47:[45,16,34,37,19],48:[22,21,14,12],49:[25,11,43,5,26,40]};
var bordersOfState = [];
var state1 = "";
var state2 = "";
var hintCount = 0;
var time1 = 0;
var time2 = 0;
var num1 = 50;
var num2 = 50;

//The game should be fun, reasonably challenging, have hints, restart, give up, scoring, not be impossible and be finite.

//1) Server Side: Node server, css js folders (etc.) multiple get handlers
//2) provide a meaningful, programmatic reponse to the problem of not knowing the answer (10 points)
//3) indicate correct responses (5 points)
//4) display progress in a logical, intuitive fashion (2 points) 
//5) diplay information within the page [not expanding elements or the page] (2 points)
//6) provide an indication of whether the game was won or lost (2 points)
//7) provide the user the ability to start, restart or quit (2 points )
//8) have accessible buttons (2 points)
//9) respond to user interaction with minimial additional interaction (2 points)
//10) include properly formatted <doctype, html, head, title, body and div> tags (5 points)
//11) source to a separate javascript file (5 points)
//12) store data objects in a separate file (2 points)
//13) include css formatting (2 points)
//14) be accessible from your tjhsst/~ homepage (5 points)
//15) javascript should have correctly formatted/tabbed and intuitive variable names (5 points)