# git-workshop

## Additional Research

[Multiple github accounts on the same computer?](https://stackoverflow.com/questions/3860112/multiple-github-accounts-on-the-same-computer) <br/>
[Git Push & Pull with Two different accounts and Two different users on the same machine](https://therajanmaurya.medium.com/git-push-pull-with-two-different-account-and-two-different-user-on-same-machine-a85f9ee7ec61) <br/>

#### git fetch vs pull
git fetch is the command that tells your local git to retrieve the latest meta-data info from the original (yet doesn't do any file transferring. It's more like just checking to see if there are any changes available). git pull on the other hand does that AND brings (copy) those changes from the remote repository.

### …or create a new repository on the command line
```
echo "# myreactapp" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/janardanchavan/myreactapp.git
git push -u origin main
```

### …or push an existing repository from the command line
```
git remote add origin https://github.com/janardanchavan/myreactapp.git
git branch -M main
git push -u origin main
```

### …or import code from another repository
```
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.
```

### To remove remote use this:
```
git remote remove origin
```
OR
```
git remote rem origin
```

### Instead of removing and re-adding, you can do this:
```
git remote set-url origin git://new.url.here
```


