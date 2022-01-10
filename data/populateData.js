import fs from 'fs';

async function populateData(filepath) {
    try {
        let data = await fs.promises.readFile(`${filepath}`, "utf8", (err, jsonString) => {
            // console.log(jsonString);
        })
        return data;
    }
    catch (err) {
        console.log("File read failed:", err, "\nGo to /refresh to collect data.");
    }
};

export { populateData };