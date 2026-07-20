// --- TRANSLATIONS ---
const STR = {
    es: {
        back: "← Cambiar de materia",
        see_solution: "Ver solución",
        next: "Siguiente pregunta →",
        correct: "¡CORRECTO!",
        incorrect: "CASI...",
        type_true_false: "Verdadero o Falso",
        type_multiple: "Selección Múltiple",
        type_match: "Unir Conceptos",
        type_label: "Etiquetar Imagen",
        type_open: "Pregunta Abierta",
        type_order_words: "Ordenar Oración",
        badge_case: "Caso de Investigación",
        diploma_title: "¡Misión Cumplida!",
        diploma_text: "Has completado todas las preguntas de esta materia.",
        name_label: "Nombre del explorador/a:",
        name_placeholder: "Escribe tu nombre aquí",
        subjects: {
            science: "Ciencias Naturales",
            english: "Inglés"
        },
        desc: {
            science: "Huesos, músculos y nuestro cuerpo",
            english: "My Day & Fantastic Food"
        }
    },
    en: {
        back: "← Change subject",
        see_solution: "See solution",
        next: "Next question →",
        correct: "CORRECT!",
        incorrect: "ALMOST...",
        type_true_false: "True or False",
        type_multiple: "Multiple Choice",
        type_match: "Match the Concepts",
        type_label: "Label the Picture",
        type_open: "Open Question",
        type_order_words: "Order the Sentence",
        badge_case: "Investigation Case",
        diploma_title: "Mission Accomplished!",
        diploma_text: "You have completed all the questions for this subject.",
        name_label: "Explorer's name:",
        name_placeholder: "Type your name here",
        subjects: {
            science: "Science",
            english: "English"
        },
        desc: {
            science: "Bones, muscles and our body",
            english: "My Day & Fantastic Food"
        }
    }
};

// --- STATE ---
let currentSubject = null;
let currentLang = 'es';
let activeQuestions = [];
let currentIndex = 0;
let answeredCount = 0;
let currentQuestionState = null; // Store state for current question interactions

function t(key, isSubject = false, isDesc = false) {
    const langObj = STR[currentLang];
    if (isSubject) return langObj.subjects[key];
    if (isDesc) return langObj.desc[key];
    return langObj[key] || key;
}

// --- UTILS ---
function shuffleArray(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

// --- NAVIGATION ---
const views = {
    selector: document.getElementById('view-selector'),
    notebook: document.getElementById('view-notebook'),
    diploma: document.getElementById('view-diploma')
};

function showView(viewName) {
    Object.values(views).forEach(v => v.classList.remove('active', 'hidden'));
    Object.values(views).forEach(v => {
        if(v !== views[viewName]) v.classList.add('hidden');
    });
    views[viewName].classList.add('active');
}

// --- INITIALIZATION ---
function init() {
    renderSubjects();
    document.getElementById('btn-back').addEventListener('click', () => showView('selector'));
    document.getElementById('btn-back-diploma').addEventListener('click', () => showView('selector'));
    document.getElementById('btn-solution').addEventListener('click', showSolution);
    document.getElementById('btn-next').addEventListener('click', nextQuestion);
    
    // Confetti logic respects prefers-reduced-motion
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.confettiEnabled = false;
    } else {
        window.confettiEnabled = true;
    }
}

function renderSubjects() {
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';
    
    // Determine available subjects from data
    const subjectsCount = {};
    QUESTIONS_ALL.forEach(q => {
        subjectsCount[q.subject] = (subjectsCount[q.subject] || 0) + 1;
    });

    for (const [sub, count] of Object.entries(subjectsCount)) {
        const card = document.createElement('div');
        card.className = `subject-card ${sub}`;
        // Using Spanish for selector as requested
        card.innerHTML = `
            <h2>${STR.es.subjects[sub]}</h2>
            <p>${STR.es.desc[sub]}</p>
            <span class="q-count">${count} preguntas</span>
        `;
        card.addEventListener('click', () => loadSubject(sub));
        container.appendChild(card);
    }
}

