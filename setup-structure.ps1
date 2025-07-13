# setup-structure.ps1 — Ejecutar desde dentro de MAT

# 1. Crear carpetas
$dirs = @(
    "public",
    "public\css",
    "public\js",
    "src",
    "src\components",
    "src\pages",
    "src\styles",
    "src\utils"
)
foreach ($d in $dirs) {
    if (-not (Test-Path $d)) {
        New-Item -ItemType Directory -Path $d | Out-Null
        Write-Host "Creada carpeta:" $d
    }
}

# 2. Crear archivos base
$files = @{
    "public\index.html" = @'
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Suma Interactiva con Llevada</title>
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <div id="app">
    <header><h1>Suma Interactiva con Llevada</h1></header>
    <section id="input-section">
      <label for="sum-input">Ingresa tu suma (ej. 1890 + 1148):</label>
      <input type="text" id="sum-input" placeholder="0000 + 0000"/>
      <button id="start-btn">Iniciar</button>
    </section>
    <section id="positional-area" class="hidden">
      <div class="column" data-pos="3"><strong>Miles</strong><div class="slots"></div></div>
      <div class="column" data-pos="2"><strong>Centenas</strong><div class="slots"></div></div>
      <div class="column" data-pos="1"><strong>Decenas</strong><div class="slots"></div></div>
      <div class="column" data-pos="0"><strong>Unidades</strong><div class="slots"></div></div>
      <button id="next-step-btn" class="hidden">Siguiente Paso</button>
    </section>
    <section id="feedback-area" class="hidden">
      <p id="feedback-msg"></p>
      <div id="result-display"></div>
    </section>
  </div>
  <script src="js/app.js"></script>
</body>
</html>
'@

    "public\css\styles.css" = @'
body {
  font-family: sans-serif;
  max-width: 800px;
  margin: auto;
  padding: 1rem;
}
.hidden { display: none; }
#positional-area { display: flex; justify-content: space-between; margin-top: 2rem; }
.column { border: 1px solid #ccc; padding: 0.5rem; width: 20%; min-height: 200px; }
.slots { min-height: 120px; }
'@

    "public\js\app.js" = @'
// Lógica base para iniciar el flujo
document.getElementById("start-btn").addEventListener("click", () => {
  const input = document.getElementById("sum-input").value.trim();
  const match = input.match(/^(\d{1,4})\s*\+\s*(\d{1,4})$/);
  if (!match) {
    alert("Por favor ingresa dos números de hasta 4 dígitos: ej. 1890 + 1148");
    return;
  }
  window.sumandos = [parseInt(match[1], 10), parseInt(match[2], 10)];
  document.getElementById("input-section").classList.add("hidden");
  document.getElementById("positional-area").classList.remove("hidden");
  // TODO: iniciar lógica paso a paso
});
'@

    "src\index.js" = "// Punto de entrada de tu app (a flesh out)"
    
    "package.json" = @'
{
  "name": "suma-interactiva-llevada",
  "version": "1.0.0",
  "scripts": {
    "dev": "echo \"Configura aquí tu servidor local\""
  },
  "dependencies": {}
}
'@
}

foreach ($path in $files.Keys) {
    if (-not (Test-Path $path)) {
        $files[$path] | Out-File -FilePath $path -Encoding UTF8
        Write-Host "Creado archivo:" $path
    }
}

Write-Host "`n¡Estructura generada con éxito!"
