// Atualiza o ano automaticamente no rodapé.
document.getElementById("ano").textContent = new Date().getFullYear();

// Recurso extra: botão "voltar ao topo", que aparece ao rolar a página.
const voltarTopo = document.getElementById("voltarTopo");

window.addEventListener("scroll", () => {
  voltarTopo.classList.toggle("show", window.scrollY > 350);
});

voltarTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Fecha o menu mobile depois que um link é selecionado.
document.querySelectorAll("#navegacao .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navegacao");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
