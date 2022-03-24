---
sidebar_position: 1
title: What is the Story?
---

The Story is the main object of interaction in Stories. It connects the isolated environment and the component. The Story is a render function that reflects the state of the component. In order for Stories to distinguish regular files from stories, naming is used with the stories.js prefix.

The Story is the main objects of interaction in Stories. They are the ones that connect the development environment and the components. In order for Stories to distinguish regular files from stories, naming is used with the stories.js prefix. This rule, like any other, can be changed by expanding the tool configuration.

Once a story is created, it appears in the UI along with the rendered state of the component. The stories.js files include a number of stories, where each one is a render function that reflects the state of the component. It is considered good practice if one history file describes one component in different states.