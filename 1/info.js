/**
 * info.js - Base de datos de ejercicios de Límites Matemáticos
 * Compatible con: MathJax 3 + style.css neumórfico mobile-first
 * 
 * Metodología de resolución: ¿POR QUÉ? → ¿QUÉ HAGO? → ¿PARA QUÉ? → ¿CÓMO VERIFICO?
 * 
 * Nivel: Sin derivadas, sin L'Hôpital - Solo álgebra básica y límites fundamentales
 * Dificultad progresiva: 1 a 5
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
    titulo: "1. Sustitución Directa - Dificultad 1",
    enunciado: "Calcula $\\lim_{x \\to 0} (\\text{sen}(x)\\cos(x) + 2)$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué podemos sustituir directamente?</h4>
        <p><strong>Por qué:</strong> Esta función es <span class="keyword">continua</span> en $x = 0$. Las funciones trigonométricas (seno y coseno) son continuas en todos los números reales.</p>
        <p><strong>Para qué:</strong> Cuando una función es continua en el punto donde evaluamos el límite, podemos simplemente <em>sustituir el valor</em> sin hacer operaciones adicionales.</p>
        <p><strong>Verificamos que no haya problemas:</strong></p>
        <ul>
          <li>¿Hay división por cero? ❌ No</li>
          <li>¿Hay raíces de números negativos? ❌ No</li>
          <li>¿Hay indeterminaciones? ❌ No</li>
        </ul>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Sustituimos $x = 0$</h4>
        <p><strong>Recordemos los valores trigonométricos:</strong></p>
        <div class="formula-block">
          \\[ \\text{sen}(0) = 0 \\quad ; \\quad \\cos(0) = 1 \\]
        </div>
        <p><strong>Sustituimos en la expresión:</strong></p>
        <div class="formula-block">
          \\[ \\lim_{x \\to 0} (\\text{sen}(x)\\cos(x) + 2) = \\text{sen}(0) \\cdot \\cos(0) + 2 \\]
          \\[ = 0 \\cdot 1 + 2 = 0 + 2 = 2 \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Verificación numérica</h4>
        <p><strong>Probemos con valores cercanos a 0:</strong></p>
        <ul>
          <li>Si $x = 0.1$: $\\text{sen}(0.1)\\cos(0.1) + 2 ≈ 0.0998 \\cdot 0.995 + 2 ≈ 2.099$</li>          <li>Si $x = 0.01$: $\\text{sen}(0.01)\\cos(0.01) + 2 ≈ 0.01 \\cdot 1 + 2 ≈ 2.01$</li>
          <li>Si $x = -0.01$: $≈ 2.00$</li>
        </ul>
        <p><strong>✅ Conclusión:</strong> Los valores se acercan a 2 cuando $x$ se acerca a 0.</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to 0} (\\text{sen}(x)\\cos(x) + 2) = 2$</div>
      </div>
    `
  },
  {
    id: 2,
    titulo: "2. Evaluación Sin Indeterminación - Dificultad 1.5",
    enunciado: "Halla el valor de $\\lim_{x \\to \\pi} \\dfrac{4\\cos(x)}{2 - \\text{sen}(x)}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué no hay indeterminación?</h4>
        <p><strong>Por qué:</strong> Debemos verificar si al sustituir $x = \\pi$ obtenemos alguna forma indeterminada como $\\frac{0}{0}$ o $\\frac{\\text{número}}{0}$.</p>
        <p><strong>Para qué:</strong> Si el denominador NO es cero, podemos evaluar directamente sin simplificaciones.</p>
        <p><strong>Valores trigonométricos en $\\pi$:</strong></p>
        <div class="formula-block">
          \\[ \\cos(\\pi) = -1 \\quad ; \\quad \\text{sen}(\\pi) = 0 \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Sustituimos $x = \\pi$</h4>
        <p><strong>Numerador:</strong></p>
        <div class="formula-block">
          \\[ 4\\cos(\\pi) = 4 \\cdot (-1) = -4 \\]
        </div>
        <p><strong>Denominador:</strong></p>
        <div class="formula-block">
          \\[ 2 - \\text{sen}(\\pi) = 2 - 0 = 2 \\]
        </div>
        <p><strong>¡El denominador es 2, NO es cero!</strong> → Podemos dividir sin problemas.</p>
        <div class="formula-block">
          \\[ \\lim_{x \\to \\pi} \\dfrac{4\\cos(x)}{2 - \\text{sen}(x)} = \\dfrac{-4}{2} = -2 \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Verificación</h4>
        <p><strong>✅ Comprobación:</strong></p>
        <ul>
          <li>Numerador en $x = \\pi$: $-4$ ✓</li>
          <li>Denominador en $x = \\pi$: $2$ ✓</li>
          <li>División válida: $\\frac{-4}{2} = -2$ ✓</li>
        </ul>
        <p><strong>💭 Reflexión:</strong> No todos los límites tienen indeterminación. Siempre verifica primero si puedes sustituir directamente.</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to \\pi} \\dfrac{4\\cos(x)}{2 - \\text{sen}(x)} = -2$</div>
      </div>
    `
  },  {
    id: 3,
    titulo: "3. Diferencia de Cuadrados - Dificultad 2",
    enunciado: "Determina $\\lim_{x \\to 1} \\dfrac{x^2 - 1}{x - 1}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{1^2 - 1}{1 - 1} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> La forma $\\frac{0}{0}$ es una <span class="keyword">indeterminación</span>. No significa que el límite no exista, solo que debemos transformar la expresión.</p>
        <p><strong>Para qué:</strong> Necesitamos eliminar el factor que causa el cero en el denominador.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Factorizamos el numerador</h4>
        <p><strong>Reconocemos diferencia de cuadrados:</strong></p>
        <div class="formula-block">
          \\[ x^2 - 1 = x^2 - 1^2 = (x - 1)(x + 1) \\]
        </div>
        <p><strong>Sustituimos en la fracción:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{x^2 - 1}{x - 1} = \\dfrac{(x - 1)(x + 1)}{x - 1} \\]
        </div>
        <p><strong>Cancelamos $(x - 1)$:</strong> (válido porque $x \\to 1$ pero $x \\neq 1$)</p>
        <div class="formula-block">
          \\[ = x + 1 \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Evaluamos y verificamos</h4>
        <p><strong>Ahora sí evaluamos:</strong></p>
        <div class="formula-block">
          \\[ \\lim_{x \\to 1} (x + 1) = 1 + 1 = 2 \\]
        </div>
        <p><strong>✅ Verificación numérica:</strong></p>
        <ul>
          <li>Si $x = 0.9$: $\\frac{0.81 - 1}{0.9 - 1} = \\frac{-0.19}{-0.1} = 1.9$</li>
          <li>Si $x = 1.1$: $\\frac{1.21 - 1}{1.1 - 1} = \\frac{0.21}{0.1} = 2.1$</li>
          <li>¡Se acerca a 2 por ambos lados! ✓</li>
        </ul>
        <div class="resultado-final">🎯 $\\lim_{x \\to 1} \\dfrac{x^2 - 1}{x - 1} = 2$</div>
      </div>
    `
  },
  {
    id: 4,
    titulo: "4. Factorización de Trinomio - Dificultad 2.5",
    enunciado: "Resuelve $\\lim_{x \\to -2} \\dfrac{x^2 + 5x + 6}{x + 2}$",
    resolucion: `      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{(-2)^2 + 5(-2) + 6}{-2 + 2} = \\dfrac{4 - 10 + 6}{0} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> Tanto numerador como denominador son cero cuando $x = -2$.</p>
        <p><strong>Para qué:</strong> Debemos factorizar el trinomio para encontrar el factor común $(x + 2)$.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Factorizamos el trinomio</h4>
        <p><strong>Buscamos dos números que:</strong></p>
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
        <div class="resultado-final">🎯 $\\lim_{x \\to -2} \\dfrac{x^2 + 5x + 6}{x + 2} = 1$</div>
      </div>
    `
  },
  {
    id: 5,
    titulo: "5. Límite Trigonométrico Fundamental - Dificultad 3",
    enunciado: "Calcula $\\lim_{x \\to 0} \\dfrac{\\text{sen}(x)}{4x}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{\\text{sen}(0)}{4 \\cdot 0} = \\dfrac{0}{0} \\]        </div>
        <p><strong>Por qué:</strong> $\\text{sen}(0) = 0$ y el denominador también es cero.</p>
        <p><strong>Para qué:</strong> Usaremos el <span class="keyword">límite trigonométrico fundamental</span>:</p>
        <div class="formula-block">
          \\[ \\lim_{x \\to 0} \\dfrac{\\text{sen } x}{x} = 1 \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Ajustamos la expresión</h4>
        <p><strong>Separamos la constante del límite:</strong></p>
        <div class="formula-block">
          \\[ \\lim_{x \\to 0} \\dfrac{\\text{sen}(x)}{4x} = \\lim_{x \\to 0} \\left( \\dfrac{1}{4} \\cdot \\dfrac{\\text{sen}(x)}{x} \\right) \\]
        </div>
        <p><strong>Sacamos la constante fuera del límite:</strong></p>
        <div class="formula-block">
          \\[ = \\dfrac{1}{4} \\cdot \\lim_{x \\to 0} \\dfrac{\\text{sen}(x)}{x} \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Aplicamos el límite fundamental</h4>
        <p><strong>Sabemos que:</strong> $\\lim_{x \\to 0} \\dfrac{\\text{sen}(x)}{x} = 1$</p>
        <div class="formula-block">
          \\[ = \\dfrac{1}{4} \\cdot 1 = \\dfrac{1}{4} \\]
        </div>
        <p><strong>✅ Verificación numérica:</strong></p>
        <ul>
          <li>Si $x = 0.1$: $\\frac{\\text{sen}(0.1)}{0.4} ≈ \\frac{0.0998}{0.4} ≈ 0.2495$</li>
          <li>Si $x = 0.01$: $\\frac{\\text{sen}(0.01)}{0.04} ≈ \\frac{0.01}{0.04} = 0.25$</li>
          <li>¡Se acerca a $\\frac{1}{4} = 0.25$! ✓</li>
        </ul>
        <div class="resultado-final">🎯 $\\lim_{x \\to 0} \\dfrac{\\text{sen}(x)}{4x} = \\dfrac{1}{4}$</div>
      </div>
    `
  },
  {
    id: 6,
    titulo: "6. Radicales Básicos - Dificultad 3.5",
    enunciado: "Halla $\\lim_{x \\to 4} \\dfrac{x - 4}{\\sqrt{x} - 2}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{4 - 4}{\\sqrt{4} - 2} = \\dfrac{0}{2 - 2} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> El denominador tiene una raíz que se hace cero cuando $x = 4$.</p>
        <p><strong>Para qué:</strong> Debemos eliminar la raíz del denominador usando el <span class="keyword">conjugado</span>.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Multiplicamos por el conjugado</h4>        <p><strong>Conjugado del denominador:</strong> $(\\sqrt{x} + 2)$</p>
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
        <p><strong>Expresión completa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{(x - 4)(\\sqrt{x} + 2)}{x - 4} = \\sqrt{x} + 2 \\]
        </div>
        <p><strong>Ahora evaluamos en $x = 4$:</strong></p>
        <div class="formula-block">
          \\[ \\lim_{x \\to 4} (\\sqrt{x} + 2) = \\sqrt{4} + 2 = 2 + 2 = 4 \\]
        </div>
        <p><strong>✅ Verificación:</strong> Si $x = 4.01$: $\\frac{0.01}{\\sqrt{4.01} - 2} ≈ \\frac{0.01}{0.0025} ≈ 4$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to 4} \\dfrac{x - 4}{\\sqrt{x} - 2} = 4$</div>
      </div>
    `
  },
  {
    id: 7,
    titulo: "7. Factorización Doble - Dificultad 4",
    enunciado: "Determina $\\lim_{x \\to 2} \\dfrac{x^2 - 3x + 2}{x^2 + x - 6}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{2^2 - 3(2) + 2}{2^2 + 2 - 6} = \\dfrac{4 - 6 + 2}{4 + 2 - 6} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> Ambos polinomios se hacen cero cuando $x = 2$.</p>
        <p><strong>Para qué:</strong> Debemos factorizar <span class="keyword">ambos</span> (numerador y denominador) para encontrar el factor común.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Factorizamos numerador y denominador</h4>
        <p><strong>Numerador:</strong> $x^2 - 3x + 2$</p>
        <ul>
          <li>Números que multiplicados den $+2$ y sumados den $-3$: $-1$ y $-2$</li>
        </ul>
        <div class="formula-block">
          \\[ x^2 - 3x + 2 = (x - 1)(x - 2) \\]
        </div>
        <p><strong>Denominador:</strong> $x^2 + x - 6$</p>
        <ul>
          <li>Números que multiplicados den $-6$ y sumados den $+1$: $+3$ y $-2$</li>        </ul>
        <div class="formula-block">
          \\[ x^2 + x - 6 = (x + 3)(x - 2) \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Cancelamos y evaluamos</h4>
        <p><strong>Sustituimos las factorizaciones:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{(x - 1)(x - 2)}{(x + 3)(x - 2)} = \\dfrac{x - 1}{x + 3} \\]
        </div>
        <p><strong>Ahora evaluamos en $x = 2$:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{2 - 1}{2 + 3} = \\dfrac{1}{5} \\]
        </div>
        <p><strong>✅ Verificación:</strong> Si $x = 2.01$: $\\frac{4.0401 - 6.03 + 2}{4.0401 + 2.01 - 6} ≈ \\frac{0.0101}{0.0501} ≈ 0.20 = \\frac{1}{5}$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to 2} \\dfrac{x^2 - 3x + 2}{x^2 + x - 6} = \\dfrac{1}{5}$</div>
      </div>
    `
  },
  {
    id: 8,
    titulo: "8. Límites al Infinito - Dificultad 4.5",
    enunciado: "Calcula $\\lim_{x \\to \\infty} \\dfrac{4 - 7x}{2 + 3x}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Análisis directo:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{4 - 7(\\infty)}{2 + 3(\\infty)} = \\dfrac{-\\infty}{\\infty} \\]
        </div>
        <p><strong>Por qué:</strong> Tanto numerador como denominador tienden a infinito (con signo).</p>
        <p><strong>Para qué:</strong> Debemos comparar los <span class="keyword">términos de mayor grado</span> en numerador y denominador.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Identificamos los términos dominantes</h4>
        <p><strong>Numerador:</strong> $4 - 7x$</p>
        <ul>
          <li>Término de mayor grado: $-7x$ (grado 1)</li>
        </ul>
        <p><strong>Denominador:</strong> $2 + 3x$</p>
        <ul>
          <li>Término de mayor grado: $3x$ (grado 1)</li>
        </ul>
        <p><strong>Regla clave:</strong> Cuando los grados son iguales, el límite es el cociente de los coeficientes principales.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Demostración formal</h4>
        <p><strong>Dividimos todo por $x$ (el término de mayor grado):</strong></p>
        <div class="formula-block">          \\[ \\dfrac{4 - 7x}{2 + 3x} = \\dfrac{\\frac{4}{x} - 7}{\\frac{2}{x} + 3} \\]
        </div>
        <p><strong>Cuando $x \\to \\infty$:</strong> $\\frac{4}{x} \\to 0$ y $\\frac{2}{x} \\to 0$</p>
        <div class="formula-block">
          \\[ \\lim_{x \\to \\infty} \\dfrac{0 - 7}{0 + 3} = \\dfrac{-7}{3} \\]
        </div>
        <p><strong>✅ Verificación numérica:</strong></p>
        <ul>
          <li>Si $x = 1000$: $\\frac{4 - 7000}{2 + 3000} = \\frac{-6996}{3002} ≈ -2.33$</li>
          <li>$-\\frac{7}{3} ≈ -2.333...$ ✓</li>
        </ul>
        <div class="resultado-final">🎯 $\\lim_{x \\to \\infty} \\dfrac{4 - 7x}{2 + 3x} = -\\dfrac{7}{3}$</div>
      </div>
    `
  },
  {
    id: 9,
    titulo: "9. Identidad Trigonométrica - Dificultad 5",
    enunciado: "Resuelve $\\lim_{x \\to 0} \\dfrac{1 - \\cos(2x)}{4x^2}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{1 - \\cos(0)}{4 \\cdot 0^2} = \\dfrac{1 - 1}{0} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> $\\cos(0) = 1$, así que el numerador es cero.</p>
        <p><strong>Para qué:</strong> Usaremos una <span class="keyword">identidad trigonométrica de ángulo doble</span> para transformar el coseno.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Aplicamos identidad trigonométrica</h4>
        <p><strong>Identidad de ángulo doble:</strong></p>
        <div class="formula-block">
          \\[ \\cos(2x) = 1 - 2\\text{sen}^2(x) \\]
        </div>
        <p><strong>Despejamos:</strong> $1 - \\cos(2x) = 2\\text{sen}^2(x)$</p>
        <p><strong>Sustituimos en el límite:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{1 - \\cos(2x)}{4x^2} = \\dfrac{2\\text{sen}^2(x)}{4x^2} = \\dfrac{\\text{sen}^2(x)}{2x^2} \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Aplicamos el límite fundamental</h4>
        <p><strong>Reescribimos usando el límite fundamental:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{\\text{sen}^2(x)}{2x^2} = \\dfrac{1}{2} \\cdot \\left(\\dfrac{\\text{sen}(x)}{x}\\right)^2 \\]
        </div>
        <p><strong>Sabemos que:</strong> $\\lim_{x \\to 0} \\dfrac{\\text{sen}(x)}{x} = 1$</p>
        <div class="formula-block">
          \\[ \\lim_{x \\to 0} \\dfrac{1}{2} \\cdot \\left(\\dfrac{\\text{sen}(x)}{x}\\right)^2 = \\dfrac{1}{2} \\cdot 1^2 = \\dfrac{1}{2} \\]        </div>
        <p><strong>✅ Verificación:</strong> Si $x = 0.01$: $\\frac{1 - \\cos(0.02)}{4(0.0001)} ≈ \\frac{0.0002}{0.0004} = 0.5$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to 0} \\dfrac{1 - \\cos(2x)}{4x^2} = \\dfrac{1}{2}$</div>
      </div>
    `
  },
  {
    id: 10,
    titulo: "10. Uso del Conjugado - Dificultad 5",
    enunciado: "Halla el valor de $\\lim_{x \\to 3} \\dfrac{\\sqrt{x + 1} - 2}{x - 3}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{\\sqrt{3 + 1} - 2}{3 - 3} = \\dfrac{\\sqrt{4} - 2}{0} = \\dfrac{2 - 2}{0} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> La raíz se hace igual a 2 cuando $x = 3$, cancelándose con el $-2$.</p>
        <p><strong>Para qué:</strong> Usaremos el <span class="keyword">conjugado</span> del numerador para eliminar la raíz.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Multiplicamos por el conjugado</h4>
        <p><strong>Conjugado del numerador:</strong> $(\\sqrt{x + 1} + 2)$</p>
        <div class="formula-block">
          \\[ \\dfrac{\\sqrt{x + 1} - 2}{x - 3} \\cdot \\dfrac{\\sqrt{x + 1} + 2}{\\sqrt{x + 1} + 2} \\]
        </div>
        <p><strong>Numerador después de multiplicar:</strong></p>
        <div class="formula-block">
          \\[ (\\sqrt{x + 1})^2 - 2^2 = (x + 1) - 4 = x - 3 \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Simplificación y evaluación</h4>
        <p><strong>Expresión completa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{x - 3}{(x - 3)(\\sqrt{x + 1} + 2)} = \\dfrac{1}{\\sqrt{x + 1} + 2} \\]
        </div>
        <p><strong>Ahora evaluamos en $x = 3$:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{1}{\\sqrt{3 + 1} + 2} = \\dfrac{1}{2 + 2} = \\dfrac{1}{4} \\]
        </div>
        <p><strong>✅ Verificación numérica:</strong></p>
        <ul>
          <li>Si $x = 3.01$: $\\frac{\\sqrt{4.01} - 2}{0.01} ≈ \\frac{2.0025 - 2}{0.01} = 0.25$</li>
          <li>$\\frac{1}{4} = 0.25$ ✓</li>
        </ul>
        <div class="resultado-final">🎯 $\\lim_{x \\to 3} \\dfrac{\\sqrt{x + 1} - 2}{x - 3} = \\dfrac{1}{4}$</div>
      </div>
    `
  }];

// Exportar para compatibilidad con módulos (opcional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { quimicaData };
}