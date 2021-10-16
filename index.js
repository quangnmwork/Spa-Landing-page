const sectionBenefit = document.querySelector('.section-benefit');
let allSections = document.querySelectorAll(`section[class*="section"]`);
const btnHeader = document.querySelector('.btn_header');
const sectionFooter = document.querySelector('.footer');
const cardStoryQuoteDetail = document.querySelector('.card-stories__quote-detail');

const cardStoryImgPerson = document.querySelector('.card-stories__img');
const cardStoryNamePerson = document.querySelector('.card-stories__name');
const cardStory = document.querySelectorAll('.card-stories');
let indexImg = 0 ;
allSections = [...allSections,sectionFooter];


// const storiesArray = [
//     {
//         quote: 'In tincidunt lectus lectus, a faucibus diam finibus et. Duis vitae purus eget lacus mattis fringilla eu non ante. Quisque eget lacus arcu. Pellentesque eleifend hendrerit nulla eu porta. Mauris mollis, risus vitae posuere fermentum, quam diam venenatis ligula, et elementum urna arcu quis nibh. ',
//         img: 'img/test1.jpeg',
//         name: 'Lisa Domera'
//     },
//     {
//         quote: 'Duis accumsan a nunc non posuere. Aenean nec purus nibh. Nullam volutpat et purus eleifend facilisis. Mauris venenatis posuere lectus, eget dignissim ex dignissim at. Nulla facilisi. Sed sollicitudin imperdiet tortor id molestie. Quisque sodales nec tellus nec consectetur. Maecenas a interdum augue. ',
//         img: 'img/test2.jpg',
//         name: 'Zoe Mandela'
//     },

//     {
//         quote: 'Sed vulputate augue nec tincidunt placerat. Morbi ac porttitor sem. Sed sed laoreet metus, sit amet viverra augue. Phasellus nunc ligula, vulputate non blandit eget, rhoncus a felis. Sed vitae dui ut urna sagittis accumsan. Vestibulum mauris nunc, mattis imperdiet tempor non, pulvinar vitae risus.  ',
//         img: 'img/test3.jpg',
//         name: 'Angela Tourma'
//     },           
// ];

const changeStoriesHandle = () => {  
    if (indexImg >= cardStory.length){
        indexImg = 0;
    }
    indexImg++;
    cardStory.forEach(card => {
        card.style.display = 'none';
    })
    cardStory[indexImg-1].style.display='flex';
    

    setTimeout(changeStoriesHandle,3000);
}


const btnHeaderHandleClick = () => {
    btnHeader.addEventListener('click' , (e) => {
        e.preventDefault();
        sectionBenefit.scrollIntoView({behavior:'smooth'});
    });
}
const revealSection = (entries, observer) => {
    const [entry] = entries;
  
    if (!entry.isIntersecting) return;
  
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});
const sectionScrollHandle = () => {allSections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
    });
};


function main() {
    btnHeaderHandleClick();
    sectionScrollHandle();
    changeStoriesHandle();
}
main();