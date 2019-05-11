# Dashboard for command, control and communication


## Geting started
*Development*
FOr the first time only pull the code and install the packages locally
```
git clone git@github.com:haseeb1431/iosl-dc3.git
npm install
npm start
```
after that every time, just run `git pull` to get latest

```
git pull
git branch newbranchName #create a new branch for the task you want to work on 
git push # once changes are complete, do the git push and then we will merge
```
*Build*
```
npm run build
```

### Git Commands
```
git clone URL #to copy the repo
Git status #changed files in local repo
git diff #changes to tracked files
git add . #add all the files to next commit or stage them
git reset filename #
git commit #commit staged changes
git commit -a #commit all changed files
```
### Branches
```git branch -av #list all branches
git checkout <branch> #switch to different branch
git branch #will show the branch
git branch newbranchName #create a new branch from the current commit
git diff branchB...branchA #diff of what is in A that is not in B 
```

### Git Rebase
```
Git checkout develop
git pull origin develop #git pull from the origin
git checkout branchName
git merge develop #for conflicts, do #gitstash and then merge and then git stash pop
git push
```

### Git Cheat sheet
https://education.github.com/git-cheat-sheet-education.pdf

### working on our own branch
we need to do these 3 things after you already got the code on your local machine
```git pull
git checkout anubhav #or your branch name
#Haseeb: once changes are done, do commit and push
git commit -a -m "what are the changes you did"
git push
```

## Project File structure
```
./src/
├── assets
│   ├── images
│   └── styles
│       ├── base  
│       ├── base.scss
│       ├── icons.scss
│       └── react-dates
├── components
│   ├── FormInputs
│   │   ├── Checkbox.js
│   │   ├── Radio.js
│   │   ├── TextInput.js
│   │   ├── index.js
│   │   └── renderField.js
│   ├── MobileMenu.js
│   ├── MyBigCalendar
│   │   ├── Toolbar.js
│   │   └── index.js
│   ├── SideBar
│   │   ├── Nav.js
│   │   ├── UserInfo.js
│   │   └── index.js
│   ├── Switch.js
│   ├── Tags.js
│   └── ThemeOptions.js
├── config
│   └── configureStore.js
├── index.js
├── pages
│   ├── Calendar
│   │   └── index.js
│   ├── Charts
│   │   ├── Nasdaq.js
│   │   ├── PerformanceChart.js
│   │   ├── PublicPreference.js
│   │   ├── UserBehavior.js
│   │   └── index.js
│   ├── Components
│   │   ├── Buttons
│   │   │   ├── ButtonGroups.js
│   │   │   ├── ButtonSizes.js
│   │   │   ├── ButtonStyles.js
│   │   │   ├── ButtonsWithLabel.js
│   │   │   ├── Colors.js
│   │   │   ├── Pagination.js
│   │   │   ├── SocialButtons.js
│   │   │   └── index.js
│   │   ├── Grid
│   │   │   ├── GridCollection.js
│   │   │   ├── Paragraph.js
│   │   │   └── index.js
│   │   ├── Icons.js
│   │   ├── Notifications.js
│   │   ├── Panels
│   │   │   ├── AccordionGroup.js
│   │   │   ├── PageSubcategories.js
│   │   │   ├── TabGroup.js
│   │   │   └── index.js
│   │   ├── SweetAlert.js
│   │   ├── Typography.js
│   │   └── index.js
│   ├── Dashboard
│   │   ├── EmailChart.js
│   │   ├── SalesChart.js
│   │   ├── Tasks.js
│   │   ├── UserBehaviorChart.js
│   │   └── index.js
│   ├── Forms
│   │   ├── ExtendedForms
│   │   │   ├── DatePicker.js
│   │   │   ├── Switches.js
│   │   │   ├── TagSection.js
│   │   │   └── index.js
│   │   ├── RegularForms
│   │   │   ├── FormElements.js
│   │   │   ├── HorizontalForm.js
│   │   │   ├── StackedForm.js
│   │   │   └── index.js
│   │   ├── ValidationForms
│   │   │   └── index.js
│   │   └── index.js
│   ├── Icons
│   │   └── index.js
│   ├── Main
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── index.js
│   ├── MapsPage
│   │   ├── GoogleMap.js
│   │   ├── Map.js
│   │   ├── VectorMap.js
│   │   └── index.js
│   ├── Tables
│   │   ├── ExtendedTables
│   │   │   ├── BigTable.js
│   │   │   ├── TableWithLinks.js
│   │   │   ├── TableWithSwitch.js
│   │   │   └── index.js
│   │   ├── ReactBootstrapTable
│   │   │   └── index.js
│   │   ├── RegularTables
│   │   │   ├── PlainBackgroundTable.js
│   │   │   ├── StripedTable.js
│   │   │   └── index.js
│   │   ├── generateData.js
│   │   └── index.js
│   └── UserProfile
│       ├── ProfileForm.js
│       ├── UserInfo.js
│       └── index.js
├── reducers
│   ├── Auth.js
│   ├── Layout.js
│   ├── ThemeOptions.js
│   └── index.js
└── registerServiceWorker.js
```

## Author
IOSL Team

![Crystal Dashboard](https://user-images.githubusercontent.com/1154740/31934597-c2b055dc-b8d6-11e7-869d-48e6f8992718.png)


