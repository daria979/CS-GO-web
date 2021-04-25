

function DisplayAge() {

  let d = new Date();
  let input = document.getElementById("user_date_of_birth").value;
  if (input == "") return;
  let user = new Date(input);
  //calculate the Time zone Offset from user's time 
  let offset = new Date().getTimezoneOffset() * 1000 * 60;
  let newtimeinmilisec = d.getTime() - user.getTime() - offset;
  let sec = parseInt(newtimeinmilisec / 1000);
  let min = parseInt(sec / 60);
  let ore = parseInt(min / 60);
  let zi = parseInt(ore / 24);

  let user_year = user.getFullYear();
    let current_year = d.getFullYear();

    let user_years=current_year-user_year;

    let user_month = user.getMonth()+1;
    let current_month = d.getMonth();

    let user_day = user.getDate();
    let current_day = d.getDate();

    if(((user_month>current_month)||((user_month>current_month)&&(user_day>current_day)))&&user_years>0)
    {
      user_years--;
    }

  // ShowTime(zi, ore ,min, sec)
  ShowTime(user_years);

}

function ShowTime(user_years) {
  
  let age = "<span>" + user_years + " years"+"</span>";
  let text2 =" playing video games. " + "<br><br><br> Now it`s time to make it real! 👌";
  let element = "You have lost " + age + text2;
  document.getElementById("age").innerHTML = element;
}

setInterval(DisplayAge, 1000);


  
  