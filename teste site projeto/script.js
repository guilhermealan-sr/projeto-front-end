const versiculos = [
    "Salmo 23:1 - O Senhor é o meu pastor, nada me faltará.",
    "Salmo 27:1 - O Senhor é a minha luz e a minha salvação; a quem temerei?",
    "João 3:16 - Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    "Filipenses 4:13 - Posso todas as coisas naquele que me fortalece.",
    "Romanos 8:28 - E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.",
    "Isaías 41:10 - Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.",
    "Provérbios 3:5 - Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento.",
    "Mateus 6:33 - Mas, busquai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.",
    "Josué 1:9 - Não te mandei eu? Sê forte e corajoso; não temas, nem te espantes; porque o Senhor teu Deus é contigo, por onde quer que andares.",
    "Jeremias 29:11 - Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar-lhes esperança e um futuro.",
    "Gálatas 5:22 - Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança.",
    "1 Coríntios 13:4 - O amor é sofredor, é benigno; o amor não é invejoso; o amor não trata com leviandade, não se envaidece."
];

const botao = document.getElementById("btn-sorteio")
const texto = document.getElementById("txt-versi")
botao.addEventListener("click", function() {
    const indiceAleatorio = Math.floor(Math.random() * versiculos.length);
    texto.textContent = versiculos[indiceAleatorio];

});

const btnLupa = document.getElementById("btn-lupa");
const menuTemas = document.getElementById("menu-temas");

btnLupa.addEventListener("click", function(event) {
    event.stopPropagation();
    menuTemas.classList.toggle("ativo");
});

