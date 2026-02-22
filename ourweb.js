document.addEventListener('DOMContentLoaded', function() {
  // For the Menu List Show and Hide (toggle).
  const menuIcon = document.querySelector('#menu_Icon')
  const menuList = document.querySelector('#menuList')

  menuIcon.addEventListener('click',() => {
    menuIcon.classList.toggle('active')
    menuList.classList.toggle('show')
  })

  // For Auto Type the List.
  var typed = new Typed('#typed',{
    strings: ['Cinematic Editing.',
              'Color Grading.',
              'Motion Graphics.',
              'Sound Designs.',
              'Thumbnail Design and etc.'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
  });

  // For show the auto current year in footer.
  document.getElementById("year").textContent = new Date().getFullYear();

  // for toggle the contact bar in navigation.
  // contact button
  const cntBtn = document.querySelector('#contact_btn')
  // contact list
  const cntShow = document.querySelector('#cnt_list')

  // contact toggle hide/show
  cntBtn.addEventListener('click',() =>{
    cntShow.classList.toggle('cnt_show')
  });

  const aboutBtn = document.querySelector('#About-US')
  const aboutShow = document.querySelector('#aboutus')
  aboutBtn.addEventListener('click',() =>{
    aboutShow.classList.add('showaboutus')
  })

  const aboutCloseBtn = document.querySelector('#closeaboutus')
  aboutCloseBtn.addEventListener('click',() =>{
    aboutShow.classList.remove('showaboutus')
  })

  const shedulerBtn = document.getElementById('meetingSheduler')
  const sheduler = document.querySelector('#Sheduler')
  shedulerBtn.addEventListener('click',() =>{
    sheduler.classList.toggle('shedulerShow')
  })

  const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const meetingList = document.getElementById("meetingList");
const selectedDateTitle = document.getElementById("selectedDateTitle");
const addMeetingBtn = document.getElementById("addMeeting");
const meetingText = document.getElementById("meetingText");

let date = new Date();
let selectedDate = null;
let meetings = {};

function renderCalendar() {
    calendarDays.innerHTML = "";

    let year = date.getFullYear();
    let month = date.getMonth();

    monthYear.textContent = date.toLocaleString("default", {
        month: "long",
        year: "numeric"
    });

    let firstDay = new Date(year, month, 1).getDay();
    let totalDays = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        let emptyDiv = document.createElement("div");
        calendarDays.appendChild(emptyDiv);
    }

    for (let i = 1; i <= totalDays; i++) {
        let dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = i;

        dayDiv.addEventListener("click", () => {
            document.querySelectorAll(".day").forEach(d => d.classList.remove("selected"));
            dayDiv.classList.add("selected");

            selectedDate = `${year}-${month+1}-${i}`;
            selectedDateTitle.textContent = `Meetings on ${selectedDate}`;
            showMeetings();
        });

        calendarDays.appendChild(dayDiv);
    }
}

function showMeetings() {
    meetingList.innerHTML = "";

    if (meetings[selectedDate]) {
        meetings[selectedDate].forEach(meet => {
            let div = document.createElement("div");
            div.textContent = meet;
            meetingList.appendChild(div);
        });
    }
}

addMeetingBtn.addEventListener("click", () => {
    if (!selectedDate) {
        alert("Select a date first!");
        return;
    }

    if (!meetingText.value) return;

    if (!meetings[selectedDate]) {
        meetings[selectedDate] = [];
    }

    meetings[selectedDate].push(meetingText.value);
    meetingText.value = "";
    showMeetings();
});

prevBtn.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

nextBtn.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();


});