function loadSubject(subject) {
    currentSubject = subject;
    // English subject means English UI, otherwise Spanish
    currentLang = (subject === 'english') ? 'en' : 'es';
    
    document.getElementById('btn-back').textContent = t('back');
    document.getElementById('btn-solution').textContent = t('see_solution');
    document.getElementById('btn-next').textContent = t('next');
    document.getElementById('diploma-title').textContent = t('diploma_title');
    document.getElementById('diploma-text').textContent = t('diploma_text');
    document.getElementById('diploma-name-label').textContent = t('name_label');
    document.getElementById('student-name').placeholder = t('name_placeholder');
    document.getElementById('diploma-subject').textContent = t(subject, true);
    
    // Filter and shuffle, take only 20 questions
    const subjectQuestions = QUESTIONS_ALL.filter(q => q.subject === subject);
    activeQuestions = shuffleArray(subjectQuestions).slice(0, 20);
    currentIndex = 0;
    answeredCount = 0;
    
    updateProgress();
    showView('notebook');
    renderCurrentQuestion();
}

function updateProgress() {
    const total = activeQuestions.length;
    document.getElementById('progress-text').textContent = `${answeredCount}/${total}`;
    const percent = total > 0 ? (answeredCount / total) * 100 : 0;
    document.getElementById('progress-bar-fill').style.width = `${percent}%`;
}

// --- RENDERING QUESTIONS ---
function renderCurrentQuestion() {
    const container = document.getElementById('question-container');
    const footer = document.getElementById('question-footer');
    const btnSolution = document.getElementById('btn-solution');
    const btnNext = document.getElementById('btn-next');
    const solutionArea = document.getElementById('solution-area');
    
    container.innerHTML = '';
    solutionArea.className = 'solution-area hidden';
    btnSolution.classList.add('hidden');
    btnNext.classList.add('hidden');
    
    if (currentIndex >= activeQuestions.length) {
        showDiploma();
        return;
    }
    
    const q = activeQuestions[currentIndex];
    currentQuestionState = { interacted: false, isCorrect: false, type: q.type };
    
    // Badges
    const badges = document.createElement('div');
    badges.className = 'question-badges';
    
    const typeKey = `type_${q.type.replace('_', '')}`; // handle true_false -> type_truefalse if needed, but wait, type keys:
    const tMap = {
        'true_false': 'type_true_false',
        'multiple': 'type_multiple',
        'match': 'type_match',
        'label': 'type_label',
        'open': 'type_open',
        'order_words': 'type_order_words'
    };
    badges.innerHTML += `<span class="badge badge-type">${t(tMap[q.type])}</span>`;
    badges.innerHTML += `<span class="badge badge-station">${q.station}</span>`;
    
    if (q.context) {
        badges.innerHTML += `<span class="badge badge-case">${t('badge_case')}</span>`;
    }
    container.appendChild(badges);
    
    if (q.context) {
        const ctx = document.createElement('div');
        ctx.className = 'question-context';
        ctx.textContent = q.context;
        container.appendChild(ctx);
    }
    
    const prompt = document.createElement('div');
    prompt.className = 'question-prompt';
    prompt.textContent = q.prompt;
    container.appendChild(prompt);
    
    // Delegate rendering
    const qBody = document.createElement('div');
    if (q.type === 'true_false' || q.type === 'multiple') {
        renderMultiple(q, qBody);
    } else if (q.type === 'match') {
        renderMatch(q, qBody);
    } else if (q.type === 'label') {
        renderLabel(q, qBody);
    } else if (q.type === 'open') {
        renderOpen(q, qBody);
    } else if (q.type === 'order_words') {
        renderOrderWords(q, qBody);
    }
    container.appendChild(qBody);
}

function enableSolution() {
    if (!currentQuestionState.interacted) {
        currentQuestionState.interacted = true;
        document.getElementById('btn-solution').classList.remove('hidden');
    }
}

function renderMultiple(q, container) {
    const list = document.createElement('div');
    list.className = 'options-list';
    
    const opts = shuffleArray(q.options);
    currentQuestionState.buttons = [];
    
    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => {
            // Lock interaction
            currentQuestionState.buttons.forEach(b => b.disabled = true);
            btn.classList.add('selected');
            currentQuestionState.isCorrect = (opt === q.correctAnswer);
            enableSolution();
        };
        list.appendChild(btn);
        currentQuestionState.buttons.push(btn);
    });
    container.appendChild(list);
}

