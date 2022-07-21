//IMAGE SELECTION

function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
    }

    //CIRCLE COLOR CHANGE ON SELECTION

    function chaneCircleColor(color){
        const circle = document.querySelector('.circle');
        circle.style.background = color; 
    }

    //MENU TOGGL
    
    function toggleMenu(color){
        var menuToggle = document.querySelector('.toggle');
        var navigation = document.querySelector('.navigation');
        menuToggle.classList.toggle('active')
        navigation.classList.toggle('active')
    }