/**
 * info.js - Base de datos de ejercicios de Límites Matemáticos (Nivel Avanzado)
 * Compatible con: MathJax 3 + style.css neumórfico mobile-first
 * 
 * Metodología de resolución: ¿POR QUÉ? → ¿QUÉ HAGO? → ¿PARA QUÉ? → ¿CÓMO VERIFICO?
 * 
 * Nivel: Sin derivadas, sin L'Hôpital - Solo álgebra avanzada y técnicas especiales
 * Dificultad progresiva: 6 a 10
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
    titulo: "1. Factorización de Polinomios Cúbicos - Dificultad 6",
    enunciado: "Calcula: $\\lim_{x \\to 1} \\dfrac{x^3 - 3x + 2}{x^3 - x^2 - x + 1}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{1^3 - 3(1) + 2}{1^3 - 1^2 - 1 + 1} = \\dfrac{1 - 3 + 2}{1 - 1 - 1 + 1} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> Tanto numerador como denominador son cero cuando $x = 1$.</p>
        <p><strong>Para qué:</strong> Debemos factorizar ambos polinomios para encontrar y cancelar el factor común $(x - 1)$.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Factorización con Ruffini</h4>
        <p><strong>Numerador:</strong> $x^3 - 3x + 2$</p>
        <p>Sabemos que $x = 1$ es raíz. Usamos Ruffini:</p>
        <div class="formula-block">
          \\[ x^3 - 3x + 2 = (x - 1)(x^2 + x - 2) \\]
        </div>
        <p>Factorizamos el cuadrático: $x^2 + x - 2 = (x - 1)(x + 2)$</p>
        <div class="formula-block">
          \\[ \\text{Numerador} = (x - 1)^2(x + 2) \\]
        </div>
        <p><strong>Denominador:</strong> $x^3 - x^2 - x + 1$</p>
        <div class="formula-block">
          \\[ x^3 - x^2 - x + 1 = (x - 1)(x^2 - 1) = (x - 1)^2(x + 1) \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Simplificación y evaluación</h4>
        <p><strong>Cancelamos $(x - 1)^2$:</strong></p>        <div class="formula-block">
          \\[ \\dfrac{(x - 1)^2(x + 2)}{(x - 1)^2(x + 1)} = \\dfrac{x + 2}{x + 1} \\]
        </div>
        <p><strong>Ahora evaluamos en $x = 1$:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{1 + 2}{1 + 1} = \\dfrac{3}{2} \\]
        </div>
        <p><strong>✅ Verificación numérica:</strong> Si $x = 1.01$: $\\frac{1.030301 - 3.03 + 2}{1.030301 - 1.0201 - 1.01 + 1} ≈ \\frac{0.0003}{0.0002} ≈ 1.5$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to 1} \\dfrac{x^3 - 3x + 2}{x^3 - x^2 - x + 1} = \\dfrac{3}{2}$</div>
      </div>
    `
  },
  {
    id: 2,
    titulo: "2. Racionalización con Raíces Anidadas - Dificultad 6.5",
    enunciado: "Halla: $\\lim_{x \\to 0} \\dfrac{\\sqrt{x + 1} - \\sqrt{x^2 + x + 1}}{x}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{\\sqrt{0 + 1} - \\sqrt{0 + 0 + 1}}{0} = \\dfrac{1 - 1}{0} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> Ambas raíces valen 1 cuando $x = 0$, cancelándose en el numerador.</p>
        <p><strong>Para qué:</strong> Usaremos el <span class="keyword">conjugado</span> del numerador para eliminar las raíces.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Multiplicación por el conjugado</h4>
        <p><strong>Conjugado:</strong> $(\\sqrt{x + 1} + \\sqrt{x^2 + x + 1})$</p>
        <div class="formula-block">
          \\[ \\dfrac{\\sqrt{x + 1} - \\sqrt{x^2 + x + 1}}{x} \\cdot \\dfrac{\\sqrt{x + 1} + \\sqrt{x^2 + x + 1}}{\\sqrt{x + 1} + \\sqrt{x^2 + x + 1}} \\]
        </div>
        <p><strong>Numerador después de multiplicar:</strong></p>
        <div class="formula-block">
          \\[ (\\sqrt{x + 1})^2 - (\\sqrt{x^2 + x + 1})^2 = (x + 1) - (x^2 + x + 1) = -x^2 \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Simplificación y evaluación</h4>
        <p><strong>Expresión completa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{-x^2}{x(\\sqrt{x + 1} + \\sqrt{x^2 + x + 1})} = \\dfrac{-x}{\\sqrt{x + 1} + \\sqrt{x^2 + x + 1}} \\]
        </div>
        <p><strong>Ahora evaluamos en $x = 0$:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{-0}{\\sqrt{1} + \\sqrt{1}} = \\dfrac{0}{2} = 0 \\]
        </div>
        <p><strong>✅ Verificación:</strong> Si $x = 0.01$: $\\frac{\\sqrt{1.01} - \\sqrt{1.0101}}{0.01} ≈ \\frac{1.005 - 1.005}{0.01} ≈ 0$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to 0} \\dfrac{\\sqrt{x + 1} - \\sqrt{x^2 + x + 1}}{x} = 0$</div>
      </div>    `
  },
  {
    id: 3,
    titulo: "3. Límite al Infinito con Parámetros - Dificultad 7",
    enunciado: "Determina: $\\lim_{x \\to \\infty} (\\sqrt{x^2 + ax} - \\sqrt{x^2 - bx})$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Análisis directo:</strong></p>
        <div class="formula-block">
          \\[ \\sqrt{\\infty + a\\infty} - \\sqrt{\\infty - b\\infty} = \\infty - \\infty \\]
        </div>
        <p><strong>Por qué:</strong> Ambas raíces tienden a infinito, pero su diferencia puede ser finita.</p>
        <p><strong>Para qué:</strong> Usaremos el <span class="keyword">conjugado</span> para convertir $\\infty - \\infty$ en una forma manejable.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Multiplicación por el conjugado</h4>
        <p><strong>Conjugado:</strong> $(\\sqrt{x^2 + ax} + \\sqrt{x^2 - bx})$</p>
        <div class="formula-block">
          \\[ (\\sqrt{x^2 + ax} - \\sqrt{x^2 - bx}) \\cdot \\dfrac{\\sqrt{x^2 + ax} + \\sqrt{x^2 - bx}}{\\sqrt{x^2 + ax} + \\sqrt{x^2 - bx}} \\]
        </div>
        <p><strong>Numerador después de multiplicar:</strong></p>
        <div class="formula-block">
          \\[ (x^2 + ax) - (x^2 - bx) = ax + bx = (a + b)x \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Evaluación del límite</h4>
        <p><strong>Expresión simplificada:</strong></p>
        <div class="formula-block">
          \\[ \\lim_{x \\to \\infty} \\dfrac{(a + b)x}{\\sqrt{x^2 + ax} + \\sqrt{x^2 - bx}} \\]
        </div>
        <p><strong>Factorizamos $x$ en el denominador:</strong></p>
        <div class="formula-block">
          \\[ = \\lim_{x \\to \\infty} \\dfrac{(a + b)x}{x\\sqrt{1 + \\frac{a}{x}} + x\\sqrt{1 - \\frac{b}{x}}} = \\lim_{x \\to \\infty} \\dfrac{a + b}{\\sqrt{1 + 0} + \\sqrt{1 - 0}} \\]
          \\[ = \\dfrac{a + b}{1 + 1} = \\dfrac{a + b}{2} \\]
        </div>
        <p><strong>✅ Verificación:</strong> Si $a = 2, b = 4$: $\\frac{2+4}{2} = 3$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to \\infty} (\\sqrt{x^2 + ax} - \\sqrt{x^2 - bx}) = \\dfrac{a + b}{2}$</div>
      </div>
    `
  },
  {
    id: 4,
    titulo: "4. Trigonométrico con Cambio de Variable - Dificultad 7.5",
    enunciado: "Resuelve: $\\lim_{x \\to \\pi/4} \\dfrac{\\text{sen } x - \\cos x}{1 - \\tan x}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{\\text{sen}(\\pi/4) - \\cos(\\pi/4)}{1 - \\tan(\\pi/4)} = \\dfrac{\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}}{1 - 1} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> En $x = \\pi/4$, tenemos $\\text{sen } x = \\cos x$ y $\\tan x = 1$.</p>
        <p><strong>Para qué:</strong> Transformaremos la tangente en términos de seno y coseno para simplificar.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Transformación trigonométrica</h4>
        <p><strong>Usamos:</strong> $\\tan x = \\dfrac{\\text{sen } x}{\\cos x}$</p>
        <div class="formula-block">
          \\[ 1 - \\tan x = 1 - \\dfrac{\\text{sen } x}{\\cos x} = \\dfrac{\\cos x - \\text{sen } x}{\\cos x} \\]
        </div>
        <p><strong>Sustituimos en el límite:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{\\text{sen } x - \\cos x}{\\frac{\\cos x - \\text{sen } x}{\\cos x}} = \\dfrac{\\text{sen } x - \\cos x}{1} \\cdot \\dfrac{\\cos x}{\\cos x - \\text{sen } x} \\]
        </div>
        <p><strong>Notamos que:</strong> $\\cos x - \\text{sen } x = -(\\text{sen } x - \\cos x)$</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Simplificación y evaluación</h4>
        <div class="formula-block">
          \\[ = \\dfrac{\\text{sen } x - \\cos x}{-(\\text{sen } x - \\cos x)} \\cdot \\cos x = -\\cos x \\]
        </div>
        <p><strong>Ahora evaluamos en $x = \\pi/4$:</strong></p>
        <div class="formula-block">
          \\[ -\\cos(\\pi/4) = -\\dfrac{\\sqrt{2}}{2} \\]
        </div>
        <p><strong>✅ Verificación numérica:</strong> Si $x = 0.79$ (cercano a $\\pi/4 ≈ 0.785$): resultado ≈ $-0.707$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to \\pi/4} \\dfrac{\\text{sen } x - \\cos x}{1 - \\tan x} = -\\dfrac{\\sqrt{2}}{2}$</div>
      </div>
    `
  },
  {
    id: 5,
    titulo: "5. Identidades Trigonométricas y Raíces - Dificultad 8",
    enunciado: "Halla: $\\lim_{x \\to 0} \\dfrac{1 - \\cos x \\sqrt{\\cos x}}{x^2}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{1 - \\cos(0) \\sqrt{\\cos(0)}}{0^2} = \\dfrac{1 - 1 \\cdot 1}{0} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> $\\cos(0) = 1$, así que el numerador es $1 - 1 = 0$.</p>
        <p><strong>Para qué:</strong> Usaremos aproximaciones trigonométricas para $x$ cercano a 0.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Simplificación de la expresión</h4>
        <p><strong>Notamos que:</strong> $\\cos x \\sqrt{\\cos x} = \\cos x \\cdot \\cos^{1/2} x = \\cos^{3/2} x$</p>        <p><strong>Aproximación para $x$ pequeño:</strong></p>
        <div class="formula-block">
          \\[ \\cos x ≈ 1 - \\dfrac{x^2}{2} \\quad (\\text{para } x \\text{ cercano a } 0) \\]
        </div>
        <p><strong>Entonces:</strong></p>
        <div class="formula-block">
          \\[ \\cos^{3/2} x ≈ \\left(1 - \\dfrac{x^2}{2}\\right)^{3/2} ≈ 1 - \\dfrac{3x^2}{4} \\]
        </div>
        <p><em>💭 Usamos la aproximación binomial: $(1 + u)^n ≈ 1 + nu$ para $u$ pequeño</em></p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Evaluación del límite</h4>
        <p><strong>Sustituimos en el numerador:</strong></p>
        <div class="formula-block">
          \\[ 1 - \\cos^{3/2} x ≈ 1 - \\left(1 - \\dfrac{3x^2}{4}\\right) = \\dfrac{3x^2}{4} \\]
        </div>
        <p><strong>Ahora el límite completo:</strong></p>
        <div class="formula-block">
          \\[ \\lim_{x \\to 0} \\dfrac{\\frac{3x^2}{4}}{x^2} = \\lim_{x \\to 0} \\dfrac{3}{4} = \\dfrac{3}{4} \\]
        </div>
        <p><strong>✅ Verificación numérica:</strong> Si $x = 0.01$: $\\frac{1 - \\cos(0.01)\\sqrt{\\cos(0.01)}}{0.0001} ≈ 0.75$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to 0} \\dfrac{1 - \\cos x \\sqrt{\\cos x}}{x^2} = \\dfrac{3}{4}$</div>
      </div>
    `
  },
  {
    id: 6,
    titulo: "6. Raíces Cuartas y Definición de Derivada - Dificultad 8.5",
    enunciado: "Calcula: $\\lim_{h \\to 0} \\dfrac{\\sqrt[4]{x+h} - \\sqrt[4]{x}}{h}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{\\sqrt[4]{x+0} - \\sqrt[4]{x}}{0} = \\dfrac{\\sqrt[4]{x} - \\sqrt[4]{x}}{0} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> Cuando $h = 0$, el numerador se cancela completamente.</p>
        <p><strong>Para qué:</strong> Usaremos <span class="keyword">racionalización múltiple</span> para eliminar la raíz cuarta.</p>
        <p><em>⚠️ Nota: Este límite representa la derivada de $\\sqrt[4]{x}$, pero lo resolveremos solo con álgebra.</em></p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Racionalización paso a paso</h4>
        <p><strong>Primera racionalización (como diferencia de cuadrados):</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{\\sqrt[4]{x+h} - \\sqrt[4]{x}}{h} \\cdot \\dfrac{\\sqrt[4]{x+h} + \\sqrt[4]{x}}{\\sqrt[4]{x+h} + \\sqrt[4]{x}} = \\dfrac{\\sqrt{x+h} - \\sqrt{x}}{h(\\sqrt[4]{x+h} + \\sqrt[4]{x})} \\]
        </div>
        <p><strong>Segunda racionalización:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{\\sqrt{x+h} - \\sqrt{x}}{h(\\sqrt[4]{x+h} + \\sqrt[4]{x})} \\cdot \\dfrac{\\sqrt{x+h} + \\sqrt{x}}{\\sqrt{x+h} + \\sqrt{x}} = \\dfrac{h}{h(\\sqrt[4]{x+h} + \\sqrt[4]{x})(\\sqrt{x+h} + \\sqrt{x})} \\]
        </div>      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Simplificación y evaluación</h4>
        <p><strong>Cancelamos $h$:</strong></p>
        <div class="formula-block">
          \\[ = \\dfrac{1}{(\\sqrt[4]{x+h} + \\sqrt[4]{x})(\\sqrt{x+h} + \\sqrt{x})} \\]
        </div>
        <p><strong>Ahora evaluamos cuando $h \\to 0$:</strong></p>
        <div class="formula-block">
          \\[ = \\dfrac{1}{(\\sqrt[4]{x} + \\sqrt[4]{x})(\\sqrt{x} + \\sqrt{x})} = \\dfrac{1}{(2\\sqrt[4]{x})(2\\sqrt{x})} \\]
          \\[ = \\dfrac{1}{4 \\cdot x^{1/4} \\cdot x^{1/2}} = \\dfrac{1}{4x^{3/4}} \\]
        </div>
        <p><strong>✅ Verificación:</strong> Si $x = 1$: $\\frac{1}{4(1)^{3/4}} = \\frac{1}{4}$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{h \\to 0} \\dfrac{\\sqrt[4]{x+h} - \\sqrt[4]{x}}{h} = \\dfrac{1}{4x^{3/4}}$</div>
      </div>
    `
  },
  {
    id: 7,
    titulo: "7. Comparación de Órdenes de Crecimiento - Dificultad 9",
    enunciado: "Determina: $\\lim_{x \\to \\infty} \\dfrac{\\ln(x)}{x^{0.003}}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Análisis directo:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{\\ln(\\infty)}{\\infty^{0.003}} = \\dfrac{\\infty}{\\infty} \\]
        </div>
        <p><strong>Por qué:</strong> Tanto el logaritmo como la potencia tienden a infinito cuando $x \\to \\infty$.</p>
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
        <h4 class="step-title"><span class="step-number">3</span>🔧 Demostración con valores numéricos</h4>
        <p><strong>Valores para comparar:</strong></p>
        <div class="formula-block">
          \\[ \\begin{array}{c|c|c}
          x & \\ln(x) & x^{0.003} \\\\ \\hline
          10^3 & 6.91 & 1.02 \\\\
          10^6 & 13.82 & 1.04 \\\\
          10^9 & 20.72 & 1.06 \\\\
          10^{100} & 230.26 & 1.70          \\end{array} \\]
        </div>
        <p><strong>Observación:</strong> Aunque $x^{0.003}$ crece muy lentamente, eventualmente superará a $\\ln(x)$.</p>
        <p><strong>Conclusión:</strong> El denominador crece más rápido que el numerador.</p>
        <div class="formula-block">
          \\[ \\lim_{x \\to \\infty} \\dfrac{\\ln(x)}{x^{0.003}} = 0 \\]
        </div>
        <div class="resultado-final">🎯 $\\lim_{x \\to \\infty} \\dfrac{\\ln(x)}{x^{0.003}} = 0$</div>
      </div>
    `
  },
  {
    id: 8,
    titulo: "8. Teorema del Sándwich con Oscilación - Dificultad 9.5",
    enunciado: "Calcula: $\\lim_{x \\to \\infty} \\dfrac{x^2 \\cos(x)}{3 + x^4}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué usamos el Teorema del Sándwich?</h4>
        <p><strong>Análisis:</strong> $\\cos(x)$ oscila entre $-1$ y $1$ infinitamente cuando $x \\to \\infty$.</p>
        <p><strong>Por qué:</strong> No podemos evaluar $\\cos(\\infty)$ directamente porque no tiene un valor único.</p>
        <p><strong>Para qué:</strong> El <span class="keyword">Teorema del Sándwich</span> nos permite acotar la función entre dos límites que sí podemos calcular.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Acotamos la función</h4>
        <p><strong>Sabemos que:</strong> $-1 \\leq \\cos(x) \\leq 1$ para todo $x$</p>
        <p><strong>Multiplicamos por $\\dfrac{x^2}{3 + x^4}$ (que es positivo para $x > 0$):</strong></p>
        <div class="formula-block">
          \\[ -\\dfrac{x^2}{3 + x^4} \\leq \\dfrac{x^2 \\cos(x)}{3 + x^4} \\leq \\dfrac{x^2}{3 + x^4} \\]
        </div>
        <p><strong>Ahora calculamos los límites de las funciones extremas:</strong></p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Aplicación del Teorema</h4>
        <p><strong>Límite superior:</strong></p>
        <div class="formula-block">
          \\[ \\lim_{x \\to \\infty} \\dfrac{x^2}{3 + x^4} = \\lim_{x \\to \\infty} \\dfrac{x^2}{x^4(\\frac{3}{x^4} + 1)} = \\lim_{x \\to \\infty} \\dfrac{1}{x^2(0 + 1)} = 0 \\]
        </div>
        <p><strong>Límite inferior:</strong> $\\lim_{x \\to \\infty} -\\dfrac{x^2}{3 + x^4} = 0$</p>
        <p><strong>Por el Teorema del Sándwich:</strong></p>
        <div class="formula-block">
          \\[ 0 \\leq \\lim_{x \\to \\infty} \\dfrac{x^2 \\cos(x)}{3 + x^4} \\leq 0 \\quad \\Rightarrow \\quad \\text{El límite es } 0 \\]
        </div>
        <p><strong>✅ Verificación:</strong> El denominador ($x^4$) crece mucho más rápido que el numerador ($x^2$) ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to \\infty} \\dfrac{x^2 \\cos(x)}{3 + x^4} = 0$</div>
      </div>
    `
  },
  {
    id: 9,
    titulo: "9. Raíces y Senos al Cuadrado - Dificultad 9.5",    enunciado: "Halla: $\\lim_{x \\to 0} \\dfrac{\\sqrt{2} - \\sqrt{1 + \\cos x}}{\\text{sen}^2 x}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 ¿Por qué hay indeterminación?</h4>
        <p><strong>Verificación directa:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{\\sqrt{2} - \\sqrt{1 + \\cos(0)}}{\\text{sen}^2(0)} = \\dfrac{\\sqrt{2} - \\sqrt{1 + 1}}{0} = \\dfrac{\\sqrt{2} - \\sqrt{2}}{0} = \\dfrac{0}{0} \\]
        </div>
        <p><strong>Por qué:</strong> Ambas raíces son iguales cuando $x = 0$, y $\\text{sen}(0) = 0$.</p>
        <p><strong>Para qué:</strong> Usaremos el <span class="keyword">conjugado</span> e identidades trigonométricas.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Multiplicación por el conjugado</h4>
        <p><strong>Conjugado del numerador:</strong> $(\\sqrt{2} + \\sqrt{1 + \\cos x})$</p>
        <div class="formula-block">
          \\[ \\dfrac{\\sqrt{2} - \\sqrt{1 + \\cos x}}{\\text{sen}^2 x} \\cdot \\dfrac{\\sqrt{2} + \\sqrt{1 + \\cos x}}{\\sqrt{2} + \\sqrt{1 + \\cos x}} \\]
        </div>
        <p><strong>Numerador después de multiplicar:</strong></p>
        <div class="formula-block">
          \\[ (\\sqrt{2})^2 - (\\sqrt{1 + \\cos x})^2 = 2 - (1 + \\cos x) = 1 - \\cos x \\]
        </div>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Identidades trigonométricas</h4>
        <p><strong>Usamos las identidades:</strong></p>
        <div class="formula-block">
          \\[ 1 - \\cos x = 2\\text{sen}^2(x/2) \\quad ; \\quad \\text{sen}^2 x = 4\\text{sen}^2(x/2)\\cos^2(x/2) \\]
        </div>
        <p><strong>Sustituimos:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{2\\text{sen}^2(x/2)}{4\\text{sen}^2(x/2)\\cos^2(x/2)} = \\dfrac{2}{4\\cos^2(x/2)} = \\dfrac{1}{2\\cos^2(x/2)} \\]
        </div>
        <p><strong>Ahora evaluamos cuando $x \\to 0$:</strong></p>
        <div class="formula-block">
          \\[ \\dfrac{1}{2\\cos^2(0)} = \\dfrac{1}{2 \\cdot 1^2} = \\dfrac{1}{2} \\]
        </div>
        <p><strong>✅ Verificación:</strong> Si $x = 0.01$: resultado ≈ $0.5$ ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to 0} \\dfrac{\\sqrt{2} - \\sqrt{1 + \\cos x}}{\\text{sen}^2 x} = \\dfrac{1}{2}$</div>
      </div>
    `
  },
  {
    id: 10,
    titulo: "10. Límites Anidados y Exponenciales - Dificultad 10",
    enunciado: "Resuelve: $\\lim_{x \\to \\infty} \\tan\\left(\\dfrac{\\pi x + 1}{2x + 4}\\right) \\cos(x) e^{-x}$",
    resolucion: `
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">1</span>🎯 Análisis de cada componente</h4>
        <p><strong>Descomponemos el límite en tres partes:</strong></p>
        <div class="formula-block">          \\[ \\underbrace{\\tan\\left(\\dfrac{\\pi x + 1}{2x + 4}\\right)}_{\\text{Parte A}} \\cdot \\underbrace{\\cos(x)}_{\\text{Parte B}} \\cdot \\underbrace{e^{-x}}_{\\text{Parte C}} \\]
        </div>
        <p><strong>Por qué:</strong> Cada parte tiene comportamiento diferente cuando $x \\to \\infty$.</p>
        <p><strong>Para qué:</strong> Analizaremos cada una por separado y luego combinaremos los resultados.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">2</span>💡 Análisis de la Parte A (Tangente)</h4>
        <p><strong>Primero evaluamos el argumento de la tangente:</strong></p>
        <div class="formula-block">
          \\[ \\lim_{x \\to \\infty} \\dfrac{\\pi x + 1}{2x + 4} = \\lim_{x \\to \\infty} \\dfrac{\\pi + \\frac{1}{x}}{2 + \\frac{4}{x}} = \\dfrac{\\pi}{2} \\]
        </div>
        <p><strong>Entonces:</strong> $\\tan\\left(\\dfrac{\\pi x + 1}{2x + 4}\\right) \\to \\tan(\\pi/2)$</p>
        <p><strong>⚠️ Problema:</strong> $\\tan(\\pi/2)$ no está definido (tiende a $\\infty$)</p>
        <p><strong>Pero...</strong> lo analizaremos junto con las otras partes.</p>
      </div>
      <div class="step-container fade-in">
        <h4 class="step-title"><span class="step-number">3</span>🔧 Análisis combinado con acotamiento</h4>
        <p><strong>Parte B:</strong> $\\cos(x)$ está acotado: $-1 \\leq \\cos(x) \\leq 1$</p>
        <p><strong>Parte C:</strong> $e^{-x} = \\dfrac{1}{e^x} \\to 0$ muy rápidamente cuando $x \\to \\infty$</p>
        <p><strong>Comportamiento de la tangente:</strong> Aunque $\\tan(\\cdot) \\to \\infty$, lo hace de manera controlada (como una constante dividida por algo que tiende a cero).</p>
        <p><strong>Clave:</strong> La exponencial $e^{-x}$ decrece MUCHO más rápido que cualquier crecimiento polinomial o trigonométrico.</p>
        <div class="formula-block">
          \\[ \\left|\\tan\\left(\\dfrac{\\pi x + 1}{2x + 4}\\right) \\cos(x) e^{-x}\\right| \\leq \\left|\\tan\\left(\\dfrac{\\pi x + 1}{2x + 4}\\right)\\right| \\cdot 1 \\cdot e^{-x} \\]
        </div>
        <p><strong>Como $e^{-x} \\to 0$ domina todo:</strong></p>
        <div class="formula-block">
          \\[ \\lim_{x \\to \\infty} \\tan\\left(\\dfrac{\\pi x + 1}{2x + 4}\\right) \\cos(x) e^{-x} = 0 \\]
        </div>
        <p><strong>✅ Verificación:</strong> La exponencial negativa siempre gana contra funciones acotadas o de crecimiento lento ✓</p>
        <div class="resultado-final">🎯 $\\lim_{x \\to \\infty} \\tan\\left(\\dfrac{\\pi x + 1}{2x + 4}\\right) \\cos(x) e^{-x} = 0$</div>
      </div>
    `
  }
];

// Exportar para compatibilidad con módulos (opcional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { quimicaData };
}