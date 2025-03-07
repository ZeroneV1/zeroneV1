# JPTR Agario

My very own Protocol 6 Agar.io client for private servers

<p align="center">
  <img src="https://cdn.glitch.global/2d6e8d70-57a5-4dd2-b4bb-c1505f83f020/JPTRAGAR.png" width="622px" title="hover text">
</p>



## Information
This is a heavily modified version of [Cigar2](https://github.com/Cigar2/Cigar2). Originally this project started back in 2020 during quaranetine until I decided to leave on the shelf. I finally got back to it and made a new version of Cigar2 because it hasn't had a update since December of 2021.

## Installation
### Windows

1. Download and install node.js: https://nodejs.org/en/download/
2. Download this repo
3. Unzip jptr-agario code into some folder.
4. Run `npm i` to get all the required modules to run it.
5. Run `npm start` to start it / you can also run `npm run dev` for dev mode.
6. Go to `localhost:1337`, and you're in!

### Linux:
```bash
# First update your packages:
sudo apt-get update

# Install git:
sudo apt-get install git

# Install node.js:
sudo apt-get install nodejs-legacy npm

# Clone jptr-agario:
git clone git://github.com/imadejptr/jptr-agario.git

# Install dependencies:
npm i

# Run the server:
npm start
```

>---

## How to add skins
It's pretty easy, go over to the `📂 src` folder and find `skinList.json`
From there you can add your skins there, heres a template if you need it:
```json

{
    "skins": [
        {
            "src": "image url",
            "label": "skin name"
        }, //comma is there if you wanna add multiple, but if its just one or the last one you drop the comma.
    ]
}

```

## How to add servers
Again, pretty easy to do. Go over to the `📂 src` folder and find `index.html`
From there, find ```<select id="gamemode" class="form-control" onchange="setserver(this.value)" required></select>``` and add the following:
```
<option value="server url.com">name of server</option>
```

## Credits
* [Cigar2](https://github.com/Cigar2/Cigar2)
* [Agarian2 MultiOgar](https://github.com/agarian-2/MultiOgar)
* [OgarII](https://github.com/Luka967/OgarII)
* [Agar.io Private Servers](https://discord.gg/66X2ESb)
