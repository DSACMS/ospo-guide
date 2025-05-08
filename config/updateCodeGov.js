const fs = require("fs").promises
const path = require('path')

// these will always stay constant
const CONFIG = {
  testAgencyDirectory: path.resolve(__dirname, "../test-agency-indexes"),
  agencyDirectory: path.resolve(__dirname, "../agency-indexes"),
  outputFile: path.resolve(__dirname, "../codegov.json"),
  regex: /^(.*?)-.*\.json$/  
}

/* updateCodeGov() was made pretty non modular but this could be changed at a later time. 
i focused on the fact that the agencyDirectory will always contain jsons with the same name convention 
but that prove to be a disadvantage down the road */

// updates the codegov.json file with new data found from ./agency-indexes
async function updateCodeGov(isTesting = false) {
  try {
    const updatedJSON = {}
    directoryPath = isTesting === true ? CONFIG.testAgencyDirectory : CONFIG.agencyDirectory

    // read all files in the directory
    const filenames = await fs.readdir(directoryPath)
    
    // we know that the directory will only contain json files so dont need to check for non jsons
    for (const file of filenames) {
      const filePath = path.join(directoryPath, file)
      
      try {
        const content = await fs.readFile(filePath, "utf-8")
        const jsonData = JSON.parse(content)
        
        // store the agency name only for readability in codegov.json 
        const matches = file.match(CONFIG.regex)
        const agencyName = matches[1]

        updatedJSON[agencyName] = jsonData
        console.log(`✅ Successfully processed: ${file}`)
      } catch (error) {
        console.error(`❌ Error processing file: ${file}`, error)
      }
    }
    
    // actually update the codegov.json file
    const jsonString = JSON.stringify(updatedJSON, null, 2)
    await fs.writeFile(CONFIG.outputFile, jsonString)
    
    return updatedJSON
  } catch (error) {
    console.error("❌ Failed to update codegov.json:", error)
  }
}

updateCodeGov(isTesting = true)