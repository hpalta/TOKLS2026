const fs = require('fs');
const path = require('path');

const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf-8');
const styles = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf-8');
const appJs = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf-8');

// Read all questions from the questions directory
const questionsDir = path.join(__dirname, 'questions');
let allQuestions = [];
if (fs.existsSync(questionsDir)) {
    const files = fs.readdirSync(questionsDir);
    for (const file of files) {
        if (file.endsWith('.js')) {
            const content = fs.readFileSync(path.join(questionsDir, file), 'utf-8');
            // Hacky but works for static building: extract the array
            // We assume the file exports the array like: module.exports = [ ... ];
            const qArray = eval(content.replace('module.exports =', ''));
            allQuestions = allQuestions.concat(qArray);
        }
    }
}

let indexHtml = template;
indexHtml = indexHtml.replace('/* CSS_INJECT */', styles);

let finalAppJs = `const QUESTIONS_ALL = ${JSON.stringify(allQuestions, null, 2)};\n\n` + appJs;
indexHtml = indexHtml.replace('/* JS_INJECT */', finalAppJs);

fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtml);
console.log('Build complete: index.html generated.');
