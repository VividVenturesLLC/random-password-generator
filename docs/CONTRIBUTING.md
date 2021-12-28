# Contributing

## In your editing environment

1. Fork the project on github into your own workspace. See fork-a-repo [help](https://docs.github.com/en/get-started/quickstart/fork-a-repo).
[![github-fork](./assets/images/fork-the-project.png)](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

2. Make a clone of your fork of the project into a working directory on your computer. See cloning-your-forked-repository [help](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository).
[![code-button](./assets/images/code-button.png)](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository)

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
   # make sure the project is on the develop branch
   git checkout develop
    ```

4. Make the proposed changes

   ```bash
   vim CONTRIBUTING.md # (or whatever)
   :wq  # write to file and quit vim
   ```

   - test the changes 🔥

5. Commit and push the changes to your repository

   ```bash
   # make sure the project is on the develop branch
   git status
   git add <file-name-that-changed-here>
   # use https://commitlint.io/
   #     to help create a properly linted commit message
   git commit -m "docs(contributing): add push description"
   git push origin
   ```

6. Create a pull request from your fork to the upstream project. See creating-a-pull-request-from-a-fork [help](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

   [![create-a-pull-request.png](./assets/images/create-a-pull-request.png)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
