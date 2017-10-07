# README

### Getting started:

```bash
git clone git@github.com:noctiflow/template.git projectname
cd projectname
git remote rm origin
bundle install
rails db:drop
rails g rename:app_to <new project name>
git init
rails db:create db:migrate
rails s

```

### Deployment:

```bash
heroku create
git push heroku master
```
