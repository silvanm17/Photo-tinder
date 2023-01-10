let clientID = "w7b-Ip24q-jgVDopaDrnmqvhUrf7n1Vd0WFcU4FJJuc";
let endpoint = "https://api.unsplash.com/photos/random/?client_id=" + clientID;



fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let img5 = document.createElement("img");
        img5.src = data.urls.regular;
        img5.alt = data.alt_description;
        img5.classList.add("w-full", "h-full", "mx-auto", "mt-4", "p-4");
        img5.style.height = "700px";
        img5.style.width = "500px";

        document.querySelector(".img").appendChild(img5);
    });

document.querySelector("#like").addEventListener("click", function () {
    let img7 = document.querySelector(".img img");
    let clone = img7.cloneNode(true);
    clone.classList.remove("w-full", "h-full", "mx-auto", "mt-4", "p-4");

    clone.style.height = "220px";
    clone.style.width = "160px";

    clone.classList.add("w-40", "h-66", "mt-4", "ml-4");
    document.querySelector(".favorites").appendChild(clone);
    img7.remove();
    fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let img = document.createElement("img");
            img.src = data.urls.regular;
            img.alt = data.alt_description;
            img.classList.add("w-full", "h-full", "mt-4", "mx-auto", "p-4");
            document.querySelector(".img").appendChild(img);
            let name = document.createElement("p");
            name.textContent = data.user.name;
            name.classList.add("text-gray-600", "font-medium");
            document.querySelector(".favorites").appendChild(name);
            let bio = document.createElement("p");
            bio.textContent = data.user.bio;
            bio.classList.add("text-gray-400", "font-medium", "p-4", "max-w-lg");
            document.querySelector(".favorites").appendChild(bio);
            let remove = document.createElement("button");
            const classes = ["inline-flex", "items-center", "justify-center", "w-40", "h-40", "mr-2", "rounded-full"];
            remove.classList.remove(...classes);
            remove.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
             class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5
  0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58
  0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0
  0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59
  0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0
  1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 
  1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5
  0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0
  0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg>`;
            document.querySelector(".favorites").appendChild(remove);
            remove.addEventListener("click", function () {
                remove.parentElement.remove();
            });
            let div = document.createElement("div");
            div.classList.add("flex", "flex-col", "justify-center", "items-center");
            div.appendChild(name);
            div.appendChild(bio);
            document.querySelector(".favorites").appendChild(div);
            let div2 = document.createElement("div");
            const classes2 = ["flex", "flex-row", "justify-between", "items-center",
                "border-b", "border-gray-400", "p-4"];
            div2.classList.add(...classes2);
            div2.appendChild(clone);
            div2.appendChild(div);
            div2.appendChild(remove);
            document.querySelector(".favorites").appendChild(div2);
        });
});

document.querySelector("#dislike").addEventListener("click", function () {
    let img6 = document.querySelector("img");
    img6.remove();
    fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let img = document.createElement("img");
            img.src = data.urls.regular;
            img.alt = data.alt_description;
            img.classList.add("w-full", "h-full", "mx-auto", "mt-4", "p-4");
            document.querySelector(".img").appendChild(img);
        });
});

document.querySelector(".favorites").addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        let popup = document.createElement("div");
        const classes3 = ["fixed", "top-0", "left-0", "w-full", "h-full", "flex", "justify-center",
            "items-center", "bg-gray-900", "bg-opacity-50"];
        popup.classList.add(...classes3);
        let popupImg = document.createElement("img");
        popupImg.src = e.target.src;
        popupImg.alt = e.target.alt;
        popupImg.classList.add("w-1/2", "h-2/3");
        popup.appendChild(popupImg);
        document.body.appendChild(popup);
        let name = document.createElement("p");
        name.textContent = e.target.nextElementSibling.firstElementChild.textContent;
        name.classList.add("text-gray-600", "font-medium", "p-4");
        popup.appendChild(name);

        let bio = document.createElement("p");
        bio.textContent = e.target.nextElementSibling.lastElementChild.textContent;
        bio.classList.add("text-gray-400", "font-medium", "p-4");
        popup.appendChild(bio);

        let div = document.createElement("div");
        div.classList.add("bg-white", "p-4");
        div.appendChild(name);
        div.appendChild(bio);
        popup.appendChild(div);

        div.style.height = "632px";
        popup.addEventListener("click", function () {
            popup.remove();
        });
    }
});