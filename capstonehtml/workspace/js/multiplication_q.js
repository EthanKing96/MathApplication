

var counter = 1; //displays question number one. used to update question number


//document.getElementById("theCounter").innerHTML = counter; //displays question number one. used to update question number

//declares variables for javascript-------------------
var guess, rORw;
var num1, num2; 
var getQNum;
var questionNumber;
var tOneOutput;
var t1q, t2q, t3q, t4q;
var resultTotal = 0;//testing for results total
//--------------------------------------------------
var displayArray = [];//for testing
var displayArray1 = [];//for testing
var displayArray2 = [];//for testing
//--------------------------------------------------
var rightOrWrong = [];//for storing if question answered was right or wrong
var localStorage;
var questionStorage = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]; //storage for total number of questions

var tier1a =     [2,3,4,5,6,7,8,9,10];//storage for questions of "squared" notation

var t2qStorage = [0,1,2,3,4,5];//storage of questions avaiable in tier 2
var tier2a =     [2,2,2,3,3,4];//tier 2 variable 1 storage
var tier2b =     [3,4,5,4,5,5];//tier 2 variable 2 storage

var t3qStorage = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];//storage of questions available in tier 3
var tier3a=      [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5];//tier 3 variable 1 storage
var tier3b=      [6,7,8,9,6,7,8,9,6,7,8,9,6,7,8,9];//tier 3 variable 2 storage

var t4qStorage = [0,1,2,3,4,5];//storage of questions available in tier 4
var tier4a =     [6,6,6,7,7,8];//tier 4 variable 1 storage
var tier4b =     [7,8,9,8,9,9];//tier 4 variable 2 storage

getQuestionNumber();//populates variables when page is loaded

// Execute compare() when the user releases enter key on the keyboard
var input = document.getElementById("numb");
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("button1").click();
  }
});
 
function newQuestion(){ //calls compare and gen question. remove this function for practice quiz
    compare();
    getQuestionNumber();
}//end newQuestion

function getQuestionNumber(){ //start of function to generate num1, num2
		document.getElementById("numb").value = ""; //clears text box to empty
		document.getElementById("numb").focus();//brings focus to text box
       
       
        if (questionStorage.length === 0){//displays alert boxes once quiz ends
            //alert("end of quiz")
            //alert("Your got " + resultTotal + " out of 24 correct");//displays how many questions were correct
            displayResults();
        }
         else {   

        function genNum(){
        getQNum = Math.floor(Math.random() * 24) + 1;  //gen number to select question (case #)
        }
        }
//do forces getNum to run until a number that is generated that is in questionNumberStorage
     do {
          genNum();
          var checkIn = questionStorage.includes(getQNum); //checks if genNum number is in array
        }
        while(checkIn === false);
        
      //   document.getElementById("loc1").innerHTML = getQNum;   //*for testing* current question # retrieval attempt:
         displayArray.push(getQNum); //*for testing*adds which number was selected to testarray
         var questonLocation = questionStorage.indexOf(getQNum);  
            
        
            if (getQNum > -1){
                questionStorage.splice(questonLocation,1); //removes the number of the case used 
            } 
             
            switch(getQNum){ //takes valid number from questionStorage and uses it to select which case

                     //case for tier 1
                    case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
                       gent1();
                       break;
                    //case for tier 2
                    case 10: case 11: case 12: case 13: 
                       gent2();
                        break;
                    //case for tier 3    
                    case 14: case 15: case 16: case 17: case 18:
                        gent3();
                        break;
                    //case for tier 4    
                    case 19: case 20: case 21: case 22: case 23: case 24:
                        gent4();
                        break;
                    }//end switch
        document.getElementById("var1").innerHTML = num1;           //populates variable one in html code
        document.getElementById("var2").innerHTML = num2;           //populates variable two in html code
      document.getElementById("theCounter").innerHTML = "#" + counter + ".&nbsp&nbsp&nbsp";  //displays counter of current question
    //    document.getElementById("currentArrayOne").innerHTML = displayArray; //displays which number added to testarray
    //    document.getElementById("currentArrayTwo").innerHTML = questionStorage; //displays what question options are left
       counter++; //incfements question number by 1

}//end else  
//end questionNumber function
//code for tier one code---------------------------------------------------------------
 function gent1() {  
        function getNumT1(){
            t1q = Math.floor(Math.random() * 9)+ 2; //should do 2-10
            }//end getNumT1
        do{ // gen random number until it finds one in array
            getNumT1();
            var checkIn1 = tier1a.includes(t1q); //checks if ran gen is in array
        }
            while(checkIn1 === false); //once number is found,
        var qLoc1 = tier1a.indexOf(t1q); //get location of number
        
        var tOneOutput = tier1a[qLoc1]; //passes number in that location to var num1
        num1 = tOneOutput;
        num2 = num1; 
        if (t1q > -1){
            tier1a.splice(qLoc1,1); //removes number from question array
        }
}//end gent1 function
//*********************************************************************
//code for tiers 2-4 are same. question arrays are different
//*********************************************************************

