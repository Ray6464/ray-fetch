# ray-fetch
A NodeJS Fetching utility for ray-userland, makes it easier to work with Ray-Towers. Based on Node-Fetch!

# Installation & Usage
To install:
```
npm i -g ray-fetch
```

To make a request to a Ray-Tower to request the link of a file:
```
ray-fetch -req -tower -file file1.mp4 -ip 192.168.1.114:3030 -protocol http: -url http://192.168.1.109:3001/request/
```
The `-req` flag tells ray-fetch to make a request.
The `-tower` flag tells us that the request is to a `Ray-Tower`.
The `-file` flags gives us the file name.
The `-ip` flag gives us the ip address where the file is hosted.
The `-protocol` flag gives us the protocol used by the file host to host the file.
The `-url` flag gives us the url of the tower, or if there is no tower then the file host url is used, in which case flags like `-file`, `-ip`, `-protocol`, `-tower`, etc. aren't needed!

To make a request to a Ray-Tower to download a file (Only possible if the provided link is alive up to this point):
```
ray-fetch -res -tower -url http://192.168.1.109:3001/fetch/ -file file1.mp4
```
If the file is made available by the Ray-Tower yet, then it will be downloaded, else the program will log "Requested Resource no found!".

# LICENSE
MIT License

Copyright (c) 2021 Ray Voice

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

