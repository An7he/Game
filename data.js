x = 0
let inicio = 0
let inventario = ['', '', '', '', '', '', '', '', '', '']
var multiplicador = false
let inicio2 = 0
var mina = 1
var bosque = 1
var slots = 0
var x2 = 1
let axe = document.getElementById("axe")
var talar = document.getElementById("talar")
let contraparte = document.getElementById("contraparte")
let minar = document.getElementById("minar")
let afilado = document.getElementById("afilado")
let shop = document.getElementById("tienda")
const anadir = (x, vel, multiplicador) => {
    fin = inicio + x
    if (multiplicador === true){ fin = fin * 2 }
    const anadir2 = (inicio, fin, vel) =>{
        document.getElementById('num').innerHTML = inicio
        inicio++
        if (inicio <= fin){
            setTimeout(anadir2, vel, inicio, fin)
        }}
    anadir2(inicio, fin, vel)
    inicio = fin
}
const sumarxp = (x) => {
    fin2 = inicio2 + x
    const sumarxp2 = (inicio2, fin2) =>{
        document.getElementById('num2').innerHTML = inicio2
        inicio2++
        if (inicio2 <= fin2){
            setTimeout(sumarxp2, 1000, inicio2, fin2)
        }}
    sumarxp2(inicio2, fin2)
    inicio2 = fin2
}
const restar = (x) => {
    fin = inicio - x
    const restar2 = (inicio, fin) =>{
        document.getElementById('num').innerHTML = inicio
        inicio--
        if (inicio >= fin){
            setTimeout(restar2, 5, inicio, fin)
        }
    };
    restar2(inicio, fin)
    inicio = fin
}
const compra = (item, valor) => {
    switch (item, valor) {
        case item === 1 && fin >= valor :
            restar(valor)
            comprable('manzana' ,'fab', 'fa-apple', 'rojo')
            break;
        case item === 2 && fin >= valor :
            restar(valor)
            comprable('pocionI' ,'fas', 'fa-vial', 'verde')
            break;
        case item === 3 && fin >= valor :
            restar(valor)
            comprable('pocionII' ,'fas', 'fa-flask', 'azul')
            break;
        case item === 4 && fin >= valor :
            restar(valor)
            comprable('mana' ,'fas', 'fa-star', 'amarillo')
            break;
        case item === 5 && fin >= valor :
            restar(valor)
            comprable('pocionIII' ,'fas', 'fa-atom', 'morado')
            break;
        case item === 6 && fin >= valor :
            restar(valor)
            comprable('escudo' ,'fas', 'fa-shield-alt', 'cafe')
            break;
        case item === 7 && fin >= valor :
            restar(valor)
            comprable('spm' ,'fas', 'fa-bomb', 'negro')
            break;
        case item === 8 && fin >= valor :
            restar(valor)
            comprable('libro' ,'fas', 'fa-book', 'magia')
            break;
        default :
            return 'Sin Dinero'
}}
const comprable = (item, clase1, clase2, color) => {
    var on = true
    inventario.forEach ( function (e, i) {
        i = inventario.indexOf(e)
        if ( inventario[i] === '' && on){
            inventario[i] = item
            document.getElementById(`espacio${i+1}`).classList.add(clase1, clase2, color)
            on = false
        }})
}

