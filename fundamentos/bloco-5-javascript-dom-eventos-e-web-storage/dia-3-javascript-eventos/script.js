function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  //Exercicio 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMonth(){
      let daysID = document.querySelector('#days');

      for(let index = 0; index < dezDaysList.length; index += 1){
          let day = dezDaysList[index];
          let dayListItem = document.createElement('li');

          if(day === 24 || day === 31){
              dayListItem.className = 'day holiday';
              dayListItem.innerHTML = day;
              daysID.appendChild(dayListItem);
          }else if(day === 4 || day === 11 || day === 18){
              dayListItem.className = 'day friday';
              dayListItem.innerHTML = day;
              daysID.appendChild(dayListItem);
          }else if(day === 25){
              dayListItem.className = 'day friday holiday';
              dayListItem.innerHTML = day;
              daysID.appendChild(dayListItem);
          }else{
              dayListItem.className = 'day';
              dayListItem.innerHTML = day;
              daysID.appendChild(dayListItem);
          }
      }
  }
  createDaysOfTheMonth();

  //Exercicio 2

  function buttonHoliday(){
    let btn = document.createElement('button');
    btn.id = 'btn-holiday';
    btn.innerHTML = 'Feriados';
    
    let buttonsContainer = document.querySelector('.buttons-container')
    buttonsContainer.appendChild(btn);
  }
  buttonHoliday('Feriados');

  //Exercicio 3

  function changeBgColorHoliday(){
    let btnClickHoliday = document.querySelector('#btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    let bg = 'rgb(238,238,238)';
    let newBg = 'white';

    btnClickHoliday.addEventListener('click', function(){
        for(let index = 0; index < holidays.length; index += 1){
            if(holidays[index].style.backgroundColor === newBg){
                holidays[index].style.backgroundColor = bg;
            }else{
                holidays[index].style.backgroundColor = newBg;
            }
        }
    });
  }
  changeBgColorHoliday();

  //Exercicio 4

  function createBtnFriday(){
    let btnFriday = document.createElement('button');
    btnFriday.id = 'btn-friday';
    btnFriday.innerHTML = 'Sexta-feira';

    let buttonsContainer = document.querySelector('.buttons-container');
    buttonsContainer.appendChild(btnFriday);
  }
  createBtnFriday('Sexta-Feira');

  //Exercicio 5

  let arraySexta = [4, 11, 18, 25];

  function changeTextFriday(fridayArray){
    let btnClickFriday = document.querySelector('#btn-friday');
    let fridays = document.querySelectorAll('.friday')
    let message = 'Sexta-feira!';

    btnClickFriday.addEventListener('click', function(){
        for(let index = 0; index < fridays.length; index += 1){
            if(fridays[index].innerHTML !== message){
                fridays[index].innerHTML = message; 
            }else{
                fridays[index].innerHTML = fridayArray[index];
            }
        }
    });
  }
  changeTextFriday(arraySexta);

  //Exercicio 6

  function zoomMouseOver(){
      let days = document.querySelector('#days');

      days.addEventListener('mouseover', function(event){
        event.target.style.fontSize = '30px';
      });
  }

  function zoomMouseOut(){
      let days = document.querySelector('#days');

      days.addEventListener('mouseout', function(event){
        event.target.style.fontSize = '20px';
      });
  }

  zoomMouseOver();
  zoomMouseOut();

  //Exercicio 7

  function addTask(tarefa){
    let task = document.createElement('span');
    let myTasks = document.querySelector('.my-tasks');

    myTasks.appendChild(task);
    task.innerHTML = tarefa;
  }
  addTask("Projeto");

  //Exercicio 8

  function addColoredSubtitles(color){
    let taskColor = document.createElement('div');
    let myTasks = document.querySelector('.my-tasks');
    
    taskColor.className = 'task';
    myTasks.appendChild(taskColor);

    taskColor.style.backgroundColor = color;
  }
  addColoredSubtitles("orange");

  //Exercicio 9

  function addEvent(){
    let clickColor = document.querySelector('.task');

    clickColor.addEventListener('click', function(event){
        if(event.target.className !== 'task selected'){
            event.target.className = 'task selected';
        }else{
            event.target.className = 'task';
        }
    });
  }
  addEvent();

  //Exercicio 10

  function addColorDay(){
    let day = document.querySelector('#days');

    day.addEventListener('click', function(event){
        if(event.target.style.color != 'orange'){
            event.target.style.color = 'orange';
        }else{
            event.target.style.color = 'rgb(119,119,119)';
        }
    });
  }
  addColorDay();

