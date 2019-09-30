//import * as cocoSsd from '@tensorflow-models/coco-ssd';

const Api = async () => {
    const img = document.getElementById('img');

    // Load the model.
    const model = await cocoSsd.load();

    // Classify the image.
    const predictions = await model.detect(img);

    console.log('Predictions: ');
    console.log(predictions);
    return { predictions }
}

export default Api;