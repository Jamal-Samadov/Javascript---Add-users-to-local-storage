

if(localStorage.getItem ('users') === null){
    localStorage.setItem('users', JSON.stringify([]));
}

let add = document.querySelector('#add')
let del = document.querySelector('#delete')


add.addEventListener('click', function(){
    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let email = document.querySelector('#email').value;

    let user_list = JSON.parse(localStorage.getItem('users'))
    
    user_list.push({
        name: name,
        surname:surname,
        email:email,
        date: new Date()
    })

    localStorage.setItem('users', JSON.stringify(user_list))
    alert(`${name} adlı istifadəçi əlavə olundu`)
    GetUsers()
    
    
})


   function GetUsers(){
      let user_list = JSON.parse(localStorage.getItem('users'))
      let item = ''

      user_list.forEach(user => {
        item += `
        <div class="col-lg-4">
            <div class="box">
                <h3>${user.name} ${user.surname}</h3>
                <p>${user.email}</p>
            </div>
        </div> 
        `
      });
      document.querySelector('#list').innerHTML = item
      ShowAlert()
   }

   GetUsers()

    del.addEventListener('click', function(){
       localStorage.setItem('users',JSON.stringify([]))
       alert('Bütün istifadəçilər silindi')
       GetUsers()
       ShowAlert()
   })
    
   function ShowAlert(){
    let user_list = JSON.parse(localStorage.getItem('users'))

    if(user_list.length === 0){
        document.querySelector('#alert').classList.remove('d-none')
    }
    else{
        document.querySelector('#alert').classList.add('d-none')
    }
   }

   ShowAlert()