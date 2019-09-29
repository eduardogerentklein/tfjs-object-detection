const img = document.getElementById('img');

// Load the model.
const model = await cocoSsd.load();

// Classify the image.
const predictions = await model.detect(img);

console.log('Predictions: ');
console.log(predictions);