const contadorCooldownMina = (inicio, fin) => {
    inicio++
    if(inicio === fin){
        minar.disabled = false
        minar.classList.toggle("pico-activo")
        minar.classList.toggle("pico-cooldown")
    }
    if (inicio < fin){ setTimeout(contadorCooldownMina, 1000, inicio, fin) }
}
const contadorCooldownBosque = (inicio, fin) => {
    inicio++
    if(inicio === fin){
        talar.disabled = false
        talar.classList.toggle("hacha-activo")
        talar.classList.toggle("hacha-cooldown")
    }
    if (inicio < fin){ setTimeout(contadorCooldownBosque, 1000, inicio, fin) }
}
const bosqueZ = (b, bo) => {
    contraparte.classList.remove(...contraparte.classList)
    contraparte.classList.add(bo)
    axe.classList.remove(...axe.classList)
    axe.classList.add(bo)
    bosque = b
}
const minaZ = (m, mi) => {
    afilado.classList.remove(...afilado.classList);
    afilado.classList.add(mi)
    mina = m
}
function minarBoton(){
    switch(mina){
        case 1:
            anadir(100, 0.9, multiplicador)
            sumarxp(1)
            contadorCooldownMina(0, 10)
            break;        
        case 2:
            anadir(150, 0.5, multiplicador)
            sumarxp(3)
            contadorCooldownMina(0, 11)
            break;
        case 3:
            anadir(250, 0.09, multiplicador)
            sumarxp(4)
            contadorCooldownMina(0, 13)
            break;
        case 4:
            anadir(500, 0.01, multiplicador)
            sumarxp(6)
            contadorCooldownMina(0, 15)
            break;
        case 5:
            anadir(750, 0.009, multiplicador)
            sumarxp(8)
            contadorCooldownMina(0, 20)
            break;
        default:
            mina = 1
    }

    var miboton = document.getElementById("minar")
    miboton.disabled = true
    minar.classList.toggle("pico-activo")
    minar.classList.toggle("pico-cooldown")

};
function talarBoton(){ 
    switch(bosque){
        case 1: anadir(70, 5); sumarxp(1); contadorCooldownBosque(0, 10); break;
        case 2: anadir(120, 4); sumarxp(3); contadorCooldownBosque(0, 11); break;
        case 3: anadir(210, 3); sumarxp(4);contadorCooldownBosque(0, 1); break;
        case 4: anadir(300, 2); sumarxp(5); contadorCooldownBosque(0, 15); break;
        case 5: anadir(410, 1); sumarxp(5); contadorCooldownBosque(0, 20); break;
        default: bosque = 1
    }
    var miboton2 = document.getElementById("talar")
    miboton2.disabled = true
    talar.classList.toggle("hacha-activo")
    talar.classList.toggle("hacha-cooldown")
};
function usoSlot(numSlotinventario, espacio){
    console.log('slotinventario 1', numSlotinventario, inventario)
    if(inventario[numSlotinventario] === 'manzana' ){
        espacio.classList.remove('fab', 'fa-apple', 'rojo')
        inventario[numSlotinventario] = '';
    }
    if(inventario[numSlotinventario] === 'pocionI'){
        espacio.classList.remove('fas', 'fa-vial', 'verde')
        inventario[numSlotinventario] = '';
    }
    if(inventario[numSlotinventario] === 'pocionII'){
        espacio.classList.remove('fas', 'fa-flask', 'azul')
        inventario[numSlotinventario] = '';
    }
    if(inventario[numSlotinventario] === 'mana'){
        espacio.classList.remove('fas', 'fa-star', 'amarillo')
        inventario[numSlotinventario] = '';
    }
    if(inventario[numSlotinventario] === 'pocionIII'){
        espacio.classList.remove('fas', 'fa-atom', 'morado')
        inventario[numSlotinventario] = '';
    }
    if(inventario[numSlotinventario] === 'escudo'){
        espacio.classList.remove('fas', 'fa-shield-alt', 'cafe')
        inventario[numSlotinventario] = '';
    }
    if(inventario[numSlotinventario] === 'spm'){
        espacio.classList.remove('fas', 'fa-bomb', 'negro')
        inventario[numSlotinventario] = '';
    }
    if(inventario[numSlotinventario] === 'libro'){
        espacio.classList.remove('fas', 'fa-book', 'magia')
        inventario[numSlotinventario] = '';
    }
}
const funcionFunciones = (numInventario) =>{

    if(numInventario === 1){usoSlot(0, espacio1)} 
    if(numInventario === 2){usoSlot(1, espacio2)} 
    if(numInventario === 3){usoSlot(2, espacio3)} 
    if(numInventario === 4){usoSlot(3, espacio4)} 
    if(numInventario === 5){usoSlot(4, espacio5)} 
    if(numInventario === 6){usoSlot(5, espacio6)} 
    if(numInventario === 7){usoSlot(6, espacio7)} 
    if(numInventario === 8){usoSlot(7, espacio8)} 
    if(numInventario === 9){usoSlot(8, espacio9)} 
    if(numInventario === 10){usoSlot(9, espacio10)}
}
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if(event.key === 'p' ){
        minarBoton()
    }
    if(event.key === 't' ){
        talarBoton()
    }
  });
const efectos = (tipoEfecto) => {
    if('regeneracion' === tipoEfecto){
        
    }
}