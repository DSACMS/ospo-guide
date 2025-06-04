---
title: Using Bulk_extractor
description: 'Guide on using Bulk_Extractor for secret scanning'
permalink: /outbound/bulk_extractor/
layout: layouts/page
section: outbound
tags: ospo
eleventyNavigation:
  parent: ospo-outbound
  key: ospo-outbound-bulkextractor
  order: 11
  title: Using Bulk_extractor
sidenav: true
sticky_sidenav: true
---

## Outbound Reviews: Scanning Tools for PII and Secrets

**[Bulk_extractor](https://github.com/simsong/bulk_extractor)** is a forensic tool used to extract useful information from disk images, files and other digital media. It looks for strings of interest, such as email addresses, URLs, credit card numbers and other artifacts. Unlike traditional forensic tools, **bulk_extractor** does not mount or parse the file system, making it faster and more suitable for unstructured data. It is commonly used for cybersecurity investigations, data recovery and digital forensics.

**[Gitleaks](https://github.com/gitleaks/gitleaks)** is an open-source tool designed to detect and prevent secrets (like API keys, tokens and passwords) from being committed to Git repositories. It scans repositories, including their entire history, for hardcoded secrets and generates reports to help developers address potential security vulnerabilities. **Gitleaks** is specifically tailored to source code repositories, making it highly effective in development environments.

### Uses

| Checks for                          | GitLeaks | Bulk-Extractor |
| :---------------------------------- | :------- | :------------- |
| Emails                              |          | ✅             |
| Credit Cards                        |          | ✅             |
| File fragments (JPEGs, PDF headers) |          | ✅             |
| JSON snippets                       |          | ✅             |
| Phone numbers                       |          | ✅             |
| URLs                                |          | ✅             |
| IP addresses                        |          | ✅             |
| DNS queries                         |          | ✅             |
| Base64-encoded data                 |          | ✅             |
| PII                                 |          | ✅             |
| API keys                            | ✅       |                |
| SSH keys                            | ✅       |                |
| Hardcoded passwords                 | ✅       |                |
| Tokens                              | ✅       |                |
| Secrets                             | ✅       | ✅             |

### Key Differences

Bulk-extractor:

- Analyzes raw data and disk images
- Digital forensics and data recovery
- Source: Files, disk images, raw data

GitLeaks:

- Scan for Git repo secrets
- Source code and secrets
- Used for repos

### Bulk-Extractor Installation for Mac

Ensure you are installing bulk_extractor in your local drive not within the repository or disk you are checking.

```
 $ brew install autoconf
 $ brew install automake
 $ brew install libtool
 $ brew install pkg-config

 $ git clone --recurse-submodules https://github.com/simsong/bulk_extractor.git

 $ cd bulk\_extractor

 $ ./bootstrap.sh
 $ ./configure
 $ make
 $ make install
```

### Bulk-Extractor Installation for Windows

**Note:** Currently bulk_extractor 2.1 does not build on windows, but bulk_extractor 2.0 does.

- Download the Bulk Extractor Windows binary from the [official website](https://github.com/simsong/bulk_extractor).
- Extract the downloaded zip file to your preferred directory.
- Add the Bulk Extractor binary folder to your system PATH:

  - Press Win + R, type sysdm.cpl, and hit Enter.
  - Navigate to the "Advanced" tab and click on "Environment Variables."
  - Under "System Variables," locate and edit the Path variable.
  - Add the path to the Bulk Extractor folder and click OK.

  Or

- Start with a clean Virtual Machine (VM) and use these commands:

```
 $ git clone --recurse-submodules https://github.com/simsong/bulk_extractor.git
 $ cd bulk_extractor/etc
 $ bash CONFIGURE_FEDORA36_win64.bash
 $ cd ..
 $ make win64
```

- Open Command Prompt and test the installation:

```
bulk_extractor.exe -h
```

### Bulk-Extractor Installation for Linux

- Update your package manager:

```
  $ sudo apt-get update
```

- Install required dependencies

```
  $ sudo apt-get install -y build-essential cmake
```

- Clone the Bulk Extractor repository and build the source code:

```
  $ git clone https://github.com/simsong/bulk_extractor.git
  $ cd bulk_extractor
  $ mkdir build && cd build
  $ cmake ..
  $ make
  $ sudo make install
```

- Verify installation:

```
  $ bulk_extractor -h
```

### How to use

- Create the directory you would like to save the output into. This can be in the repository being checked but the location is up to you.
- Alternatively, if the repository you are checking has a directory already available for storing test results, you can use that.

You can run the basic:

```
$ bulk_extractor -o </path/to/output_directory> <path/to/input_file_or_image>
```

You can also extract only certain files:  
Example:

```
$ bulk_extractor -o <output_directory> -E email,input <input_file_or_image>
```

Outputs are saved as `.txt` files.

---

### When Not to Use Bulk Extractor

- **Highly Structured File Systems**: When specific file system metadata needs to be preserved.
- **Real-Time Analysis**: It’s not designed for active/live systems.
- **Deep Contextual Analysis**: Bulk Extractor focuses on raw data extraction and lacks contextual file relationships.

### Language use

| Language   | Suitability | Notes                                                                  |
| :--------- | :---------- | :--------------------------------------------------------------------- |
| Python     | ✅ Great    | Great for libraries and easy to use.                                   |
| Java       | ✅ Great    | Well suited.                                                           |
| C++        | ✅ Great    | High performance and control over resources.                           |
| JavaScript | ⚠️ Moderate | Good for web based extraction, but less efficient for bulk extraction. |
| Ruby       | ⚠️ Moderate | Can handle small to medium scale tasks.                                |
| R          | ⚠️ Moderate | Excellent for data analysis, but less efficient for bulk extraction.   |
| Bash       | ❌ Poor     | Limited for large-scale processing.                                    |
