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

  function holiday(){
    let btn = document.createElement('button');
    btn.id = 'btn-holiday';
    btn.innerHTML = 'Feriados';
    
    let buttonsContainer = document.querySelector('.buttons-container')
    buttonsContainer.appendChild(btn);
  }
  holiday('Feriados');
