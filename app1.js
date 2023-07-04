

function inputId() {
   let cont = document.getElementById(`container`);
   let button = document.createElement(`button`);
   button.innerHTML = `відправити`;
   cont.appendChild(button);
   document.body.append(cont);
   button.addEventListener(`click`, inputNumber);
   function inputNumber() {
      let number = document.querySelector(`#postNumber`).value;
      let link = `https://jsonplaceholder.typicode.com/todos/` + `${number}`;

      const linkId = fetch(link)
         .then(function (response) {
            if (response.status !== 200) {
               return Promise.reject(response);
               alert(`error`);
            }
            else
               console.log(response);
            return response.json()
         })
         .then(function (json) {
            let title = json["title"];
            let cont = document.getElementById(`container`);

            let blockText = document.createElement(`div`);
            blockText.setAttribute("id", "text");
            blockText.innerText = title;
            let add = document.createElement(`span`);
            add.innerHTML = `якщо хочете відправити коментар-натисніть на кнопку`;

            cont.appendChild(blockText)
            document.body.append(cont);
            cont.appendChild(add);
            let btn = document.createElement(`button`);
            btn.innerHTML = `додати коментар`
            cont.appendChild(btn);
            document.body.append(cont);
            btn.addEventListener(`click`, addComment);
         })
         .catch(function (error) {
            alert(error.message)
         })
   }
}


function addComment() {
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
inputId();