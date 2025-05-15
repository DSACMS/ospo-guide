import json
import os

from codejson_index_generator import IndexGenerator

AGENCY_CODEJSON_DIR = "agency-indexes"
VERSION = '0.0.1'

def main():
    

    with open('codegov.json','r') as file:
        codegovDict = json.load(file)

    github_key = os.getenv("GITHUB_KEY")

    try:
        for agency in codegovDict.keys():

            
            indexGen = IndexGenerator(
                agency = agency,
                verison = VERSION, 
                token = github_key
            )


            try:
                os.mkdir(AGENCY_CODEJSON_DIR)
            except FileExistsError:
                print(f"File already exists: {AGENCY_CODEJSON_DIR}")

            orgs = codegovDict[agency]["orgs"]
            for org in orgs:
                org = org.strip()
                indexGen.process_organization(org)

                indexGen.save_organization_files(org, AGENCY_CODEJSON_DIR)

            indexGen.save_index(os.path.join(AGENCY_CODEJSON_DIR, agency + "_index.json"))
            print(f"\nIndexing complete. Results saved to {AGENCY_CODEJSON_DIR}")
        
    except Exception as e:
        print(f"Error: {e}")
        return

if __name__ == "__main__":
    main()