'use strict';
const rates = document.querySelector('.rates'); 
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const totalRating = document.querySelector('.total-rating');
let currentTarget=null;
let currMark;
rates.addEventListener('click',(e)=>{
    
    if(currentTarget!==null)
    {
           currentTarget.style.background="var(--mydarkblue)";
           currentTarget.style.color ="var(--LightGrey)";
    }
    const btn = e.target.classList[0];
    let nbtn = document.querySelector(`.${btn}`); 
    nbtn.style.background="var(--Orange)";
    nbtn.style.color = 'var(--white)';
    currMark=nbtn.innerHTML;
    currentTarget=nbtn;
});
function submit()
{
    if(currentTarget!==null)
    {
        section1.classList.add("hidden");
        section2.classList.remove("hidden");
        totalRating.innerHTML =`<p>you selected ${currMark} out 5<p>`;
    }
    
}

