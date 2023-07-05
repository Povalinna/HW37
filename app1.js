function postSearch() {
   let container = document.getElementById(`container`);
   let button = document.createElement(`button`);
   button.innerHTML = `відправити`;
   container.appendChild(button);
   document.body.append(container);
   button.addEventListener(`click`, inputId);
}
function inputId() {
   let id = document.querySelector(`#postNumber`).value;
   let link = `https://jsonplaceholder.typicode.com/todos/` + `${id}`;

   const linkId = fetch(link)
      .then(function (response) {
         return response.json()
      })
      .then(function (json) {
         let title = json["title"];
         let container = document.getElementById(`container`);

         let textPost = document.createElement(`div`);
         textPost.setAttribute("id", "text");
         textPost.innerText = title;
         let addComment = document.createElement(`span`);
         addComment.innerHTML = `якщо хочете відправити коментар-натисніть на кнопку`;

         container.appendChild(textPost)
         document.body.append(container);
         container.appendChild(addComment);
         let btn = document.createElement(`button`);
         btn.innerHTML = `додати коментар`
         container.appendChild(btn);
         document.body.append(container);
         btn.addEventListener(`click`, addComments);
      })
      .catch(function (error) {
         alert(error.message)
      })
}
function addComments() {
   let userComment = document.createElement(`textarea`);
   userComment.setAttribute("id", "comments");
   document.body.append(userComment);
   let btn = document.createElement(`button`);
   btn.innerHTML = `відправити`;
   btn.setAttribute("id", "btn");
   document.body.append(btn);
   btn.addEventListener(`click`, closeComments)
   function closeComments() {
      let closeComment = userComment;
      console.log(closeComment);
      closeComment.style.display = `none`;
      let closeBtn = btn;
      closeBtn.style.display = `none`;
   }
}
postSearch();


 
