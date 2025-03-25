import fs from 'node:fs';

function addToJson(pathFile, datas) {
    fs.readFile(pathFile, 'utf8', (error, data) => {

        if (error) {
            if (error.code === 'ENOENT') {
                data = '[]'; 
            } else {
                console.error(error);
                return;
            }
        }
    
        try {
            let jsonData = JSON.parse(data);
    
            if (!Array.isArray(jsonData)) {
                jsonData = [];
            }
    
            jsonData.push(datas);
    
            fs.writeFile(pathFile, JSON.stringify(jsonData, null, 2), err => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('Text added successfully');
                }
            });
    
        } catch (parseError) {
            console.error("Erreur de parsing JSON :", parseError);
        }

    });    
};

export default addToJson;