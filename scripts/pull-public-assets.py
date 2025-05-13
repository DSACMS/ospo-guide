import json
import base64
import argparse
import os

from codejson_index_generator import IndexGenerator

AGENCY_CODEJSON_DIR = "agency-indexes"

def main():
    parser = argparse.ArgumentParser(
        description = "Create an index of code.json files within agency organizations for code.gov compliance.",
        epilog = "Examples:"
               "  python pull-public-assets.py --agency CMS --orgs 'org1,org2' --OR-- "
               "  python pull-public-assets.py --agency TTS --orgs 'GSA,USDC' --version 2.0.0"
    )

    parser.add_argument(
        "--agency", 
        required = True,
        help = "Agency name for code.json index creation"
    )
    parser.add_argument(
        "--orgs", 
        required = True,
        help = "Comma-separated list of GitHub organizations in your agency"
    )

    parser.add_argument(
        "--version", 
        default = "1.0.0",
        help = "Code.json file version (e.g., 1.0.0, 2.1.0)"
    )

    args = parser.parse_args()
    github_key = os.getenv("GITHUB_KEY")

    try:
        indexGen = IndexGenerator(
            agency = args.agency,
            verison = args.version, 
            token = github_key
        )

        agency_dir = os.path.join(AGENCY_CODEJSON_DIR, args.agency)
        try:
            os.mkdir(agency_dir)
        except FileExistsError:
            print(f"File already exists: {agency_dir}")

        for org in args.orgs.split(","):
            org = org.strip()
            indexGen.process_organization(org)

            indexGen.save_organization_files(org, agency_dir)

        indexGen.save_index(os.path.join(agency_dir, args.agency, "_index.json"))
        print(f"\nIndexing complete. Results saved to {agency_dir}")
        
    except Exception as e:
        print(f"Error: {e}")
        return

if __name__ == "__main__":
    main()