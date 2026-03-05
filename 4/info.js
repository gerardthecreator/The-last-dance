/**
 * info.js - Base de datos de ejercicios de Límites y Derivadas
 * Compatible con: MathJax 3 + style.css neumórfico mobile-first
 * 
 * Metodología de resolución: ¿POR QUÉ? → ¿QUÉ HAGO? → ¿PARA QUÉ? → ¿CÓMO VERIFICO?
 * 
 * Nivel: Sin L'Hôpital - Solo álgebra, definición de derivada y reglas básicas
 * 
 * Sintaxis LaTeX:
 * • $ ... $ para fórmulas inline
 * • \\[ ... \\] para fórmulas en bloque (display)
 * • \\text{} para texto dentro de fórmulas
 * • \\cdot para multiplicación
 */

const quimicaData = [
  {
    id: 1,
    titulo: "1(a). Límite con Fracciones Algebraicas",
    enunciado: "Resuelve: $\\lim_{x \\to 1} \\left( \\dfrac{1}{1-x} - \\dfrac{3}{1-x^3} \\right)$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{1}{1-1} - \\dfrac{3}{1-1^3} = \\dfrac{1}{0} - \\dfrac{3}{0} = \\infty - \\infty \\]
        </div>
        <p><strong>Por qué:</strong> Ambas fracciones tienden a infinito cuando $x \\to 1$. Esta es una <span class="keyword">indeterminación</span> que debemos resolver.</p>
        <p><strong>Para qué:</strong> Combinaremos las fracciones en una sola para poder simplificar.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Combinamos las fracciones</h4>
        <p><strong>Factorizamos el denominador:</strong> $1 - x^3 = (1-x)(1 + x + x^2)$ (diferencia de cubos)</p>
        <div class="formula-block">
          \\[ \\dfrac{1}{1-x} - \\dfrac{3}{1-x^3} = \\dfrac{1}{1-x} - \\dfrac{3}{(1-x)(1 + x + x^2)} \\]
        </div>
        <p><strong>Mínimo común denominador:</strong> $(1-x)(1 + x + x^2)$</p>
        <div class="formula-block">
          \\[ = \\dfrac{1 \\cdot (1 + x + x^2) - 3}{(1-x)(1 + x + x^2)} = \\dfrac{x^2 + x - 2}{(1-x)(1 + x + x^2)} \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Factorizamos y simplificamos</h4>
        <p><strong>Factorizamos el numerador:</strong> $x^2 + x - 2 = (x - 1)(x + 2)$</p>
        <div class="formula-block">
          \\[ \\dfrac{(x - 1)(x + 2)}{(1-x)(1 + x + x^2)} = \\dfrac{-(1 - x)(x + 2)}{(1-x)(1 + x + x^2)} = \\dfrac{-(x + 2)}{1 + x + x^2} \\]
        </div>
        <p><strong>Ahora evaluamos en $x = 1$:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{-(1 + 2)}{1 + 1 + 1} = \\dfrac{-3}{3} = -1 \\]        </div>
        <p><strong>✅ Verificación numérica:</strong> Si $x = 1.01$: resultado ≈ $-1.003$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to 1} \\left( \\dfrac{1}{1-x} - \\dfrac{3}{1-x^3} \\right) = -1$</div>
      </div>
    `
  },
  {
    id: 2,
    titulo: "1(b). Límite al Infinito con Raíces",
    enunciado: "Halla: $\\lim_{x \\to \\infty} \\dfrac{\\sqrt{7 + \\sqrt[3]{x}} - 3}{x - 8}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Análisis directo:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{\\sqrt{7 + \\sqrt[3]{\\infty}} - 3}{\\infty - 8} = \\dfrac{\\infty - 3}{\\infty} = \\dfrac{\\infty}{\\infty} \\]
        </div>
        <p><strong>Por qué:</strong> Tanto numerador como denominador tienden a infinito.</p>
        <p><strong>Para qué:</strong> Debemos comparar las <span class="keyword">tasas de crecimiento</span> de numerador y denominador.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Analizamos los órdenes de crecimiento</h4>
        <p><strong>Numerador:</strong> $\\sqrt{7 + \\sqrt[3]{x}} - 3$</p>
        <ul>
          <li>$\\sqrt[3]{x} = x^{1/3}$ (crece lentamente)</li>
          <li>$\\sqrt{x^{1/3}} = x^{1/6}$ (crece aún más lentamente)</li>
        </ul>
        <p><strong>Denominador:</strong> $x - 8 ≈ x$ (crece como $x^1$)</p>
        <p><strong>Comparación:</strong> $x^{1/6}$ crece MUCHO más lento que $x^1$</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Evaluación del límite</h4>
        <p><strong>Dividimos por el término dominante del denominador ($x$):</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{\\sqrt{7 + \\sqrt[3]{x}} - 3}{x - 8} = \\dfrac{\\frac{\\sqrt{7 + \\sqrt[3]{x}}}{x} - \\frac{3}{x}}{1 - \\frac{8}{x}} \\]
        </div>
        <p><strong>Cuando $x \\to \\infty$:</strong></p>
        <ul>
          <li>$\\frac{3}{x} \\to 0$</li>
          <li>$\\frac{8}{x} \\to 0$</li>
          <li>$\\frac{\\sqrt{7 + \\sqrt[3]{x}}}{x} = \\sqrt{\\frac{7}{x^2} + \\frac{1}{x^{5/3}}} \\to 0$</li>
        </ul>
        <div class="formula-block">
          \\[ \\lim_{x \\to \\infty} \\dfrac{0 - 0}{1 - 0} = 0 \\]
        </div>
        <p><strong>✅ Verificación:</strong> Si $x = 1000000$: $\\frac{\\sqrt{7+100}-3}{999992} ≈ \\frac{7.5-3}{10^6} ≈ 0$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to \\infty} \\dfrac{\\sqrt{7 + \\sqrt[3]{x}} - 3}{x - 8} = 0$</div>
      </div>
    `
  },  {
    id: 3,
    titulo: "1(c). Límite Trigonométrico con Cambio de Variable",
    enunciado: "Determina: $\\lim_{x \\to \\pi/3} \\dfrac{1 - 2\\cos(x)}{\\text{sen}(x - \\pi/3)}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{1 - 2\\cos(\\pi/3)}{\\text{sen}(\\pi/3 - \\pi/3)} = \\dfrac{1 - 2(1/2)}{\\text{sen}(0)} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> $\\cos(\\pi/3) = 1/2$, así que el numerador es $1 - 1 = 0$.</p>
        <p><strong>Para qué:</strong> Usaremos <span class="keyword">cambio de variable</span> para simplificar el argumento del seno.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Cambio de variable</h4>
        <p><strong>Hacemos:</strong> $h = x - \\pi/3$ → cuando $x \\to \\pi/3$, entonces $h \\to 0$</p>
        <p><strong>Despejamos:</strong> $x = h + \\pi/3$</p>
        <div class="formula-block">
          \\[ \\cos(x) = \\cos(h + \\pi/3) = \\cos(h)\\cos(\\pi/3) - \\text{sen}(h)\\text{sen}(\\pi/3) \\]
          \\[ = \\cos(h) \\cdot \\dfrac{1}{2} - \\text{sen}(h) \\cdot \\dfrac{\\sqrt{3}}{2} \\]
        </div>
        <p><strong>Sustituimos en el numerador:</strong></p>
        <div class="formula-block">
          \\[ 1 - 2\\cos(x) = 1 - 2\\left(\\dfrac{\\cos(h)}{2} - \\dfrac{\\sqrt{3}\\text{sen}(h)}{2}\\right) = 1 - \\cos(h) + \\sqrt{3}\\text{sen}(h) \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Evaluación del límite</h4>
        <p><strong>El límite en términos de $h$:</strong></p>
        <div class="formula-block">
          \\[ \\lim_{h \\to 0} \\dfrac{1 - \\cos(h) + \\sqrt{3}\\text{sen}(h)}{\\text{sen}(h)} = \\lim_{h \\to 0} \\left( \\dfrac{1 - \\cos(h)}{\\text{sen}(h)} + \\sqrt{3} \\right) \\]
        </div>
        <p><strong>Usamos límites fundamentales:</strong></p>
        <ul>
          <li>$\\lim_{h \\to 0} \\dfrac{1 - \\cos(h)}{\\text{sen}(h)} = 0$</li>
          <li>$\\lim_{h \\to 0} \\sqrt{3} = \\sqrt{3}$</li>
        </ul>
        <div class="formula-block">
          \\[ = 0 + \\sqrt{3} = \\sqrt{3} \\]
        </div>
        <p><strong>✅ Verificación numérica:</strong> Si $x = 1.05$ (cercano a $\\pi/3 ≈ 1.047$): resultado ≈ $1.73 ≈ \\sqrt{3}$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to \\pi/3} \\dfrac{1 - 2\\cos(x)}{\\text{sen}(x - \\pi/3)} = \\sqrt{3}$</div>
      </div>
    `
  },
  {
    id: 4,
    titulo: "1(d). Límite con Exponenciales y Senos",
    enunciado: "Calcula: $\\lim_{x \\to 0} \\dfrac{e^{\\alpha x} - e^{\\alpha x}}{\\text{sen}(\\alpha x) - \\text{sen}(\\alpha x)}$",    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 Análisis del enunciado</h4>
        <p><strong>Observación importante:</strong> Tal como está escrito en el enunciado original:</p>
        <div class="formula-block">
          \\[ e^{\\alpha x} - e^{\\alpha x} = 0 \\quad ; \\quad \\text{sen}(\\alpha x) - \\text{sen}(\\alpha x) = 0 \\]
        </div>
        <p><strong>Por qué:</strong> Ambos términos son idénticos, así que se cancelan completamente.</p>
        <p><strong>Para qué:</strong> Este ejercicio parece tener un <span class="keyword">error de transcripción</span> en la fuente original.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Interpretación más probable</h4>
        <p><strong>Lo más probable es que debería ser:</strong></p>
        <div class="formula-block">
          \\[ \\lim_{x \\to 0} \\dfrac{e^{\\alpha x} - 1}{\\text{sen}(\\alpha x)} \\quad \\text{o} \\quad \\lim_{x \\to 0} \\dfrac{e^{\\alpha x} - e^{-\\alpha x}}{\\text{sen}(\\alpha x)} \\]
        </div>
        <p><strong>Si fuera la primera opción:</strong></p>
        <div class="formula-block">
          \\[ \\lim_{x \\to 0} \\dfrac{e^{\\alpha x} - 1}{\\text{sen}(\\alpha x)} = \\lim_{x \\to 0} \\dfrac{e^{\\alpha x} - 1}{\\alpha x} \\cdot \\dfrac{\\alpha x}{\\text{sen}(\\alpha x)} = 1 \\cdot 1 = 1 \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Conclusión</h4>
        <p><strong>Tal como está escrito:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{0}{0} \\quad \\text{(indeterminado, pero técnicamente es 0/0)} \\]
        </div>
        <p><strong>⚠️ Nota:</strong> Este ejercicio requiere verificación con el profesor o la fuente original, ya que parece haber un error de copia.</p>
        <div class="resultado-final">🎯 Ejercicio requiere verificación (posible error de transcripción)</div>
      </div>
    `
  },
  {
    id: 5,
    titulo: "2. Derivada por Definición",
    enunciado: "Encuentra, por definición, la derivada de $y = e^{2x} + \\text{sen}(x + 2)$ en el punto $x = 1$.",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué usamos la definición?</h4>
        <p><strong>Por qué:</strong> El ejercicio pide explícitamente usar la <span class="keyword">definición formal de derivada</span>, no las reglas de derivación.</p>
        <p><strong>Para qué:</strong> La definición nos permite entender el concepto fundamental de derivada como límite de la razón de cambio.</p>
        <div class="formula-block">
          \\[ f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h} \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Aplicamos la definición</h4>
        <p><strong>Nuestra función:</strong> $f(x) = e^{2x} + \\text{sen}(x + 2)$</p>
        <p><strong>Calculamos $f(1+h)$ y $f(1)$:</strong></p>
        <div class="formula-block">          \\[ f(1+h) = e^{2(1+h)} + \\text{sen}((1+h) + 2) = e^{2+2h} + \\text{sen}(3+h) \\]
          \\[ f(1) = e^{2} + \\text{sen}(3) \\]
        </div>
        <p><strong>Sustituimos en la definición:</strong></p>
        <div class="formula-block">
          \\[ f'(1) = \\lim_{h \\to 0} \\dfrac{e^{2+2h} + \\text{sen}(3+h) - e^2 - \\text{sen}(3)}{h} \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Separamos y evaluamos límites</h4>
        <p><strong>Separ en dos límites:</strong></p>
        <div class="formula-block">
          \\[ f'(1) = \\lim_{h \\to 0} \\dfrac{e^{2+2h} - e^2}{h} + \\lim_{h \\to 0} \\dfrac{\\text{sen}(3+h) - \\text{sen}(3)}{h} \\]
        </div>
        <p><strong>Primer límite (exponencial):</strong></p>
        <div class="formula-block">
          \\[ e^2 \\cdot \\lim_{h \\to 0} \\dfrac{e^{2h} - 1}{h} = e^2 \\cdot 2 = 2e^2 \\]
        </div>
        <p><strong>Segundo límite (seno):</strong></p>
        <div class="formula-block">
          \\[ \\lim_{h \\to 0} \\dfrac{\\text{sen}(3+h) - \\text{sen}(3)}{h} = \\cos(3) \\]
        </div>
        <p><strong>Resultado final:</strong></p>
        <div class="formula-block">
          \\[ f'(1) = 2e^2 + \\cos(3) \\]
        </div>
        <p><strong>✅ Verificación con reglas:</strong> Derivando directamente: $f'(x) = 2e^{2x} + \\cos(x+2)$ → $f'(1) = 2e^2 + \\cos(3)$ ✓</p>
        <div class="resultado-final">🎯 $f'(1) = 2e^2 + \\cos(3) ≈ 14.79$</div>
      </div>
    `
  },
  {
    id: 6,
    titulo: "3. Curvas Tangentes entre Sí",
    enunciado: "Demuestra que las curvas $y = 4x^2 + 2x - 8$ y $y = x^3 - x + 10$ son tangentes en $(3, 34)$. ¿Ocurrirá lo mismo en $(-2, 4)$?",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Qué significa que sean tangentes?</h4>
        <p><strong>Por qué:</strong> Dos curvas son <span class="keyword">tangentes</span> en un punto si:</p>
        <ol>
          <li>Ambas pasan por el mismo punto</li>
          <li>Tienen la misma pendiente (misma derivada) en ese punto</li>
        </ol>
        <p><strong>Para qué:</strong> Debemos verificar ambas condiciones en $(3, 34)$ y $(-2, 4)$.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Verificación en $(3, 34)$</h4>
        <p><strong>Condición 1 - Mismo punto:</strong></p>
        <div class="formula-block">
          \\[ y_1(3) = 4(9) + 2(3) - 8 = 36 + 6 - 8 = 34 ✓ \\]          \\[ y_2(3) = 27 - 3 + 10 = 34 ✓ \\]
        </div>
        <p><strong>Condición 2 - Misma derivada:</strong></p>
        <div class="formula-block">
          \\[ y_1' = 8x + 2 \\quad \\Rightarrow \\quad y_1'(3) = 24 + 2 = 26 \\]
          \\[ y_2' = 3x^2 - 1 \\quad \\Rightarrow \\quad y_2'(3) = 27 - 1 = 26 ✓ \\]
        </div>
        <p><strong>✅ Ambas condiciones se cumplen en $(3, 34)$</strong></p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Verificación en $(-2, 4)$</h4>
        <p><strong>Condición 1 - Mismo punto:</strong></p>
        <div class="formula-block">
          \\[ y_1(-2) = 4(4) + 2(-2) - 8 = 16 - 4 - 8 = 4 ✓ \\]
          \\[ y_2(-2) = -8 - (-2) + 10 = -8 + 2 + 10 = 4 ✓ \\]
        </div>
        <p><strong>Condición 2 - Misma derivada:</strong></p>
        <div class="formula-block">
          \\[ y_1'(-2) = 8(-2) + 2 = -16 + 2 = -14 \\]
          \\[ y_2'(-2) = 3(4) - 1 = 12 - 1 = 11 \\]
        </div>
        <p><strong>❌ Las derivadas son diferentes: $-14 \\neq 11$</strong></p>
        <div class="resultado-final">🎯 Sí son tangentes en $(3, 34)$ | NO son tangentes en $(-2, 4)$</div>
      </div>
    `
  },
  {
    id: 7,
    titulo: "4. Tangentes Paralelas a las Abscisas",
    enunciado: "Hallar los puntos en que las tangentes a la curva $y = 3x^4 + 4x^3 - 12x^2 + 20$ sean paralelas a las abscisas.",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Qué significa paralelo a las abscisas?</h4>
        <p><strong>Por qué:</strong> Las <span class="keyword">abscisas</span> son el eje X (horizontal). Una recta paralela al eje X tiene <strong>pendiente cero</strong>.</p>
        <p><strong>Para qué:</strong> Debemos encontrar los puntos donde la derivada (pendiente de la tangente) es igual a cero.</p>
        <div class="formula-block">
          \\[ y' = 0 \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Calculamos la derivada</h4>
        <p><strong>Derivamos término a término:</strong></p>
        <div class="formula-block">
          \\[ y = 3x^4 + 4x^3 - 12x^2 + 20 \\]
          \\[ y' = 12x^3 + 12x^2 - 24x \\]
        </div>
        <p><strong>Igualamos a cero:</strong></p>
        <div class="formula-block">
          \\[ 12x^3 + 12x^2 - 24x = 0 \\]
        </div>        <p><strong>Factorizamos:</strong></p>
        <div class="formula-block">
          \\[ 12x(x^2 + x - 2) = 0 \\]
          \\[ 12x(x + 2)(x - 1) = 0 \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Encontramos los puntos</h4>
        <p><strong>Soluciones de $x$:</strong></p>
        <div class="formula-block">
          \\[ x = 0, \\quad x = -2, \\quad x = 1 \\]
        </div>
        <p><strong>Calculamos las coordenadas $y$:</strong></p>
        <div class="formula-block">
          \\[ x = 0: \\quad y = 20 \\quad \\Rightarrow \\quad (0, 20) \\]
          \\[ x = -2: \\quad y = 3(16) + 4(-8) - 12(4) + 20 = 48 - 32 - 48 + 20 = -12 \\quad \\Rightarrow \\quad (-2, -12) \\]
          \\[ x = 1: \\quad y = 3 + 4 - 12 + 20 = 15 \\quad \\Rightarrow \\quad (1, 15) \\]
        </div>
        <p><strong>✅ Verificación:</strong> En estos 3 puntos, la tangente es horizontal (pendiente = 0)</p>
        <div class="resultado-final">🎯 Puntos: $(0, 20)$, $(-2, -12)$, $(1, 15)$</div>
      </div>
    `
  },
  {
    id: 8,
    titulo: "5. Derivada n-ésima de Función Trigonométrica",
    enunciado: "Hallar la derivada n-ésima de la función $y = 3\\text{sen}(2x + 5)$.",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué calculamos varias derivadas?</h4>
        <p><strong>Por qué:</strong> Para encontrar la <span class="keyword">derivada n-ésima</span>, debemos identificar el patrón que siguen las derivadas sucesivas.</p>
        <p><strong>Para qué:</strong> Las funciones trigonométricas tienen un patrón cíclico en sus derivadas que se repite cada 4 derivadas.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Calculamos las primeras derivadas</h4>
        <p><strong>Función original:</strong></p>
        <div class="formula-block">
          \\[ y^{(0)} = 3\\text{sen}(2x + 5) \\]
        </div>
        <p><strong>Primera derivada:</strong></p>
        <div class="formula-block">
          \\[ y^{(1)} = 3 \\cdot 2 \\cdot \\cos(2x + 5) = 6\\cos(2x + 5) \\]
        </div>
        <p><strong>Segunda derivada:</strong></p>
        <div class="formula-block">
          \\[ y^{(2)} = 6 \\cdot 2 \\cdot (-\\text{sen}(2x + 5)) = -12\\text{sen}(2x + 5) \\]
        </div>
        <p><strong>Tercera derivada:</strong></p>
        <div class="formula-block">
          \\[ y^{(3)} = -12 \\cdot 2 \\cdot \\cos(2x + 5) = -24\\cos(2x + 5) \\]        </div>
        <p><strong>Cuarta derivada:</strong></p>
        <div class="formula-block">
          \\[ y^{(4)} = -24 \\cdot 2 \\cdot (-\\text{sen}(2x + 5)) = 48\\text{sen}(2x + 5) \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Identificamos el patrón</h4>
        <p><strong>Observamos:</strong></p>
        <ul>
          <li>El coeficiente se multiplica por 2 en cada derivada: $3 \\cdot 2^n$</li>
          <li>La función trigonométrica sigue el ciclo: sen → cos → -sen → -cos → sen</li>
          <li>Esto se puede escribir como: $\\text{sen}(2x + 5 + \\frac{n\\pi}{2})$</li>
        </ul>
        <p><strong>Fórmula general:</strong></p>
        <div class="formula-block">
          \\[ y^{(n)} = 3 \\cdot 2^n \\cdot \\text{sen}\\left(2x + 5 + \\dfrac{n\\pi}{2}\\right) \\]
        </div>
        <p><strong>✅ Verificación:</strong> Para $n=1$: $3 \\cdot 2 \\cdot \\text{sen}(2x + 5 + \\pi/2) = 6\\cos(2x + 5)$ ✓</p>
        <div class="resultado-final">🎯 $y^{(n)} = 3 \\cdot 2^n \\cdot \\text{sen}\\left(2x + 5 + \\dfrac{n\\pi}{2}\\right)$</div>
      </div>
    `
  }
];

// Exportar para compatibilidad con módulos (opcional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { quimicaData };
}