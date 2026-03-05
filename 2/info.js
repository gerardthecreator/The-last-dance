/**
 * info.js - Base de datos de ejercicios de Límites Matemáticos
 * Compatible con: MathJax 3 + style.css neumórfico mobile-first
 * 
 * Metodología de resolución: ¿POR QUÉ? → ¿QUÉ HAGO? → ¿PARA QUÉ? → ¿CÓMO VERIFICO?
 * 
 * Nivel: Sin derivadas, sin L'Hôpital - Solo álgebra y límites fundamentales
 * Dificultad progresiva: 4 a 8
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
    titulo: "1. Límite con Factorización - Dificultad 4",
    enunciado: "Calcula $\\lim_{x \\to 1} \\dfrac{x^2 - 1}{x - 1}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Por qué:</strong> Si sustituimos directamente $x = 1$, obtenemos:</p>
        <div class="formula-block">
          \\[ \\dfrac{1^2 - 1}{1 - 1} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>¿Qué significa?</strong> La forma $\\frac{0}{0}$ es una <span class="keyword">indeterminación</span>. No podemos dividir por cero, pero el límite SÍ puede existir.</p>
        <p><strong>Para qué:</strong> Debemos transformar la expresión para eliminar la causa de la indeterminación antes de evaluar.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 ¿Cómo eliminamos la indeterminación?</h4>
        <p><strong>Estrategia:</strong> Factorizamos el numerador usando <span class="keyword">diferencia de cuadrados</span>:</p>
        <div class="formula-block">
          \\[ x^2 - 1 = (x - 1)(x + 1) \\]
        </div>
        <p><strong>¿Por qué funciona?</strong> El factor $(x - 1)$ aparece tanto en numerador como denominador. Podemos cancelarlo porque $x \\to 1$ pero $x \\neq 1$.</p>
        <div class="formula-block">
          \\[ \\dfrac{x^2 - 1}{x - 1} = \\dfrac{(x - 1)(x + 1)}{x - 1} = x + 1 \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Evaluación y verificación</h4>
        <p><strong>Ahora sí evaluamos:</strong></p>
        <div class="formula-block">
          \\[ \\lim_{x \\to 1} (x + 1) = 1 + 1 = 2 \\]
        </div>
        <p><strong>✅ Verificación numérica:</strong></p>
        <ul>          <li>Si $x = 0.9$: $\\frac{0.81 - 1}{0.9 - 1} = \\frac{-0.19}{-0.1} = 1.9$</li>
          <li>Si $x = 1.1$: $\\frac{1.21 - 1}{1.1 - 1} = \\frac{0.21}{0.1} = 2.1$</li>
          <li>¡Se acerca a 2 por ambos lados! ✓</li>
        </ul>
        <div class="resultado-final">🎯 $\\lim_{x \\to 1} \\dfrac{x^2 - 1}{x - 1} = 2$</div>
      </div>
    `
  },
  {
    id: 2,
    titulo: "2. Límite con Trinomio - Dificultad 4.5",
    enunciado: "Halla el valor de $\\lim_{x \\to -2} \\dfrac{x^2 + 5x + 6}{x + 2}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{(-2)^2 + 5(-2) + 6}{-2 + 2} = \\dfrac{4 - 10 + 6}{0} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> El denominador se hace cero cuando $x = -2$. El numerador también se hace cero → indeterminación $\\frac{0}{0}$.</p>
        <p><strong>Para qué:</strong> Necesitamos factorizar el numerador para encontrar el factor común $(x + 2)$.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Factorización del trinomio</h4>
        <p><strong>Estrategia:</strong> Buscamos dos números que:</p>
        <ul>
          <li>Multiplicados den $+6$ (término independiente)</li>
          <li>Sumados den $+5$ (coeficiente de $x$)</li>
        </ul>
        <p><strong>Los números son:</strong> $+2$ y $+3$</p>
        <div class="formula-block">
          \\[ x^2 + 5x + 6 = (x + 2)(x + 3) \\]
        </div>
        <p><strong>Cancelamos el factor común:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{(x + 2)(x + 3)}{x + 2} = x + 3 \\quad (\\text{para } x \\neq -2) \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Evaluación y verificación</h4>
        <div class="formula-block">
          \\[ \\lim_{x \\to -2} (x + 3) = -2 + 3 = 1 \\]
        </div>
        <p><strong>✅ Verificación numérica:</strong></p>
        <ul>
          <li>Si $x = -2.1$: $\\frac{4.41 - 10.5 + 6}{-0.1} = \\frac{-0.09}{-0.1} = 0.9$</li>
          <li>Si $x = -1.9$: $\\frac{3.61 - 9.5 + 6}{0.1} = \\frac{0.11}{0.1} = 1.1$</li>
          <li>¡Se acerca a 1 por ambos lados! ✓</li>
        </ul>
        <div class="resultado-final">🎯 $\\lim_{x \\to -2} \\dfrac{x^2 + 5x + 6}{x + 2} = 1$</div>      </div>
    `
  },
  {
    id: 3,
    titulo: "3. Límite con Raíces - Dificultad 5",
    enunciado: "Determina $\\lim_{x \\to 4} \\dfrac{x - 4}{\\sqrt{x} - 2}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{4 - 4}{\\sqrt{4} - 2} = \\dfrac{0}{2 - 2} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> El denominador tiene una raíz que se hace cero cuando $x = 4$.</p>
        <p><strong>Para qué:</strong> Debemos eliminar la raíz del denominador. Hay dos métodos: racionalizar o factorizar como diferencia de cuadrados.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Método: Racionalización</h4>
        <p><strong>Estrategia:</strong> Multiplicamos numerador y denominador por el <span class="keyword">conjugado</span> del denominador: $(\\sqrt{x} + 2)$</p>
        <div class="formula-block">
          \\[ \\dfrac{x - 4}{\\sqrt{x} - 2} \\cdot \\dfrac{\\sqrt{x} + 2}{\\sqrt{x} + 2} \\]
        </div>
        <p><strong>En el denominador usamos:</strong> $(a-b)(a+b) = a^2 - b^2$</p>
        <div class="formula-block">
          \\[ (\\sqrt{x} - 2)(\\sqrt{x} + 2) = (\\sqrt{x})^2 - 2^2 = x - 4 \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Simplificación y evaluación</h4>
        <p><strong>Sustituimos el resultado:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{(x - 4)(\\sqrt{x} + 2)}{x - 4} = \\sqrt{x} + 2 \\]
        </div>
        <p><strong>Ahora evaluamos:</strong></p>
        <div class="formula-block">
          \\[ \\lim_{x \\to 4} (\\sqrt{x} + 2) = \\sqrt{4} + 2 = 2 + 2 = 4 \\]
        </div>
        <p><strong>✅ Verificación:</strong> Si $x = 4.01$: $\\frac{0.01}{\\sqrt{4.01} - 2} ≈ \\frac{0.01}{0.0025} ≈ 4$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to 4} \\dfrac{x - 4}{\\sqrt{x} - 2} = 4$</div>
      </div>
    `
  },
  {
    id: 4,
    titulo: "4. Límite Trigonométrico - Dificultad 5.5",
    enunciado: "Resuelve $\\lim_{x \\to 0} \\dfrac{\\text{sen}(2x)}{\\text{sen}(3x)}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{\\text{sen}(2 \\cdot 0)}{\\text{sen}(3 \\cdot 0)} = \\dfrac{\\text{sen}(0)}{\\text{sen}(0)} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> $\\text{sen}(0) = 0$, así que ambos numerador y denominador son cero.</p>
        <p><strong>Para qué:</strong> Usaremos el <span class="keyword">límite trigonométrico fundamental</span>: $\\lim_{x \\to 0} \\dfrac{\\text{sen } x}{x} = 1$</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Ajuste para usar el límite fundamental</h4>
        <p><strong>Estrategia:</strong> Multiplicamos y dividimos por los argumentos de cada seno:</p>
        <div class="formula-block">
          \\[ \\dfrac{\\text{sen}(2x)}{\\text{sen}(3x)} = \\dfrac{\\text{sen}(2x)}{2x} \\cdot \\dfrac{3x}{\\text{sen}(3x)} \\cdot \\dfrac{2x}{3x} \\]
        </div>
        <p><strong>¿Por qué funciona?</strong> Creamos las formas $\\frac{\\text{sen}(u)}{u}$ donde $u \\to 0$:</p>
        <ul>
          <li>$\\frac{\\text{sen}(2x)}{2x} \\to 1$ cuando $x \\to 0$</li>
          <li>$\\frac{\\text{sen}(3x)}{3x} \\to 1$ cuando $x \\to 0$</li>
        </ul>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Evaluación paso a paso</h4>
        <div class="formula-block">
          \\[ \\lim_{x \\to 0} \\dfrac{\\text{sen}(2x)}{\\text{sen}(3x)} = \\lim_{x \\to 0} \\left( \\dfrac{\\text{sen}(2x)}{2x} \\cdot \\dfrac{3x}{\\text{sen}(3x)} \\cdot \\dfrac{2}{3} \\right) \\]
        </div>
        <p><strong>Aplicamos los límites conocidos:</strong></p>
        <div class="formula-block">
          \\[ = 1 \\cdot \\dfrac{1}{1} \\cdot \\dfrac{2}{3} = \\dfrac{2}{3} \\]
        </div>
        <p><strong>✅ Regla rápida:</strong> Para $\\lim_{x \\to 0} \\frac{\\text{sen}(ax)}{\\text{sen}(bx)} = \\frac{a}{b}$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to 0} \\dfrac{\\text{sen}(2x)}{\\text{sen}(3x)} = \\dfrac{2}{3}$</div>
      </div>
    `
  },
  {
    id: 5,
    titulo: "5. Límite con Polinomios Cúbicos - Dificultad 6",
    enunciado: "Calcula $\\lim_{x \\to 2} \\dfrac{x^3 - x^2 - x - 2}{x^3 - 8}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{2^3 - 2^2 - 2 - 2}{2^3 - 8} = \\dfrac{8 - 4 - 2 - 2}{8 - 8} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> $x = 2$ hace cero tanto al numerador como al denominador.</p>
        <p><strong>Para qué:</strong> Debemos encontrar el factor $(x - 2)$ en ambos polinomios y cancelarlo.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Factorización del denominador</h4>
        <p><strong>El denominador es diferencia de cubos:</strong></p>        <div class="formula-block">
          \\[ x^3 - 8 = x^3 - 2^3 = (x - 2)(x^2 + 2x + 4) \\]
        </div>
        <p><strong>El numerador:</strong> Usamos Ruffini o división sintética con $x = 2$:</p>
        <div class="formula-block">
          \\[ x^3 - x^2 - x - 2 = (x - 2)(x^2 + x + 1) \\]
        </div>
        <p><em>💭 Verificación: $(x-2)(x^2+x+1) = x^3 + x^2 + x - 2x^2 - 2x - 2 = x^3 - x^2 - x - 2$ ✓</em></p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Simplificación y evaluación</h4>
        <p><strong>Cancelamos $(x - 2)$:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{(x - 2)(x^2 + x + 1)}{(x - 2)(x^2 + 2x + 4)} = \\dfrac{x^2 + x + 1}{x^2 + 2x + 4} \\]
        </div>
        <p><strong>Ahora evaluamos en $x = 2$:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{2^2 + 2 + 1}{2^2 + 2(2) + 4} = \\dfrac{4 + 2 + 1}{4 + 4 + 4} = \\dfrac{7}{12} \\]
        </div>
        <div class="resultado-final">🎯 $\\lim_{x \\to 2} \\dfrac{x^3 - x^2 - x - 2}{x^3 - 8} = \\dfrac{7}{12}$</div>
      </div>
    `
  },
  {
    id: 6,
    titulo: "6. Límite con Doble Raíz - Dificultad 6.5",
    enunciado: "Halla $\\lim_{x \\to 0} \\dfrac{\\sqrt{x + 1} - \\sqrt{x^2 + x + 1}}{x}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{\\sqrt{0 + 1} - \\sqrt{0 + 0 + 1}}{0} = \\dfrac{1 - 1}{0} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> Ambas raíces valen 1 cuando $x = 0$, así que el numerador es cero.</p>
        <p><strong>Para qué:</strong> Usaremos el <span class="keyword">conjugado</span> del numerador para eliminar las raíces.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Multiplicación por el conjugado</h4>
        <p><strong>Conjugado del numerador:</strong> $(\\sqrt{x + 1} + \\sqrt{x^2 + x + 1})$</p>
        <div class="formula-block">
          \\[ \\dfrac{\\sqrt{x + 1} - \\sqrt{x^2 + x + 1}}{x} \\cdot \\dfrac{\\sqrt{x + 1} + \\sqrt{x^2 + x + 1}}{\\sqrt{x + 1} + \\sqrt{x^2 + x + 1}} \\]
        </div>
        <p><strong>Numerador después de multiplicar:</strong></p>
        <div class="formula-block">
          \\[ (\\sqrt{x + 1})^2 - (\\sqrt{x^2 + x + 1})^2 = (x + 1) - (x^2 + x + 1) = -x^2 \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Simplificación y evaluación</h4>        <p><strong>Expresión completa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{-x^2}{x(\\sqrt{x + 1} + \\sqrt{x^2 + x + 1})} = \\dfrac{-x}{\\sqrt{x + 1} + \\sqrt{x^2 + x + 1}} \\]
        </div>
        <p><strong>Ahora evaluamos en $x = 0$:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{-0}{\\sqrt{1} + \\sqrt{1}} = \\dfrac{0}{2} = 0 \\]
        </div>
        <p><strong>✅ Verificación:</strong> Si $x = 0.01$: $\\frac{\\sqrt{1.01} - \\sqrt{1.0101}}{0.01} ≈ \\frac{1.005 - 1.005}{0.01} ≈ 0$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to 0} \\dfrac{\\sqrt{x + 1} - \\sqrt{x^2 + x + 1}}{x} = 0$</div>
      </div>
    `
  },
  {
    id: 7,
    titulo: "7. Límite al Infinito con Raíces - Dificultad 7",
    enunciado: "Determina $\\lim_{x \\to \\infty} (\\sqrt{x^2 + 1} - \\sqrt{x^2 - 1})$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Análisis directo:</strong></p>
        <div class="formula-block">
          \\[ \\sqrt{\\infty + 1} - \\sqrt{\\infty - 1} = \\infty - \\infty \\]
        </div>
        <p><strong>Por qué:</strong> Ambas raíces tienden a infinito, pero su diferencia puede ser finita.</p>
        <p><strong>Para qué:</strong> Usaremos el <span class="keyword">conjugado</span> para convertir $\\infty - \\infty$ en una forma manejable.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Multiplicación por el conjugado</h4>
        <p><strong>Conjugado:</strong> $(\\sqrt{x^2 + 1} + \\sqrt{x^2 - 1})$</p>
        <div class="formula-block">
          \\[ (\\sqrt{x^2 + 1} - \\sqrt{x^2 - 1}) \\cdot \\dfrac{\\sqrt{x^2 + 1} + \\sqrt{x^2 - 1}}{\\sqrt{x^2 + 1} + \\sqrt{x^2 - 1}} \\]
        </div>
        <p><strong>Numerador después de multiplicar:</strong></p>
        <div class="formula-block">
          \\[ (x^2 + 1) - (x^2 - 1) = 2 \\]
        </div>
        <p><strong>Denominador:</strong> $\\sqrt{x^2 + 1} + \\sqrt{x^2 - 1}$</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Evaluación del límite</h4>
        <p><strong>Expresión simplificada:</strong></p>
        <div class="formula-block">
          \\[ \\lim_{x \\to \\infty} \\dfrac{2}{\\sqrt{x^2 + 1} + \\sqrt{x^2 - 1}} \\]
        </div>
        <p><strong>Análisis:</strong> El numerador es constante (2), el denominador tiende a $\\infty + \\infty = \\infty$</p>
        <div class="formula-block">
          \\[ = \\dfrac{2}{\\infty} = 0 \\]
        </div>
        <p><strong>✅ Verificación:</strong> Si $x = 1000$: $\\sqrt{1000001} - \\sqrt{999999} ≈ 1000.0005 - 999.9995 ≈ 0.001$ → muy cerca de 0 ✓</p>        <div class="resultado-final">🎯 $\\lim_{x \\to \\infty} (\\sqrt{x^2 + 1} - \\sqrt{x^2 - 1}) = 0$</div>
      </div>
    `
  },
  {
    id: 8,
    titulo: "8. Límite Racional al Infinito - Dificultad 7.5",
    enunciado: "Calcula $\\lim_{x \\to \\infty} \\dfrac{(x^2 - 2)^3}{x^3 + 7}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Análisis directo:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{(\\infty - 2)^3}{\\infty + 7} = \\dfrac{\\infty}{\\infty} \\]
        </div>
        <p><strong>Por qué:</strong> Tanto numerador como denominador tienden a infinito.</p>
        <p><strong>Para qué:</strong> Debemos comparar los <span class="keyword">grados de los polinomios</span> para determinar el comportamiento.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Identificar los grados</h4>
        <p><strong>Numerador:</strong> $(x^2 - 2)^3$</p>
        <ul>
          <li>El término de mayor grado es $(x^2)^3 = x^6$</li>
          <li><strong>Grado del numerador: 6</strong></li>
        </ul>
        <p><strong>Denominador:</strong> $x^3 + 7$</p>
        <ul>
          <li>El término de mayor grado es $x^3$</li>
          <li><strong>Grado del denominador: 3</strong></li>
        </ul>
        <p><strong>Regla clave:</strong> Si grado(numerador) > grado(denominador) → el límite es $\\infty$</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Demostración formal</h4>
        <p><strong>Dividimos por el término de mayor grado del denominador ($x^3$):</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{(x^2 - 2)^3}{x^3 + 7} = \\dfrac{x^6 - 6x^4 + 12x^2 - 8}{x^3 + 7} \\]
        </div>
        <div class="formula-block">
          \\[ = \\dfrac{x^6(1 - \\frac{6}{x^2} + \\frac{12}{x^4} - \\frac{8}{x^6})}{x^3(1 + \\frac{7}{x^3})} = x^3 \\cdot \\dfrac{1 - 0 + 0 - 0}{1 + 0} \\]
        </div>
        <p><strong>Cuando $x \\to \\infty$:</strong></p>
        <div class="formula-block">
          \\[ = \\infty \\cdot 1 = \\infty \\]
        </div>
        <p><strong>✅ Conclusión:</strong> El numerador crece mucho más rápido que el denominador.</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to \\infty} \\dfrac{(x^2 - 2)^3}{x^3 + 7} = +\\infty$</div>
      </div>
    `
  },  {
    id: 9,
    titulo: "9. Límite Trigonométrico Avanzado - Dificultad 8",
    enunciado: "Resuelve $\\lim_{x \\to 0} \\dfrac{1 - \\cos(x) \\sqrt{\\cos(x)}}{x^2}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{1 - \\cos(0) \\sqrt{\\cos(0)}}{0^2} = \\dfrac{1 - 1 \\cdot 1}{0} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> $\\cos(0) = 1$, así que el numerador es $1 - 1 = 0$.</p>
        <p><strong>Para qué:</strong> Usaremos identidades trigonométricas y el límite fundamental de coseno.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Simplificación de la expresión</h4>
        <p><strong>Notamos que:</strong> $\\cos(x) \\sqrt{\\cos(x)} = \\cos(x) \\cdot \\cos^{1/2}(x) = \\cos^{3/2}(x)$</p>
        <p><strong>Usamos la identidad:</strong> $1 - \\cos(x) = 2\\text{sen}^2(x/2)$</p>
        <p><strong>Pero primero, aproximación para $x$ pequeño:</strong></p>
        <div class="formula-block">
          \\[ \\cos(x) ≈ 1 - \\dfrac{x^2}{2} \\quad (\\text{para } x \\text{ cercano a } 0) \\]
        </div>
        <p><strong>Entonces:</strong> $\\cos^{3/2}(x) ≈ \\left(1 - \\dfrac{x^2}{2}\\right)^{3/2} ≈ 1 - \\dfrac{3x^2}{4}$</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Evaluación del límite</h4>
        <p><strong>Sustituimos en el numerador:</strong></p>
        <div class="formula-block">
          \\[ 1 - \\cos^{3/2}(x) ≈ 1 - \\left(1 - \\dfrac{3x^2}{4}\\right) = \\dfrac{3x^2}{4} \\]
        </div>
        <p><strong>Ahora el límite completo:</strong></p>
        <div class="formula-block">
          \\[ \\lim_{x \\to 0} \\dfrac{\\frac{3x^2}{4}}{x^2} = \\lim_{x \\to 0} \\dfrac{3}{4} = \\dfrac{3}{4} \\]
        </div>
        <p><strong>✅ Verificación numérica:</strong> Si $x = 0.01$: $\\frac{1 - \\cos(0.01)\\sqrt{\\cos(0.01)}}{0.0001} ≈ 0.75$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to 0} \\dfrac{1 - \\cos(x) \\sqrt{\\cos(x)}}{x^2} = \\dfrac{3}{4}$</div>
      </div>
    `
  },
  {
    id: 10,
    titulo: "10. Límite con Logaritmo vs Potencia - Dificultad 8",
    enunciado: "Halla $\\lim_{x \\to \\infty} \\dfrac{\\ln(x)}{x^{0.003}}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Análisis directo:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{\\ln(\\infty)}{\\infty^{0.003}} = \\dfrac{\\infty}{\\infty} \\]
        </div>        <p><strong>Por qué:</strong> Tanto el logaritmo como la potencia tienden a infinito cuando $x \\to \\infty$.</p>
        <p><strong>Para qué:</strong> Compararemos las <span class="keyword">tasas de crecimiento</span> de ambas funciones.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Jerarquía de crecimiento</h4>
        <p><strong>Orden de crecimiento (de más lento a más rápido):</strong></p>
        <div class="formula-block">
          \\[ \\ln(x) \\ll x^a \\ll x^b \\ll e^x \\quad (\\text{para } 0 < a < b) \\]
        </div>
        <p><strong>Regla fundamental:</strong> Cualquier potencia positiva de $x$, por pequeña que sea, crece más rápido que el logaritmo natural.</p>
        <p><strong>En este caso:</strong> $x^{0.003}$ es una potencia positiva (aunque muy pequeña).</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Demostración intuitiva</h4>
        <p><strong>Valores numéricos para comparar:</strong></p>
        <div class="formula-block">
          \\[ \\begin{array}{c|c|c}
          x & \\ln(x) & x^{0.003} \\\\ \\hline
          10^3 & 6.91 & 1.02 \\\\
          10^6 & 13.82 & 1.04 \\\\
          10^9 & 20.72 & 1.06 \\\\
          10^{100} & 230.26 & 1.70
          \\end{array} \\]
        </div>
        <p><strong>Observación:</strong> Aunque $x^{0.003}$ crece muy lentamente, eventualmente superará a $\\ln(x)$.</p>
        <p><strong>Conclusión:</strong> El denominador crece más rápido que el numerador.</p>
        <div class="formula-block">
          \\[ \\lim_{x \\to \\infty} \\dfrac{\\ln(x)}{x^{0.003}} = 0 \\]
        </div>
        <div class="resultado-final">🎯 $\\lim_{x \\to \\infty} \\dfrac{\\ln(x)}{x^{0.003}} = 0$</div>
      </div>
    `
  }
];

// Exportar para compatibilidad con módulos (opcional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { quimicaData };
}