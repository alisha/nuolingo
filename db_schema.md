# Set

```
{
    _id: 1,
    name: "table manners",
    country: "Japan"
}
```

# Flashcard

```
{
    _id: 1,
    set_id: 1,
    front_text: "Hot towels",
    back_text: "Only use the hot towel for your hands"
}
```

# Quiz

```
{
    _id: 1,
    flashcard_id: 1,
    prompt: "question?",
    answers: [
        {
            text: "choice 1",
            isCorrect: false
        },
        {
            text: "choice 2",
            isCorrect: true
        },
        {
            text: "choice 3",
            isCorrect: false
        }
    ]
}
```
