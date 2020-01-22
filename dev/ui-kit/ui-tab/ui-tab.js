const tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'), // Select tab navigation items
        tabContent = document.querySelectorAll('.tabs-content__item'), // Choose the tabs themselves
        tabName; 

    // We loop through each navigation element and attach a click handler that calls the selectTabNav function
    tabNav.forEach((item) => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach((item) => {
            // Delete the active class for all tab navigation elements
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');  // Add an active class for the element that was clicked.
        tabName = this.getAttribute('data-tab-name'); // Get the name of the tab we need
        selectTabContent(tabName); // Run the function to show the selected tab
    }

    function selectTabContent(tab) {
        // We go through all the tabs and check whether the element has a class equal to the name of the tab (variable tabName). If so, add the active tab class, if not, delete this class
        tabContent.forEach((item) => {
            let classList = item.classList;
            classList.contains(tab) ? classList.add('is-active') : classList.remove('is-active');
        });
    }
};

tab();
