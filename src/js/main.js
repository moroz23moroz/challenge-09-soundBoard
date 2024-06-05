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
    bts.addEventListener("click", () => {
      stopSongs();
      document.getElementById(sound).play();
    });
    document.getElementById("buttons").appendChild(bts);
  });
  function stopSongs() {
    sounds.forEach((sound) => {
      const single = document.getElementById(sound);
      single.pause();
      single.currentTime = 0;
    });
  }
});
