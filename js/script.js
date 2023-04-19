let searchForm=document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
}

let Navbar=document.querySelector('.Navbar')

document.querySelector('#menu-btn').onclick = () =>
{
    Navbar.classList.toggle('active');
}
