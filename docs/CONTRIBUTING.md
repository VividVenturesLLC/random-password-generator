# Contributing

## In your editing environment

1. Fork the project on github into your own workspace
![github-fork](./assets/images/fork-the-project.png)

2. Make a clone of your fork of the project into a working directory on your computer.
![code-button](./assets/images/code-button.png)

   - click on the code button
   - then click on the copy button
   - as shown in the terminal below paste your copied link

    ```bash
    # in a terminal on the command line type:
    cd <my_working_directory_name>

    # git clone <paste link here>
    git clone https://github.com/<my-user-name-here>/random-password-generator.git
    ```

3. Change into the newly acquired directory

    ```bash
    cd random-password-generator
    ```

4. Make the proposed changes

   ```bash
   vim index.html # (or whatever)
   :wq  # write to file and quit vim
   ```

   - test the changes 🔥

5. Commit and push the changes to your repository

   ```bash
   # make sure the project is on the develop branch
   git status
   git add <file-name-that-changed-here>
   # use https://commitlint.io/
   #     to help create linted commit message
   git commit -m "docs(contributing): add push description"
   git push origin
   ```
