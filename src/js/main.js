window.addEventListener("DOMContentLoaded", () => {
  const sounds = [
    "applause",
    "camera",
    "crowd",
    "electricity",
    "robo",
    "wrong",
  ];
  sounds.forEach((sound) => {
    const bts = document.createElement("button");
    bts.classList.add("bts");
    bts.innerText = sound;
    document.getElementById("buttons").appendChild(bts);
  });
});
