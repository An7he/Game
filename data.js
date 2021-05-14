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
const compra = (valor, arr) => {
    if ( fin >= valor ) {
        restar(valor)
        comprable(arr[0], arr[1], arr[2], arr[3])
    }}
const comprable = (item, clase1, clase2, color) => {
    console.log(item, clase1, clase2, color)
    var on = true
    inventario.forEach ( function (e, i) {
        i = inventario.indexOf(e)
        if ( inventario[i] === '' && on){
            inventario[i] = item
            document.getElementById(`espacio${i+1}`).classList.add(clase1, clase2, color)
            on = false
}})}
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
    var items = [
        {key : 'manzana', value : ['fab', 'fa-apple', 'rojo']},
        {key : 'pocionI', value : ['fas', 'fa-vial', 'verde']},
        {key : 'pocionII', value : ['fas', 'fa-flask', 'azul']},
        {key : 'mana', value : ['fas', 'fa-star', 'amarillo']},
        {key : 'pocionIII', value : ['fas', 'fa-atom', 'morado']},
        {key : 'escudo', value : ['fas', 'fa-shield-alt', 'cafe']},
        {key : 'spm', value : ['fas', 'fa-bomb', 'negro']},
        {key : 'libro', value : ['fas', 'fa-book', 'magia']}
    ]
    items.forEach(o => {
        if (inventario[numSlotinventario] === o.key) {
            console.log(o.value[0], o.value[1], o.value[2], inventario[numSlotinventario])
            espacio.classList.remove(o.value[0], o.value[1], o.value[2]);
            inventario[numSlotinventario] = '';
}})}
const f = (n) =>{
    usoSlot(n-1, document.getElementById(`espacio${n}`))
}