const deg = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");


let once = 0;
const interval = setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

    if(once === 0) {
        document.getElementById('clock-container').style.visibility = 'visible';
    }
    once = 1;

    const time = `${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`;
    document.title = `Clock UI Design | ${time}`;
}, 1000);



function handleToggle() {
    let darkThemeSelected = document.querySelector('body').classList.contains('dark') === true;

    if (darkThemeSelected) {
        document.querySelector('body').classList.remove('dark');
        document.querySelector('body').classList.add('light');
    } else {
        document.querySelector('body').classList.remove('light');
        document.querySelector('body').classList.add('dark');
    }
}


document.getElementById('modeToggler').addEventListener('click', handleToggle);

