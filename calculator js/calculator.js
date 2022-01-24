var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");

for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;

    if (btntext == "×") {
      btntext = "*";
    }

    if (btntext == "÷") {
      btntext = "/";
    }
    screen.value += btntext;
  });
}

function sin() {
  screen.value = Math.sin(screen.value);
}

function cos() {
  screen.value = Math.cos(screen.value);
}

function tan() {
  screen.value = Math.tan(screen.value);
}

function pow() {
  screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}

function log() {
  screen.value = Math.log(screen.value);
}

function pi() {
  screen.value = 3.14159265359;
}

function e() {
  screen.value = 2.71828182846;
}

function fact() {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;

  screen.value = f;
}

function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}

function square() {
  var side, area;
  side = screen.value;
  area = side * side;

  screen.value = area;
}

function circle() {
  var pie;
  pie = 3.14159265359;
  screen.value = pie * screen.value * screen.value;
}

function n_prime() {
  let i,
    prime_no = [2, 3],
    n = 5;
  const isPrime = (n) => {
    let i = 1,
      p = prime_no[i],
      limit = Math.ceil(Math.sqrt(n));
    while (p <= limit) {
      if (n % p === 0) {
        return false;
      }
      i += 1;
      p = prime_no[i];
    }
    return true;
  };
  for (i = 2; i <= screen.value; i += 1) {
    while (!isPrime(n)) {
      n += 2;
    }
    prime_no.push(n);
    n += 2;
  }
  screen.value = prime_no[screen.value - 1];
}