function renderMatch(q, container) {
    const wrap = document.createElement('div');
    wrap.className = 'match-container';
    
    const colA = document.createElement('div');
    colA.className = 'match-column';
    const colB = document.createElement('div');
    colB.className = 'match-column';
    
    let leftItems = shuffleArray(q.pairs.map(p => ({ text: p.left, pairId: p.id, side: 'left' })));
    let rightItems = shuffleArray(q.pairs.map(p => ({ text: p.right, pairId: p.id, side: 'right' })));
    
    currentQuestionState.selectedItem = null;
    currentQuestionState.matches = 0;
    currentQuestionState.totalMatches = q.pairs.length;
    currentQuestionState.elements = [];
    
    const handleSelect = (el, item) => {
        if (el.classList.contains('matched')) return;
        
        if (!currentQuestionState.selectedItem) {
            currentQuestionState.selectedItem = { el, item };
            el.classList.add('selected');
        } else {
            const prev = currentQuestionState.selectedItem;
            // Prevent same side click
            if (prev.item.side === item.side) {
                prev.el.classList.remove('selected');
                currentQuestionState.selectedItem = { el, item };
                el.classList.add('selected');
                return;
            }
            
            // Check match
            if (prev.item.pairId === item.pairId) {
                el.classList.add('matched');
                prev.el.classList.add('matched');
                prev.el.classList.remove('selected');
                currentQuestionState.matches++;
            } else {
                el.classList.add('error');
                prev.el.classList.add('error');
                prev.el.classList.remove('selected');
                setTimeout(() => {
                    el.classList.remove('error');
                    prev.el.classList.remove('error');
                }, 400);
            }
            currentQuestionState.selectedItem = null;
            
            if (currentQuestionState.matches === currentQuestionState.totalMatches) {
                currentQuestionState.isCorrect = true; // For match, full completion is correct
                enableSolution();
            }
        }
    };
    
    leftItems.forEach(item => {
        const el = document.createElement('div');
        el.className = 'match-item';
        el.textContent = item.text;
        el.onclick = () => handleSelect(el, item);
        colA.appendChild(el);
    });
    rightItems.forEach(item => {
        const el = document.createElement('div');
        el.className = 'match-item';
        el.textContent = item.text;
        el.onclick = () => handleSelect(el, item);
        colB.appendChild(el);
    });
    
    wrap.appendChild(colA);
    wrap.appendChild(colB);
    container.appendChild(wrap);
    
    // For match, we might want to let them see solution even if they give up
    currentQuestionState.giveUpBtn = document.createElement('button');
    currentQuestionState.giveUpBtn.className = 'btn-secondary';
    currentQuestionState.giveUpBtn.style.marginTop = '15px';
    currentQuestionState.giveUpBtn.textContent = "¿Te rendiste? Ver respuesta";
    currentQuestionState.giveUpBtn.onclick = () => {
        currentQuestionState.isCorrect = false;
        enableSolution();
    };
    container.appendChild(currentQuestionState.giveUpBtn);
}

