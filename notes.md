# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)
I'm not for sure what we're supposed to do here yet, but I'm practicing pushing from vs code to github.
Edit things in vs code, to push it you go to sources the branch thing, press the plus to stage the changes, and then commit. Refresh github and it should show up. 

## GitHub

### VS Code

SAVE THE FILE

Go to source on the side (branch looking thing)
Here you can charge changes and commit them to make sure everything is synced up
Or from the terminal, git commit and git pull

To open it, ctrl shift p, markdowm: open preview on the side

### Github

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.81.96.130
Launching my AMI I initially put it on a private subnet. Even though it had a public IP address and the security group was right, I wasn't able to connect to it.

### Application 

HTTPS - functionality like web browsing

### Transport
TCP- You need everything to get there - amazon order
UDP - Video games, it's ok if not absolutely everything shows up immediatley

### Internet 

IP - Connections

### Link

Fiber, Hardware - Physical Connections

### DNS

Look up IP adress, send it back to device, then send it to the web server
Go to nslookup or whois to see if you registered correctly

- AAAA: Adress
- CNAME: Canonical Name, Alias. Finds this and the IP adress related to it
- NS: Name server, Authority for queries and proof of ownership
- TEXT: Metadata, Policies and Verification
- 

## Caddy

Make sure to hit the keyboard shortcut to get into insert mode.  [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This is the SRUCTURE!!!!

!DOCTYPE html, html, head, title, body
Head and title aren't in the body, it's in the tab
UTF-8 gives you emojis!
I have examples in a vs code file

Can have sections, <section and <aside.
Header and footer on each page that has my name and a link to github


## CSS

This is the STYLE!!!

CodePen has a lot of css examples

You can use flex to resize elements automatically and grid to move cards around.
All of my practice is in the folder

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