//code for tier 2-----------------------------------------------------------------------
function gent2() { 
       function getNumT2(){
            t2q = Math.floor(Math.random() * 6);//get random number
            }//end getNumT2
        do{
            getNumT2(); //gen random number until it finds one in question storage array
            var checkIn2 = t2qStorage.includes(t2q);
        }
            while(checkIn2 === false);
        var qLoc2 = t2qStorage.indexOf(t2q);//get index of question number

        var swap = Math.floor((Math.random()*2)+1);//swaps variables location randomly
        switch(swap){
            case 1:
                num1 = tier2a[qLoc2];
                num2 = tier2b[qLoc2];
                break;
            case 2:
                num1 = tier2b[qLoc2];
                num2 = tier2a[qLoc2];
                break;
        }
//code below removes previous question from array to prevent duplicates
        if (t2q > -1){
            t2qStorage.splice(qLoc2,1);
            tier2a.splice(qLoc2,1);
            tier2b.splice(qLoc2,1);
        }
}//end gent2 function
//code for tier 3-----------------------------------------------------------------------
function gent3() {    
       function getNumT3(){
            t3q = Math.floor(Math.random() * 16);
            }//end getNumT3
        do{
            getNumT3();
            var checkIn3 = t3qStorage.includes(t3q);
        }
            while(checkIn3 === false);
        var qLoc3 = t3qStorage.indexOf(t3q);
    
        var swap = Math.floor((Math.random()*2)+1);
        switch(swap){
            case 1:
                num1 = tier3a[qLoc3];
                num2 = tier3b[qLoc3];
                break;
            case 2:
                num1 = tier3b[qLoc3];
                num2 = tier3a[qLoc3];
                break;
        }
        if (t3q > -1){
            t3qStorage.splice(qLoc3,1);
            tier3a.splice(qLoc3,1);
            tier3b.splice(qLoc3,1);
        }           
}//end gent3 function
//code for tier 4-----------------------------------------------------------------------
function gent4() {    
      function getNumT4(){
            t4q = Math.floor(Math.random() * 6);
            }//end getNumT4
        do{
            getNumT4();
            var checkIn4 = t4qStorage.includes(t4q);
        }
            while(checkIn4 === false);
        var qLoc4 = t4qStorage.indexOf(t4q);
    
        var swap = Math.floor((Math.random()*2)+1);
        switch(swap){
            case 1:
                num1 = tier4a[qLoc4];
                num2 = tier4b[qLoc4];
                break;
            case 2:
                num1 = tier4b[qLoc4];
                num2 = tier4a[qLoc4];
                break;
        }
        if (t4q > -1){
            t4qStorage.splice(qLoc4,1);
            tier4a.splice(qLoc4,1);
            tier4b.splice(qLoc4,1);
        }                      
}//end gent4 function
 function compare(evt) 
 {   
        var answer = num1 * num2;//creates question answer
        var guess = document.getElementById("numb").value;//gets value entered by user
        
        //below compares if answer is right or wrong
        if (isNaN(guess) == true || guess == "" || guess == " "){
            
            alert("Please enter a valid number");
            document.getElementById("numb").focus();//brings focus to text box
            evt.preventDefault();//this prevents page reloading if guess not valid
        }
        else{
                 //for testing
                displayArray1.push(num1); //stores variable one into an array to show for testing
                displayArray2.push(num2); //stores variable two into an array to show for testing
                //end testing
            
                if (guess == answer){
                rORw = "Correct";//used to display in practice quiz
                rightOrWrong.push("Correct");//for practice quiz to display which question was right or wrong
                resultTotal ++;} //for storing how many qestions correct
                else {
                rORw = "Wrong";
                rightOrWrong.push("Wrong");    
                }//used to display in practice quiz
                
            }//end else
//testing
 //   document.getElementById("demo").innerHTML = rORw;//displays if right or wrong
 //  document.getElementById("test").innerHTML = guess;//for testing, displays user guess
//    document.getElementById("theAnser").innerHTML = parseInt(answer);//displays answer
//    document.getElementById("previous1").innerHTML = displayArray1; //displays previous q var 1
//    document.getElementById("previous2").innerHTML = displayArray2; //displays previous q var 2
//    document.getElementById("rightOrWrong").innerHTML = rightOrWrong;//displaysed previous riht or wrong
    
 }//end compare function   
 
 var secondsLabel = document.getElementById("timer");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);

      //this linedetermains length
  if(totalSeconds > 60){
   //alert("end of quiz");
   //alert("Your got " + resultTotal + " out of 24 correct");
   //window.location.href = "/addition_dirq.html"; 
   displayResults();
  }
}//end setTtime() function
function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}//end pad() function

function displayResults()
 {   
       
       var text = "<tr><td>Your got " + resultTotal + " out of 24 correct!</td></tr>";
     
    localStorage.setItem("storageName",text);
    window.location.href = "results.html"; 
  // return text;
 }//end display results
 
