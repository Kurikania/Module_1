const getBtn = document.getElementById("getRandom"); 
const answerRandom = document.getElementById("answerRandom"); 
const getBtnSpecific = document.getElementById("getBtnSpecific");
const answerSpecific = document.getElementById("answerSpecific"); 
const getSpecific = document.getElementById("getSpecific");

getBtn.addEventListener("click", async (e)=> {
    const res = await axios.get(`https://api.adviceslip.com/advice`);
    answerRandom.innerText = res.data.slip.advice; 
})

getSpecific.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = getSpecific.elements.query.value;
    const res = await axios.get(`https://api.adviceslip.com/advice/search/` + searchTerm );
    answerSpecific.innerText = res.data.slips[0].advice; 
})
