# Neovim

I started to use Neovim, because Definitions from [:h word](https://vimhelp.org/motion.txt.html#word) and [:h WORD](https://vimhelp.org/motion.txt.html#WORD) are quoted below to explain the difference between **word** and **WORD**.

> word A word consists of a sequence of letters, digits and underscores, or a sequence of other non-blank characters, separated with white space (spaces, tabs, `<EOL>`). This can be changed with the iskeyword option. An empty line is also considered to be a word.
> rently it's superior for programming (I'm jealous of people that know every shortcuts / motions).


[

!https://raw.githubusercontent.com/mhinz/vim-galore/master/static/images/logo-vim-galore.png

https://github.com/mhinz/vim-galorehttps://github.com/akrawchyk/awesome-vim

# vim with zsh

https://github.com/jeffreytse/zsh-vi-mode

# neovim

[*Neovim](https://neovim.io/) is a Vim-based text editor engineered for extensibility and usability, to encourage new applications and contributions.*https://github.com/rockerBOO/awesome-neovim

# SpaceVim

!https://user-images.githubusercontent.com/13142418/176910121-8e7ca78f-8434-4ac7-9b02-08c4d15f8ad9.png

SpaceVim is a community-driven modular Vim/Neovim distribution. It manages collections of plugins in layers, which help to collect related plugins together to provide IDE-like features.
https://github.com/SpaceVim/SpaceVim

# How to use VIM

---

- [ ]  [Open Vim](https://www.openvim.com/) - Interactive Vim tutorial.
- [ ]  [Vim Adventures](https://vim-adventures.com/) - Learning Vim while playing a game.
- [ ]  [Vim Genius](http://vimgenius.com/) - Increase your speed and improve your muscle memory with Vim Genius.
- [ ]  https://learnbyexample.github.io/vim_reference/Normal-mode.html

## modes

there is 2 modes `normal` and `insert`, by default we use normal, we switch to the insert with the letter `i`.

### normal mode

In normal mode you can navigate in the code with the letters  `h`, `j`, `k`, `l`. Tester en avec un clavier azerty.

## [Word motions](https://learnbyexample.github.io/vim_reference/Normal-mode.html#word-motions)

Definitions from [:h word](https://vimhelp.org/motion.txt.html#word) and [:h WORD](https://vimhelp.org/motion.txt.html#WORD) are quoted below to explain the difference between **word** and **WORD**.

> word A word consists of a sequence of letters, digits and underscores, or a sequence of other non-blank characters, separated with white space (spaces, tabs, <EOL>). This can be changed with the iskeyword option. An empty line is also considered to be a word.
>

> WORD A WORD consists of a sequence of non-blank characters, separated with white space. An empty line is also considered to be a WORD.
>
- w move to the start of the next word
- W move to the start of the next WORD
    - `192.1.168.43;hello` is considered as a single WORD, but has multiple words
- b move to the beginning of the current word if the cursor is *not* at the start of word. Otherwise, move to the beginning of the previous word
- B move to the beginning of the current WORD if the cursor is *not* at the start of WORD. Otherwise, move to the beginning of the previous WORD
- e move to the end of the current word if cursor is *not* at the end of word. Otherwise, move to the end of next word
- E move to the end of the current WORD if cursor is *not* at the end of WORD. Otherwise, move to the end of next WORD
- ge move to the end of the previous word
- gE move to the end of the previous WORD
- 3w move 3 words forward
    - Similarly, a number can be prefixed for all the other commands mentioned above