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

            agency_dir = os.path.join(AGENCY_CODEJSON_DIR, agency)

            try:
                os.mkdir(AGENCY_CODEJSON_DIR)
            except FileExistsError:
                print(f"File already exists: {AGENCY_CODEJSON_DIR}")

            try:
                os.mkdir(agency_dir)
            except FileExistsError:
                print(f"File already exists: {agency_dir}")

            orgs = codegovDict[agency]["orgs"]
            for org in orgs:
                org = org.strip()
                indexGen.process_organization(org)

                indexGen.save_organization_files(org, agency_dir)

            indexGen.save_index(os.path.join(agency_dir, agency + "_index.json"))
            print(f"\nIndexing complete. Results saved to {agency_dir}")
        
    except Exception as e:
        print(f"Error: {e}")
        return

if __name__ == "__main__":
    main()