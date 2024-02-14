import './index.css';

document.getElementById('open')?.addEventListener('click', function() {
  const dialog = document.getElementById('dialog');
  dialog.classList.remove('hidden', 'hide');
  dialog.classList.add('show');
  dialog.setAttribute('aria-modal', 'true');
});

document.getElementById('close')?.addEventListener('click', function() {
  const dialog = document.getElementById('dialog');
  dialog.classList.remove('show');
  dialog.classList.add('hide');
  setTimeout(() => dialog.classList.add('hidden'), 200);
  dialog.setAttribute('aria-modal', 'false');
});


const searchTerms = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

document.getElementById('search')?.addEventListener('input', function(e) {
  const input = e.target.value;
  const results = searchTerms.filter(term => term.toLowerCase().startsWith(input.toLowerCase()));

  const resultsContainer = document.getElementById('autocomplete-results');
  resultsContainer.classList.add('hidden');

  if (results.length > 0 && input !== '') {
    
    resultsContainer.classList.remove('hidden');
  }
  if(input !== ''){
    document.getElementById('input-clear')?.classList.remove('hidden');

  }else{
    document.getElementById('input-clear')?.classList.add('hidden');
  
  }
});
document.getElementById('input-clear')?.addEventListener('click', function() {
  document.getElementById('search').value='';
  document.getElementById('input-clear')?.classList.add('hidden');
  document.getElementById('autocomplete-results')?.classList.add('hidden');

})
const apha = ['ا', 'ب', 'ت', 'ث', 'ج','ح','خ',
'د','ذ','ر','ز','س','ش','ص','ض'];

function filterByAlpha(e){
  let elements =document.getElementsByClassName('alpha-btn')
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

  element.classList.remove('text-zinc-50','bg-primary');
  element.classList.add('text-zinc-600','bg-white');
  }
  
  e.target.classList.remove('text-zinc-600','bg-white');
  e.target.classList.add('text-zinc-50','bg-primary');
   
 } 
apha.forEach(function(item, index) {
  // Create a new list item
  var liElement = document.createElement('button');
  liElement.textContent = item;
  // liElement.classList.add('block','min-w-[45px]','w-[45px]','rounded-[10px]','shadow-1sm','h-[30px]','px-1','py-1','text-[12px]','text-zinc-600' ,'bg-white','alpha-btn','border','border-[0.5]','border-black/5');
  liElement.classList.add( 'alpha-btn');

  liElement.addEventListener('click', function($event) {
    filterByAlpha($event)
  });

  document.getElementById('alpha-filter')?.appendChild(liElement);
});
 