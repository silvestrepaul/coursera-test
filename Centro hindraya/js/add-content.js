var today= new Date();
var hourNow = today.getHours();
var minutesNow = today.getMinutes();
var greeting, name, price, ms, saleTimeDay, saleTimeMonth, saleTimeYear, leftSale;
var tag='';
var precioSin='';
var sale=0;
var check=true;

if (hourNow > 19) {
  greeting= 'Good evening!';
}else if (hourNow > 12) {
  greeting = ' Good afternoon!';
}else if (hourNow > 0) {
  greeting = 'Good morning!';
}else {
  greeting = 'Welcome!';
}

function Cursos(name, price, sale, saleTimeDay, saleTimeMonth, saleTimeYear) {
  this.name = name;
  price = [price, Math.round(price/17)];
  this.precio = '\nPrecio: ' + price + ' MXN o ' + price[1] + ' USD';
  this.sale = sale;

  var est = new Date(2023,07,saleTimeDay);
  leftSale = est.getTime()-today.getTime();
  var difference = Math.floor(leftSale/86400000);

  if (difference>=0){
    var msgSale = '\nDays left: '+ difference;
  }
  else {
    sale = 0;
    var msgSale = '';
  }

  if (sale > 0) {
    var check1 = '\u2705';
    this.sale = '\nDescuento: ' + check1 + '\nsale: ' + sale + '%';
    var precioSin = this.precio;
    var precioCon = Math.round((price[0])*((100-sale)/100));
    this.precio = '<s> ' + precioSin.toUpperCase()  + '</s>' + ' Final Price: ' + precioCon;
  }
  if (sale <= 0) {
    if (check == false) {
      var check1 = '\u274C';
      this.sale = '\nDescuento: ' + check1;
      this.precio = '\nPrecio: ' + price + ' MXN' + ' o ' + price[1] + ' USD';
    }
    else {this.sale = '';}
  }
  tag += this.name + this.precio + this.sale + msgSale +'\n\n';
}

var msg = '<h2>browser window</h2><p>width : ' + window.innerWidth + ' </p>' ;
msg += '<p> height: ' + window.innerHeight + '</p>';
msg += ' <h2> history </h2><p>items : ' + window.history.length + '</p>';
msg += ' <h2>screen</h2><p>width : ' + window.screen.width + '</p>';
msg += ' <p>height : ' + window.screen.height + '</p>';
var lastModifi = '<p><b>last modified : </b> ' + document.lastModified + '</p>';

//Cursos(name, price, sale, saleTimeDay, saleTimeMonth, saleTimeYear)
var Cur1 = new Cursos('Guru Infinito', 350, 10, 18);
var Cur2 = new Cursos('Sesion', 888, 30, 17);
var Cur3 = new Cursos('Sanando a mama', 200, 0, 11);
var Cur4 = new Cursos('Expansion Infinita', 200, 10, 10);

var elSaludo = document.getElementById('saludo');
elSaludo.textContent = (greeting);

var elCurso1 = document.getElementById('Curso1');
elCurso1.innerHTML = (tag);

var elEl = document.getElementById('informacion');
elEl.innerHTML = (msg);

var elModi = document.getElementById('modificacion1');
elModi.innerHTML = (lastModifi);

var elModi = document.getElementById('greetings');
elModi.innerHTML = (lastModifi);
