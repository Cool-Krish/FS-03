const form = document.querySelector("form");
      const nameInput = document.querySelector("#name");
      const genderInput = document.querySelector("#gender");
      const elementsContainer = document.querySelector("#container");
      const maleFilter = document.querySelector("#male");
      const femaleFilter = document.querySelector("#female");

      let elements = [];

      function createElement(name, gender) {
        const element = document.createElement("div");
        element.className= "mydiv"
        element.innerHTML = `${name} (${gender})`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
          element.remove();
          elements = elements.filter((el) => el !== element);
        });
        element.appendChild(deleteButton);
        elementsContainer.appendChild(element);
        elements.push(element);
      }

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = nameInput.value;
        const gender = genderInput.value;
        createElement(name, gender);
      });

      function filterElements() {
        const selectedValue = document.querySelector(
          'input[name="genderfilter"]:checked'
        )?.value;
        elements.forEach((el) => {
          if (selectedValue && !el.textContent.includes(selectedValue)) {
            el.style.display = "none";
          } else {
            el.style.display = "block";
          }
        });
      }

      maleFilter.addEventListener("change", filterElements);
      femaleFilter.addEventListener("change", filterElements);