function renderLabel(q, container) {
    const wrap = document.createElement('div');
    wrap.className = 'label-picture-container';
    
    const wordBank = document.createElement('div');
    wordBank.className = 'label-word-bank';
    
    const svgWrap = document.createElement('div');
    svgWrap.className = 'label-picture-svg-wrapper';
    
    // Create aspect ratio wrapper if provided, but let's rely on standard viewBox
    svgWrap.innerHTML = q.svg;
    
    currentQuestionState.selectedWord = null;
    currentQuestionState.dropzones = [];
    currentQuestionState.placedCount = 0;
    currentQuestionState.totalWords = q.labels.length;
    
    const words = shuffleArray(q.labels.map(l => l.word));
    
    const handleWordSelect = (el, word) => {
        if(el.classList.contains('used')) return;
        if(currentQuestionState.selectedWord) {
            currentQuestionState.selectedWord.el.classList.remove('selected');
        }
        currentQuestionState.selectedWord = { el, word };
        el.classList.add('selected');
    };
    
    words.forEach(w => {
        const chip = document.createElement('div');
        chip.className = 'word-chip';
        chip.textContent = w;
        chip.onclick = () => handleWordSelect(chip, w);
        wordBank.appendChild(chip);
    });
    
    q.labels.forEach(lbl => {
        const dz = document.createElement('div');
        dz.className = 'dropzone';
        dz.style.left = `${lbl.x}%`;
        dz.style.top = `${lbl.y}%`;
        dz.dataset.word = lbl.word;
        
        dz.onclick = () => {
            if(dz.classList.contains('filled')) return; // already correct
            if(!currentQuestionState.selectedWord) return;
            
            const selected = currentQuestionState.selectedWord;
            if (selected.word === lbl.word) {
                dz.textContent = selected.word;
                dz.classList.add('filled', 'correct');
                selected.el.classList.remove('selected');
                selected.el.classList.add('used');
                currentQuestionState.selectedWord = null;
                currentQuestionState.placedCount++;
                
                if(currentQuestionState.placedCount === currentQuestionState.totalWords) {
                    currentQuestionState.isCorrect = true;
                    enableSolution();
                }
            } else {
                dz.classList.add('incorrect');
                setTimeout(() => dz.classList.remove('incorrect'), 400);
            }
        };
        currentQuestionState.dropzones.push(dz);
        svgWrap.appendChild(dz);
    });
    
    wrap.appendChild(wordBank);
    wrap.appendChild(svgWrap);
    container.appendChild(wrap);
    
    currentQuestionState.giveUpBtn = document.createElement('button');
    currentQuestionState.giveUpBtn.className = 'btn-secondary';
    currentQuestionState.giveUpBtn.style.marginTop = '15px';
    currentQuestionState.giveUpBtn.textContent = "¿Te rendiste? Ver respuesta";
    currentQuestionState.giveUpBtn.onclick = () => {
        currentQuestionState.isCorrect = false;
        enableSolution();
    };
    container.appendChild(currentQuestionState.giveUpBtn);
}

function renderOpen(q, container) {
    const ta = document.createElement('textarea');
    ta.className = 'open-textarea';
    ta.placeholder = "...";
    
    ta.addEventListener('input', () => {
        if (ta.value.trim().length >= 10) {
            enableSolution();
        }
    });
    
    container.appendChild(ta);
}

function renderOrderWords(q, container) {
    const wrap = document.createElement('div');
    wrap.className = 'order-words-container';

    // Top: empty slots
    const slotsWrap = document.createElement('div');
    slotsWrap.className = 'order-slots-wrap';
    
    // Bottom: word bank
    const bankWrap = document.createElement('div');
    bankWrap.className = 'order-bank-wrap';
    
    const words = q.words; // Array of correct words in order
    const shuffledWords = shuffleArray(words);
    
    currentQuestionState.slots = [];
    currentQuestionState.bankChips = [];
    currentQuestionState.currentOrder = []; // what user has filled
    
    // Build slots
    words.forEach((_, idx) => {
        const slot = document.createElement('div');
        slot.className = 'order-slot';
        slot.dataset.index = idx;
        
        // Allow removing word from slot by clicking it
        slot.onclick = () => {
            if (slot.textContent) {
                const wordObj = currentQuestionState.currentOrder[idx];
                if (wordObj) {
                    // Return to bank
                    wordObj.chip.classList.remove('used');
                    slot.textContent = '';
                    slot.classList.remove('filled');
                    currentQuestionState.currentOrder[idx] = null;
                }
            }
        };
        currentQuestionState.slots.push(slot);
        slotsWrap.appendChild(slot);
        currentQuestionState.currentOrder.push(null);
    });

    const checkComplete = () => {
        const allFilled = currentQuestionState.currentOrder.every(x => x !== null);
        if (allFilled) {
            // Check correctness
            let correct = true;
            for(let i=0; i<words.length; i++){
                if(currentQuestionState.currentOrder[i].word !== words[i]) correct = false;
            }
            currentQuestionState.isCorrect = correct;
            enableSolution();
        }
    };

    // Build Bank
    shuffledWords.forEach((word) => {
        const chip = document.createElement('div');
        chip.className = 'word-chip bank-chip';
        chip.textContent = word;
        
        chip.onclick = () => {
            if (chip.classList.contains('used')) return; // already in a slot
            
            // Find first empty slot
            const emptyIdx = currentQuestionState.currentOrder.findIndex(x => x === null);
            if (emptyIdx !== -1) {
                currentQuestionState.currentOrder[emptyIdx] = { word, chip };
                currentQuestionState.slots[emptyIdx].textContent = word;
                currentQuestionState.slots[emptyIdx].classList.add('filled');
                chip.classList.add('used');
                
                checkComplete();
            }
        };
        currentQuestionState.bankChips.push(chip);
        bankWrap.appendChild(chip);
    });
    
    wrap.appendChild(slotsWrap);
    wrap.appendChild(bankWrap);
    container.appendChild(wrap);
    
    // Give up button
    currentQuestionState.giveUpBtn = document.createElement('button');
    currentQuestionState.giveUpBtn.className = 'btn-secondary';
    currentQuestionState.giveUpBtn.style.marginTop = '15px';
    currentQuestionState.giveUpBtn.textContent = "¿Te rendiste? Ver respuesta";
    currentQuestionState.giveUpBtn.onclick = () => {
        currentQuestionState.isCorrect = false;
        enableSolution();
    };
    container.appendChild(currentQuestionState.giveUpBtn);
}

