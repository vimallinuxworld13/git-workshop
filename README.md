# git-workshop
#Day_1
#Git_GitHub_Workshop
30 Jan 2021

👉 What is SCM tool?
SCM tool is nothing but the source code management tool which helps us to maintain and keep track of all the changes that is introduced in a code over a time with the help of versioning, every change that is commited becomes a version and can rolled back if needed. Management/Maintance of code change activity is the Source code management and the tool like git that does it is called SCM tool.

👉 What is version control system?
Version Control system is to keep a track of changes made in source code through the versioning where each and every changes that are commited is stored in versions. There is a parent version to every child version. This system of keeping track through indexes is called version control system.

👉 What is the difference between snapshot and backup?
Snapshot is a in-time backup, which means that it will ony track the changes that is done and will only make those changes. However, backup is copying all the data from the source to destication location.

👉 What is staging and commit area?
Staging area is an area where the work space is tracked on line by line. This can be addition of a line, deletion of a line or the editing of the line. 
However, Commit are is the space where the code is stored by taking the snapshot of the work area or Work in progress area.

👉 What is Gitbash/GitHub?
Gitbash is a tool where you can get all the commands that is required to perform the Git tasks from the CLI. It is a Distributed Version Control System.
Github is the centralized Version COntrol System and all the codes can be saved in this centralized location to be accessd by different parties interested.

👉 How to do rollback in git?
We can rolback in git by the " git reset <commit id> <filename> " command. It will rolllback to the commit id provided in this command.

👉 What is branching and merge in git?
We use brancing to extract a code from main branch and then introduce change in code without affecting the main branch. Once these changes are tested and verified we can introduced these changes to main code.
The introduction of verified code from differnt branch to the main branch is called the merging.

👉 What is upstream / downstream?
Upstream is the branch that has additional commits and is ahead of the other branch and the downstream branch is the one that lags behind in the commit history.

👉 What is merge strategy?
Strategy to merge a branch to the other branch is called the merger strategy, generally it is any developer branch that is merger to main branch by a merging strategy. By defaukt the merging strategy used is the fast forward merge strategy.

👉 How to upload / download repository by git?
To upload a mentioned repository , we can use -- " git remote add <name> <repository url>" followed by "git push <name> <branch name> { git push origin master}".
0To downlaod -- " git clone < github repositery url>".

👉 What is the difference between pull and clone and fetch?
Git clone option is to get the whole github repository to local workspace. git fetch is for the changes and git pull option is ( fetch + merge ) option that refreshes the master branch.

👉 What is merge & diff tools?
marge tools helps in merging two branches by helping us resolve condlicts if any and diff tools help us have a view of various changes done with verions over time.

👉 How to set configration info?
Command that is used for configuration info is :_
git config --global user.name "first_name last_name"
git config --global user.email "emailaddress@domain.com"
