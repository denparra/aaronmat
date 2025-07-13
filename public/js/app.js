// LÃ³gica base para iniciar el flujo
document.getElementById("start-btn").addEventListener("click", () => {
  const input = document.getElementById("sum-input").value.trim();
  const match = input.match(/^(\d{1,4})\s*\+\s*(\d{1,4})$/);
  if (!match) {
    alert("Por favor ingresa dos nÃºmeros de hasta 4 dÃ­gitos: ej. 1890 + 1148");
    return;
  }
  window.sumandos = [parseInt(match[1], 10), parseInt(match[2], 10)];
  document.getElementById("input-section").classList.add("hidden");
  document.getElementById("positional-area").classList.remove("hidden");
  // TODO: iniciar lÃ³gica paso a paso
});
