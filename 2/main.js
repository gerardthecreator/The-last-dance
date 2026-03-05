/**
 * main.js - Controlador principal para Química Pro
 * Versión corregida: MathJax callback seguro + compatibilidad móvil
 * Compatible con: index.html + style.css neumórfico + info.js
 */

(function() {
    'use strict';

    // ========================================
    // CONFIGURACIÓN
    // ========================================
    const CONFIG = {
        selectors: {
            menuList: '#menu-list',
            exerciseDisplay: '#exercise-display',
            welcomeMessage: '#welcome-message'
        },
        classes: {
            active: 'active',
            loading: 'loading',
            fadeIn: 'fade-in'
        }
    };

    // Estado de la aplicación
    const AppState = {
        currentExerciseId: null,
        isMathJaxReady: false,
        initializationComplete: false
    };

    // ========================================
    // INICIALIZACIÓN
    // ========================================
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        console.log('🚀 Química Pro: Inicializando...');
        
        if (!validateDependencies()) return;
        
        setupMathJaxCallback();
        renderMenu();
        setupEventListeners();
        
        AppState.initializationComplete = true;
        console.log('✅ Química Pro: Listo para usar');
    }
    function validateDependencies() {
        if (typeof quimicaData === 'undefined' || !Array.isArray(quimicaData)) {
            showError('❌ Error: "info.js" no se cargó correctamente.');
            return false;
        }
        if (quimicaData.length === 0) {
            console.warn('⚠️ No hay ejercicios en quimicaData');
            return false;
        }
        console.log(`✅ ${quimicaData.length} ejercicios cargados`);
        return true;
    }

    // ========================================
    // MATHJAX: CALLBACK SEGURO (CORREGIDO)
    // ========================================
    function setupMathJaxCallback() {
        // Esperar un tick para que MathJax termine de cargar
        setTimeout(() => {
            if (window.MathJax) {
                // Método 1: Usar startup.promise si está disponible
                if (MathJax.startup && MathJax.startup.promise && typeof MathJax.startup.promise.then === 'function') {
                    MathJax.startup.promise
                        .then(() => onMathJaxReady())
                        .catch((err) => {
                            console.warn('⚠️ MathJax startup.promise error:', err);
                            onMathJaxReady(); // Fallback: asumir listo
                        });
                }
                // Método 2: Fallback con typesetPromise directo
                else if (typeof MathJax.typesetPromise === 'function') {
                    console.log('🔄 Usando fallback: MathJax.typesetPromise');
                    onMathJaxReady();
                }
                // Método 3: Sin MathJax avanzado, marcar como listo igual
                else {
                    console.warn('⚠️ MathJax limitado, usando render básico');
                    onMathJaxReady();
                }
            } else {
                console.warn('⚠️ MathJax no detectado, continuando sin fórmulas');
                onMathJaxReady();
            }
        }, 100);
    }

    function onMathJaxReady() {
        AppState.isMathJaxReady = true;
        console.log('✅ MathJax listo');
                // Si ya hay contenido cargado, renderizar fórmulas
        if (AppState.currentExerciseId) {
            typesetMath();
        }
    }

    // ========================================
    // RENDERIZADO DEL MENÚ
    // ========================================
    function renderMenu() {
        const menuList = document.querySelector(CONFIG.selectors.menuList);
        if (!menuList) {
            console.error('❌ No se encontró #menu-list');
            return;
        }

        const fragment = document.createDocumentFragment();
        
        quimicaData.forEach((ejercicio) => {
            const li = document.createElement('li');
            li.className = 'menu-item';
            li.setAttribute('role', 'option');
            li.setAttribute('data-id', ejercicio.id);
            li.setAttribute('tabindex', '0');
            li.innerHTML = `<span class="menu-icon">🧪</span> ${ejercicio.titulo}`;
            
            li.addEventListener('click', () => loadExercise(ejercicio.id));
            li.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    loadExercise(ejercicio.id);
                }
            });
            
            fragment.appendChild(li);
        });
        
        menuList.appendChild(fragment);
        console.log('✅ Menú renderizado');
    }

    // ========================================
    // CARGA DE EJERCICIOS
    // ========================================
    function loadExercise(id) {
        const ejercicio = quimicaData.find(e => e.id === id);
        if (!ejercicio) {
            console.error(`❌ Ejercicio ${id} no encontrado`);
            return;
        }
        AppState.currentExerciseId = id;
        updateActiveMenuItem(id);
        
        const display = document.querySelector(CONFIG.selectors.exerciseDisplay);
        if (!display) return;
        
        display.classList.add(CONFIG.classes.loading);
        display.setAttribute('aria-busy', 'true');
        
        const html = buildExerciseHTML(ejercicio);
        display.innerHTML = html;
        
        display.classList.remove(CONFIG.classes.loading);
        display.setAttribute('aria-busy', 'false');
        
        // Animación de pasos
        const steps = display.querySelectorAll('.step-container');
        steps.forEach((step, i) => {
            step.style.animationDelay = `${i * 100}ms`;
            step.classList.add(CONFIG.classes.fadeIn);
        });
        
        // Renderizar MathJax
        typesetMath();
        
        // Scroll en móvil
        if (window.innerWidth < 768) {
            display.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        console.log(`✅ Ejercicio ${id} cargado`);
    }

    function updateActiveMenuItem(id) {
        const items = document.querySelectorAll('.menu-item');
        items.forEach(item => {
            item.classList.remove(CONFIG.classes.active);
            if (parseInt(item.dataset.id) === id) {
                item.classList.add(CONFIG.classes.active);
                if (window.innerWidth < 768) {
                    item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }
            }
        });
    }

    function buildExerciseHTML(ejercicio) {
        return `
            <header class="exercise-header">                <h2>${ejercicio.titulo}</h2>
            </header>
            <section class="enunciado no-overflow">
                <strong>📝 Enunciado:</strong><br>
                ${ejercicio.enunciado}
            </section>
            <section class="solucion-section">
                <h3>💡 Resolución Paso a Paso</h3>
                ${ejercicio.resolucion}
            </section>
            <footer class="exercise-footer">
                <small>✨ Fórmulas con MathJax 3</small>
            </footer>
        `;
    }

    // ========================================
    // MATHJAX: RENDERIZADO SEGURO
    // ========================================
    function typesetMath() {
        if (!AppState.isMathJaxReady) {
            setTimeout(typesetMath, 300);
            return;
        }
        
        const display = document.querySelector(CONFIG.selectors.exerciseDisplay);
        if (!display) return;
        
        // Verificar que MathJax esté disponible y tenga el método
        if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
            MathJax.typesetPromise([display])
                .then(() => {
                    console.log('✅ Fórmulas renderizadas');
                    adjustFormulaContainers();
                })
                .catch((err) => {
                    console.warn('⚠️ MathJax render warning:', err);
                    showMathFallback(display);
                });
        } else {
            // Fallback: mostrar código como texto
            showMathFallback(display);
        }
    }

    function adjustFormulaContainers() {
        const formulaBlocks = document.querySelectorAll('.formula-block');
        formulaBlocks.forEach(block => {
            const mjxContainer = block.querySelector('.mjx-container');
            if (mjxContainer) {                mjxContainer.style.maxWidth = '100%';
                mjxContainer.style.overflowX = 'auto';
            }
        });
    }

    function showMathFallback(container) {
        const formulas = container.querySelectorAll('.formula-block');
        formulas.forEach(block => {
            if (!block.querySelector('pre') && block.textContent.trim()) {
                const pre = document.createElement('pre');
                pre.textContent = block.textContent.trim();
                pre.style.fontSize = '0.85em';
                pre.style.whiteSpace = 'pre-wrap';
                block.appendChild(pre);
            }
        });
    }

    // ========================================
    // EVENTOS
    // ========================================
    function setupEventListeners() {
        // Navegación con teclado
        document.addEventListener('keydown', (e) => {
            if (!AppState.currentExerciseId) return;
            const currentIndex = quimicaData.findIndex(ej => ej.id === AppState.currentExerciseId);
            
            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                e.preventDefault();
                loadExercise(quimicaData[currentIndex - 1].id);
            } else if (e.key === 'ArrowRight' && currentIndex < quimicaData.length - 1) {
                e.preventDefault();
                loadExercise(quimicaData[currentIndex + 1].id);
            }
        });
        
        // Resize: re-renderizar fórmulas
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (AppState.currentExerciseId && AppState.isMathJaxReady) {
                    typesetMath();
                }
            }, 250);
        });
    }

    // ========================================    // UTILIDADES
    // ========================================
    function showError(message) {
        const display = document.querySelector(CONFIG.selectors.exerciseDisplay);
        if (display) {
            display.innerHTML = `
                <div class="error-container">
                    <div class="error-icon">⚠️</div>
                    <h3>Error</h3>
                    <p>${message}</p>
                    <button class="btn btn-retry" onclick="location.reload()">🔄 Recargar</button>
                </div>
            `;
        }
        console.error(message);
    }

    // ========================================
    // API PÚBLICA
    // ========================================
    window.QuimicaPro = {
        getExercise: (id) => quimicaData.find(e => e.id === id),
        load: (id) => loadExercise(id),
        refreshMath: () => typesetMath(),
        getState: () => ({ ...AppState }),
        getList: () => quimicaData.map(e => ({ id: e.id, titulo: e.titulo }))
    };

    console.log('🔧 API disponible: window.QuimicaPro');

})();