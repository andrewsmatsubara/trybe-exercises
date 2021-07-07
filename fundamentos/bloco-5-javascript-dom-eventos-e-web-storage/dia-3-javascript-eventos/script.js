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

          if(day === 24 || day === 25 || day === 31){
              dayListItem.className = 'day holiday';
              dayListItem.innerHTML = day;
              daysID.appendChild(dayListItem);
          }else if(day === 4 || day === 11 || day === 18 || day === 25){
              dayListItem.className = 'day friday';
              dayListItem.innerHTML = day;
              daysID.appendChild(dayListItem);
          }else if(day === 25){
              dayListItem.className = 'day holiday friday';
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