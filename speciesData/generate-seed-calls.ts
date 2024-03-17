import * as fs from 'fs';
import * as csvParser from 'csv-parser';

// Define the input CSV file and output JavaScript file
const inputFile: string = 'speciesData/species_data.csv';
const outputFile: string = 'speciesData/seed-calls.js';

// Create a write stream for the output JavaScript file
const outputStream: fs.WriteStream = fs.createWriteStream(outputFile);
// Function to generate JavaScript function calls based on CSV data
function generateJavaScriptFunction(name: string, category: string, uvcLevel: string, imageCount: number, details: string): string {
    return `
    await prisma.species.upsert({
        where: { name: "${name}" },
        update: {},
        create: {
            name: "${name}",
            category: "${category}",
            uvcLevel: "${uvcLevel}",
            imageCount: ${imageCount},
            details: ${details.replace(/'/g, "\\'")}
        },
    })\n`;
}

// Read the CSV file and generate JavaScript function calls
fs.promises.readFile(inputFile, 'utf-8')
    .then((data: string) => {
        // Parse the CSV data line by line
        const lines: string[] = data.split('\n');
        lines.forEach(line => {
            const [name, category, uvcLevel, imageCount, ...detailsArray] = line.split(',');
            const details: string = detailsArray.join(',');

            // Generate JavaScript function call
            const jsFunctionCall: string = generateJavaScriptFunction(name, category, uvcLevel, parseInt(imageCount), details);

            // Write JavaScript function call to output file
            outputStream.write(jsFunctionCall);
        });

        console.log(`JavaScript function calls have been written to ${outputFile}`);
        outputStream.end();
    })
    .catch((error: any) => {
        console.error('Error reading file:', error);
    });