const tabs = document.getElementsByClassName('tab');
const tabContents = document.getElementsByClassName('tab__content');
const tabActive = document.getElementsByClassName('tab_active');
const tabContentActive = document.getElementsByClassName('tab__content_active');

Array.from(tabs).forEach((tab, index) => {
    tab.onclick = () => {
        tabActive[0].classList.toggle('tab_active');
        tabContentActive[0].classList.toggle('tab__content_active');
        
        tabs[index].classList.toggle('tab_active');
        tabContents[index].classList.toggle('tab__content_active');

        return false;
    }
});