//side bar
const menuitems = document.querySelectorAll('.menu-item-2');
// massages
const messagesnotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messagesearch = document.querySelector('#message-search');

//theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
// const fontSizes = document.querySelectorAll('choose-size');

// var root =document.querySelector(':root');


// remove active class
const changeActiveItem = () =>{
    menuitems.forEach(item => {
        item.classList.remove('active');
    })
}

menuitems.forEach(item =>{
    item.addEventListener('click', ()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'Notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        }
        else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#Notifications .Notification-count').style.display = 'none';

        }


    })
})

// messages
messagesnotification.addEventListener('click',() =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesnotification.querySelector('.Notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    },2000);
})

//searches
const searchMessage = () => {
    const val = messagesearch.value.toLowerCase(); // Get the search query and convert to lowercase
  
    message.forEach(chat => {
        const h5Elements = chat.querySelectorAll('h5'); // Get all h5 elements within the chat
        let isMatch = false; // Flag to determine if any h5 element matches the search query

        // Loop through all h5 elements and check if any of them match the search query
        h5Elements.forEach(h5 => {
            const name = h5.textContent.toLowerCase(); // Get the text content of the h5 element
            if (name.includes(val)) {
                isMatch = true; // Set the flag if a match is found
            }
        });

        // Show or hide the chat based on whether a match was found
        chat.style.display = isMatch ? 'flex' : 'none';
    });
};


//search chat
messagesearch.addEventListener('keyup',searchMessage);


//theme customization
// open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
//close modal
const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none'
    }
}
themeModal.addEventListener('click',closeThemeModal);

theme.addEventListener('click',openThemeModal);

// remove active class of font size
const removesizeselector = () =>{
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

//Fonts size

const fontSizes = document.querySelectorAll('.choose-size span'); // Select all font size elements
const root = document.documentElement; // Select the root element



fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        let fontSize;
        removesizeselector();
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = "10px";
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = "13px";
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = "16px";
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = "19px";
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = "22px";
            root.style.setProperty('--sticky-top-left', '-10rem');
            root.style.setProperty('--sticky-top-right', '-33rem');
        }

        // Change font size of root html element
        document.querySelector('html').style.fontSize = fontSize;
    });
});



// Function to remove 'active' class from all elements in a NodeList
function removeActiveClass(elements) {
    elements.forEach(element => element.classList.remove('active'));
}

// Function to set the new primary color
function setPrimaryColor(color) {
    document.documentElement.style.setProperty('--color-primary', color);
}

// Function to set the new background colors
function setBackgroundColors(colors) {
    Object.keys(colors).forEach(key => {
        document.documentElement.style.setProperty(key, colors[key]);
    });
}

// Get all color spans and background divs
const colorSpans = document.querySelectorAll('.choose-color span');
const backgroundDivs = document.querySelectorAll('.choose-bg > div');

// Add click event listeners to color spans
colorSpans.forEach((span, index) => {
    span.addEventListener('click', () => {
        removeActiveClass(colorSpans);
        span.classList.add('active');

        // Set the new primary color based on the clicked span
        switch (index) {
            case 0:
                setPrimaryColor('hsl(252, 75%, 60%)');
                break;
            case 1:
                setPrimaryColor('hsl(52, 75%, 60%)');
                break;
            case 2:
                setPrimaryColor('hsl(352, 75%, 60%)');
                break;
            case 3:
                setPrimaryColor('hsl(152, 75%, 60%)');
                break;
            case 4:
                setPrimaryColor('hsl(202, 75%, 60%)');
                break;
            default:
                break;
        }
    });
});

// Add click event listeners to background divs
backgroundDivs.forEach((div, index) => {
    div.addEventListener('click', () => {
        removeActiveClass(backgroundDivs);
        div.classList.add('active');

        // Set the new background colors based on the clicked div
        switch (index) {
            case 0:
                setBackgroundColors({
                    '--color-white': 'hsl(252, 30%, 100%)',
                    '--color-light': 'hsl(252, 30%, 95%)',
                    '--color-dark': 'hsl(252, 30%, 17%)',
                    '--color-black': 'hsl(252, 30%, 10%)'
                });
                break;
            case 1:
                setBackgroundColors({
                    '--color-white': 'hsl(252, 30%, 17%)',
                    '--color-light': 'hsl(252, 30%, 10%)',
                    '--color-dark': 'hsl(252, 30%, 95%)',
                    '--color-black': 'hsl(252, 30%, 100%)'
                });
                break;
            case 2:
                setBackgroundColors({
                    '--color-white': 'hsl(252, 30%, 10%)',
                    '--color-light': 'hsl(252, 30%, 5%)',
                    '--color-dark': 'hsl(252, 30%, 90%)',
                    '--color-black': 'hsl(252, 30%, 100%)'
                });
                break;
            default:
                break;
        }
    });
});





document.addEventListener('DOMContentLoaded', function () {
        const sidebar = document.querySelector('.sidebar');
        const toggleButton = document.querySelector('.sidebar-toggle');
        const body = document.querySelector('body'); // Add this line

        // Function to handle toggle
        function handleToggle() {
            if (window.innerWidth < 1200) {
                sidebar.classList.toggle('active');
            }
        }

        // Function to close sidebar if clicked outside
        function handleClickOutside(event) {
            if (window.innerWidth < 1200) {
                if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
                    sidebar.classList.remove('active');
                }
            }
        }

        // Initial setup
        if (window.innerWidth < 1200) {
            toggleButton.style.display = 'block'; // Ensure toggle button is visible
            toggleButton.addEventListener('click', handleToggle);
            document.addEventListener('click', handleClickOutside); // Add event listener for clicks
        }

        // Handle window resize events to adjust visibility
        window.addEventListener('resize', function () {
            if (window.innerWidth < 1200) {
                toggleButton.style.display = 'block';
                document.addEventListener('click', handleClickOutside); // Ensure event listener is added on resize
            } else {
                toggleButton.style.display = 'none';
                sidebar.classList.remove('active'); // Hide sidebar if larger than 1200px
                document.removeEventListener('click', handleClickOutside); // Remove event listener if not needed
            }
        });
    });