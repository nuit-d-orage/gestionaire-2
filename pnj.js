  jQuery(document).ready(function(){
  const onglets = document.querySelectorAll('.bloc_pnj_index');
  const contenu = document.querySelectorAll('.open')
  let index = 0;
console.log(onglets)
onglets.forEach(onglet => {

    onglet.addEventListener('click', () => {

        if (onglet.classList.contains('open')) {
            onglet.classList.remove('open');
			onglet.closest('.pnj_index').classList.remove('supprime');
        } else {
            onglet.classList.add('open');
			onglet.closest('.pnj_index').classList.add('supprime');
        }

    })

})
});

