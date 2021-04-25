document.addEventListener('submit', function(event){
    event.preventDefault()
})


//#region 1
function DisplayMessage() {
  var userinput = document.getElementById("user_name").value;
  text = "Hello, " + userinput + "!";
  if (userinput == "") text = "";
     showName();
}
function showName() {
  document.getElementById("hello").innerHTML = text;
}
setInterval(DisplayMessage, 1000);
//#endregion 



//#region Clock
function DisplayTime() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let clock;
  clock = checker(h);
  clock += ":";
  clock += checker(m);
  clock += ":";
  clock += checker(s);
  document.getElementById("clock").innerHTML = clock;
}
function checker(value) {
  if (value<10) {
    return "0" + value;
  }
  return value;
}
setInterval(DisplayTime, 1000);
//#endregion




function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the hello text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the hello text
  if (checkBox.checked == true){
    text.style.display = "block"
  } else {
    text.style.display = "none";
  }
}

//formular checked

function check_name(){
  let input_name = document.getElementById("user_name");
  let ok1=false;
  if(input_name =="")
        ok1=false;
      else
        ok1=true;

   return ok1;
}
function check_date(){
  let input = document.getElementById("user_date_of_birth").value;
  if (input == "") return false;
  else return true;
  // let ok2=false;
  // if(typeof input_date=='undefined')
  //   ok2=false;
  // else
  //   ok2=true;

  // return ok2;
}
function check_maps()
{
  let maps=document.getElementsByName("map");
  let ok3=false;
  for(let i=0;i<maps.length;i++)
  {
    if (maps[i].checked == true) {
      ok3=true;    
      break;
    }
    
  }
 return ok3;
}
function check_teams()
{
  let teams=document.getElementsByName("teams");
  let ok4=false;
  for(let i=0;i<teams.length;i++)
  {
    if (teams[i].checked == true) {
      ok4=true;
    }
  }
  return ok4;
}
function check_gender()
{
  var gender_m = document.getElementById("male");
  var gender_f = document.getElementById("female");
  let ok5=false;
  if (gender_m.selected == true)
    ok5=true;
  else if(gender_f.selected==true)
    ok5=true;
    else
      ok5=false;
  return ok5;
}

function check_submit(){
  console.log(check_name());
  console.log(check_date());
  console.log(check_maps());
  console.log(check_teams());
  console.log(check_gender());
  if(check_name()==true&&check_date()==true&&check_maps()==true&&check_teams()==true&&check_gender()==true)
    console.log("All went well.");
  else
    swal("Warning!😲","Please complete all fields.", "warning");
}