// --- SOLUTION & NEXT ---
function showSolution() {
    document.getElementById('btn-solution').classList.add('hidden');
    const btnNext = document.getElementById('btn-next');
    btnNext.classList.remove('hidden');
    
    const q = activeQuestions[currentIndex];
    const area = document.getElementById('solution-area');
    area.innerHTML = '';
    area.className = 'solution-area'; // reset
    
    if (q.type === 'true_false' || q.type === 'multiple') {
        currentQuestionState.buttons.forEach(b => {
            if (b.textContent === q.correctAnswer) b.classList.add('correct-reveal');
            else if (b.classList.contains('selected')) b.classList.add('incorrect-reveal');
        });
    } else if (q.type === 'match' || q.type === 'label' || q.type === 'order_words') {
        if(currentQuestionState.giveUpBtn) currentQuestionState.giveUpBtn.classList.add('hidden');
        // Simple reveal text
    }
    
    if (q.type === 'open') {
        area.classList.add('neutral');
        area.innerHTML = `
            <div class="solution-status status-neutral">Posible Respuesta / Possible Answer</div>
            <p>${q.explain}</p>
        `;
    } else {
        const isCorrect = currentQuestionState.isCorrect;
        const statusClass = isCorrect ? 'status-correct' : 'status-incorrect';
        const statusText = isCorrect ? t('correct') : t('incorrect');
        const bgClass = isCorrect ? 'correct' : 'incorrect';
        
        area.classList.add(bgClass);
        let html = `<div class="solution-status ${statusClass}">${statusText}</div>`;
        
        if (q.correctAnswer && (q.type === 'true_false' || q.type === 'multiple')) {
            html += `<p><strong>${q.correctAnswer}</strong></p>`;
        }
        if (q.explain) {
            html += `<p style="margin-top: 10px;">${q.explain}</p>`;
        }
        area.innerHTML = html;
    }
    
    // Auto scroll down to next button
    setTimeout(() => {
        btnNext.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 100);
}

function nextQuestion() {
    answeredCount++;
    currentIndex++;
    updateProgress();
    renderCurrentQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- DIPLOMA ---
function showDiploma() {
    showView('diploma');
    if (window.confettiEnabled) {
        shootConfetti();
    }
}

// Minimal Confetti
function shootConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const colors = ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6'];
    
    for(let i = 0; i < 150; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2 + (Math.random() * 200),
            r: Math.random() * 6 + 4,
            dx: Math.random() * 20 - 10,
            dy: Math.random() * -20 - 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.floor(Math.random() * 10) - 10,
            tiltAngleInc: (Math.random() * 0.07) + 0.05,
            tiltAngle: 0
        });
    }
    
    let animationId;
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;
        for(let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.tiltAngle += p.tiltAngleInc;
            p.y += (Math.cos(p.tiltAngle) + 1 + p.r / 2) / 2;
            p.x += Math.sin(p.tiltAngle) * 2 + p.dx;
            p.dy += 0.2; // gravity
            p.y += p.dy;
            
            if (p.y <= canvas.height) active = true;
            
            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
            ctx.stroke();
        }
        if (active) {
            animationId = requestAnimationFrame(render);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    render();
    
    // Stop after 4 seconds
    setTimeout(() => {
        cancelAnimationFrame(animationId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 4000);
}

// Bootstrap
window.onload = init;
