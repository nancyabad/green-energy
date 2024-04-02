// Get reference to hardcoded HTML
let dc = document.querySelector(".dynamicContent");

// Creating data resources
let data = {
  community: {
    title: "Community Solar Initiatives",
    img: "./img/community-img.jpg",
    altText: "Community Solar Initiatives article",
    bodyText:
      "Establish community solar programs that allow multiple households to share the benefits of a single solar array. This reduces the upfront costs for individuals while providing access to clean energy.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at bibendum ipsum. Nam vitae enim lacus. Duis eget erat in nunc suscipit auctor et ut tortor. Cras fermentum nisl ex, nec lobortis magna porttitor a. Nunc gravida erat lacus, vel scelerisque neque sodales vel. Morbi at nulla quis sapien posuere pulvinar eget a magna. Donec posuere lorem sed turpis sagittis, eu cursus libero finibus. Suspendisse metus nisi, feugiat vel libero quis, feugiat efficitur metus.Vivamus quis malesuada risus. Aliquam erat volutpat. Pellentesque ac ligula ut diam suscipit suscipit in at ante. Vivamus a arcu quis ante scelerisque fermentum.",
  },
  incentives: {
    title: "Government Subsidies and Tax Credits",
    img: "./img/incentives-img.jpg",
    altText: "Government Subsidies and Tax Credits article",
    bodyText:
      "Governments can offer subsidies and tax credits to encourage the adoption of renewable energy technologies, making them more affordable for households and businesses.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at velit a sem tincidunt vulputate quis a sem. Proin bibendum felis magna, in bibendum augue egestas ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam commodo vel erat vel auctor. Mauris aliquam, urna non iaculis ullamcorper, ante tellus auctor urna, eget dictum justo tellus quis nunc. Donec laoreet erat in tortor efficitur convallis.Vivamus quis malesuada risus. Aliquam erat volutpat. Pellentesque ac ligula ut diam suscipit suscipit in at ante. Vivamus a arcu quis ante scelerisque fermentum.",
  },
  efficiency: {
    title: "Energy Efficiency Programs",
    img: "./img/efficiency-img.jpg",
    altText: "Energy Efficiency Programs article",
    bodyText:
      "Promote energy efficiency programs that help reduce overall energy consumption. By using energy more efficiently, households can lower their energy bills and make the switch to clean energy sources more financially feasible.Ut in orci arcu. Suspendisse posuere nibh a risus elementum, a pharetra magna cursus. Fusce sed rhoncus turpis, at bibendum massa. Quisque in varius dui. Suspendisse in varius felis, interdum finibus mauris. Sed viverra magna sit amet magna aliquam, eget rhoncus felis venenatis. Sed scelerisque massa ut dolor tincidunt blandit. Sed lectus velit, accumsan at finibus eu, lobortis in mi. Duis consectetur mattis mollis. Ut venenatis risus urna, non feugiat nibh vehicula id. Integer sit amet quam est. Suspendisse potenti.",
  },
};

// Getting references to the buttons
let buttons = document.querySelectorAll(".controls button");

// Function handleClick
let handleClick = (ev) => {
  // Remove the 'active' class from all buttons
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  let page = ev.target.innerText.toLowerCase();
  dc.innerHTML = ""; // to empty the dynamic content div

  // Create HTML
  let article = document.createElement("article");
  let title = document.createElement("h2");
  title.innerText = data[page].title;
  let img = document.createElement("img");
  img.src = data[page].img;
  img.alt = data[page].altText;
  let pg = document.createElement("p");
  pg.innerText = data[page].bodyText;

  // Put HTML together
  article.appendChild(title);
  article.appendChild(img);
  article.appendChild(pg);
  dc.appendChild(article);

  // Add the 'active' class to the clicked button
  ev.target.classList.add("active");
};

// Register each button for click
for (let button of buttons) {
  button.addEventListener("click", handleClick);
}
