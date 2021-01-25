# What's this?
This is a template which could be used in combination with [alfred](https://www.alfredapp.com), [bear](https://bear.app) and the [alfred-bear workflow](https://github.com/jmeischner/alfred-bear).

This should serve as a starting point to build an own template to start creating OKRs. It should help brainstorm new OKRs for thyself or in a group session.

## How it looks
With the *Olive Dunk* theme it could look like
![Screenshot](https://github.com/jmeischner/alfred-bear-okrs/blob/main/screenshot.png?raw=true)

And as a small tidbit there are two "buttons" to add an objective and a key result.
![Buttons](https://github.com/jmeischner/alfred-bear-okrs/blob/main/buttons.gif?raw=true)

## Possible Placeholders for the Markdown Template
- **NEXT_QUARTER**
  The number of the upcoming quarter
- **YEAR**
  The year of the upcoming quarter
- **O_TEXT**
  The urlencoded text which gets included by clicking the `Add Objective` button
- **KR_TEXT**
  The urlencoded text which gets included by clicking the `Add Key Result` button
- **BEAR_TOKEN**
  The [bear token](https://bear.app/faq/X-callback-url%20Scheme%20documentation/#token-generation)
- **OKR_OVERVIEW_TITLE**
  Title of the bear note which holds the OKR overview -- to link back to it.

# Installation
Clone or download this repository and put it e.g. into your *bearTemplateDirectory* - `~/.bear-templates` - which is usually the place where your *bearTemplateIndex* - `index.yml` - file is located.

Then put the following lines to your *index.yml*

```yml
  - title: Create OKRs
    file: "<PathToRepo>/okrs.md"
    script: "<PathToRepo>/script.js"
    var:
      OKR_OVERVIEW_TITLE: "OKRs"
      BEAR_TOKEN: "916BE4-5DF6D5-E58E40"
      OBJECTIVE: >-
        ### This is my Objective
      KEYRESULT: >-
        - [ ] [::Score::] My Key Result
```

### Variables
**PathToRepo**
Path where you put the source code of this repository to. Either absolute or relative to the `index.yml`.

**OBJECTIVE**
Text which should get inserted by clicking the `Add Objective` button.

**KEYRESULT**
Text which should get inserted by clicking the `Add Key Result` button.
