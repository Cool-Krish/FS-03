


document.querySelector(".has-children li:first-child").style =
"background-color:blue;color:white";
document.querySelector(".has-children li:last-child").style =
"background-color:palevioletred;color:white";
document.querySelector(".has-children li:nth-child(9)").style =
"background-color:green;color:white";
document.
querySelectorAll(".has-children li:nth-child(even)").
forEach(element => element.style = "background-color:lime;color:white");







function makeCard({ format, author, image_url }) {
  

  meta.appendChild(formatEl);
  meta.appendChild(authorEl);

  card.appendChild(image);
  card.appendChild(meta);

  li.appendChild(card);

  return li;
}

