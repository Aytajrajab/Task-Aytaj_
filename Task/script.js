
let mercury = document.getElementById("mercury")
let venus = document.getElementById("venus")
let earth = document.getElementById("earth")
let mars = document.getElementById("mars")
let mercuryAudio = document.getElementById("merc")
let marsAudio = document.getElementById("m")
let venusAudio = document.getElementById("v")
let earthAudio = document.getElementById("e")
let paragraf = document.querySelector("p")


venus.addEventListener("click", function(){
    
    paragraf.textContent = `Venus orbits at an average distance of only 108 million km from the Sun, while Mars is an average of 228 million km. Venus gets as close to Earth as 38 million km, and Mars gets as close as 55.7 million km.

    In terms of size, Venus is almost a twin planet of Earth. Its diameter is 12,104 km, which is 95% the diameter of Earth. Mars is much smaller, with a diameter of only 6,792 km. And again, in terms of mass, Venus is almost Earth’s twin. It has 81% the mass of Earth, while Mars only has 10% the mass of Earth.`
    paragraf.className = "show";
    earthAudio.pause();
    marsAudio.pause();
    mercuryAudio.pause();

    venusAudio.play();
});

earth.addEventListener("click", function(){
    paragraf.textContent = `Earth, our home planet, is a world unlike any other. The third planet from the sun, Earth is the only place in the known universe confirmed to host life.

    With a radius of 3,959 miles, Earth is the fifth largest planet in our solar system, and it's the only one known for sure to have liquid water on its surface. Earth is also unique in terms of monikers. Every other solar system planet was named for a Greek or Roman deity, but for at least a thousand years, some cultures have described our world using the Germanic word “earth,” which means simply “the ground.”`
    paragraf.className = "show";
    venusAudio.pause();
    marsAudio.pause();
    mercuryAudio.pause();

    earthAudio.play();
});

mercury.addEventListener("click", function(){
    paragraf.textContent = `Along with Venus, Earth, and Mars, Mercury is one of the rocky planets. It has a solid surface that is covered with craters. It has no atmosphere, and it doesn’t have any moons. Mercury likes to keep things simple.

    This small planet spins around slowly compared to Earth, so one day lasts a long time. Mercury takes 59 Earth days to make one full rotation. A year on Mercury goes by fast. Because it’s the closest planet to the sun, it doesn’t take very long to go all the way around. It completes one revolution around the sun in just 88 Earth days. If you lived on Mercury, you’d have a birthday every three months!`
    paragraf.className = "show";
    earthAudio.pause();
    venusAudio.pause();
    marsAudio.pause();

    mercuryAudio.play();
});

mars.addEventListener("click", function(){
    paragraf.textContent = `The red planet Mars, named for the Roman god of war, has long been an omen in the night sky. And in its own way, the planet’s rusty red surface tells a story of destruction. Billions of years ago, the fourth planet from the sun could have been mistaken for Earth’s smaller twin, with liquid water on its surface—and maybe even life.

    Now, the world is a cold, barren desert with few signs of liquid water. But after decades of study using orbiters, landers, and rovers, scientists have revealed Mars as a dynamic, windblown landscape that could—just maybe—harbor microbial life beneath its rusty surface even today.`;
    paragraf.className = "show";
    mercuryAudio.pause();
    earthAudio.pause();
    venusAudio.pause();

    marsAudio.play();
    
});

var el = document.querySelectorAll('ul li');
for (let i = 0; i < el.length; i++) {
  el[i].onclick = function() {
    let c = 0;
    while (c < el.length) {
      el[c++].className = 'selection';
    }
    el[i].className = 'selection select';
    };
}



